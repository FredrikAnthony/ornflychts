"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";

export function AddToCartButton({ slug, label = "Lägg i varukorg" }: { slug: string; label?: string }) {
  const cart = useCart();

  return (
    <button type="button" onClick={() => cart.addItem(slug)} className="link-button-solid">
      <ShoppingBag aria-hidden="true" size={16} />
      {label}
    </button>
  );
}

export function CartCheckoutLink() {
  return (
    <Link href="/varukorg" className="link-button">
      Till varukorgen
    </Link>
  );
}
