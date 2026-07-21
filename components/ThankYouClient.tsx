"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "./CartProvider";

export function ThankYouClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const cart = useCart();
  const shortReference = sessionId ? `${sessionId.slice(0, 14)}...${sessionId.slice(-8)}` : "";

  useEffect(() => {
    if (sessionId) {
      cart.clearCart();
    }
    // Only run when the session_id itself changes, not on every cart update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  if (!sessionId) return null;

  return (
    <div className="card mt-8 max-w-full p-5 text-sm leading-7 text-ink/70 dark:text-ivory/70 sm:p-6">
      <p className="font-semibold text-ink dark:text-ivory">Betalningsreferens</p>
      <p className="mt-2 font-mono text-sm text-ink/68 dark:text-ivory/68" title={sessionId}>
        {shortReference}
      </p>
      <p className="mt-3 text-xs leading-6 text-ink/56 dark:text-ivory/56">
        Ange referensen om du kontaktar oss om din beställning.
      </p>
    </div>
  );
}
