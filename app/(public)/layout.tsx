"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BarChart3, Github, Globe2, LayoutGrid, Mail, Map, Menu, MoreVertical, Newspaper, ShieldCheck, Twitter, X } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { t, dir } = useLanguage();
    const isRtl = dir === "rtl";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: t("home"), href: "/", icon: LayoutGrid },
        { label: t("map"), href: "/map", icon: Map },
        { label: t("stats"), href: "/stats", icon: BarChart3 },
        { label: t("verification"), href: "/verification", icon: ShieldCheck },
        { label: t("news"), href: "/news", icon: Newspaper },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            {/* Professional Sticky Header */}
            <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-200 shadow-md transition-all duration-300 h-16 md:h-20">
                <div className="container mx-auto px-4 h-full flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-50">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-all duration-300">
                            <Globe2 size={20} className="md:scale-110" />
                        </div>
                        <div className="flex flex-col -gap-1">
                            <span className="font-bold text-lg md:text-xl text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                                {t("brandName")}<span className="text-blue-600">.</span>
                            </span>
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest hidden sm:block">
                                Intelligent Portal
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links (unchanged) */}
                    <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-300 relative group",
                                        isActive
                                            ? "text-blue-600 bg-white shadow-sm ring-1 ring-slate-200/50"
                                            : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                                    )}
                                >
                                    <Icon size={16} className={cn("transition-colors", isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600")} />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions & Mobile Menu Toggle */}
                    <div className="flex items-center gap-2 md:gap-4 z-50">
                        <div className="hidden sm:block">
                            <LanguageSwitcher />
                        </div>

                        <button className="hidden md:flex p-2.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-all">
                            <MoreVertical size={20} />
                        </button>

                        <button
                            className="md:hidden p-2.5 text-slate-600 bg-slate-100 rounded-xl active:scale-90 transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Full Screen Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 top-0 bg-white z-40 md:hidden pt-24 px-6 shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100"
                                >
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{t("quickLinks")}</span>
                                    <LanguageSwitcher />
                                </motion.div>

                                <nav className="flex flex-col gap-2">
                                    {navItems.map((item, index) => {
                                        const isActive = pathname === item.href;
                                        const Icon = item.icon;
                                        return (
                                            <motion.div
                                                key={item.href}
                                                initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={cn(
                                                        "px-5 py-4 rounded-2xl text-xl font-bold flex items-center justify-between group transition-all duration-300",
                                                        isActive
                                                            ? "bg-blue-600 text-white shadow-xl shadow-blue-600/20"
                                                            : "text-slate-600 hover:bg-slate-50"
                                                    )}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <Icon size={24} className={isActive ? "text-white" : "text-blue-500"} />
                                                        {item.label}
                                                    </div>
                                                    {!isActive && <MoreVertical size={18} className="text-slate-300" />}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </nav>

                                {/* Bottom of Menu: Socials & Support */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-auto pb-12"
                                >
                                    <p className="text-center text-xs text-slate-400 font-medium">
                                        {t("rightsReserved")}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main Content with Top Padding for Sticky Header */}
            <main className="flex-1 pt-16 md:pt-20 pb-24 md:pb-0 animate-fade-in">
                {children}
            </main>

            {/* Native-style Bottom Navigation (Mobile Only) */}
            <nav className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 pb-6 pt-2 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                <div className="flex items-center justify-around px-2">
                    {navItems.slice(0, 4).map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex flex-col items-center gap-1 p-2 min-w-[64px] transition-all duration-300",
                                    isActive ? "text-blue-600" : "text-slate-400"
                                )}
                            >
                                <div className={cn(
                                    "p-1 rounded-xl transition-all duration-300",
                                    isActive ? "bg-blue-50" : ""
                                )}>
                                    <Icon size={20} className={isActive ? "scale-110" : ""} />
                                </div>
                                <span className="text-[10px] font-bold tracking-tight uppercase">{item.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="bottomNavTab"
                                        className="h-1 w-4 bg-blue-600 rounded-full mt-0.5"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Enhanced Footer */}
            <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12 pb-32 md:pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                                    <Globe2 size={18} />
                                </div>
                                <span className="font-bold text-xl text-white tracking-tight">
                                    {t("brandName")} <span className="text-blue-500">.</span>
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                                {t("brandSlogan")}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6 text-sm flex items-center gap-2">
                                <span className="w-1 h-4 bg-blue-500 rounded-full"></span> {t("quickLinks")}
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li><a href="/map" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("map")}</a></li>
                                <li><a href="/verification" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("verification")}</a></li>
                                <li><a href="/stats" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("stats")}</a></li>
                                <li><a href="/news" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("news")}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6 text-sm flex items-center gap-2">
                                <span className="w-1 h-4 bg-blue-500 rounded-full"></span> {t("support")}
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("aboutUs")}</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("privacyPolicy")}</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("termsAndConditions")}</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">{t("contactUs")}</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                        <p>{t("rightsReserved")}</p>
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                            <span className="opacity-70">{t("developedForHackathon")}</span>
                            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                            <span className="flex items-center gap-1 text-slate-400">
                                <ShieldCheck size={12} /> {t("securityBadge")}
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
