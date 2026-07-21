import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ångra köp",
  description: "Ångerfunktion för köp hos Örnflychts Förlag och Antikvariat.",
  openGraph: {
    title: `Ångra köp | ${site.name}`,
    description: "Ångerfunktion för distansköp.",
    url: `${site.url}/angra-kop`
  }
};

export default function WithdrawalPage() {
  return (
    <main className="section">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Ångra köp", url: "/angra-kop" }
        ])}
      />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Ångra köp" }]} />
        <header className="mt-10">
          <p className="eyebrow">Ångerfunktion</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Ångra köp</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            Du kan meddela att du vill ångra ett köp inom 14 dagar från att du tagit emot varan.
          </p>
        </header>
        <form
          action="mailto:info@ornflychts.se"
          method="post"
          encType="text/plain"
          className="card mt-10 grid gap-5 p-6"
        >
          <label className="grid gap-2 text-sm font-semibold text-ink/75 dark:text-ivory/75">
            Namn
            <input name="Namn" required className="border border-line bg-paper px-4 py-3 font-normal text-ink dark:border-white/15 dark:bg-ink dark:text-ivory" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink/75 dark:text-ivory/75">
            E-post
            <input name="E-post" type="email" required className="border border-line bg-paper px-4 py-3 font-normal text-ink dark:border-white/15 dark:bg-ink dark:text-ivory" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink/75 dark:text-ivory/75">
            Ordernummer eller Stripe-referens
            <input name="Ordernummer" className="border border-line bg-paper px-4 py-3 font-normal text-ink dark:border-white/15 dark:bg-ink dark:text-ivory" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-ink/75 dark:text-ivory/75">
            Varor som ångern gäller
            <textarea name="Varor" required rows={4} className="border border-line bg-paper px-4 py-3 font-normal text-ink dark:border-white/15 dark:bg-ink dark:text-ivory" />
          </label>
          <input type="hidden" name="Meddelande" value="Jag meddelar att jag vill ångra mitt köp." />
          <button type="submit" className="link-button-solid w-full sm:w-auto">
            Skicka ångermeddelande
          </button>
          <p className="text-xs leading-6 text-ink/56 dark:text-ivory/56">
            Formuläret öppnar ditt e-postprogram och skickar meddelandet till info@ornflychts.se. Du kan också mejla samma uppgifter direkt.
          </p>
        </form>
      </div>
    </main>
  );
}
