"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();
  
  // Default state to prevent hydration mismatch
  const [shopStatus, setShopStatus] = useState({ text: "OPEN NOW", color: "text-[#25D366]", dot: "bg-[#25D366]" });

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
      const hour = now.getHours(); // 0-23

      let isOpen = false;

      // Late Night Spillover Check (00:00 to 01:00)
      if (hour < 1) {
        if (day === 6 || day === 0 || day === 1) isOpen = true;
      } 
      // Standard Day Check (11:00 onwards)
      else if (hour >= 11) {
        if (day >= 1 && day <= 4) {
          if (hour < 23) isOpen = true;
        } else {
          isOpen = true;
        }
      }

      if (isOpen) {
        setShopStatus({ text: "OPEN NOW", color: "text-[#25D366]", dot: "bg-[#25D366]" });
      } else {
        setShopStatus({ text: "CLOSED", color: "text-red-500", dot: "bg-red-500" });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "MENU", href: "/menu" },
    { name: "THE STORY", href: "/about" },
    { name: "NEWS", href: "/blog" },
    { name: "CAREERS", href: "/careers" },
    { name: "LOCATION", href: "/location" },
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

            {/* CART BUTTON */}
            {totalCount > 0 && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full border border-white/20 transition-all hover:border-[#ff5722]"
                title="View your food order"
              >
                <ShoppingBag size={20} className="text-[#ff5722]" />
                <span className="absolute -top-1.5 -right-1.5 bg-[#ff5722] text-black font-bold text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-mono shadow-md">
                  {totalCount}
                </span>
              </button>
            )}

            <Link 
               href="/menu"
               className="ml-2 bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] px-6 py-2 text-lg tracking-wide hover:bg-white transition-colors skew-x-[-10deg] shadow-[0_0_15px_rgba(255,87,34,0.3)]"
            >
              <span className="skew-x-[10deg] inline-block">ORDER NOW</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE & CART */}
          <div className="flex items-center gap-4 lg:hidden">
            {totalCount > 0 && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-white/10 text-white p-2 rounded-full border border-white/20"
              >
                <ShoppingBag size={20} className="text-[#ff5722]" />
                <span className="absolute -top-1 -right-1 bg-[#ff5722] text-black font-bold text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-mono">
                  {totalCount}
                </span>
              </button>
            )}
            <button onClick={() => setIsOpen(true)} className="text-white hover:text-[#ff5722] transition-colors">
              <Menu size={32} />
            </button>
          </div>
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
            className="fixed inset-0 z-[60] bg-[#050505] flex flex-col items-center justify-center gap-8"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-[#ff5722] border border-[#ff5722]/30 p-2 rounded-full"
            >
              <X size={32} />
            </button>
            
            <img src="/logo-full.png" alt="Road House" className="h-24 w-auto mb-4" />

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-[family-name:var(--font-bebas)] text-white hover:text-[#ff5722] transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <Link 
                href="/menu" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-[#ff5722] text-black font-black font-[family-name:var(--font-bebas)] px-8 py-3 text-2xl tracking-wide hover:bg-white transition-colors"
              >
                ORDER NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}