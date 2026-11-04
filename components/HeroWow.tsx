"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";

export default function HeroWow() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-50"
         >
            <source src="https://www.pexels.com/download/video/3769033/" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]" />
      </div>

      {/* 2. TEXT KNOCKOUT */}
      <div className="absolute inset-0 z-10 bg-[#050505] mix-blend-multiply select-none flex flex-col items-center justify-center">
         <motion.div style={{ y, opacity }} className="text-center w-full scale-y-110">
            <h1 className="text-[25vw] leading-[0.8] font-[family-name:var(--font-blackops)] text-white tracking-tighter uppercase mb-0">
               ROAD
            </h1>
            <h1 className="text-[25vw] leading-[0.8] font-[family-name:var(--font-blackops)] text-white tracking-tighter uppercase">
               HOUSE
            </h1>
         </motion.div>
      </div>

      {/* 3. LOGO & HERO CONTENT */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
         
         {/* The Logo with Glow */}
         <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            className="w-64 md:w-80 h-auto pointer-events-auto"
         >
            <img 
               src="/logo-full.png" 
               alt="RoadHouse Café & Restro" 
               className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(255,87,34,0.6)]"
            />
         </motion.div>

         {/* Bottom Status Text */}
         <div className="absolute bottom-10 w-full flex flex-col items-center gap-5 pointer-events-auto max-w-2xl text-center">
             
             {/* Open Status & Distance Pill */}
             <div className="inline-flex items-center gap-2 bg-neutral-900/90 border border-[#ff5722]/30 px-4 py-1.5 rounded-full shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#ff5722] animate-ping" />
                <span className="text-[#ff5722] font-mono text-[11px] tracking-widest uppercase font-bold">
                   NOW OPEN • SEEDUWA • 10 MINS FROM AIRPORT
                </span>
             </div>

             <h2 className="text-xl md:text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wider max-w-lg">
                GOOD FOOD • SIZZLING GRILLS • COLD DRINKS
             </h2>

             {/* CTA BUTTONS */}
             <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
               <Link 
                 href="/menu"
                 className="w-full sm:w-auto bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] text-xl px-10 py-3.5 tracking-wider skew-x-[-8deg] hover:bg-white hover:shadow-[0_0_25px_rgba(255,87,34,0.6)] transition-all"
               >
                 <span className="skew-x-[8deg] block">VIEW MENU &amp; ORDER</span>
               </Link>

               <a 
                 href="https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20would%20like%20to%20reserve%20a%20table."
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full sm:w-auto border border-[#ff5722]/50 bg-black/40 text-[#ff5722] font-bold font-[family-name:var(--font-bebas)] text-xl px-8 py-3.5 tracking-wider skew-x-[-8deg] hover:bg-[#ff5722] hover:text-black transition-all"
               >
                 <span className="skew-x-[8deg] block">BOOK A TABLE (WHATSAPP)</span>
               </a>
             </div>

             <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-[#ff5722]/60"
             >
                <ArrowDown size={28} />
             </motion.div>
         </div>
      </div>

    </section>
  );
}