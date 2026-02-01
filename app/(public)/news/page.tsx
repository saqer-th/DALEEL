"use client";

import { BadgeCheck, BrainCircuit, Calendar, Clock, ExternalLink, Filter, Newspaper, TrendingUp, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NEWS_CATEGORIES = ["الكل", "حكومي", "تقنية", "اقتصاد", "ثقافة", "عاجل"];

const MOCK_NEWS = [
    {
        id: 1,
        source: "وكالة الأنباء السعودية (واس)",
        title: "إطلاق المبادرة الوطنية للذكاء الاصطناعي في الإعلام",
        summary: "أعلنت وزارة الإعلام عن إطلاق برنامج شامل لتبني تقنيات الذكاء الاصطناعي في غرف الأخبار، بهدف تعزيز الشفافية ومكافحة التضليل الإعلامي.",
        category: "حكومي",
        timestamp: "منذ ساعة",
        confidence: 99,
        ai_analysis: "خبر رسمي موثوق - تطابق مع المصدر الحكومي",
        image: "verif-blue"
    },
    {
        id: 2,
        source: "صحيفة الرياض",
        title: "نمو قطاع الإعلام الرقمي بنسبة 15% في الربع الأول",
        summary: "أكد تقرير حديث ارتفاع إيرادات الإعلانات الرقمية في المملكة، مع توجه المؤسسات الصحفية الكبرى نحو نماذج الاشتراكات المدفوعة.",
        category: "اقتصاد",
        timestamp: "منذ 3 ساعات",
        confidence: 95,
        ai_analysis: "تحليل مالي دقيق - مدعوم ببيانات السوق",
        image: "verif-green"
    },
    {
        id: 3,
        source: "أخبار التقنية",
        title: "نيوم تستضيف قمة مستقبل الإعلام القادم",
        summary: "تستعد نيوم لاستقبال قادة الإعلام العالمي لمناقشة دمج الواقع المعزز في البث المباشر وصناعة المحتوى التفاعلي.",
        category: "تقنية",
        timestamp: "منذ 5 ساعات",
        confidence: 92,
        ai_analysis: "حدث مؤكد - تم رصده في 12 مصدر عالمي",
        image: "verif-purple"
    },
    {
        id: 4,
        source: "مصدر غير معروف",
        title: "تغييرات جذرية في أنظمة التراخيص الإعلامية",
        summary: "تداولت حسابات مجهولة أنباء عن إلغاء تراخيص الصحف الورقية نهائياً بحلول نهاية العام.",
        category: "عاجل",
        timestamp: "منذ 6 ساعات",
        confidence: 35,
        ai_analysis: "محتوى مشكوك فيه - لا يوجد مصدر رسمي",
        image: "verif-red",
        is_suspicious: true
    },
    {
        id: 5,
        source: "صحيفة مكة",
        title: "موسم الحج يشهد تغطية إعلامية غير مسبوقة",
        summary: "أكثر من 2000 إعلامي دولي يشاركون في نقل شعائر الحج لهذا العام، باستخدام أحدث تقنيات النقل المباشر.",
        category: "ثقافة",
        timestamp: "منذ يوم",
        confidence: 97,
        ai_analysis: "تغطية ميدانية موثقة",
        image: "verif-green"
    },
    {
        id: 6,
        source: "جريدة الاقتصادية",
        title: "صندوق الاستثمارات العامة يستحوذ على حصة استراتيجية في مجموعة إعلامية",
        summary: "صفقة جديدة تهدف لتعزيز المحتوى العربي الرقمي وتوسيع نطاق الوصول للجمهور العالمي.",
        category: "اقتصاد",
        timestamp: "منذ يومين",
        confidence: 94,
        ai_analysis: "بيان مالي رسمي",
        image: "verif-blue"
    }
];

export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState("الكل");

    const filteredNews = activeCategory === "الكل"
        ? MOCK_NEWS
        : MOCK_NEWS.filter(n => n.category === activeCategory);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header Section */}
            <div className="bg-white border-b border-slate-200 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-4 animate-fade-in">
                                <BrainCircuit size={14} />
                                مدعوم بالذكاء الاصطناعي
                            </div>
                            <h1 className="text-4xl font-bold text-slate-900 mb-4 leading-tight">
                                موجز الأخبار <span className="text-blue-600">الذكي</span>
                            </h1>
                            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                                منصة رصد وتحليل الأخبار لحظياً، تقدم لك ملخصات دقيقة مع مؤشرات ثقة تعتمد على خوارزميات التحقق من المصادر.
                            </p>
                        </div>

                        {/* Stats Summary Box */}
                        <div className="flex gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="text-center px-4 border-l border-slate-200 pl-4">
                                <span className="block text-2xl font-bold text-slate-900">24</span>
                                <span className="text-xs text-slate-500">خبر جديد</span>
                            </div>
                            <div className="text-center px-4">
                                <span className="block text-2xl font-bold text-sky-600">96%</span>
                                <span className="text-xs text-slate-500">متوسط الدقة</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8">
                {/* Categories Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {NEWS_CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                                activeCategory === cat
                                    ? "bg-slate-900 text-white shadow-md transform scale-105"
                                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* News Grid */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {filteredNews.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Confidence Indicator Line */}
                            <div className={cn("h-1 w-full",
                                item.confidence >= 90 ? "bg-emerald-500" :
                                    item.confidence >= 70 ? "bg-blue-500" : "bg-red-500"
                            )} />

                            <div className="p-6 flex-1 flex flex-col">
                                {/* Meta Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                                            <Newspaper size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-900">{item.source}</h4>
                                            <span className="text-[10px] text-slate-500 flex items-center gap-1">
                                                <Clock size={10} /> {item.timestamp}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={cn("px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1",
                                        item.confidence >= 90 ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                                            item.confidence >= 70 ? "bg-blue-50 text-blue-700 border border-blue-100" :
                                                "bg-red-50 text-red-700 border border-red-100"
                                    )}>
                                        {item.confidence >= 90 ? <BadgeCheck size={12} /> : <AlertTriangle size={12} />}
                                        {item.confidence}%
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                    {item.summary}
                                </p>

                                {/* AI Analysis Footer */}
                                <div className="mt-auto bg-slate-50 rounded-lg p-3 border border-slate-100">
                                    <div className="flex items-center gap-2 mb-1">
                                        <BrainCircuit size={14} className="text-purple-600" />
                                        <span className="text-xs font-semibold text-purple-700">تحليل الذكاء الاصطناعي</span>
                                    </div>
                                    <p className="text-xs text-slate-600">
                                        {item.ai_analysis}
                                    </p>
                                </div>
                            </div>

                            {/* Action Footer */}
                            <div className="px-6 py-3 border-t border-slate-50 flex justify-between items-center bg-gray-50/50">
                                <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded",
                                    item.category === "عاجل" ? "bg-red-100 text-red-600" : "bg-slate-200 text-slate-600"
                                )}>
                                    {item.category}
                                </span>
                                <button className="text-xs font-bold text-slate-600 group-hover:text-blue-600 flex items-center gap-1 transition-colors">
                                    قراءة الكامل <ExternalLink size={10} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
