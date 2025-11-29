"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroWow() {
  const containerRef = useRef(null);
  const [statusText, setStatusText] = useState("OPENING SOON • SEEDUWA"); // Default

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // TARGET DATE: December 30, 2025
    const targetDate = new Date("2025-12-30T00:00:00").getTime();
    const now = new Date().getTime();

    if (now >= targetDate) {
      setStatusText("NOW OPEN • SEEDUWA");
    } else {
      setStatusText("OPENING SOON • SEEDUWA");
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
         <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
         >
            <source src="https://videos.pexels.com/video-files/3195598/3195598-uhd_2560_1440_25fps.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
      </div>

      {/* 2. TEXT KNOCKOUT */}
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

      {/* 3. LOGO & STATUS */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
         
         <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, type: "spring" }}
            className="w-40 h-40 md:w-64 md:h-64 bg-black rounded-full border-4 border-[#ff5722] p-4 shadow-[0_0_100px_rgba(255,87,34,0.5)] flex items-center justify-center pointer-events-auto"
         >
            <img 
               src="/logo-full.png" 
               alt="Road House" 
               className="w-full h-full object-contain drop-shadow-[0_0_20px_#ff5722]"
            />
         </motion.div>

         <div className="absolute bottom-12 w-full flex flex-col items-center gap-6 pointer-events-auto">
             
             <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-white/50" />
                {/* DYNAMIC TEXT */}
                <span className="text-white font-mono text-xs tracking-[0.5em] uppercase animate-pulse">
                   {statusText}
                </span>
                <div className="h-[1px] w-12 bg-white/50" />
             </div>

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
