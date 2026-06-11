import ServicePage from "@/components/ServicePage";

export default function HausmeisterservicePage() {
  return (
    <ServicePage
      label="Leistung"
      title="Hausmeisterservice"
      description="Zuverlässige Objektbetreuung, regelmäßige Kontrollen, kleine Reparaturen und die Pflege der Außenanlagen. Wir sorgen für einen reibungslosen und sicheren Ablauf in Ihrer Immobilie."
      subServices={[
        "Objektbetreuung",
        "Regelmäßige Kontrollen",
        "Kleine Reparaturen",
        "Pflege der Außenanlagen",
        "Ordnung und Sicherheit",
        "Saisonale Betreuung",
      ]}
    />
  );
}