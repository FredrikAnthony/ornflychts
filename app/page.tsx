import Image from "next/image";
import Link from "next/link";
import { BookCard } from "@/components/BookCard";
import { JsonLd } from "@/components/JsonLd";
import { SearchPanel, type SearchItem } from "@/components/SearchPanel";
import { articles, books, site, topics } from "@/lib/content";
import { breadcrumbJsonLd, faqJsonLd, websiteJsonLd } from "@/lib/seo";

const searchItems: SearchItem[] = [
  ...books.map((book) => ({
    title: book.title,
    description: `${book.subtitle}. ${book.description}`,
    href: `/bocker/${book.slug}`,
    type: "Bok"
  })),
  ...articles.map((article) => ({
    title: article.title,
    description: article.excerpt,
    href: `/artiklar/${article.slug}`,
    type: "Artikel"
  })),
  ...topics.map((topic) => ({
    title: topic.title,
    description: topic.summary,
    href: `/kunskapsbank/${topic.slug}`,
    type: "Ämne"
  }))
];

export default function HomePage() {
  return (
    <main>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" }
        ])}
      />
      <JsonLd
        data={faqJsonLd([
          {
            question: "Vad är Örnflychts Förlag och Antikvariat?",
            answer:
              "Örnflychts är både ett litet förlag och ett antikvariat med egen utgivning, äldre titlar och kurerade böcker inom Roslagen, mat, politik och trädgård."
          },
          {
            question: "Varför heter förlaget Örnflychts Förlag?",
            answer:
              "Namnet har valts för att hedra en dokumenterad gren i grundarens släkthistoria och den kulturhistoriska tradition som den representerar. Det är inte ett adligt projekt eller ett anspråk på en historisk ätt."
          }
        ])}
      />

      <section className="relative min-h-[86vh] overflow-hidden border-b border-line dark:border-white/10">
        <Image
          src="/assets/ornflycht-intro.jpeg"
          alt="Stilleben från Örnflychts Förlag"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/78 to-paper/10 dark:from-ink dark:via-ink/82 dark:to-ink/15" />
        <div className="relative mx-auto flex min-h-[86vh] max-w-page items-center px-5 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Förlag och antikvariat</p>
            <h1 className="mt-7 font-serif text-6xl leading-[0.95] tracking-tight text-ink dark:text-ivory md:text-8xl">
              Örnflychts Förlag
            </h1>
            <p className="mt-7 max-w-xl text-xl italic leading-9 text-ink/78 dark:text-ivory/78">
              Egen utgivning och utvalda böcker om Roslagen, mat, politik och trädgård.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/bocker" className="link-button-solid">
                Utforska katalogen
              </Link>
              <Link href="#forlaget" className="link-button">
                Om förlaget
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="forlaget" className="section">
        <div className="mx-auto grid max-w-page gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="eyebrow">Om förlaget och antikvariatet</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink dark:text-ivory md:text-5xl">
              En liten katalog med egen utgivning och utvalda äldre titlar.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-ink/76 dark:text-ivory/76">
            <p>
              Örnflychts Förlag och Antikvariat samlar egen utgivning med ett växande urval av antikvariska och
              kurerade böcker inom Roslagen, mat, politik och trädgård.
              Katalogen ska vara liten nog att vara genomtänkt och tydlig nog att fungera som kunskapsbank över tid.
            </p>
            <p>
              Kvalitet går före kvantitet. Egna titlar och äldre böcker väljs för sitt ämne,
              sitt källvärde och sin förmåga att fördjupa en läsning av plats, vardagskultur och kulturarv.
            </p>
            <p>
              Namnet Örnflycht har valts för att hedra en dokumenterad gren i grundarens släkthistoria och den
              kulturhistoriska tradition som den representerar. Det ska inte förstås som ett adligt projekt eller som
              ett anspråk på en historisk ätt.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-ivory dark:bg-white/5" aria-labelledby="bocker">
        <div className="mx-auto max-w-page px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Böcker</p>
              <h2 id="bocker" className="mt-5 font-serif text-4xl text-ink dark:text-ivory md:text-5xl">
                Katalog
              </h2>
            </div>
            <Link href="/bocker" className="link-button">
              Hela katalogen
            </Link>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </section>

      <section id="antikvariat" className="section" aria-labelledby="antikvariat-rubrik">
        <div className="mx-auto grid max-w-page gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="eyebrow">Antikvariat</p>
            <h2 id="antikvariat-rubrik" className="mt-5 font-serif text-4xl text-ink dark:text-ivory md:text-5xl">
              Utvalda exemplar, inte masslager.
            </h2>
          </div>
          <div className="grid gap-5 text-lg leading-9 text-ink/76 dark:text-ivory/76">
            <p>
              Antikvariatsdelen är tänkt som ett långsamt växande urval av äldre böcker om Roslagen, mat, politik och
              trädgård. Fokus ligger på relevans, skick och sammanhang snarare än volym.
            </p>
            <p>
              När antikvariska titlar läggs till presenteras de i samma katalog som förlagets egna böcker, med tydlig
              beskrivning, pris och beställningsväg.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="grundaren">
        <div className="mx-auto grid max-w-page gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="eyebrow">Om grundaren</p>
            <h2 id="grundaren" className="mt-5 font-serif text-4xl text-ink dark:text-ivory md:text-5xl">
              Annika Thorin
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-9 text-ink/76 dark:text-ivory/76">
            <p>
              Annika Thorin arbetar med kulturhistoriska frågor och skriver med intresse för plats, minne och
              dokumentation. Hon är även keramiker och lärare inom psykologi.
            </p>
            <p>
              Förlagets och antikvariatets ton ska vara saklig, omsorgsfull och långsiktig. Det är katalogen, ämnena
              och källarbetet som står i centrum.
            </p>
          </div>
        </div>
      </section>

      <SearchPanel items={searchItems} />

      <section className="section" aria-labelledby="artiklar">
        <div className="mx-auto max-w-page px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Artiklar</p>
              <h2 id="artiklar" className="mt-5 font-serif text-4xl text-ink dark:text-ivory md:text-5xl">
                Artikelbibliotek
              </h2>
            </div>
            <Link href="/artiklar" className="link-button">
              Läs artiklar
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/artiklar/${article.slug}`}
                className="card p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">{article.category}</p>
                <h3 className="mt-3 font-serif text-2xl tracking-tight text-ink dark:text-ivory">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68 dark:text-ivory/68">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
