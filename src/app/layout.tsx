import type { Metadata } from "next";
import { Inter, Syne, Montserrat, Anton } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

export const metadata: Metadata = {
    title: "Altunmedya | Creative Agency",
    description: "Boutique media agency for high-impact visual content.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${syne.variable} ${montserrat.variable} ${anton.variable} font-sans`}>
                <LanguageProvider>
                    <PreloaderWrapper>{children}</PreloaderWrapper>
                </LanguageProvider>
            </body>
        </html>
    );
}
