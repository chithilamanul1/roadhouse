"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudRain, Sun, Moon, CloudFog, Thermometer, Wind } from "lucide-react";

export default function WeatherOps() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // YOUR LIVE API KEY
  const API_KEY = "a6ecc2ac2b952226c07a5308775b6dbf"; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Fetching weather for Seeduwa, Sri Lanka
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Seeduwa,LK&units=metric&appid=${API_KEY}`
        );
        
        if (!res.ok) throw new Error("Weather Data Unreachable");
        
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error("Weather Uplink Failed", error);
        setLoading(false);
      }
    };

    fetchWeather();
    
    // Refresh data every 30 minutes
    const interval = setInterval(fetchWeather, 1800000); 
    return () => clearInterval(interval);
  }, []);

  if (!weather || loading) return null;

  // ANALYZE CONDITIONS
  const isNight = weather.weather[0].icon.includes("n");
  const condition = weather.weather[0].main; // Rain, Clouds, Clear, etc.
  const isRaining = condition === "Rain" || condition === "Drizzle" || condition === "Thunderstorm";
  const temp = Math.round(weather.main.temp);
  const isHot = temp > 29;
  const windSpeed = Math.round(weather.wind.speed * 3.6); // Convert m/s to km/h

  // MILITARY STATUS REPORT
  const getComment = () => {
    if (isRaining) return "CONDITIONS: WET. DEPLOYING HOT COFFEE.";
    if (isHot) return `HEAT CRITICAL (${temp}°C). RECOMMEND ICED MOJITO.`;
    if (isNight) return "NIGHT OPS ACTIVE. DINNER SERVICE LIVE.";
    return `VISIBILITY GOOD. WIND ${windSpeed} KM/H.`;
  };

  return (
    <>
      {/* --- LAYER 1: ATMOSPHERIC EFFECTS (Full Screen) --- */}
      
      {/* Night Mode Overlay */}
      {isNight && (
        <div className="fixed inset-0 bg-blue-950/30 mix-blend-multiply pointer-events-none z-[5] transition-colors duration-[2000ms]" />
      )}

      {/* Rain Effect (CSS Animation) */}
      {isRaining && (
        <div className="fixed inset-0 pointer-events-none z-[5] opacity-40 mix-blend-screen">
           <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/42/Rain_drop_texture.png')] opacity-30 animate-rain" />
        </div>
      )}

      {/* Heat Haze (Orange Tint) */}
      {isHot && !isNight && (
         <div className="fixed inset-0 pointer-events-none z-[5] opacity-10 bg-orange-500/20 mix-blend-overlay" />
      )}


      {/* --- LAYER 2: THE HUD WIDGET (Top Right) --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed top-28 right-6 z-40 hidden md:flex items-center gap-4"
      >
        <div className="bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-sm flex items-center gap-4 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
           
           {/* Dynamic Icon */}
           <div className="text-[#ff5722] animate-pulse">
              {isRaining ? <CloudRain size={20} /> : 
               isNight ? <Moon size={20} /> : 
               isHot ? <Sun size={20} /> : 
               <CloudFog size={20} />}
           </div>

           {/* Data Stream */}
           <div className="flex flex-col">
              <div className="flex justify-between items-center mb-1 gap-4">
                 <span className="text-xl font-[family-name:var(--font-blackops)] text-white leading-none">
                    {temp}°C
                 </span>
                 <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    SEEDUWA LIVE
                 </span>
              </div>
              
              {/* Status Bar */}
              <div className="h-[2px] w-full bg-[#ff5722]/30 mb-1 overflow-hidden relative">
                 <div className="absolute inset-0 bg-[#ff5722] animate-[loading_2s_ease-in-out_infinite]" />
              </div>

              <p className="font-mono text-[8px] text-[#ff5722] uppercase tracking-wider">
                 {getComment()}
              </p>
           </div>
        </div>
      </motion.div>

      {/* CSS For Rain & Loading */}
      <style jsx global>{`
        @keyframes rain {
          0% { background-position: 0 0; }
          100% { background-position: 10% 100%; }
        }
        .animate-rain {
          animation: rain 0.5s linear infinite;
        }
        @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}
