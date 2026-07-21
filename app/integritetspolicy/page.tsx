import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Hur Örnflychts Förlag och Antikvariat behandlar personuppgifter vid kontakt och beställning.",
  openGraph: {
    title: `Integritetspolicy | ${site.name}`,
    description: "Personuppgifter vid kontakt, beställning och betalning.",
    url: `${site.url}/integritetspolicy`
  }
};

export default function PrivacyPage() {
  return (
    <main className="section">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Integritetspolicy", url: "/integritetspolicy" }
        ])}
      />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Integritetspolicy" }]} />
        <header className="mt-10">
          <p className="eyebrow">Personuppgifter</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Integritetspolicy</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            Denna policy beskriver hur personuppgifter behandlas vid kontakt, beställning, betalning och kundservice.
          </p>
        </header>
        <div className="mt-10 grid gap-8 text-sm leading-7 text-ink/72 dark:text-ivory/72">
          <section>
            <h2 className="font-serif text-2xl text-ink dark:text-ivory">Personuppgiftsansvarig</h2>
            <p className="mt-3">Bokförlaget Örnflycht drivs av Pensionat Granparken Aktiebolag, organisationsnummer 556378-2837, Drottning Kristinas väg 10, 761 40 Norrtälje. Kontakt: info@ornflychts.se.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink dark:text-ivory">Vilka uppgifter behandlas?</h2>
            <p className="mt-3">Namn, e-postadress, orderuppgifter, betalningsreferens och annan information som behövs för att hantera beställning, leverans, retur, reklamation eller kontakt.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink dark:text-ivory">Betalning</h2>
            <p className="mt-3">Kortbetalning hanteras av Stripe Checkout. Kortuppgifter behandlas av Stripe och lagras inte av Örnflychts Förlag och Antikvariat.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink dark:text-ivory">Ändamål</h2>
            <p className="mt-3">Uppgifterna används för att ta emot betalning, hantera order, leverans, retur, reklamation, bokföring och kundkontakt.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink dark:text-ivory">Lagring</h2>
            <p className="mt-3">Uppgifter sparas så länge det krävs för orderhantering, bokföring och rättsliga skyldigheter. Uppgifter som inte längre behövs raderas eller avidentifieras.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-ink dark:text-ivory">Dina rättigheter</h2>
            <p className="mt-3">Du kan begära information om vilka personuppgifter som behandlas, be om rättelse eller radering när det är möjligt, och invända mot viss behandling. Kontakta info@ornflychts.se.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
