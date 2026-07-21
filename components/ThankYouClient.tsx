"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "./CartProvider";

export function ThankYouClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const cart = useCart();

  useEffect(() => {
    if (sessionId) {
      cart.clearCart();
    }
    // Only run when the session_id itself changes, not on every cart update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  if (!sessionId) return null;

  return (
    <div className="card mt-8 max-w-full p-5 text-sm text-ink/70 dark:text-ivory/70 sm:p-6">
      <p className="font-semibold">Ordernummer</p>
      <p className="mt-2 break-all font-mono text-xs leading-6 text-ink/62 dark:text-ivory/62 sm:text-sm">{sessionId}</p>
    </div>
  );
}
