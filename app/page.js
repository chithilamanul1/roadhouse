import Navbar from "@/components/Navbar";
import VenueAd from "@/components/VenueAd";
import MenuSection from "@/components/MenuSection";
import PhotoGallery from "@/components/PhotoGallery";
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

      {/* REAL PHOTO GALLERY */}
      <PhotoGallery />

      {/* GOOGLE REVIEWS BANNER */}
      <section className="py-16 bg-[#ff934f] text-[#18181b] text-center px-6">
        <h2 className="text-3xl md:text-5xl font-black uppercase mb-3">
          Visited Road House?
        </h2>
        <p className="font-bold text-base md:text-lg mb-6 max-w-lg mx-auto">
          We would love to know how your visit was! Tap below to leave us a quick Google review.
        </p>
        <a
          href="https://share.google/HiEDjYVkfO7hPATl4"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#18181b] text-[#f7ff58] font-black px-8 py-4 uppercase tracking-wider hover:bg-white hover:text-black transition-all shadow-lg text-sm md:text-base"
        >
          ★ Leave a Google Review
        </a>
      </section>

      <Footer />
    </main>
  );
}