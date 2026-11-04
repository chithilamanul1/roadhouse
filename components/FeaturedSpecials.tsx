"use client";

import { motion } from "framer-motion";
import { ThumbsUp, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

const SPECIALS = [
  {
    id: "sp1",
    name: "HOT BUTTER CUTTLEFISH",
    price: 2100,
    desc: "Crispy battered cuttlefish tossed in spicy butter sauce and spring onions.",
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "sp2",
    name: "KOCHCHI PORK CURRY",
    price: 1700,
    desc: "Slow-cooked pork curry infused with fiery local Kochchi peppers.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "sp3",
    name: "MIXED GRILL PLATTER",
    price: 6000,
    desc: "The ultimate sharing platter: Chicken, Pork, Sausages & Wedges.",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function FeaturedSpecials() {
  const { addToCart } = useCart();

  return (
    <section className="py-24 bg-[#070D1C] relative overflow-hidden border-t border-[#00D2FF]/10">
       <div className="px-6 mb-14 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-[#00D2FF] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
              Signature Plates
            </p>
            <h2 className="text-4xl md:text-7xl font-[family-name:var(--font-blackops)] text-white leading-none">
                CHEF&apos;S <span className="text-[#00D2FF]">SPECIALS</span>
            </h2>
            <p className="text-neutral-400 mt-2 font-sans text-sm">
              Our most popular dishes, freshly prepared to perfection.
            </p>
          </div>
       </div>

       <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory no-scrollbar max-w-7xl mx-auto">
          {SPECIALS.map((item, i) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.15 }}
               className="snap-center shrink-0 w-[85vw] md:w-[380px] bg-[#0C172E] rounded-2xl overflow-hidden border border-white/10 hover:border-[#00D2FF] transition-all flex flex-col justify-between"
             >
                <div className="h-60 overflow-hidden relative">
                   <img 
                      src={item.image} 
                      alt={item.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                   />
                   <div className="absolute top-4 right-4 bg-black/80 backdrop-blur border border-[#00D2FF]/40 px-3 py-1 rounded-full text-[#00D2FF] font-mono text-xs font-bold">
                      Rs. {item.price.toLocaleString()}
                   </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                   <div>
                     <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white tracking-wide mb-2">
                        {item.name}
                     </h3>
                     <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                        {item.desc}
                     </p>
                   </div>

                   <button
                     onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                     className="w-full bg-[#00D2FF] text-black font-bold text-xs uppercase tracking-wider py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white transition-all shadow-[0_0_15px_rgba(0,210,255,0.3)]"
                   >
                     <Plus size={16} /> Add to Order
                   </button>
                </div>
             </motion.div>
          ))}
       </div>
    </section>
  );
}
