"use client";

import { useMemo } from "react";
import { MOCK_MEDIA_ENTITIES, SAUDI_REGIONS, MOCK_FOUNDERS } from "@/lib/data/mock-media";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
    Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell
} from "recharts";
import {
    Activity, TrendingUp, Map as MapIcon, Users,
    AlertCircle, CheckCircle2, FileText, ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-slate-100 shadow-xl rounded-lg text-sm">
                <p className="font-bold text-slate-800 mb-1">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={index} style={{ color: entry.color }}>
                        {entry.name}: <span className="font-semibold">{entry.value}</span>
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

// KPI Card Component
const KPICard = ({ title, value, subtext, icon: Icon, trend, colorClass }: any) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
        <div className="flex justify-between items-start mb-4">
            <div className={cn("p-3 rounded-xl transition-colors", colorClass)}>
                <Icon size={24} />
            </div>
            {trend && (
                <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {trend} <ArrowUpRight size={12} className="mr-1" />
                </span>
            )}
        </div>
        <div>
            <h4 className="text-slate-500 text-sm font-medium mb-1">{title}</h4>
            <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-slate-900">{value}</span>
                <span className="text-xs text-slate-400 mb-1">{subtext}</span>
            </div>
        </div>
    </div>
);

export default function StatsPage() {
    // 1. Media Growth Over Time (Cumulative)
    const mediaGrowthData = useMemo(() => {
        const sorted = [...MOCK_MEDIA_ENTITIES].sort((a, b) => a.establishment.gregorian - b.establishment.gregorian);
        const data: { year: number; count: number }[] = [];
        let count = 0;
        let currentYear = 0;

        sorted.forEach(entity => {
            count++;
            if (entity.establishment.gregorian !== currentYear) {
                currentYear = entity.establishment.gregorian;
                data.push({ year: currentYear, count });
            } else {
                data[data.length - 1].count = count;
            }
        });
        return data;
    }, []);

    // 2. Regional Density
    const regionalData = useMemo(() => {
        const counts: Record<string, number> = {};
        MOCK_MEDIA_ENTITIES.forEach(e => {
            counts[e.region] = (counts[e.region] || 0) + 1;
        });
        return SAUDI_REGIONS.map(r => ({
            name: r.arabicName,
            count: counts[r.id] || 0
        })).sort((a, b) => b.count - a.count);
    }, []);

    // 3. Status Distribution
    const statusData = useMemo(() => {
        let active = 0;
        let stopped = 0;
        MOCK_MEDIA_ENTITIES.forEach(e => {
            if (e.status === "Active") active++;
            else stopped++;
        });
        return [
            { name: "نشط (Active)", value: active },
            { name: "متوقف (Stopped)", value: stopped }
        ];
    }, []);

    // 4. Type Distribution
    const typeData = useMemo(() => {
        let newspapers = 0;
        let magazines = 0;
        MOCK_MEDIA_ENTITIES.forEach(e => {
            if (e.type === "Newspaper") newspapers++;
            else magazines++;
        });
        return [
            { name: "صحف يومية", value: newspapers },
            { name: "مجلات دورية", value: magazines }
        ];
    }, []);

    // 5. Top Founders
    const topFounders = useMemo(() => {
        const counts: Record<string, number> = {};
        MOCK_MEDIA_ENTITIES.forEach(e => {
            e.founderIds.forEach(fid => {
                counts[fid] = (counts[fid] || 0) + 1;
            });
        });
        return Object.entries(counts)
            .map(([fid, count]) => {
                const founder = MOCK_FOUNDERS.find(f => f.id === fid);
                return { name: founder?.name || "Unknown", count, role: founder?.role };
            })
            .sort((a, b) => b.count - a.count)
            .slice(0, 5);
    }, []);

    const STATUS_COLORS = ['#10b981', '#64748b']; // Emerald for Active, Slate for Stopped
    const TYPE_COLORS = ['#3b82f6', '#8b5cf6']; // Blue for Newspapers, Purple for Magazines

    return (
        <div className="bg-slate-50/50 min-h-screen pb-12">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Page Header */}
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                            <Activity className="text-blue-600" />
                            مركز البيانات والتحليل
                        </h1>
                        <p className="text-slate-500 text-lg max-w-2xl">
                            لوحة متابعة حية ترصد نمو المشهد الإعلامي، التوزيع الجغرافي، ومؤشرات الأداء.
                        </p>
                    </div>
                </div>

                {/* KPI Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <KPICard
                        title="إجمالي الجهات المرخصة"
                        value={MOCK_MEDIA_ENTITIES.length}
                        subtext="جهة إعلامية"
                        icon={FileText}
                        trend="+12%"
                        colorClass="bg-blue-50 text-blue-600"
                    />
                    <KPICard
                        title="المناطق المُغطاة"
                        value={`${regionalData.filter(r => r.count > 0).length}`}
                        subtext="من أصل 13 منطقة"
                        icon={MapIcon}
                        colorClass="bg-amber-50 text-amber-600"
                    />
                    <KPICard
                        title="نسبة الكيانات النشطة"
                        value={`${Math.round((statusData[0].value / MOCK_MEDIA_ENTITIES.length) * 100)}%`}
                        subtext="مستمرة في الصدور"
                        icon={CheckCircle2}
                        trend="+5%"
                        colorClass="bg-emerald-50 text-emerald-600"
                    />
                    <KPICard
                        title="الشخصيات المؤثرة"
                        value={MOCK_FOUNDERS.length}
                        subtext="مؤسس ورئيس تحرير"
                        icon={Users}
                        colorClass="bg-purple-50 text-purple-600"
                    />
                </div>

                {/* Charts Grid */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    {/* Main Chart: Growth */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="font-bold text-slate-800 text-lg">النمو التاريخي للمؤسسات</h3>
                                <p className="text-slate-400 text-sm">تطور عدد وسائل الإعلام السعودية عبر العقود</p>
                            </div>
                            <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                                تراكمي سنوي
                            </div>
                        </div>
                        <div className="h-[350px] w-full" dir="ltr">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={mediaGrowthData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="year" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <YAxis tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                    <RechartsTooltip content={<CustomTooltip />} />
                                    <Area
                                        type="monotone"
                                        dataKey="count"
                                        name="عدد الجهات"
                                        stroke="#3b82f6"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorGrowth)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Donut Charts Column */}
                    <div className="space-y-6">
                        {/* Type Distribution */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1">
                            <h3 className="font-bold text-slate-800 mb-4">توزيع أنواع الوسائل</h3>
                            <div className="h-[200px] w-full" dir="ltr">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={typeData}
                                            cx="50%" cy="50%"
                                            innerRadius={60} outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {typeData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={TYPE_COLORS[index]} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip content={<CustomTooltip />} />
                                        <Legend verticalAlign="bottom" height={36} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Status Distribution */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1">
                            <h3 className="font-bold text-slate-800 mb-4">حالة النشاط</h3>
                            <div className="h-[200px] w-full" dir="ltr">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={statusData}
                                            cx="50%" cy="50%"
                                            innerRadius={60} outerRadius={80}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {statusData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={STATUS_COLORS[index]} />
                                            ))}
                                        </Pie>
                                        <RechartsTooltip content={<CustomTooltip />} />
                                        <Legend verticalAlign="bottom" height={36} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Regions & Founders */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Regional Density */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-slate-800 text-lg">الكثافة الجغرافية</h3>
                        </div>
                        <div className="h-[350px] w-full overflow-y-auto custom-scrollbar pr-2" dir="ltr">
                            <ResponsiveContainer width="100%" height={regionalData.length * 50}>
                                <BarChart data={regionalData} layout="vertical" margin={{ left: 40, right: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                                    <XAxis type="number" hide />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        width={100}
                                        tick={{ fill: '#475569', fontSize: 13, fontWeight: 500 }}
                                        axisLine={false}
                                    />
                                    <RechartsTooltip cursor={{ fill: '#f8fafc' }} content={<CustomTooltip />} />
                                    <Bar dataKey="count" name="عدد الجهات" fill="#3b82f6" radius={[0, 6, 6, 0]} barSize={24} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Top Founders List */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-lg mb-6">رواد الإعلام السعودي</h3>
                        <div className="space-y-4">
                            {topFounders.map((founder, i) => (
                                <div key={i} className="group flex items-center justify-between p-4 bg-slate-50/50 hover:bg-white rounded-xl border border-slate-100 hover:border-blue-100 hover:shadow-sm transition-all duration-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 flex items-center justify-center font-bold text-lg shadow-inner">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{founder.name}</p>
                                            <p className="text-xs text-slate-500">{founder.role}</p>
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{founder.count}</span>
                                        <span className="text-xs text-slate-400">تأسيس</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


