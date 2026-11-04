"use client";

import { MapPin, Navigation, Clock, Car } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-neutral-800 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT: INFO */}
        <div className="text-left">
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] mb-6 text-[#e0e0e0] leading-[0.8]">
              FIND <span className="text-[#ff5722]">US</span>
            </h2>
            
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-neutral-900 rounded-full text-[#ff5722]">
                        <MapPin size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wide">
                            ROAD HOUSE SEEDUWA
                        </h3>
                        <p className="text-neutral-400 font-sans text-lg">
                            24 Kotugoda Rd, Seeduwa.<br/>
                            (5 mins from Airport Turn-off)
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-3 bg-neutral-900 rounded-full text-[#ff5722]">
                        <Car size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wide">
                            PARKING AVAILABLE
                        </h3>
                        <p className="text-neutral-400 font-sans text-sm">
                            Secure parking for 15+ vehicles. Bike friendly.
                        </p>
                    </div>
                </div>

                <a 
                    href="https://share.google/HiEDjYVkfO7hPATl4" 
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#e0e0e0] text-black font-bold px-8 py-4 hover:bg-[#ff5722] hover:text-white transition-all uppercase tracking-wider text-sm rounded-sm mt-4"
                >
                    <Navigation size={18} />
                    Open in Google Maps
                </a>
            </div>
        </div>

        {/* RIGHT: LIVE MAP EMBED */}
        <div className="h-[400px] w-full bg-neutral-900 rounded-lg overflow-hidden border border-white/10 relative group">
            {/* Real Google Map Embed for Seeduwa */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63359.39050967393!2d79.85411774999999!3d7.118683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c63236701%3A0x6095907409c2565!2sSeeduwa!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(1.2)" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:filter-none transition-all duration-700"
            ></iframe>
            
            {/* Overlay Instructions */}
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur px-3 py-1 rounded border border-[#ff5722]/50 pointer-events-none">
                <span className="text-[#ff5722] font-mono text-[10px] animate-pulse">● LIVE SATELLITE FEED</span>
            </div>
        </div>

      </div>
    </section>
  );
}
