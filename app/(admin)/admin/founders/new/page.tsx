import { Save, X } from "lucide-react";

export default function NewFounderPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">إضافة شخصية جديدة</h1>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">الاسم الكامل</label>
                            <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100" placeholder="مثال: حمد الجاسر" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">الدور</label>
                            <select className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100">
                                <option>مؤسس (Founder)</option>
                                <option>شريك مؤسس (Co-Founder)</option>
                                <option>رئيس تحرير (Editor-in-Chief)</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">الجنسية</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100" defaultValue="Saudi" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">نبذة مختصرة</label>
                        <textarea className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 h-32" placeholder="اكتب نبذة عن تاريخ الشخصية وإنجازاتها..."></textarea>
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
                        <button type="button" className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg flex items-center gap-2">
                            <X size={18} />
                            إلغاء
                        </button>
                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2">
                            <Save size={18} />
                            حفظ البيانات
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
