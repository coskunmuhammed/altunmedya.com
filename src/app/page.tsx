"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesMarquee from "@/components/ServicesMarquee";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import References from "@/components/References";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
    return (
        <main className="min-h-screen grain">
            <Navbar />
            <Hero />
            <ServicesMarquee />
            <Services />
            <Portfolio />
            <References />
            <Footer />
        </main>
    );
}
