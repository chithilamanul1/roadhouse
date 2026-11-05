"use client";

import { Plus, Check, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const SPECIALS = [
  {
    id: "sp1",
    name: "HOT BUTTER CUTTLEFISH",
    price: 2100,
    desc: "Crispy fried cuttlefish tossed with fresh garlic butter, spring onions, and spicy Sri Lankan peppers.",
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "sp2",
    name: "KOCHCHI PORK CURRY",
    price: 1700,
    desc: "Tender, slow-cooked pork belly braised in rich roasted curry spices and spicy green Kochchi chillies.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: "sp3",
    name: "MIXED GRILL PLATTER",
    price: 6000,
    desc: "The giant sharing feast: BBQ quarter chicken, grilled sausages, pork skewers, french fries, and dipping sauces.",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export default function FeaturedSpecials() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/10">
       <div className="px-6 mb-14 max-w-7xl mx-auto">
          <p className="text-[#ff5722] font-mono text-xs tracking-[0.3em] uppercase mb-2 font-bold">
            Chef Recommends
          </p>
          <h2 className="text-5xl md:text-8xl font-[family-name:var(--font-blackops)] text-white leading-none">
              SIGNATURE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5722] to-amber-500">DISHES</span>
          </h2>
          <p className="text-neutral-400 mt-3 font-sans text-sm sm:text-base max-w-lg">
            Our most popular plates made fresh daily. Order right to your table or takeaway.
          </p>
       </div>

       {/* Snap-scroll Carousel (Hardware-accelerated native CSS scroll) */}
       <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory no-scrollbar max-w-7xl mx-auto">
          {SPECIALS.map((item) => (
             <div 
               key={item.id}
               className="snap-center shrink-0 w-[85vw] sm:w-[420px] bg-neutral-900/80 rounded-2xl overflow-hidden border border-white/10 hover:border-[#ff5722] transition-colors flex flex-col justify-between group shadow-xl"
             >
                <div className="h-64 overflow-hidden relative bg-black">
                   <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                   />
                   <div className="absolute top-4 right-4 bg-black/90 backdrop-blur px-3.5 py-1.5 rounded-full border border-white/10">
                      <span className="font-mono text-sm font-bold text-[#ff5722]">Rs. {item.price.toLocaleString()}</span>
                   </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                   <div>
                      <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-bebas)] text-white tracking-wide mb-2 group-hover:text-[#ff5722] transition-colors">
                         {item.name}
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                         {item.desc}
                      </p>
                   </div>

                   <button
                     onClick={() => handleAdd(item)}
                     className={`w-full py-3.5 font-bold uppercase text-xs tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg ${
                       addedId === item.id
                         ? "bg-[#25D366] text-black"
                         : "bg-[#ff5722] hover:bg-white text-black"
                     }`}
                   >
                     {addedId === item.id ? (
                       <>
                         <Check size={16} /> Added to Your Tray!
                       </>
                     ) : (
                       <>
                         <Plus size={16} /> + Add to Order (Rs. {item.price.toLocaleString()})
                       </>
                     )}
                   </button>
                </div>
             </div>
          ))}
       </div>
    </section>
  );
}