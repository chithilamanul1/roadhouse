"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Force the loader to stay for at least 3 seconds so people see the cool animation
        // Then checks if the window is actually loaded
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="loader"
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
                >
                    <div className="relative flex flex-col items-center">

                        {/* The Logo Container */}
                        <motion.div
                            initial={{ opacity: 0, filter: "brightness(0)" }}
                            animate={{
                                opacity: [0, 0.2, 0, 0.8, 0, 1], // The Flicker Sequence
                                filter: [
                                    "brightness(0)",
                                    "brightness(0.5)",
                                    "brightness(0)",
                                    "brightness(1.2) drop-shadow(0 0 10px rgba(255,87,34,0.5))", // Orange Glow ignite
                                    "brightness(0)",
                                    "brightness(1) drop-shadow(0 0 30px rgba(255,87,34,0.4))" // Stable final state
                                ]
                            }}
                            transition={{
                                duration: 2,
                                times: [0, 0.1, 0.2, 0.3, 0.4, 1], // Timing of the flickers
                                ease: "linear"
                            }}
                            className="relative w-80 md:w-[500px]"
                        >
                            {/* Replace src with your actual logo path */}
                            <Image
                                src="https://i.ibb.co/qYGTfhYX/Gemini-Generated-Image-3e5orv3e5orv3e5o.png"
                                alt="Road House Loading"
                                width={800}
                                height={400}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Loading Bar (The "Fuse") */}
                        <div className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                                className="h-full w-full bg-[#ff5722] shadow-[0_0_15px_#ff5722]"
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5 }}
                            className="absolute bottom-[-50px] font-bebas text-white/40 tracking-[0.5em] text-sm animate-pulse"
                        >
                            IGNITING GRILLS...
                        </motion.p>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}