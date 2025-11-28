import "./globals.css";
import { Bebas_Neue, Montserrat } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import DigitalReceipt from "@/components/DigitalReceipt";
import Preloader from "@/components/Preloader";

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
  description: "Asphalt & Smoke. Premium Restro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable} bg-[#050505] text-[#e0e0e0] antialiased overflow-x-hidden`}>
        <CartProvider>
          <Preloader />
          <DigitalReceipt />
          <main className="min-h-screen relative z-10">
             {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
