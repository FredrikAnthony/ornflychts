import { getProduct, shipping, toStripeAmount } from "../_shared/catalog";

type Env = {
  STRIPE_SECRET_KEY: string;
  SITE_URL?: string;
  DB?: D1Database;
};

type CartLine = {
  slug: string;
  quantity: number;
};

const privateHeaders = {
  "cache-control": "no-store",
  "x-robots-tag": "noindex, nofollow"
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.STRIPE_SECRET_KEY) {
    return Response.json({ error: "Stripe saknar STRIPE_SECRET_KEY i Cloudflare." }, { status: 500, headers: privateHeaders });
  }

  const body = (await request.json()) as { items?: CartLine[]; email?: string };
  const rawItems = Array.isArray(body.items) ? body.items : [];
  const items = rawItems
    .map((item) => ({ product: getProduct(item.slug), quantity: Math.max(1, Math.min(20, Math.floor(item.quantity))) }))
    .filter((item): item is { product: NonNullable<ReturnType<typeof getProduct>>; quantity: number } => Boolean(item.product));

  if (items.length === 0) {
    return Response.json({ error: "Varukorgen är tom." }, { status: 400, headers: privateHeaders });
  }

  const subtotalSek = items.reduce((total, item) => total + item.product.priceSek * item.quantity, 0);
  const shippingSek = subtotalSek >= shipping.freeAboveSek ? 0 : shipping.standardSek;
  const siteUrl = env.SITE_URL ?? new URL(request.url).origin;
  const params = new URLSearchParams();

  params.set("mode", "payment");
  params.set("success_url", `${siteUrl}/tack?session_id={CHECKOUT_SESSION_ID}`);
  params.set("cancel_url", `${siteUrl}/varukorg`);
  params.set("payment_method_types[0]", "card");
  params.set("payment_method_types[1]", "swish");
  params.set("shipping_address_collection[allowed_countries][0]", "SE");
  params.set("metadata[source]", "ornflychts.se");
  if (body.email) params.set("customer_email", body.email);

  items.forEach((item, index) => {
    params.set(`line_items[${index}][quantity]`, String(item.quantity));
    params.set(`line_items[${index}][price_data][currency]`, "sek");
    params.set(`line_items[${index}][price_data][unit_amount]`, String(toStripeAmount(item.product.priceSek)));
    params.set(`line_items[${index}][price_data][product_data][name]`, item.product.title);
    params.set(`line_items[${index}][price_data][product_data][metadata][slug]`, item.product.slug);
    params.set(`metadata[item_${index}_slug]`, item.product.slug);
    params.set(`metadata[item_${index}_quantity]`, String(item.quantity));
  });

  if (shippingSek > 0) {
    params.set("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
    params.set("shipping_options[0][shipping_rate_data][fixed_amount][amount]", String(toStripeAmount(shippingSek)));
    params.set("shipping_options[0][shipping_rate_data][fixed_amount][currency]", "sek");
    params.set("shipping_options[0][shipping_rate_data][display_name]", "Frakt inom Sverige");
  }

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
      "content-type": "application/x-www-form-urlencoded"
    },
    body: params
  });

  const session = (await stripeResponse.json()) as { id?: string; url?: string; error?: { message?: string } };
  if (!stripeResponse.ok || !session.url) {
    return Response.json({ error: session.error?.message ?? "Stripe kunde inte skapa kassan." }, { status: 502, headers: privateHeaders });
  }

  if (env.DB) {
    await env.DB.prepare(
      "INSERT INTO orders (stripe_session_id, email, status, subtotal_sek, shipping_sek, total_sek, created_at) VALUES (?, ?, ?, ?, ?, ?, datetime('now'))"
    )
      .bind(session.id, body.email ?? null, "checkout_created", subtotalSek, shippingSek, subtotalSek + shippingSek)
      .run();
  }

  return Response.json({ url: session.url }, { headers: privateHeaders });
};
