"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const NEWS_POSTS = [
  { 
    id: 1, 
    category: "NOW OPEN", 
    title: "RoadHouse is Officially Open in Seeduwa!", 
    date: "Current Update", 
    desc: "We are now open daily for lunch, dinner, drinks, and late-night dining. Come visit us at 24 Kotugoda Road.",
    img: "/images/real/real-signboard-day.png" 
  },
  { 
    id: 2, 
    category: "AIRPORT DINING", 
    title: "Only 10 Minutes from Katunayake Airport", 
    date: "Travel Guide", 
    desc: "Flying into or out of Colombo Airport? Stop by for delicious hot food, refreshing cold drinks, and free secure parking.",
    img: "/images/real/real-bar-neon.png" 
  },
  { 
    id: 3, 
    category: "FOOD SPECIALS", 
    title: "Signature Hot Butter Cuttlefish & Grill Specialties", 
    date: "Chef's Kitchen", 
    desc: "Fresh local seafood, tender grilled pork, spicy fried rice, and ice-cold mocktails prepared fresh every day.",
    img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 4, 
    category: "EASY ORDERING", 
    title: "Scan Table QR Codes to Order Directly on Your Phone", 
    date: "New Feature", 
    desc: "Order directly from your seat with our simple table QR code ordering system. Fast, easy, and sent straight to WhatsApp.",
    img: "/images/real/real-patio-ambience.png" 
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#050811] text-white">
      <Navbar />
      
      <div className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
         
         <div className="mb-12 border-b border-blue-500/20 pb-6 text-center md:text-left">
            <span className="text-neon-cyan font-mono text-xs uppercase tracking-widest px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full inline-block mb-3">
               RoadHouse Stories
            </span>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white uppercase">
               LATEST <span className="text-neon-cyan neon-glow">NEWS</span>
            </h1>
            <p className="text-neutral-400 mt-2 font-sans max-w-lg text-sm md:text-base">
               Updates, food stories, and news from RoadHouse Cafe & Restro in Seeduwa.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS_POSTS.map((post, i) => (
               <motion.div 
                 key={post.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="group cursor-pointer bg-slate-900/60 border border-blue-500/20 hover:border-neon-cyan transition-all duration-300 rounded-2xl overflow-hidden flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
               >
                  <div className="h-[250px] overflow-hidden relative">
                     <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur px-3 py-1 rounded-full border border-neon-cyan/40">
                        <span className="text-neon-cyan font-bold text-xs tracking-wider uppercase">{post.category}</span>
                     </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                     <p className="text-neutral-500 text-xs mb-2 font-mono uppercase">{post.date}</p>
                     <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-bebas)] text-white mb-3 group-hover:text-neon-cyan transition-colors leading-tight">
                        {post.title}
                     </h2>
                     <p className="text-neutral-400 font-sans text-sm mb-6 line-clamp-3">
                        {post.desc}
                     </p>
                     <div className="mt-auto">
                        <Link href="/menu" className="inline-flex items-center gap-2 text-sm font-bold text-neon-cyan hover:text-white transition-colors">
                           <span>View Our Menu</span>
                           <ArrowRight size={16} />
                        </Link>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>

      <Footer />
    </div>
  );
}