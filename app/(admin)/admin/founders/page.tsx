import { MOCK_FOUNDERS } from "@/lib/data/mock-media";
import { Plus, Search, Pencil, Trash2, Users } from "lucide-react";

export default function AdminFoundersPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-800">إدارة المؤسسين والشخصيات</h1>
                <a href="/admin/founders/new" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700">
                    <Plus size={20} />
                    إضافة شخصية
                </a>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute right-3 top-3 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="بحث عن مؤسس أو رئيس تحرير..."
                            className="w-full pr-10 pl-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                </div>

                <table className="w-full text-right text-sm">
                    <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4">الاسم</th>
                            <th className="px-6 py-4">الدور</th>
                            <th className="px-6 py-4">الجنسية</th>
                            <th className="px-6 py-4">نبذة</th>
                            <th className="px-6 py-4">إجراءات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {MOCK_FOUNDERS.map((founder) => (
                            <tr key={founder.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-bold text-slate-900 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                        <Users size={16} />
                                    </div>
                                    {founder.name}
                                </td>
                                <td className="px-6 py-4">
                                    <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs border border-slate-200">
                                        {founder.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{founder.nationality}</td>
                                <td className="px-6 py-4 text-slate-500 max-w-xs truncate" title={founder.bio}>
                                    {founder.bio || "-"}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                                            <Pencil size={16} />
                                        </button>
                                        <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
