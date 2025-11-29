"use client";

import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-[#ff5722] text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
         
         <h2 className="text-4xl font-[family-name:var(--font-bebas)] mb-4">
            STAY UPDATED
         </h2>
         <p className="font-sans font-bold text-lg mb-8 max-w-md mx-auto">
            Subscribe to our newsletter to get the latest news on our Grand Opening in December 2025.
         </p>

         <form 
           action="https://formsubmit.co/roadhouseseeduwa@gmail.com" 
           method="POST"
           className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
         >
            <input type="hidden" name="_subject" value="New Newsletter Subscriber" />
            <input type="hidden" name="_captcha" value="false" />

            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              className="flex-1 p-4 bg-white/20 border-2 border-black placeholder:text-black/60 font-bold focus:bg-white transition-colors outline-none"
              required
            />
            <button 
               type="submit"
               className="bg-black text-white font-bold px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 uppercase tracking-wide"
            >
               Subscribe <Send size={18} />
            </button>
         </form>

      </div>
    </section>
  );
}
