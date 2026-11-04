"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";

const FAQS = [
  { 
    q: "ARE YOU OPEN RIGHT NOW?", 
    a: "Yes! RoadHouse Café & Restro is officially open every day. Monday to Thursday we are open from 11:00 AM to 11:00 PM, and Friday to Sunday from 11:00 AM to 1:00 AM (midnight)." 
  },
  { 
    q: "WHERE ARE YOU LOCATED?", 
    a: "We are located at 24 Kotugoda Road, Seeduwa, Sri Lanka. We are just 10 minutes away from Bandaranaike International Airport (Katunayake CMB) and easily accessible from Negombo, Ja-Ela, and Colombo." 
  },
  { 
    q: "CAN I ORDER FOOD AT MY TABLE USING A QR CODE?", 
    a: "Yes! Every table has a QR code. Simply scan the code with your phone camera, choose your dishes, and tap 'Send Order to Kitchen'. Your food will be freshly cooked and brought directly to your table." 
  },
  { 
    q: "IS THERE FREE CUSTOMER PARKING?", 
    a: "Yes, we have our own secure, monitored on-site parking lot with ample space for over 15 cars, vans, and motorbikes." 
  },
  { 
    q: "HOW DO I RESERVE A TABLE?", 
    a: "You can reserve a table in seconds by sending a message to our WhatsApp at +94 77 770 2044. Walk-ins are also always welcome!" 
  },
  { 
    q: "WHAT TYPE OF FOOD DO YOU SERVE?", 
    a: "We serve a wide variety of delicious meals: charcoal BBQ chicken & pork ribs, spicy Sri Lankan kottu (chicken, beef, cheese, seafood), fried rice, burgers & loaded fries, fresh tropical fruit juices, and cold beverages at our blue neon bar." 
  },
  { 
    q: "DO YOU OFFER TAKEAWAY AND DELIVERY?", 
    a: "Yes! You can order online directly through this website or WhatsApp us (+94 77 770 2044) to pick up your order or arrange delivery." 
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#050811] text-[#E2E8F0]">
      <Navbar />
      <FloatingReserve />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-[80vh]">
         
         <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#00D2FF] mb-3 border border-[#00D2FF]/30 px-4 py-1 rounded-full bg-[#00D2FF]/10 text-xs font-mono font-bold uppercase">
               <HelpCircle size={15} /> Help &amp; Information
            </div>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] text-white">
               FREQUENTLY ASKED <span className="text-[#00D2FF]">QUESTIONS</span>
            </h1>
            <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-md mx-auto">
               Everything you need to know about dining at RoadHouse Café &amp; Restro.
            </p>
         </div>

         <div className="space-y-4">
            {FAQS.map((item, i) => (
               <div 
                 key={i} 
                 className={`border ${openIndex === i ? "border-[#00D2FF] bg-[#0C172E]" : "border-white/10 bg-[#0A1224]"} rounded-xl transition-all duration-300 overflow-hidden shadow-md`}
               >
                  <button 
                     onClick={() => setOpenIndex(openIndex === i ? null : i)}
                     className="w-full flex items-center justify-between p-6 text-left group gap-4"
                  >
                     <span className={`font-[family-name:var(--font-bebas)] text-xl md:text-2xl tracking-wide ${openIndex === i ? "text-[#00D2FF]" : "text-white"} group-hover:text-[#00D2FF] transition-colors`}>
                        {item.q}
                     </span>
                     <div className={`text-[#00D2FF] transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180" : "rotate-0"}`}>
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
                           <p className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed font-sans border-t border-white/5 pt-4">
                              {item.a}
                           </p>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>
            ))}
         </div>

         {/* STILL HAVE A QUESTION? */}
         <div className="mt-16 text-center bg-[#0C172E] border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">
               STILL HAVE A QUESTION?
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
               Send us a message on WhatsApp and our team will answer right away.
            </p>
            <a
               href="https://wa.me/94777702044"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-[#00D2FF] text-black font-black px-8 py-3 rounded-lg uppercase tracking-wider text-xs font-mono hover:bg-white transition-all shadow-[0_0_20px_rgba(0,210,255,0.3)]"
            >
               Chat with RoadHouse (+94 77 770 2044)
            </a>
         </div>

      </div>

      <Footer />
    </div>
  );
}
