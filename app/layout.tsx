"use client"; // Mark as client to use Lenis

import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "@/components/Navbar";
import FloatingReserve from "@/components/FloatingReserve";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable} bg-[#050505] text-[#e0e0e0] antialiased selection:bg-[#ff5722] selection:text-black`}>
        <ReactLenis root>
          <Navbar />
          <FloatingReserve />
          <main className="relative z-10 overflow-hidden">
             {children}
          </main>
        </ReactLenis>
      </body>
    </html>
  );
}
