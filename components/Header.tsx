import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  ["Böcker", "/bocker"],
  ["Artiklar", "/artiklar"],
  ["Kunskapsbank", "/kunskapsbank"],
  ["Förlaget", "/#forlaget"],
  ["Kontakt", "/kontakt"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur dark:border-white/10 dark:bg-ink/92">
      <div className="mx-auto flex max-w-page items-center justify-between gap-8 px-5 py-5 lg:px-8">
        <Link href="/" className="group">
          <span className="block font-serif text-xl tracking-wide text-ink dark:text-ivory">Örnflychts Förlag</span>
          <span className="block text-xs uppercase tracking-[0.28em] text-moss dark:text-brass">Historia och kulturarv</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-7 text-sm text-ink/78 dark:text-ivory/78 md:flex" aria-label="Huvudnavigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-forest dark:hover:text-brass">
                {label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
