"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from "chart.js";
import { Skeleton } from "@/components/ui/skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface RevenueChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
  loading?: boolean;
}

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
        },
        color: "#6B7280",
      },
    },
    y: {
      grid: {
        color: "#E5E7EB",
      },
      ticks: {
        font: {
          size: 12,
        },
        color: "#6B7280",
        callback: (value) => {
          return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(value as number);
        },
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
    point: {
      radius: 4,
      hoverRadius: 6,
    },
  },
};

export default function RevenueChart({ data, loading = false }: RevenueChartProps) {
  if (loading) {
    return (
      <div className="w-full h-[300px] bg-white rounded-xl p-4">
        <div className="space-y-3">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-[250px] w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[300px] bg-white rounded-xl p-4">
      <Line options={options} data={data} />
    </div>
  );
} 