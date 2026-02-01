import { LayoutDashboard, Newspaper, ShieldCheck, Settings, Users } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-100">
            <aside className="w-64 bg-slate-900 text-slate-50 fixed h-full hidden md:block">
                <div className="p-6 border-b border-slate-800">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        دليل Admin
                    </div>
                    <div className="text-xs text-slate-500 mt-1">نسخة تجريبية داخلية</div>
                </div>
                <nav className="p-4 space-y-2">
                    <a href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 text-white">
                        <LayoutDashboard size={20} />
                        <span>لوحة المعلومات</span>
                    </a>
                    <a href="/admin/entities" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                        <Newspaper size={20} />
                        <span>الجهات الإعلامية</span>
                    </a>
                    <a href="/admin/founders" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                        <Users size={20} />
                        <span>الشخصيات والمؤسسون</span>
                    </a>
                    <a href="/admin/verification" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                        <ShieldCheck size={20} />
                        <span>سجل التحقق</span>
                    </a>
                    {/* Mock settings */}
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                        <Settings size={20} />
                        <span>الإعدادات</span>
                    </a>
                </nav>
            </aside>
            <main className="flex-1 md:mr-64 p-8">
                {children}
            </main>
        </div>
    );
}
