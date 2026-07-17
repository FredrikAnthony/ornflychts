import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-brass/70 bg-ivory text-sm text-ink/70 transition-colors duration-300 dark:border-brass/40 dark:bg-black dark:text-ivory/68">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div className="animate-fade-in-up">
          <p className="font-serif text-3xl tracking-tight text-ink transition-colors duration-300 dark:text-ivory">
            Örnflychts Förlag
          </p>
          <p className="mt-4 max-w-sm leading-7 text-ink/70 dark:text-ivory/70">
            Förlag och antikvariat för Roslagen, mat, politik och trädgård. Kvalitet framför kvantitet.
          </p>
          <a
            href="mailto:info@ornflychts.se"
            className="mt-5 inline-block text-sm font-semibold transition-colors duration-300 hover:text-brass dark:hover:text-brass"
          >
            info@ornflychts.se
          </a>
        </div>
        <div className="animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass/90">Katalog</p>
          <div className="mt-4 grid gap-3">
            <Link
              href="/bocker"
              className="transition-colors duration-300 hover:text-forest dark:hover:text-brass"
            >
              Böcker
            </Link>
            <Link
              href="/#antikvariat"
              className="transition-colors duration-300 hover:text-forest dark:hover:text-brass"
            >
              Antikvariat
            </Link>
            <Link
              href="/artiklar"
              className="transition-colors duration-300 hover:text-forest dark:hover:text-brass"
            >
              Artiklar
            </Link>
          </div>
        </div>
        <div className="animate-fade-in-up">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass/90">Om namnet</p>
          <p className="mt-4 leading-7 text-ink/70 dark:text-ivory/70">
            Namnet Örnflycht hedrar en dokumenterad gren i grundarens släkthistoria.
          </p>
        </div>
      </div>
      <div className="border-t border-line/40 px-5 py-8 text-center text-xs text-ink/50 dark:border-white/5 dark:text-ivory/50 lg:px-8">
        <p>
          © {currentYear} Örnflychts Förlag. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
