"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/unternehmen" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#D6EEF4] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-navbar.png"
            alt="PARLA GRUPPE"
            width={56}
            height={56}
            priority
            className="h-auto w-9 sm:w-12"
          />

          <span className="text-sm font-black tracking-wide text-[#052B48] sm:text-lg">
            PARLA <span className="text-[#087EA4]">GRUPPE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#052B48] hover:text-[#087EA4]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/kontakt"
            className="rounded-full bg-[#087EA4] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(8,126,164,0.25)] hover:bg-[#066B8C]"
          >
            Angebot anfordern
          </Link>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6EEF4] text-[#052B48] md:hidden"
          aria-label="Menü öffnen"
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#D6EEF4] bg-white px-4 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-bold text-[#052B48]">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}

            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#087EA4] px-6 py-3 text-center text-white"
            >
              Angebot anfordern
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}