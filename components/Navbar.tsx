"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Full Menu", href: "/menu" },
    { name: "Location", href: "/location" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          
          {/* NEW LOGO IMPLEMENTATION */}
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="https://i.ibb.co/Jw4wdwxV/Gemini-Generated-Image-3e5orv3e5orv3e5o.png" 
              alt="Road House Logo" 
              className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,87,34,0.5)]"
            />
            <div className="hidden md:block">
              <span className="block text-xl font-[family-name:var(--font-bebas)] leading-none tracking-widest text-white">ROAD HOUSE</span>
              <span className="block text-[10px] font-mono text-[#ff5722] tracking-[0.3em]">EST. 2024</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest hover:text-[#ff5722] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff5722] transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link 
               href="/menu"
               className="bg-[#ff5722] text-black font-bold px-6 py-2 rounded-sm uppercase text-xs tracking-wider hover:bg-white transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="md:hidden text-white hover:text-[#ff5722]">
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#ff5722] p-2 border border-[#ff5722] rounded-full">
              <X size={32} />
            </button>
            
            <img 
              src="https://i.ibb.co/Jw4wdwxV/Gemini-Generated-Image-3e5orv3e5orv3e5o.png" 
              alt="Road House Logo" 
              className="h-32 w-auto mb-8 animate-pulse"
            />

            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-[family-name:var(--font-bebas)] text-white hover:text-[#ff5722] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
