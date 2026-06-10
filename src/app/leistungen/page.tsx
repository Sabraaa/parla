import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  "Gebäudereinigung",
  "Fensterreinigung",
  "Büroreinigung",
  "Hausmeisterservice",
  "Praxisreinigung",
  "Sonderreinigung",
];

export default function LeistungenPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-white px-4 pt-32 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-extrabold text-[#052B48] sm:text-6xl">
            Unsere Leistungen
          </h1>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service} className="rounded-3xl border border-[#D6EEF4] bg-[#F5FBFD] p-7">
                <h2 className="text-xl font-bold text-[#052B48]">{service}</h2>
                <p className="mt-3 leading-7 text-[#062033]/70">
                  Weitere Informationen zu dieser Leistung werden ergänzt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}