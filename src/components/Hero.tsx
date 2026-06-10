import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white px-4 pt-24 pb-14 sm:px-6 sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="mx-auto mb-5 max-w-fit rounded-full border border-[#D6EEF4] bg-[#F5FBFD] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#087EA4] sm:mx-0 sm:text-xs">
              Gebäudeservice in Köln & Umgebung
            </p>

            <h1 className="text-[34px] font-black leading-[1.08] tracking-tight text-[#052B48] sm:text-5xl lg:text-6xl">
              Professionelle Gebäudeservices für Unternehmen und Immobilien
            </h1>

            <p className="mx-auto mt-5 max-w-md text-base leading-7 text-[#062033]/70 sm:text-lg lg:mx-0">
              Zuverlässige Reinigung, Hausmeisterservice und Gebäudebetreuung
              aus einer Hand.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/kontakt"
                className="rounded-full bg-[#087EA4] px-6 py-4 text-center text-sm font-bold text-white shadow-[0_12px_30px_rgba(8,126,164,0.25)]"
              >
                Kostenloses Angebot anfordern
              </Link>

              <Link
                href="/leistungen"
                className="rounded-full border border-[#087EA4] px-6 py-4 text-center text-sm font-bold text-[#052B48]"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#D6EEF4] bg-[#F5FBFD] shadow-[0_18px_45px_rgba(5,43,72,0.08)]">
            <Image
              src="/hero-cleaning.jpg"
              alt="Professionelle Gebäudereinigung"
              width={900}
              height={650}
              priority
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}