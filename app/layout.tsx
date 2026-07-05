import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/content";

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: ["/assets/ornflycht-intro.jpeg"],
    locale: "sv_SE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/assets/ornflycht-intro.jpeg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-paper text-ink antialiased dark:bg-ink dark:text-ivory">
        <JsonLd data={organizationJsonLd()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
