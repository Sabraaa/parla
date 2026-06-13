import ServiceRequestPage from "@/components/ServiceRequestPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Entrümpelung Dormagen & Köln | PARLA GRUPPE",
  },
  description:
    "Schnelle und diskrete Entrümpelung von Wohnungen, Häusern, Kellern und Gewerbeflächen in Dormagen, Köln und Umgebung.",
};

export default function EntruempelungPage() {
  return (
    <ServiceRequestPage
      badge="Entrümpelung"
      serviceName="Entrümpelung"
      title="Platz schaffen, stressfrei und zuverlässig."
      description="Die PARLA GRUPPE übernimmt professionelle Entrümpelungen von Wohnungen, Häusern, Kellern, Gewerbeflächen und mehr – schnell, diskret und besenrein."
      servicesTitle="Unsere Entrümpelungsleistungen"
      features={[
        {
          title: "Schnell & diskret",
          description:
            "Wir arbeiten zügig, leise und mit höchster Diskretion.",
        },
        {
          title: "Fachgerecht",
          description:
            "Ordnungsgemäße Entsorgung und umweltfreundliche Trennung.",
        },
        {
          title: "Besenrein",
          description:
            "Wir hinterlassen die Räume sauber und bezugsfertig.",
        },
      ]}
      services={[
        {
          title: "Wohnungsauflösung",
          description:
            "Komplette Räumung von Wohnungen und Haushalten.",
        },
        {
          title: "Kellerentrümpelung",
          description:
            "Befreiung von Kellern, Lagern und Abstellräumen.",
        },
        {
          title: "Haushaltsauflösung",
          description:
            "Fachgerechte Auflösung von Haushalten aller Art.",
        },
        {
          title: "Gewerberäumung",
          description:
            "Entrümpelung von Büro-, Hallen- und Gewerbeflächen.",
        },
        {
          title: "Sperrmüllentsorgung",
          description:
            "Abholung und Entsorgung von Sperrmüll und Altlasten.",
        },
        {
          title: "Besenreine Übergabe",
          description:
            "Saubere und ordentliche Übergabe der Räumlichkeiten.",
        },
      ]}
    />
  );
}
