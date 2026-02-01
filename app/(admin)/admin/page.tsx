import { Newspaper, Users, ShieldAlert, Activity } from "lucide-react";

export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-slate-800 mb-6">لوحة المعلومات</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="الجهات الإعلامية"
                    value="142"
                    change="+12"
                    icon={<Newspaper className="text-blue-600" size={24} />}
                />
                <StatCard
                    title="عمليات التحقق"
                    value="8,234"
                    change="+23%"
                    icon={<Activity className="text-purple-600" size={24} />}
                />
                <StatCard
                    title="بلاغات التضليل"
                    value="45"
                    change="-5%"
                    isNegative
                    icon={<ShieldAlert className="text-red-600" size={24} />}
                />
                <StatCard
                    title="المستخدمين النشطين"
                    value="1,200"
                    change="+150"
                    icon={<Users className="text-green-600" size={24} />}
                />
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <h2 className="font-bold text-lg mb-4 text-slate-800">نشاط التحقق الأخير</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                                    #{1000 + i}
                                </div>
                                <div>
                                    <p className="font-medium text-slate-800">تحقق من {i % 2 === 0 ? "خبر نصي" : "صورة مفبركة"}</p>
                                    <p className="text-xs text-slate-500">منذ {i * 10} دقائق</p>
                                </div>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-bold ${i % 2 === 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                                {i % 2 === 0 ? "موثوق" : "مضلل"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, change, icon, isNegative }: any) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-slate-500 text-sm font-medium">{title}</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">{value}</h3>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">{icon}</div>
            </div>
            <div className="flex items-center text-sm">
                <span className={isNegative ? "text-red-500" : "text-green-500 font-bold"}>
                    {change}
                </span>
                <span className="text-slate-400 mr-2">مقارنة بالشهر الماضي</span>
            </div>
        </div>
    );
}
