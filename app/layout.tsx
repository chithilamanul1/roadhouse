import "./globals.css";
import { Bebas_Neue, Montserrat, Black_Ops_One } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingReserve from "@/components/FloatingReserve";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SonicIdentity from "@/components/SonicIdentity";
import WeatherOps from "@/components/WeatherOps";

// 1. SETUP FONTS
const bebas = Bebas_Neue({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-bebas" 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat" 
});

const blackOps = Black_Ops_One({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-blackops" 
});

// 2. SEO METADATA
export const metadata = {
  title: "ROAD HOUSE | Seeduwa HQ",
  description: "The Designated Pitstop. Premium Grill & Cafe. Opening Dec 2025.",
  openGraph: {
    title: "ROAD HOUSE | Seeduwa HQ",
    description: "The Designated Pitstop. Premium Grill & Cafe.",
    url: "https://roadhouse.lk",
    siteName: "Road House",
    images: [
      {
        url: "/logo-full.png", 
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // 3. GOOGLE SCHEMA (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Road House",
    "image": "https://roadhouse.lk/logo-full.png",
    "url": "https://roadhouse.lk",
    "telephone": "+94777334078",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "24 Kotugoda Rd",
      "addressLocality": "Seeduwa",
      "addressRegion": "Western Province",
      "postalCode": "11410",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 7.1186, 
      "longitude": 79.8837
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    },
    "servesCuisine": ["Grill", "American", "Sri Lankan Fusion"],
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <body className={`${bebas.variable} ${montserrat.variable} ${blackOps.variable} bg-[#050505] text-[#e0e0e0] antialiased selection:bg-[#ff5722] selection:text-black`}>
        
        {/* INJECT GOOGLE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* LOADING SCREEN */}
        <Preloader />
        
        {/* CLIENT WRAPPER */}
        <SmoothScrollWrapper>
          
          {/* UTILITIES */}
          <WeatherOps />    {/* Live Weather */}
          <CustomCursor />  {/* Crosshair Cursor */}
          
          {/* UI LAYER */}
          <Navbar />
          <FloatingReserve /> {/* WhatsApp Button */}
          <SonicIdentity />   {/* Music Player */}
          
          {/* PAGE CONTENT */}
          <main className="relative z-10">
             {children}
          </main>
          
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
