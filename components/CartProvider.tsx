"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartLine } from "@/lib/cart";

type CartContextValue = {
  lines: CartLine[];
  itemCount: number;
  addItem: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  removeItem: (slug: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "ornflychts-cart";

function normalizeQuantity(quantity: unknown) {
  const parsed = typeof quantity === "number" ? quantity : Number(quantity);
  if (!Number.isFinite(parsed)) return 1;
  return Math.max(1, Math.min(20, Math.floor(parsed)));
}

function normalizeLines(lines: unknown): CartLine[] {
  if (!Array.isArray(lines)) return [];
  return lines
    .filter((line): line is { slug: unknown; quantity: unknown } => typeof line === "object" && line !== null)
    .filter((line) => typeof line.slug === "string" && line.slug.length > 0)
    .map((line) => ({ slug: line.slug as string, quantity: normalizeQuantity(line.quantity) }));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) setLines(normalizeLines(JSON.parse(stored)));
    } catch {
      setLines([]);
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(normalizeLines(lines)));
    } catch {
      // The cart still works for the current session if storage is unavailable.
    }
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    return {
      lines,
      itemCount: lines.reduce((total, line) => total + line.quantity, 0),
      addItem(slug) {
        setLines((current) => {
          const existing = current.find((line) => line.slug === slug);
          if (existing) {
            return current.map((line) => (line.slug === slug ? { ...line, quantity: Math.min(line.quantity + 1, 20) } : line));
          }
          return [...current, { slug, quantity: 1 }];
        });
      },
      setQuantity(slug, quantity) {
        const nextQuantity = normalizeQuantity(quantity);
        setLines((current) => current.map((line) => (line.slug === slug ? { ...line, quantity: nextQuantity } : line)));
      },
      removeItem(slug) {
        setLines((current) => current.filter((line) => line.slug !== slug));
      },
      clearCart() {
        setLines([]);
      }
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
