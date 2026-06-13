import ServiceRequestPage from "@/components/ServiceRequestPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Gebäudereinigung Dormagen & Köln | PARLA GRUPPE",
  },
  description:
    "Professionelle Gebäudereinigung für Wohn- und Gewerbeimmobilien in Dormagen, Köln, Düsseldorf und Umgebung.",
};

export default function GebaeudereinigungPage() {
  return (
    <ServiceRequestPage
      badge="Gebäudereinigung"
      serviceName="Gebäudereinigung"
      title="Sauberkeit, der Sie vertrauen können."
      description="Die PARLA GRUPPE bietet professionelle Reinigungsdienstleistungen für Wohn- und Gewerbeimmobilien. Gründlich, zuverlässig und mit höchstem Qualitätsanspruch."
      servicesTitle="Unsere Reinigungsleistungen"
      features={[
        {
          title: "Gründliche Reinigung",
          description:
            "Sauberkeit bis ins Detail – für ein hygienisches und gepflegtes Umfeld.",
        },
        {
          title: "Zuverlässig & pünktlich",
          description:
            "Wir halten, was wir versprechen – auf Termine können Sie sich verlassen.",
        },
        {
          title: "Flexible Lösungen",
          description:
            "Individuelle Reinigungskonzepte passend zu Ihrem Objekt.",
        },
      ]}
      services={[
        {
          title: "Treppenhausreinigung",
          description:
            "Regelmäßige Reinigung von Treppenhäusern und Gemeinschaftsflächen.",
        },
        {
          title: "Glas- und Fensterreinigung",
          description:
            "Streifenfreie Reinigung von Fenstern und Glasflächen.",
        },
        {
          title: "Büroreinigung",
          description:
            "Saubere Arbeitsplätze, Besprechungsräume und Sanitärbereiche.",
        },
        {
          title: "Praxisreinigung",
          description:
            "Hygienische Reinigung für Arztpraxen und medizinische Einrichtungen.",
        },
        {
          title: "Allgemeinreinigung",
          description:
            "Unterhaltsreinigung für Wohn- und Gewerbeobjekte nach Bedarf.",
        },
        {
          title: "Spezialreinigung",
          description:
            "Professionelle Reinigung bei besonderen Anforderungen.",
        },
      ]}
    />
  );
}
