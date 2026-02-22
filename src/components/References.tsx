"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

// Placeholder logos - we'll replace these with real ones later
const logos = [
    { id: 1, name: "Brand 1" },
    { id: 2, name: "Brand 2" },
    { id: 3, name: "Brand 3" },
    { id: 4, name: "Brand 4" },
    { id: 5, name: "Brand 5" },
    { id: 6, name: "Brand 6" },
];

export default function References() {
    const { t } = useLanguage();

    // Double the logos for seamless infinite loop
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-syne font-bold tracking-tighter text-white/20 uppercase text-center"
                >
                    {t.references.title}
                </motion.h2>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex space-x-12 md:space-x-24 items-center"
                    animate={{ x: [0, -1000] }} // Adjust -1000 based on total width
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.id}-${index}`}
                            className="flex-shrink-0 w-32 md:w-48 h-12 md:h-16 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
                        >
                            {/* Placeholder for Logo */}
                            <div className="w-full h-full bg-white/10 rounded flex items-center justify-center font-mono text-[10px] text-white/50 tracking-widest uppercase">
                                {logo.name}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
