"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ShieldQuestion } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQS = [
  { q: "WHEN IS THE GRAND OPENING?", a: "We are scheduled to open the gates in December 2025. Follow our transmission logs (News) for the exact date." },
  { q: "IS THERE PARKING AT SEEDUWA HQ?", a: "Yes. We have a dedicated parking bay for vehicles. Bike friendly. Car friendly." },
  { q: "DO YOU TAKE RESERVATIONS?", a: "Yes. We operate a priority booking system via WhatsApp. Walk-ins are welcome but tables fill up fast." },
  { q: "IS THE MEAT HALAL?", a: "We source from certified local suppliers. Specific details on certifications will be released closer to launch." },
  { q: "CAN I BRING MY OWN BOOZE (BYOB)?", a: "Corkage policies are currently classified. We will update the protocol closer to operations." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-[80vh]">
         
         <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#ff5722] mb-4 border border-[#ff5722]/30 px-4 py-1 rounded-full animate-pulse">
               <ShieldQuestion size={16} />
               <span className="font-mono text-xs uppercase tracking-widest">Intel Database</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white">
               MISSION <span className="text-neutral-700">BRIEFING</span>
            </h1>
         </div>

         <div className="space-y-4">
            {FAQS.map((item, i) => (
               <div 
                 key={i} 
                 className={`border ${openIndex === i ? "border-[#ff5722]" : "border-white/10"} bg-white/5 rounded-sm transition-colors duration-300`}
               >
                  <button 
                     onClick={() => setOpenIndex(openIndex === i ? null : i)}
                     className="w-full flex items-center justify-between p-6 text-left group"
                  >
                     <span className={`font-[family-name:var(--font-bebas)] text-xl md:text-2xl tracking-wide ${openIndex === i ? "text-white" : "text-neutral-400"} group-hover:text-white transition-colors`}>
                        {item.q}
                     </span>
                     <div className={`text-[#ff5722] transition-transform duration-300 ${openIndex === i ? "rotate-180" : "rotate-0"}`}>
                        {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                     </div>
                  </button>
                  
                  <AnimatePresence>
                     {openIndex === i && (
                        <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: "auto", opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="overflow-hidden"
                        >
                           <div className="p-6 pt-0 font-mono text-sm text-neutral-300 leading-relaxed border-t border-dashed border-white/10 mt-2">
                              {/* Typewriter cursor effect for visual flair */}
                              <span className="text-[#ff5722] mr-2">{">"}</span>
                              {item.a}
                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>

      </div>

      <Footer />
    </div>
  );
}
