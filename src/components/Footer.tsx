import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#D6EEF4] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-9 sm:px-6 sm:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-full.png"
              alt="PARLA GRUPPE Gebäudeservice"
              width={320}
              height={180}
              className="h-auto w-44 sm:w-56"
            />

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#052B48]/70">
              Professionelle Gebäudeservices für Unternehmen, Hausverwaltungen
              und Immobilienbesitzer in Köln und Umgebung.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-black text-[#052B48]">Leistungen</h3>
            <ul className="space-y-2.5 text-sm text-[#052B48]/70">
              <li>Gebäudereinigung</li>
              <li>Fensterreinigung</li>
              <li>Büroreinigung</li>
              <li>Hausmeisterservice</li>
              <li>Praxisreinigung</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-black text-[#052B48]">Unternehmen</h3>
            <ul className="space-y-2.5 text-sm text-[#052B48]/70">
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
            <h3 className="mb-3 text-sm font-black text-[#052B48]">Kontakt</h3>
            <ul className="space-y-2.5 text-sm text-[#052B48]/70">
              <li>0176 57855797</li>
              <li>parla-gruppe@outlook.de</li>
              <li>Dormagen, Köln & Umgebung</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[#D6EEF4] pt-5 text-xs text-[#052B48]/60 sm:flex-row sm:items-center sm:justify-between">
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
