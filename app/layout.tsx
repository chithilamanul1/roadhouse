import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingReserve from "@/components/FloatingReserve";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper"; // Import the new wrapper

const bebas = Bebas_Neue({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-bebas" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

// This can now live here safely because the file is NOT "use client"
export const metadata = {
  title: "ROAD HOUSE | Premium Grill",
  description: "Seeduwa's Designated Pitstop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable} bg-[#050505] text-[#e0e0e0] antialiased selection:bg-[#ff5722] selection:text-black`}>
        {/* The Client Wrapper handles the fancy interactivity */}
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
