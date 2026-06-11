import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type ServicePageProps = {
  label: string;
  title: string;
  description: string;
  subServices: string[];
};

export default function ServicePage({
  label,
  title,
  description,
  subServices,
}: ServicePageProps) {
  return (
    <main className="min-h-screen bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-28 pb-16 sm:px-6 lg:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-[#D6EEF4] bg-white p-6 shadow-[0_18px_45px_rgba(5,43,72,0.06)] sm:p-10">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#087EA4]">
              {label}
            </p>

            <h1 className="text-4xl font-black leading-tight text-[#052B48] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-4xl text-base leading-8 text-[#24465C] sm:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <section className="rounded-[32px] border border-[#D6EEF4] bg-white p-6 shadow-[0_18px_45px_rgba(5,43,72,0.06)] sm:p-8">
              <h2 className="text-2xl font-black text-[#052B48]">
                Enthaltene Leistungen
              </h2>

              <div className="mt-6 grid gap-4">
                {subServices.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-[#F5FBFD] px-4 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF8FB] text-sm font-black text-[#087EA4]">
                      ✓
                    </span>
                    <p className="font-bold text-[#052B48]">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[32px] border border-[#D6EEF4] bg-white p-6 shadow-[0_18px_45px_rgba(5,43,72,0.06)] sm:p-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#087EA4]">
                Anfrageformular
              </p>

              <h2 className="text-2xl font-black leading-tight text-[#052B48] sm:text-3xl">
                Angebot für {title} anfordern
              </h2>

              <p className="mt-3 text-base leading-7 text-[#24465C]">
                Füllen Sie das Formular aus. Wir melden uns schnellstmöglich bei
                Ihnen zurück.
              </p>

              <form
                action={`mailto:info@parla-gruppe.de?subject=Anfrage: ${title}`}
                method="post"
                encType="text/plain"
                className="mt-7 grid gap-5"
              >
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#052B48]">
                    Gewünschte Leistung
                  </label>
                  <input
                    type="text"
                    name="Leistung"
                    value={title}
                    readOnly
                    className="w-full rounded-2xl border border-[#B9DEE8] bg-[#EAF8FB] px-5 py-4 text-sm font-bold text-[#052B48] outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#052B48]">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Ihr vollständiger Name"
                    required
                    className="w-full rounded-2xl border border-[#B9DEE8] bg-white px-5 py-4 text-sm text-[#052B48] outline-none placeholder:text-[#5D7686] focus:border-[#087EA4]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#052B48]">
                    E-Mail-Adresse
                  </label>
                  <input
                    type="email"
                    name="E-Mail"
                    placeholder="name@beispiel.de"
                    required
                    className="w-full rounded-2xl border border-[#B9DEE8] bg-white px-5 py-4 text-sm text-[#052B48] outline-none placeholder:text-[#5D7686] focus:border-[#087EA4]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#052B48]">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    name="Telefon"
                    placeholder="Ihre Telefonnummer"
                    className="w-full rounded-2xl border border-[#B9DEE8] bg-white px-5 py-4 text-sm text-[#052B48] outline-none placeholder:text-[#5D7686] focus:border-[#087EA4]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#052B48]">
                    Nachricht
                  </label>
                  <textarea
                    name="Nachricht"
                    rows={5}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen oder Ihr Objekt..."
                    required
                    className="w-full resize-none rounded-2xl border border-[#B9DEE8] bg-white px-5 py-4 text-sm text-[#052B48] outline-none placeholder:text-[#5D7686] focus:border-[#087EA4]"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-full bg-[#087EA4] px-7 py-4 text-sm font-black text-white shadow-[0_12px_30px_rgba(8,126,164,0.25)] transition hover:bg-[#066B8C]"
                >
                  Anfrage absenden
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
