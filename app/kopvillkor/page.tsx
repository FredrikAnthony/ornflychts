import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Köpvillkor",
  description: "Köpvillkor, betalning, leverans, ångerrätt och reklamation för Örnflychts Förlag och Antikvariat.",
  openGraph: {
    title: `Köpvillkor | ${site.name}`,
    description: "Köpvillkor, betalning, leverans, ångerrätt och reklamation.",
    url: `${site.url}/kopvillkor`
  }
};

const sections = [
  {
    title: "Företagsuppgifter",
    body: [
      "Säljare är Örnflychts Förlag och Antikvariat. Verksamheten är knuten till organisationsnummer 556378-2837.",
      "Juridisk part är Pensionat Granparken Aktiebolag, organisationsnummer 556378-2837.",
      "Adress: Drottning Kristinas väg 10, 761 40 Norrtälje. Kontakt sker via info@ornflychts.se."
    ]
  },
  {
    title: "Produkter och skick",
    body: [
      "Webbplatsen säljer tryckta böcker. Sortimentet består av egen utgivning samt antikvariska och kurerade böcker.",
      "Antikvariska böcker är begagnade exemplar. De kan ha lässlitage, åldersspår, märkningar eller andra bruksspår. Sådant skick anges i katalogen när det är relevant."
    ]
  },
  {
    title: "Priser och frakt",
    body: [
      "Priser anges i svenska kronor. Frakt inom Sverige är 69 kr. Fri frakt gäller vid köp över 600 kr.",
      "Totalpris inklusive frakt visas i varukorgen innan betalning."
    ]
  },
  {
    title: "Betalning",
    body: [
      "Betalning sker säkert med kort via Stripe Checkout. Kortuppgifter hanteras krypterat av Stripe och lagras inte av Örnflychts Förlag och Antikvariat.",
      "Beställningen är bindande när betalningen har genomförts."
    ]
  },
  {
    title: "Leverans",
    body: [
      "Beställningar skickas normalt inom några arbetsdagar efter genomförd betalning.",
      "Om en titel ännu inte är utgiven eller kräver särskild hantering framgår det på bokens sida."
    ]
  },
  {
    title: "Ångerrätt",
    body: [
      "Som konsument har du normalt 14 dagars ångerrätt från den dag du tagit emot varan.",
      "För att ångra ett köp kontaktar du info@ornflychts.se eller använder ångerfunktionen på webbplatsen. Ange ordernummer, namn, e-post och vilka varor ångern gäller.",
      "Varan ska returneras i väsentligen oförändrat skick. Kunden står för returfrakt om inget annat avtalats."
    ]
  },
  {
    title: "Reklamation",
    body: [
      "Om en vara är felaktig eller inte motsvarar beskrivningen ska du kontakta info@ornflychts.se så snart som möjligt.",
      "För antikvariska böcker räknas normalt beskrivet lässlitage och åldersspår inte som fel. Fel som inte framgått av beskrivningen hanteras enligt gällande konsumentskyddsregler."
    ]
  },
  {
    title: "Personuppgifter",
    body: [
      "Personuppgifter behandlas för att hantera beställning, betalning, kontakt och eventuell retur eller reklamation.",
      "Läs mer i integritetspolicyn."
    ]
  }
];

export default function TermsPage() {
  return (
    <main className="section">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Köpvillkor", url: "/kopvillkor" }
        ])}
      />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Köpvillkor" }]} />
        <header className="mt-10">
          <p className="eyebrow">Villkor</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Köpvillkor</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            Här finns villkor för köp, betalning, leverans, ångerrätt och reklamation.
          </p>
        </header>
        <div className="mt-10 grid gap-5">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-line pt-6 dark:border-white/10">
              <h2 className="font-serif text-2xl text-ink dark:text-ivory">{section.title}</h2>
              <div className="mt-3 grid gap-3 text-sm leading-7 text-ink/70 dark:text-ivory/70">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="card mt-10 p-6">
          <p className="text-sm leading-7 text-ink/70 dark:text-ivory/70">
            Vill du ångra ett köp? Använd <Link href="/angra-kop" className="underline hover:text-brass">ångerfunktionen</Link> eller mejla{" "}
            <a href="mailto:info@ornflychts.se" className="underline hover:text-brass">info@ornflychts.se</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
