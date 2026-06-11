import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const services = [
  {
    title: "Gebäudereinigung",
    description:
      "Gründliche Reinigung für Wohn- und Gewerbeimmobilien, Treppenhäuser, Büros, Praxen und Glasflächen.",
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
      "Fachgerechte Räumung von Wohnungen, Häusern, Kellern und Gewerbeflächen inklusive Entsorgung.",
    href: "/leistungen/entruempelung",
  },
  {
    title: "Umzugsservice",
    description:
      "Sorgfältig geplanter Transport für private und gewerbliche Umzüge mit tatkräftiger Unterstützung.",
    href: "/leistungen/umzugsservice",
  },
];

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-28 pb-16 sm:px-6 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-[#D6EEF4] bg-white p-6 shadow-[0_18px_45px_rgba(5,43,72,0.06)] sm:p-10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#087EA4]">
              Unsere Leistungen
            </p>

            <h1 className="text-4xl font-black leading-tight text-[#052B48] sm:text-6xl">
              Gebäudeservice aus einer Hand
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-8 text-[#24465C] sm:text-lg">
              PARLA GRUPPE unterstützt Unternehmen, Hausverwaltungen und private
              Kunden in Dormagen, Köln, Düsseldorf und Umgebung mit sauber
              organisierten Dienstleistungen.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[30px] border border-[#D6EEF4] bg-white p-6 shadow-[0_14px_35px_rgba(5,43,72,0.05)] sm:p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF8FB] text-[#087EA4]">
                  ✦
                </div>

                <h2 className="text-2xl font-black text-[#052B48]">
                  {service.title}
                </h2>

                <p className="mt-4 leading-8 text-[#24465C]">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-6 inline-block rounded-full bg-[#087EA4] px-6 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(8,126,164,0.22)]"
                >
                  Mehr erfahren
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
