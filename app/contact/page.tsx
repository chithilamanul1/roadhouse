"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0]">
      <Navbar />
      
      <div className="min-h-screen flex flex-col md:flex-row pt-24">
         
         {/* LEFT: INFO PANEL */}
         <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-20 flex flex-col justify-center border-r border-white/10">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <span className="text-[#ff5722] font-mono text-xs uppercase tracking-widest px-3 py-1 bg-[#ff5722]/10 border border-[#ff5722]/30 rounded-full inline-block mb-4 font-bold">
                  Get In Touch
               </span>
               <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-blackops)] text-white mb-6">
                  CONTACT <span className="text-[#ff5722]">US</span>
               </h1>
               <p className="text-neutral-400 text-sm md:text-base mb-8 max-w-md">
                  Have a question, need a table reservation, or want food delivered? Call, message, or visit us anytime.
               </p>

               <div className="space-y-4 mb-10">
                  {/* Phone */}
                  <div className="bg-neutral-900/60 border border-white/10 p-4 rounded-xl flex items-center justify-between">
                     <div>
                        <p className="font-mono text-[#ff5722] text-xs mb-1 tracking-widest font-bold">CALL OR WHATSAPP</p>
                        <a href="https://wa.me/94777702044" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-2xl font-[family-name:var(--font-bebas)] text-white hover:text-[#ff5722] transition-colors">
                           <Phone size={20} className="text-[#ff5722]" />
                           077 770 2044
                        </a>
                     </div>
                     <a 
                       href="https://wa.me/94777702044?text=Hi%20RoadHouse!%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation%20or%20food%20order." 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#20ba59] transition-all"
                     >
                       <MessageCircle size={16} /> WhatsApp
                     </a>
                  </div>

                  {/* Email */}
                  <div className="bg-neutral-900/60 border border-white/10 p-4 rounded-xl">
                     <p className="font-mono text-[#ff5722] text-xs mb-1 tracking-widest font-bold">EMAIL ADDRESS</p>
                     <a href="mailto:roadhouseseeduwa@gmail.com" className="flex items-center gap-2 text-sm font-mono text-white hover:text-[#ff5722] transition-colors break-all">
                        <Mail size={18} className="text-[#ff5722] shrink-0" />
                        roadhouseseeduwa@gmail.com
                     </a>
                  </div>

                  {/* Address */}
                  <div className="bg-neutral-900/60 border border-white/10 p-4 rounded-xl">
                     <p className="font-mono text-[#ff5722] text-xs mb-1 tracking-widest font-bold">LOCATION (10 MINS FROM AIRPORT)</p>
                     <div className="flex items-start gap-2 text-sm text-neutral-300">
                        <MapPin size={20} className="text-[#ff5722] mt-0.5 shrink-0" />
                        <div>
                           <p className="font-semibold text-white">24 Kotugoda Rd, Seeduwa, Sri Lanka</p>
                           <p className="text-xs text-neutral-400 mt-0.5">Convenient road access with free parking for 15+ vehicles</p>
                        </div>
                     </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-neutral-900/60 border border-white/10 p-4 rounded-xl flex items-center gap-3">
                     <Clock size={20} className="text-[#ff5722] shrink-0" />
                     <div>
                        <p className="text-xs font-mono text-[#ff5722] font-bold">OPENING HOURS</p>
                        <p className="text-xs text-neutral-300">Mon – Thu: 11:00 AM – 11:00 PM | Fri – Sun: 11:00 AM – 1:00 AM</p>
                     </div>
                  </div>
               </div>

               {/* Quick Message Form */}
               <form 
                 action="https://formsubmit.co/roadhouseseeduwa@gmail.com"
                 method="POST"
                 className="space-y-4"
               >
                  <input type="hidden" name="_subject" value="Website Message - RoadHouse" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="flex gap-2">
                     <input 
                       type="text" 
                       name="message" 
                       placeholder="SEND US A QUICK MESSAGE..." 
                       className="flex-1 bg-black/60 border border-white/15 p-4 rounded-xl text-white placeholder:text-neutral-500 focus:border-[#ff5722] outline-none font-mono text-sm"
                       required 
                     />
                     <button className="bg-[#ff5722] hover:bg-white text-black font-bold px-6 py-4 rounded-xl uppercase tracking-wider text-sm transition-all shadow-[0_0_15px_rgba(255,87,34,0.4)] flex items-center gap-2 shrink-0">
                        Send <Send size={16} />
                     </button>
                  </div>
               </form>

            </motion.div>
         </div>

         {/* RIGHT: MAP VISUAL */}
         <div className="w-full md:w-1/2 bg-neutral-900 relative min-h-[50vh] overflow-hidden group">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63359.39050967393!2d79.85411774999999!3d7.118683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c63236701%3A0x6095907409c2565!2sSeeduwa!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
               className="absolute inset-0 w-full h-full opacity-80 transition-all duration-700"
               style={{ border: 0 }} 
               loading="lazy"
            ></iframe>
            
            <div className="absolute bottom-8 left-8 right-8 md:right-auto bg-black/90 backdrop-blur-md border border-[#ff5722]/40 p-5 rounded-2xl shadow-[0_0_20px_rgba(255,87,34,0.2)]">
               <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5722] animate-ping" />
                  <p className="font-mono text-[#ff5722] text-xs font-bold tracking-wider">ROADHOUSE LOCATION</p>
               </div>
               <p className="text-white text-sm font-semibold">24 Kotugoda Rd, Seeduwa</p>
               <p className="text-xs text-neutral-400 mt-1">10 mins from Katunayake International Airport</p>
               <a 
                 href="https://share.google/HiEDjYVkfO7hPATl4" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-black bg-[#ff5722] px-3 py-1.5 rounded-lg hover:bg-white transition-all"
               >
                 <Navigation size={14} /> Open in Google Maps
               </a>
            </div>
         </div>

      </div>

      <Footer />
    </div>
  );
}