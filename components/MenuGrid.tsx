"use client";
import { motion } from "framer-motion";

const Card = ({ title, price, category }: { title: string; price: string; category: string }) => {
    return (
        <motion.div
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            className="relative h-80 w-full bg-[#111] border border-white/10 rounded-lg overflow-hidden group cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />

            {/* Placeholder for Food Image (Add <img> here later) */}
            <div className="absolute inset-0 bg-[#1a1a1a] group-hover:bg-[#222] transition-colors duration-500" />

            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">{category}</span>
                <h3 className="text-3xl font-bebas text-white mt-1 group-hover:text-brand-orange transition-colors">{title}</h3>
                <div className="flex justify-between items-center mt-4 border-t border-white/10 pt-4">
                    <span className="font-mono text-white/80">LKR {price}</span>
                    <span className="text-xs text-white/40 group-hover:text-white transition-colors">ORDER &rarr;</span>
                </div>
            </div>
        </motion.div>
    );
};

export default function MenuGrid() {
    const dishes = [
        { title: "Smoked Ribs", price: "2,400", category: "Grill" },
        { title: "Ocean Platter", price: "5,500", category: "Seafood" },
        { title: "Spicy Wok Rice", price: "1,400", category: "Wok" },
    ];

    return (
        <section className="py-24 bg-brand-dark px-4 md:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {dishes.map((dish, i) => (
                    <Card key={i} {...dish} />
                ))}
            </div>
        </section>
    );
}