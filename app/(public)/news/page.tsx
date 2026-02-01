"use client";

import { useState } from "react";
import {
    Newspaper, TrendingUp, Filter, Search, Zap,
    Calendar, ArrowUpRight, Share2, Bookmark, ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

// Mock Data
const NEWS_CATEGORIES = [
    { id: "all", label: "all" },
    { id: "gov", label: "gov" },
    { id: "tech", label: "tech" },
    { id: "economy", label: "economy" },
    { id: "culture", label: "culture" },
];

const MOCK_NEWS = [
    {
        id: 1,
        title: "وزارة الاتصالات تطلق مبادرة لتأهيل 1000 مبرمج في تقنيات الذكاء الاصطناعي",
        source: "وكالة الأنباء السعودية (واس)",
        category: "tech",
        date: "منذ ساعتين",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        aiSummary: "تحليل: المبادرة تهدف لسد الفجوة في سوق العمل التقني، مع تركيز على المناطق الطرفية. التغطية الإيجابية بلغت 95%."
    },
    {
        id: 2,
        title: "ارتفاع مؤشر البورصة السعودية بنسبة 1.5% بدعم من قطاع البتروكيماويات",
        source: "صحيفة الاقتصادية",
        category: "economy",
        date: "منذ 4 ساعات",
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2070&auto=format&fit=crop",
        aiSummary: "تحليل: الانتعاش يعكس ثقة المستثمرين بعد إعلان النتائج الربعية. رصدنا تباين في توقعات المحللين."
    },
    {
        id: 3,
        title: "افتتاح معرض الكتاب الدولي في الرياض بمشاركة 30 دولة",
        source: "عكاظ",
        category: "culture",
        date: "منذ 6 ساعات",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop",
        aiSummary: "تحليل: الحدث يحظى بتغطية إقليمية واسعة. الكلمات المفتاحية الأكثر تداولاً: 'تبادل ثقافي'، 'نشر المعرفة'."
    },
    {
        id: 4,
        title: "مشروع نيوم يعلن عن شراكة استراتيجية مع كبرى شركات الطاقة المتجددة",
        source: "الشرق الأوسط",
        category: "economy",
        date: "منذ 8 ساعات",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
        aiSummary: "تحليل: الشراكة تعزز مكانة المملكة في مجال الهيدروجين الأخضر. ردود الفعل الدولية إيجابية للغاية."
    },
    {
        id: 5,
        title: "هيئة الترفيه تكشف عن روزنامة الفعاليات للموسم القادم",
        source: "سبق",
        category: "culture",
        date: "أمس",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
        aiSummary: "تحليل: التنوع في الفعاليات يستهدف شريحة سياحية أوسع. التفاعل على منصات التواصل الاجتماعي مرتفع جداً."
    },
    {
        id: 6,
        title: "إطلاق خدمات حكومية رقمية جديدة عبر منصة 'أبشر'",
        source: "صحيفة الرياض",
        category: "gov",
        date: "أمس",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        aiSummary: "تحليل: الخطوة تأتي ضمن استراتيجية التحول الرقمي. المتوقع خفض زمن إنجاز المعاملات بنسبة 40%."
    }
];

export default function NewsPage() {
    const { t, language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredNews = activeCategory === "all"
        ? MOCK_NEWS
        : MOCK_NEWS.filter(news => news.category === activeCategory);

    return (
        <div className="bg-slate-50 min-h-screen pb-12 font-sans">
            <div className="container mx-auto px-4 py-8 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                            <Newspaper className="text-blue-600" />
                            {t("newsTitle")}
                        </h1>
                        <p className="text-slate-500 text-lg">
                            {t("brandSlogan")}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-100 mb-1">
                        <Zap size={18} className="fill-blue-700" />
                        <span className="text-sm font-bold">{t("aiPowered")}</span>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-2 mb-8 sticky top-[80px] z-20 bg-slate-50/90 backdrop-blur-sm py-2">
                    <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-sm flex items-center gap-1 overflow-x-auto max-w-full">
                        {NEWS_CATEGORIES.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap",
                                    activeCategory === cat.id
                                        ? "bg-slate-900 text-white shadow-md"
                                        : "bg-transparent text-slate-500 hover:bg-slate-50"
                                )}
                            >
                                {t(cat.label as any)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNews.map((item, i) => (
                        <div key={item.id} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 start-3">
                                    <span className="bg-white/90 backdrop-blur-md text-slate-800 text-xs font-bold px-3 py-1 rounded-full border border-white/20 shadow-sm">
                                        {t(item.category as any)}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-100"></span>
                                    <span className="font-medium text-slate-600 truncate max-w-[150px]">{item.source}</span>
                                </div>

                                <h3 className="font-bold text-slate-900 text-lg mb-3 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors">
                                    {item.title}
                                </h3>

                                <div className="mt-auto pt-4 border-t border-slate-50 space-y-3">
                                    {/* AI Insight */}
                                    <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Zap size={14} className="text-purple-600 fill-purple-600" />
                                            <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">{t("aiAnalysis")}</span>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed">
                                            {item.aiSummary}
                                        </p>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex gap-2">
                                            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
                                                <Share2 size={16} />
                                            </button>
                                            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors">
                                                <Bookmark size={16} />
                                            </button>
                                        </div>
                                        <button className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn">
                                            {t("readMore")} <ArrowUpRight size={16} className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
