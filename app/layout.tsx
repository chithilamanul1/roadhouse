import "./globals.css";
import { Bebas_Neue, Montserrat, Black_Ops_One } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingReserve from "@/components/FloatingReserve";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import Preloader from "@/components/Preloader"; // <--- 1. Import this

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const blackOps = Black_Ops_One({ subsets: ["latin"], weight: "400", variable: "--font-blackops" });

export const metadata = {
  title: "ROAD HOUSE | Seeduwa HQ",
  description: "The Designated Pitstop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable} ${blackOps.variable} bg-[#050505] text-[#e0e0e0] antialiased selection:bg-[#ff5722] selection:text-black`}>
        
        {/* 2. Add the Component Here */}
        <Preloader />
        
        <SmoothScrollWrapper>
          <Navbar />
          <FloatingReserve />
          <main className="relative z-10">
             {children}
          </main>
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
