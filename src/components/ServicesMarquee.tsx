"use client";

import { motion } from "framer-motion";

const services = [
    "BRAND IDENTITY DESIGN",
    "INFOGRAPHIC AND OTHER",
    "BRANDING & IDENTITY",
    "WEB DESIGN & DEVELOPMENT",
    "UI / UX DESIGN",
    "CONTENT CREATION",
    "SOCIAL MEDIA MANAGEMENT",
];

export default function ServicesMarquee() {
    // Duplicate services to ensure a seamless loop
    const displayServices = [...services, ...services];

    return (
        <div className="bg-white/5 border-y border-white/10 py-4 md:py-6 overflow-hidden relative z-30">
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
