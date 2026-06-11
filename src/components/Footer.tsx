import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#D6EEF4] bg-[#EAF8FB]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-full.png"
              alt="PARLA GRUPPE Gebäudeservice"
              width={320}
              height={180}
              className="h-auto w-56 sm:w-64"
            />

            <p className="mt-5 max-w-sm leading-7 text-[#062033]/70">
              Professionelle Gebäudeservices für Unternehmen, Hausverwaltungen
              und Immobilienbesitzer in Köln und Umgebung.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-black text-[#052B48]">Leistungen</h3>
            <ul className="space-y-3 text-[#062033]/70">
              <li>Gebäudereinigung</li>
              <li>Fensterreinigung</li>
              <li>Büroreinigung</li>
              <li>Hausmeisterservice</li>
              <li>Praxisreinigung</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-black text-[#052B48]">Unternehmen</h3>
            <ul className="space-y-3 text-[#062033]/70">
              <li>
                <Link href="/unternehmen">Über uns</Link>
              </li>
              <li>
                <Link href="/leistungen">Leistungen</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-black text-[#052B48]">Kontakt</h3>
            <ul className="space-y-3 text-[#062033]/70">
              <li>02236 – 70 24 794</li>
              <li>0173 – 40 50 472</li>
              <li>info@parla-gruppe.de</li>
              <li>Köln & Umgebung</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#D6EEF4] pt-6 text-sm text-[#062033]/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 PARLA GRUPPE Gebäudeservice. Alle Rechte vorbehalten.</p>

          <div className="flex gap-6">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
