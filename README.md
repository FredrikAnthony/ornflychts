# Örnflychts Förlag

Webbplats för Örnflychts Förlag byggd i Next.js, TypeScript och Tailwind CSS.

Sidan är byggd som en modern förlagssajt med bokbibliotek, artiklar, kunskapsbank, semantisk HTML, JSON-LD, Open Graph, sitemap och robots-fil.

## Lokal utveckling

```bash
npm install
npm run dev
```

## Produktion

Projektet är konfigurerat med `output: "export"` och bygger statiska filer till `out/`.

Detta ska deployas som Cloudflare Pages, inte som Cloudflare Worker. Repot saknar Worker-entrypoint och `wrangler.toml`, och `next.config.mjs` använder statisk Next-export.

Cloudflare Pages-inställningar:

- Framework preset: `Next.js (Static HTML Export)`
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: lämnas tom om repots rot används

PDF-filen `hannas hus 13 november.pdf` ska inte ändras eller laddas upp. Ospårade originalbilder ska inte laddas upp utan uttrycklig begäran.
