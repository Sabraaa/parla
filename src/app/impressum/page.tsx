import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-28 pb-16 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold text-[#087EA4]">Impressum</p>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Rechtliche Angaben
          </h1>

          <div className="mt-8 space-y-8 text-[#24465C]">
            <div>
              <h2 className="mb-3 text-xl font-black text-[#052B48]">
                Angaben gemäß § 5 TMG
              </h2>
              <p>PARLA GRUPPE</p>
              <p>Inhaber: Morteza Hassanpour</p>
              <p>Am Rath 16</p>
              <p>41540 Dormagen</p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-black text-[#052B48]">
                Kontakt
              </h2>
              <p>Mobil: 0176 57855797</p>
              <p>E-Mail: parla-gruppe@outlook.de</p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-black text-[#052B48]">
                Verantwortlich für den Inhalt
              </h2>
              <p>Morteza Hassanpour</p>
              <p>Am Rath 16</p>
              <p>41540 Dormagen</p>
            </div>

            <p className="leading-7">
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              übernehmen wir keine Gewähr.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}