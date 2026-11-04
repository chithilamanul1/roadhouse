"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ChefHat, Coffee, Users, Flame, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";

const JOBS = [
  { 
    id: "CHEF", 
    title: "LINE COOK / KITCHEN CHEF", 
    type: "FULL TIME", 
    salary: "ATTRACTIVE SALARY + MEALS",
    icon: <ChefHat size={32} className="text-[#00D2FF]" />,
    desc: "Experienced with BBQ grills, hot kottu, fried rice, and devilled dishes. Fast-paced, clean, and organized." 
  },
  { 
    id: "BARISTA", 
    title: "JUICE BARISTA & DRINKS MAKER", 
    type: "FULL TIME", 
    salary: "ATTRACTIVE SALARY + TIPS",
    icon: <Coffee size={32} className="text-[#00D2FF]" />,
    desc: "Make fresh fruit smoothies, mojitos, shakes, and hot beverages. Friendly and neat." 
  },
  { 
    id: "SERVER", 
    title: "RESTAURANT STEWARD / SERVER", 
    type: "FULL TIME / PART TIME", 
    salary: "SALARY + TIPS + SERVICE CHARGE",
    icon: <Users size={32} className="text-[#00D2FF]" />,
    desc: "Greet guests, present menus, take orders, and ensure our dining guests have a wonderful time." 
  }
];

export default function CareersPage() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20am%20interested%20in%20applying%20for%20a%20job%20position.", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050811] text-[#E2E8F0]">
      <Navbar />
      <FloatingReserve />

      {/* HEADER */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto text-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
         >
            <p className="text-[#00D2FF] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-2">
               Work With Us
            </p>
            <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-blackops)] text-white uppercase mb-4">
               JOIN THE <span className="text-[#00D2FF]">ROADHOUSE TEAM</span>
            </h1>
            <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base font-sans">
               We are building Seeduwa&apos;s favourite restaurant crew. Great work environment, competitive pay, and free meals on shift.
            </p>
         </motion.div>
      </section>

      {/* JOBS GRID */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JOBS.map((job) => (
               <div 
                 key={job.id} 
                 className="bg-[#0C172E] border border-white/10 p-7 rounded-2xl flex flex-col justify-between hover:border-[#00D2FF] transition-all shadow-lg"
               >
                  <div>
                     <div className="w-14 h-14 rounded-xl bg-[#00D2FF]/10 border border-[#00D2FF]/30 flex items-center justify-center mb-5">
                        {job.icon}
                     </div>
                     <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D2FF] bg-[#00D2FF]/10 px-2.5 py-1 rounded-full font-bold">
                        {job.type}
                     </span>
                     <h3 className="font-[family-name:var(--font-bebas)] text-2xl text-white tracking-wide mt-3 mb-2">
                        {job.title}
                     </h3>
                     <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                        {job.desc}
                     </p>
                  </div>

                  <div>
                     <p className="text-xs font-mono text-neutral-300 font-bold mb-4">{job.salary}</p>
                     <button 
                       onClick={handleWhatsApp}
                       className="w-full bg-[#00D2FF] text-black font-bold text-xs uppercase tracking-wider py-3 rounded-lg hover:bg-white transition-colors"
                     >
                        Apply via WhatsApp
                     </button>
                  </div>
               </div>
            ))}
         </div>

         {/* APPLY CALLOUT */}
         <div className="mt-16 bg-[#0C172E] border border-[#00D2FF]/30 p-8 rounded-2xl text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-2">
               LOOKING TO APPLY TODAY?
            </h3>
            <p className="text-xs text-neutral-400 mb-6 font-sans">
               Send us a message or CV via WhatsApp or Email. We will contact you for an interview.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <button 
                 onClick={handleWhatsApp}
                 className="bg-[#25D366] text-black font-black text-xs uppercase tracking-wider px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white transition-colors"
               >
                  <MessageCircle size={16} /> WhatsApp: +94 77 770 2044
               </button>
               <a 
                 href="mailto:roadhouseseeduwa@gmail.com" 
                 className="bg-white/10 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-white/20 transition-colors"
               >
                  <Mail size={16} /> roadhouseseeduwa@gmail.com
               </a>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
