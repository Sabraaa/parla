import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontaktPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-white px-4 pt-32 pb-24 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold text-[#052B48] sm:text-6xl">
              Kontakt
            </h1>
            <p className="mt-6 leading-8 text-[#062033]/70">
              Schreiben Sie uns eine Nachricht. Wir melden uns schnellstmöglich zurück.
            </p>
          </div>

          <form
            action="mailto:info@parla-gruppe.de?subject=Kontaktanfrage"
            method="post"
            encType="text/plain"
            className="rounded-[32px] border border-[#D6EEF4] bg-[#F5FBFD] p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <input
                name="Name"
                placeholder="Name"
                required
                className="rounded-2xl border border-[#D6EEF4] px-5 py-4"
              />
              <input
                type="email"
                name="E-Mail"
                placeholder="E-Mail-Adresse"
                required
                className="rounded-2xl border border-[#D6EEF4] px-5 py-4"
              />
              <input
                type="tel"
                name="Telefon"
                placeholder="Telefonnummer"
                className="rounded-2xl border border-[#D6EEF4] px-5 py-4"
              />
              <textarea
                name="Nachricht"
                placeholder="Ihre Nachricht"
                rows={5}
                required
                className="resize-none rounded-2xl border border-[#D6EEF4] px-5 py-4"
              />
              <button type="submit" className="rounded-full bg-[#087EA4] px-8 py-4 font-bold text-white">
                Anfrage absenden
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
