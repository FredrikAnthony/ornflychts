import type { MetadataRoute } from "next";
import { articles, books, site } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/bocker", "/artiklar", "/kontakt", "/kopvillkor", "/angra-kop", "/integritetspolicy"];
  const bookRoutes = books.map((book) => `/bocker/${book.slug}`);
  const articleRoutes = articles.map((article) => `/artiklar/${article.slug}`);

  return [...staticRoutes, ...bookRoutes, ...articleRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
