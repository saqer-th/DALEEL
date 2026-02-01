import { MOCK_MEDIA_ENTITIES } from "@/lib/data/mock-media";
import { Plus, Search, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

export default function AdminEntitiesPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-800">إدارة الجهات الإعلامية</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700">
                    <Plus size={20} />
                    إضافة جهة جديدة
                </button>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute right-3 top-3 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="بحث عن جهة إعلامية..."
                            className="w-full pr-10 pl-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                </div>

                <table className="w-full text-right text-sm">
                    <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4">اسم الجهة</th>
                            <th className="px-6 py-4">النوع</th>
                            <th className="px-6 py-4">المنطقة</th>
                            <th className="px-6 py-4">الحالة</th>
                            <th className="px-6 py-4">إجراءات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {MOCK_MEDIA_ENTITIES.map((entity) => (
                            <tr key={entity.id} className="hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium text-slate-900">{entity.name}</td>
                                <td className="px-6 py-4">{entity.type}</td>
                                <td className="px-6 py-4 bg-opacity-50">{entity.region}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${entity.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}>
                                        {entity.status === "Active" ? "نشط" : "متوقف"}
                                    </span>
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
