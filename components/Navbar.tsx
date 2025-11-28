"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "MENU", href: "/menu" },
    { name: "OFFERS", href: "/offers" },
    { name: "LOCATION", href: "/location" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-28 flex justify-between items-center">
          
          {/* BRANDING: The Logo Image */}
          <Link href="/" className="relative group">
            <div className="absolute inset-0 bg-[#ff5722] blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
            <img 
              src="/logo-full.png" 
              alt="Road House Logo" 
              className="h-20 w-auto object-contain relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-sm font-bold font-[family-name:var(--font-bebas)] tracking-widest text-neutral-300 hover:text-[#ff5722] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ff5722] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* CTA BUTTON */}
            <Link 
               href="/menu"
               className="ml-4 bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] px-6 py-3 text-lg tracking-wide hover:bg-white transition-colors skew-x-[-10deg] shadow-[0_0_15px_rgba(255,87,34,0.4)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <span className="skew-x-[10deg] inline-block">ORDER NOW</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(true)} className="md:hidden text-white hover:text-[#ff5722] transition-colors">
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col items-center justify-center gap-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-8 right-8 text-[#ff5722] border border-[#ff5722]/30 p-2 rounded-full hover:bg-[#ff5722] hover:text-black transition-all"
            >
              <X size={32} />
            </button>
            
            {/* Mobile Logo */}
            <motion.img 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              src="/logo-full.png" 
              alt="Road House" 
              className="h-32 w-auto mb-8 drop-shadow-[0_0_15px_rgba(255,87,34,0.3)]"
            />

            {/* Mobile Links */}
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
