CREATE TABLE IF NOT EXISTS orders (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  stripe_session_id TEXT UNIQUE,
  email TEXT,
  status TEXT NOT NULL DEFAULT 'checkout_created',
  subtotal_sek INTEGER NOT NULL DEFAULT 0,
  shipping_sek INTEGER NOT NULL DEFAULT 0,
  total_sek INTEGER NOT NULL DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  paid_at TEXT
);
