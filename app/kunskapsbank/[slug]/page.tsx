import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { articles, books, site, topics } from "@/lib/content";
import { breadcrumbJsonLd, topicJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return topics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);
  if (!topic) return {};

  return {
    title: topic.title,
    description: topic.summary,
    openGraph: {
      title: `${topic.title} | ${site.name}`,
      description: topic.summary,
      url: `${site.url}/kunskapsbank/${topic.slug}`
    }
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);
  if (!topic) notFound();

  const relatedTopics = topics.filter((item) => topic.related.includes(item.slug));
  const relatedArticles = articles.filter((article) => article.related.includes(topic.slug));
  const relatedBooks = books.filter((book) => book.subjects.some((subject) => subject.toLowerCase().includes(topic.title.toLowerCase())));

  return (
    <main className="section">
      <JsonLd data={topicJsonLd(topic)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Kunskapsbank", url: "/kunskapsbank" },
          { name: topic.title, url: `/kunskapsbank/${topic.slug}` }
        ])}
      />
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Kunskapsbank", href: "/kunskapsbank" }, { label: topic.title }]} />
        <header className="mt-10">
          <p className="eyebrow">Ämne</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-ink dark:text-ivory">{topic.title}</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">{topic.summary}</p>
        </header>

        <section className="mt-12" aria-labelledby="fakta">
          <h2 id="fakta" className="font-serif text-3xl text-ink dark:text-ivory">
            Centrala fakta
          </h2>
          <ul className="mt-5 grid gap-3">
            {topic.facts.map((fact) => (
              <li key={fact} className="border-l-2 border-brass pl-4 text-base leading-8 text-ink/74 dark:text-ivory/74">
                {fact}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-line pt-8 dark:border-white/10" aria-labelledby="intern-lankning">
          <h2 id="intern-lankning" className="font-serif text-3xl text-ink dark:text-ivory">
            Relaterade sidor
          </h2>
          <div className="mt-5 grid gap-3">
            {relatedTopics.map((item) => (
              <Link key={item.slug} href={`/kunskapsbank/${item.slug}`} className="border border-line p-4 dark:border-white/10">
                {item.title}
              </Link>
            ))}
            {relatedArticles.map((article) => (
              <Link key={article.slug} href={`/artiklar/${article.slug}`} className="border border-line p-4 dark:border-white/10">
                {article.title}
              </Link>
            ))}
            {relatedBooks.map((book) => (
              <Link key={book.slug} href={`/bocker/${book.slug}`} className="border border-line p-4 dark:border-white/10">
                {book.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
