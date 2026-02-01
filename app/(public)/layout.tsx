"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BarChart3, Globe2, LayoutGrid, Map, Newspaper, ShieldCheck } from "lucide-react";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        { label: "الرئيسية", href: "/", icon: LayoutGrid },
        { label: "خريطة الإعلام", href: "/map", icon: Map },
        { label: "الإحصائيات", href: "/stats", icon: BarChart3 },
        { label: "التحقق الذكي", href: "/verification", icon: ShieldCheck },
        { label: "موجز الأخبار", href: "/news", icon: Newspaper },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
            {/* Professional Sticky Header */}
            <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
                            <Globe2 size={18} />
                        </div>
                        <span className="font-bold text-xl text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                            دليل <span className="text-blue-600">.</span>
                        </span>
                    </Link>

                    {/* Navigation Links */}
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

                    {/* Actions */}
                    <div className="flex items-center gap-3">

                    </div>
                </div>
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
                                    دليل <span className="text-blue-500">.</span>
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                                المنصة الوطنية الموحدة لرصد وتحليل ومتابعة المشهد الإعلامي السعودي باستخدام تقنيات الذكاء الاصطناعي، لتمكين صناع القرار من رؤية شاملة ودقيقة.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6 text-sm flex items-center gap-2">
                                <span className="w-1 h-4 bg-blue-500 rounded-full"></span> روابط سريعة
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li><a href="/map" className="hover:text-white hover:translate-x-1 transition-all inline-block">خريطة الإعلام</a></li>
                                <li><a href="/verification" className="hover:text-white hover:translate-x-1 transition-all inline-block">التحقق من المحتوى</a></li>
                                <li><a href="/stats" className="hover:text-white hover:translate-x-1 transition-all inline-block">مركز البيانات</a></li>
                                <li><a href="/news" className="hover:text-white hover:translate-x-1 transition-all inline-block">موجز الأخبار</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6 text-sm flex items-center gap-2">
                                <span className="w-1 h-4 bg-blue-500 rounded-full"></span> الدعم والمساعدة
                            </h4>
                            <ul className="space-y-3 text-sm text-slate-400">
                                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">عن دليل</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">سياسة الخصوصية</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">الشروط والأحكام</a></li>
                                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all inline-block">تواصل معنا</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                        <p>© 2026 دليل للإعلام الذكي. جميع الحقوق محفوظة.</p>
                        <div className="flex items-center gap-4 mt-4 md:mt-0">
                            <span className="opacity-70">تم التطوير لأغراض الهاكاثون</span>
                            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                            <span className="flex items-center gap-1 text-slate-400">
                                <ShieldCheck size={12} /> حماية 24/7
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
