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
    <header className="fixed top-0 z-50 w-full border-b border-[#D6EEF4] bg-white/95 shadow-[0_6px_22px_rgba(5,43,72,0.04)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image
            src="/logo-navbar.png"
            alt="PARLA GRUPPE"
            width={56}
            height={56}
            priority
            className="h-auto w-9 shrink-0 sm:w-11"
          />

          <span className="truncate text-sm font-black text-[#052B48] sm:text-lg">
            PARLA <span className="text-[#087EA4]">GRUPPE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#052B48] transition hover:text-[#087EA4]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/kontakt"
            className="rounded-full bg-[#087EA4] px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(8,126,164,0.2)] transition hover:bg-[#066B8C]"
          >
            Angebot anfordern
          </Link>
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D6EEF4] bg-[#F5FBFD] text-lg font-black leading-none text-[#052B48] md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#D6EEF4] bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm font-bold text-[#052B48]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 transition hover:bg-[#F5FBFD] hover:text-[#087EA4]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-xl bg-[#087EA4] px-5 py-3 text-center text-white shadow-[0_10px_25px_rgba(8,126,164,0.18)]"
            >
              Angebot anfordern
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
