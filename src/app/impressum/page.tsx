import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Impressum | PARLA GRUPPE",
  },
  description:
    "Impressum und rechtliche Angaben der PARLA GRUPPE Gebäudeservice.",
};

const items = [
  {
    title: "Angaben gemäß § 5 TMG",
    lines: [
      "PARLA GRUPPE",
      "Inhaber: Morteza Hassanpour",
      "Am Rath 16",
      "41540 Dormagen",
    ],
  },
  {
    title: "Kontakt",
    lines: ["Mobil: 0176 57855797", "E-Mail: parla-gruppe@outlook.de"],
  },
  {
    title: "Verantwortlich für den Inhalt",
    lines: ["Morteza Hassanpour", "Am Rath 16", "41540 Dormagen"],
  },
];

export default function ImpressumPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-24 pb-12 sm:px-6 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[28px] border border-[#D6EEF4] bg-white p-5 shadow-[0_16px_40px_rgba(5,43,72,0.06)] sm:p-8 lg:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#087EA4]">
              Impressum
            </p>

            <h1 className="mt-3 text-[28px] font-black leading-[1.12] tracking-tight text-[#052B48] sm:text-5xl">
              Rechtliche Angaben
            </h1>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {items.map((item) => (
                <section
                  key={item.title}
                  className="rounded-2xl border border-[#D6EEF4] bg-[#FAFEFF] p-4 sm:p-5"
                >
                  <h2 className="text-lg font-black leading-snug text-[#052B48]">
                    {item.title}
                  </h2>

                  <div className="mt-3 space-y-1 text-sm leading-7 text-[#052B48]/70 sm:text-base">
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-6 rounded-2xl border border-[#D6EEF4] bg-[#F5FBFD] p-4 text-xs leading-6 text-[#052B48]/65 sm:text-sm sm:leading-7">
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
