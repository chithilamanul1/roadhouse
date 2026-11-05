"use client";

import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-12 relative overflow-hidden text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND (Span 5) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-blackops)] text-white leading-none">
                ROAD <span className="text-[#ff5722]">HOUSE</span>
              </h2>
              <span className="text-[10px] text-[#ff5722] font-mono tracking-[0.4em] uppercase block mt-1 font-bold">
                CAFÉ &amp; RESTRO • SEEDUWA
              </span>
            </Link>
            
            <p className="font-sans text-sm leading-relaxed max-w-sm text-neutral-400">
              Seeduwa&apos;s favourite restaurant &amp; grill house. Delicious charcoal BBQ, spicy devilled kottu, fried rice, burgers, and cold drinks. Just 10 minutes from Katunayake Airport.
            </p>
            
            {/* Socials & WhatsApp */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://www.instagram.com/roadhouse.cafe.restro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff5722] hover:text-black transition-all"
                title="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>

              <a 
                href="https://share.google/HiEDjYVkfO7hPATl4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff5722] hover:text-black transition-all"
                title="Google Business Profile & Reviews"
              >
                <MapPin size={18} />
              </a>

              <a 
                href="https://wa.me/94777702044" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/40 flex items-center gap-2 text-[#25D366] text-xs font-bold hover:bg-[#25D366] hover:text-black transition-all"
                title="Chat on WhatsApp"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (Span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#ff5722] font-bold">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 font-[family-name:var(--font-bebas)] text-lg tracking-wider text-neutral-300">
              <li>
                <Link href="/menu" className="hover:text-[#ff5722] transition-colors">
                  OUR MENU &amp; ORDER
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ff5722] transition-colors">
                  ABOUT ROADHOUSE
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-[#ff5722] transition-colors">
                  RESTAURANT PHOTOS
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-[#ff5722] transition-colors">
                  DIRECTIONS &amp; PARKING
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#ff5722] transition-colors">
                  WORK WITH US
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#ff5722] transition-colors text-neutral-600 hover:text-neutral-400 text-xs font-mono uppercase">
                  Admin Login
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT & HOURS (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#ff5722] font-bold">
              CONTACT &amp; VISIT
            </h4>
            <div className="space-y-3 text-sm font-sans text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff5722] shrink-0 mt-0.5" />
                <span>24 Kotugoda Rd, Seeduwa, Sri Lanka<br />(10 mins from Airport)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#ff5722] shrink-0" />
                <a href="tel:+94777702044" className="hover:text-[#ff5722] transition-colors font-mono font-bold">
                  077 770 2044
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#ff5722] shrink-0" />
                <a href="mailto:roadhouseseeduwa@gmail.com" className="hover:text-[#ff5722] transition-colors font-mono text-xs">
                  roadhouseseeduwa@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[11px] font-mono text-neutral-500 uppercase">Opening Hours</p>
              <p className="text-xs text-neutral-300 font-mono mt-0.5">
                Mon - Thu: 11:00 AM - 11:00 PM<br />
                Fri - Sun: 11:00 AM - 01:00 AM
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
          <p>© {currentYear} RoadHouse Café &amp; Restro. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#ff5722] transition-colors">Privacy</Link>
            <Link href="/faq" className="hover:text-[#ff5722] transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-[#ff5722] transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}