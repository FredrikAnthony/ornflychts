import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Orderadministration för Örnflychts Förlag."
};

export default function AdminPage() {
  return (
    <main className="section">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <p className="eyebrow">Admin</p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Orderadministration</h1>
        <div className="card mt-10 p-7">
          <p className="text-lg leading-8 text-ink/74 dark:text-ivory/74">
            Orderdata hämtas via API:et <code>/api/admin/orders</code>. Skydda anropet med headern
            <code> x-admin-token</code> och miljövariabeln <code>ADMIN_TOKEN</code> i Cloudflare.
          </p>
        </div>
      </div>
    </main>
  );
}
