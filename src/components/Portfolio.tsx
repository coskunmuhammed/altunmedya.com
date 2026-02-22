"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const portfolioItems = [
    {
        id: 1,
        image: "/2.png",
    },
    {
        id: 2,
        image: "/4.png",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    },
];

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section id="portfolio" className="py-24 md:py-40 px-6 bg-black text-white">
            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <h2 className="text-6xl md:text-[10vw] font-anton leading-none tracking-tighter uppercase">
                        {t.portfolio.title}
                    </h2>
                    <button className="px-8 py-3 rounded-full bg-white text-black font-bold text-sm tracking-widest hover:bg-gray-200 transition-all uppercase whitespace-nowrap">
                        {t.portfolio.all_projects}
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {portfolioItems.map((item, index) => {
                        const translatedItem = t.portfolio.items[index];
                        if (!translatedItem) return null;

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] md:aspect-[1.4/1] overflow-hidden rounded-[2rem] md:rounded-[3rem] mb-10 bg-zinc-900">
                                    <motion.div
                                        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                    <h3 className="text-3xl md:text-5xl font-syne font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                        {translatedItem.title}
                                    </h3>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {translatedItem.tags.map((tag: string, i: number) => (
                                            <span
                                                key={i}
                                                className="px-5 py-1.5 rounded-full border border-white/20 text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/60 group-hover:border-white/50 group-hover:text-white transition-all duration-500"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
