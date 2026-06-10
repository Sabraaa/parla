import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function UnternehmenPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-white px-4 pt-32 pb-24 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold text-[#052B48] sm:text-6xl">
            Über PARLA GRUPPE
          </h1>
          <p className="mt-8 leading-8 text-[#062033]/70">
            PARLA GRUPPE steht für professionelle Gebäudedienstleistungen,
            Zuverlässigkeit und saubere Ergebnisse. Weitere Unternehmensinhalte
            werden ergänzt.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}