"use client";

import { MapPin, Navigation, Clock, Car, Plane } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden" id="location">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT: INFO */}
        <div className="text-left space-y-6">
            <p className="text-[#ff5722] font-mono text-xs tracking-[0.3em] uppercase font-bold">
              Easy to Reach
            </p>
            <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] text-white leading-none">
              FIND <span className="text-[#ff5722]">ROADHOUSE</span>
            </h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              We are conveniently situated in Seeduwa on Kotugoda Road, right near the main Colombo - Katunayake airport expressway corridor. Perfect for a great meal before your flight or after landing.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-start gap-4 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                    <div className="p-3 bg-[#ff5722]/10 text-[#ff5722] rounded-lg shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wide">
                            OUR ADDRESS
                        </h3>
                        <p className="text-neutral-300 text-sm font-sans">
                            24 Kotugoda Rd, Seeduwa, Sri Lanka
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                    <div className="p-3 bg-[#ff5722]/10 text-[#ff5722] rounded-lg shrink-0">
                        <Plane size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wide">
                            AIRPORT DISTANCE
                        </h3>
                        <p className="text-neutral-300 text-sm font-sans">
                            Just 10 minutes from Bandaranaike International Airport (Katunayake CMB)
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                    <div className="p-3 bg-[#ff5722]/10 text-[#ff5722] rounded-lg shrink-0">
                        <Car size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wide">
                            FREE CUSTOMER PARKING
                        </h3>
                        <p className="text-neutral-300 text-sm font-sans">
                            Dedicated secure parking space for 15+ vehicles right outside
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-2">
                <a 
                   href="https://share.google/HiEDjYVkfO7hPATl4" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-[#ff5722] text-black font-black text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(255,87,34,0.3)]"
                >
                    <Navigation size={18} />
                    Get Directions in Google Maps
                </a>
            </div>
        </div>

        {/* RIGHT: MAP EMBED */}
        <div className="w-full h-[450px] bg-neutral-900 rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63359.39050967393!2d79.85411774999999!3d7.118683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c63236701%3A0x6095907409c2565!2sSeeduwa!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                style={{ border: 0 }} 
                loading="lazy"
                title="RoadHouse Location Map"
            />
            <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur px-4 py-2 rounded-lg border border-[#ff5722]/40 pointer-events-none">
                <p className="font-mono text-[#ff5722] text-xs font-bold">● SEEDUWA • NEAR AIRPORT</p>
            </div>
        </div>

      </div>
    </section>
  );
}