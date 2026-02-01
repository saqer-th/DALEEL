import { Verdict, VerificationResult } from "@/lib/services/verification-service";
import { CheckCircle, AlertTriangle, XCircle, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerificationResultCardProps {
    result: VerificationResult;
    onReset: () => void;
}

export function VerificationResultCard({ result, onReset }: VerificationResultCardProps) {
    const isTrusted = result.verdict === "Trusted";
    const isSuspicious = result.verdict === "Suspicious";

    return (
        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className={cn("p-6 text-white text-center",
                isTrusted ? "bg-green-600" : isSuspicious ? "bg-amber-500" : "bg-red-600"
            )}>
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    {isTrusted ? <CheckCircle size={32} /> : isSuspicious ? <AlertTriangle size={32} /> : <XCircle size={32} />}
                </div>
                <h2 className="text-2xl font-bold mb-1">
                    {isTrusted ? "محتوى موثوق" : isSuspicious ? "محتوى مشكوك فيه" : "مضلل محتمل"}
                </h2>
                <p className="opacity-90 text-sm">تاريخ التحقق: {new Date(result.timestamp).toLocaleDateString('ar-SA')}</p>
            </div>

            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <span className="text-slate-600 font-medium">نسبة الثقة بالنظام</span>
                    <span className={cn("text-2xl font-bold",
                        isTrusted ? "text-green-600" : isSuspicious ? "text-amber-600" : "text-red-600"
                    )}>{result.confidence}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 rounded-full h-3 mb-8">
                    <div
                        className={cn("h-3 rounded-full transition-all duration-1000",
                            isTrusted ? "bg-green-500" : isSuspicious ? "bg-amber-500" : "bg-red-500"
                        )}
                        style={{ width: `${result.confidence}%` }}
                    />
                </div>

                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Activity size={18} className="text-blue-500" />
                    المؤشرات التحليلية
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <span className="block text-slate-500 mb-1">انتشار بحث جوجل</span>
                        <span className="font-semibold text-slate-800">{result.google_presence}</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <span className="block text-slate-500 mb-1">حالة التحقق (Fact Check)</span>
                        <span className={cn("font-semibold",
                            result.fact_check_status === "مصنف كمضلل" ? "text-red-600" :
                                result.fact_check_status === "تم التحقق" ? "text-green-600" : "text-slate-800"
                        )}>{result.fact_check_status}</span>
                    </div>
                </div>

                <div className="mb-6 flex items-center gap-2">
                    <span className="text-sm text-slate-500">عمق التحليل:</span>
                    <span className={cn("text-xs font-bold px-2 py-1 rounded-full border",
                        result.analysis_depth === "متقدم" ? "bg-indigo-50 text-indigo-700 border-indigo-100" : "bg-slate-100 text-slate-600 border-slate-200"
                    )}>
                        {result.analysis_depth}
                    </span>
                </div>

                <ul className="space-y-3 mb-8">
                    {result.signals.map((signal, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <div className="mt-1 w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                            <span className="text-slate-700 text-sm">{signal}</span>
                        </li>
                    ))}
                </ul>

                {result.sources_found && result.sources_found.length > 0 && (
                    <div className="mb-6">
                        <h3 className="font-bold text-slate-800 mb-3 text-sm">المصادر التي تم رصدها:</h3>
                        <div className="flex flex-wrap gap-2">
                            {result.sources_found.map((source, i) => (
                                <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md border border-blue-100">
                                    {source}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {result.extracted_text && (
                    <div className="mb-6 bg-amber-50 p-3 rounded-lg border border-amber-100 text-xs text-amber-800">
                        <p className="font-bold mb-1">تم استخدام OCR لاستخراج النص:</p>
                        <p className="line-clamp-2 opacity-80">{result.extracted_text}</p>
                    </div>
                )}

                <button
                    onClick={onReset}
                    className="w-full border border-slate-300 text-slate-600 font-bold py-3 rounded-lg hover:bg-slate-50 transition-colors"
                >
                    فحص محتوى آخر
                </button>

                <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed">
                    {result.disclaimer}<br />
                    <span className="opacity-70">"المنصة تستخرج النص من الصور ثم تتحقق منه عبر محركات البحث وقواعد بيانات التحقق العالمية"</span>
                </p>
            </div>
        </div>
    );
}
