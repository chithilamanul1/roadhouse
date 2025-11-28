import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ROAD HOUSE | Cafe & Restro",
  description: "Authentic Grill & Wok in Seeduwa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable} antialiased bg-brand-dark text-white overflow-x-hidden`}>
        {/* The Neon Ignition Animation */}
        <Preloader />
        {children}
      </body>
    </html>
  );
}