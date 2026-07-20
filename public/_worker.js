const privateHeaders = {
  "cache-control": "no-store",
  "x-robots-tag": "noindex, nofollow"
};

const shipping = {
  standardSek: 69,
  freeAboveSek: 600
};

const products = [
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

function jsonResponse(body, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...privateHeaders,
      ...(init.headers || {})
    }
  });
}

function getProduct(slug) {
  return products.find((product) => product.slug === slug);
}

function normalizeQuantity(quantity) {
  const parsed = typeof quantity === "number" ? quantity : Number(quantity);
  if (!Number.isFinite(parsed)) return 1;
  return Math.max(1, Math.min(20, Math.floor(parsed)));
}

function getSiteOrigin(configuredSiteUrl, requestUrl) {
  const fallbackOrigin = new URL(requestUrl).origin;
  const trimmed = configuredSiteUrl && configuredSiteUrl.trim();
  if (!trimmed) return fallbackOrigin;

  try {
    return new URL(trimmed).origin;
  } catch {
    return fallbackOrigin;
  }
}

function toStripeAmount(sek) {
  return Math.round(sek * 100);
}

async function checkout(request, env) {
  try {
    const stripeSecretKey = env.STRIPE_SECRET_KEY && env.STRIPE_SECRET_KEY.trim();
    if (!stripeSecretKey) {
      return jsonResponse({ error: "Stripe saknar STRIPE_SECRET_KEY i Cloudflare." }, { status: 500 });
    }

    const body = await request.json();
    const rawItems = Array.isArray(body.items) ? body.items : [];
    const items = rawItems
      .map((item) => ({ product: getProduct(item.slug), quantity: normalizeQuantity(item.quantity) }))
      .filter((item) => Boolean(item.product));

    if (items.length === 0) {
      return jsonResponse({ error: "Varukorgen ar tom." }, { status: 400 });
    }

    const subtotalSek = items.reduce((total, item) => total + item.product.priceSek * item.quantity, 0);
    const shippingSek = subtotalSek >= shipping.freeAboveSek ? 0 : shipping.standardSek;
    const siteUrl = getSiteOrigin(env.SITE_URL, request.url);
    const params = new URLSearchParams();

    params.set("mode", "payment");
    params.set("success_url", `${siteUrl}/tack?session_id={CHECKOUT_SESSION_ID}`);
    params.set("cancel_url", `${siteUrl}/varukorg`);
    params.set("payment_method_types[0]", "card");
    params.set("payment_method_types[1]", "swish");
    params.set("shipping_address_collection[allowed_countries][0]", "SE");
    params.set("metadata[source]", "ornflychts.se");
    if (body.email && body.email.trim()) params.set("customer_email", body.email.trim());

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
        authorization: `Bearer ${stripeSecretKey}`,
        "content-type": "application/x-www-form-urlencoded"
      },
      body: params
    });

    const session = await stripeResponse.json();
    if (!stripeResponse.ok || !session.url) {
      const stripeError = session.error || {};
      const detail = [stripeError.message, stripeError.code, stripeError.param].filter(Boolean).join(" ");
      console.error("Stripe checkout failed", {
        status: stripeResponse.status,
        type: stripeError.type,
        code: stripeError.code,
        param: stripeError.param
      });
      return jsonResponse(
        { error: detail || `Stripe kunde inte skapa kassan. Status: ${stripeResponse.status}.` },
        { status: stripeResponse.status }
      );
    }

    return jsonResponse({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Okant fel.";
    console.error("Checkout crashed", { message });
    return jsonResponse({ error: `Kassan kunde inte startas: ${message}` }, { status: 500 });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/ping") {
      return jsonResponse({ ok: true, worker: "advanced", version: "checkout-diagnostics-1" });
    }

    if (url.pathname === "/api/checkout" && request.method === "POST") {
      return checkout(request, env);
    }

    if (url.pathname.startsWith("/api/")) {
      return jsonResponse({ error: "API-rutten finns inte." }, { status: 404 });
    }

    return env.ASSETS.fetch(request);
  }
};
