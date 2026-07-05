export const products = [
  {
    slug: "hannas-hus",
    title: "Hannas hus",
    priceSek: 299,
    stockManaged: true
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
