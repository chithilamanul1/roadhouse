"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroWow() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. BACKGROUND VIDEO (The Fire) */}
      <div className="absolute inset-0 z-0">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
         >
            {/* High Quality Fire Loop */}
            <source src="https://cdn.pixabay.com/video/2024/10/29/238826_large.mp4" type="video/mp4" />
         </video>
         {/* Gradient to fade edges */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* 2. THE TEXT KNOCKOUT (Fire inside Text) */}
      <div className="absolute inset-0 z-10 bg-black mix-blend-multiply select-none flex flex-col items-center justify-center">
         <motion.div style={{ y, opacity }} className="text-center w-full scale-y-110">
            <h1 className="text-[25vw] leading-[0.8] font-[family-name:var(--font-blackops)] text-white tracking-tighter uppercase mb-0">
               ROAD
            </h1>
            <h1 className="text-[25vw] leading-[0.8] font-[family-name:var(--font-blackops)] text-white tracking-tighter uppercase">
               HOUSE
            </h1>
         </motion.div>
      </div>

      {/* 3. THE FLOATING LOGO & STATUS */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
         
         {/* The Logo (Blue Neon, No Circle) */}
         <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="w-64 h-auto pointer-events-auto"
         >
            <img 
               src="/logo-full.png" 
               alt="Road House" 
               className="w-full h-full object-contain drop-shadow-[0_0_30px_#ff5722] filter brightness-125"
            />
         </motion.div>

         {/* Bottom Status Text */}
         <div className="absolute bottom-12 w-full flex flex-col items-center gap-6 pointer-events-auto">
             
             <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-white/50" />
                <span className="text-white font-mono text-xs tracking-[0.5em] uppercase animate-pulse">
                   COMING SOON • SEEDUWA
                </span>
                <div className="h-[1px] w-12 bg-white/50" />
             </div>

             {/* Button */}
             <Link 
               href="/menu"
               className="group bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] text-xl px-12 py-4 tracking-widest skew-x-[-10deg] hover:bg-white transition-colors shadow-[0_0_30px_rgba(255,87,34,0.4)]"
             >
                <span className="skew-x-[10deg] block">SEE THE MENU</span>
             </Link>

             <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mt-4 text-white/50"
             >
                <ArrowDown size={32} />
             </motion.div>
         </div>
      </div>

    </section>
  );
}
