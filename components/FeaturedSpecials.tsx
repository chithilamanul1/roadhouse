"use client";

import { motion } from "framer-motion";

const SPECIALS = [
  {
    id: "sp1",
    name: "HOT BUTTER CUTTLEFISH", // 
    price: "2,100 LKR",
    desc: "Crispy battered cuttlefish tossed in spicy butter sauce and spring onions.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "sp2",
    name: "KOCHCHI PORK", // 
    price: "1,700 LKR",
    desc: "Slow-cooked pork curry infused with fiery Kochchi peppers.",
    image: "https://images.unsplash.com/photo-1626804475315-18747a61d674?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "sp3",
    name: "MIXED GRILL PLATTER", // 
    price: "6,000 LKR",
    desc: "The ultimate sharing platter: Chicken, Pork, Sausages & Wedges.",
    image: "https://images.unsplash.com/photo-1544025162-d76690b6d015?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function FeaturedSpecials() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
       {/* Section Title */}
       <div className="px-6 mb-16 max-w-7xl mx-auto flex items-end justify-between">
          <h2 className="text-6xl md:text-8xl font-[family-name:var(--font-bebas)] text-white leading-none">
            SIGNATURE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5722] to-yellow-600">DISHES</span>
          </h2>
          <div className="hidden md:block w-32 h-[2px] bg-[#ff5722] mb-6" />
       </div>

       {/* Horizontal Scroll Area */}
       <div className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x snap-mandatory no-scrollbar">
          {SPECIALS.map((item, i) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.2 }}
               className="snap-center shrink-0 w-[85vw] md:w-[600px] group cursor-pointer relative"
             >
                <div className="h-[400px] md:h-[500px] overflow-hidden rounded-2xl relative">
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10" />
                   <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                   />
                </div>
                
                <div className="mt-6 flex justify-between items-start">
                   <div>
                      <h3 className="text-3xl font-[family-name:var(--font-bebas)] text-white mb-2">{item.name}</h3>
                      <p className="text-neutral-400 max-w-xs text-sm">{item.desc}</p>
                   </div>
                   <span className="text-[#ff5722] font-bold text-xl">{item.price}</span>
                </div>
             </motion.div>
          ))}
       </div>
    </section>
  );
}
