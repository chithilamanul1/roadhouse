"use client";

import { motion } from "framer-motion";

// This is the data the "Admin" would update
const OFFERS = [
  {
    id: 1,
    title: "FRIDAY BBQ NIGHT",
    desc: "20% OFF on all Platters from 7 PM",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    color: "from-orange-600 to-red-900"
  },
  {
    id: 2,
    title: "LUNCH SPECIAL",
    desc: "Free Iced Tea with every Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
    color: "from-blue-600 to-purple-900"
  },
  {
    id: 3,
    title: "HAPPY HOUR",
    desc: "Buy 1 Get 1 Free on Mojitos",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32d?q=80&w=800&auto=format&fit=crop",
    color: "from-green-600 to-emerald-900"
  }
];

export default function OffersSlider() {
  return (
    <section className="py-10 bg-[#050505]">
      <h2 className="text-3xl font-[family-name:var(--font-bebas)] text-center mb-8 text-white">
        LIVE <span className="text-[#ff5722]">OFFERS</span>
      </h2>
      
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 no-scrollbar">
        {OFFERS.map((offer) => (
          <motion.div
            key={offer.id}
            whileTap={{ scale: 0.95 }}
            className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[250px] relative rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Background Image */}
            <img 
              src={offer.image} 
              alt={offer.title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${offer.color} opacity-80 mix-blend-multiply`} />
            
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-[#ff5722] text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-block">LIMITED TIME</span>
              <h3 className="text-4xl font-[family-name:var(--font-bebas)] text-white leading-none mb-1">{offer.title}</h3>
              <p className="text-white/90 font-sans text-sm">{offer.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
