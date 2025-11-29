"use client";

import { Car, ShieldCheck } from "lucide-react";

export default function ParkingInfo() {
  return (
    <section className="py-20 bg-neutral-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Text Info */}
        <div className="flex-1">
           <h2 className="text-4xl font-[family-name:var(--font-bebas)] text-white mb-6">
              CONVENIENT <span className="text-[#ff5722]">PARKING</span>
           </h2>
           <p className="text-neutral-400 font-sans mb-6 leading-relaxed">
              We know parking in Seeduwa can be tricky. That's why Road House offers a dedicated, secure parking area for our guests. Whether you are driving a car or riding a bike, we have space for you.
           </p>
           
           <div className="flex gap-8">
              <div className="flex items-center gap-3">
                 <div className="p-3 bg-black rounded-full text-[#ff5722]">
                    <Car size={24} />
                 </div>
                 <div className="text-sm">
                    <p className="text-white font-bold">AMPLE SLOTS</p>
                    <p className="text-neutral-500">15+ Vehicles</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="p-3 bg-black rounded-full text-[#ff5722]">
                    <ShieldCheck size={24} />
                 </div>
                 <div className="text-sm">
                    <p className="text-white font-bold">SECURE</p>
                    <p className="text-neutral-500">Monitored Area</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 h-[300px] w-full bg-black rounded-lg overflow-hidden relative">
           <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" 
              alt="Parking Area" 
              className="w-full h-full object-cover opacity-80"
           />
        </div>

      </div>
    </section>
  );
}
