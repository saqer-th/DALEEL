"use client";

import { Map, ShieldCheck, Newspaper, ArrowLeft, BarChart3, Database, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export default function Home() {
    const { t, language } = useLanguage();
    const isRtl = language === 'ar';

    return (
        <div className="flex flex-col items-center w-full font-sans">
            {/* Hero Section */}
            <section className="w-full bg-slate-900 relative overflow-hidden py-32 px-4 text-center">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>

                <div className="container mx-auto max-w-5xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700 text-blue-300 text-xs font-medium mb-6 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                        {t("systemOnline")}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                        {t("heroTitlePrefix")} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t("heroTitleSuffix")}</span>
                    </h1>

                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        {t("heroSubtitle")}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/map" className="group px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-900/20 hover:bg-blue-500 hover:shadow-blue-600/30 transition-all font-bold text-lg flex items-center justify-center gap-3">
                            <Map className="w-5 h-5" />
                            <span>{t("exploreMap")}</span>
                            {isRtl ?
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> :
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            }
                        </Link>
                        <Link href="/verification" className="px-8 py-4 bg-slate-800 text-slate-200 border border-slate-700 rounded-xl shadow-sm hover:bg-slate-700 hover:border-slate-600 transition-all font-bold text-lg flex items-center justify-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            <span>{t("verifyContent")}</span>
                        </Link>
                    </div>

                    {/* Stats Teaser */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-slate-800 pt-8 opacity-70">
                        <div>
                            <span className="block text-2xl font-bold text-white">13+</span>
                            <span className="text-xs text-slate-400">{t("statRegion")}</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-white">50+</span>
                            <span className="text-xs text-slate-400">{t("statEntity")}</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-white">99%</span>
                            <span className="text-xs text-slate-400">{t("statAccuracy")}</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-white">24/7</span>
                            <span className="text-xs text-slate-400">{t("statMonitoring")}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-4 bg-slate-50 w-full">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("featuresTitle")}</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">{t("featuresSubtitle")}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Map className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{t("featureMapTitle")}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {t("featureMapDesc")}
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <ShieldCheck className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{t("featureVerifyTitle")}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {t("featureVerifyDesc")}
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">{t("featureStatsTitle")}</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {t("featureStatsDesc")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
