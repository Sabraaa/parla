import ServicePage from "@/components/ServicePage";

export default function EntruempelungPage() {
  return (
    <ServicePage
      label="Leistung"
      title="Entrümpelung"
      description="Fachgerechte, schnelle und diskrete Räumung von Wohnungen, Häusern, Kellern oder Gewerbeflächen. Inklusive ordnungsgemäßer und umweltfreundlicher Entsorgung des Sperrmülls. Besenreine Übergabe garantiert."
      subServices={[
        "Wohnungsauflösung",
        "Kellerentrümpelung",
        "Hausentrümpelung",
        "Gewerbeflächen",
        "Sperrmüllentsorgung",
        "Besenreine Übergabe",
      ]}
    />
  );
}