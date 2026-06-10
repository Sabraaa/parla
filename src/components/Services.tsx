const services = [
  {
    title: "Gebäudereinigung",
    description:
      "Professionelle Reinigung von Bürogebäuden, Wohnanlagen und Gewerbeobjekten.",
  },
  {
    title: "Fensterreinigung",
    description:
      "Streifenfreie Reinigung von Fenstern, Glasfassaden und Schaufenstern.",
  },
  {
    title: "Büroreinigung",
    description:
      "Saubere Arbeitsplätze, Besprechungsräume und Sanitärbereiche für Ihr Unternehmen.",
  },
  {
    title: "Treppenhausreinigung",
    description:
      "Regelmäßige Pflege von Eingangsbereichen, Treppenhäusern und Gemeinschaftsflächen.",
  },
  {
    title: "Hausmeisterservice",
    description:
      "Zuverlässige Betreuung und Werterhaltung Ihrer Immobilie.",
  },
  {
    title: "Praxisreinigung",
    description:
      "Hygienische Reinigung für Arztpraxen und medizinische Einrichtungen.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white via-[#F5FBFD] to-[#EAF8FB] px-4 py-24 sm:px-6 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#087EA4]">
            Unsere Leistungen
          </p>

          <h2 className="text-3xl font-extrabold text-[#052B48] sm:text-4xl lg:text-5xl">
            Gebäudeservice aus einer Hand
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#062033]/70">
            Wir unterstützen Unternehmen, Hausverwaltungen und Immobilienbesitzer
            mit zuverlässigen Dienstleistungen rund um Sauberkeit, Pflege und
            Werterhaltung.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[28px] border border-[#D6EEF4] bg-white/90 p-7 shadow-[0_18px_45px_rgba(5,43,72,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#14B8C8]/50 hover:shadow-[0_24px_60px_rgba(8,126,164,0.14)] sm:p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF8FB] text-[#087EA4] transition group-hover:bg-[#087EA4] group-hover:text-white">
                ✦
              </div>

              <h3 className="mb-3 text-xl font-bold text-[#052B48]">
                {service.title}
              </h3>

              <p className="leading-7 text-[#062033]/70">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}