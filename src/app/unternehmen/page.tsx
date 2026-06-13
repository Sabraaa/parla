import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Über uns | PARLA GRUPPE Gebäudeservice",
  },
  description:
    "Erfahren Sie mehr über PARLA GRUPPE, Ihren zuverlässigen Partner für professionellen Gebäudeservice in Dormagen, Köln und Umgebung.",
};

const values = [
  "Qualität",
  "Gründlichkeit",
  "Kundenzufriedenheit",
  "Pünktlichkeit",
  "Flexibilität",
  "Zuverlässigkeit",
];

const areas = [
  "Dormagen",
  "Köln",
  "Düsseldorf",
  "Leverkusen",
  "Neuss",
  "Mönchengladbach",
];

export default function UnternehmenPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-[#D6EEF4] bg-white p-5 shadow-[0_16px_40px_rgba(5,43,72,0.06)] sm:p-8 lg:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#087EA4]">
              Über uns
            </p>

            <h1 className="mt-3 max-w-4xl text-[29px] font-black leading-[1.12] tracking-tight text-[#052B48] sm:text-5xl">
              Ihr zuverlässiger Partner für professionellen Gebäudeservice
            </h1>

            <div className="mt-5 max-w-4xl space-y-4 text-sm leading-7 text-[#052B48]/70 sm:text-base sm:leading-8">
              <p>
                Die Parla Gruppe ist Ihr zuverlässiger und kompetenter Partner
                für professionellen Gebäudeservice. Mit einem klaren Fokus auf
                Qualität, Gründlichkeit und Kundenzufriedenheit kümmern wir uns
                um den Werterhalt Ihrer Immobilien.
              </p>

              <p>
                Unser erfahrenes Team bietet maßgeschneiderte Lösungen für
                private und gewerbliche Kunden. Pünktlichkeit, Flexibilität und
                ein hoher Anspruch an unsere eigene Arbeit zeichnen uns aus.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <section className="rounded-[28px] border border-[#D6EEF4] bg-white p-5 shadow-[0_14px_34px_rgba(5,43,72,0.05)] sm:p-7">
              <h2 className="text-xl font-black text-[#052B48] sm:text-2xl">
                Unsere Vorteile
              </h2>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value}
                    className="rounded-2xl border border-[#D6EEF4] bg-[#F5FBFD] px-4 py-3 text-sm font-bold text-[#052B48]"
                  >
                    ✓ {value}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[28px] border border-[#D6EEF4] bg-white p-5 shadow-[0_14px_34px_rgba(5,43,72,0.05)] sm:p-7">
              <h2 className="text-xl font-black text-[#052B48] sm:text-2xl">
                Einsatzgebiete
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#052B48]/70 sm:text-base">
                Unser Hauptsitz befindet sich in Dormagen. Wir betreuen Kunden
                flexibel und zuverlässig im gesamten Umland sowie in den
                umliegenden Großstädten.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-[#D6EEF4] bg-[#F5FBFD] px-4 py-2 text-xs font-black text-[#087EA4]"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <p className="mt-5 rounded-2xl border border-[#D6EEF4] bg-[#FAFEFF] p-4 text-xs leading-6 text-[#052B48]/65">
                Steht Ihre Stadt nicht auf der Liste? Sprechen Sie uns einfach
                an – wir finden eine flexible Lösung für Ihr Objekt.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
