"use client";

import { useState, useEffect } from "react";
import { CloudRain, Sun, Moon, CloudFog } from "lucide-react";

export default function WeatherOps() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "a6ecc2ac2b952226c07a5308775b6dbf"; 

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Seeduwa,LK&units=metric&appid=${API_KEY}`
        );
        if (!res.ok) throw new Error("Weather unreachable");
        const data = await res.json();
        setWeather(data);
      } catch (error) {
        setWeather({ main: { temp: 28 }, weather: [{ main: "Clear", icon: "01d" }] });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 1800000); 
    return () => clearInterval(interval);
  }, []);

  if (!weather || loading) return null;

  const isNight = weather.weather?.[0]?.icon?.includes("n") || false;
  const condition = weather.weather?.[0]?.main || "Clear";
  const isRaining = condition === "Rain" || condition === "Drizzle" || condition === "Thunderstorm";
  const temp = Math.round(weather.main?.temp || 28);
  const isHot = temp > 29;

  const getComment = () => {
    if (isRaining) return "Warm soups & hot coffee ready!";
    if (isHot) return "Try a cold iced passion mojito!";
    if (isNight) return "Grills & cold drinks live tonight!";
    return "Great weather for delicious food!";
  };

  return (
    <div className="fixed top-28 right-6 z-40 hidden md:flex items-center gap-3 pointer-events-none">
      <div className="bg-black/90 border border-white/10 p-3 rounded-xl flex items-center gap-3.5 shadow-xl pointer-events-auto">
         <div className="text-[#ff5722]">
            {isRaining ? <CloudRain size={20} /> : 
             isNight ? <Moon size={20} /> : 
             isHot ? <Sun size={20} /> : 
             <CloudFog size={20} />}
         </div>

         <div className="flex flex-col">
            <div className="flex items-center gap-3">
               <span className="text-lg font-[family-name:var(--font-blackops)] text-white leading-none">
                  {temp}°C
               </span>
               <span className="text-[9px] font-mono text-[#ff5722] uppercase tracking-wider font-bold">
                  SEEDUWA LIVE
               </span>
            </div>
            
            <p className="text-[10px] text-neutral-400 mt-0.5 max-w-[190px] leading-tight font-sans">
               {getComment()}
            </p>
         </div>
      </div>
    </div>
  );
}