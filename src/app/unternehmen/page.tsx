import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <main className="min-h-screen bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-28 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <p className="text-sm font-bold text-[#087EA4]">Über uns</p>

            <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
              Ihr zuverlässiger Partner für professionellen Gebäudeservice
            </h1>

            <p className="mt-6 max-w-4xl leading-8 text-[#24465C]">
              Die Parla Gruppe ist Ihr zuverlässiger und kompetenter Partner für
              professionellen Gebäudeservice. Mit einem klaren Fokus auf
              Qualität, Gründlichkeit und Kundenzufriedenheit kümmern wir uns um
              den Werterhalt Ihrer Immobilien.
            </p>

            <p className="mt-4 max-w-4xl leading-8 text-[#24465C]">
              Unser erfahrenes Team bietet maßgeschneiderte Lösungen für private
              und gewerbliche Kunden. Pünktlichkeit, Flexibilität und ein hoher
              Anspruch an unsere eigene Arbeit zeichnen uns aus.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black">Unsere Vorteile</h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value}
                    className="rounded-2xl bg-[#F5FBFD] px-4 py-3 font-bold text-[#052B48]"
                  >
                    ✓ {value}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-black">Einsatzgebiete</h2>

              <p className="mt-4 leading-7 text-[#24465C]">
                Unser Hauptsitz befindet sich in Dormagen. Wir betreuen Kunden
                flexibel und zuverlässig im gesamten Umland.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full bg-[#EAF8FB] px-4 py-2 text-sm font-bold text-[#087EA4]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}