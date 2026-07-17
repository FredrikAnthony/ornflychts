import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { books, site } from "@/lib/content";
import { bookJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { AddToCartButton, CartCheckoutLink } from "@/components/AddToCartButton";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);
  if (!book) return {};

  return {
    title: book.title,
    description: book.description,
    openGraph: {
      title: `${book.title} | ${site.name}`,
      description: book.description,
      url: `${site.url}/bocker/${book.slug}`,
      images: [book.image]
    },
    twitter: {
      card: "summary_large_image",
      title: book.title,
      description: book.description,
      images: [book.image]
    }
  };
}

export default async function BookPage({ params }: PageProps) {
  const { slug } = await params;
  const book = books.find((item) => item.slug === slug);
  if (!book) notFound();

  const related = books.filter((item) => item.slug !== book.slug).slice(0, 3);

  return (
    <main className="section">
      <JsonLd data={bookJsonLd(book)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Start", url: "/" },
          { name: "Böcker", url: "/bocker" },
          { name: book.title, url: `/bocker/${book.slug}` }
        ])}
      />
      <JsonLd
        data={faqJsonLd([
          {
            question: `Kan jag beställa ${book.title}?`,
            answer: `${book.title} kan beställas via köpknappen på sidan. Status visas som ${book.status === "available" ? "beställningsbar" : book.status}.`
          },
          {
            question: `Finns provläsning av ${book.title}?`,
            answer: book.sampleUrl ? "Ja, det finns en länk för provläsning eller vidare läsning." : "Provläsning saknas för närvarande."
          }
        ])}
      />
      <div className="mx-auto max-w-page px-5 lg:px-8">
        <Breadcrumbs items={[{ label: "Katalog", href: "/bocker" }, { label: book.title }]} />
        <article className="mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="border border-line bg-ivory p-8 dark:border-white/10 dark:bg-white/5">
            <Image
              src={book.image}
              alt={`Omslag för ${book.title}`}
              width={760}
              height={980}
              className="mx-auto max-h-[680px] w-auto object-contain shadow-2xl"
              priority
            />
          </div>
          <div>
            <p className="eyebrow">{book.category}</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight tracking-tight text-ink dark:text-ivory">{book.title}</h1>
            <p className="mt-4 text-2xl leading-8 text-ink/70 dark:text-ivory/70">{book.subtitle}</p>
            <p className="mt-8 text-lg leading-9 text-ink/78 dark:text-ivory/78">{book.description}</p>
            {book.authorNote ? <p className="mt-5 text-base leading-8 text-ink/68 dark:text-ivory/68">{book.authorNote}</p> : null}

            <dl className="mt-8 grid gap-4 border-y border-line py-6 text-sm dark:border-white/10 sm:grid-cols-2">
              <div>
                <dt className="text-ink/52 dark:text-ivory/52">ISBN</dt>
                <dd className="mt-1 text-ink dark:text-ivory">{book.isbn}</dd>
              </div>
              <div>
                <dt className="text-ink/52 dark:text-ivory/52">Omfång</dt>
                <dd className="mt-1 text-ink dark:text-ivory">{book.pages}</dd>
              </div>
              <div>
                <dt className="text-ink/52 dark:text-ivory/52">Upplaga</dt>
                <dd className="mt-1 text-ink dark:text-ivory">{book.edition ?? "Kommer"}</dd>
              </div>
              <div>
                <dt className="text-ink/52 dark:text-ivory/52">Status</dt>
                <dd className="mt-1 text-ink dark:text-ivory">{book.status === "available" ? "Beställningsbar" : book.status}</dd>
              </div>
              {book.category === "Antikvariat" ? (
                <div>
                  <dt className="text-ink/52 dark:text-ivory/52">Skick</dt>
                  <dd className="mt-1 text-ink dark:text-ivory">Antikvariskt exemplar med lässlitage. Boken har varit läst.</dd>
                </div>
              ) : null}
              {book.design ? (
                <div>
                  <dt className="text-ink/52 dark:text-ivory/52">Form</dt>
                  <dd className="mt-1 text-ink dark:text-ivory">{book.design}</dd>
                </div>
              ) : null}
              {book.price ? (
                <div>
                  <dt className="text-ink/52 dark:text-ivory/52">Pris</dt>
                  <dd className="mt-1 text-ink dark:text-ivory">{book.price}</dd>
                </div>
              ) : null}
            </dl>

            {book.availabilityNote ? (
              <p className="mt-6 border-l-2 border-brass pl-4 text-base font-semibold text-forest dark:text-brass">
                {book.availabilityNote}
              </p>
            ) : null}

            <div className="mt-7 flex flex-wrap gap-3">
              {book.priceSek ? (
                <>
                  <AddToCartButton slug={book.slug} />
                  <CartCheckoutLink />
                </>
              ) : (
                <a href={book.buyUrl} className="link-button-solid">
                  Beställ boken
                </a>
              )}
              {book.sampleUrl ? (
                <Link href={book.sampleUrl} className="link-button">
                  {book.slug === "hannas-hus" ? "Hanna Lindh-sidan" : "Provläsning"}
                </Link>
              ) : null}
            </div>

            <section className="mt-10" aria-labelledby="recensioner">
              <h2 id="recensioner" className="font-serif text-3xl text-ink dark:text-ivory">
                Recensioner och omdömen
              </h2>
              <ul className="mt-4 grid gap-3">
                {book.reviews.map((review) => (
                  <li key={review} className="border-l-2 border-brass pl-4 text-sm leading-7 text-ink/72 dark:text-ivory/72">
                    {review}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>

        <section className="mt-20" aria-labelledby="relaterade-bocker">
          <h2 id="relaterade-bocker" className="font-serif text-3xl text-ink dark:text-ivory">
            Fler titlar
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/bocker/${item.slug}`} className="card p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">{item.category}</p>
                <h3 className="mt-2 font-serif text-xl text-ink dark:text-ivory">{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
