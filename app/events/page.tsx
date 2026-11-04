"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";
import { Users, Music, Calendar, Sparkles } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#050811] text-[#E2E8F0]">
      <Navbar />
      <FloatingReserve />
      
      {/* HERO */}
      <section className="h-[50vh] flex items-center justify-center relative overflow-hidden">
         <img 
            src="/gallery-bar.jpg" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="RoadHouse Blue Neon Bar & Events"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/90 via-[#050811]/70 to-[#050811]" />
         
         <div className="relative z-20 text-center px-4 max-w-2xl">
            <p className="text-[#00D2FF] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
               Gatherings &amp; Celebrations
            </p>
            <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-blackops)] text-white mb-2">
               HOST YOUR <span className="text-[#00D2FF]">EVENT</span>
            </h1>
            <p className="font-mono text-sm text-neutral-300 tracking-wider uppercase">
               BIRTHDAYS • OFFICE DINNERS • GET-TOGETHERS • PARTIES
            </p>
         </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div className="bg-[#0C172E] border border-white/10 p-8 rounded-2xl hover:border-[#00D2FF] transition-all flex flex-col justify-between shadow-xl">
               <div>
                  <div className="w-14 h-14 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] mb-5">
                     <Users size={28} />
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">FRIENDS &amp; FAMILY TABLE</h3>
                  <p className="text-neutral-400 text-xs mb-6">Ideal for casual birthday celebrations and family gatherings.</p>
                  <ul className="text-neutral-300 text-xs space-y-2 mb-8">
                     <li className="flex items-center gap-2">● 6 to 15 Guests</li>
                     <li className="flex items-center gap-2">● Reserved Seating Area</li>
                     <li className="flex items-center gap-2">● Full A La Carte Food &amp; Drink Menu</li>
                  </ul>
               </div>
               <a 
                  href="https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20want%20to%20book%20a%20Friends%20Table."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#00D2FF] text-black font-bold py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-white transition-colors"
               >
                  Book on WhatsApp
               </a>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#0C172E] border border-[#00D2FF]/40 p-8 rounded-2xl hover:border-[#00D2FF] transition-all flex flex-col justify-between shadow-[0_0_30px_rgba(0,210,255,0.15)]">
               <div>
                  <div className="w-14 h-14 rounded-xl bg-[#00D2FF]/20 border border-[#00D2FF] flex items-center justify-center text-[#00D2FF] mb-5">
                     <Music size={28} />
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">NEON LOUNGE PARTY</h3>
                  <p className="text-neutral-400 text-xs mb-6">Enjoy our signature blue neon bar with your crew.</p>
                  <ul className="text-neutral-300 text-xs space-y-2 mb-8">
                     <li className="flex items-center gap-2">● 15 to 30 Guests</li>
                     <li className="flex items-center gap-2">● Lounge &amp; Bar Seating</li>
                     <li className="flex items-center gap-2">● Sharing Platters &amp; Beverages</li>
                  </ul>
               </div>
               <a 
                  href="https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20want%20to%20book%20the%20Neon%20Lounge%20Area."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#00D2FF] text-black font-black py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-white transition-colors shadow-md"
               >
                  Book on WhatsApp
               </a>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#0C172E] border border-white/10 p-8 rounded-2xl hover:border-[#00D2FF] transition-all flex flex-col justify-between shadow-xl">
               <div>
                  <div className="w-14 h-14 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center text-[#00D2FF] mb-5">
                     <Calendar size={28} />
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">CORPORATE &amp; TOUR GROUPS</h3>
                  <p className="text-neutral-400 text-xs mb-6">Custom menus and dedicated service for tour buses and corporate teams.</p>
                  <ul className="text-neutral-300 text-xs space-y-2 mb-8">
                     <li className="flex items-center gap-2">● 25+ Guests</li>
                     <li className="flex items-center gap-2">● Convenient Free Van &amp; Bus Parking</li>
                     <li className="flex items-center gap-2">● 10 Mins from Airport</li>
                  </ul>
               </div>
               <a 
                  href="https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20have%20an%20inquiry%20for%20a%20Group%20Booking."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#00D2FF] text-black font-bold py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-white transition-colors"
               >
                  Inquire on WhatsApp
               </a>
            </div>

         </div>
      </section>

      <Footer />
    </div>
  );
}
