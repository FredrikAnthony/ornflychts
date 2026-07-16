"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";

export function AddToCartButton({ slug, label = "Lägg i varukorg" }: { slug: string; label?: string }) {
  const cart = useCart();

  return (
    <button
      type="button"
      onClick={() => cart.addItem(slug)}
      className="inline-flex min-h-11 items-center justify-center gap-2 border border-forest bg-forest px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-ivory transition duration-300 hover:bg-forest/90 hover:shadow-lg dark:border-brass dark:bg-brass dark:text-ink dark:hover:bg-brass/90 dark:hover:shadow-lg"
    >
      <ShoppingBag aria-hidden="true" size={16} />
      {label}
    </button>
  );
}

export function CartCheckoutLink() {
  return (
    <Link href="/varukorg" className="inline-flex min-h-11 items-center justify-center gap-2 border border-forest px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-forest transition duration-300 hover:bg-forest/5 dark:border-brass dark:text-brass dark:hover:bg-brass/10">
      Till varukorgen
    </Link>
  );
}
