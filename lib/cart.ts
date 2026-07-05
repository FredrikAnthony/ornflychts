import { shopProducts, shipping } from "./shop";

export type CartLine = {
  slug: string;
  quantity: number;
};

export function getCartSummary(lines: CartLine[]) {
  const items = lines
    .map((line) => {
      const product = shopProducts.find((item) => item.slug === line.slug);
      if (!product) return null;
      const quantity = Math.max(1, Math.min(20, Math.floor(line.quantity)));
      return {
        ...product,
        quantity,
        lineTotalSek: product.priceSek * quantity
      };
    })
    .filter(Boolean) as Array<(typeof shopProducts)[number] & { quantity: number; lineTotalSek: number }>;

  const subtotalSek = items.reduce((total, item) => total + item.lineTotalSek, 0);
  const shippingSek = subtotalSek > 0 && subtotalSek < shipping.freeAboveSek ? shipping.standardSek : 0;
  const totalSek = subtotalSek + shippingSek;

  return {
    items,
    subtotalSek,
    shippingSek,
    totalSek
  };
}

export function formatSek(amount: number) {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    maximumFractionDigits: 0
  }).format(amount);
}
