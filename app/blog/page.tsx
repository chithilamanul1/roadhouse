"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const POSTS = [
  { id: 1, tag: "UPDATE_V1.2", title: "THE NEW SMOKER HAS ARRIVED", date: "28 NOV 2025", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" },
  { id: 2, tag: "EVENT_LOG", title: "FRIDAY NIGHT ACOUSTIC SESSIONS", date: "25 NOV 2025", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop" },
  { id: 3, tag: "MENU_PATCH", title: "INTRODUCING THE 'V8' BURGER", date: "20 NOV 2025", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" },
  { id: 4, tag: "COMMUNITY", title: "JDM CAR MEET @ ROAD HOUSE", date: "15 NOV 2025", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
         <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white">
               TRANSMISSION <span className="text-[#ff5722]">LOGS</span>
            </h1>
            <p className="hidden md:block font-mono text-[#ff5722] animate-pulse">● LIVE FEED</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POSTS.map((post, i) => (
               <motion.div 
                 key={post.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.1 }}
                 className="group cursor-pointer"
               >
                  {/* Image Container */}
                  <div className="relative h-[300px] overflow-hidden rounded-sm border border-white/10 mb-4">
                     <div className="absolute inset-0 bg-[#ff5722]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                     />
                     <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-2 py-1 border border-[#ff5722] z-20">
                        <span className="text-[#ff5722] font-mono text-xs">{post.tag}</span>
                     </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex justify-between items-start border-l-2 border-white/10 pl-4 group-hover:border-[#ff5722] transition-colors">
                     <div>
                        <h2 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-1 group-hover:text-[#ff5722] transition-colors">{post.title}</h2>
                        <p className="font-mono text-xs text-neutral-500">{post.date}</p>
                     </div>
                     <span className="text-2xl text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all">→</span>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>

      <Footer />
    </div>
  );
}
