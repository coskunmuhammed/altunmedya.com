"use client";
// Force Vercel redeploy for rotating locations

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const [locationIndex, setLocationIndex] = useState(0);
    const locations = ["DIDIM", "DUBAI", "LONDON", "OSLO", "KÖLN", "İSTANBUL"];

    useEffect(() => {
        const timer = setInterval(() => {
            setLocationIndex((prev) => (prev + 1) % locations.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [locations.length]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Video with overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10" />

                {/* Background Video */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
                >
                    <source
                        src="https://cdn.pixabay.com/video/2016/09/21/5159-183419082_large.mp4"
                        type="video/mp4"
                    />
                    {/* Fallback Image */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691523567-6170f0295dbd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                </video>
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start lg:items-center pt-32 md:pt-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex flex-col font-anton leading-[0.8] tracking-tighter w-full"
                >
                    {/* First Line: WE ARE */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-[17vw] md:text-[16vw] text-white uppercase relative z-10 self-start -ml-[2vw] md:ml-0"
                    >
                        WE ARE
                    </motion.div>

                    {/* Second & Third Line: VIDEO */}
                    <div className="relative self-end -mt-[6vw] md:-mt-[6vw] z-30 flex flex-col items-end">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="text-[24vw] md:text-[20vw] text-red-600 uppercase relative pr-[2vw] md:pr-0"
                        >
                            VIDEO
                        </motion.div>
                    </div>

                    {/* Fourth Line: STUDIO (with blur/fade) */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="text-[19vw] md:text-[18vw] text-white uppercase relative -mt-[6vw] md:-mt-[6vw] z-40 self-start md:self-center"
                    >
                        <span className="relative inline-block">
                            STUDIO
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
                        </span>
                    </motion.div>

                    {/* Motto */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-[-15%] right-0 text-white/30 text-xs md:text-lg font-montserrat tracking-[0.3em] uppercase hidden md:block"
                    >
                        {t.hero.motto}
                    </motion.p>
                </motion.div>
            </div>

            {/* FROM Rotating Label */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                className="absolute bottom-[3%] right-[2vw] md:bottom-[6%] md:right-[4vw] z-50 flex items-center gap-3 md:gap-5 font-anton text-white uppercase tracking-tighter select-none"
            >
                <div className="text-[12vw] md:text-[6vw] leading-none opacity-10 font-light">/</div>
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="text-[4.5vw] md:text-[2vw] opacity-30 shrink-0">FROM</div>
                    <div className="relative h-[10vw] md:h-[5vw] min-w-[45vw] md:min-w-[20vw] overflow-hidden flex items-center justify-end">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={locations[locationIndex]}
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                className="text-[10vw] md:text-[4.5vw] opacity-90 text-white whitespace-nowrap leading-none text-right"
                            >
                                {locations[locationIndex]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>

        </section>
    );
}
