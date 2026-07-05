import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ivory text-sm text-ink/70 dark:border-white/10 dark:bg-black dark:text-ivory/68">
      <div className="mx-auto grid max-w-page gap-8 px-5 py-12 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-2xl text-ink dark:text-ivory">Örnflychts Förlag</p>
          <p className="mt-3 max-w-sm">Böcker om historia, kulturarv och samtida kultur. Kvalitet framför kvantitet.</p>
        </div>
        <div className="grid gap-2">
          <Link href="/bocker">Böcker</Link>
          <Link href="/artiklar">Artiklar</Link>
          <Link href="/kunskapsbank">Kunskapsbank</Link>
        </div>
        <div>
          <p>Namnet Örnflycht hedrar en dokumenterad gren i grundarens släkthistoria och den kulturhistoriska tradition som den representerar.</p>
        </div>
      </div>
    </footer>
  );
}
