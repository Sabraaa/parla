import ServicePage from "@/components/ServicePage";

export default function UmzugsservicePage() {
  return (
    <ServicePage
      label="Leistung"
      title="Umzugsservice"
      description="Sicherer, stressfreier und termingerechter Transport Ihres Hab und Guts. Wir unterstützen private und gewerbliche Umzüge mit sorgfältiger Planung und tatkräftiger Hilfe."
      subServices={[
        "Privatumzüge",
        "Gewerbliche Umzüge",
        "Transportservice",
        "Planung und Organisation",
        "Tragehilfe",
        "Termingerechte Durchführung",
      ]}
    />
  );
}
