"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// REALISTIC BLOG POSTS
const POSTS = [
  { 
    id: 1, 
    category: "ANNOUNCEMENT", 
    title: "Official Opening: December 2025", 
    date: "Coming Soon", 
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 2, 
    category: "MENU", 
    title: "Tasting the New BBQ Pork Ribs", 
    date: "Coming Soon", 
    img: "https://images.unsplash.com/photo-1544025162-d76690b6d015?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 3, 
    category: "CAREERS", 
    title: "We Are Hiring: Join the Crew", 
    date: "Coming Soon", 
    img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    id: 4, 
    category: "CONSTRUCTION", 
    title: "Building the Seeduwa HQ", 
    date: "Coming Soon", 
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" 
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
         
         <div className="mb-12 border-b border-white/10 pb-6">
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white uppercase">
               News & <span className="text-[#ff5722]">Events</span>
            </h1>
            <p className="text-neutral-400 mt-4 font-sans max-w-lg">
               Stay updated with the latest progress as we build up to our grand opening in Seeduwa.
            </p>
         </div>

         {/* BLOG GRID */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POSTS.map((post, i) => (
               <motion.div 
                 key={post.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="group cursor-pointer bg-neutral-900/50 border border-white/5 hover:border-[#ff5722] transition-colors rounded-lg overflow-hidden"
               >
                  {/* Image */}
                  <div className="h-[250px] overflow-hidden relative">
                     <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute top-4 left-4 bg-black px-3 py-1 rounded">
                        <span className="text-[#ff5722] font-bold text-xs tracking-wider">{post.category}</span>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                     <p className="text-neutral-500 text-xs mb-2 font-mono">{post.date}</p>
                     <h2 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2 group-hover:text-[#ff5722] transition-colors">
                        {post.title}
                     </h2>
                     <span className="text-sm text-neutral-400 border-b border-transparent group-hover:border-[#ff5722] transition-all">
                        Read More
                     </span>
                  </div>
               </motion.div>
            ))}
         </div>
      </div>

      <Footer />
    </div>
  );
}
