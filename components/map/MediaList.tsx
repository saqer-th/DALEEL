"use client";

import { useState } from "react";
import { MediaEntity, SAUDI_REGIONS, MOCK_FOUNDERS } from "@/lib/data/mock-media";
import { BadgeCheck, Calendar, Info, Users, ArrowRight, ExternalLink, Newspaper, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaListProps {
    regionId: string | null;
    entities: MediaEntity[];
}

export function MediaList({ regionId, entities }: MediaListProps) {
    // Determine entities to show
    const regionName = SAUDI_REGIONS.find((r) => r.id === regionId)?.arabicName;
    const filteredEntities = useMemo(() => {
        if (!regionId) return [];
        return entities.filter((e) => e.region === regionId);
    }, [regionId, entities]);

    const hasData = filteredEntities.length > 0;

    // Helper to get founder names
    const getFounderNames = (ids: string[]) => {
        return ids.map(id => MOCK_FOUNDERS.find(f => f.id === id)?.name).filter(Boolean).slice(0, 2).join("، ");
    };

    if (!regionId) {
        return (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-slate-50/50 rounded-xl border border-dashed border-slate-300">
                <div className="w-16 h-16 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mb-4">
                    <Info size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">استكشف المناطق</h3>
                <p className="text-slate-500 max-w-xs">
                    قم بالنقر على أي منطقة في الخريطة لاستعراض المؤسسات الإعلامية وتفاصيلها التاريخية.
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-20">
                <div>
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                        {regionName}
                    </h2>
                    <p className="text-slate-500 text-xs mt-1 font-medium">
                        {hasData ? `تم رصد ${filteredEntities.length} مؤسسة إعلامية` : "لا توجد بيانات"}
                    </p>
                </div>
                {hasData && (
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        نشط
                    </span>
                )}
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                {!hasData ? (
                    <div className="text-center py-12 text-slate-400">
                        <p>عفواً، لا توجد سجلات تاريخية لهذه المنطقة في قاعدة البيانات.</p>
                    </div>
                ) : (
                    filteredEntities.map((entity) => {
                        const founders = getFounderNames(entity.founderIds);
                        const isNewspaper = entity.type === "Newspaper";

                        return (
                            <div
                                key={entity.id}
                                className="group relative bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                                            isNewspaper ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" : "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
                                        )}>
                                            {isNewspaper ? <Newspaper size={20} /> : <BookOpen size={20} />}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">
                                                {entity.name}
                                            </h3>
                                            <span className="text-xs text-slate-500 flex items-center gap-1">
                                                {isNewspaper ? "صحيفة يومية" : "مجلة دورية"}
                                                {entity.licensed && <BadgeCheck size={12} className="text-emerald-500" />}
                                            </span>
                                        </div>
                                    </div>
                                    <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded border",
                                        entity.status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-slate-100 text-slate-500 border-slate-200"
                                    )}>
                                        {entity.status === "Active" ? "مستمرة" : "متوقفة"}
                                    </span>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mt-2 bg-slate-50/50 p-2 rounded-lg group-hover:bg-blue-50/30 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={14} className="text-slate-400" />
                                        <span>تأسست: {entity.establishment.display}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={14} className="text-slate-400" />
                                        <span className="truncate">{founders || "غير محدد"}</span>
                                    </div>
                                </div>

                                <div className="mt-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <span className="text-[10px] text-blue-600 font-bold flex items-center gap-1">
                                        عرض التفاصيل <ArrowRight size={12} />
                                    </span>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Footer gradient fade */}
            <div className="h-4 bg-gradient-to-t from-white/80 to-transparent pointer-events-none sticky bottom-0"></div>
        </div>
    );
}

// Ensure you import useMemo
import { useMemo } from "react";
