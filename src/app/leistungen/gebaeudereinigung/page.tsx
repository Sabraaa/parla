import ServicePage from "@/components/ServicePage";

export default function GebaeudereinigungPage() {
  return (
    <ServicePage
      label="Leistung"
      title="Gebäudereinigung"
      description="Gründliche und professionelle Reinigung von Wohn- und Gewerbeimmobilien. Dazu gehören unter anderem Treppenhausreinigung, Glas- und Fensterreinigung, Büroreinigung und Praxisreinigung. Wir sorgen für strahlende Sauberkeit nach höchsten Standards."
      subServices={[
        "Treppenhausreinigung",
        "Glas- und Fensterreinigung",
        "Büroreinigung",
        "Praxisreinigung",
        "Allgemeinreinigung",
        "Spezialreinigung",
      ]}
    />
  );
}