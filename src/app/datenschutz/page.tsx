import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Datenschutz | PARLA GRUPPE",
  },
  description:
    "Datenschutzerklärung der PARLA GRUPPE mit Informationen zur Verarbeitung personenbezogener Daten.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-24 pb-14 sm:px-6 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-[#D6EEF4] bg-white p-6 shadow-[0_16px_40px_rgba(5,43,72,0.05)] sm:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#087EA4]">
              Datenschutz
            </p>

            <h1 className="mt-3 text-2xl font-black leading-tight text-[#052B48] sm:text-5xl">
              Datenschutzerklärung
            </h1>

            <p className="mt-4 text-sm leading-7 text-[#052B48]/70 sm:text-base">
              Informationen zur Verarbeitung personenbezogener Daten durch die
              PARLA GRUPPE.
            </p>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="text-xl font-black text-[#052B48]">
                  Verantwortlicher
                </h2>

                <div className="mt-4 space-y-1 text-sm leading-7 text-[#052B48]/70 sm:text-base">
                  <p>PARLA GRUPPE</p>
                  <p>Inhaber: Morteza Hassanpour</p>
                  <p>Am Rath 16, 41540 Dormagen</p>
                  <p>parla-gruppe@outlook.de</p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#052B48]">
                  Erhebung und Verarbeitung personenbezogener Daten
                </h2>

                <p className="mt-4 text-sm leading-8 text-[#052B48]/70 sm:text-base">
                  Wenn Sie uns über das Kontaktformular, per E-Mail oder
                  telefonisch kontaktieren, verarbeiten wir die von Ihnen
                  angegebenen Daten zur Bearbeitung Ihrer Anfrage.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#052B48]">
                  Zweck der Verarbeitung
                </h2>

                <p className="mt-4 text-sm leading-8 text-[#052B48]/70 sm:text-base">
                  Die Verarbeitung erfolgt zur Kontaktaufnahme,
                  Angebotserstellung und Bearbeitung Ihrer Anfrage zu unseren
                  Dienstleistungen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#052B48]">
                  Speicherdauer
                </h2>

                <p className="mt-4 text-sm leading-8 text-[#052B48]/70 sm:text-base">
                  Personenbezogene Daten werden nur so lange gespeichert, wie es
                  für die Bearbeitung der Anfrage erforderlich ist oder
                  gesetzliche Aufbewahrungspflichten bestehen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-black text-[#052B48]">
                  Ihre Rechte
                </h2>

                <p className="mt-4 text-sm leading-8 text-[#052B48]/70 sm:text-base">
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                  Einschränkung der Verarbeitung sowie Widerspruch gegen die
                  Verarbeitung Ihrer personenbezogenen Daten.
                </p>
              </section>

              <div className="rounded-2xl border border-[#D6EEF4] bg-[#F5FBFD] p-4 text-xs leading-6 text-[#052B48]/60 sm:text-sm">
                Hinweis: Diese Datenschutzerklärung ist eine Vorlage und sollte
                vor Veröffentlichung rechtlich geprüft werden.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
