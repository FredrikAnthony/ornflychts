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
    <p className="card mt-8 p-6 text-sm text-ink/70 dark:text-ivory/70">
      Ordernummer (Stripe-session): <span className="font-mono">{sessionId}</span>
    </p>
  );
}
