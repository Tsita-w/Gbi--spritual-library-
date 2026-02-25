// This curly brace import matches 'export function DashboardUI'
import { DashboardUI } from "@/components/admin/dashboard/dashboard-ui";

export default function AdminPage() {
  const mockStats = {
    totalBooks: 1240,
    borrowedBooks: 450,
    lateReturns: 23,
    totalBirr: 15600
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-black text-[#1E3A8A] uppercase italic leading-none">
          System <span className="text-[#FBBF24]">Dashboard</span>
        </h1>
        <p className="text-[#94A3B8] font-bold text-[10px] tracking-[0.2em] uppercase mt-2">
          Sanctum Node / Performance Metrics
        </p>
      </div>

      {/* Now TypeScript knows 'stats' is allowed and required */}
      <DashboardUI stats={mockStats} />
    </div>
  );
}