"use client";

import { motion } from "framer-motion";
import { Crown, Trophy, Medal, User } from "lucide-react";
import { useState, useEffect } from "react";

// --- YOUR KEYS ---
const BIN_ID = "692b254c43b1c97be9cd0b42"; 
const API_KEY = "$2a$10$2sXRZd4DhW33xy5UlJV8TuBFKYX2nuxQ5zKAOF/qbptARHuM9i25u";

export default function WolfPackLeaderboard() {
  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": API_KEY }
    })
    .then(res => res.json())
    .then(data => {
        if (data.record && data.record.topCustomers) {
            setCustomers(data.record.topCustomers);
        }
    })
    .catch(err => console.error("Sync Error", err));
  }, []);

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
           <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-blackops)] text-white mb-2">
              LOYALTY <span className="text-[#00D2FF]">LEADERBOARD</span>
           </h2>
           <p className="font-mono text-neutral-500 text-sm uppercase tracking-widest">
              Top Customers of the Month
           </p>
        </div>

        <div className="bg-neutral-900/50 border border-white/10 rounded-lg overflow-hidden">
           <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 bg-black/50 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
              <div className="col-span-2 text-center">RANK</div>
              <div className="col-span-6">CUSTOMER</div>
              <div className="col-span-4 text-right">TOTAL SPEND</div>
           </div>

           {customers.length === 0 ? (
             <div className="p-8 text-center text-neutral-500 font-mono text-sm">LOADING DATA...</div>
           ) : (
             customers.map((user, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`grid grid-cols-12 gap-4 p-4 items-center border-b border-white/5 hover:bg-white/5 transition-colors ${i === 0 ? "bg-[#00D2FF]/10" : ""}`}
                >
                   <div className="col-span-2 flex justify-center">
                      {i === 0 ? <Crown className="text-yellow-500" size={20} /> : 
                       i === 1 ? <Trophy className="text-gray-400" size={18} /> :
                       i === 2 ? <Medal className="text-orange-700" size={18} /> :
                       <span className="font-bold text-white/50">#{i + 1}</span>
                      }
                   </div>
                   
                   <div className="col-span-6 flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-500">
                            <User size={14} />
                         </div>
                         <div>
                            <h4 className={`font-bold font-[family-name:var(--font-bebas)] tracking-wide text-lg leading-none ${i === 0 ? "text-[#00D2FF]" : "text-white"}`}>
                                {user.name}
                            </h4>
                            <span className="text-[10px] font-mono text-neutral-500 uppercase">
                                {user.title}
                            </span>
                         </div>
                   </div>

                   <div className="col-span-4 text-right">
                      <span className="font-mono text-[#00D2FF] font-bold">
                         {Number(user.points).toLocaleString()} <span className="text-[10px] text-white/50">LKR</span>
                      </span>
                   </div>
                </motion.div>
             ))
           )}
        </div>

      </div>
    </section>
  );
}
