"use client";

import { Send } from "lucide-react";

export default function SuggestionBox() {
  return (
    <section className="py-20 bg-[#ff5722] text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-5xl font-[family-name:var(--font-blackops)] mb-6">
           BUILD THE MENU
        </h2>
        <p className="font-bold font-sans text-xl mb-8 max-w-lg mx-auto">
           We are finalizing the Road House menu for 2025. 
           What is the one dish we MUST serve?
        </p>

        <form 
           action="https://formsubmit.co/roadhouseseeduwa@gmail.com"
           method="POST"
           className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
        >
           {/* --- FORMSUBMIT CONFIGURATION --- */}
           {/* 1. Disable Captcha for smoother experience */}
           <input type="hidden" name="_captcha" value="false" />
           {/* 2. Set Email Subject */}
           <input type="hidden" name="_subject" value="New Menu Suggestion (Website)" />
           {/* 3. Make the email look nice */}
           <input type="hidden" name="_template" value="table" />
           {/* 4. Redirect back to your site (Optional, or defaults to a Success page) */}
           {/* <input type="hidden" name="_next" value="https://your-site.com/thank-you" /> */}

           <input 
             type="text" 
             name="suggestion"
             placeholder="I want to eat..."
             className="flex-1 p-4 bg-black/10 border-2 border-black placeholder:text-black/60 font-bold focus:bg-white transition-colors outline-none"
             required
           />
           <button 
             type="submit"
             className="bg-black text-[#ff5722] font-black px-8 py-4 uppercase tracking-wider hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
           >
              Send Idea <Send size={18} />
           </button>
        </form>

      </div>
    </section>
  );
}
