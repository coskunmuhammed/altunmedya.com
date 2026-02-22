"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Preloader() {
    const { language } = useLanguage();
    const starPath = "M55.11,30.88c-11.06-11.11-11.52-24.76-11.55-27.5-.01,2.81-.38,16.17-11.05,27.21-11.26,11.64-25.56,11.97-28.14,11.98,2.64,0,16.48.32,27.68,11.51s11.51,25.04,11.51,27.68c.04-2.84.52-16.22,11.28-27.24,11.18-11.45,25.22-11.92,27.9-11.95-2.72-.03-16.49-.49-27.64-11.69Z";

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
            <div className="relative flex items-center justify-center">
                {/* Rotating Star */}
                <motion.svg
                    viewBox="0 0 87 85"
                    className="w-24 h-24 text-white"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <path
                        d={starPath}
                        fill="currentColor"
                    />
                </motion.svg>

                {/* Pulsing Glow */}
                <motion.div
                    className="absolute inset-0 bg-white/20 blur-2xl rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 font-mono text-[10px] tracking-[0.5em] text-white/30 uppercase"
            >
                {language === "tr" ? "Altun Medya" : "Altun Media"}
            </motion.div>
        </motion.div>
    );
}
