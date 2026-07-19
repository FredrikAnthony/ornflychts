export type CheckoutProduct = {
  slug: string;
  title: string;
  priceSek: number;
};

export const shipping = {
  standardSek: 69,
  freeAboveSek: 600
};

export const products: CheckoutProduct[] = [
  { slug: "hannas-hus", title: "Hannas hus", priceSek: 299 },
  { slug: "citron", title: "Citron", priceSek: 120 },
  { slug: "martin-luther-king", title: "Martin Luther King", priceSek: 90 },
  { slug: "kockarnas-kokbok", title: "Kockarnas kokbok", priceSek: 65 },
  { slug: "not-street-art", title: "Not Street Art", priceSek: 120 },
  { slug: "smak-av-svunnen-tid", title: "Smak av svunnen tid", priceSek: 80 },
  { slug: "bockernas-mat", title: "Bockernas mat", priceSek: 75 },
  { slug: "masken-uti-rosen", title: "Masken uti rosen", priceSek: 60 },
  { slug: "nina-bjork-drommen-om-det-roda", title: "Drommen om det roda", priceSek: 70 },
  { slug: "tisdagar-med-tofflorna", title: "Tisdagar med tofflorna", priceSek: 45 },
  { slug: "roslagen", title: "Roslagen", priceSek: 95 },
  { slug: "till-bords-hos-monet", title: "Till bords hos Monet", priceSek: 80 },
  { slug: "slaktforska-steg-for-steg", title: "Slaktforska steg for steg", priceSek: 60 },
  { slug: "bordets-frojder", title: "Bordets frojder", priceSek: 90 },
  { slug: "krogliv", title: "Krogliv", priceSek: 45 },
  { slug: "muramaris-en-karlekshistoria", title: "Muramaris: en karlekshistoria", priceSek: 70 },
  { slug: "tradgardens-blommor", title: "Tradgardens blommor", priceSek: 50 }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function toStripeAmount(sek: number) {
  return Math.round(sek * 100);
}
