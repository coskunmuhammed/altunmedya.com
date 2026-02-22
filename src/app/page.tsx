"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Logo from "@/components/Logo";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen grain">
            <Navbar />
            <Hero />
            <Services />
            <Portfolio />

            {/* Contact Section */}
            <section id="contact" className="py-40 px-6 bg-black text-white text-center">
                <h2 className="text-5xl md:text-9xl font-syne font-bold mb-8 tracking-tight uppercase">{t.contact.title}</h2>
                <p className="text-xl text-gray-400 mb-12">{t.contact.description}</p>
                <button className="px-12 py-5 bg-white text-black font-bold text-lg hover:bg-gray-200 transition-colors">
                    {t.contact.cta}
                </button>
                <footer className="mt-32 pt-16 border-t border-white/10 text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Logo
                            scrolled={true}
                            className="h-16 w-auto opacity-50 hover:opacity-100 transition-opacity"
                        />
                        <p>© 2026 ALTUNMEDYA. {t.contact.rights}</p>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Behance</a>
                        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </footer>
            </section>
        </main>
    );
}
