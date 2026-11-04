"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Real photos from RoadHouse Café & Restro, Seeduwa
const GALLERY_PHOTOS = [
  { src: "/gallery-exterior.jpg",  label: "RoadHouse — Outside View (Day)" },
  { src: "/gallery-bar.jpg",       label: "The Bar — Electric Blue Neon Vibes" },
  { src: "/gallery-dining.jpg",    label: "Main Dining Area — Cable Spool Tables" },
  { src: "/gallery-lounge.jpg",    label: "Lounge Seating — Chill Zone" },
  { src: "/gallery-night.jpg",     label: "RoadHouse at Night — Neon Lit" },
];

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % GALLERY_PHOTOS.length);

  return (
    <section className="py-24 bg-[#050811] border-t border-[#00D2FF]/10" id="gallery">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-[#00D2FF] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
            Real Atmosphere
          </p>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] text-white">
            SEE INSIDE <span className="text-[#00D2FF]">ROADHOUSE</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2">
            Real photos from our restaurant and bar in Seeduwa.
          </p>
        </div>

        {/* Grid layout: big left + 4 right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Big featured image */}
          <div
            className="md:col-span-2 md:row-span-2 h-[340px] md:h-[580px] overflow-hidden relative group cursor-pointer rounded-2xl border border-white/10 hover:border-[#00D2FF] transition-all shadow-xl"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={GALLERY_PHOTOS[0].src}
              alt={GALLERY_PHOTOS[0].label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-[#00D2FF]">
                {GALLERY_PHOTOS[0].label}
              </span>
            </div>
          </div>

          {/* Right side: 4 smaller images */}
          {GALLERY_PHOTOS.slice(1).map((photo, i) => (
            <div
              key={i}
              className="h-[180px] md:h-[280px] overflow-hidden relative group cursor-pointer rounded-2xl border border-white/10 hover:border-[#00D2FF] transition-all shadow-lg"
              onClick={() => openLightbox(i + 1)}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-[family-name:var(--font-bebas)] text-lg tracking-widest text-[#00D2FF]">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white hover:text-[#00D2FF] p-2 border border-white/20 hover:border-[#00D2FF] rounded-full transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-10 text-white hover:text-[#00D2FF] p-3 border border-white/20 hover:border-[#00D2FF] rounded-full transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-auto max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_PHOTOS[lightboxIndex].src}
              alt={GALLERY_PHOTOS[lightboxIndex].label}
              className="object-contain max-h-[75vh] w-auto rounded-lg shadow-2xl border border-white/10"
            />
            <p className="text-center text-[#00D2FF] font-[family-name:var(--font-bebas)] text-xl tracking-widest mt-4 uppercase">
              {GALLERY_PHOTOS[lightboxIndex].label}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-10 text-white hover:text-[#00D2FF] p-3 border border-white/20 hover:border-[#00D2FF] rounded-full transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
