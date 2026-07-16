import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articles, site } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Artiklar",
  description: "Artikelbibliotek från Örnflychts Förlag om lokalhistoria, kulturhistoria, konst och kulturarv.",
  openGraph: {
    title: `Artiklar | ${site.name}`,
    description: "Läs artiklar från Örnflychts Förlag.",
    url: `${site.url}/artiklar`
  }
};

export default function ArticlesPage() {
  return (
    <main className="section">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Artiklar", url: "/artiklar" }
        ])}
      />
      <div className="mx-auto max-w-page px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Artiklar" }]} />
        <header className="mt-10 max-w-3xl">
          <p className="eyebrow">Artikelbibliotek</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Artiklar</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            Artiklarna ger sökbar kontext till katalogen, ämnena och förlagets arbetssätt. Varje artikel har metadata,
            författare, publiceringsdatum och relaterade ämnen.
          </p>
        </header>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/artiklar/${article.slug}`}
              className="card p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">{article.category}</p>
              <h2 className="mt-3 font-serif text-2xl text-ink dark:text-ivory">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-ink/68 dark:text-ivory/68">{article.excerpt}</p>
              <p className="mt-5 text-xs text-ink/55 dark:text-ivory/55">
                {article.author} / {article.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
