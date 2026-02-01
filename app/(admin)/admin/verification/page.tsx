import { ShieldCheck, Calendar, Filter } from "lucide-react";

export default function AdminVerificationPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-6">سجل عمليات التحقق</h1>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                    <div className="flex gap-2">
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                            <Filter size={16} />
                            تصفية
                        </button>
                        <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
                            <Calendar size={16} />
                            التاريخ
                        </button>
                    </div>
                    <div className="text-sm text-slate-500">
                        عرض 1-10 من 8,234
                    </div>
                </div>

                {/* List */}
                <div className="divide-y divide-slate-100">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i % 3 === 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800 text-sm">عنوان الخبر أو وصف الصورة هنا...</p>
                                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                                        <span>ID: #9283{i}</span>
                                        <span>•</span>
                                        <span>بواسطة: مستخدم عام</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-left">
                                    <span className="block text-xs text-slate-400">النتيجة</span>
                                    <span className={`text-sm font-bold ${i % 3 === 0 ? 'text-red-600' : 'text-green-600'}`}>
                                        {i % 3 === 0 ? 'مضلل' : 'موثوق'}
                                    </span>
                                </div>
                                <div className="text-left">
                                    <span className="block text-xs text-slate-400">الثقة</span>
                                    <span className="text-sm font-bold text-slate-700">
                                        {80 + i}%
                                    </span>
                                </div>
                                <button className="text-blue-600 text-sm font-medium hover:underline">
                                    التفاصيل
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
