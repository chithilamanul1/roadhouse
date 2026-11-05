"use client";

import { Send, Star } from "lucide-react";

export default function SuggestionBox() {
  return (
    <section className="py-20 bg-[#ff5722] text-black" id="reviews">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* 5-STAR REVIEW SECTION */}
        <div className="flex justify-center gap-1.5 text-black mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={28} fill="currentColor" />
          ))}
        </div>

        <h2 className="text-4xl sm:text-6xl font-[family-name:var(--font-blackops)] mb-4 leading-tight">
          ENJOYED YOUR MEAL?
        </h2>
        <p className="font-bold font-sans text-base sm:text-xl mb-8 max-w-lg mx-auto leading-relaxed">
          Leave us a 5-star Google review! It takes 10 seconds and helps other food lovers and airport travelers find us.
        </p>

        <div className="mb-14">
          <a
            href="https://share.google/HiEDjYVkfO7hPATl4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white hover:bg-white hover:text-black font-black px-10 py-4 uppercase tracking-wider transition-all text-base sm:text-lg rounded-xl shadow-2xl"
          >
            <Star size={20} fill="#ff5722" className="text-[#ff5722]" />
            Write a Quick Google Review
          </a>
        </div>

        {/* SUGGESTION FORM (Early style) */}
        <div className="max-w-xl mx-auto pt-8 border-t border-black/20">
          <h3 className="text-3xl font-[family-name:var(--font-blackops)] mb-2">
            HAVE A DISH SUGGESTION?
          </h3>
          <p className="text-black/80 font-sans text-sm mb-6">
            Tell us what food or drink you want on our menu next:
          </p>

          <form
            action="https://formsubmit.co/roadhouseseeduwa@gmail.com"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Dish Suggestion - RoadHouse" />
            
            <input
              type="text"
              name="suggestion"
              placeholder="e.g. Crispy Honey Chicken Wings..."
              className="flex-1 bg-black/10 border-2 border-black p-4 rounded-xl text-black font-bold placeholder:text-black/60 outline-none focus:bg-white transition-colors text-sm"
              required
            />
            <button
              type="submit"
              className="bg-black text-[#ff5722] font-black px-8 py-4 uppercase tracking-wider text-sm rounded-xl hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 shrink-0"
            >
              <span>Send</span>
              <Send size={16} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}