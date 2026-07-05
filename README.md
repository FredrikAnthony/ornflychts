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

## E-handel

Sajten har en första e-handelsgrund med varukorg, Stripe Checkout, Swish via Stripe, fast fraktlogik, D1-tabell för order samt skyddad orderadmin via API.

För att aktivera detta i Cloudflare Pages:

1. Skapa en D1-databas, till exempel `ornflychts`.
2. Kör SQL från `schema.sql` i D1.
3. Lägg till D1-binding i Cloudflare Pages: `DB`.
4. Lägg till miljövariabler/secrets:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `ADMIN_TOKEN`
   - `ADMIN_EMAIL=info@ornflychts.se`
   - `SITE_URL=https://ornflychts.se`
5. Aktivera Swish i Stripe Dashboard under betalmetoder för Checkout.
6. Skapa Stripe-webhook till `https://ornflychts.se/api/stripe-webhook` för eventet `checkout.session.completed`.

`wrangler.example.toml` visar hur D1-bindingen kan se ut om projektet hanteras med Wrangler. Kopiera den till `wrangler.toml` först när ett riktigt D1 database-id finns.

PDF-filen `hannas hus 13 november.pdf` ska inte ändras eller laddas upp. Ospårade originalbilder ska inte laddas upp utan uttrycklig begäran.
