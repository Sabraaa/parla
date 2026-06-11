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
    <div className="relative overflow-hidden rounded-[28px] border border-[#D6EEF4] bg-[#F5FBFD] shadow-[0_18px_45px_rgba(5,43,72,0.08)]">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={activeSlide.image}
          alt={activeSlide.title}
          fill
          priority
          className="object-cover transition-all duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#052B48]/55 via-transparent to-white/10" />

        <div className="absolute bottom-5 left-5 right-20">
          <p className="mb-3 inline-block rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#052B48]">
            {activeSlide.title}
          </p>

          <Link
            href={activeSlide.href}
            className="block w-fit rounded-full bg-[#087EA4] px-5 py-3 text-sm font-bold text-white shadow-md"
          >
            Mehr erfahren
          </Link>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-[#052B48] shadow-md"
          aria-label="Vorheriges Bild"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold text-[#052B48] shadow-md"
          aria-label="Nächstes Bild"
        >
          ›
        </button>
      </div>

      <div className="absolute bottom-5 right-5 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all ${
              current === index ? "w-8 bg-white" : "w-2.5 bg-white/60"
            }`}
            aria-label={`${slide.title} anzeigen`}
          />
        ))}
      </div>
    </div>
  );
}
