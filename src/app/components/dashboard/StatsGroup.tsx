import { ReactNode } from 'react';
import { Skeleton } from "@/components/ui/skeleton";

export interface StatItem {
  label: string;
  value: string | number;
  color?: string;
}

export interface StatsGroupProps {
  title: string;
  icon: ReactNode;
  stats: StatItem[];
  loading?: boolean;
}

export function StatsGroup({ title, icon, stats, loading = false }: StatsGroupProps) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-24 ml-2" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      </div>
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
            <span className={`font-medium ${stat.color || 'text-gray-900 dark:text-gray-100'}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 