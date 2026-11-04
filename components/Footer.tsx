"use client";

import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, Navigation, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03060C] border-t border-[#00D2FF]/20 pt-20 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND (Span 5) */}
          <div className="md:col-span-5 space-y-5">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-blackops)] text-white leading-none">
                ROAD <span className="text-[#00D2FF]">HOUSE</span>
              </h2>
              <span className="text-[10px] text-[#38BDF8] font-mono tracking-[0.4em] uppercase block mt-1 font-bold">
                CAFÉ &amp; RESTRO • SEEDUWA
              </span>
            </Link>
            
            <p className="text-neutral-400 font-sans text-sm leading-relaxed max-w-sm">
              Your favourite restaurant and blue neon bar in Seeduwa. Delicious BBQ, devilled kottu, fried rice, burgers, fresh juices, and chilled drinks. Just 10 minutes from Katunayake Airport.
            </p>
            
            {/* Socials & Profile */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://www.instagram.com/roadhouse.cafe.restro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-[#0C172E] border border-white/10 flex items-center justify-center text-white hover:bg-[#00D2FF] hover:text-black transition-all"
                title="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>

              <a 
                href="https://share.google/HiEDjYVkfO7hPATl4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-[#0C172E] border border-white/10 flex items-center justify-center text-white hover:bg-[#00D2FF] hover:text-black transition-all"
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
            <h3 className="text-[#00D2FF] font-mono text-xs tracking-[0.2em] uppercase font-bold mb-4">
              Explore
            </h3>
            <ul className="space-y-3 font-[family-name:var(--font-bebas)] text-xl tracking-wide text-neutral-300">
              <li><Link href="/menu" className="hover:text-[#00D2FF] transition-colors">Food &amp; Drink Menu</Link></li>
              <li><Link href="/about" className="hover:text-[#00D2FF] transition-colors">About RoadHouse</Link></li>
              <li><Link href="/#gallery" className="hover:text-[#00D2FF] transition-colors">Restaurant Photos</Link></li>
              <li><Link href="/faq" className="hover:text-[#00D2FF] transition-colors">Questions &amp; Answers</Link></li>
              <li><Link href="/location" className="hover:text-[#00D2FF] transition-colors">Find Location &amp; Map</Link></li>
              <li><Link href="/admin" className="hover:text-[#00D2FF] transition-colors text-sm opacity-60">Admin Dashboard</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: CONTACT (Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-[#00D2FF] font-mono text-xs tracking-[0.2em] uppercase font-bold mb-4">
              Get in Touch
            </h3>
            
            <div className="space-y-4 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#00D2FF] shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-bold text-white">24 Kotugoda Rd, Seeduwa</p>
                  <p className="text-neutral-400 text-xs">Western Province, Sri Lanka (10 mins from Airport)</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-[#00D2FF] shrink-0" size={18} />
                <a href="tel:+94777702044" className="hover:text-[#00D2FF] font-bold text-white transition-colors">
                  +94 77 770 2044
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#00D2FF] shrink-0" size={18} />
                <a href="mailto:roadhouseseeduwa@gmail.com" className="hover:text-[#00D2FF] text-xs text-neutral-400 transition-colors break-all">
                  roadhouseseeduwa@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500">
          <p>© {currentYear} RoadHouse Café &amp; Restro. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <a href="https://share.google/HiEDjYVkfO7hPATl4" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D2FF] transition-colors">Google Reviews</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
