"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  type: string;
};

export function SearchPanel({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) return items.slice(0, 6);
    return items
      .filter((item) => `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(normalizedQuery))
      .slice(0, 8);
  }, [items, normalizedQuery]);

  return (
    <section className="border-y border-line bg-ivory py-16 dark:border-white/10 dark:bg-ink/70" aria-labelledby="sok">
      <div className="mx-auto max-w-page px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="kicker">Sökfunktion</p>
            <h2 id="sok" className="mt-3 font-serif text-3xl text-ink dark:text-ivory md:text-4xl">
              Sök i katalog, artiklar och ämnen
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-ink/72 dark:text-ivory/72">
              Sökningen är lokal och snabb. Den är byggd för att göra katalogens kunskapsstruktur tydlig även utan ett separat CMS.
            </p>
          </div>
          <div>
            <label className="relative block">
              <span className="sr-only">Sök</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-forest dark:text-brass" size={19} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full border border-line bg-paper py-4 pl-12 pr-4 text-base text-ink outline-none transition focus:border-forest dark:border-white/15 dark:bg-ink dark:text-ivory"
                placeholder="Sök exempelvis Hanna Lindh, konsthistoria eller byggnadshistoria"
              />
            </label>
            <div className="mt-5 grid gap-3">
              {results.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group border border-line bg-paper p-5 transition hover:border-brass dark:border-white/10 dark:bg-ink/80"
                >
                  <span className="text-xs uppercase tracking-[0.22em] text-moss dark:text-brass">{item.type}</span>
                  <h3 className="mt-2 font-serif text-xl text-ink group-hover:text-forest dark:text-ivory dark:group-hover:text-brass">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/66 dark:text-ivory/66">{item.description}</p>
                </Link>
              ))}
              {results.length === 0 ? (
                <p className="border border-line p-5 text-sm text-ink/70 dark:border-white/10 dark:text-ivory/70">
                  Ingen träff. Prova ett bredare ämne eller gå via katalogen.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
