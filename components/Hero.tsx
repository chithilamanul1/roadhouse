"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// The "Hacker" Text Effect
const DecryptedText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#@&";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );
            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <h1 className="text-7xl md:text-[10rem] font-black uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 font-bebas leading-[0.8]">
            {displayText}
        </h1>
    );
};

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden bg-brand-dark flex flex-col items-center justify-center">

            {/* Background Noise/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000_100%)] z-0" />

            {/* Animated Content */}
            <motion.div style={{ y }} className="relative z-10 text-center flex flex-col items-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5 }} // Wait for preloader
                    className="border border-brand-orange/30 px-4 py-1 rounded-full mb-6"
                >
                    <p className="text-brand-orange font-montserrat tracking-[0.3em] text-xs font-bold uppercase">
                        Est. 2024 &bull; Seeduwa
                    </p>
                </motion.div>

                <DecryptedText text="ROAD HOUSE" />

                <p className="text-brand-smoke/60 font-montserrat font-light text-lg md:text-xl tracking-[0.5em] mt-6 border-t border-b border-white/5 py-4 w-full">
                    CAFE <span className="text-brand-orange px-2">//</span> GRILL
                </p>

                <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#ff5722", color: "#000" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 px-8 py-3 border border-brand-orange text-brand-orange font-bebas text-xl tracking-widest uppercase transition-colors duration-300"
                >
                    View The Menu
                </motion.button>
            </motion.div>
        </div>
    );
}