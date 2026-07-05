import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktinformation för Örnflychts Förlag.",
  openGraph: {
    title: `Kontakt | ${site.name}`,
    description: "Kontaktinformation för Örnflychts Förlag.",
    url: `${site.url}/kontakt`
  }
};

export default function ContactPage() {
  return (
    <main className="section">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Kontakt", url: "/kontakt" }
        ])}
      />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Kontakt" }]} />
        <header className="mt-10">
          <p className="eyebrow">Kontakt</p>
          <h1 className="mt-4 font-serif text-5xl text-ink dark:text-ivory">Örnflychts Förlag</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            För beställningar, återförsäljare, press och frågor om utgivningen.
          </p>
        </header>
        <div className="mt-10 border border-line p-7 dark:border-white/10">
          <p className="text-sm uppercase tracking-[0.22em] text-brass">E-post</p>
          <a href="mailto:info@ornflychts.se" className="mt-3 block font-serif text-3xl text-ink dark:text-ivory">
            info@ornflychts.se
          </a>
          <p className="mt-6 text-sm leading-7 text-ink/68 dark:text-ivory/68">
            Swish, fraktvillkor och lageruppgifter kan kopplas till respektive bok när betalningsflödet är färdigställt.
          </p>
        </div>
      </div>
    </main>
  );
}
