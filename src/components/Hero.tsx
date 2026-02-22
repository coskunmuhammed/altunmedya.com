"use client";
// Force Vercel redeploy for dynamic content update - v2

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();
    const [locationIndex, setLocationIndex] = useState(0);
    const [serviceIndex, setServiceIndex] = useState(0);
    const locations = ["DIDIM", "DUBAI", "LONDON", "OSLO", "KÖLN", "İSTANBUL"];

    useEffect(() => {
        const timer = setInterval(() => {
            setLocationIndex((prev) => (prev + 1) % locations.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [locations.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            setServiceIndex((prev) => (prev + 1) % t.hero.services.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [t.hero.services.length]);

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
                    {/* GIF Element (Cursor Visual) - Left Corner area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        className="absolute -left-[2vw] bottom-[10vh] md:bottom-20 z-20 pointer-events-none opacity-40 md:opacity-100"
                    >
                        <Image
                            src="/cursor-visual.gif"
                            alt="Cursor"
                            width={180}
                            height={90}
                            unoptimized
                            className="w-[25vw] md:w-[12vw] h-auto rounded-xl"
                        />
                    </motion.div>

                    {/* GIF Element (Video Visual) - Top Right Corner area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                        className="absolute -right-[2vw] top-[-5vh] md:top-[-2vw] z-50 pointer-events-none opacity-40 md:opacity-100"
                    >
                        <Image
                            src="/video-visual.gif"
                            alt="Video"
                            width={350}
                            height={220}
                            unoptimized
                            className="w-[30vw] md:w-[15vw] h-auto rounded-xl shadow-2xl"
                        />
                    </motion.div>
                    {/* Main Text Content */}
                    <div className="flex flex-col items-start w-full">
                        {/* First Line: BİZ / WE ARE */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-[clamp(3.5rem,14vw,12rem)] text-white uppercase relative z-10 self-start md:ml-0"
                        >
                            {t.hero.line1}
                        </motion.div>

                        {/* Middle Line: ROTATING SERVICES (RED) with Dynamic Scaling */}
                        <div className="relative w-full flex items-center justify-center py-[2vw]">
                            <div className="relative h-[clamp(4rem,15vw,14rem)] flex items-center justify-center overflow-hidden w-full px-4 text-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={serviceIndex}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        exit={{ y: "-100%", opacity: 0 }}
                                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                        style={{
                                            // Dynamic font size calculation to prevent overflow
                                            fontSize: `clamp(2rem, ${Math.min(18, 18 * (14 / Math.max(10, t.hero.services[serviceIndex].length)))}vw, 15rem)`
                                        }}
                                        className="text-red-600 uppercase whitespace-nowrap leading-none font-anton drop-shadow-[0_0_30px_rgba(220,38,38,0.3)]"
                                    >
                                        {t.hero.services[serviceIndex]}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Third Line: AJANSIYIZ / AGENCY */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                            className="text-[clamp(3.5rem,14vw,12rem)] text-white uppercase relative z-40 self-end md:mr-0"
                        >
                            <span className="relative inline-block text-white">
                                {t.hero.line3}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
                            </span>
                        </motion.div>
                    </div>

                    {/* Motto */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute bottom-[-10vw] md:bottom-[-2vw] left-0 text-white/30 text-[2vw] md:text-sm font-montserrat tracking-[0.3em] uppercase"
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
                className="absolute bottom-[3%] right-[2vw] md:bottom-[6%] md:right-[4vw] z-50 flex items-center select-none"
            >
                <div className="relative h-[10vw] md:h-[5vw] min-w-[45vw] md:min-w-[20vw] overflow-hidden flex items-center justify-end">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={locations[locationIndex]}
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                            className="text-[10vw] md:text-[4.5vw] opacity-90 text-white whitespace-nowrap leading-none text-right font-anton uppercase tracking-tighter"
                        >
                            {locations[locationIndex]}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

        </section>
    );
}
