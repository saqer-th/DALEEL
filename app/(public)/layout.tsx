"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BarChart3, Globe2, LayoutGrid, Map, Menu, Newspaper, ShieldCheck, X } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { useState } from "react";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { t } = useLanguage();
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
            <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-50">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
                            <Globe2 size={18} />
                        </div>
                        <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                            {t("brandName")} <span className="text-blue-600">.</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200 relative group",
                                        isActive
                                            ? "text-blue-600 bg-blue-50/80 shadow-sm ring-1 ring-blue-100"
                                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                                    )}
                                >
                                    <Icon size={16} className={cn("transition-colors", isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600")} />
                                    {item.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Actions & Mobile Menu Toggle */}
                    <div className="flex items-center gap-3 z-50">
                        <LanguageSwitcher />
                        <button
                            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 top-16 bg-white z-40 p-4 md:hidden animate-in slide-in-from-top-4 duration-200">
                        <nav className="flex flex-col gap-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "px-4 py-3 rounded-xl text-lg font-medium flex items-center gap-3 transition-all duration-200",
                                            isActive
                                                ? "text-blue-600 bg-blue-50"
                                                : "text-slate-600 hover:bg-slate-50"
                                        )}
                                    >
                                        <Icon size={20} className={cn("transition-colors", isActive ? "text-blue-600" : "text-slate-400")} />
                                        {item.label}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                )}
            </header>

            {/* Main Content with Top Padding for Sticky Header */}
            <main className="flex-1 pt-16 animate-fade-in">
                {children}
            </main>

            {/* Enhanced Footer */}
            <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
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
