"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Default state to prevent hydration mismatch
  const [shopStatus, setShopStatus] = useState({ text: "LOADING...", color: "text-neutral-500", dot: "bg-neutral-500" });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      
      // 1. DATE LOCK: Are we officially launched yet? (Dec 30, 2025)
      const launchDate = new Date("2025-12-30T00:00:00").getTime();
      if (now.getTime() < launchDate) {
        setShopStatus({ text: "COMING SOON", color: "text-[#ff5722]", dot: "bg-[#ff5722]" });
        return;
      }

      // 2. OPERATIONAL HOURS LOGIC
      const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
      const hour = now.getHours(); // 0-23

      // Logic:
      // Mon(1)-Thu(4): 11:00 - 23:00 (11pm)
      // Fri(5)-Sun(0): 11:00 - 01:00 (1am next day)

      let isOpen = false;

      // Late Night Spillover Check (00:00 to 01:00)
      if (hour < 1) {
        // We are open if "yesterday" was Fri, Sat, or Sun.
        // Today is Sat(6), Sun(0), or Mon(1)
        if (day === 6 || day === 0 || day === 1) isOpen = true;
      } 
      // Standard Day Check (11:00 onwards)
      else if (hour >= 11) {
        if (day >= 1 && day <= 4) {
           // Mon-Thu: Close at 23:00
           if (hour < 23) isOpen = true;
        } else {
           // Fri-Sun: Open until midnight (and spills over to 1am)
           isOpen = true;
        }
      }

      // 3. SET STATUS VISUALS
      if (isOpen) {
        setShopStatus({ text: "OPEN NOW", color: "text-[#25D366]", dot: "bg-[#25D366]" });
      } else {
        setShopStatus({ text: "CLOSED", color: "text-red-500", dot: "bg-red-500" });
      }
    };

    checkStatus();
    // Re-check every minute
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "MENU", href: "/menu" },
    { name: "THE STORY", href: "/about" },
    { name: "NEWS", href: "/blog" },
    { name: "CAREERS", href: "/careers" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          
          {/* BRANDING */}
          <Link href="/" className="relative group flex items-center gap-3">
            <img 
              src="/logo-full.png" 
              alt="Road House Logo" 
              className="h-16 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden md:block">
                <span className="block text-white font-[family-name:var(--font-blackops)] text-xl leading-none tracking-wide">ROAD HOUSE</span>
                
                {/* DYNAMIC STATUS INDICATOR */}
                <div className="flex items-center gap-2 mt-1">
                   <span className="text-white font-mono text-[10px] tracking-[0.2em] uppercase">SEEDUWA</span>
                   <span className="text-[8px] text-white/20">|</span>
                   <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${shopStatus.dot} ${shopStatus.text === 'OPEN NOW' ? 'animate-ping' : ''}`} />
                      <span className={`font-mono text-[10px] tracking-widest font-bold ${shopStatus.color}`}>
                        {shopStatus.text}
                      </span>
                   </div>
                </div>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
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

            <Link 
               href="/menu"
               className="ml-4 bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] px-6 py-2 text-lg tracking-wide hover:bg-white transition-colors skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg] inline-block">ORDER NOW</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(true)} className="lg:hidden text-white hover:text-[#ff5722] transition-colors">
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col items-center justify-center gap-8"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-[#ff5722] border border-[#ff5722]/30 p-2 rounded-full"
            >
              <X size={32} />
            </button>
            
            <img src="/logo-full.png" alt="Road House" className="h-24 w-auto mb-4" />

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-[family-name:var(--font-bebas)] text-white hover:text-[#ff5722] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
