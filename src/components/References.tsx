"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const logos = [
    { id: 1, name: "Reklam Deposu", src: "/logos/reklamdeposulogo.svg" },
    { id: 2, name: "SQ Beach Club", src: "/logos/sqbeachclub.svg" },
    { id: 3, name: "Halil Usta", src: "/logos/halilustalogo.svg" },
    { id: 4, name: "MNA Kuyumculuk", src: "/logos/mnakuyumculuk.svg" },
    { id: 5, name: "Sensation", src: "/logos/Sensationlogo.svg" },
    { id: 6, name: "Bulvar Künefe", src: "/logos/bulvarkunefelogo.svg" },
    { id: 7, name: "Mert Sky", src: "/logos/mertskylogo.svg" },
    { id: 8, name: "Onyx Lounge", src: "/logos/onyxloungelogo.svg" },
    { id: 9, name: "Danışman Ol", src: "/logos/danismanol.svg", wide: true, href: "https://danismanol.com" },
    { id: 10, name: "Mekan", src: "/logos/mekanlogo.svg", wide: true },
    { id: 11, name: "Mülkünü Hesapla", src: "/logos/mulkunuhesapla.svg", wide: true, href: "https://mulkunuhesapla.com" },
    { id: 12, name: "Sat Kirala", src: "/logos/satkirala.com.svg", wide: true, href: "https://satkirala.com" },
    { id: 13, name: "Yat Sat Kirala", src: "/logos/yatsatkirala.com.svg", wide: true, href: "https://yatsatkirala.com" },
    { id: 14, name: "Canon", src: "/logos/canonlogo.svg", href: "https://canon.com.tr" },
    { id: 15, name: "Saat&Saat", src: "/logos/saatvesaat.svg", href: "https://saatvesaat.com.tr" },
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
                    animate={{ x: [0, -5000] }} // Increased offset for more logos
                    transition={{
                        duration: 60, // Slower for even more content
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {duplicatedLogos.map((logo, index) => {
                        const content = (
                            <div
                                className={`flex-shrink-0 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer ${logo.wide
                                    ? "w-48 md:w-[277px] h-12 md:h-[100px]"
                                    : "w-32 md:w-56 h-12 md:h-24"
                                    }`}
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        );

                        if (logo.href) {
                            return (
                                <a
                                    key={`${logo.id}-${index}`}
                                    href={logo.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {content}
                                </a>
                            );
                        }

                        return (
                            <div key={`${logo.id}-${index}`}>
                                {content}
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
