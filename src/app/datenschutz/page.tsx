import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-28 pb-16 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold text-[#087EA4]">Datenschutz</p>

          <h1 className="mt-3 text-3xl font-black sm:text-5xl">
            Datenschutzerklärung
          </h1>

          <div className="mt-8 space-y-8 leading-7 text-[#24465C]">
            <div>
              <h2 className="mb-3 text-xl font-black text-[#052B48]">
                Verantwortlicher
              </h2>
              <p>PARLA GRUPPE</p>
              <p>Inhaber: Morteza Hassanpour</p>
              <p>Am Rath 16, 41540 Dormagen</p>
              <p>E-Mail: parla-gruppe@outlook.de</p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-black text-[#052B48]">
                Erhebung und Verarbeitung personenbezogener Daten
              </h2>
              <p>
                Wenn Sie uns über das Kontaktformular, per E-Mail oder telefonisch
                kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten zur
                Bearbeitung Ihrer Anfrage.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-black text-[#052B48]">
                Zweck der Verarbeitung
              </h2>
              <p>
                Die Verarbeitung erfolgt zur Kontaktaufnahme, Angebotserstellung
                und Bearbeitung Ihrer Anfrage zu unseren Dienstleistungen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-black text-[#052B48]">
                Speicherdauer
              </h2>
              <p>
                Personenbezogene Daten werden nur so lange gespeichert, wie es
                für die Bearbeitung der Anfrage erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-black text-[#052B48]">
                Ihre Rechte
              </h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung sowie Widerspruch gegen die
                Verarbeitung Ihrer personenbezogenen Daten.
              </p>
            </div>

            <p className="text-sm text-[#24465C]">
              Hinweis: Diese Datenschutzerklärung ist eine einfache Vorlage und
              sollte vor Veröffentlichung rechtlich geprüft werden.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}