"use client";

import { motion } from "framer-motion";
import { TrendingUp, Star } from "lucide-react";
import { useState, useEffect } from "react";

// --- YOUR KEYS ---
const BIN_ID = "692b254c43b1c97be9cd0b42"; 
const API_KEY = "$2a$10$2sXRZd4DhW33xy5UlJV8TuBFKYX2nuxQ5zKAOF/qbptARHuM9i25u";

// Standard placeholder images
const IMAGES = [
    "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800", 
    "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800"
];

export default function TrendingOps() {
  const [trending, setTrending] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": API_KEY }
    })
    .then(res => res.json())
    .then(data => {
        if (data.record && data.record.topProducts) {
            setTrending(data.record.topProducts);
        }
    })
    .catch(err => console.error("Sync Error", err));
  }, []);

  return (
    <section className="py-20 bg-black">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-8 text-[#ff5722]">
             <TrendingUp size={24} />
             <span className="font-mono text-xs tracking-[0.3em] uppercase font-bold">POPULAR DISHES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {trending.length === 0 ? (
                <div className="text-white font-mono text-xs animate-pulse">LOADING SALES DATA...</div>
             ) : (
                trending.map((item, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.2 }}
                     className="relative group h-40 overflow-hidden rounded-sm border border-white/10 bg-neutral-900"
                  >
                     {/* Image */}
                     <img src={IMAGES[i] || IMAGES[0]} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt={item.name} />
                     
                     {/* Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent p-6 flex flex-col justify-center">
                        <div className="absolute top-2 left-2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                            #{i+1} BEST SELLER
                        </div>
                        <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-1 leading-none">{item.name}</h3>
                        <div className="flex items-center gap-2 text-[#ff5722]">
                           <Star size={14} fill="#ff5722" />
                           <span className="font-mono text-sm font-bold">{item.sold} ORDERS</span>
                        </div>
                     </div>
                  </motion.div>
                ))
             )}
          </div>
       </div>
    </section>
  );
}
