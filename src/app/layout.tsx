import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PARLA GRUPPE Gebäudeservice Köln",
  description:
    "Professionelle Gebäudereinigung, Fensterreinigung und Hausmeisterservice in Köln und Umgebung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
