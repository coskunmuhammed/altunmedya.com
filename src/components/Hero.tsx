"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

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

            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center pt-32 md:pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex flex-col font-anton leading-[0.8] tracking-tighter w-full items-center"
                >
                    {/* First Line: WE ARE */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-[18vw] md:text-[16vw] text-white uppercase relative z-10"
                    >
                        WE ARE
                    </motion.div>

                    {/* Second & Third Line: VIDEO */}
                    <div className="relative self-center md:self-end -mt-[6vw] md:-mt-[6vw] z-30 flex flex-col items-center md:items-end">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="text-[22vw] md:text-[20vw] text-red-600 uppercase relative"
                        >
                            VIDEO
                        </motion.div>
                    </div>

                    {/* Fourth Line: STUDIO (with blur/fade) */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="text-[18vw] md:text-[18vw] text-white uppercase relative -mt-[6vw] md:-mt-[6vw] z-40 self-center"
                    >
                        <span className="relative inline-block">
                            STUDIO
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
                        </span>
                    </motion.div>
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
                    Less is more, none is perfect
                </motion.p>
            </motion.div>
        </div>

        </section >
    );
}
