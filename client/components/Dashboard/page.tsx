"use client";

export default function DashboardHome() {
  const stats = [
    { label: 'Total Books', value: '1,240', color: 'bg-blue-600' },
    { label: 'Borrowed', value: '86', color: 'bg-[#fbbf24]' },
    { label: 'New Members', value: '12', color: 'bg-green-500' },
    { label: 'Overdue', value: '3', color: 'bg-red-500' },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-black text-[#1e3a8a]">Welcome Back, Librarian!</h2>
        <p className="text-gray-500 mt-1 italic">Preserving wisdom, one book at a time.</p>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
            <div className={`absolute top-0 right-0 w-2 h-full ${stat.color}`}></div>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            <p className="text-4xl font-black text-[#1e3a8a] mt-2 group-hover:scale-110 transition-transform origin-left">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* RECENT ACTIVITY TABLE */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-[#1e3a8a] mb-6">Recent Book Requests</h3>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm uppercase tracking-tighter border-b border-gray-100">
              <th className="pb-4 font-black">Member Name</th>
              <th className="pb-4 font-black">Book Title</th>
              <th className="pb-4 font-black">Date Requested</th>
              <th className="pb-4 font-black">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[1, 2, 3].map((_, i) => (
              <tr key={i} className="group hover:bg-gray-50 transition-colors">
                <td className="py-4 font-bold text-gray-800">Abebe Balcha</td>
                <td className="py-4 text-gray-600">The Miracles of Mary (ተአምረ ማርያም)</td>
                <td className="py-4 text-gray-500 text-sm">Oct 24, 2026</td>
                <td className="py-4">
                  <span className="px-3 py-1 bg-yellow-100 text-[#b45309] rounded-full text-xs font-bold uppercase">Pending</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}