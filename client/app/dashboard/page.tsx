// app/admin/dashboard/page.tsx
 import  Dashboard  from '@/components/Dashboard/page';;
// Note: If your file is named Dashboard.tsx, use "@/components/admin/dashboard/Dashboard"

export default function AdminDashboardPage() {
  return (
    <div className="p-6">
      <Dashboard />
    </div>
  );
}