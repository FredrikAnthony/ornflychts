import type { Metadata } from "next";
import { BookCard } from "@/components/BookCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { books, site } from "@/lib/content";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Böcker",
  description: "Bokbibliotek från Örnflychts Förlag med lokalhistoria, kulturhistoria, konst, street art och essäer.",
  openGraph: {
    title: `Böcker | ${site.name}`,
    description: "Utforska utgivningen från Örnflychts Förlag.",
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
          <p className="eyebrow">Bokbibliotek</p>
          <h1 className="mt-4 font-serif text-5xl text-ink dark:text-ivory">Böcker att beställa</h1>
          <p className="mt-5 text-lg leading-9 text-ink/74 dark:text-ivory/74">
            Utgivningen samlar lokalhistoria, kulturhistoria, konst, street art, graffiti, essäer och dokumentation.
            Varje titel presenteras med omslag, metadata, provläsning och köpväg.
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
