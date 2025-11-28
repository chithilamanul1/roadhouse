import Navbar from "@/components/Navbar";
import OffersSlider from "@/components/OffersSlider";
import Footer from "@/components/Footer";
import FloatingReserve from "@/components/FloatingReserve";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <FloatingReserve />
      
      {/* HERO SECTION WITH IMAGE */}
      <section className="h-[90vh] relative flex items-center justify-center overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Background Image - Burger/Grill */}
        <img 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero Background"
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <p className="text-[#ff5722] font-bold tracking-[0.3em] mb-4 uppercase animate-fade-in-up">
            Seeduwa • Sri Lanka
          </p>
          <h1 className="text-7xl md:text-9xl font-[family-name:var(--font-bebas)] text-white leading-[0.85] mb-8 drop-shadow-2xl">
            TASTE THE <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5722] to-orange-400">THRILL</span>
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link 
              href="/menu" 
              className="bg-[#ff5722] text-black font-bold px-8 py-4 text-lg hover:bg-white transition-colors uppercase flex items-center gap-2 rounded-sm"
            >
              View Full Menu <ArrowRight size={20} />
            </Link>
            <Link 
              href="/location" 
              className="border border-white/30 text-white font-bold px-8 py-4 text-lg hover:bg-white hover:text-black transition-colors uppercase rounded-sm"
            >
              Find Location
            </Link>
          </div>
        </div>
      </section>

      {/* OFFERS SECTION */}
      <OffersSlider />

      {/* CATEGORY TEASERS */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
            
            <Link href="/menu" className="relative group overflow-hidden rounded-2xl h-full">
              <img src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-5xl font-[family-name:var(--font-bebas)] text-white">GRILLS & MAINS</h3>
                <p className="text-white/80">Steaks, Ribs, and Chops</p>
              </div>
            </Link>

            <div className="grid grid-rows-2 gap-4 h-full">
               <Link href="/menu" className="relative group overflow-hidden rounded-2xl">
                 <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                 <div className="absolute bottom-8 left-8">
                    <h3 className="text-4xl font-[family-name:var(--font-bebas)] text-white">BURGERS</h3>
                 </div>
               </Link>
               <Link href="/menu" className="relative group overflow-hidden rounded-2xl">
                 <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                 <div className="absolute bottom-8 left-8">
                    <h3 className="text-4xl font-[family-name:var(--font-bebas)] text-white">JUICE BAR</h3>
                 </div>
               </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
