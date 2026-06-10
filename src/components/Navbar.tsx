"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#D6EEF4] bg-[#F5FBFD]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="text-lg font-extrabold tracking-wide text-[#052B48]">
          PARLA
          <span className="ml-2 text-sm font-semibold text-[#087EA4]">GRUPPE</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium text-[#052B48]/75 hover:text-[#087EA4]">
            Leistungen
          </a>
          <a href="#about" className="text-sm font-medium text-[#052B48]/75 hover:text-[#087EA4]">
            Über uns
          </a>
          <a href="#contact" className="text-sm font-medium text-[#052B48]/75 hover:text-[#087EA4]">
            Kontakt
          </a>

          <a
            href="#contact"
            className="rounded-full bg-[#087EA4] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(8,126,164,0.22)] transition hover:bg-[#066B8C]"
          >
            Angebot anfordern
          </a>
        </nav>
      </div>
    </header>
  );
}