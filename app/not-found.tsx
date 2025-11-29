"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowLeft, Home, MapPin, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  // 1. MOUSE TRACKING FOR FLASHLIGHT EFFECT
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // 2. RANDOM GLITCH TRIGGER
  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200); // Quick flicker
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Navbar />
      
      <div 
        className="flex-1 relative flex flex-col items-center justify-center p-6 overflow-hidden group"
        onMouseMove={handleMouseMove}
      >
        {/* --- BACKGROUND LAYERS --- */}
        
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* The Flashlight Beam (Reveals texture) */}
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 87, 34, 0.10),
                transparent 80%
              )
            `,
          }}
        />

        {/* --- CONTENT --- */}
        <div className="relative z-10 text-center max-w-3xl">
            
            {/* GLITCH 404 TITLE */}
            <div className="relative mb-6 select-none">
                <h1 className={`text-[12rem] md:text-[15rem] leading-none font-[family-name:var(--font-blackops)] text-white relative z-10 ${glitch ? 'opacity-80 translate-x-1' : ''}`}>
                    404
                </h1>
                
                {/* Red Ghost Layer */}
                <h1 className="absolute top-0 left-0 text-[12rem] md:text-[15rem] leading-none font-[family-name:var(--font-blackops)] text-red-600 opacity-50 mix-blend-screen animate-pulse" 
                    style={{ transform: "translate(-4px, 0)" }}>
                    404
                </h1>
                
                {/* Blue Ghost Layer */}
                <h1 className="absolute top-0 left-0 text-[12rem] md:text-[15rem] leading-none font-[family-name:var(--font-blackops)] text-blue-600 opacity-50 mix-blend-screen" 
                    style={{ transform: "translate(4px, 0)" }}>
                    404
                </h1>
            </div>

            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-bebas)] text-[#ff5722] tracking-widest mb-6">
                OFF THE MAP
            </h2>
            
            <p className="font-sans text-neutral-400 text-lg mb-12 max-w-md mx-auto">
                Looks like you took a wrong turn. This page doesn't exist, but the grill is still hot back at the base.
            </p>

            {/* QUICK NAVIGATION GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                
                <Link href="/" className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[#ff5722] hover:bg-[#ff5722] hover:text-black transition-all group/card flex flex-col items-center gap-3">
                    <Home size={24} className="text-[#ff5722] group-hover/card:text-black" />
                    <span className="font-bold uppercase tracking-wider text-sm">Return Home</span>
                </Link>

                <Link href="/menu" className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[#ff5722] hover:bg-[#ff5722] hover:text-black transition-all group/card flex flex-col items-center gap-3">
                    <FileText size={24} className="text-[#ff5722] group-hover/card:text-black" />
                    <span className="font-bold uppercase tracking-wider text-sm">View Menu</span>
                </Link>

                <Link href="/location" className="bg-white/5 border border-white/10 p-6 rounded-sm hover:border-[#ff5722] hover:bg-[#ff5722] hover:text-black transition-all group/card flex flex-col items-center gap-3">
                    <MapPin size={24} className="text-[#ff5722] group-hover/card:text-black" />
                    <span className="font-bold uppercase tracking-wider text-sm">Find Location</span>
                </Link>

            </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
