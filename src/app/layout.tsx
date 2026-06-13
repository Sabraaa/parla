import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PARLA GRUPPE",
    template: "%s | PARLA GRUPPE",
  },

  description:
    "Professionelle Gebäudereinigung, Hausmeisterservice, Entrümpelung und Umzugsservice in Dormagen, Köln, Düsseldorf und Umgebung.",

  icons: {
    icon: "/logo-navbar.png",
    shortcut: "/logo-navbar.png",
    apple: "/logo-navbar.png",
  },

  metadataBase: new URL("https://parla-gruppe.de"),

  openGraph: {
    title: "PARLA GRUPPE | Gebäudeservice in Dormagen, Köln & Umgebung",
    description:
      "Professionelle Gebäudereinigung, Hausmeisterservice, Entrümpelung und Umzugsservice in Dormagen, Köln, Düsseldorf und Umgebung.",
    url: "https://parla-gruppe.de",
    siteName: "PARLA GRUPPE",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "PARLA GRUPPE Gebäudeservice",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PARLA GRUPPE | Gebäudeservice in Dormagen, Köln & Umgebung",
    description:
      "Professionelle Gebäudereinigung, Hausmeisterservice, Entrümpelung und Umzugsservice in Dormagen, Köln, Düsseldorf und Umgebung.",
    images: ["/logo-full.png"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PARLA GRUPPE",
  url: "https://parla-gruppe.de",
  telephone: "+4917657855797",
  email: "parla-gruppe@outlook.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Am Rath 16",
    postalCode: "41540",
    addressLocality: "Dormagen",
    addressCountry: "DE",
  },
  areaServed: [
    "Dormagen",
    "Köln",
    "Düsseldorf",
    "Leverkusen",
    "Neuss",
    "Mönchengladbach",
  ],
  description:
    "Professionelle Gebäudereinigung, Hausmeisterservice, Entrümpelung und Umzugsservice in Dormagen, Köln und Umgebung.",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Gebäudereinigung",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Hausmeisterservice",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Entrümpelung",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Umzugsservice",
      },
    },
  ],
  founder: {
    "@type": "Person",
    name: "Morteza Hassanpour",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#052B48]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
