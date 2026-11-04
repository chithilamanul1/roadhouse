"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowLeft, Home, MapPin, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [glitch, setGlitch] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Navbar />
      
      <div 
        className="flex-1 relative flex flex-col items-center justify-center p-6 pt-32 pb-20 overflow-hidden group"
        onMouseMove={handleMouseMove}
      >
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* The Flashlight Beam */}
        <motion.div
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 87, 34, 0.12),
                transparent 80%
              )
            `,
          }}
        />

        {/* --- CONTENT --- */}
        <div className="relative z-10 text-center max-w-3xl">
            
            {/* GLITCH 404 TITLE */}
            <div className="relative mb-4 select-none">
                <h1 className={`text-[9rem] md:text-[14rem] leading-none font-[family-name:var(--font-blackops)] text-white relative z-10 ${glitch ? 'opacity-80 translate-x-1' : ''}`}>
                    404
                </h1>
                
                <h1 className="absolute top-0 left-0 text-[9rem] md:text-[14rem] leading-none font-[family-name:var(--font-blackops)] text-red-600 opacity-50 mix-blend-screen" 
                    style={{ transform: "translate(-4px, 0)" }}>
                    404
                </h1>
                
                <h1 className="absolute top-0 left-0 text-[9rem] md:text-[14rem] leading-none font-[family-name:var(--font-blackops)] text-[#ff5722] opacity-50 mix-blend-screen" 
                    style={{ transform: "translate(4px, 0)" }}>
                    404
                </h1>
            </div>

            <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-bebas)] text-[#ff5722] tracking-widest mb-4">
                PAGE NOT FOUND
            </h2>
            
            <p className="font-sans text-neutral-400 text-sm md:text-base mb-10 max-w-md mx-auto">
                Looks like you took a wrong turn. This page doesn&apos;t exist, but our kitchen in Seeduwa is ready to serve you!
            </p>

            {/* QUICK NAVIGATION GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                
                <Link href="/" className="bg-neutral-900/60 border border-white/10 p-6 rounded-xl hover:border-[#ff5722] hover:bg-[#ff5722] hover:text-black transition-all group/card flex flex-col items-center gap-3">
                    <Home size={24} className="text-[#ff5722] group-hover/card:text-black" />
                    <span className="font-bold uppercase tracking-wider text-sm">Return Home</span>
                </Link>

                <Link href="/menu" className="bg-neutral-900/60 border border-white/10 p-6 rounded-xl hover:border-[#ff5722] hover:bg-[#ff5722] hover:text-black transition-all group/card flex flex-col items-center gap-3">
                    <FileText size={24} className="text-[#ff5722] group-hover/card:text-black" />
                    <span className="font-bold uppercase tracking-wider text-sm">View Menu</span>
                </Link>

                <Link href="/location" className="bg-neutral-900/60 border border-white/10 p-6 rounded-xl hover:border-[#ff5722] hover:bg-[#ff5722] hover:text-black transition-all group/card flex flex-col items-center gap-3">
                    <MapPin size={24} className="text-[#ff5722] group-hover/card:text-black" />
                    <span className="font-bold uppercase tracking-wider text-sm">Find Us</span>
                </Link>

            </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}