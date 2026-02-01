"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { MOCK_MEDIA_ENTITIES } from "@/lib/data/mock-media";
import {
    Plus, Search, Filter, MoreHorizontal, MapPin,
    Building2, Globe, Edit, Trash2, Eye, Ban, MoreVertical
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function AdminEntitiesPage() {
    const { t, language } = useLanguage();
    const isRtl = language === 'ar';
    const [searchTerm, setSearchTerm] = useState("");
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if ((event.target as HTMLElement).closest('.entity-menu-trigger')) return;
            setActiveMenuId(null);
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Filter entities
    const filteredEntities = MOCK_MEDIA_ENTITIES.filter(entity =>
        entity.name.includes(searchTerm) ||
        (entity.nameEn && entity.nameEn.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="space-y-6 font-sans">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">{t("mediaEntities")}</h1>
                    <p className="text-slate-500 text-sm mt-1">
                        {t("dashboard")} / {t("mediaEntities")}
                    </p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm w-full sm:w-auto justify-center active:scale-95 transition-transform">
                    <Plus size={18} />
                    {t("add")}
                </button>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute start-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder={t("search")}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full ps-10 pe-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                </div>
                <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 font-medium flex items-center gap-2 justify-center active:bg-slate-100">
                    <Filter size={18} />
                    {t("filter")}
                </button>
            </div>

            {/* Entities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20">
                {filteredEntities.map((entity) => (
                    <div key={entity.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5 group flex flex-col relative">
                        <div className="flex items-start justify-between mb-4 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                <Building2 size={24} />
                            </div>

                            {/* Animated Menu Trigger */}
                            <div className="relative">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveMenuId(activeMenuId === entity.id ? null : entity.id);
                                    }}
                                    className={cn(
                                        "entity-menu-trigger p-2 rounded-full transition-all duration-200",
                                        activeMenuId === entity.id
                                            ? "bg-blue-50 text-blue-600 rotate-90"
                                            : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                                    )}
                                >
                                    <MoreHorizontal size={20} />
                                </button>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {activeMenuId === entity.id && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute top-10 end-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 origin-top-right rtl:origin-top-left"
                                        >
                                            <div className="p-1">
                                                <button className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
                                                    <Eye size={16} className="text-slate-400" />
                                                    {t("search")} (View)
                                                </button>
                                                <button className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors">
                                                    <Edit size={16} className="text-slate-400" />
                                                    {t("save")} (Edit)
                                                </button>
                                                <div className="h-px bg-slate-100 my-1"></div>
                                                <button className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 rounded-lg transition-colors">
                                                    <Trash2 size={16} className="text-red-400" />
                                                    {t("cancel")} (Delete)
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="mb-4 flex-1">
                            <h3 className="font-bold text-slate-900 text-lg mb-1 line-clamp-1">
                                {language === 'ar' ? entity.name : (entity.nameEn || entity.name)}
                            </h3>
                            {entity.nameEn && language === 'ar' && (
                                <p className="text-sm text-slate-400 font-sans mb-1">{entity.nameEn}</p>
                            )}
                            <div className="flex items-center gap-1 text-xs text-slate-500 bg-slate-50 w-fit px-2 py-1 rounded-full border border-slate-100">
                                <MapPin size={12} />
                                <span>{entity.region}</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-sm">
                            <span className={cn(
                                "px-2 py-0.5 rounded-full text-xs font-semibold",
                                "bg-emerald-50 text-emerald-700 border border-emerald-100"
                            )}>
                                {t("active")}
                            </span>
                            <div className="flex gap-2">
                                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                                    <Globe size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Empty State */}
                {filteredEntities.length === 0 && (
                    <div className="col-span-full py-12 text-center text-slate-500">
                        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search size={32} className="text-slate-400" />
                        </div>
                        <p className="text-lg font-medium">No entities found</p>
                        <p className="text-sm">Try adjusting your search terms</p>
                    </div>
                )}
            </div>
        </div>
    );
}
