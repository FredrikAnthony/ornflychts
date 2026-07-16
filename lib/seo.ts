import { site } from "./content";

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    founder: {
      "@type": "Person",
      name: site.founder
    }
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "sv-SE",
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function faqJsonLd(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function bookJsonLd(book: { title: string; isbn: string; description: string; image: string; buyUrl: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    isbn: book.isbn.startsWith("978") ? book.isbn : undefined,
    description: book.description,
    image: `${site.url}${book.image}`,
    publisher: {
      "@type": "Organization",
      name: site.name
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: book.buyUrl
    }
  };
}

export function articleJsonLd(article: { title: string; excerpt: string; author: string; date: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": article.author === site.name ? "Organization" : "Person",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: site.name
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `${site.url}/artiklar/${article.slug}`
  };
}
