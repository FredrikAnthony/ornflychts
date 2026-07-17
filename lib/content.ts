export type Book = {
  slug: string;
  title: string;
  author?: string;
  subtitle: string;
  category: string;
  year: string;
  isbn: string;
  pages: string;
  edition?: string;
  design?: string;
  distribution?: string;
  status: "available" | "archive" | "forthcoming";
  price?: string;
  priceSek?: number;
  availabilityNote?: string;
  image: string;
  description: string;
  authorNote: string;
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
  description: "Förlag och antikvariat med böcker om Roslagen, mat, politik och trädgård.",
  founder: "Annika Thorin"
};

export const books: Book[] = [
  {
    slug: "hannas-hus",
    title: "Hannas hus",
    author: "Fredrik Anthony",
    subtitle: "Ett pensionat för ideal och bildning",
    category: "Lokalhistoria",
    year: "2026",
    isbn: "Kommer",
    pages: "Inbunden bok",
    status: "forthcoming",
    price: "299 kr",
    priceSek: 299,
    availabilityNote: "Ännu inte utgiven - förhandsboka och få boken skickad vid release.",
    image: "/assets/hannas-hus-framsida.jpg",
    description:
      "Berättelsen om Johanna \"Hanna\" Charlotta Lindh och Pensionat Granparken i Norrtälje. Boken rör sig genom lokalhistoria, bildning, socialt engagemang och ett hus som blev mötesplats.",
    authorNote:
      "Hannas hus är skriven av Fredrik Anthony, som arbetar med lokalhistoria, kulturarv och berättelser där arkivmaterial, plats och personliga spår möts.",
    buyUrl: "https://buy.stripe.com/8x2aEQaVd5Ci9iGaca9oc00?locale=sv",
    sampleUrl: "https://hannalindh.se",
    reviews: [
      "En kulturhistorisk berättelse med lokal förankring.",
      "Ett arkivnära arbete om bildning, plats och minne."
    ],
    subjects: ["Hanna Lindh", "Norrtälje", "Roslagen", "byggnadshistoria"]
  },
  {
    slug: "citron",
    title: "Citron",
    subtitle: "Lotte Möller",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "120 kr",
    priceSek: 120,
    image: "/assets/antikvariat/citron.jpg",
    description: "Antikvarisk bok om citronens kulturhistoria, odling, smak och väg genom kök, trädgård och bildvärld.",
    authorNote:
      "Lotte Möller är författare och kulturskribent med särskilt öga för trädgård, natur, mat och vardagens kulturhistoria.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["mat", "trädgård", "kulturhistoria"]
  },
  {
    slug: "martin-luther-king",
    title: "Martin Luther King",
    author: "Martin Luther King",
    subtitle: "Självbiografi i urval, redigerad av Clayborne Carson",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "90 kr",
    priceSek: 90,
    image: "/assets/antikvariat/martin-luther-king.jpg",
    description: "Antikvarisk bok med Martin Luther Kings egna texter om medborgarrättsrörelsen, demokrati och politiskt ledarskap.",
    authorNote:
      "Boken bygger på Martin Luther Kings egna ord och är redigerad av historikern Clayborne Carson.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["politik", "medborgarrätt", "historia"]
  },
  {
    slug: "kockarnas-kokbok",
    title: "Kockarnas kokbok",
    subtitle: "Fredrik Eriksson, Gert Klötzke, Christer Lingström och Roland Persson",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "65 kr",
    priceSek: 65,
    image: "/assets/antikvariat/kockarnas-kokbok.jpg",
    description: "Antikvarisk kokbok med recept från svenska kockar och en tydlig förankring i modern matkultur.",
    authorNote:
      "Fredrik Eriksson, Gert Klötzke, Christer Lingström och Roland Persson hör till svensk restaurang- och kokbokskultur.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["matkultur", "kokbok", "hushåll"]
  },
  {
    slug: "not-street-art",
    title: "Not Street Art",
    subtitle: "Det okända som konsthistoriskt problem",
    category: "Konsthistoria",
    year: "Våren 2016",
    isbn: "978-91-981103-2-6",
    pages: "141 sidor",
    edition: "200 exemplar",
    design: "Tobias Lund",
    distribution: "Moderna Museet, Nationalmuseum, Kulturhuset, Multikulturellt centrum, PaperCut m.fl.",
    status: "available",
    price: "120 kr",
    priceSek: 120,
    image: "/assets/not-street-art.jpg",
    description:
      "En bok som prövar hur offentliga bilduttryck kan förstås bortom kronologi och geografi. Utgångspunkten är det okända: ett icke-rumsligt fenomen, inte historiserat och inte låst vid stad eller land.",
    authorNote:
      "Boken hör till förlagets tidigare katalog och behålls som ett fristående konsthistoriskt sidospår.",
    buyUrl: "https://cargocollective.com/FredrikAnthony/Not-Street-Art",
    reviews: ["Ett koncentrerat bidrag till diskussionen om bildkultur, rum och historieskrivning."],
    subjects: ["konsthistoria", "offentlighet", "kulturhistoria"]
  },
  {
    slug: "smak-av-svunnen-tid",
    title: "Smak av svunnen tid",
    subtitle: "Om mat och dryck i Hallwylska palatset",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "80 kr",
    priceSek: 80,
    image: "/assets/antikvariat/smak-av-svunnen-tid.jpg",
    description: "Antikvarisk titel om mat, dryck och hushållskultur i Hallwylska palatset.",
    authorNote:
      "Boken ingår i katalogen för sin koppling till måltidshistoria, hemkultur och Hallwylska miljön.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["matkultur", "kulturhistoria", "Hallwylska palatset"]
  },
  {
    slug: "bockernas-mat",
    title: "Böckernas mat",
    subtitle: "Pernilla Tunberger",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "75 kr",
    priceSek: 75,
    image: "/assets/antikvariat/bockernas-mat.jpg",
    description: "Antikvarisk bok om litteratur, måltider och de rätter som hör samman med böckernas värld.",
    authorNote:
      "Pernilla Tunberger skriver här i skärningspunkten mellan litteraturhistoria och matkultur.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["matkultur", "litteratur", "kulturhistoria"]
  },
  {
    slug: "masken-uti-rosen",
    title: "Masken uti rosen",
    subtitle: "Hjordis Levin",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "60 kr",
    priceSek: 60,
    image: "/assets/antikvariat/masken-uti-rosen.jpg",
    description: "Antikvarisk titel med kulturhistorisk och idéhistorisk inriktning.",
    authorNote:
      "Hjordis Levin behandlar politiska och idéhistoriska frågor med kulturhistoriskt material som utgångspunkt.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["kulturhistoria", "idéhistoria", "samhälle"]
  },
  {
    slug: "nina-bjork-drommen-om-det-roda",
    title: "Drömmen om det röda",
    subtitle: "Nina Björk om Rosa Luxemburg",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "70 kr",
    priceSek: 70,
    image: "/assets/antikvariat/nina-bjork-drommen-om-det-roda.jpg",
    description: "Antikvarisk bok om Rosa Luxemburg, socialism, språk och kärlek.",
    authorNote:
      "Nina Björk är författare och kritiker; här skriver hon om Rosa Luxemburg, politisk dröm och idéernas känsloliv.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["politisk historia", "Rosa Luxemburg", "kulturhistoria"]
  },
  {
    slug: "tisdagar-med-tofflorna",
    title: "Tisdagar med tofflorna",
    subtitle: "Nätverkande kvinnor i sekelskiftets Stockholm",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "45 kr",
    priceSek: 45,
    image: "/assets/antikvariat/tisdagar-med-tofflorna.jpg",
    description: "Antikvarisk titel om kvinnliga nätverk och kulturhistoriska miljöer i Stockholm kring sekelskiftet.",
    authorNote:
      "Lisbeth Håkansson Petré lyfter nätverkande kvinnor och sociala sammanhang i sekelskiftets Stockholm.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["kvinnohistoria", "Stockholm", "kulturhistoria"]
  },
  {
    slug: "roslagen",
    title: "Roslagen",
    subtitle: "Kulturhistorisk miljö och kustlandskap",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "95 kr",
    priceSek: 95,
    image: "/assets/antikvariat/roslagen.jpg",
    description: "Antikvarisk bok om Roslagen, kustlandskap och regional kulturhistoria.",
    authorNote:
      "Titeln ingår i katalogen för sin tydliga anknytning till Roslagen, kustlandskap och regional kulturhistoria.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["Roslagen", "lokalhistoria", "kulturarv"]
  },
  {
    slug: "till-bords-hos-monet",
    title: "Till bords hos Monet",
    subtitle: "Mat, bord och kulturhistoria",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "80 kr",
    priceSek: 80,
    image: "/assets/antikvariat/till-bords-hos-monet.jpg",
    description: "Antikvarisk bok om Claude Monet, måltider, bordskultur och hemmet i Giverny.",
    authorNote:
      "Claire Joyes knyter Monets konstnärliga värld till bordet, hemmet och den franska matkulturen.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["konsthistoria", "matkultur", "Monet"]
  },
  {
    slug: "slaktforska-steg-for-steg",
    title: "Släktforska steg för steg",
    subtitle: "Per Clemensson och Kjell Andersson",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "60 kr",
    priceSek: 60,
    image: "/assets/antikvariat/slaktforska-steg-for-steg.jpg",
    description: "Antikvarisk handledning i släktforskning och arkivarbete.",
    authorNote:
      "Per Clemensson och Kjell Andersson ger en praktisk väg in i arkiv, källor och släktforskningens metod.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["släktforskning", "arkiv", "kulturhistoria"]
  },
  {
    slug: "bordets-frojder",
    title: "Bordets fröjder",
    subtitle: "Nathalie Hambro",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "90 kr",
    priceSek: 90,
    image: "/assets/antikvariat/bordets-frojder.jpg",
    description: "Antikvarisk bok om bordets kultur, måltid och umgänge.",
    authorNote:
      "Nathalie Hambro skriver om måltiden som form, miljö och social kultur.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["matkultur", "bordskultur", "kulturhistoria"]
  },
  {
    slug: "krogliv",
    title: "Krogliv",
    subtitle: "Urval och kommentarer av Daniel Hjorth",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "45 kr",
    priceSek: 45,
    image: "/assets/antikvariat/krogliv.jpg",
    description: "Antikvarisk bok om restaurangliv, sällskapskultur och stadens offentliga rum.",
    authorNote:
      "Daniel Hjorth har gjort urval och kommentarer som sätter kroglivet i ett litterärt och kulturhistoriskt sammanhang.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["matkultur", "stadshistoria", "kulturhistoria"]
  },
  {
    slug: "muramaris-en-karlekshistoria",
    title: "Muramaris: en kärlekshistoria",
    subtitle: "Kulturmiljö och berättelse",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "70 kr",
    priceSek: 70,
    image: "/assets/antikvariat/muramaris-en-karlekshistoria.jpg",
    description: "Antikvarisk bok om Muramaris, platsens historia och dess kulturmiljö.",
    authorNote:
      "Johan Hultengren och Anna Lytsy berättar om Muramaris som plats, byggnad, livsprojekt och kärlekshistoria.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["byggnadshistoria", "kulturmiljö", "Gotland"]
  },
  {
    slug: "tradgardens-blommor",
    title: "Trädgårdens blommor",
    subtitle: "Från vår till vinter",
    category: "Antikvariat",
    year: "Antikvariat",
    isbn: "Ej angivet",
    pages: "Antikvarisk bok",
    status: "available",
    price: "50 kr",
    priceSek: 50,
    image: "/assets/antikvariat/tradgardens-blommor.jpg",
    description: "Antikvarisk trädgårdsbok om blommor, säsonger och odling genom året.",
    authorNote:
      "En praktiskt hållen trädgårdstitel om blommor, säsonger och odling genom året.",
    buyUrl: "/kontakt",
    reviews: ["Utvald antikvarisk titel i katalogen."],
    subjects: ["trädgård", "odling", "kulturhistoria"]
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
    slug: "konsthistoria-som-kunskapsfalt",
    title: "Konsthistoria som kunskapsfält",
    excerpt:
      "Konsthistoriskt material behandlas här som dokumentation, kulturhistoria och källa.",
    author: "Örnflychts Förlag",
    date: "2026-07-05",
    category: "Konst",
    related: ["konsthistoria"]
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
    summary: "Personen bakom Pensionat Granparken och en central titel i förlagets katalog.",
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
    slug: "konsthistoria",
    title: "Konsthistoria",
    summary: "Ett verktyg för att förstå både etablerade konstfält och perifera uttryck.",
    facts: ["Berör både Terracotta och samtida bildkultur.", "Knyter samman forskning, dokumentation och essä."],
    related: ["svensk-byggnadshistoria"]
  }
];
