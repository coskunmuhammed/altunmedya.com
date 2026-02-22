"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { name: t.nav.portfolio, href: "#portfolio" },
        { name: t.nav.services, href: "#services" },
        { name: t.nav.about, href: "#about" },
        { name: t.nav.contact, href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                ? "bg-black/10 backdrop-blur-xl py-4 shadow-2xl"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Logo
                        scrolled={scrolled}
                        className="h-14 md:h-20 w-auto"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white hover:text-white/70 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                        className="flex items-center gap-2 text-xs font-bold border border-white/20 px-3 py-1 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                        <Globe size={14} />
                        {language.toUpperCase()}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setLanguage(language === "tr" ? "en" : "tr")}
                        className="flex items-center gap-1 text-[10px] font-bold border border-white/20 px-2 py-1 rounded-full text-white"
                    >
                        {language.toUpperCase()}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/5"
                    >
                        <div className="px-6 py-12 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-syne font-bold text-white hover:text-white/70 transition-colors uppercase tracking-tight"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
