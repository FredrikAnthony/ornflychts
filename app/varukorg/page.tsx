import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CartPageClient } from "@/components/CartPageClient";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Varukorg",
  description: "Varukorg och kassa för Örnflychts Förlag."
};

export default function CartPage() {
  return (
    <main className="section">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Varukorg", url: "/varukorg" }
        ])}
      />
      <div className="mx-auto max-w-page px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Varukorg" }]} />
        <header className="mt-10 max-w-3xl">
          <p className="eyebrow">Kassa</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Varukorg</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            Betalningen sker via Stripe Checkout. Frakt läggs på automatiskt och kvitto skickas via e-post.
          </p>
        </header>
        <CartPageClient />
      </div>
    </main>
  );
}
