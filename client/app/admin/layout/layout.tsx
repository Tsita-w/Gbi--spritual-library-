import { AdminSidebar } from "@/components/admin/layout/admin-sidebar";
import { Bell, Search, UserCircle } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#f8fafc] overflow-hidden">
      {/* Sidebar - Implementation call */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-10 shrink-0">
          <div className="relative w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Query system records..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-12 pr-4 outline-none focus:border-secondary/30 focus:ring-4 focus:ring-secondary/5 transition-all text-sm font-medium"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer hover:scale-110 transition">
              <Bell size={22} className="text-slate-600" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </div>

            <div className="h-10 w-[1px] bg-slate-200"></div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-secondary uppercase tracking-tighter">Admin Node_01</p>
                <p className="text-[10px] font-bold text-primary bg-secondary px-2 py-0.5 rounded-md inline-block">SYSTEM OVERSEER</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                <UserCircle size={32} className="text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-10 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}