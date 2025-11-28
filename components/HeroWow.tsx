"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

export default function HeroWow() {
  // Parallax Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // Range -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2; // Range -1 to 1
    setMousePosition({ x, y });
  };

  // Smooth Physics for Mouse Movement
  const xSpring = useSpring(0, { stiffness: 100, damping: 20 });
  const ySpring = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    xSpring.set(mousePosition.x);
    ySpring.set(mousePosition.y);
  }, [mousePosition, xSpring, ySpring]);

  // Scroll Parallax (Fade out on scroll)
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const yText = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center justify-center"
    >
      
      {/* 1. BACKGROUND LAYER (Dark & Moody) */}
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2500&auto=format&fit=crop"
          alt="Dark Grill Ambience"
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      {/* 2. SPOTLIGHT EFFECT (Follows Mouse) */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
        style={{
          background: `radial-gradient(circle 600px at ${50 + (mousePosition.x * 20)}% ${50 + (mousePosition.y * 20)}%, rgba(255,87,34,0.15), transparent 80%)`
        }}
      />

      {/* 3. CONTENT LAYER (The Wolf & Text) */}
      <motion.div 
        style={{ opacity, y: yText }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center"
      >
        
        {/* Top Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-[1px] w-12 bg-[#ff5722]" />
          <span className="text-[#ff5722] font-mono text-xs tracking-[0.4em] uppercase font-bold">
            Est. 2025 • Seeduwa
          </span>
          <div className="h-[1px] w-12 bg-[#ff5722]" />
        </motion.div>

        {/* MASSIVE SPLIT TITLE */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          
          {/* "ROAD" */}
          <motion.h1 
            style={{ x: useTransform(xSpring, (val) => val * -30) }} // Moves opposite to mouse
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-[18vw] md:text-[12vw] leading-none font-[family-name:var(--font-blackops)] text-white tracking-tighter mix-blend-difference z-10 drop-shadow-2xl"
          >
            ROAD
          </motion.h1>

          {/* THE WOLF BADGE (Centerpiece) */}
          <motion.div
            style={{ 
              x: useTransform(xSpring, (val) => val * 10),
              y: useTransform(ySpring, (val) => val * 10),
              rotate: useTransform(xSpring, (val) => val * 5)
            }}
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, type: "spring" }}
            className="relative z-20 w-32 h-32 md:w-48 md:h-48 shrink-0"
          >
             {/* Glowing Ring */}
             <div className="absolute inset-0 border-2 border-[#ff5722] rounded-full animate-[spin_10s_linear_infinite]" />
             <div className="absolute inset-2 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             
             {/* The Logo Image */}
             <div className="absolute inset-4 bg-black rounded-full overflow-hidden border-4 border-[#050505] shadow-[0_0_50px_rgba(255,87,34,0.4)]">
               <img 
                 src="/logo-full.png" 
                 alt="Wolf Badge" 
                 className="w-full h-full object-cover scale-125"
               />
             </div>
          </motion.div>

          {/* "HOUSE" */}
          <motion.h1 
            style={{ x: useTransform(xSpring, (val) => val * -30) }} // Moves opposite to mouse
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-[18vw] md:text-[12vw] leading-none font-[family-name:var(--font-blackops)] text-white tracking-tighter mix-blend-difference z-10 drop-shadow-2xl"
          >
            HOUSE
          </motion.h1>

        </div>

        {/* Bottom Details */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs">
             <MapPin size={14} className="text-[#ff5722]" />
             <span>24 KOTUGODA RD, SEEDUWA HQ</span>
          </div>

          <Link 
            href="/menu" 
            className="group relative bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] text-xl px-10 py-4 tracking-wide hover:bg-white transition-all skew-x-[-10deg] shadow-[0_0_20px_rgba(255,87,34,0.5)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          >
            <span className="skew-x-[10deg] inline-flex items-center gap-2">
              EXPLORE MENU <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2 text-neutral-400 font-mono text-xs">
             <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
             <span>OPENING DEC 2025</span>
          </div>
        </motion.div>

      </motion.div>

      {/* 4. DECORATIVE ELEMENTS (The "Tech" Feel) */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="flex flex-col gap-1">
           {Array.from({ length: 5 }).map((_, i) => (
              <motion.div 
                key={i}
                initial={{ width: 0 }}
                animate={{ width: [10, 40, 10] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                className="h-[2px] bg-white/20"
              />
           ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2">
         <span className="text-[10px] text-neutral-500 font-mono rotate-90 origin-right translate-x-4 mb-8">SCROLL TO NAVIGATE</span>
         <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 1.5 }}
           className="text-[#ff5722]"
         >
            <ArrowDown size={24} />
         </motion.div>
      </div>

    </section>
  );
}
