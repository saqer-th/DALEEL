"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { Globe, Languages } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        const newLang = language === "ar" ? "en" : "ar";
        setLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors flex items-center gap-2"
            title={language === "ar" ? "Switch to English" : "Switch to Arabic"}
        >
            <Globe size={20} />
            <span className="text-sm font-medium uppercase">{language === "ar" ? "En" : "عربي"}</span>
        </button>
    );
}
