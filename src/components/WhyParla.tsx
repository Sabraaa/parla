const items = [
  "Zuverlässige Ausführung",
  "Flexible Einsatzzeiten",
  "Professionelles Team",
  "Persönlicher Ansprechpartner",
];

export default function WhyParla() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#087EA4]">
            Warum PARLA?
          </p>

          <h2 className="text-3xl font-black leading-tight text-[#052B48] sm:text-5xl">
            Sauberkeit, die Vertrauen schafft.
          </h2>

          <p className="mt-5 leading-8 text-[#062033]/70">
            Wir arbeiten strukturiert, termintreu und mit hohem Anspruch an
            Qualität. So bleibt Ihre Immobilie gepflegt und repräsentativ.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-[24px] border border-[#D6EEF4] bg-[#F5FBFD] p-6 font-bold text-[#052B48]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}