import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ThankYouClient } from "@/components/ThankYouClient";

export const metadata: Metadata = {
  title: "Tack för din beställning",
  description: "Din beställning hos Örnflychts Förlag och Antikvariat är mottagen."
};

export default function ThankYouPage() {
  return (
    <main className="section">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Tack" }]} />
        <header className="mt-10">
          <p className="eyebrow">Beställning mottagen</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">
            Tack för din beställning
          </h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            Betalningen är genomförd och beställningen är mottagen. Stripe skickar kvitto via e-post när kvittomejl är aktiverat för kontot. Hör av dig till{" "}
            <a href="mailto:info@ornflychts.se" className="underline hover:text-brass">
              info@ornflychts.se
            </a>{" "}
            om något är oklart med din order.
          </p>
        </header>
        <Suspense fallback={null}>
          <ThankYouClient />
        </Suspense>
      </div>
    </main>
  );
}
