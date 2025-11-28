"use client";

import { MapPin, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] mb-8 text-[#e0e0e0]">
          FIND THE <span className="text-[#ff5722]">BASE</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Address Card */}
            <div className="p-8 border border-neutral-800 bg-neutral-900/50 max-w-md w-full text-left">
                <MapPin className="text-[#ff5722] mb-4" size={32} />
                <h3 className="text-2xl font-bold text-white mb-2">SEEDUWA HQ</h3>
                <p className="text-neutral-400 mb-6">
                    No. 123, Colombo - Negombo Road,<br/>
                    Seeduwa, Sri Lanka.<br/>
                    (Near the Airport Turn-off)
                </p>
                <a 
                    href="https://goo.gl/maps/YourGoogleMapLinkHere" 
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#ff5722] text-black font-bold px-6 py-3 hover:bg-white transition-colors uppercase"
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
