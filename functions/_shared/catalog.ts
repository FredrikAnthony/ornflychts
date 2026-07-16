export const products = [
  {
    slug: "hannas-hus",
    title: "Hannas hus",
    priceSek: 299
  },
  {
    slug: "citron",
    title: "Citron",
    priceSek: 120
  },
  {
    slug: "martin-luther-king",
    title: "Martin Luther King",
    priceSek: 90
  },
  {
    slug: "kockarnas-kokbok",
    title: "Kockarnas kokbok",
    priceSek: 65
  },
  {
    slug: "smak-av-svunnen-tid",
    title: "Smak av svunnen tid",
    priceSek: 80
  },
  {
    slug: "bockernas-mat",
    title: "Böckernas mat",
    priceSek: 75
  },
  {
    slug: "masken-uti-rosen",
    title: "Masken uti rosen",
    priceSek: 60
  },
  {
    slug: "nina-bjork-drommen-om-det-roda",
    title: "Drömmen om det röda",
    priceSek: 70
  },
  {
    slug: "tisdagar-med-tofflorna",
    title: "Tisdagar med tofflorna",
    priceSek: 45
  },
  {
    slug: "roslagen",
    title: "Roslagen",
    priceSek: 95
  },
  {
    slug: "till-bords-hos-monet",
    title: "Till bords hos Monet",
    priceSek: 80
  },
  {
    slug: "slaktforska-steg-for-steg",
    title: "Släktforska steg för steg",
    priceSek: 60
  },
  {
    slug: "bordets-frojder",
    title: "Bordets fröjder",
    priceSek: 90
  },
  {
    slug: "krogliv",
    title: "Krogliv",
    priceSek: 45
  },
  {
    slug: "muramaris-en-karlekshistoria",
    title: "Muramaris: en kärlekshistoria",
    priceSek: 70
  },
  {
    slug: "tradgardens-blommor",
    title: "Trädgårdens blommor",
    priceSek: 50
  }
];

export const shipping = {
  standardSek: 69,
  freeAboveSek: 600
};

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function toStripeAmount(sek: number) {
  return Math.round(sek * 100);
}
