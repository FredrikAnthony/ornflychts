import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { CartHeaderLink } from "./CartHeaderLink";

const nav = [
  ["Katalog", "/bocker"],
  ["Antikvariat", "/#antikvariat"],
  ["Artiklar", "/artiklar"],
  ["Kontakt", "/kontakt"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 shadow-sm backdrop-blur dark:border-white/10 dark:bg-ink/95">
      <div className="mx-auto flex max-w-page items-center justify-between gap-8 px-5 py-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <img
            src="/favicon.svg"
            alt=""
            width="42"
            height="42"
            className="h-10 w-10"
            aria-hidden="true"
          />
          <span>
            <span className="block font-serif text-2xl tracking-tight text-ink transition-colors duration-300 group-hover:text-forest dark:text-ivory dark:group-hover:text-brass">
              Örnflychts Förlag
            </span>
            <span className="mt-1.5 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-moss/80 dark:text-brass/80">
              <span className="h-px w-4 bg-current" aria-hidden="true" />
              Förlag och antikvariat
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav
            className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.14em] text-ink/72 dark:text-ivory/72 md:flex"
            aria-label="Huvudnavigation"
          >
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="relative transition-colors duration-300 hover:text-forest dark:hover:text-brass after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-forest after:transition-all after:duration-300 hover:after:w-full dark:after:bg-brass"
              >
                {label}
              </Link>
            ))}
          </nav>
          <CartHeaderLink />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
