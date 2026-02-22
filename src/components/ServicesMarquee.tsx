"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesMarquee() {
    const { t } = useLanguage();
    const services = t.marquee.services;
    // Duplicate services to ensure a seamless loop
    const displayServices = [...services, ...services];

    return (
        <div className="bg-black/40 backdrop-blur-md border-y border-white/5 py-4 md:py-6 overflow-hidden relative z-30">
            <motion.div
                className="flex whitespace-nowrap items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ width: "fit-content" }}
            >
                {displayServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-white/60 font-syne text-xs md:text-sm tracking-[0.2em] font-medium uppercase px-8 md:px-12">
                            {service}
                        </span>
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
