"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Music, Calendar } from "lucide-react";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* HERO */}
      <section className="h-[50vh] flex items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 bg-black/60 z-10" />
         <img 
            src="https://images.pexels.com/photos/167385/pexels-photo-167385.jpeg?auto=compress&cs=tinysrgb&w=1200" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            alt="Party Vibe"
         />
         <div className="relative z-20 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white mb-2">
               HOST YOUR <span className="text-[#ff5722]">EVENT</span>
            </h1>
            <p className="font-mono text-lg text-neutral-300 tracking-widest uppercase">
               PRIVATE PARTIES • CORPORATE • CAR MEETS
            </p>
         </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-lg group hover:border-[#ff5722] transition-colors">
               <Users size={32} className="text-[#ff5722] mb-4" />
               <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">THE CREW TABLE</h3>
               <p className="text-neutral-400 text-sm mb-4">Perfect for birthdays and small gatherings.</p>
               <ul className="text-neutral-500 text-sm font-mono space-y-2 mb-6">
                  <li>● 10 - 15 PAX</li>
                  <li>● RESERVED SECTION</li>
                  <li>● A LA CARTE MENU</li>
               </ul>
               <a href="https://wa.me/94777334078?text=Inquiry for Crew Table Booking" target="_blank" className="text-white border-b border-[#ff5722] text-sm uppercase font-bold">Book Now</a>
            </div>

            {/* CARD 2 */}
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-lg group hover:border-[#ff5722] transition-colors">
               <Music size={32} className="text-[#ff5722] mb-4" />
               <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">THE VIP DECK</h3>
               <p className="text-neutral-400 text-sm mb-4">Exclusive access to the upper deck area.</p>
               <ul className="text-neutral-500 text-sm font-mono space-y-2 mb-6">
                  <li>● 20 - 30 PAX</li>
                  <li>● PRIVATE MUSIC</li>
                  <li>● BUFFET OPTION</li>
               </ul>
               <a href="https://wa.me/94777334078?text=Inquiry for VIP Deck Booking" target="_blank" className="text-white border-b border-[#ff5722] text-sm uppercase font-bold">Book Now</a>
            </div>

            {/* CARD 3 */}
            <div className="bg-neutral-900 border border-white/10 p-8 rounded-lg group hover:border-[#ff5722] transition-colors">
               <Calendar size={32} className="text-[#ff5722] mb-4" />
               <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">FULL TAKEOVER</h3>
               <p className="text-neutral-400 text-sm mb-4">Rent the entire Road House for your event.</p>
               <ul className="text-neutral-500 text-sm font-mono space-y-2 mb-6">
                  <li>● 50+ PAX</li>
                  <li>● CUSTOM MENU</li>
                  <li>● FULL STAFF SERVICE</li>
               </ul>
               <a href="https://wa.me/94777334078?text=Inquiry for Full Venue Takeover" target="_blank" className="text-white border-b border-[#ff5722] text-sm uppercase font-bold">Contact Us</a>
            </div>

         </div>
      </section>

      <Footer />
    </div>
  );
}
