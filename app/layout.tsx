import "./globals.css";
import { Bebas_Neue, Montserrat, Black_Ops_One } from "next/font/google"; // Import Black Ops One
import Navbar from "@/components/Navbar";
import FloatingReserve from "@/components/FloatingReserve";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const blackOps = Black_Ops_One({ subsets: ["latin"], weight: "400", variable: "--font-blackops" }); // Variable name

export const metadata = {
  title: "ROAD HOUSE | Seeduwa HQ",
  description: "The Designated Pitstop.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Add the new font variable to the body */}
      <body className={`${bebas.variable} ${montserrat.variable} ${blackOps.variable} bg-[#050505] text-[#e0e0e0] antialiased selection:bg-[#ff5722] selection:text-black`}>
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
