"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Decor (Subtle Noise) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* COLUMN 1: BRAND IDENTITY (Span 4) */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="block">
              <h2 className="text-4xl font-[family-name:var(--font-blackops)] text-white leading-none">
                ROAD <span className="text-[#ff5722]">HOUSE</span>
              </h2>
            </Link>
            <p className="text-neutral-500 font-sans text-sm leading-relaxed max-w-sm">
              Seeduwa's designated pitstop. A premium grill house and cafe experience designed for the wolf pack. 
              <br/><br/>
              <span className="text-white font-bold">EST. 2025</span>
            </p>
            
            {/* Socials */}
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#ff5722] hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: SITEMAP (Span 2) */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-[#ff5722] font-mono text-xs tracking-[0.2em] uppercase mb-4">Explore</h3>
            <ul className="space-y-3 font-[family-name:var(--font-bebas)] text-xl tracking-wide text-neutral-300">
              {['Menu', 'The Story', 'News', 'Location'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace("the ", "").replace(" ", "-")}`} className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-1 group">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: INTEL (Span 3) */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-[#ff5722] font-mono text-xs tracking-[0.2em] uppercase mb-4">Intel & Support</h3>
            <ul className="space-y-3 font-[family-name:var(--font-bebas)] text-xl tracking-wide text-neutral-300">
              <li>
                <Link href="/careers" className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2">
                  Careers <span className="text-[10px] bg-white/10 text-white px-1 font-sans rounded">HIRING</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white hover:pl-2 transition-all duration-300">
                  FAQ / Briefing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:pl-2 transition-all duration-300">
                  Contact Base
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: COMMS (Span 3) */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-[#ff5722] font-mono text-xs tracking-[0.2em] uppercase mb-4">Comms Uplink</h3>
            
            <div className="space-y-4">
              <div className="group flex items-start gap-4">
                <MapPin className="text-[#ff5722] mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-white font-bold text-sm uppercase">Road House Seeduwa</p>
                  <p className="text-neutral-500 text-sm font-sans">24 Kotugoda Rd,<br/>Seeduwa, Sri Lanka.</p>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <Phone className="text-[#ff5722] mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-white font-bold text-sm uppercase">Hotline</p>
                  <a href="tel:+94777334078" className="text-neutral-500 text-sm font-sans hover:text-white transition-colors">
                    077 733 4078
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4">
                <Mail className="text-[#ff5722] mt-1 shrink-0" size={20} />
                <div>
                  <p className="text-white font-bold text-sm uppercase">Email</p>
                  <a href="mailto:roadhouseseeduwa@gmail.com" className="text-neutral-500 text-sm font-sans hover:text-white transition-colors break-all">
                    roadhouseseeduwa@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* PAYMENT METHODS */}
          <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 order-2 md:order-1">
             <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mr-2">SECURED BY:</span>
             {/* Using online assets for icons so you don't need local files */}
             <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" className="h-4 w-auto" alt="Visa" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" className="h-4 w-auto" alt="Mastercard" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 w-auto" alt="PayPal" />
          </div>

          <div className="text-[10px] font-mono text-neutral-600 uppercase order-1 md:order-2">
            <p>© {currentYear} ROAD HOUSE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
