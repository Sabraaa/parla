const benefits = [
  {
    title: "Zuverlässige Ausführung",
    description:
      "Wir arbeiten termintreu, sorgfältig und mit klaren Abläufen.",
  },
  {
    title: "Flexible Einsatzzeiten",
    description:
      "Reinigungszeiten werden passend zu Ihrem Betrieb oder Ihrer Immobilie geplant.",
  },
  {
    title: "Professionelles Team",
    description:
      "Unser Team arbeitet diskret, freundlich und mit Blick für Details.",
  },
  {
    title: "Saubere Ergebnisse",
    description:
      "Qualität, Hygiene und ein gepflegter Eindruck stehen bei uns im Mittelpunkt.",
  },
];

export default function WhyParla() {
  return (
    <section id="about" className="bg-[#F5FBFD] px-4 py-24 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#087EA4]">
            Warum PARLA?
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#052B48] sm:text-4xl lg:text-5xl">
            Sauberkeit, die Vertrauen schafft.
          </h2>

          <p className="mt-6 leading-8 text-[#062033]/70">
            PARLA GRUPPE steht für professionelle Gebäudedienstleistungen mit
            einem hohen Anspruch an Qualität, Zuverlässigkeit und ein gepflegtes
            Erscheinungsbild Ihrer Immobilie.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="rounded-[28px] border border-[#D6EEF4] bg-white p-7 shadow-[0_18px_45px_rgba(5,43,72,0.06)]"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF8FB] text-sm font-bold text-[#087EA4]">
                {index + 1}
              </div>

              <h3 className="mb-3 text-lg font-bold text-[#052B48]">
                {benefit.title}
              </h3>

              <p className="leading-7 text-[#062033]/70">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}