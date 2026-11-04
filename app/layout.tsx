import "./globals.css";
import { Bebas_Neue, Montserrat, Black_Ops_One } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingReserve from "@/components/FloatingReserve";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import Preloader from "@/components/Preloader";
import WeatherOps from "@/components/WeatherOps";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

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

// 2. TARGETED HIGH-RANKING SEO METADATA
export const metadata = {
  title: "RoadHouse Café & Restro | Restaurants Near Me | Best Food & Drinks Near Katunayake Airport",
  description: "Looking for top-rated restaurants near you? RoadHouse Café & Restro is the favourite spot for sizzling BBQ grills, spicy kottu, fried rice, burgers, fresh juices, and cold drinks. Located on Kotugoda Rd, just 10 mins from Bandaranaike International Airport (Katunayake) with free customer parking. Dine in, take away & easy QR table ordering.",
  keywords: [
    "restaurants near me",
    "food near me",
    "best restaurant near colombo airport",
    "cafe near me",
    "restaurants in seeduwa",
    "food near katunayake airport",
    "kottu near me",
    "bbq grill near me",
    "late night food near me",
    "best restaurants near negombo",
    "ja-ela restaurants",
    "road house cafe",
    "bar and restro near me",
    "family restaurant near me",
    "places to eat near colombo airport",
    "best dining in western province",
    "fresh juice bar near me"
  ],
  authors: [{ name: "RoadHouse Café & Restro" }],
  openGraph: {
    title: "RoadHouse Café & Restro | Best Food & Dining Near You",
    description: "Good food. Cool neon vibes. Sizzling grills, devilled kottu, burgers, fresh juices & cold drinks. 10 mins from Katunayake Airport with free parking.",
    url: "https://roadhouse-chi.vercel.app",
    siteName: "RoadHouse Café & Restro",
    images: [
      {
        url: "/gallery-exterior.jpg", 
        width: 1200,
        height: 630,
        alt: "RoadHouse Café & Restro Seeduwa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RoadHouse Café & Restro | Restaurants Near Me",
    description: "Delicious food, cool blue neon vibes, BBQ, kottu & drinks near Katunayake Airport.",
    images: ["/gallery-exterior.jpg"],
  },
  alternates: {
    canonical: "https://roadhouse-chi.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // 3. GOOGLE SCHEMA (JSON-LD) - Rich Snippets for Local Search & "Near Me" Rankings
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "CafeOrCoffeeShop", "BarOrPub"],
    "name": "RoadHouse Café & Restro",
    "alternateName": "Road House Seeduwa - Restaurant Near Katunayake Airport",
    "image": "https://roadhouse-chi.vercel.app/gallery-exterior.jpg",
    "url": "https://roadhouse-chi.vercel.app",
    "telephone": "+94777702044",
    "menu": "https://roadhouse-chi.vercel.app/menu",
    "servesCuisine": ["Sri Lankan", "Barbecue", "Grill", "Asian Fusion", "Fast Food", "Burgers", "Juice Bar"],
    "priceRange": "$$",
    "currenciesAccepted": "LKR",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "11:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "01:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/roadhouse.cafe.restro",
      "https://share.google/HiEDjYVkfO7hPATl4"
    ],
    "hasMap": "https://share.google/HiEDjYVkfO7hPATl4",
    "acceptsReservations": "True"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebas.variable} ${montserrat.variable} ${blackOps.variable} bg-[#050505] text-[#e0e0e0] antialiased selection:bg-[#ff5722] selection:text-black`}>
        
        {/* INJECT GOOGLE LOCAL BUSINESS & RESTAURANT SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <CartProvider>
          {/* LOADING SCREEN */}
          <Preloader />
          
          {/* CLIENT SCROLL WRAPPER */}
          <SmoothScrollWrapper>
            
            {/* LIVE WEATHER WIDGET */}
            <WeatherOps />
            
            {/* NAVIGATION BAR */}
            <Navbar />

            {/* FLOATING WHATSAPP CALLOUT */}
            <FloatingReserve />

            {/* ORDERING CART DRAWER */}
            <CartDrawer />
            
            {/* PAGE CONTENT */}
            <main className="relative z-10">
               {children}
            </main>
            
          </SmoothScrollWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
