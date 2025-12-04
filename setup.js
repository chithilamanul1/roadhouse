const fs = require('fs');
const path = require('path');
const rootDir = process.cwd();

function write(filePath, content) {
    const fullPath = path.join(rootDir, filePath);
    fs.writeFileSync(fullPath, content.trim());
    console.log(`✅ ROAD HOUSE BUILT: ${filePath}`);
}

function removeDir(dirPath) {
    const fullPath = path.join(rootDir, dirPath);
    if (fs.existsSync(fullPath)) {
        fs.rmSync(fullPath, { recursive: true, force: true });
        console.log(`🗑️ REMOVED: ${dirPath}`);
    }
}

console.log("🚀 CONVERTING TO STANDALONE ROAD HOUSE SITE...");

// 1. CLEANUP (Remove Dinidu folders from this project)
removeDir('app/dinidu');
removeDir('app/roadhouse'); // We are moving this to root

// 2. NAVBAR (With External Link to Dinidu)
write('components/Navbar.jsx', `
'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#5e565a] border-b border-[#f7ff58]/20 shadow-xl">
      
      {/* TOP BAR: CROSS PROMO */}
      <div className="bg-[#4a4448] text-[10px] font-bold tracking-[0.2em] px-6 py-2 flex justify-between items-center text-[#efecca] uppercase">
        <span className="hidden md:block opacity-70">The Food District</span>
        <a href="https://dinidugardens.lk" target="_blank" className="flex items-center gap-2 hover:text-[#f7ff58] transition-colors cursor-pointer group">
            <span>Looking for a Banquet Hall?</span>
            <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 group">
           <div className="w-12 h-12 bg-[#ff934f] -skew-x-12 flex items-center justify-center border-2 border-[#efecca] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-y-1 group-hover:shadow-none transition-all">
             <span className="font-black text-[#5e565a] text-xl skew-x-12">RH</span>
           </div>
           <div className="flex flex-col">
             <span className="font-bold text-2xl text-[#efecca] tracking-widest leading-none">ROAD<span className="text-[#f7ff58]">HOUSE</span></span>
             <span className="text-[9px] text-[#a9cbb7] tracking-[0.4em] uppercase font-bold mt-1">Seeduwa</span>
           </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="#zones" className="text-xs font-bold text-[#efecca]/80 hover:text-[#f7ff58] transition-colors uppercase tracking-widest">Zones</Link>
          <Link href="#menu" className="text-xs font-bold text-[#efecca]/80 hover:text-[#f7ff58] transition-colors uppercase tracking-widest">Menu</Link>
          <Link href="#entertainment" className="text-xs font-bold text-[#efecca]/80 hover:text-[#f7ff58] transition-colors uppercase tracking-widest">Events</Link>
          <Link href="/contact" className="px-6 py-3 bg-[#f7ff58] text-[#5e565a] font-black uppercase text-xs tracking-widest hover:bg-white transition-colors skew-x-[-10deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-none hover:translate-y-1">
            Book Table
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#efecca]">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden absolute top-28 left-0 w-full h-screen bg-[#5e565a] p-8 flex flex-col gap-8 z-40 border-t border-[#f7ff58]/20">
          <Link href="#zones" onClick={() => setMobileOpen(false)} className="text-2xl font-bold text-[#efecca] uppercase">Zones</Link>
          <Link href="#menu" onClick={() => setMobileOpen(false)} className="text-2xl font-bold text-[#efecca] uppercase">Menu</Link>
          <div className="w-full h-px bg-[#efecca]/10"></div>
          <a href="https://dinidugardens.lk" className="text-lg text-[#a9cbb7] uppercase flex items-center gap-2">
             Visit Dinidu Gardens <ArrowUpRight size={18}/>
          </a>
        </div>
      )}
    </nav>
  );
}
`);

// 3. CROSS PROMO CARD (The "Ad" Component)
write('components/VenueAd.jsx', `
import { ArrowRight, PartyPopper } from "lucide-react";

export default function VenueAd() {
  return (
    <section className="bg-[#4a4448] border-y-4 border-[#ff934f] py-16 px-6">
      <div className="max-w-6xl mx-auto bg-[#5e565a] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative group">
        
        {/* Decorative Pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

        <div className="p-10 md:p-16 flex-1 flex flex-col justify-center relative z-10">
           <div className="inline-flex items-center gap-2 text-[#ff934f] font-bold tracking-widest text-xs uppercase mb-4">
              <PartyPopper size={16} /> Partner Venue
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-[#efecca] uppercase mb-6 leading-tight">
             Planning a <span className="text-[#f7ff58]">Wedding</span> or <span className="text-[#f7ff58]">Event?</span>
           </h2>
           <p className="text-[#a9cbb7] text-lg mb-8 max-w-md">
             Experience luxury at Dinidu Banquet Hall. Just 2 minutes away from Road House.
           </p>
           <a href="https://dinidugardens.lk" target="_blank" className="inline-flex items-center gap-3 text-[#efecca] font-bold uppercase tracking-widest border-b-2 border-[#ff934f] pb-1 hover:text-[#ff934f] transition-colors w-fit">
             Visit Dinidu Gardens <ArrowRight size={16} />
           </a>
        </div>

        {/* Visual Side */}
        <div className="md:w-1/3 bg-[#ecc8ae] relative min-h-[200px] flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-[#6c4b5e]/80"></div>
           <div className="relative z-10 text-center p-6 border-4 border-[#ddffd9] m-6">
              <span className="font-serif text-3xl text-[#ddffd9] tracking-widest">DINIDU</span>
              <div className="w-full h-px bg-[#ddffd9]/50 my-2"></div>
              <span className="text-xs text-[#ddffd9] uppercase tracking-[0.3em]">Banquet Halls</span>
           </div>
        </div>
      </div>
    </section>
  );
}
`);

// 4. ROAD HOUSE HOME PAGE (Root)
write('app/page.js', `
import Navbar from "@/components/Navbar";
import VenueAd from "@/components/VenueAd";
import { MapPin, Utensils, Coffee, Wine, Mic2, Music, Sun, ShoppingBag } from "lucide-react";

const zones = [
  { id: "street-food", title: "Street Food", icon: <Utensils/>, desc: "Kottu & BBQ Grills" },
  { id: "cafe", title: "The Cafe", icon: <Coffee/>, desc: "Coffee & Short Eats" },
  { id: "ice-cream", title: "Ice Cream", icon: "🍦", desc: "Gelato & Sundaes" },
  { id: "juice", title: "Juice Bar", icon: "🥤", desc: "Mojitos & Shakes" },
  { id: "byob", title: "B.Y.O.B", icon: <Wine/>, desc: "Bring Your Own Bottle" },
  { id: "family", title: "Family Dining", icon: "🍽️", desc: "Private Seating" },
  { id: "outdoor", title: "Outdoor", icon: <Sun/>, desc: "Open Air Vibes" },
  { id: "karaoke", title: "Karaoke", icon: <Mic2/>, desc: "Sing Your Heart Out" },
];

export const metadata = {
  title: "Road House Seeduwa | Street Food & Nightlife",
  description: "Seeduwa's premier food district featuring 8 unique zones.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#5e565a]">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#5e565a]">
        {/* Industrial Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#f7ff58 1px, transparent 1px), linear-gradient(90deg, #f7ff58 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 border-2 border-[#a9cbb7] rounded-none text-[#a9cbb7] text-xs font-bold uppercase tracking-widest mb-6 bg-[#5e565a]">
            <MapPin size={14} /> 24 Kotugoda Rd, Seeduwa
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-[#efecca] uppercase tracking-tighter leading-none mb-6 drop-shadow-[5px_5px_0px_rgba(0,0,0,0.5)]">
            ROAD <span className="text-[#f7ff58]">HOUSE</span>
          </h1>
          <p className="text-[#efecca]/80 text-lg md:text-xl font-medium tracking-wide uppercase">
            The Ultimate Food District
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
             <a href="#menu" className="px-10 py-4 bg-[#ff934f] text-[#5e565a] font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all skew-x-[-10deg] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                View Menu
             </a>
          </div>
        </div>
      </section>

      {/* CROSS PROMO AD (Link to Dinidu) */}
      <VenueAd />

      {/* ZONES GRID */}
      <section id="zones" className="py-24 px-6 bg-[#4a4448]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-[#efecca] uppercase mb-16 italic">
            The <span className="text-[#ff934f]">Pitstops</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.map((zone, i) => (
              <div key={i} className="group relative bg-[#5e565a] p-8 border-l-4 border-[#f7ff58] hover:border-[#ff934f] transition-all duration-300 shadow-xl hover:-translate-y-2">
                <div className="w-14 h-14 bg-[#4a4448] rounded-none flex items-center justify-center border-2 border-[#a9cbb7] text-[#efecca] mb-6 group-hover:border-[#ff934f] group-hover:text-[#ff934f] transition-colors">
                   {zone.icon}
                </div>
                <h3 className="text-xl font-bold text-[#efecca] uppercase mb-2">{zone.title}</h3>
                <p className="text-[#efecca]/60 text-sm">{zone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTERTAINMENT */}
      <section id="entertainment" className="py-24 bg-[#5e565a] border-t border-[#f7ff58]/20">
         <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-black text-[#efecca] uppercase mb-4">Live Events</h2>
            <p className="text-[#f7ff58] font-bold tracking-widest uppercase mb-16">Every Weekend @ Road House</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-[#4a4448] p-10 border-2 border-[#5e565a] hover:border-[#f7ff58] flex items-center gap-6 group transition-all">
                  <div className="w-20 h-20 bg-[#f7ff58] flex items-center justify-center text-[#5e565a] font-bold">
                     <Music size={40} />
                  </div>
                  <div className="text-left">
                     <h3 className="text-2xl font-black text-[#efecca] uppercase">DJ Nights</h3>
                     <p className="text-[#a9cbb7]">Friday & Saturday | 7PM</p>
                  </div>
               </div>

               <div className="bg-[#4a4448] p-10 border-2 border-[#5e565a] hover:border-[#ff934f] flex items-center gap-6 group transition-all">
                  <div className="w-20 h-20 bg-[#ff934f] flex items-center justify-center text-[#5e565a] font-bold">
                     <Mic2 size={40} />
                  </div>
                  <div className="text-left">
                     <h3 className="text-2xl font-black text-[#efecca] uppercase">Live Bands</h3>
                     <p className="text-[#a9cbb7]">Sunday Sessions</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </main>
  );
}
`);

console.log("✅ ROAD HOUSE STANDALONE DEPLOYED.");
console.log("👉 ACTION: git add . && git commit -m 'Road House Standalone Build' && git push");