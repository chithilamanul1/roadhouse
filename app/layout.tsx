import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";
import FloatingReserve from "@/components/FloatingReserve"; // WhatsApp Button
import Preloader from "@/components/Preloader"; // Your Ignition Loader
import { CartProvider } from "@/context/CartContext"; // Keep this just in case for future

const bebas = Bebas_Neue({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-bebas" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

export const metadata = {
  title: "ROAD HOUSE // SEEDUWA",
  description: "Road House . Premium Restro & Cafe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebas.variable} ${montserrat.variable} bg-[#050505] text-[#e0e0e0] antialiased overflow-x-hidden selection:bg-[#ff5722] selection:text-black`}>
        {/* We keep CartProvider in case you want it later, but visual elements are removed */}
        <CartProvider>
          <Preloader />
          <FloatingReserve /> {/* The Green WhatsApp Button */}
          <main className="min-h-screen relative z-10">
             {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
