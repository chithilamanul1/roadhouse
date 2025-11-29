"use client";

import { motion } from "framer-motion";
import { ThumbsUp } from "lucide-react";
import { useState } from "react";

const SPECIALS = [
  {
    id: "sp1",
    name: "HOT BUTTER CUTTLEFISH",
    price: "2,100 LKR",
    desc: "Crispy battered cuttlefish tossed in spicy butter sauce and spring onions.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sp2",
    name: "KOCHCHI PORK CURRY",
    price: "1,700 LKR",
    desc: "Slow-cooked pork curry infused with fiery local Kochchi peppers.",
    // Fixed image link
    image: "https://images.unsplash.com/photo-1547496502-ffa2264a36b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "sp3",
    name: "MIXED GRILL PLATTER",
    price: "6,000 LKR",
    desc: "The ultimate sharing platter: Chicken, Pork, Sausages & Wedges.",
    image: "https://images.unsplash.com/photo-1544025162-d76690b6d015?q=80&w=800&auto=format&fit=crop"
  }
];

export default function FeaturedSpecials() {
  const [votes, setVotes] = useState<Record<string, number>>({ sp1: 124, sp2: 89, sp3: 205 });

  const handleVote = (id: string) => {
    setVotes(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
       <div className="px-6 mb-16 max-w-7xl mx-auto flex items-end justify-between">
          <div>
            <h2 className="text-6xl md:text-8xl font-[family-name:var(--font-blackops)] text-white leading-none">
                SIGNATURE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5722] to-yellow-600">DISHES</span>
            </h2>
            <p className="text-neutral-500 mt-4 font-mono text-sm">VOTE FOR YOUR FAVORITE TO BE ON THE OPENING MENU</p>
          </div>
       </div>

       <div className="flex overflow-x-auto gap-8 px-6 pb-12 snap-x snap-mandatory no-scrollbar">
          {SPECIALS.map((item, i) => (
             <motion.div 
               key={item.id}
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.2 }}
               className="snap-center shrink-0 w-[85vw] md:w-[600px] group relative"
             >
                <div className="h-[400px] md:h-[500px] overflow-hidden rounded-2xl relative border border-white/10 group-hover:border-[#ff5722] transition-colors">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                   <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                   />
                </div>
                
                <div className="mt-6 flex justify-between items-start">
                   <div>
                      <h3 className="text-3xl font-[family-name:var(--font-bebas)] text-white mb-2">{item.name}</h3>
                      <p className="text-neutral-400 max-w-xs text-sm font-sans mb-4">{item.desc}</p>
                      
                      <button 
                        onClick={() => handleVote(item.id)}
                        className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#ff5722] transition-colors border border-white/20 px-4 py-2 rounded-full hover:bg-white/5"
                      >
                         <ThumbsUp size={16} />
                         <span>{votes[item.id]} Votes</span>
                      </button>
                   </div>
                   <span className="text-[#ff5722] font-bold text-xl">{item.price}</span>
                </div>
             </motion.div>
          ))}
       </div>
    </section>
  );
}
