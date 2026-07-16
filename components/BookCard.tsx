import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/lib/content";
import { AddToCartButton } from "./AddToCartButton";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group grid gap-6 animate-fade-in-up">
      <Link
        href={`/bocker/${book.slug}`}
        className="card group/image relative grid min-h-[360px] place-items-center overflow-hidden p-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brass/0 via-brass/0 to-brass/5 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
        <Image
          src={book.image}
          alt={`Omslag för ${book.title}`}
          width={520}
          height={640}
          className="book-image relative max-h-[320px] w-auto object-contain shadow-lg transition-shadow duration-300 group-hover/image:shadow-2xl"
        />
      </Link>
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass/80 transition-colors duration-300">
          {book.category}
        </p>
        <h3 className="font-serif text-2xl leading-tight tracking-tight transition-colors duration-300">
          <Link
            href={`/bocker/${book.slug}`}
            className="transition-colors duration-300 hover:text-forest dark:hover:text-brass"
          >
            {book.title}
          </Link>
        </h3>
        <p className="text-sm italic text-ink/68 dark:text-ivory/68">{book.subtitle}</p>
        <p className="text-sm text-ink/78 dark:text-ivory/78">
          {book.pages}{book.edition ? ` · ${book.edition}` : ""}
        </p>
        {book.price ? (
          <p className="text-sm font-semibold text-ink dark:text-ivory">{book.price}</p>
        ) : null}
        {book.availabilityNote ? (
          <p className="text-sm font-semibold text-forest transition-colors duration-300 dark:text-brass">
            {book.availabilityNote}
          </p>
        ) : null}
        {book.category === "Antikvariat" ? (
          <p className="text-sm text-ink/62 dark:text-ivory/62 italic">
            Antikvariskt exemplar med lässlitage.
          </p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-3 pt-2">
          <Link href={`/bocker/${book.slug}`} className="link-button">
            Läs mer
          </Link>
          {book.priceSek ? (
            <AddToCartButton slug={book.slug} label="Köp" />
          ) : (
            <a href={book.buyUrl} className="link-button-solid">
              Beställ
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
