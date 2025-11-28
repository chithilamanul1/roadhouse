"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Background Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
        
        <div className="relative z-10 border border-[#ff5722] p-12 rounded-lg bg-black/50 backdrop-blur-md max-w-2xl w-full">
            
            <div className="flex justify-center mb-6">
                <AlertTriangle size={64} className="text-[#ff5722] animate-pulse" />
            </div>

            <h1 className="text-8xl font-[family-name:var(--font-blackops)] mb-2 text-white">404</h1>
            <h2 className="text-2xl font-[family-name:var(--font-bebas)] text-[#ff5722] tracking-widest mb-6">
                SECTOR NOT FOUND
            </h2>
            
            <p className="font-mono text-neutral-400 mb-8 max-w-md mx-auto">
                The coordinates you entered are invalid. This area is restricted or does not exist. Return to base immediately.
            </p>

            <Link 
                href="/"
                className="inline-flex items-center gap-2 bg-[#e0e0e0] text-black font-bold px-8 py-4 hover:bg-[#ff5722] hover:text-white transition-all uppercase tracking-wider rounded-sm"
            >
                <ArrowLeft size={20} />
                Return to Base
            </Link>
        </div>

        {/* Binary Rain Effect (Static CSS) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 overflow-hidden font-mono text-[10px] break-all leading-none z-0">
            {Array(5000).fill(0).map((_, i) => (Math.random() > 0.5 ? "1" : "0"))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
