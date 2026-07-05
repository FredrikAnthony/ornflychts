import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tack för din beställning",
  description: "Tack-sida efter beställning hos Örnflychts Förlag."
};

export default function ThankYouPage() {
  return (
    <main className="section">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <p className="eyebrow">Beställning</p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Tack för din beställning</h1>
        <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
          Betalningen registreras hos Stripe. Ett kvitto skickas till e-postadressen du angav i kassan.
        </p>
        <Link href="/bocker" className="link-button mt-8">
          Tillbaka till böcker
        </Link>
      </div>
    </main>
  );
}
