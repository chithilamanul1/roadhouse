"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Real photos from RoadHouse Café & Restro, Seeduwa
const GALLERY_PHOTOS = [
  { src: "/gallery-exterior.jpg",  label: "RoadHouse — Outside View (Day)" },
  { src: "/gallery-bar.jpg",       label: "The Bar — RoadHouse Neon Ambience" },
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
    <section className="py-24 bg-[#050505] border-t border-white/10" id="gallery">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-[#ff5722] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
            Real Atmosphere
          </p>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] text-white">
            SEE INSIDE <span className="text-[#ff5722]">ROADHOUSE</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-2">
            Real photos from our restaurant and bar in Seeduwa.
          </p>
        </div>

        {/* Grid layout: big left + 4 right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Big featured image */}
          <div
            className="md:col-span-2 md:row-span-2 h-[340px] md:h-[580px] overflow-hidden relative group cursor-pointer rounded-2xl border border-white/10 hover:border-[#ff5722] transition-colors shadow-xl bg-neutral-900"
            onClick={() => openLightbox(0)}
          >
            <img
              src={GALLERY_PHOTOS[0].src}
              alt={GALLERY_PHOTOS[0].label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
              <span className="text-white font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-[#ff5722]">
                {GALLERY_PHOTOS[0].label}
              </span>
            </div>
          </div>

          {/* Remaining 4 images */}
          {GALLERY_PHOTOS.slice(1).map((photo, i) => (
            <div
              key={i + 1}
              className="h-[280px] overflow-hidden relative group cursor-pointer rounded-2xl border border-white/10 hover:border-[#ff5722] transition-colors shadow-lg bg-neutral-900"
              onClick={() => openLightbox(i + 1)}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                <span className="text-white font-[family-name:var(--font-bebas)] text-lg tracking-wider text-[#ff5722]">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-[#ff5722] p-2"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ff5722] p-2"
              aria-label="Previous"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ff5722] p-2"
              aria-label="Next"
            >
              <ChevronRight size={40} />
            </button>

            <div
              className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_PHOTOS[lightboxIndex].src}
                alt={GALLERY_PHOTOS[lightboxIndex].label}
                className="max-w-full max-h-full object-contain"
              />
              <p className="absolute bottom-2 left-0 right-0 text-center font-mono text-sm text-neutral-300 bg-black/80 py-2">
                {GALLERY_PHOTOS[lightboxIndex].label} ({lightboxIndex + 1} / {GALLERY_PHOTOS.length})
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}