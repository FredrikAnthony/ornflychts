type Env = {
  ADMIN_TOKEN?: string;
  DB?: D1Database;
};

const privateHeaders = {
  "cache-control": "no-store",
  "x-robots-tag": "noindex, nofollow"
};

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const token = request.headers.get("x-admin-token");
  if (!env.ADMIN_TOKEN || token !== env.ADMIN_TOKEN) {
    return Response.json({ error: "Obehörig." }, { status: 401, headers: privateHeaders });
  }

  if (!env.DB) {
    return Response.json({ error: "D1-databasen är inte kopplad." }, { status: 500, headers: privateHeaders });
  }

  const orders = await env.DB.prepare(
    "SELECT id, stripe_session_id, email, status, subtotal_sek, shipping_sek, total_sek, created_at, paid_at FROM orders ORDER BY created_at DESC LIMIT 100"
  ).all();

  return Response.json({ orders: orders.results }, { headers: privateHeaders });
};
