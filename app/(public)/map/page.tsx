"use client";

import { useState, useMemo } from "react";
import { MediaList } from "@/components/map/MediaList";
import { MOCK_MEDIA_ENTITIES } from "@/lib/data/mock-media";
import SaudiMapSVG from "@/components/map/SaudiMapSVG";
import { Activity, Building2, Map as MapIcon, Newspaper } from "lucide-react";

export default function MapPage() {
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

    // Quick Stats Calculation
    const stats = useMemo(() => {
        const total = MOCK_MEDIA_ENTITIES.length;
        const newspapers = MOCK_MEDIA_ENTITIES.filter(e => e.type === "Newspaper").length;
        const activeRegions = new Set(MOCK_MEDIA_ENTITIES.map(e => e.region)).size;
        return { total, newspapers, activeRegions };
    }, []);

    return (
        <div className="bg-slate-50/50 min-h-[calc(100vh-64px)]">
            <div className="container mx-auto px-4 py-6 max-w-7xl h-full flex flex-col">
                {/* Header Section */}
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

                    {/* Mini Stats Bar */}
                    <div className="flex bg-white rounded-lg shadow-sm border border-slate-200 divide-x divide-x-reverse divide-slate-100 overflow-hidden">
                        <div className="px-5 py-3 flex items-center gap-3">
                            <div className="bg-blue-50 p-2 rounded-md text-blue-600"><Building2 size={18} /></div>
                            <div>
                                <span className="block text-xl font-bold text-slate-800 leading-none">{stats.total}</span>
                                <span className="text-xs text-slate-500 font-medium">جهة إعلامية</span>
                            </div>
                        </div>
                        <div className="px-5 py-3 flex items-center gap-3">
                            <div className="bg-purple-50 p-2 rounded-md text-purple-600"><Newspaper size={18} /></div>
                            <div>
                                <span className="block text-xl font-bold text-slate-800 leading-none">{stats.newspapers}</span>
                                <span className="text-xs text-slate-500 font-medium">صحيفة يومية</span>
                            </div>
                        </div>
                        <div className="px-5 py-3 flex items-center gap-3">
                            <div className="bg-emerald-50 p-2 rounded-md text-emerald-600"><Activity size={18} /></div>
                            <div>
                                <span className="block text-xl font-bold text-slate-800 leading-none">{stats.activeRegions}</span>
                                <span className="text-xs text-slate-500 font-medium">منطقة مغطاة</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Dashboard Grid */}
                <div className="grid lg:grid-cols-12 gap-6 flex-1 min-h-[600px] mb-8">
                    {/* Interactive Map Visualizer */}
                    <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-1 flex-1 relative overflow-hidden group">
                            <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 shadow-sm border border-slate-100">
                                اختر منطقة لعرض التفاصيل
                            </div>
                            <SaudiMapSVG
                                selectedRegionId={selectedRegion}
                                onRegionSelect={setSelectedRegion}
                            />
                        </div>
                    </div>

                    {/* Data Panel / List */}
                    <div className="lg:col-span-5 xl:col-span-4 flex flex-col h-full">
                        <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
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

