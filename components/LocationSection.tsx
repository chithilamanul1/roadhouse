"use client";

import { MapPin, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-neutral-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff5722] to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-[family-name:var(--font-blackops)] mb-12 text-[#e0e0e0] leading-[0.8]">
          FIND THE <span className="text-[#ff5722]">BASE</span>
        </h2>
        
        <div className="flex flex-col items-center justify-center">
            <div className="p-10 border border-neutral-800 bg-[#050505] max-w-lg w-full text-center hover:border-[#ff5722] transition-colors duration-500 group">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-neutral-900 rounded-full group-hover:bg-[#ff5722] transition-colors">
                        <MapPin className="text-white" size={32} />
                    </div>
                </div>
                
                <h3 className="text-3xl font-[family-name:var(--font-bebas)] text-white mb-2 tracking-wide">SEEDUWA HQ</h3>
                <p className="text-neutral-400 mb-8 font-sans leading-relaxed text-lg">
                    24 Kotugoda Rd,<br/>
                    Seeduwa, Sri Lanka.
                </p>
                
                <a 
                    href="https://www.google.com/maps/search/?api=1&query=24+Kotugoda+Rd+Seeduwa" 
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#e0e0e0] text-black font-bold px-8 py-4 hover:bg-[#ff5722] hover:text-white transition-all uppercase tracking-wider text-sm clip-path-slant"
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
                >
                    <Navigation size={18} />
                    Get Directions
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
