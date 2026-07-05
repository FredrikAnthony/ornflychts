type Env = {
  STRIPE_WEBHOOK_SECRET?: string;
  DB?: D1Database;
};

function hexToBytes(hex: string) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let index = 0; index < bytes.length; index += 1) {
    bytes[index] = parseInt(hex.slice(index * 2, index * 2 + 2), 16);
  }
  return bytes;
}

async function verifySignature(request: Request, body: string, env: Env) {
  const signature = request.headers.get("stripe-signature");
  if (!signature || !env.STRIPE_WEBHOOK_SECRET) return false;

  const parts = Object.fromEntries(signature.split(",").map((part) => part.split("=", 2)));
  const timestamp = parts.t;
  const signed = parts.v1;
  if (!timestamp || !signed) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(env.STRIPE_WEBHOOK_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${timestamp}.${body}`));
  const expected = hexToBytes(signed);
  const actual = new Uint8Array(digest);
  if (expected.length !== actual.length) return false;

  let diff = 0;
  for (let index = 0; index < actual.length; index += 1) {
    diff |= actual[index] ^ expected[index];
  }
  return diff === 0;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = await request.text();
  const verified = await verifySignature(request, body, env);
  if (!verified) return Response.json({ error: "Webhook saknar verifiering." }, { status: 401 });

  const event = JSON.parse(body) as {
    type?: string;
    data?: { object?: { id?: string; customer_email?: string; metadata?: Record<string, string>; amount_total?: number } };
  };

  if (event.type === "checkout.session.completed" && env.DB) {
    const session = event.data?.object;
    if (session?.id) {
      await env.DB.prepare("UPDATE orders SET status = ?, paid_at = datetime('now'), email = COALESCE(email, ?) WHERE stripe_session_id = ?")
        .bind("paid", session.customer_email ?? null, session.id)
        .run();
    }
  }

  return Response.json({ received: true });
};
