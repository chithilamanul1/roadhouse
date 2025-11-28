"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudRain, Sun, Moon, CloudFog, Thermometer } from "lucide-react";

export default function WeatherOps() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // REPLACE THIS WITH YOUR REAL KEY
  const API_KEY = "YOUR_OPENWEATHER_API_KEY"; 

  useEffect(() => {
    // 1. Fetch Seeduwa Weather
    const fetchWeather = async () => {
      try {
        // ID 1229063 is roughly Seeduwa/Negombo area or use lat/lon
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Seeduwa,LK&units=metric&appid=${API_KEY}`
        );
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error("Weather Uplink Failed", error);
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Refresh every 30 mins
    const interval = setInterval(fetchWeather, 1800000); 
    return () => clearInterval(interval);
  }, []);

  if (!weather || loading) return null;

  // 2. Determine Conditions
  const isNight = weather.weather[0].icon.includes("n");
  const isRaining = weather.weather[0].main === "Rain" || weather.weather[0].main === "Drizzle" || weather.weather[0].main === "Thunderstorm";
  const temp = Math.round(weather.main.temp);
  const isHot = temp > 29;

  // 3. Witty Military Comments
  const getComment = () => {
    if (isRaining) return "CONDITIONS: WET. PERFECT FOR HOT COFFEE.";
    if (isHot) return "HEAT CRITICAL. RECOMMEND: ICED MOJITO.";
    if (isNight) return "NIGHT OPS ACTIVE. DINNER SERVICE LIVE.";
    return "VISIBILITY GOOD. ROAD CLEAR.";
  };

  return (
    <>
      {/* --- LAYER 1: ATMOSPHERIC EFFECTS (Full Screen Overlays) --- */}
      
      {/* NIGHT MODE DARKENER */}
      {isNight && (
        <div className="fixed inset-0 bg-blue-900/20 mix-blend-multiply pointer-events-none z-[5]" />
      )}

      {/* RAIN EFFECT */}
      {isRaining && (
        <div className="fixed inset-0 pointer-events-none z-[5] opacity-30">
           {/* Simple CSS Rain Animation would go here, simplified for performance */}
           <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/42/Rain_drop_texture.png')] opacity-20 animate-rain" />
        </div>
      )}

      {/* HEAT HAZE (CSS Backdrop Filter) */}
      {isHot && !isNight && (
         <div className="fixed inset-0 pointer-events-none z-[5] opacity-20 bg-orange-500/10 mix-blend-overlay" />
      )}


      {/* --- LAYER 2: THE HUD WIDGET (Top Right) --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed top-24 right-6 z-40 hidden md:flex items-center gap-4"
      >
        <div className="bg-black/80 backdrop-blur border border-white/10 p-4 rounded-sm flex items-center gap-4 shadow-xl">
           
           {/* Icon */}
           <div className="text-[#ff5722]">
              {isRaining ? <CloudRain size={24} /> : isNight ? <Moon size={24} /> : isHot ? <Sun size={24} /> : <CloudFog size={24} />}
           </div>

           {/* Data Stream */}
           <div className="flex flex-col">
              <div className="flex justify-between items-center mb-1">
                 <span className="text-2xl font-[family-name:var(--font-blackops)] text-white leading-none">
                    {temp}°C
                 </span>
                 <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest ml-4">
                    SEEDUWA LIVE
                 </span>
              </div>
              <div className="h-[1px] w-full bg-[#ff5722]/50 mb-1" />
              <p className="font-mono text-[9px] text-[#ff5722] uppercase tracking-wider animate-pulse">
                 {getComment()}
              </p>
           </div>
        </div>
      </motion.div>

      {/* CSS For Rain Animation (Injecting style) */}
      <style jsx global>{`
        @keyframes rain {
          0% { background-position: 0 0; }
          100% { background-position: 20% 100%; }
        }
        .animate-rain {
          animation: rain 1s linear infinite;
        }
      `}</style>
    </>
  );
}
