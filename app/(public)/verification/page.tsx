"use client";

import { useState, useRef } from "react";
import {
    ShieldCheck, Upload, AlertTriangle, CheckCircle,
    FileText, X, ChevronRight, Search, Activity, Lock,
    Globe, Server, Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function VerificationPage() {
    const { t, language } = useLanguage();
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<"trusted" | "suspicious" | "misleading" | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [textInput, setTextInput] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleVerify = () => {
        setIsAnalyzing(true);
        setResult(null);
        setTimeout(() => {
            setIsAnalyzing(false);
            const outcomes: ("trusted" | "suspicious" | "misleading")[] = ["trusted", "suspicious", "misleading"];
            setResult(outcomes[Math.floor(Math.random() * outcomes.length)]);
        }, 3000);
    };

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            // Optional: Auto-verify or wait for user to click button
        }
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-slate-50 flex font-sans">
            {/* Main Content Area */}
            <div className="flex-1 p-4 lg:p-8">
                <div className="max-w-4xl mx-auto space-y-6">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 mt-4 md:mt-0">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 flex items-center gap-4 tracking-tight">
                                <div className="p-2 bg-emerald-600 rounded-2xl text-white shadow-lg shadow-emerald-600/20">
                                    <ShieldCheck size={32} />
                                </div>
                                {t("verifyTitle")}
                            </h1>
                            <p className="text-slate-500 mt-3 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                                {t("verifySubtitle")}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-2xl border border-emerald-100 animate-pulse self-start md:self-center">
                            <Activity size={20} />
                            <span className="text-sm font-black uppercase tracking-wider">{t("systemOnline")}</span>
                        </div>
                    </div>

                    {/* Input Section */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-1 bg-slate-100 flex gap-1 m-4 rounded-xl w-fit">
                            <button className="px-4 py-2 bg-white shadow-sm rounded-lg text-sm font-bold text-slate-800 transition-all">
                                {t("pasteUrl")}
                            </button>
                            <button
                                onClick={handleFileClick}
                                className="px-4 py-2 hover:bg-white/50 rounded-lg text-sm font-medium text-slate-500 transition-all flex items-center gap-2"
                            >
                                <Upload size={14} />
                                {t("dragDrop")}
                            </button>
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                                accept="image/*,video/*,.pdf,.doc,.docx"
                            />
                        </div>

                        <div className="px-6 pb-6">
                            {selectedFile ? (
                                <div className="w-full h-40 p-4 bg-slate-50 border border-slate-200 border-dashed rounded-xl flex flex-col items-center justify-center gap-3">
                                    <div className="p-3 bg-white rounded-full shadow-sm">
                                        <FileText className="text-blue-500" size={24} />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold text-slate-700">{selectedFile.name}</p>
                                        <p className="text-xs text-slate-400">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedFile(null)}
                                        className="text-xs text-red-500 hover:text-red-700 font-medium"
                                    >
                                        {t("cancel")}
                                    </button>
                                </div>
                            ) : (
                                <textarea
                                    className="w-full h-40 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all resize-none text-slate-700 placeholder:text-slate-400"
                                    placeholder={t("pasteUrl")}
                                    dir="auto"
                                    value={textInput}
                                    onChange={(e) => setTextInput(e.target.value)}
                                />
                            )}

                            <div className="flex justify-between items-center mt-4">
                                <div className="flex gap-4 text-xs text-slate-400">
                                    <span className="flex items-center gap-1 hover:text-emerald-600 transition-colors cursor-help">
                                        <Lock size={14} /> {t("privacy")}
                                    </span>
                                    <span className="flex items-center gap-1 hover:text-emerald-600 transition-colors cursor-help">
                                        <Globe size={14} /> {t("sources")}
                                    </span>
                                </div>
                                <button
                                    onClick={handleVerify}
                                    disabled={isAnalyzing || (!selectedFile && !textInput)}
                                    className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-wait"
                                >
                                    {isAnalyzing ? (
                                        <>
                                            <Activity className="animate-spin" size={20} />
                                            {t("analyzing")}
                                        </>
                                    ) : (
                                        <>
                                            <Search size={20} />
                                            {t("search")} (Verify)
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Loading State Overlay */}
                        {isAnalyzing && (
                            <div className="border-t border-slate-100 p-8 bg-slate-50/50 flex flex-col items-center text-center">
                                <div className="relative w-16 h-16 mb-4">
                                    <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                                    <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-1">{t("analyzing")}</h3>
                                <p className="text-slate-500 text-sm">{t("processing")}...</p>
                            </div>
                        )}
                    </div>

                    {/* Results Section */}
                    {result && !isAnalyzing && (
                        <div className={cn(
                            "rounded-2xl border-2 p-6 lg:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500",
                            result === 'trusted' ? "bg-emerald-50 border-emerald-100" :
                                result === 'suspicious' ? "bg-amber-50 border-amber-100" :
                                    "bg-rose-50 border-rose-100"
                        )}>
                            <div className="flex items-start gap-4 lg:gap-6">
                                <div className={cn(
                                    "p-4 rounded-2xl shadow-sm shrink-0",
                                    result === 'trusted' ? "bg-emerald-100 text-emerald-700" :
                                        result === 'suspicious' ? "bg-amber-100 text-amber-700" :
                                            "bg-rose-100 text-rose-700"
                                )}>
                                    {result === 'trusted' ? <CheckCircle size={32} /> :
                                        result === 'suspicious' ? <AlertTriangle size={32} /> :
                                            <X size={32} />}
                                </div>
                                <div className="flex-1">
                                    <h2 className={cn(
                                        "text-xl lg:text-2xl font-bold mb-2",
                                        result === 'trusted' ? "text-emerald-900" :
                                            result === 'suspicious' ? "text-amber-900" :
                                                "text-rose-900"
                                    )}>
                                        {result === 'trusted' ? t("resultTrusted") :
                                            result === 'suspicious' ? t("resultSuspicious") :
                                                t("resultMisleading")}
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {result === 'trusted'
                                            ? "The analyzed content shows high compatibility with trusted official sources."
                                            : result === 'suspicious'
                                                ? "Caution: Some information contradicts registered data. Verification recommended."
                                                : "Warning: High indicators of misleading content or fabrication detected."
                                        }
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="bg-white/60 p-4 rounded-xl text-center backdrop-blur-sm">
                                            <div className="text-2xl font-bold text-slate-900 mb-1">98.5%</div>
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t("statAccuracy")}</div>
                                        </div>
                                        <div className="bg-white/60 p-4 rounded-xl text-center backdrop-blur-sm">
                                            <div className="text-2xl font-bold text-slate-900 mb-1">12</div>
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t("sources")}</div>
                                        </div>
                                        <div className="bg-white/60 p-4 rounded-xl text-center backdrop-blur-sm">
                                            <div className="text-2xl font-bold text-slate-900 mb-1">0.4s</div>
                                            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Time</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Recent History Sidebar */}
            <div className="w-80 bg-white border-s border-slate-200 p-6 hidden lg:block sticky top-[80px] h-[calc(100vh-80px)] overflow-y-auto">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Activity size={18} className="text-slate-400" />
                    {t("history")}
                </h3>

                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="group p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100 hover:border-slate-200 cursor-pointer">
                            <div className="flex justify-between items-start mb-2">
                                <span className={cn(
                                    "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                                    i % 2 === 0 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                                )}>
                                    {i % 2 === 0 ? t("resultTrusted") : t("resultSuspicious")}
                                </span>
                                <span className="text-xs text-slate-400">12:30 PM</span>
                            </div>
                            <p className="text-xs text-slate-600 font-medium line-clamp-2 leading-relaxed mb-2">
                                عاجل: وزارة الموارد البشرية تعلن عن بدء تطبيق نظام العمل الجديد...
                            </p>
                            <div className="flex items-center text-[10px] text-slate-400 gap-1 group-hover:text-blue-600 transition-colors">
                                {t("resultReport")} <ChevronRight size={12} className="rtl:rotate-180" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
