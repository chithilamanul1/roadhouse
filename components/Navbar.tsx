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
  const [shopStatus, setShopStatus] = useState({ text: "OPEN NOW", color: "text-[#00D2FF]", dot: "bg-[#00D2FF]" });

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
        setShopStatus({ text: "OPEN NOW", color: "text-emerald-400", dot: "bg-emerald-400" });
      } else {
        setShopStatus({ text: "OPENS AT 11 AM", color: "text-amber-400", dot: "bg-amber-400" });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "MENU", href: "/menu" },
    { name: "ABOUT", href: "/about" },
    { name: "PHOTOS", href: "/#gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "LOCATION", href: "/location" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#050811]/90 backdrop-blur-md border-b border-[#00D2FF]/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          
          {/* BRANDING */}
          <Link href="/" className="relative group flex items-center gap-3">
            <img 
              src="/logo-full.png" 
              alt="RoadHouse Café & Restro" 
              className="h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(0,210,255,0.4)] group-hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden md:block">
              <span className="block text-white font-[family-name:var(--font-blackops)] text-xl leading-none tracking-wide">
                ROAD <span className="text-[#00D2FF]">HOUSE</span>
              </span>
              
              {/* DYNAMIC STATUS INDICATOR */}
              <div className="flex items-center gap-2 mt-1">
                <span className="text-neutral-400 font-mono text-[10px] tracking-[0.2em] uppercase">SEEDUWA</span>
                <span className="text-[8px] text-white/20">|</span>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${shopStatus.dot} animate-ping`} />
                  <span className={`font-mono text-[10px] tracking-widest font-bold ${shopStatus.color}`}>
                    {shopStatus.text}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-sm font-bold font-[family-name:var(--font-bebas)] tracking-widest text-neutral-300 hover:text-[#00D2FF] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D2FF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* CART TRIGGER BUTTON */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#00D2FF] hover:border-[#00D2FF] transition-colors"
              title="View Cart"
            >
              <ShoppingBag size={20} />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#00D2FF] text-black font-mono font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            {/* ORDER NOW CTA */}
            <Link 
              href="/menu"
              className="bg-[#00D2FF] text-black font-black font-[family-name:var(--font-bebas)] px-6 py-2.5 text-lg tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg] inline-block">ORDER ONLINE</span>
            </Link>
          </div>

          {/* MOBILE TOGGLE & CART */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-white/5 text-white"
            >
              <ShoppingBag size={22} />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#00D2FF] text-black font-mono font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            <button onClick={() => setIsOpen(true)} className="text-white hover:text-[#00D2FF] transition-colors p-1">
              <Menu size={30} />
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
            className="fixed inset-0 z-[60] bg-[#050811] flex flex-col items-center justify-center gap-8"
          >
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-6 right-6 text-[#00D2FF] border border-[#00D2FF]/30 p-2 rounded-full hover:bg-white/10"
            >
              <X size={28} />
            </button>
            
            <img src="/logo-full.png" alt="RoadHouse" className="h-20 w-auto mb-2 drop-shadow-[0_0_20px_rgba(0,210,255,0.5)]" />

            <div className="flex flex-col items-center gap-5">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-[family-name:var(--font-bebas)] text-white hover:text-[#00D2FF] transition-colors tracking-widest"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/menu"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-[#00D2FF] text-black font-black font-[family-name:var(--font-bebas)] text-xl px-10 py-3 tracking-widest rounded"
              >
                VIEW MENU &amp; ORDER
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
