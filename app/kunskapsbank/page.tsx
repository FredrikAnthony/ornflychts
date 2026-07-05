import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { site, topics } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kunskapsbank",
  description: "Ämnessidor från Örnflychts Förlag om Hanna Lindh, Norrtälje, Roslagen, byggnadshistoria och konsthistoria.",
  openGraph: {
    title: `Kunskapsbank | ${site.name}`,
    description: "Ämnessidor och faktastruktur från Örnflychts Förlag.",
    url: `${site.url}/kunskapsbank`
  }
};

export default function KnowledgePage() {
  return (
    <main className="section">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Kunskapsbank", url: "/kunskapsbank" }
        ])}
      />
      <div className="mx-auto max-w-page px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Kunskapsbank" }]} />
        <header className="mt-10 max-w-3xl">
          <p className="eyebrow">Kunskapsbank</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Ämnessidor</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            Kunskapsbanken samlar centrala personer, platser och begrepp i förlagets utgivning. Sidorna är skrivna med
            tydliga rubriker, korta stycken och intern länkning.
          </p>
        </header>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/kunskapsbank/${topic.slug}`}
              className="card p-7"
            >
              <h2 className="font-serif text-2xl text-ink dark:text-ivory">{topic.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/68 dark:text-ivory/68">{topic.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
