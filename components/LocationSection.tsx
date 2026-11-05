"use client";

import { MapPin, Navigation, Car, Plane } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/10 relative overflow-hidden" id="location">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LEFT: INFO (Early style) */}
        <div className="text-left space-y-6">
            <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white leading-[0.9]">
              FIND <span className="text-[#ff5722]">US</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              We are located in Seeduwa on Kotugoda Road. Just 10 minutes from Bandaranaike International Airport (Katunayake CMB) and easy to reach from Negombo, Ja-Ela, and Colombo.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-start gap-4 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                    <div className="p-3 bg-neutral-800 rounded-full text-[#ff5722] shrink-0">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wide">
                            ROAD HOUSE SEEDUWA
                        </h3>
                        <p className="text-neutral-400 font-sans text-sm">
                            24 Kotugoda Rd, Seeduwa, Sri Lanka.
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                    <div className="p-3 bg-neutral-800 rounded-full text-[#ff5722] shrink-0">
                        <Plane size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wide">
                            10 MINS FROM AIRPORT
                        </h3>
                        <p className="text-neutral-400 font-sans text-sm">
                            Bandaranaike International Airport (CMB)
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 bg-neutral-900/60 border border-white/5 p-4 rounded-xl">
                    <div className="p-3 bg-neutral-800 rounded-full text-[#ff5722] shrink-0">
                        <Car size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-[family-name:var(--font-bebas)] text-white tracking-wide">
                            FREE CUSTOMER PARKING
                        </h3>
                        <p className="text-neutral-400 font-sans text-sm">
                            Secure parking for 15+ vehicles and motorbikes.
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
                    Open in Google Maps
                </a>
            </div>
        </div>

        {/* RIGHT: MAP EMBED */}
        <div className="w-full h-[420px] bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63359.39050967393!2d79.85411774999999!3d7.118683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c63236701%3A0x6095907409c2565!2sSeeduwa!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                style={{ border: 0 }} 
                loading="lazy"
                title="RoadHouse Location Map"
            />
            <div className="absolute bottom-4 left-4 bg-black/90 backdrop-blur px-3 py-1.5 rounded-lg border border-[#ff5722]/50 pointer-events-none">
                <span className="font-mono text-[#ff5722] text-xs font-bold">● SEEDUWA • 10 MINS FROM AIRPORT</span>
            </div>
        </div>

      </div>
    </section>
  );
}