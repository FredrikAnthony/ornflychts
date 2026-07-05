import { books } from "./content";

export const shipping = {
  standardSek: 69,
  freeAboveSek: 600
};

export const shopProducts = books
  .filter((book) => typeof book.priceSek === "number")
  .map((book) => ({
    slug: book.slug,
    title: book.title,
    subtitle: book.subtitle,
    image: book.image,
    priceSek: book.priceSek as number
  }));

export type ShopProduct = (typeof shopProducts)[number];

export function getShopProduct(slug: string) {
  return shopProducts.find((product) => product.slug === slug);
}
