"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";
import { Users, Music, Calendar } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0]">
      <Navbar />
      <FloatingReserve />
      
      {/* HERO */}
      <section className="h-[50vh] flex items-center justify-center relative overflow-hidden">
         <img 
            src="/gallery-bar.jpg" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="RoadHouse Bar & Events"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/70 to-[#050505]" />
         
         <div className="relative z-20 text-center px-4 max-w-2xl">
            <p className="text-[#ff5722] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
               Gatherings &amp; Celebrations
            </p>
            <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-blackops)] text-white mb-2">
               HOST YOUR <span className="text-[#ff5722]">EVENT</span>
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
            <div className="bg-neutral-900/60 border border-white/10 p-8 rounded-2xl hover:border-[#ff5722] transition-all flex flex-col justify-between shadow-xl">
               <div>
                  <div className="w-14 h-14 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center text-[#ff5722] mb-5">
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
                  className="w-full text-center bg-[#ff5722] text-black font-bold py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-white transition-colors"
               >
                  Book on WhatsApp
               </a>
            </div>

            {/* CARD 2 */}
            <div className="bg-neutral-900/60 border border-white/10 p-8 rounded-2xl hover:border-[#ff5722] transition-all flex flex-col justify-between shadow-xl">
               <div>
                  <div className="w-14 h-14 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center text-[#ff5722] mb-5">
                     <Music size={28} />
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">CORPORATE &amp; TEAM DINNER</h3>
                  <p className="text-neutral-400 text-xs mb-6">Bring your team together for delicious hot grills and refreshing drinks.</p>
                  <ul className="text-neutral-300 text-xs space-y-2 mb-8">
                     <li className="flex items-center gap-2">● 15 to 40 Guests</li>
                     <li className="flex items-center gap-2">● Custom Shared Food Platters</li>
                     <li className="flex items-center gap-2">● Dedicated Serving Staff</li>
                  </ul>
               </div>
               <a 
                  href="https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20want%20to%20inquire%20about%20a%20Corporate%20Dinner."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#ff5722] text-black font-bold py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-white transition-colors"
               >
                  Inquire on WhatsApp
               </a>
            </div>

            {/* CARD 3 */}
            <div className="bg-neutral-900/60 border border-white/10 p-8 rounded-2xl hover:border-[#ff5722] transition-all flex flex-col justify-between shadow-xl">
               <div>
                  <div className="w-14 h-14 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center text-[#ff5722] mb-5">
                     <Calendar size={28} />
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">FULL VENUE BUYOUT</h3>
                  <p className="text-neutral-400 text-xs mb-6">Exclusive access to the full restaurant and bar for private celebrations.</p>
                  <ul className="text-neutral-300 text-xs space-y-2 mb-8">
                     <li className="flex items-center gap-2">● Up to 80 Guests</li>
                     <li className="flex items-center gap-2">● Full Indoor &amp; Outdoor Patio</li>
                     <li className="flex items-center gap-2">● Sound System &amp; Custom Lighting</li>
                  </ul>
               </div>
               <a 
                  href="https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20want%20to%20inquire%20about%20a%20Full%20Venue%20Buyout."
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#ff5722] text-black font-bold py-3 rounded-lg text-xs uppercase tracking-wider hover:bg-white transition-colors"
               >
                  Contact Management
               </a>
            </div>

         </div>
      </section>

      <Footer />
    </div>
  );
}