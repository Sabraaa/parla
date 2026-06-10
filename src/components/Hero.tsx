import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pt-32 pb-20 sm:px-6 sm:pt-36 lg:pb-28">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#EAF8FB] opacity-80 blur-3xl sm:h-[560px] sm:w-[560px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="PARLA GRUPPE Gebäudeservice Logo"
            width={360}
            height={220}
            priority
            className="mb-8 h-auto w-64 sm:w-80 md:w-96"
          />

          <p className="mb-6 rounded-full border border-[#D6EEF4] bg-[#F5FBFD] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087EA4] sm:text-sm">
            Gebäudeservice in Köln & Umgebung
          </p>

          <h1 className="max-w-5xl text-4xl font-extrabold leading-tight text-[#052B48] sm:text-5xl lg:text-7xl">
            Professionelle Gebäudeservices für Unternehmen und Immobilien
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-[#062033]/70 sm:text-lg lg:text-xl">
            Zuverlässige Reinigung, Hausmeisterservice und Gebäudebetreuung aus
            einer Hand.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#087EA4] px-8 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(8,126,164,0.25)] transition hover:bg-[#066B8C]"
            >
              Kostenloses Angebot anfordern
            </a>

            <a
              href="#services"
              className="rounded-full border border-[#D6EEF4] bg-white px-8 py-4 text-sm font-bold text-[#052B48] transition hover:border-[#087EA4] hover:text-[#087EA4]"
            >
              Unsere Leistungen
            </a>
          </div>

          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ["10+", "Jahre Erfahrung"],
              ["500+", "Erfolgreiche Projekte"],
              ["100%", "Zuverlässigkeit"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-[#D6EEF4] bg-white/90 p-6 shadow-[0_18px_45px_rgba(5,43,72,0.05)]"
              >
                <p className="text-3xl font-extrabold text-[#052B48] sm:text-4xl">
                  {number}
                </p>
                <p className="mt-2 text-sm text-[#062033]/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}