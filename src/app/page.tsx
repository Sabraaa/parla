import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyParla from "@/components/WhyParla";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      <WhyParla />
      <ContactCTA />
      <Footer />
    </main>
  );
}