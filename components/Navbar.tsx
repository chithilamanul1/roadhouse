"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          
          {/* REBUILT BRANDING */}
          <Link href="/" className="flex items-center gap-4 group">
            {/* The Wolf Icon (Masked from your image) */}
            <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-[#ff5722]/50 group-hover:border-[#ff5722] transition-colors">
               <img 
                 src="https://i.ibb.co/Jw4wdwxV/Gemini-Generated-Image-3e5orv3e5orv3e5o.png" 
                 alt="Wolf Badge"
                 className="w-full h-full object-cover scale-150" // Zoomed in to focus on the Wolf face
               />
            </div>
            
            {/* The Text (Using the Stencil Font) */}
            <div className="flex flex-col">
              <span className="text-2xl font-[family-name:var(--font-blackops)] text-white tracking-widest leading-none group-hover:text-[#ff5722] transition-colors">
                ROAD HOUSE
              </span>
              <span className="text-[10px] font-mono text-neutral-500 tracking-[0.4em]">SEEDUWA HQ</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {["Menu", "Location", "Offers"].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm font-bold uppercase tracking-widest hover:text-[#ff5722] transition-colors font-mono"
              >
                {item}
              </Link>
            ))}
            <Link 
               href="/menu"
               className="bg-[#ff5722] text-black font-bold px-6 py-2 uppercase text-xs tracking-wider hover:bg-white transition-colors skew-x-[-10deg]"
            >
              Order Now
            </Link>
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden text-white hover:text-[#ff5722]">
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Keep existing code or paste if lost) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
             initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
             className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#ff5722]"><X size={32}/></button>
            {["Home", "Menu", "Location"].map((link) => (
              <Link key={link} href="#" className="text-4xl font-[family-name:var(--font-blackops)] text-white">{link}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
