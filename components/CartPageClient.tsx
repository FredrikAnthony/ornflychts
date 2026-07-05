"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { formatSek, getCartSummary } from "@/lib/cart";
import { useCart } from "./CartProvider";

export function CartPageClient() {
  const cart = useCart();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const summary = useMemo(() => getCartSummary(cart.lines), [cart.lines]);

  async function checkout() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ items: cart.lines, email })
      });
      const data = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !data.url) throw new Error(data.error ?? "Kassan kunde inte startas.");
      window.location.href = data.url;
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Kassan kunde inte startas.");
      setLoading(false);
    }
  }

  if (summary.items.length === 0) {
    return (
      <div className="card mt-10 p-8">
        <p className="text-lg text-ink/74 dark:text-ivory/74">Varukorgen är tom.</p>
        <Link href="/bocker" className="link-button mt-6">
          Utforska böcker
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="grid gap-4">
        {summary.items.map((item) => (
          <article key={item.slug} className="card grid gap-5 p-5 sm:grid-cols-[96px_1fr]">
            <Image src={item.image} alt="" width={160} height={220} className="h-32 w-auto object-contain shadow-lg" />
            <div>
              <h2 className="font-serif text-2xl text-ink dark:text-ivory">{item.title}</h2>
              <p className="mt-2 text-sm italic text-ink/62 dark:text-ivory/62">{item.subtitle}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <label className="text-sm text-ink/70 dark:text-ivory/70">
                  Antal
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={item.quantity}
                    onChange={(event) => cart.setQuantity(item.slug, Number(event.target.value))}
                    className="ml-3 w-20 border border-line bg-paper px-3 py-2 text-ink dark:border-white/15 dark:bg-ink dark:text-ivory"
                  />
                </label>
                <button type="button" onClick={() => cart.removeItem(item.slug)} className="text-sm font-semibold text-forest hover:text-brass dark:text-brass">
                  Ta bort
                </button>
              </div>
              <p className="mt-4 text-sm font-semibold text-ink dark:text-ivory">{formatSek(item.lineTotalSek)}</p>
            </div>
          </article>
        ))}
      </div>

      <aside className="card h-fit p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">Summering</p>
        <dl className="mt-6 grid gap-3 text-sm">
          <div className="flex justify-between gap-4">
            <dt>Delsumma</dt>
            <dd>{formatSek(summary.subtotalSek)}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt>Frakt</dt>
            <dd>{summary.shippingSek === 0 ? "Fri frakt" : formatSek(summary.shippingSek)}</dd>
          </div>
          <div className="mt-3 flex justify-between gap-4 border-t border-line pt-4 text-base font-semibold dark:border-white/10">
            <dt>Totalt</dt>
            <dd>{formatSek(summary.totalSek)}</dd>
          </div>
        </dl>
        <label className="mt-6 block text-sm text-ink/70 dark:text-ivory/70">
          E-post för kvitto
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full border border-line bg-paper px-4 py-3 text-ink dark:border-white/15 dark:bg-ink dark:text-ivory"
            placeholder="namn@example.se"
          />
        </label>
        {error ? <p className="mt-4 text-sm text-red-700 dark:text-red-300">{error}</p> : null}
        <button type="button" onClick={checkout} disabled={loading} className="link-button-solid mt-6 w-full disabled:opacity-60">
          {loading ? "Öppnar kassa..." : "Betala med kort eller Swish"}
        </button>
        <p className="mt-4 text-xs leading-6 text-ink/56 dark:text-ivory/56">
          Betalningen hanteras av Stripe. Swish visas när betalmetoden är aktiverad och godkänd för kontot.
        </p>
      </aside>
    </div>
  );
}
