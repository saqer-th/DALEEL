"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { LayoutDashboard, Newspaper, ShieldCheck, Settings, Users, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { t, dir } = useLanguage();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { label: t("dashboard"), href: "/admin", icon: LayoutDashboard },
        { label: t("mediaEntities"), href: "/admin/entities", icon: Newspaper },
        { label: t("founders"), href: "/admin/founders", icon: Users },
        { label: t("verificationLog"), href: "/admin/verification", icon: ShieldCheck },
    ];

    return (
        <div className="flex min-h-screen bg-slate-100">
            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 inset-x-0 h-16 bg-slate-900 z-50 flex items-center justify-between px-4 text-white">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    {isSidebarOpen ? <X /> : <Menu />}
                </button>
                <span className="font-bold text-lg">{t("adminPanel")}</span>
                <LanguageSwitcher />
            </div>

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "w-64 bg-slate-900 text-slate-50 fixed h-full z-50 transition-transform duration-300 md:translate-x-0 pt-16 md:pt-0",
                isSidebarOpen ? "translate-x-0" : (dir === "rtl" ? "translate-x-full" : "-translate-x-full")
            )}>
                {/* Desktop Header Logo */}
                <div className="p-6 border-b border-slate-800 hidden md:block">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        {t("adminPanel")}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{t("internalDemo")}</div>
                </div>

                {/* Mobile Header Logo (in Sidebar) */}
                <div className="p-6 border-b border-slate-800 md:hidden">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        {t("adminPanel")}
                    </div>
                </div>

                <nav className="p-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                                    isActive
                                        ? "bg-blue-600 text-white"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                )}
                            >
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}

                    {/* Settings & Language (Desktop) */}
                    <div className="pt-4 mt-4 border-t border-slate-800">
                        <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                            <Settings size={20} />
                            <span>{t("settings")}</span>
                        </a>
                        <div className="px-4 py-3 hidden md:block">
                            <LanguageSwitcher />
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className={cn(
                "flex-1 p-4 md:p-8 pt-20 md:pt-8 transition-all duration-300",
                dir === "rtl" ? "md:mr-64" : "md:ml-64"
            )}>
                {children}
            </main>
        </div>
    );
}
