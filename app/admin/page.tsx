import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Intern administrationssida för Örnflychts Förlag och Antikvariat.",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminPage() {
  return (
    <main className="section">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <p className="eyebrow">Admin</p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink dark:text-ivory">Orderadministration</h1>
        <div className="card mt-10 p-7">
          <p className="text-lg leading-8 text-ink/74 dark:text-ivory/74">
            Orderhantering sker tills vidare i Stripe Dashboard. Ett eget administrativt orderflöde kan kopplas på senare.
          </p>
          <p className="mt-5 text-sm leading-7 text-ink/64 dark:text-ivory/64">
            Administrativ kontakt:{" "}
            <a href="mailto:info@ornflychts.se" className="font-semibold text-forest dark:text-brass">
              info@ornflychts.se
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
