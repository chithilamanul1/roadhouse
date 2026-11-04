"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050811] text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
         <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full inline-block mb-4">
            Legal & Policy
         </span>
         <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] text-white mb-8">
            PRIVACY & <span className="text-neon-cyan neon-glow">TERMS</span>
         </h1>
         
         <div className="space-y-8 text-neutral-300 font-sans text-sm md:text-base leading-relaxed bg-slate-900/50 border border-blue-500/20 p-8 rounded-2xl">
            <div>
               <h3 className="text-white font-bold text-lg mb-2">1. Introduction</h3>
               <p className="text-neutral-400">Welcome to RoadHouse Cafe & Restro Seeduwa. By accessing our website, ordering food, or reserving tables, you agree to these terms. We respect and protect your privacy.</p>
            </div>

            <div>
               <h3 className="text-white font-bold text-lg mb-2">2. Information We Collect</h3>
               <p className="text-neutral-400">We only collect contact details (such as your name, phone number, and delivery address) when you place an order or message us via WhatsApp or our web forms. We never share or sell your details to third parties.</p>
            </div>

            <div>
               <h3 className="text-white font-bold text-lg mb-2">3. Online Orders & Table Reservations</h3>
               <p className="text-neutral-400">Orders placed on our website are sent straight to our official WhatsApp hotline (+94 77 770 2044) for immediate kitchen preparation. Table reservations are held for 15 minutes past the scheduled arrival time.</p>
            </div>

            <div>
               <h3 className="text-white font-bold text-lg mb-2">4. Content & Copyright</h3>
               <p className="text-neutral-400">All photographs, brand logos, menu descriptions, and materials on this site belong to RoadHouse Cafe & Restro Seeduwa.</p>
            </div>
            
            <div className="pt-6 border-t border-blue-500/20 text-xs font-mono text-neutral-400">
               <p>Hotline: 077 770 2044 | WhatsApp: +94 77 770 2044</p>
               <p className="mt-1">Email: roadhouseseeduwa@gmail.com | 24 Kotugoda Rd, Seeduwa, Sri Lanka</p>
            </div>
         </div>
      </div>

      <Footer />
    </div>
  );
}