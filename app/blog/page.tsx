"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const NEWS_POSTS = [
  { 
    id: 1, 
    category: "CONSTRUCTION", 
    title: "Building Seeduwa's Newest Hotspot", 
    date: "Coming Late 2025", 
    desc: "A look behind the scenes at how we are transforming this space into the ultimate grill house.",
    img: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 2, 
    category: "FOOD", 
    title: "Why We Use Local Spices", 
    date: "Food Culture", 
    desc: "Our 'Kochchi' Pork isn't just spicy; it's a tribute to local flavors. Here is why we source locally.",
    img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 3, 
    category: "TEAM", 
    title: "Join the Wolf Pack: We Are Hiring", 
    date: "Recruitment", 
    desc: "We are looking for chefs, baristas, and servers who have passion. See what it takes to join the crew.",
    img: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    id: 4, 
    category: "ANNOUNCEMENT", 
    title: "Grand Opening Countdown", 
    date: "Stay Tuned", 
    desc: "The grills are almost ready. Sign up for our newsletter to get the official opening date first.",
    img: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <div className="pt-32 pb-10 px-6 max-w-7xl mx-auto">
         
         <div className="mb-12 border-b border-white/10 pb-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white uppercase">
               LATEST <span className="text-[#ff5722]">NEWS</span>
            </h1>
            <p className="text-neutral-400 mt-4 font-sans max-w-lg">
               Official updates, announcements, and stories from the Road House HQ.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS_POSTS.map((post, i) => (
               <motion.div 
                 key={post.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="group cursor-pointer bg-neutral-900/50 border border-white/5 hover:border-[#ff5722] transition-colors rounded-lg overflow-hidden flex flex-col"
               >
                  <div className="h-[250px] overflow-hidden relative">
                     <img 
                        src={post.img} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute top-4 left-4 bg-black px-3 py-1 rounded border border-white/10">
                        <span className="text-[#ff5722] font-bold text-xs tracking-wider uppercase">{post.category}</span>
                     </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                     <p className="text-neutral-500 text-xs mb-3 font-mono uppercase">{post.date}</p>
                     <h2 className="text-3xl font-[family-name:var(--font-bebas)] text-white mb-3 group-hover:text-[#ff5722] transition-colors leading-none">
                        {post.title}
                     </h2>
                     <p className="text-neutral-400 font-sans text-sm mb-6 line-clamp-3">
                        {post.desc}
                     </p>
                     <div className="mt-auto">
                        <span className="text-sm font-bold text-white border-b-2 border-[#ff5722] pb-1">
                           READ UPDATE
                        </span>
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
