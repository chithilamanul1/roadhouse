const fs = require('fs');
const path = require('path');
const rootDir = process.cwd();

function write(filePath, content) {
    const fullPath = path.join(rootDir, filePath);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, content.trim());
    console.log(`✅ INSTALLED: ${filePath}`);
}

console.log("🚀 FINALIZING ROAD HOUSE WEBSITE...");

// 1. MENU SECTION (Industrial Tabs)
write('components/MenuSection.jsx', `
'use client';
import { useState } from 'react';
import { Utensils, Coffee, Beer, IceCream } from 'lucide-react';

const categories = [
  { id: 'street', name: 'Street Food', icon: <Utensils size={18} />, items: [
      { name: 'Dolphin Kottu', price: '1,200', desc: 'Cheesy, spicy, heavy.' },
      { name: 'Egg Hoppers (3)', price: '450', desc: 'With Lunu Miris.' },
      { name: 'BBQ Chicken Leg', price: '950', desc: 'Charcoal grilled.' },
      { name: 'Seafood Rice', price: '1,500', desc: 'Wok fried street style.' }
  ]},
  { id: 'bites', name: 'Bites & BYOB', icon: <Beer size={18} />, items: [
      { name: 'Hot Butter Cuttlefish', price: '1,800', desc: 'The classic.' },
      { name: 'Devilled Cashew', price: '1,200', desc: 'Spicy roast.' },
      { name: 'Pepper Pork', price: '1,600', desc: 'Black pepper dry fry.' },
      { name: 'French Fries', price: '800', desc: 'Thick cut.' }
  ]},
  { id: 'cafe', name: 'Cafe & Juice', icon: <Coffee size={18} />, items: [
      { name: 'Iced Milo', price: '400', desc: 'Extra chocolatey.' },
      { name: 'Cappuccino', price: '600', desc: 'Fresh brew.' },
      { name: 'Passion Mojito', price: '750', desc: 'Mint & lime refresher.' },
      { name: 'Chocolate Waffle', price: '900', desc: 'With ice cream.' }
  ]}
];

export default function MenuSection() {
  const [active, setActive] = useState('street');

  return (
    <section id="menu" className="py-24 px-6 bg-[#4a4448]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-6xl font-black text-[#efecca] uppercase italic">
             The <span className="text-[#f7ff58]">Menu</span>
           </h2>
           <p className="text-[#a9cbb7] font-mono tracking-widest uppercase text-xs mt-2">Fuel for the Road</p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={\`flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-widest text-sm border-2 transition-all skew-x-[-10deg] \${active === cat.id ? 'bg-[#ff934f] border-[#ff934f] text-[#5e565a]' : 'border-[#a9cbb7] text-[#a9cbb7] hover:border-[#f7ff58] hover:text-[#f7ff58]'}\`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {categories.find(c => c.id === active).items.map((item, i) => (
             <div key={i} className="bg-[#5e565a] p-6 border-l-4 border-[#f7ff58] flex justify-between items-start group hover:bg-[#27272a] transition-colors">
                <div>
                   <h4 className="text-xl font-bold text-[#efecca] uppercase group-hover:text-[#f7ff58] transition-colors">{item.name}</h4>
                   <p className="text-sm text-[#a9cbb7] mt-1">{item.desc}</p>
                </div>
                <span className="text-xl font-black text-[#ff934f]">{item.price}</span>
             </div>
           ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="/contact" className="inline-block border-b-2 border-[#efecca] text-[#efecca] font-bold uppercase tracking-widest hover:text-[#ff934f] hover:border-[#ff934f] transition-colors">
             Download Full Menu (PDF)
           </a>
        </div>
      </div>
    </section>
  );
}
`);

// 2. FOOTER (Industrial Footer)
write('components/Footer.jsx', `
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#18181b] border-t-4 border-[#ff934f] pt-16 pb-8 text-[#efecca]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
           <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#f7ff58] text-[#5e565a] font-black text-xl flex items-center justify-center -skew-x-12">RH</div>
              <span className="text-3xl font-black italic uppercase">ROAD HOUSE</span>
           </div>
           <p className="text-[#a9cbb7] max-w-sm mb-6">
             The ultimate food district in Seeduwa. 8 Zones, Live Music, and the best Street Food in town.
           </p>
           <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#4a4448] flex items-center justify-center hover:bg-[#ff934f] hover:text-[#5e565a] transition-colors"><Facebook size={20}/></a>
              <a href="#" className="w-10 h-10 bg-[#4a4448] flex items-center justify-center hover:bg-[#ff934f] hover:text-[#5e565a] transition-colors"><Instagram size={20}/></a>
           </div>
        </div>

        {/* Contact Info */}
        <div>
           <h4 className="text-[#ff934f] font-bold uppercase tracking-widest mb-6 text-sm">Location</h4>
           <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                 <MapPin className="text-[#f7ff58] shrink-0" size={18} />
                 <span>24 Kotugoda Rd,<br/>Seeduwa, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="text-[#f7ff58] shrink-0" size={18} />
                 <a href="tel:0724139621" className="hover:text-[#ff934f]">072 413 9621</a>
              </li>
           </ul>
        </div>

        {/* Hours */}
        <div>
           <h4 className="text-[#ff934f] font-bold uppercase tracking-widest mb-6 text-sm">Opening Hours</h4>
           <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                 <Clock className="text-[#f7ff58] shrink-0" size={18} />
                 <div>
                    <span className="block font-bold text-white">Daily</span>
                    <span className="text-[#a9cbb7]">10:00 AM - 11:00 PM</span>
                 </div>
              </li>
              <li className="mt-4 pt-4 border-t border-[#4a4448]">
                 <span className="block font-bold text-white">Happy Hour</span>
                 <span className="text-[#a9cbb7]">5:00 PM - 7:00 PM</span>
              </li>
           </ul>
        </div>
      </div>

      <div className="border-t border-[#4a4448] pt-8 text-center text-xs text-[#a9cbb7] font-mono uppercase tracking-widest">
         &copy; {new Date().getFullYear()} Road House Seeduwa. All Rights Reserved.
      </div>
    </footer>
  );
}
`);

// 3. RESERVATION PAGE (Work Order Style)
write('app/contact/page.js', `
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book a Table | Road House",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#5e565a]">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
         <div className="max-w-3xl mx-auto bg-[#4a4448] p-8 md:p-12 border-t-8 border-[#ff934f] shadow-2xl relative">
            {/* Stamp Effect */}
            <div className="absolute top-8 right-8 border-4 border-[#f7ff58] text-[#f7ff58] font-black text-xl px-4 py-2 -rotate-12 opacity-50 pointer-events-none">
               OPEN 365 DAYS
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#efecca] uppercase mb-2">Reserve Your Spot</h1>
            <p className="text-[#a9cbb7] font-mono uppercase tracking-widest text-sm mb-10">Table Reservation Form // RH-001</p>

            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                     <input type="text" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" placeholder="YOUR NAME" />
                  </div>
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Phone</label>
                     <input type="tel" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" placeholder="07X XXX XXXX" />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Date</label>
                     <input type="date" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" />
                  </div>
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Time</label>
                     <input type="time" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" />
                  </div>
                  <div>
                     <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Guests</label>
                     <input type="number" className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold" placeholder="2" />
                  </div>
               </div>

               <div>
                  <label className="block text-[#ff934f] text-xs font-bold uppercase tracking-widest mb-2">Preferred Zone</label>
                  <select className="w-full bg-[#5e565a] border-2 border-transparent focus:border-[#f7ff58] p-4 text-white outline-none font-bold uppercase">
                     <option>Family Restaurant (A/C)</option>
                     <option>Outdoor Garden</option>
                     <option>Karaoke Room</option>
                     <option>BYOB Lounge</option>
                  </select>
               </div>

               <button className="w-full py-5 bg-[#ff934f] hover:bg-[#f7ff58] text-[#5e565a] font-black uppercase tracking-[0.2em] text-lg transition-colors mt-8">
                  Confirm Booking
               </button>
            </form>
         </div>
      </section>

      <Footer />
    </main>
  );
}
`);

// 4. ASSEMBLE HOME PAGE (Inject Menu & Footer)
write('app/page.js', `
import Navbar from "@/components/Navbar";
import VenueAd from "@/components/VenueAd";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";
import { MapPin, Utensils, Coffee, Wine, Mic2, Music, Sun } from "lucide-react";

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

      {/* CROSS PROMO AD */}
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

      {/* MENU SECTION */}
      <MenuSection />

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
                     <p className="text-gray-400">Sunday Sessions</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
`);

console.log("✅ ROAD HOUSE SITE FINISHED. READY FOR DEPLOYMENT.");
console.log("👉 ACTION: git add . && git commit -m 'Final Road House Build' && git push");