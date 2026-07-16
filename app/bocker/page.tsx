import type { Metadata } from "next";
import { BookCard } from "@/components/BookCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { books, site } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Böcker",
  description: "Katalog från Örnflychts Förlag och Antikvariat med egen utgivning och utvalda böcker om Roslagen, mat, politik och trädgård.",
  openGraph: {
    title: `Böcker | ${site.name}`,
    description: "Utforska katalogen från Örnflychts Förlag och Antikvariat.",
    url: `${site.url}/bocker`
  }
};

export default function BooksPage() {
  return (
    <main className="section">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Böcker", url: "/bocker" }
        ])}
      />
      <div className="mx-auto max-w-page px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Böcker" }]} />
        <header className="mt-10 max-w-3xl">
          <p className="eyebrow">Katalog</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Böcker och antikvariat</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            Katalogen samlar egen utgivning, äldre titlar och kurerade böcker om Roslagen, mat, politik och trädgård.
            Varje titel presenteras med omslag, metadata och
            beställningsväg.
          </p>
        </header>
        <div className="mt-14 grid gap-11 sm:grid-cols-2 lg:grid-cols-4">
          {books.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      </div>
    </main>
  );
}
