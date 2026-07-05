import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articles, books, site, topics } from "@/lib/content";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author }],
    openGraph: {
      title: `${article.title} | ${site.name}`,
      description: article.excerpt,
      url: `${site.url}/artiklar/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [article.author]
    }
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const relatedTopics = topics.filter((topic) => article.related.includes(topic.slug));
  const relatedBooks = books.filter((book) => book.subjects.some((subject) => article.excerpt.toLowerCase().includes(subject.toLowerCase()))).slice(0, 2);

  return (
    <main className="section">
      <JsonLd data={articleJsonLd(article)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Artiklar", url: "/artiklar" },
          { name: article.title, url: `/artiklar/${article.slug}` }
        ])}
      />
      <article className="mx-auto max-w-3xl px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Artiklar", href: "/artiklar" }, { label: article.title }]} />
        <header className="mt-10">
          <p className="eyebrow">{article.category}</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-ink dark:text-ivory">{article.title}</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">{article.excerpt}</p>
          <p className="mt-6 text-sm text-ink/58 dark:text-ivory/58">
            {article.author} / Publicerad {article.date}
          </p>
        </header>

        <div className="mt-12 space-y-7 text-lg leading-9 text-ink/76 dark:text-ivory/76">
          <p>
            Den här artikeln är en ämnesingång i Örnflychts Förlags kunskapsbank. Texten är skriven för att ge tydlig
            kontext, stabil terminologi och intern länkning till förlagets böcker och ämnessidor.
          </p>
          <h2 className="font-serif text-3xl text-ink dark:text-ivory">Sammanhang</h2>
          <p>
            {article.excerpt} Ämnet behandlas med fokus på källor, plats, dokumentation och de frågor som återkommer i
            förlagets utgivning.
          </p>
          <h2 className="font-serif text-3xl text-ink dark:text-ivory">Fortsatt läsning</h2>
          <p>
            Läsaren kan gå vidare till relaterade ämnen i kunskapsbanken eller till böcker där materialet utvecklas i
            längre form.
          </p>
        </div>

        <section className="mt-12 border-t border-line pt-8 dark:border-white/10" aria-labelledby="relaterade-artikel">
          <h2 id="relaterade-artikel" className="font-serif text-3xl text-ink dark:text-ivory">
            Relaterat
          </h2>
          <div className="mt-5 grid gap-3">
            {relatedTopics.map((topic) => (
              <Link key={topic.slug} href={`/kunskapsbank/${topic.slug}`} className="card p-4">
                {topic.title}
              </Link>
            ))}
            {relatedBooks.map((book) => (
              <Link key={book.slug} href={`/bocker/${book.slug}`} className="card p-4">
                {book.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
