import Link from "next/link";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="bg-white px-4 pt-20 pb-10 sm:px-6 sm:pt-28 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-7 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="text-center lg:text-left">
            <p className="mx-auto mb-4 max-w-fit rounded-full border border-[#D6EEF4] bg-[#F5FBFD] px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#087EA4] sm:mx-0 sm:text-xs sm:tracking-[0.2em]">
              Gebäudeservice in Dormagen, Köln & Umgebung
            </p>

            <h1 className="text-[30px] font-black leading-[1.1] text-[#052B48] sm:text-5xl lg:text-6xl">
              Professioneller Service für Gebäude, Umzug und Entrümpelung
            </h1>

            <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-[#052B48]/72 sm:text-lg lg:mx-0">
              Die Parla Gruppe ist Ihr zuverlässiger Partner für
              Gebäudereinigung, Hausmeisterservice, Entrümpelung und
              Umzugsservice.
            </p>

            <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:justify-center lg:justify-start">
              <Link
                href="/kontakt"
                className="rounded-full bg-[#087EA4] px-5 py-3.5 text-center text-sm font-bold text-white shadow-[0_12px_30px_rgba(8,126,164,0.22)] transition hover:bg-[#066B8C]"
              >
                Kostenloses Angebot anfordern
              </Link>

              <Link
                href="/leistungen"
                className="rounded-full border border-[#087EA4] bg-white px-5 py-3.5 text-center text-sm font-bold text-[#052B48] transition hover:bg-[#F5FBFD]"
              >
                Unsere Leistungen
              </Link>
            </div>
          </div>

          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
