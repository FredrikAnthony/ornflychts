const privateHeaders = {
  "cache-control": "no-store",
  "x-robots-tag": "noindex, nofollow"
};

function jsonResponse(body, init = {}) {
  return new Response(JSON.stringify(body), {
    ...init,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...privateHeaders,
      ...(init.headers ?? {})
    }
  });
}

export async function onRequestGet({ request, env }) {
  const token = request.headers.get("x-admin-token");
  if (!env.ADMIN_TOKEN || token !== env.ADMIN_TOKEN) {
    return jsonResponse({ error: "Obehorig." }, { status: 401 });
  }

  if (!env.DB) {
    return jsonResponse({ error: "D1-databasen ar inte kopplad." }, { status: 500 });
  }

  const orders = await env.DB.prepare(
    "SELECT id, stripe_session_id, email, status, subtotal_sek, shipping_sek, total_sek, created_at, paid_at FROM orders ORDER BY created_at DESC LIMIT 100"
  ).all();

  return jsonResponse({ orders: orders.results });
}
