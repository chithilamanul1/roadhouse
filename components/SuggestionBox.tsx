"use client";

import { Send, Star } from "lucide-react";

export default function SuggestionBox() {
  return (
    <section className="py-20 bg-[#ff5722] text-black">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Google Review CTA */}
        <div className="mb-14">
          <h2 className="text-5xl font-[family-name:var(--font-blackops)] mb-4">
            DID YOU VISIT US?
          </h2>
          <p className="font-bold font-sans text-xl mb-6 max-w-lg mx-auto">
            If you enjoyed your time at Road House, please leave us a Google review.
            It really helps us grow. We&apos;d love to hear from you!
          </p>
          <a
            href="https://share.google/HiEDjYVkfO7hPATl4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-[#ff5722] font-black px-10 py-4 uppercase tracking-wider hover:bg-white hover:text-black transition-colors text-lg"
          >
            <Star size={20} fill="currentColor" />
            Leave a Google Review
          </a>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-black/20 my-10" />

        {/* Suggestion Box */}
        <h2 className="text-4xl font-[family-name:var(--font-blackops)] mb-4">
          WHAT DO YOU WANT TO SEE?
        </h2>
        <p className="font-bold font-sans text-lg mb-8 max-w-lg mx-auto">
          Tell us what food or drink you&apos;d love to see on our menu.
          We read every message!
        </p>

        <form
          action="https://formsubmit.co/roadhouseseeduwa@gmail.com"
          method="POST"
          className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Menu Suggestion (Website)" />
          <input type="hidden" name="_template" value="table" />

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
            Send <Send size={18} />
          </button>
        </form>

      </div>
    </section>
  );
}
