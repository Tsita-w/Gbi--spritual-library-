"use client";
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: 'Overview', icon: '📊', path: '/dashboard' },
    { name: 'Books Library', icon: '📚', path: '/dashboard/books' },
    { name: 'Members', icon: '👥', path: '/dashboard/members' },
    { name: 'Borrowing', icon: '📝', path: '/dashboard/loans' },
    { name: 'Settings', icon: '⚙️', path: '/dashboard/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-72 bg-[#1e3a8a] text-white flex flex-col shadow-2xl">
        <div className="p-8 text-2xl font-black tracking-tighter border-b border-blue-800">
          GIBI <span className="text-[#fbbf24]">GUBAE</span>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer group">
                <span className="text-xl group-hover:scale-120 transition-transform">{item.icon}</span>
                <span className="font-semibold text-blue-100 group-hover:text-white">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-blue-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-300 font-bold hover:bg-red-500/10 rounded-xl transition">
            <span>Logout</span> 🚪
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* TOP HEADER */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-10 shadow-sm">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search for spiritual books..."
              className="w-full bg-gray-100 py-2.5 pl-12 pr-4 rounded-full border-none focus:ring-2 focus:ring-[#fbbf24] transition-all"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-900">Mulugeta K.</p>
              <p className="text-xs text-blue-600 font-medium tracking-wide uppercase">Chief Librarian</p>
            </div>
            <div className="w-12 h-12 bg-[#fbbf24] rounded-full border-4 border-white shadow-md"></div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <section className="flex-1 overflow-y-auto p-10">
          {children}
        </section>
      </main>
    </div>
  );
}