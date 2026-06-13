"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Gebäudereinigung",
    image: "/slider-cleaning.jpg",
    href: "/leistungen/gebaeudereinigung",
  },
  {
    title: "Hausmeisterservice",
    image: "/slider-hausmeister.jpg",
    href: "/leistungen/hausmeisterservice",
  },
  {
    title: "Entrümpelung",
    image: "/slider-entruempelung.jpg",
    href: "/leistungen/entruempelung",
  },
  {
    title: "Umzugsservice",
    image: "/slider-umzug.jpg",
    href: "/leistungen/umzugsservice",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[current];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#D6EEF4] bg-[#F5FBFD] shadow-[0_16px_38px_rgba(5,43,72,0.08)] sm:rounded-[24px]">
      <div className="relative aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-[4/3]">
        <Image
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          priority
          className="object-cover transition-all duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#052B48]/55 via-transparent to-white/10" />

        <div className="absolute bottom-4 left-4 right-16 sm:bottom-5 sm:left-5 sm:right-20">
          <p className="mb-2 inline-block rounded-full bg-white/92 px-3 py-1.5 text-xs font-bold text-[#052B48] sm:mb-3 sm:px-4 sm:py-2 sm:text-sm">
            {activeSlide.title}
          </p>

          <Link
            href={activeSlide.href}
            className="block w-fit rounded-full bg-[#087EA4] px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-[#066B8C] sm:px-5 sm:py-3 sm:text-sm"
          >
            Mehr erfahren
          </Link>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-lg font-bold text-[#052B48] shadow-md transition hover:bg-white sm:left-4 sm:h-10 sm:w-10 sm:text-xl"
          aria-label="Vorheriges Bild"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-lg font-bold text-[#052B48] shadow-md transition hover:bg-white sm:right-4 sm:h-10 sm:w-10 sm:text-xl"
          aria-label="Nächstes Bild"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-1.5 sm:bottom-5 sm:right-5 sm:gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all sm:h-2.5 ${
              current === index
                ? "w-7 bg-white sm:w-8"
                : "w-2 bg-white/60 sm:w-2.5"
            }`}
            aria-label={`${slide.title} anzeigen`}
          />
        ))}
      </div>
    </div>
  );
}
