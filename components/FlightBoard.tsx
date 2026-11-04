"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FlapChar = ({ char, delay }: { char: string; delay: number }) => {
    const [displayChar, setDisplayChar] = useState(" ");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";

    useEffect(() => {
        let currentIter = 0;
        // The "Flipping" Effect
        const interval = setInterval(() => {
            if (currentIter > 10) { // Flip 10 times before stopping
                setDisplayChar(char);
                clearInterval(interval);
            } else {
                setDisplayChar(characters[Math.floor(Math.random() * characters.length)]);
                currentIter++;
            }
        }, 50 + Math.random() * 50); // Random speed for mechanical feel

        // Delay start based on position
        const startTimeout = setTimeout(() => { }, delay * 100);
        return () => {
            clearInterval(interval);
            clearTimeout(startTimeout);
        };
    }, [char, delay]);

    return (
        <span className="inline-block w-6 h-8 md:w-8 md:h-12 bg-[#0C172E] text-[#00D2FF] border-b-2 border-black font-mono text-xl md:text-3xl text-center leading-8 md:leading-[3rem] mx-[1px] shadow-sm uppercase">
            {displayChar}
        </span>
    );
};

const FlightRow = ({ item, price }: { item: string; price: string }) => {
    return (
        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
            <div className="flex">
                {item.split("").map((char, i) => (
                    <FlapChar key={i} char={char} delay={i} />
                ))}
            </div>
            <div className="flex ml-4">
                {price.split("").map((char, i) => (
                    <FlapChar key={`price-${i}`} char={char} delay={i + 10} />
                ))}
            </div>
        </div>
    );
};

export default function FlightBoard() {
    const menuItems = [
        { name: "BBQ BURGER", price: "1200" },
        { name: "HOT BUTTER", price: "2100" },
        { name: "DEVILLED", price: "1500" },
        { name: "MIX GRILL", price: "6000" },
    ];

    return (
        <section className="py-20 bg-black flex flex-col items-center">
            <h2 className="text-white/50 font-bebas text-2xl mb-10 tracking-[0.5em]">ARRIVALS // MENU</h2>
            <div className="bg-[#0f0f0f] p-6 border-4 border-[#333] rounded-lg shadow-2xl">
                {menuItems.map((item, i) => (
                    <FlightRow key={i} item={item.name.padEnd(12, " ")} price={item.price} />
                ))}
            </div>
        </section>
    );
}