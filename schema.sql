CREATE TABLE IF NOT EXISTS inventory (
  slug TEXT PRIMARY KEY,
  quantity INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

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

INSERT INTO inventory (slug, quantity, updated_at)
VALUES ('hannas-hus', 100, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO NOTHING;
