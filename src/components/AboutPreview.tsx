export default function AboutPreview() {
  return (
    <section className="bg-[#F5FBFD] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[#D6EEF4] bg-white p-8 shadow-[0_18px_45px_rgba(5,43,72,0.06)] sm:p-12">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#087EA4]">
          Über PARLA GRUPPE
        </p>
        <h2 className="max-w-3xl text-3xl font-extrabold text-[#052B48] sm:text-5xl">
          Ihr Partner für professionelle Gebäudedienstleistungen
        </h2>
        <p className="mt-6 max-w-3xl leading-8 text-[#062033]/70">
          PARLA GRUPPE unterstützt Unternehmen, Hausverwaltungen und
          Immobilienbesitzer mit zuverlässigen Services rund um Reinigung,
          Betreuung und Werterhaltung.
        </p>

        <a
          href="/unternehmen"
          className="mt-8 inline-block rounded-full bg-[#087EA4] px-8 py-4 font-bold text-white hover:bg-[#066B8C]"
        >
          Mehr über uns
        </a>
      </div>
    </section>
  );
}
