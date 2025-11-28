"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowRight, ChefHat, Coffee, Users, Flame } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// REALISTIC ROLES FOR DEC 2025 OPENING
const JOBS = [
  { 
    id: "HEAD_CHEF", 
    title: "HEAD CHEF", 
    type: "FULL TIME", 
    salary: "NEGOTIABLE",
    icon: <ChefHat size={32} />,
    desc: "We need a captain. Someone who can handle a high-heat grill, manage the kitchen crew, and define the taste of Seeduwa." 
  },
  { 
    id: "BARISTA", 
    title: "HEAD BARISTA", 
    type: "FULL TIME", 
    salary: "NEGOTIABLE",
    icon: <Coffee size={32} />,
    desc: "You know your beans. You can handle a rush. You will run the Juice Bar & Cafe section." 
  },
  { 
    id: "GRILL_MASTER", 
    title: "GRILL MASTER", 
    type: "FULL TIME", 
    salary: "NEGOTIABLE",
    icon: <Flame size={32} />,
    desc: "You live for the fire. Expert in smoking meats, grilling burgers, and handling the heat." 
  },
  { 
    id: "CREW", 
    title: "SERVICE CREW", 
    type: "PART TIME / FULL", 
    salary: "NEGOTIABLE",
    icon: <Users size={32} />,
    desc: "The face of Road House. Energetic, polite, and ready to serve the wolf pack." 
  }
];

export default function CareersPage() {
  
  const handleEmail = (role: string) => {
    window.location.href = `mailto:roadhouseseeduwa@gmail.com?subject=Application for ${role} - Road House`;
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/94777334078?text=Hi Road House, I am interested in joining the crew.", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      {/* HEADER */}
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto text-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
            <h1 className="text-6xl md:text-8xl font-[family-name:var(--font-blackops)] text-white mb-6">
               JOIN THE <span className="text-[#ff5722]">PACK</span>
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto font-sans text-lg">
               Road House is opening in <span className="text-white font-bold">December 2025</span>. 
               We are looking for the founding team to build the culture from day one.
            </p>
         </motion.div>
      </section>

      {/* JOB GRID */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JOBS.map((job, i) => (
               <motion.div 
                 key={job.id}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="bg-[#0a0a0a] border border-white/10 p-8 rounded-lg group hover:border-[#ff5722] transition-colors relative overflow-hidden"
               >
                  {/* Hover Glow Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5722] blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity" />

                  <div className="flex justify-between items-start mb-6">
                     <div className="p-3 bg-neutral-900 rounded-lg text-[#ff5722] group-hover:bg-[#ff5722] group-hover:text-black transition-colors">
                        {job.icon}
                     </div>
                     <span className="font-mono text-xs text-neutral-500 border border-neutral-800 px-2 py-1 rounded">
                        {job.type}
                     </span>
                  </div>

                  <h3 className="text-3xl font-[family-name:var(--font-bebas)] text-white mb-2">{job.title}</h3>
                  <p className="text-neutral-400 font-sans text-sm mb-8 min-h-[50px]">
                     {job.desc}
                  </p>

                  <div className="flex gap-4">
                     {/* Apply via Email Button */}
                     <button 
                        onClick={() => handleEmail(job.title)}
                        className="flex-1 bg-white text-black font-bold py-3 px-4 rounded-sm hover:bg-[#ff5722] hover:text-white transition-colors flex items-center justify-center gap-2 text-sm uppercase"
                     >
                        <Mail size={18} />
                        Email CV
                     </button>
                     
                     {/* Chat Button */}
                     <button 
                        onClick={handleWhatsApp}
                        className="bg-neutral-800 text-white p-3 rounded-sm hover:bg-[#25D366] transition-colors"
                        title="Chat on WhatsApp"
                     >
                        <MessageCircle size={20} />
                     </button>
                  </div>

               </motion.div>
            ))}
         </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 text-center px-6">
         <div className="max-w-2xl mx-auto bg-neutral-900/50 border border-white/5 p-12 rounded-xl">
            <h2 className="text-2xl font-[family-name:var(--font-bebas)] text-white mb-4">DON'T SEE YOUR ROLE?</h2>
            <p className="text-neutral-400 mb-8 font-sans">
               We are always looking for talent. If you think you have what it takes to work at Seeduwa's premier grill house, send us an open application.
            </p>
            <button 
               onClick={() => handleEmail("Open Application")}
               className="inline-flex items-center gap-2 text-[#ff5722] font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
               Send Open Application <ArrowRight size={18} />
            </button>
         </div>
      </section>

      <Footer />
    </div>
  );
}
