import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

type ServicePageProps = {
  title: string;
  description: string;
  subServices: string[];
};

export default function ServicePage({
  title,
  description,
  subServices,
}: ServicePageProps) {
  return (
    <main className="min-h-screen bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-24 pb-16 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087EA4]">
              Leistung
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-3xl leading-8 text-[#506878]">
              {description}
            </p>
          </div>

          <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-black">Enthaltene Leistungen</h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {subServices.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-[#F5FBFD] px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EAF8FB] text-xs font-black text-[#087EA4]">
                    ✓
                  </span>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-10 px-0">
            <div className="mx-auto max-w-2xl">
              <div className="mb-7 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#087EA4]">
                  Anfrageformular
                </p>

                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                  Angebot für {title} anfordern
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#506878]">
                  Senden Sie uns Ihre Anfrage. Wir melden uns schnellstmöglich
                  bei Ihnen zurück.
                </p>
              </div>

              <form
                action={`mailto:parla-gruppe@outlook.de?subject=Anfrage: ${title}`}
                method="post"
                encType="text/plain"
                className="rounded-3xl bg-white p-5 shadow-sm sm:p-7"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Name
                    </label>
                    <input
                      name="Name"
                      type="text"
                      placeholder="Ihr Name"
                      className="w-full rounded-xl border border-[#D6EEF4] px-4 py-3 text-sm outline-none placeholder:text-[#78909C] focus:border-[#087EA4]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Telefon
                    </label>
                    <input
                      name="Telefon"
                      type="tel"
                      placeholder="Telefonnummer"
                      className="w-full rounded-xl border border-[#D6EEF4] px-4 py-3 text-sm outline-none placeholder:text-[#78909C] focus:border-[#087EA4]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">
                      E-Mail
                    </label>
                    <input
                      name="E-Mail"
                      type="email"
                      placeholder="name@email.de"
                      className="w-full rounded-xl border border-[#D6EEF4] px-4 py-3 text-sm outline-none placeholder:text-[#78909C] focus:border-[#087EA4]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">
                      Gewünschte Leistung
                    </label>
                    <input
                      name="Leistung"
                      value={title}
                      readOnly
                      className="w-full rounded-xl border border-[#D6EEF4] bg-[#F5FBFD] px-4 py-3 text-sm font-semibold"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">
                      Nachricht
                    </label>
                    <textarea
                      name="Nachricht"
                      rows={5}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                      className="w-full resize-none rounded-xl border border-[#D6EEF4] px-4 py-3 text-sm outline-none placeholder:text-[#78909C] focus:border-[#087EA4]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-5 w-full rounded-xl bg-[#087EA4] py-4 text-sm font-black text-white transition hover:bg-[#066B8C]"
                >
                  Anfrage absenden
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/leistungen"
                  className="text-sm font-bold text-[#087EA4] hover:text-[#052B48]"
                >
                  ← Zurück zu allen Leistungen
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}