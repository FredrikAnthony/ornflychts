import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/lib/content";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="grid gap-5">
      <Link href={`/bocker/${book.slug}`} className="grid min-h-[360px] place-items-center border border-line bg-ivory p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
        <Image src={book.image} alt={`Omslag för ${book.title}`} width={520} height={640} className="max-h-[320px] w-auto object-contain shadow-xl" />
      </Link>
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-brass">{book.category}</p>
        <h3 className="mt-2 font-serif text-2xl leading-tight">
          <Link href={`/bocker/${book.slug}`}>{book.title}</Link>
        </h3>
        <p className="mt-2 text-sm text-ink/68 dark:text-ivory/68">{book.subtitle}</p>
        <p className="mt-2 text-sm text-ink/78 dark:text-ivory/78">{book.pages}{book.edition ? ` · ${book.edition}` : ""}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={`/bocker/${book.slug}`} className="link-button">Läs mer</Link>
          <a href={book.buyUrl} className="link-button-solid">Köp</a>
        </div>
      </div>
    </article>
  );
}
