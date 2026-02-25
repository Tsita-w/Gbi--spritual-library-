import { DashboardUI } from "@/components/admin/dashboard/dashboard-ui";

export default function AdminPage() {
  // Integration: In the future, fetch this data from your API
  const mockStats = {
    totalBooks: 1240,
    borrowedBooks: 450,
    lateReturns: 23,
    totalBirr: 15600
  };

  return <DashboardUI stats={mockStats} />;
}