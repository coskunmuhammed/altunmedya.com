"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import Logo from "./Logo";
import { FaInstagram, FaLinkedinIn, FaBehance, FaXTwitter } from "react-icons/fa6";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
    const { t } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaXTwitter />, href: "#" },
        { icon: <FaBehance />, href: "#" },
        { icon: <FaLinkedinIn />, href: "#" },
    ];

    const quickLinks = [
        { label: t.nav.about, href: "#" },
        { label: t.footer.who_we_are, href: "#" },
        { label: t.nav.services, href: "#" },
        { label: t.nav.portfolio, href: "#" },
        { label: t.footer.blog, href: "#" },
        { label: t.footer.pricing, href: "#" },
        { label: t.nav.contact, href: "#contact" },
    ];

    return (
        <footer className="bg-black pt-32 pb-12 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
                    {/* Left Column: Headline & Socials */}
                    <div className="md:col-span-5">
                        <h2 className="text-4xl md:text-6xl font-syne font-bold text-white mb-12 whitespace-pre-line leading-tight">
                            {t.footer.headline}
                        </h2>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Middle Column: Quick Links */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-2 text-white/40 mb-8 font-syne uppercase tracking-wider text-sm">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                            {t.footer.quick_links}
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {quickLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact */}
                    <div className="md:col-span-3">
                        <div className="flex items-center gap-2 text-white/40 mb-8 font-syne uppercase tracking-wider text-sm">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                            {t.footer.contact}
                        </div>
                        <div className="space-y-6 text-white/80">
                            <div>
                                <a href="mailto:info@altunmedya.com" className="text-xl md:text-2xl font-medium hover:text-red-500 transition-colors">
                                    info@altunmedya.com
                                </a>
                            </div>
                            <div className="text-xl md:text-2xl font-medium">
                                +90 (532) 000 00 00
                            </div>
                            <div className="text-white/60 leading-relaxed font-light">
                                {t.footer.address}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Branding & Scroll Top */}
                <div className="relative pt-10 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                        <div className="w-full">
                            <h1 className="text-[15vw] md:text-[18vw] font-anton text-red-600/90 leading-none tracking-tighter select-none -mb-4 md:-mb-10 opacity-100 uppercase">
                                ALTUN.STUDIO
                            </h1>
                        </div>

                        <div className="absolute right-0 bottom-4 md:static md:mb-10">
                            <button
                                onClick={scrollToTop}
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-500 group"
                            >
                                <FiArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] uppercase tracking-[0.3em] font-medium">
                        <p>© 2026 ALTUN.STUDIO. {t.contact.rights}</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <span className="hover:text-white/40 cursor-default transition-colors">{t.footer.policies}</span>
                            <span className="hover:text-white/40 cursor-default transition-colors">{t.footer.sitemap}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Glow behind large text */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-red-600/10 blur-[150px] -z-10 rounded-full opacity-50" />
        </footer>
    );
}
