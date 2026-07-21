import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktinformation för Örnflychts Förlag och Antikvariat.",
  openGraph: {
    title: `Kontakt | ${site.name}`,
    description: "Kontaktinformation för Örnflychts Förlag och Antikvariat.",
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
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Örnflychts Förlag och Antikvariat</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            För beställningar, antikvariska förfrågningar, återförsäljare, press och frågor om katalogen.
          </p>
        </header>
        <div className="card mt-10 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brass">E-post</p>
          <a href="mailto:info@ornflychts.se" className="mt-3 block font-serif text-3xl text-ink dark:text-ivory">
            info@ornflychts.se
          </a>
          <p className="mt-6 text-sm leading-7 text-ink/68 dark:text-ivory/68">
            Mejla gärna om en antikvarisk titel, ett ämnesområde eller en beställning kräver särskild hantering.
          </p>
        </div>
        <div className="mt-6 border-t border-line pt-6 text-sm leading-7 text-ink/68 dark:border-white/10 dark:text-ivory/68">
          <p className="font-semibold text-ink dark:text-ivory">Företagsuppgifter</p>
          <p className="mt-2">Örnflychts Förlag och Antikvariat</p>
          <p>Organisationsnummer 556378-2837</p>
          <p>Drottning Kristinas väg 10, 761 40 Norrtälje</p>
          <p className="mt-3">Betalning sker via Stripe Checkout. Kortuppgifter lagras inte av sajten.</p>
        </div>
      </div>
    </main>
  );
}
