import Link from "next/link";

const services = [
  "Gebäudereinigung",
  "Fensterreinigung",
  "Büroreinigung",
  "Hausmeisterservice",
  "Praxisreinigung",
  "Sonderreinigung",
];

export default function ServicesPreview() {
  return (
    <section className="border-t border-[#D6EEF4] bg-[#F5FBFD] px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#087EA4]">
            Unsere Leistungen
          </p>

          <h2 className="text-3xl font-black leading-tight text-[#052B48] sm:text-5xl">
            Gebäudeservice aus einer Hand
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service}
              className="rounded-[26px] border border-[#D6EEF4] bg-white p-6 shadow-[0_14px_35px_rgba(5,43,72,0.05)]"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF8FB] text-[#087EA4]">
                ✦
              </div>

              <h3 className="text-lg font-black text-[#052B48]">{service}</h3>

              <p className="mt-3 text-sm leading-7 text-[#062033]/70">
                Professionelle und zuverlässige Dienstleistung für Unternehmen,
                Immobilien und Hausverwaltungen.
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/leistungen"
            className="inline-block rounded-full border border-[#087EA4] px-7 py-4 text-sm font-bold text-[#052B48]"
          >
            Alle Leistungen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}