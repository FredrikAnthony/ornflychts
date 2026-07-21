# Ornflychts website repository

This is the source repository for the website published at:

https://ornflychts.se

The public website presents Örnflychts Förlag och Antikvariat. This repository is mainly for development, deployment and version history.

## Local development

```bash
npm install
npm run dev
```

## Production

The site is built as a static Next.js export for Cloudflare Pages.

- Framework preset: Next.js Static HTML Export
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: empty

## Payments

Checkout is handled through Stripe Checkout. Card details are handled by Stripe and are not stored by the website.
