module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const translations = {
    tr: {
        nav: {
            portfolio: "Portfolyo",
            services: "Hizmetler",
            about: "Hakkımızda",
            contact: "İletişim"
        },
        hero: {
            tagline: "Kreatif Medya Ajansı",
            title1: "HİKAYENİZİ",
            title2: "SANATLA ANLATIN",
            description: "Sadece içerik üretmiyoruz, markanızın parlamasını sağlayacak görsel dünyalar kuruyoruz.",
            cta_projects: "PROJELERİMİZİ GÖRÜN",
            cta_contact: "BİZE ULAŞIN"
        },
        services: {
            tagline: "Neler Yapıyoruz?",
            title_start: "VERİDEN",
            title_mid: "SANATA",
            title_end: "TAM KAPSAMLI ÇÖZÜMLER",
            s1_title: "Görsel Prodüksiyon",
            s1_desc: "Sinematik video ve high-end fotoğraf çekimleri ile hikayenizi en güçlü şekilde anlatıyoruz.",
            s2_title: "Dijital Strateji",
            s2_desc: "Modern mecralarda markanızı öne çıkaracak veri odaklı içerik stratejileri geliştiriyoruz.",
            s3_title: "Marka Kimliği",
            s3_desc: "Logodan tipografiye, markanızın tüm görsel dilini baştan aşağı tasarlıyoruz."
        },
        portfolio: {
            tagline: "Seçili İşler",
            title: "PORTFOLYO",
            description: "Sınırları zorlayan, estetik ve stratejiyi harmanlayan son dönem çalışmalarımızdan bazıları.",
            all_projects: "TÜM PROJELERİ İNCELE"
        },
        contact: {
            title: "BİZE ULAŞIN",
            description: "Yenilikçi fikirlerinizi gerçeğe dönüştürelim.",
            cta: "İLETİŞİME GEÇİN",
            rights: "Tüm hakları saklıdır."
        }
    },
    en: {
        nav: {
            portfolio: "Portfolio",
            services: "Services",
            about: "About",
            contact: "Contact"
        },
        hero: {
            tagline: "Creative Media Agency",
            title1: "TELL YOUR STORY",
            title2: "THROUGH ART",
            description: "We don't just create content, we build visual worlds that make your brand shine.",
            cta_projects: "SEE OUR PROJECTS",
            cta_contact: "CONTACT US"
        },
        services: {
            tagline: "What We Do?",
            title_start: "FROM DATA",
            title_mid: "TO ART",
            title_end: "FULL-SCALE SOLUTIONS",
            s1_title: "Visual Production",
            s1_desc: "We tell your story in the most powerful way with cinematic video and high-end photography.",
            s2_title: "Digital Strategy",
            s2_desc: "We develop data-driven content strategies that will make your brand stand out in modern channels.",
            s3_title: "Brand Identity",
            s3_desc: "From logo to typography, we design your brand's entire visual language from scratch."
        },
        portfolio: {
            tagline: "Selected Works",
            title: "PORTFOLIO",
            description: "Some of our recent work that pushes boundaries, blending aesthetics and strategy.",
            all_projects: "VIEW ALL PROJECTS"
        },
        contact: {
            title: "WORK WITH US",
            description: "Let's turn your innovative ideas into reality.",
            cta: "GET IN TOUCH",
            rights: "All rights reserved."
        }
    }
};
}),
"[project]/src/lib/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("tr");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem("language");
        if (saved && (saved === "tr" || saved === "en")) {
            setLanguage(saved);
        }
    }, []);
    const handleSetLanguage = (lang)=>{
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][language];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage: handleSetLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/LanguageContext.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8bdd92f4._.js.map