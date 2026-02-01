import { Plus } from "lucide-react";

export default function AdminNewsPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-800">إدارة الأخبار (محرك الذكاء الاصطناعي)</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700">
                    <Plus size={20} />
                    إضافة خبر جديد
                </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center">
                <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Plus size={32} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2">تغذية محرك الأخبار</h2>
                    <p className="text-slate-500 mb-6">
                        يمكنك هنا إضافة روابط أخبار أو نصوص ليقوم الذكاء الاصطناعي بتلخيصها وتصنيفها وعرضها في الموجز العام.
                    </p>
                    <div className="space-y-4 text-right">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">روبط المصدر</label>
                            <input type="text" className="w-full p-2 border border-slate-200 rounded-lg" placeholder="https://..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">النص الكامل (اختياري)</label>
                            <textarea className="w-full p-2 border border-slate-200 rounded-lg h-24" placeholder="نص الخبر..." />
                        </div>
                        <button className="w-full bg-slate-900 text-white py-2 rounded-lg font-bold">
                            معالجة وإضافة
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
