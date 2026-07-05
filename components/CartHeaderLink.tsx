"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./CartProvider";

export function CartHeaderLink() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/varukorg"
      className="relative inline-flex size-10 items-center justify-center border border-line bg-paper text-ink transition hover:border-brass dark:border-white/15 dark:bg-ink dark:text-ivory"
      aria-label={`Varukorg, ${itemCount} varor`}
      title="Varukorg"
    >
      <ShoppingBag aria-hidden="true" size={18} />
      {itemCount > 0 ? (
        <span className="absolute ml-7 mt-[-1.7rem] grid min-w-5 place-items-center rounded-full bg-brass px-1 text-[0.65rem] font-semibold text-ink">
          {itemCount}
        </span>
      ) : null}
    </Link>
  );
}
