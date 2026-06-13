import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyParla from "@/components/WhyParla";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "PARLA GRUPPE | Gebäudeservice in Dormagen, Köln & Umgebung",
  },
  description:
    "Professionelle Gebäudereinigung, Hausmeisterservice, Entrümpelung und Umzugsservice in Dormagen, Köln, Düsseldorf und Umgebung.",
};

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
