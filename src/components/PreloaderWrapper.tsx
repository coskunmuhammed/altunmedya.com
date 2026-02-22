"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set a timer for the preloader to disappear
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // 2.5 seconds for a premium feel

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader key="preloader" />}
            </AnimatePresence>
            {children}
        </>
    );
}
