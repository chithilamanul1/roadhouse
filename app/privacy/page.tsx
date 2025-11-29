"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
         <h1 className="text-4xl font-[family-name:var(--font-blackops)] text-white mb-8">
            PRIVACY & <span className="text-[#ff5722]">TERMS</span>
         </h1>
         
         <div className="space-y-8 text-neutral-400 font-sans text-sm leading-relaxed">
            <div>
               <h3 className="text-white font-bold mb-2">1. INTRODUCTION</h3>
               <p>Welcome to Road House Seeduwa. By accessing our website, you agree to these terms. We are committed to protecting your privacy and data.</p>
            </div>

            <div>
               <h3 className="text-white font-bold mb-2">2. DATA COLLECTION</h3>
               <p>We collect basic information (Email, Name) only when you voluntarily submit forms for our Newsletter, Reservations, or Career applications. We do not sell this data to third parties.</p>
            </div>

            <div>
               <h3 className="text-white font-bold mb-2">3. RESERVATION POLICY</h3>
               <p>Table reservations are held for 15 minutes past the scheduled time. Management reserves the right to cancel bookings for no-shows.</p>
            </div>

            <div>
               <h3 className="text-white font-bold mb-2">4. CONTENT</h3>
               <p>All images, logos, and text on this site are the property of Road House Seeduwa. Unauthorized reproduction is prohibited.</p>
            </div>
            
            <div className="pt-8 border-t border-white/10">
               <p>Last Updated: November 2025</p>
               <p>Contact: roadhouseseeduwa@gmail.com</p>
            </div>
         </div>
      </div>

      <Footer />
    </div>
  );
}
