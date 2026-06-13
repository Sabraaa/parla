import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Leistungen | PARLA GRUPPE Gebäudeservice",
  },
  description:
    "Alle Leistungen der PARLA GRUPPE: Gebäudereinigung, Hausmeisterservice, Entrümpelung und Umzugsservice in Dormagen, Köln, Düsseldorf und Umgebung.",
};

const services = [
  {
    title: "Gebäudereinigung",
    description:
      "Professionelle Reinigung für Treppenhäuser, Büros, Praxen, Glasflächen und Wohn- oder Gewerbeimmobilien.",
    href: "/leistungen/gebaeudereinigung",
  },
  {
    title: "Hausmeisterservice",
    description:
      "Zuverlässige Objektbetreuung, regelmäßige Kontrollen, kleine Reparaturen und Pflege der Außenanlagen.",
    href: "/leistungen/hausmeisterservice",
  },
  {
    title: "Entrümpelung",
    description:
      "Schnelle und diskrete Räumung von Wohnungen, Kellern, Häusern und Gewerbeflächen inklusive Entsorgung.",
    href: "/leistungen/entruempelung",
  },
  {
    title: "Umzugsservice",
    description:
      "Sorgfältig geplanter Umzugs- und Transportservice für private und gewerbliche Kunden.",
    href: "/leistungen/umzugsservice",
  },
];

export default function LeistungenPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-24 pb-14 sm:px-6 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto w-fit rounded-full border border-[#D6EEF4] bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#087EA4]">
              Unsere Leistungen
            </p>

            <h1 className="mt-5 text-[32px] font-black leading-tight tracking-tight text-[#052B48] sm:text-5xl">
              Gebäudeservice aus einer Hand
            </h1>

            <p className="mt-4 text-base leading-7 text-[#506878] sm:text-lg">
              PARLA GRUPPE unterstützt private und gewerbliche Kunden in
              Dormagen, Köln, Düsseldorf und Umgebung mit zuverlässigen,
              sauberen und flexibel planbaren Dienstleistungen.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-[28px] border border-[#D6EEF4] bg-white p-5 shadow-[0_14px_35px_rgba(5,43,72,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(5,43,72,0.1)] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF8FB] text-lg font-black text-[#087EA4]">
                    {index + 1}
                  </div>

                  <div>
                    <h2 className="text-xl font-black text-[#052B48] sm:text-2xl">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-[#506878]">
                      {service.description}
                    </p>

                    <span className="mt-5 inline-flex items-center text-sm font-black text-[#087EA4]">
                      Mehr erfahren
                      <span className="ml-2 transition group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
