"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { dictionaries, Dictionary, Language } from "@/lib/i18n/dictionaries";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: keyof Dictionary) => string;
    dir: "rtl" | "ltr";
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("ar");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedLang = localStorage.getItem("daleel-lang") as Language;
        if (storedLang && (storedLang === "ar" || storedLang === "en")) {
            setLanguage(storedLang);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("daleel-lang", language);
            document.documentElement.lang = language;
            document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
        }
    }, [language, mounted]);

    const t = (key: keyof Dictionary) => {
        return dictionaries[language][key] || key;
    };

    const dir = language === "ar" ? "rtl" : "ltr";


    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
            {mounted ? (
                <div dir={dir} className={dir === "rtl" ? "font-ibm-plex-arabic" : "font-sans"}>
                    {children}
                </div>
            ) : (
                <div className="invisible">{children}</div>
            )}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
