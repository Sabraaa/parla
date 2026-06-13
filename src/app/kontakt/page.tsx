import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Kontakt | PARLA GRUPPE Gebäudeservice",
  },
  description:
    "Kontaktieren Sie PARLA GRUPPE für ein Angebot zu Gebäudereinigung, Hausmeisterservice, Entrümpelung oder Umzugsservice.",
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <div className="rounded-[28px] border border-[#D6EEF4] bg-white p-5 shadow-[0_16px_40px_rgba(5,43,72,0.06)] sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#087EA4]">
                Kontakt
              </p>

              <h1 className="mt-3 text-[29px] font-black leading-[1.12] tracking-tight text-[#052B48] sm:text-5xl">
                Angebot anfragen
              </h1>

              <p className="mt-4 text-sm leading-7 text-[#052B48]/70 sm:text-base sm:leading-8">
                Schreiben Sie uns eine Nachricht. Wir melden uns
                schnellstmöglich bei Ihnen zurück.
              </p>

              <div className="mt-6 space-y-3 text-sm leading-7 text-[#052B48]/72">
                <p>
                  <strong className="text-[#052B48]">Mobil:</strong> 0176
                  57855797
                </p>
                <p>
                  <strong className="text-[#052B48]">E-Mail:</strong>{" "}
                  parla-gruppe@outlook.de
                </p>
                <p>
                  <strong className="text-[#052B48]">Adresse:</strong> Am Rath
                  16, 41540 Dormagen
                </p>
              </div>
            </div>

            <form
              action="mailto:parla-gruppe@outlook.de?subject=Anfrage über die Website"
              method="post"
              encType="text/plain"
              className="rounded-[28px] border border-[#D6EEF4] bg-white p-4 shadow-[0_16px_40px_rgba(5,43,72,0.06)] sm:p-6"
            >
              <div className="grid gap-3.5 sm:grid-cols-2">
                <label>
                  <span className="mb-1.5 block text-xs font-black text-[#052B48]">
                    Name
                  </span>
                  <input
                    name="Name"
                    placeholder="Ihr Name"
                    required
                    className="w-full rounded-xl border border-[#D6EEF4] bg-[#FAFEFF] px-3.5 py-3 text-sm text-[#052B48] outline-none placeholder:text-[#78909C] focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/10"
                  />
                </label>

                <label>
                  <span className="mb-1.5 block text-xs font-black text-[#052B48]">
                    Telefon
                  </span>
                  <input
                    name="Telefon"
                    type="tel"
                    placeholder="Telefonnummer"
                    className="w-full rounded-xl border border-[#D6EEF4] bg-[#FAFEFF] px-3.5 py-3 text-sm text-[#052B48] outline-none placeholder:text-[#78909C] focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/10"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-black text-[#052B48]">
                    E-Mail
                  </span>
                  <input
                    name="E-Mail"
                    type="email"
                    placeholder="name@email.de"
                    required
                    className="w-full rounded-xl border border-[#D6EEF4] bg-[#FAFEFF] px-3.5 py-3 text-sm text-[#052B48] outline-none placeholder:text-[#78909C] focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/10"
                  />
                </label>

                <label className="sm:col-span-2">
                  <span className="mb-1.5 block text-xs font-black text-[#052B48]">
                    Nachricht
                  </span>
                  <textarea
                    name="Nachricht"
                    rows={4}
                    placeholder="Worum geht es?"
                    required
                    className="w-full resize-none rounded-xl border border-[#D6EEF4] bg-[#FAFEFF] px-3.5 py-3 text-sm text-[#052B48] outline-none placeholder:text-[#78909C] focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/10"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-[#087EA4] py-3.5 text-sm font-black text-white shadow-[0_12px_28px_rgba(8,126,164,0.22)] transition hover:bg-[#066B8C]"
              >
                Anfrage absenden
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
