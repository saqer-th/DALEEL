"use client";

import { useState } from "react";
import { VerificationInput } from "@/components/verification/VerificationInput";
import { VerificationResultCard } from "@/components/verification/VerificationResultCard";
import { VerificationResult, VerificationType, verifyContent } from "@/lib/services/verification-service";
import { ShieldCheck, History, Radio, Server, FileSearch, ArrowRight, Activity, Fingerprint, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock History Data
const RECENT_HISTORY = [
    { id: "CASE-492", type: "text", summary: "شائعات إغلاق المطار...", result: "Misleading", time: "منذ 10 دقائق" },
    { id: "CASE-491", type: "image", summary: "صورة مفبركة لمشروع...", result: "Suspicious", time: "منذ 3 ساعات" },
    { id: "CASE-490", type: "text", summary: "بيان وزارة الإعلام...", result: "Trusted", time: "منذ 5 ساعات" },
];

export default function VerificationPage() {
    const [result, setResult] = useState<VerificationResult | null>(null);
    const [isVerifying, setIsVerifying] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);

    const handleVerify = async (content: string | File, type: VerificationType) => {
        setIsVerifying(true);
        setResult(null);
        setScanProgress(0);

        // Simulate scanning stages
        const interval = setInterval(() => {
            setScanProgress(prev => {
                if (prev >= 95) return prev;
                return prev + Math.random() * 10;
            });
        }, 200);

        try {
            const res = await verifyContent(content, type);
            setScanProgress(100);
            setTimeout(() => {
                setResult(res);
                clearInterval(interval);
                setIsVerifying(false);
            }, 800); // Small delay to show 100%
        } catch (error) {
            console.error(error);
            setIsVerifying(false);
            clearInterval(interval);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Professional Header */}
            <div className="bg-slate-900 text-white border-b border-slate-700">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <ShieldCheck size={24} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight">وحدة التحقق الرقمي</h1>
                            <p className="text-[10px] text-slate-400 font-mono tracking-wider opacity-80 uppercase">Digital Media Forensics Unit</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-400 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            SYSTEM ONLINE
                        </div>
                        <span className="w-px h-4 bg-slate-600"></span>
                        <div className="flex items-center gap-2">
                            <Server size={14} />
                            v2.4.0-STABLE
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar: Case History */}
                <div className="hidden lg:block lg:col-span-1 space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                        <h3 className="text-sm font-bold text-slate-500 mb-4 flex items-center gap-2 uppercase tracking-wider">
                            <History size={16} /> سجل العمليات
                        </h3>
                        <div className="space-y-3">
                            {RECENT_HISTORY.map((item, i) => (
                                <div key={i} className="group p-3 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 cursor-pointer transition-all">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className="text-[10px] font-mono text-slate-400">{item.id}</span>
                                        <span className={cn("text-[10px] font-bold px-1.5 py-0.5 rounded",
                                            item.result === "Trusted" ? "bg-emerald-100 text-emerald-700" :
                                                item.result === "Suspicious" ? "bg-amber-100 text-amber-700" :
                                                    "bg-red-100 text-red-700"
                                        )}>{item.result}</span>
                                    </div>
                                    <p className="text-xs font-semibold text-slate-800 line-clamp-1 group-hover:text-blue-700">{item.summary}</p>
                                    <span className="text-[10px] text-slate-400 mt-1 block">{item.time}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-2 text-xs font-bold text-slate-500 hover:text-blue-600 border border-dashed border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                            عرض الأرشيف الكامل
                        </button>
                    </div>

                    <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-xl p-5 text-white shadow-lg overflow-hidden relative">
                        <Activity size={120} className="absolute -right-6 -bottom-6 text-white/5 opacity-20" />
                        <h4 className="font-bold text-lg mb-2 relative z-10">القدرات التحليلية</h4>
                        <ul className="space-y-2 text-sm text-blue-100 relative z-10">
                            <li className="flex items-center gap-2"><Fingerprint size={14} className="text-blue-400" /> كشف التزييف العميق</li>
                            <li className="flex items-center gap-2"><FileSearch size={14} className="text-blue-400" /> مطابقة المصادر المفتوحة</li>
                            <li className="flex items-center gap-2"><Radio size={14} className="text-blue-400" /> تحليل المشاعر والنبرة</li>
                        </ul>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-3">
                    {/* Scanning Overlay / Loading State */}
                    {isVerifying && (
                        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-lg relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                            <div className="absolute inset-0 bg-slate-900/5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

                            <div className="relative z-10 w-full max-w-md">
                                <div className="mb-8 relative">
                                    <div className="w-24 h-24 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin mx-auto"></div>
                                    <ShieldCheck size={40} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-2">جاري تحليل المحتوى...</h2>
                                <p className="text-slate-500 mb-6 font-mono text-sm">IDENTIFYING SIGNALS • CHECKING SOURCES • ANALYZING METADATA</p>

                                <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden shadow-inner border border-slate-200">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 relative"
                                        style={{ width: `${Math.min(scanProgress, 100)}%` }}
                                    >
                                        <div className="absolute top-0 right-0 bottom-0 w-full bg-white/20 animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-slate-500 mt-2">
                                    <span>جاري المعالجة</span>
                                    <span>{Math.round(scanProgress)}%</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Result View */}
                    {!isVerifying && result && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-500">
                            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                                <button onClick={() => setResult(null)} className="hover:text-blue-600 hover:underline">لوحة التحكم</button>
                                <ArrowRight size={14} />
                                <span className="font-semibold text-slate-900">تقرير الحالة #{result.id}</span>
                            </div>
                            <VerificationResultCard result={result} onReset={() => setResult(null)} />
                        </div>
                    )}

                    {/* Input View (Default) */}
                    {!isVerifying && !result && (
                        <div className="animate-in fade-in duration-300">
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-1">
                                <VerificationInput onVerify={handleVerify} isVerifying={isVerifying} />
                            </div>

                            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <Lock className="text-blue-600 mb-3" size={24} />
                                    <h3 className="font-bold text-slate-900 mb-1">خصوصية تامة</h3>
                                    <p className="text-xs text-slate-500">لا يتم تخزين البيانات المدخلة بعد انتهاء الجلسة.</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <Server className="text-purple-600 mb-3" size={24} />
                                    <h3 className="font-bold text-slate-900 mb-1">مصادر متعددة</h3>
                                    <p className="text-xs text-slate-500">الربط مع أكثر من 50 مصدر إخباري وقاعدة بيانات.</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <Activity className="text-emerald-600 mb-3" size={24} />
                                    <h3 className="font-bold text-slate-900 mb-1">دقة عالية</h3>
                                    <p className="text-xs text-slate-500">نموذج ذكاء اصطناعي مدرب على المحتوى المحلي.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
