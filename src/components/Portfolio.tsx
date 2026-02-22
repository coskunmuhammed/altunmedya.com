"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const portfolioItems = [
    {
        id: 1,
        title: "Vogue Editorial",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        size: "tall",
    },
    {
        id: 2,
        title: "Brand Launch",
        category: "Cinematography",
        image: "https://images.unsplash.com/photo-1492691523567-6170f0295dbd?q=80&w=1000&auto=format&fit=crop",
        size: "wide",
    },
    {
        id: 3,
        title: "Visual ID",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
        size: "normal",
    },
    {
        id: 4,
        title: "Street Fusion",
        category: "Photography",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
        size: "normal",
    },
    {
        id: 5,
        title: "Abstract Motion",
        category: "Digital Art",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
        size: "wide",
    },
    {
        id: 6,
        title: "Future Sounds",
        category: "Music Video",
        image: "https://images.unsplash.com/photo-1514525253361-bee8d4dc3ed8?q=80&w=1000&auto=format&fit=crop",
        size: "tall",
    },
];

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section id="portfolio" className="py-24 px-6 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-gray-400 text-sm tracking-widest uppercase mb-2 block">{t.portfolio.tagline}</span>
                        <h2 className="text-5xl md:text-8xl font-syne font-bold tracking-tighter">{t.portfolio.title}</h2>
                    </div>
                    <p className="text-gray-500 max-w-md mt-4 md:mt-0">
                        {t.portfolio.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden cursor-pointer ${item.size === "tall" ? "md:row-span-2" :
                                item.size === "wide" ? "md:col-span-2" : ""
                                }`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-xs text-white/70 uppercase tracking-widest mb-2">{item.category}</span>
                                <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="underline underline-offset-8 font-bold tracking-widest hover:text-gray-400 transition-colors uppercase">
                        {t.portfolio.all_projects}
                    </button>
                </div>
            </div>
        </section>
    );
}
