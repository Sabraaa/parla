import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Feature = {
  title: string;
  description: string;
};

type Service = {
  title: string;
  description: string;
};

type ServiceRequestPageProps = {
  badge: string;
  title: string;
  description: string;
  serviceName: string;
  features: Feature[];
  servicesTitle: string;
  services: Service[];
};

export default function ServiceRequestPage({
  badge,
  title,
  description,
  serviceName,
  features,
  servicesTitle,
  services,
}: ServiceRequestPageProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5FBFD] text-[#052B48]">
      <Navbar />

      <section className="px-4 pt-24 pb-14 sm:px-6 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] border border-[#D6EEF4] bg-white p-5 shadow-[0_16px_40px_rgba(5,43,72,0.06)] sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#D6EEF4] bg-[#F5FBFD] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#087EA4]">
                {badge}
              </span>

              <h1 className="mt-4 text-[30px] font-black leading-[1.12] tracking-tight text-[#052B48] sm:text-5xl">
                {title}
              </h1>

              <p className="mt-4 text-[15px] leading-7 text-[#052B48]/70 sm:text-base sm:leading-8">
                {description}
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-[#D6EEF4] bg-[#FAFEFF] p-4"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF8FB] text-[#087EA4]">
                    ✓
                  </div>

                  <h3 className="text-sm font-black text-[#052B48]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#052B48]/65">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-10 sm:mt-12">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#087EA4]">
                  Leistungen
                </p>
                <h2 className="mt-2 text-2xl font-black text-[#052B48] sm:text-3xl">
                  {servicesTitle}
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#052B48]/65">
                Wählen Sie die passende Leistung aus und fragen Sie direkt ein
                unverbindliches Angebot an.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[24px] border border-[#D6EEF4] bg-white p-5 shadow-[0_12px_30px_rgba(5,43,72,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(5,43,72,0.08)]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5FBFD] text-lg font-black text-[#087EA4]">
                    ✦
                  </div>

                  <h3 className="text-base font-black text-[#052B48]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#052B48]/65">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10 sm:mt-12">
            <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div className="rounded-[28px] border border-[#D6EEF4] bg-white p-5 shadow-[0_14px_35px_rgba(5,43,72,0.05)] sm:p-7">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#087EA4]">
                  Anfrage
                </p>

                <h2 className="mt-2 text-2xl font-black leading-tight text-[#052B48] sm:text-3xl">
                  Angebot für {serviceName} anfordern
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#052B48]/65">
                  Beschreiben Sie kurz Ihr Anliegen. Die PARLA GRUPPE meldet
                  sich schnellstmöglich bei Ihnen zurück.
                </p>

                <div className="mt-5 rounded-2xl border border-[#D6EEF4] bg-[#F5FBFD] p-4 text-sm leading-7 text-[#052B48]/70">
                  <p>
                    <strong className="text-[#052B48]">Mobil:</strong> 0176
                    57855797
                  </p>
                  <p>
                    <strong className="text-[#052B48]">E-Mail:</strong>{" "}
                    parla-gruppe@outlook.de
                  </p>
                </div>
              </div>

              <form
                action={`mailto:parla-gruppe@outlook.de?subject=Anfrage: ${serviceName}`}
                method="post"
                encType="text/plain"
                className="rounded-[28px] border border-[#D6EEF4] bg-white p-4 shadow-[0_14px_35px_rgba(5,43,72,0.06)] sm:p-6"
              >
                <div className="grid gap-3.5">
                  <label>
                    <span className="mb-1.5 block text-xs font-black text-[#052B48]">
                      Gewünschte Leistung
                    </span>
                    <input
                      name="Leistung"
                      value={serviceName}
                      readOnly
                      className="w-full rounded-xl border border-[#D6EEF4] bg-[#F5FBFD] px-3.5 py-3 text-sm font-semibold text-[#052B48] outline-none"
                    />
                  </label>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <label>
                      <span className="mb-1.5 block text-xs font-black text-[#052B48]">
                        Name
                      </span>
                      <input
                        name="Name"
                        placeholder="Ihr Name"
                        required
                        className="w-full rounded-xl border border-[#D6EEF4] bg-[#FAFEFF] px-3.5 py-3 text-sm text-[#052B48] outline-none placeholder:text-[#8CA0AD] focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/10"
                      />
                    </label>

                    <label>
                      <span className="mb-1.5 block text-xs font-black text-[#052B48]">
                        Telefon
                      </span>
                      <input
                        name="Telefon"
                        type="tel"
                        placeholder="Telefonnummer"
                        className="w-full rounded-xl border border-[#D6EEF4] bg-[#FAFEFF] px-3.5 py-3 text-sm text-[#052B48] outline-none placeholder:text-[#8CA0AD] focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/10"
                      />
                    </label>
                  </div>

                  <label>
                    <span className="mb-1.5 block text-xs font-black text-[#052B48]">
                      E-Mail-Adresse
                    </span>
                    <input
                      name="E-Mail"
                      type="email"
                      placeholder="name@email.de"
                      required
                      className="w-full rounded-xl border border-[#D6EEF4] bg-[#FAFEFF] px-3.5 py-3 text-sm text-[#052B48] outline-none placeholder:text-[#8CA0AD] focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/10"
                    />
                  </label>

                  <label>
                    <span className="mb-1.5 block text-xs font-black text-[#052B48]">
                      Nachricht
                    </span>
                    <textarea
                      name="Nachricht"
                      rows={4}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                      required
                      className="w-full resize-none rounded-xl border border-[#D6EEF4] bg-[#FAFEFF] px-3.5 py-3 text-sm text-[#052B48] outline-none placeholder:text-[#8CA0AD] focus:border-[#087EA4] focus:ring-2 focus:ring-[#087EA4]/10"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#087EA4] px-6 py-3.5 text-sm font-black text-white shadow-[0_12px_28px_rgba(8,126,164,0.22)] transition hover:bg-[#066B8C]"
                >
                  Anfrage absenden
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}