"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Video, Share2, Palette, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Services() {
    const { t } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const services = [
        {
            title: t.services.s1_title,
            description: t.services.s1_desc,
            icon: <Video className="w-6 h-6" />,
            color: "from-purple-500/20 to-transparent",
            tag: "Visuals",
        },
        {
            title: t.services.s2_title,
            description: t.services.s2_desc,
            icon: <Share2 className="w-6 h-6" />,
            color: "from-orange-500/20 to-transparent",
            tag: "Strategy",
        },
        {
            title: t.services.s3_title,
            description: t.services.s3_desc,
            icon: <Palette className="w-6 h-6" />,
            color: "from-blue-500/20 to-transparent",
            tag: "Design",
        },
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } },
    };

    return (
        <section
            id="services"
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            className="relative py-40 px-6 bg-black text-white overflow-hidden"
        >
            {/* Interactive Background Glow */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 opacity-40 blur-[100px]"
                animate={{
                    background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent)`,
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-32">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white font-mono tracking-[0.4em] uppercase mb-8 block text-sm opacity-50"
                    >
                        {t.services.tagline}
                    </motion.span>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-2"
                    >
                        <motion.h2 variants={itemVariants} className="text-6xl md:text-9xl font-syne font-bold leading-[0.85] uppercase tracking-tighter">
                            {t.services.title_start}
                        </motion.h2>
                        <motion.h2 variants={itemVariants} className="text-6xl md:text-9xl font-syne font-bold leading-[0.85] uppercase tracking-tighter overflow-hidden">
                            <span className="flex">
                                {t.services.title_mid.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.5 + (i * 0.1),
                                            ease: [0.33, 1, 0.68, 1]
                                        }}
                                        className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20 inline-block"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h2>
                        <motion.h2 variants={itemVariants} className="text-6xl md:text-9xl font-syne font-bold leading-[0.85] uppercase tracking-tighter text-white/5">
                            {t.services.title_end}
                        </motion.h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-10 bg-white/5 border border-white/10 rounded-[2.5rem] transition-all duration-500 hover:bg-white/10 hover:border-white/20 overflow-hidden"
                        >
                            {/* Hover accent */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="p-4 bg-white/10 rounded-2xl text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                        {service.icon}
                                    </div>
                                    <span className="text-xs font-mono uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
                                        {service.tag}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-syne font-bold mb-6 group-hover:translate-x-1 transition-transform duration-500">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed font-light mb-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                                    {service.description}
                                </p>

                                <div className="mt-8 flex items-center justify-between">
                                    <span className="text-sm font-mono opacity-20">0{index + 1}</span>
                                    <div className="w-10 h-px bg-white/10 group-hover:w-20 transition-all duration-500" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
