"use client";

import { useState, useMemo } from "react";
import { MediaList } from "@/components/map/MediaList";
import { MOCK_MEDIA_ENTITIES } from "@/lib/data/mock-media";
import SaudiMapSVG from "@/components/map/SaudiMapSVG";
import { Activity, Building2, Map as MapIcon, Newspaper } from "lucide-react";

export default function MapPage() {
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    const stats = useMemo(() => {
        const total = MOCK_MEDIA_ENTITIES.length;
        const newspapers = MOCK_MEDIA_ENTITIES.filter(
            (e) => e.type === "Newspaper"
        ).length;
        const activeRegions = new Set(
            MOCK_MEDIA_ENTITIES.map((e) => e.region)
        ).size;

        return { total, newspapers, activeRegions };
    }, []);

    return (
        <div className="bg-slate-50/50 min-h-[calc(100vh-64px)]">
            <div className="container mx-auto max-w-7xl px-4 py-6 h-full flex flex-col">
                {/* ================= Header ================= */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                            <MapIcon className="text-blue-600" size={32} />
                            خريطة الإعلام السعودي
                        </h1>
                        <p className="text-slate-500 mt-2 text-lg">
                            نظام استكشاف وتحليل المشهد الإعلامي وتوزيع الكيانات الصحفية
                        </p>
                    </div>

                    {/* Mini Stats */}
                    <div className="flex bg-white rounded-lg shadow-sm border border-slate-200 divide-x divide-x-reverse divide-slate-100 overflow-hidden">
                        <StatItem
                            icon={<Building2 size={18} />}
                            value={stats.total}
                            label="جهة إعلامية"
                            color="blue"
                        />
                        <StatItem
                            icon={<Newspaper size={18} />}
                            value={stats.newspapers}
                            label="صحيفة يومية"
                            color="purple"
                        />
                        <StatItem
                            icon={<Activity size={18} />}
                            value={stats.activeRegions}
                            label="منطقة مغطاة"
                            color="emerald"
                        />
                    </div>
                </div>

                {/* ================= Main Grid ================= */}
                <div className="grid lg:grid-cols-12 gap-6 flex-1 min-h-[600px] mb-8">

                    {/* -------- Map (Smaller) -------- */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-1 flex-1 relative overflow-hidden">
                            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 shadow-sm border border-slate-100">
                                اختر منطقة لعرض التفاصيل
                            </div>

                            <SaudiMapSVG
                                selectedRegionId={selectedRegion}
                                onRegionSelect={setSelectedRegion}
                            />
                        </div>
                    </div>

                    {/* -------- Media List (Bigger) -------- */}
                    <div className="lg:col-span-5 flex flex-col h-full">
                        <div className="flex-1 bg-white rounded-2xl shadow-md border border-slate-200 overflow-y-auto">
                            <MediaList
                                regionId={selectedRegion}
                                entities={MOCK_MEDIA_ENTITIES}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

/* ================= Small Components ================= */

function StatItem({
    icon,
    value,
    label,
    color,
}: {
    icon: React.ReactNode;
    value: number;
    label: string;
    color: "blue" | "purple" | "emerald";
}) {
    const colorMap = {
        blue: "bg-blue-50 text-blue-600",
        purple: "bg-purple-50 text-purple-600",
        emerald: "bg-emerald-50 text-emerald-600",
    };

    return (
        <div className="px-5 py-3 flex items-center gap-3">
            <div className={`p-2 rounded-md ${colorMap[color]}`}>
                {icon}
            </div>
            <div>
                <span className="block text-xl font-bold text-slate-800 leading-none">
                    {value}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                    {label}
                </span>
            </div>
        </div>
    );
}
