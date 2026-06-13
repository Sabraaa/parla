import ServiceRequestPage from "@/components/ServiceRequestPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Umzugsservice Dormagen & Köln | PARLA GRUPPE",
  },
  description:
    "Sorgfältiger Umzugsservice und Transportservice für private und gewerbliche Umzüge in Dormagen, Köln, Düsseldorf und Umgebung.",
};

export default function UmzugsservicePage() {
  return (
    <ServiceRequestPage
      badge="Umzugsservice"
      serviceName="Umzugsservice"
      title="Ihr Umzug in besten Händen."
      description="Die PARLA GRUPPE unterstützt Sie bei privaten und gewerblichen Umzügen. Sicher, sorgfältig und termingerecht – von der Planung bis zum Transport."
      servicesTitle="Unsere Umzugsleistungen"
      features={[
        {
          title: "Sicher",
          description: "Sorgfältiger Umgang mit Ihrem Hab und Gut.",
        },
        {
          title: "Erfahren",
          description: "Erfahrenes Team für einen reibungslosen Ablauf.",
        },
        {
          title: "Pünktlich",
          description: "Termingerechte Durchführung nach Plan.",
        },
      ]}
      services={[
        {
          title: "Privatumzüge",
          description: "Umzüge für Singles, Familien und Senioren.",
        },
        {
          title: "Gewerbliche Umzüge",
          description: "Umzüge für Büros, Praxen und Einrichtungen.",
        },
        {
          title: "Transportservice",
          description: "Sicherer Transport Ihrer Möbel und Gegenstände.",
        },
        {
          title: "Planung & Organisation",
          description: "Individuelle Planung für einen stressfreien Umzug.",
        },
        {
          title: "Tragehilfe",
          description: "Professionelle Hilfe beim Tragen und Verladen.",
        },
        {
          title: "Montage & Demontage",
          description:
            "Auf- und Abbau von Möbeln und Einrichtungsgegenständen.",
        },
      ]}
    />
  );
}
