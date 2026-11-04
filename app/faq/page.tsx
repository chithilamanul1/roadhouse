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
    a: "We serve a wide variety of delicious meals: charcoal BBQ chicken & pork ribs, spicy Sri Lankan kottu (chicken, beef, cheese, seafood), fried rice, burgers & loaded fries, fresh tropical fruit juices, and cold beverages at our bar." 
  },
  { 
    q: "DO YOU OFFER TAKEAWAY AND DELIVERY?", 
    a: "Yes! You can order online directly through this website or WhatsApp us (+94 77 770 2044) to pick up your order or arrange delivery." 
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0]">
      <Navbar />
      <FloatingReserve />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-[80vh]">
         
         <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#ff5722] mb-3 border border-[#ff5722]/30 px-4 py-1 rounded-full bg-[#ff5722]/10 text-xs font-mono font-bold uppercase">
               <HelpCircle size={15} /> Help &amp; Information
            </div>
            <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-blackops)] text-white">
               FREQUENTLY ASKED <span className="text-[#ff5722]">QUESTIONS</span>
            </h1>
            <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-md mx-auto">
               Everything you need to know about dining at RoadHouse Café &amp; Restro.
            </p>
         </div>

         <div className="space-y-4">
            {FAQS.map((faq, i) => {
               const isOpen = openIndex === i;
               return (
                  <div 
                     key={i} 
                     className="border border-white/10 rounded-2xl overflow-hidden bg-neutral-900/60 transition-colors"
                  >
                     <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                     >
                        <span className="font-[family-name:var(--font-bebas)] text-xl md:text-2xl text-white tracking-wide">
                           {faq.q}
                        </span>
                        <div className={`p-2 rounded-full border border-white/10 shrink-0 ${isOpen ? 'bg-[#ff5722] text-black' : 'text-neutral-400'}`}>
                           {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                     </button>

                     <AnimatePresence>
                        {isOpen && (
                           <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                           >
                              <div className="px-6 pb-6 text-neutral-300 text-sm leading-relaxed border-t border-white/5 pt-4">
                                 {faq.a}
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               );
            })}
         </div>

         {/* STILL HAVE QUESTIONS */}
         <div className="mt-16 text-center p-8 bg-neutral-900/40 border border-white/10 rounded-2xl">
            <h3 className="font-[family-name:var(--font-blackops)] text-2xl text-white mb-2">
               STILL HAVE A QUESTION?
            </h3>
            <p className="text-neutral-400 text-sm mb-6">
               Call or message us on WhatsApp anytime at <span className="text-[#ff5722] font-mono font-bold">077 770 2044</span>
            </p>
            <a 
               href="https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20have%20a%20question."
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-[#ff5722] text-black font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl hover:bg-white transition-all shadow-[0_0_15px_rgba(255,87,34,0.3)]"
            >
               Chat with us on WhatsApp
            </a>
         </div>

      </div>

      <Footer />
    </div>
  );
}