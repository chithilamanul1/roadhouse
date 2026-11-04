"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Real photos from RoadHouse Café & Restro, Seeduwa
const GALLERY_PHOTOS = [
  { src: "/gallery-exterior.jpg",  label: "RoadHouse — Outside View (Day)" },
  { src: "/gallery-bar.jpg",       label: "The Bar — Blue Neon Vibes" },
  { src: "/gallery-dining.jpg",    label: "Dining Area — Great Atmosphere" },
  { src: "/gallery-lounge.jpg",    label: "Lounge Seating — Chill Zone" },
  { src: "/gallery-night.jpg",     label: "RoadHouse at Night" },
];

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i! - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  const next = () => setLightboxIndex((i) => (i! + 1) % GALLERY_PHOTOS.length);

  return (
    <section className="py-24 bg-[#050505]" id="gallery">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-[#ff5722] font-mono text-xs tracking-[0.3em] uppercase mb-3">Our Place</p>
          <h2 className="text-5xl font-[family-name:var(--font-bebas)] text-white">
            SEE WHAT IT&apos;S LIKE{" "}
            <span className="text-[#ff5722]">INSIDE ROADHOUSE</span>
          </h2>
          <p className="text-neutral-500 text-sm mt-3">
            Good food. Good vibes. Come see for yourself.
          </p>
        </div>

        {/* Grid layout: big left + 4 right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* Big featured image */}
          <div
            className="md:col-span-2 md:row-span-2 h-[320px] md:h-[560px] overflow-hidden relative group cursor-pointer border border-white/10"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={GALLERY_PHOTOS[0].src}
              alt={GALLERY_PHOTOS[0].label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-white font-[family-name:var(--font-bebas)] text-xl tracking-widest">
                {GALLERY_PHOTOS[0].label}
              </span>
            </div>
          </div>

          {/* Right side: 4 smaller images */}
          {GALLERY_PHOTOS.slice(1).map((photo, i) => (
            <div
              key={i}
              className="h-[170px] md:h-[270px] overflow-hidden relative group cursor-pointer border border-white/10"
              onClick={() => openLightbox(i + 1)}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-[family-name:var(--font-bebas)] text-base tracking-widest">
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
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 border border-white/20 hover:border-white transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-10 text-white/70 hover:text-white p-3 border border-white/20 hover:border-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-16 max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY_PHOTOS[lightboxIndex].src}
              alt={GALLERY_PHOTOS[lightboxIndex].label}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] w-full"
            />
            <p className="text-center text-white/60 font-mono text-xs tracking-widest mt-4 uppercase">
              {GALLERY_PHOTOS[lightboxIndex].label}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-10 text-white/70 hover:text-white p-3 border border-white/20 hover:border-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
