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
    icon: <ChefHat size={32} className="text-[#ff5722]" />,
    desc: "Experienced with BBQ grills, hot kottu, fried rice, and devilled dishes. Fast-paced, clean, and organized." 
  },
  { 
    id: "BARISTA", 
    title: "JUICE BARISTA & DRINKS MAKER", 
    type: "FULL TIME", 
    salary: "ATTRACTIVE SALARY + TIPS",
    icon: <Coffee size={32} className="text-[#ff5722]" />,
    desc: "Make fresh fruit smoothies, mojitos, shakes, and hot beverages. Friendly and neat." 
  },
  { 
    id: "SERVER", 
    title: "RESTAURANT STEWARD / SERVER", 
    type: "FULL TIME / PART TIME", 
    salary: "SALARY + TIPS + SERVICE CHARGE",
    icon: <Users size={32} className="text-[#ff5722]" />,
    desc: "Greet guests, present menus, take orders, and ensure our dining guests have a wonderful time." 
  }
];

export default function CareersPage() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/94777702044?text=Hi%20RoadHouse,%20I%20am%20interested%20in%20applying%20for%20a%20job%20position.", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0]">
      <Navbar />
      <FloatingReserve />

      {/* HEADER */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto text-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
         >
            <p className="text-[#ff5722] font-mono text-xs uppercase tracking-[0.3em] font-bold mb-2">
               Work With Us
            </p>
            <h1 className="text-4xl md:text-7xl font-[family-name:var(--font-blackops)] text-white uppercase mb-4">
               JOIN THE <span className="text-[#ff5722]">ROADHOUSE TEAM</span>
            </h1>
            <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base font-sans">
               We are building Seeduwa&apos;s favourite restaurant crew. Great work environment, competitive pay, and free meals on shift.
            </p>
         </motion.div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOBS.map((job) => (
               <div 
                  key={job.id}
                  className="bg-neutral-900/60 border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:border-[#ff5722] transition-all shadow-xl"
               >
                  <div>
                     <div className="w-16 h-16 rounded-xl bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center mb-6">
                        {job.icon}
                     </div>
                     <span className="text-[10px] font-mono font-bold bg-white/10 text-neutral-300 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                        {job.type}
                     </span>
                     <h2 className="text-2xl font-[family-name:var(--font-bebas)] text-white tracking-wide mb-2">
                        {job.title}
                     </h2>
                     <p className="text-[#ff5722] font-mono text-xs font-bold mb-4">
                        {job.salary}
                     </p>
                     <p className="text-neutral-400 font-sans text-xs leading-relaxed mb-6">
                        {job.desc}
                     </p>
                  </div>

                  <button 
                     onClick={handleWhatsApp}
                     className="w-full bg-[#ff5722] hover:bg-white text-black font-black uppercase tracking-wider py-3.5 rounded-xl font-mono text-xs transition-all shadow-[0_0_15px_rgba(255,87,34,0.3)] flex items-center justify-center gap-2"
                  >
                     <MessageCircle size={16} /> Apply on WhatsApp
                  </button>
               </div>
            ))}
         </div>
      </section>

      {/* QUICK EMAIL APPLICATION */}
      <section className="py-16 px-6 max-w-3xl mx-auto text-center">
         <div className="bg-neutral-900/40 border border-white/10 p-8 rounded-2xl">
            <h3 className="font-[family-name:var(--font-blackops)] text-2xl text-white mb-2">
               PREFER TO SEND YOUR CV BY EMAIL?
            </h3>
            <p className="text-neutral-400 text-sm mb-6">
               Send your CV or a short intro to <span className="text-[#ff5722] font-mono">roadhouseseeduwa@gmail.com</span> with the subject &quot;Job Application&quot;.
            </p>
            <a 
               href="mailto:roadhouseseeduwa@gmail.com?subject=Job Application - RoadHouse"
               className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors"
            >
               <Mail size={16} /> Email Your CV
            </a>
         </div>
      </section>

      <Footer />
    </div>
  );
}