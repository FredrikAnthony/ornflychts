// Single source of truth: derives from lib/content.ts via lib/shop.ts.
// Re-exporting instead of duplicating the product list prevents stale prices.

import { shopProducts, shipping, getShopProduct } from "../../lib/shop";

export const products = shopProducts;
export { shipping };
export const getProduct = getShopProduct;

export function toStripeAmount(sek: number) {
  return Math.round(sek * 100);
}
