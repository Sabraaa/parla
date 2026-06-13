import ServiceRequestPage from "@/components/ServiceRequestPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Hausmeisterservice Dormagen & Köln | PARLA GRUPPE",
  },
  description:
    "Zuverlässiger Hausmeisterservice und Objektbetreuung für Immobilien in Dormagen, Köln, Düsseldorf und Umgebung.",
};

export default function HausmeisterservicePage() {
  return (
    <ServiceRequestPage
      badge="Hausmeisterservice"
      serviceName="Hausmeisterservice"
      title="Rundum-Service für Ihre Immobilie."
      description="Die PARLA GRUPPE sorgt für die zuverlässige Betreuung, Pflege und Werterhaltung Ihrer Immobilie. Wir sind Ihr Ansprechpartner für alle anfallenden Aufgaben."
      servicesTitle="Unsere Hausmeisterleistungen"
      features={[
        {
          title: "Zuverlässig",
          description:
            "Sie können sich auf unsere schnelle und sorgfältige Arbeit verlassen.",
        },
        {
          title: "Vielseitig",
          description:
            "Ein breites Leistungsspektrum für alle Bereiche rund um Ihre Immobilie.",
        },
        {
          title: "Werterhaltend",
          description:
            "Regelmäßige Pflege und Wartung für den langfristigen Werterhalt.",
        },
      ]}
      services={[
        {
          title: "Objektbetreuung",
          description:
            "Komplette Betreuung Ihrer Immobilie und Ansprechpartner vor Ort.",
        },
        {
          title: "Regelmäßige Kontrollen",
          description:
            "Überwachung und Kontrolle von Sicherheit und Ordnung.",
        },
        {
          title: "Kleine Reparaturen",
          description:
            "Fachgerechte Durchführung kleiner Reparaturen und Instandsetzungen.",
        },
        {
          title: "Außenanlagenpflege",
          description:
            "Pflege von Grünanlagen, Wegen und Außenbereichen.",
        },
        {
          title: "Winterdienst",
          description:
            "Zuverlässiger Winterdienst für sichere Wege und Flächen.",
        },
        {
          title: "Saisonale Betreuung",
          description:
            "Individuelle Betreuung je nach Saison und Anforderung.",
        },
      ]}
    />
  );
}
