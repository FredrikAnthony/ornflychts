export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  isbn: string;
  pages: string;
  edition?: string;
  design?: string;
  status: "available" | "archive" | "forthcoming";
  price?: string;
  image: string;
  description: string;
  buyUrl: string;
  sampleUrl?: string;
  reviews: string[];
  subjects: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  related: string[];
};

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  facts: string[];
  related: string[];
};

export const site = {
  name: "Örnflychts Förlag",
  url: "https://ornflychts.se",
  description: "Böcker om historia, kulturarv och samtida kultur.",
  founder: "Annika Thorin"
};

export const books: Book[] = [
  {
    slug: "hannas-hus",
    title: "Hannas hus",
    subtitle: "Ett pensionat för ideal och bildning",
    category: "Lokalhistoria",
    year: "2026",
    isbn: "Kommer",
    pages: "Inbunden bok",
    status: "available",
    price: "299 kr",
    image: "/assets/hannas-hus-framsida.jpg",
    description:
      "Berättelsen om Johanna \"Hanna\" Charlotta Lindh och Pensionat Granparken i Norrtälje. Boken rör sig genom lokalhistoria, bildning, socialt engagemang och ett hus som blev mötesplats.",
    buyUrl: "https://buy.stripe.com/8x2aEQaVd5Ci9iGaca9oc00?locale=sv",
    sampleUrl: "/artiklar/hanna-lindh-och-granparken",
    reviews: [
      "En kulturhistorisk berättelse med lokal förankring.",
      "Ett arkivnära arbete om bildning, plats och minne."
    ],
    subjects: ["Hanna Lindh", "Norrtälje", "Roslagen", "byggnadshistoria"]
  },
  {
    slug: "not-street-art",
    title: "Not Street Art",
    subtitle: "Gatukonsten och det okända som ett queertemporalt tillstånd",
    category: "Konst och street art",
    year: "Våren 2016",
    isbn: "978-91-981103-2-6",
    pages: "141 sidor",
    edition: "200 exemplar",
    design: "Tobias Lund",
    status: "available",
    image: "/assets/not-street-art.jpg",
    description:
      "En bok som prövar gatukonst bortom kronologi och geografi. Utgångspunkten är det okända: gatukonst som icke-rumsligt fenomen, inte historiserad och inte låst vid stad eller land.",
    buyUrl: "https://cargocollective.com/FredrikAnthony/Not-Street-Art",
    reviews: ["Ett koncentrerat bidrag till diskussionen om gatukonstens rum och historieskrivning."],
    subjects: ["street art", "graffiti", "konsthistoria", "samtida kultur"]
  },
  {
    slug: "efterblivelser",
    title: "Efterblivelser",
    subtitle: "Nya reflektioner, nya fotografier",
    category: "Konstessä",
    year: "Sommaren 2014",
    isbn: "978-91-981103-1-9",
    pages: "40 sidor",
    edition: "100 exemplar",
    design: "Tobias Lund",
    status: "available",
    image: "/assets/efterblivelser.jpg",
    description:
      "En essä om de estetiska rester som uppstår i auktionsmiljöer: objekt utan prislapp eller upphovsperson, och de reflektioner som växer fram genom det ofullkomliga.",
    buyUrl: "https://cargocollective.com/FredrikAnthony/Efterblivelser-1",
    reviews: ["En kort och tät reflektion om värde, rest och konstvärldens blick."],
    subjects: ["konst", "dokumentation", "essä", "auktionsmiljö"]
  },
  {
    slug: "en-akademisk-homerun",
    title: "En akademisk homerun",
    subtitle: "En ny reflektion på konstverket Terrakotta",
    category: "Konst och forskning",
    year: "Sommaren 2013",
    isbn: "978-91-981103-0-2",
    pages: "14 sidor",
    edition: "100 exemplar",
    design: "Tobias Lund",
    status: "available",
    image: "/assets/en-akademisk-homerun.jpg",
    description:
      "En performativ tolkning av Marianne och Sivert Lindbloms landskapsbaserade konstverk Terracotta vid Stockholms universitet.",
    buyUrl: "https://cargocollective.com/FredrikAnthony/En-akademisk-homerun",
    sampleUrl: "http://libris.kb.se/bib/14810085",
    reviews: ["Ett avgränsat konst- och forskningsspår i pamflettform."],
    subjects: ["konsthistoria", "forskning", "Stockholms universitet", "Terracotta"]
  }
];

export const articles: Article[] = [
  {
    slug: "hanna-lindh-och-granparken",
    title: "Hanna Lindh och Pensionat Granparken",
    excerpt:
      "En introduktion till personen, platsen och den lokala kulturhistoria som ligger bakom Hannas hus.",
    author: "Annika Thorin",
    date: "2026-07-05",
    category: "Lokalhistoria",
    related: ["norrtalje", "roslagens-historia", "svensk-byggnadshistoria"]
  },
  {
    slug: "gatukonst-som-kunskapsfalt",
    title: "Gatukonst som kunskapsfält",
    excerpt:
      "Street art och graffiti behandlas här som dokumentation, samtidskultur och konsthistoriskt material.",
    author: "Örnflychts Förlag",
    date: "2026-07-05",
    category: "Konst",
    related: ["street-art", "graffiti", "konsthistoria"]
  },
  {
    slug: "kulturarv-utan-overtoner",
    title: "Kulturarv utan övertoner",
    excerpt:
      "Om förlagsnamnet Örnflycht, släkthistorisk dokumentation och vikten av att undvika romantisering.",
    author: "Örnflychts Förlag",
    date: "2026-07-05",
    category: "Förlaget",
    related: ["roslagens-historia", "svensk-byggnadshistoria"]
  }
];

export const topics: Topic[] = [
  {
    slug: "hanna-lindh",
    title: "Hanna Lindh",
    summary: "Personen bakom Pensionat Granparken och den första större titeln från förlaget.",
    facts: ["Kopplad till Norrtäljes badorts- och pensionatshistoria.", "Central för boken Hannas hus."],
    related: ["norrtalje", "roslagens-historia"]
  },
  {
    slug: "norrtalje",
    title: "Norrtälje",
    summary: "En stad med badortshistoria, lokala institutioner och kulturhistoriska miljöer.",
    facts: ["Miljön för Hannas hus.", "Del av Roslagens kulturhistoriska sammanhang."],
    related: ["hanna-lindh", "roslagens-historia"]
  },
  {
    slug: "roslagens-historia",
    title: "Roslagens historia",
    summary: "Regional historia där kust, handel, byggnader och sociala rörelser möts.",
    facts: ["Ämnesfält för lokalhistoriska böcker.", "Knyter samman plats och arkiv."],
    related: ["norrtalje", "svensk-byggnadshistoria"]
  },
  {
    slug: "svensk-byggnadshistoria",
    title: "Svensk byggnadshistoria",
    summary: "Hus, material och bruk som historiska källor.",
    facts: ["Relevant för pensionat, bostäder och kulturmiljöer.", "Byggnader läses som dokument."],
    related: ["hanna-lindh", "roslagens-historia"]
  },
  {
    slug: "street-art",
    title: "Street art",
    summary: "Samtida kulturform där plats, anonymitet och dokumentation är centrala.",
    facts: ["Behandlas i Not Street Art.", "Kopplas till stad, offentlighet och historieskrivning."],
    related: ["graffiti", "konsthistoria"]
  },
  {
    slug: "graffiti",
    title: "Graffiti",
    summary: "Ett bild- och skrivfält mellan subkultur, dokumentation och konsthistoria.",
    facts: ["Ingår i förlagets samtidskulturella utgivning.", "Kräver noggrann kontextualisering."],
    related: ["street-art", "konsthistoria"]
  },
  {
    slug: "konsthistoria",
    title: "Konsthistoria",
    summary: "Ett verktyg för att förstå både etablerade konstfält och perifera uttryck.",
    facts: ["Berör både Terracotta och gatukonst.", "Knyter samman forskning, dokumentation och essä."],
    related: ["street-art", "graffiti"]
  }
];
