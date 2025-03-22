import { ReactNode } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: string;
  loading?: boolean;
}

export function StatCard({ title, value, icon, color, loading = false }: StatCardProps) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <Skeleton className="h-8 w-1/3 mb-4" />
        <Skeleton className="h-10 w-2/3" />
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm ${color}`}>
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</span>
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
} 