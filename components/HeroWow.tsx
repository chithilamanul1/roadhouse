"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Flame, Phone } from "lucide-react";

export default function HeroWow() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center pt-20">
      
      {/* 1. HIGH-PERFORMANCE STATIC BACKDROP (Zero video decoding lag, 0ms load) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle orange radial grill-glow at center bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,87,34,0.18)_0%,transparent_70%)] blur-2xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      </div>

      {/* 2. GIANT WATERMARK TEXT (Pure CSS, 0 CPU overhead) */}
      <div className="absolute inset-0 z-0 select-none flex flex-col items-center justify-center opacity-10 pointer-events-none">
        <h1 className="text-[22vw] leading-[0.8] font-[family-name:var(--font-blackops)] text-white tracking-tighter uppercase">
          ROAD
        </h1>
        <h1 className="text-[22vw] leading-[0.8] font-[family-name:var(--font-blackops)] text-white tracking-tighter uppercase">
          HOUSE
        </h1>
      </div>

      {/* 3. MAIN HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Real Logo with hardware-accelerated entrance */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-60 sm:w-72 md:w-88 h-auto mb-6 transform-gpu"
        >
          <img 
            src="/logo-full.png" 
            alt="RoadHouse Café & Restro" 
            className="w-full h-full object-contain drop-shadow-[0_10px_25px_rgba(255,87,34,0.4)]"
            loading="eager"
          />
        </motion.div>

        {/* STATUS PILL */}
        <div className="inline-flex items-center gap-2 bg-neutral-900/90 border border-[#ff5722]/40 px-5 py-2 rounded-full mb-5 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
          <span className="text-white font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold">
            NOW OPEN • SEEDUWA • 10 MINS FROM AIRPORT
          </span>
        </div>

        {/* CATCHPHRASE */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-[family-name:var(--font-blackops)] text-white tracking-wide uppercase mb-4 leading-tight">
          GOOD FOOD • SIZZLING GRILLS • COLD DRINKS
        </h2>

        <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          The top dining spot in Seeduwa. Charcoal BBQ, spicy devilled kottu, fresh seafood rice, burgers, juices, and full bar. Free parking for 15+ cars.
        </p>

        {/* CTA BUTTONS (Early RoadHouse skewed style) */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
          <Link 
            href="/menu"
            className="w-full sm:w-auto bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] text-2xl px-10 py-4 tracking-wider skew-x-[-8deg] hover:bg-white transition-all shadow-[0_0_25px_rgba(255,87,34,0.4)] flex items-center justify-center gap-2"
          >
            <span className="skew-x-[8deg] inline-flex items-center gap-2">
              <Flame size={22} /> SEE MENU &amp; ORDER
            </span>
          </Link>

          <a 
            href="https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20would%20like%20to%20reserve%20a%20table."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-white/20 bg-black/50 text-white font-bold font-[family-name:var(--font-bebas)] text-2xl px-8 py-4 tracking-wider skew-x-[-8deg] hover:border-[#ff5722] hover:text-[#ff5722] transition-colors flex items-center justify-center gap-2"
          >
            <span className="skew-x-[8deg] inline-flex items-center gap-2">
              <Phone size={20} /> BOOK A TABLE
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 text-neutral-500 flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
          <ArrowDown size={18} className="animate-bounce text-[#ff5722]" />
        </div>

      </div>

    </section>
  );
}