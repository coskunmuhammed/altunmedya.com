"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const logos = [
    { id: 1, name: "Reklam Deposu", src: "/logos/reklamdeposulogo.svg" },
    { id: 2, name: "SQ Beach Club", src: "/logos/sqbeachclub.svg" },
    { id: 3, name: "Halil Usta", src: "/logos/halilustalogo.svg" },
    { id: 4, name: "MNA Kuyumculuk", src: "/logos/mnakuyumculuk.svg" },
    { id: 5, name: "Sensation", src: "/logos/Sensationlogo.svg" },
    { id: 6, name: "Bulvar Künefe", src: "/logos/bulvarkünefelogo.svg" },
    { id: 7, name: "Mert Sky", src: "/logos/mertskylogo.svg" },
    { id: 8, name: "Onyx Lounge", src: "/logos/onyxloungelogo.svg" },
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
                    animate={{ x: [0, -2000] }} // Adjusted for more logos
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={`${logo.id}-${index}`}
                            className="flex-shrink-0 w-32 md:w-56 h-12 md:h-24 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={logo.src}
                                alt={logo.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
