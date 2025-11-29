"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

export default function HeroWow() {
  const containerRef = useRef(null);
  const [statusText, setStatusText] = useState("EST. 2025 • COMING SOON");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const openingDate = new Date("2025-12-01T00:00:00").getTime();
    const now = new Date().getTime();

    if (now >= openingDate) {
      setStatusText("OPEN NOW • SEEDUWA"); // Fixed
    } else {
      setStatusText("EST. 2025 • COMING SOON");
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2500&auto=format&fit=crop"
            alt="Dark Grill Background"
            className="w-full h-full object-cover opacity-50"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505]" />
      </div>

      {/* TEXT LAYER */}
      <div className="absolute inset-0 z-10 bg-black mix-blend-multiply select-none flex flex-col items-center justify-center">
         <motion.div style={{ y, opacity }} className="text-center w-full scale-y-110">
            <h1 className="text-[28vw] leading-[0.75] font-[family-name:var(--font-blackops)] text-white tracking-tighter uppercase mb-0">
               ROAD
            </h1>
            <h1 className="text-[28vw] leading-[0.75] font-[family-name:var(--font-blackops)] text-white tracking-tighter uppercase">
               HOUSE
            </h1>
         </motion.div>
      </div>

      {/* LOGO & STATUS */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
         
         <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
            className="w-64 h-auto pointer-events-auto"
         >
            <img 
               src="logo-full.png" 
               alt="Road House Neon Logo" 
               className="w-full h-full object-contain drop-shadow-[0_0_30px_#ff5722] filter brightness-125"
            />
         </motion.div>

         <div className="absolute bottom-20 w-full flex flex-col items-center pointer-events-auto">
             <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-white/50" />
                <span className="text-white font-mono text-xs tracking-[0.5em] uppercase animate-pulse">
                   {statusText}
                </span>
                <div className="h-[1px] w-12 bg-white/50" />
             </div>

             <Link 
               href="/menu"
               className="group relative bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] text-xl px-12 py-4 tracking-widest skew-x-[-10deg] hover:bg-white transition-all shadow-[0_0_30px_rgba(255,87,34,0.5)] hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] overflow-hidden"
             >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10" />
                <span className="skew-x-[10deg] block relative z-20">ENTER THE GRILL</span>
             </Link>
         </div>
      </div>
    </section>
  );
}
