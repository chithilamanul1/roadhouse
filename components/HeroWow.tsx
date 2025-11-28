"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroWow() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  return (
    <section ref={targetRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Background Layer */}
      <motion.div style={{ opacity, scale, y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76690b6d015?q=80&w=2500&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Grill Fire"
        />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="inline-block border border-[#ff5722] px-4 py-1 rounded-full bg-[#ff5722]/10 backdrop-blur-md mb-6"
        >
          <span className="text-[#ff5722] text-xs font-bold tracking-[0.3em] uppercase">Seeduwa • Est. 2024</span>
        </motion.div>

        <div className="relative mb-8 mix-blend-overlay">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15vw] leading-[0.8] font-[family-name:var(--font-bebas)] text-white text-center mix-blend-difference"
          >
            ROAD<br/>HOUSE
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <Link 
            href="/menu" 
            className="group relative px-8 py-4 bg-[#ff5722] text-black font-bold uppercase tracking-wider overflow-hidden rounded-sm"
          >
            <span className="relative z-10 flex items-center gap-2">Explore Menu <ArrowRight size={18} /></span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>

          <Link 
            href="/location" 
            className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors rounded-sm"
          >
            Book A Table
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
