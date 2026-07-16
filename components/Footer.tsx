import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t-2 border-brass/70 bg-ivory text-sm text-ink/70 dark:border-brass/40 dark:bg-black dark:text-ivory/68">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-3xl tracking-tight text-ink dark:text-ivory">Örnflychts Förlag</p>
          <p className="mt-4 max-w-sm leading-7">Förlag och antikvariat för Roslagen, mat, politik och trädgård. Kvalitet framför kvantitet.</p>
          <a href="mailto:info@ornflychts.se" className="mt-5 inline-block text-sm font-semibold text-forest transition hover:text-brass dark:text-brass dark:hover:text-ivory">
            info@ornflychts.se
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">Katalog</p>
          <div className="mt-4 grid gap-3">
            <Link href="/bocker" className="transition hover:text-forest dark:hover:text-brass">Böcker</Link>
            <Link href="/#antikvariat" className="transition hover:text-forest dark:hover:text-brass">Antikvariat</Link>
            <Link href="/artiklar" className="transition hover:text-forest dark:hover:text-brass">Artiklar</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">Om namnet</p>
          <p className="mt-4 leading-7">
            Namnet Örnflycht hedrar en dokumenterad gren i grundarens släkthistoria och den kulturhistoriska tradition
            som den representerar.
          </p>
        </div>
      </div>
    </footer>
  );
}
