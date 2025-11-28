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

  // Reduced motion for better performance
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]); 

  return (
    <section ref={targetRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#050505]">
      
      {/* Static Background Image instead of heavy transforms */}
      <motion.div style={{ opacity, y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76690b6d015?q=80&w=2500&auto=format&fit=crop"
          className="w-full h-full object-cover object-center"
          alt="Grill Fire"
        />
      </motion.div>

      <div className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Simple fade in, no complex physics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block border border-[#ff5722] px-4 py-1 rounded-full bg-[#ff5722]/10 backdrop-blur-md mb-6"
        >
          <span className="text-[#ff5722] text-xs font-bold tracking-[0.3em] uppercase">Seeduwa • Est. 2024</span>
        </motion.div>

        <div className="relative mb-8 mix-blend-overlay">
          <h1 className="text-[18vw] md:text-[12vw] leading-[0.8] font-[family-name:var(--font-bebas)] text-white text-center">
            ROAD<br/>HOUSE
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 items-center"
        >
          <Link 
            href="/menu" 
            className="bg-[#ff5722] text-black font-bold px-8 py-4 uppercase tracking-wider hover:bg-white transition-colors rounded-sm flex items-center gap-2"
          >
            Explore Menu <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
