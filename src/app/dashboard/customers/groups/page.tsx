"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Plus,
  Edit,
  Trash2,
  Search,
  MoreHorizontal,
  Download,
  Filter,
  UserCheck,
  UserX,
  ShoppingBag,
  Calendar,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Group {
  id: number;
  name: string;
  description: string;
  totalClients: number;
  totalValue: number;
  createdAt: string;
}

interface Metrics {
  totalGroups: number;
  totalClientsInGroups: number;
  totalValueInGroups: number;
  averageClientsPerGroup: number;
}

export default function GroupsPage() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSort, setCurrentSort] = useState({ field: "name", direction: "asc" });
  const [metrics, setMetrics] = useState<Metrics>({
    totalGroups: 0,
    totalClientsInGroups: 0,
    totalValueInGroups: 0,
    averageClientsPerGroup: 0
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      setLoadingMetrics(true);

      // Fetch groups
      const groupsResponse = await fetch('/api/customers/groups');
      if (!groupsResponse.ok) throw new Error('Failed to fetch groups');
      const groupsData = await groupsResponse.json();
      setGroups(groupsData);

      // Fetch metrics
      const metricsResponse = await fetch('/api/customers/groups/metrics');
      if (!metricsResponse.ok) throw new Error('Failed to fetch metrics');
      const metricsData = await metricsResponse.json();
      setMetrics(metricsData);

    } catch (error) {
      toast.error('Erro ao carregar dados');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setLoadingMetrics(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSort = (field: string) => {
    setCurrentSort(prev => ({
      field,
      direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  const sortedGroups = [...groups].sort((a, b) => {
    if (currentSort.field === "totalClients" || currentSort.field === "totalValue") {
      const aValue = a[currentSort.field];
      const bValue = b[currentSort.field];
      return currentSort.direction === "asc" 
        ? aValue - bValue 
        : bValue - aValue;
    } else {
      const aValue = a[currentSort.field].toString();
      const bValue = b[currentSort.field].toString();
      return currentSort.direction === "asc" 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
  });

  const filteredGroups = sortedGroups.filter(g => 
    g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Users className="mr-2 h-6 w-6 text-[#E85A27]" /> Grupos de Clientes
        </h1>
        <Button 
          className="bg-[#E85A27] hover:bg-[#d04a20] text-white flex items-center"
          asChild
        >
          <Link href="/dashboard/customers/groups/novo">
            <Plus className="mr-2 h-5 w-5" /> Novo Grupo
          </Link>
        </Button>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Total de Grupos</div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-[#252E54] mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalGroups}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Clientes em Grupos</div>
          <div className="flex items-center">
            <UserCheck className="h-5 w-5 text-green-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalClientsInGroups}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Valor Total</div>
          <div className="flex items-center">
            {loadingMetrics ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <div className="text-2xl font-bold text-green-600">R$ {metrics.totalValueInGroups.toFixed(2)}</div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Média por Grupo</div>
          <div className="flex items-center">
            <ShoppingBag className="h-5 w-5 text-[#252E54] mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.averageClientsPerGroup}</div>
            )}
          </div>
        </div>
      </div>
      
      {/* Tabela de grupos */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar por nome ou descrição..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full border rounded p-2 text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" className="text-gray-500" size="sm">
              <Filter className="mr-2 h-4 w-4" /> Mais Filtros
            </Button>
            <Button variant="outline" className="text-gray-500" size="sm">
              <Download className="mr-2 h-4 w-4" /> Exportar
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("name")}>
                    Nome
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("description")}>
                    Descrição
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("totalClients")}>
                    Total de Clientes
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("totalValue")}>
                    Valor Total
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("createdAt")}>
                    Data de Criação
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-32" />
                    </td>
                    <td className="px-6 py-4">
                      <Skeleton className="h-4 w-48" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-16" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-24" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Skeleton className="h-4 w-24" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Skeleton className="h-8 w-8 ml-auto" />
                    </td>
                  </tr>
                ))
              ) : (
                filteredGroups.map((group) => (
                  <tr key={group.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{group.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">{group.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{group.totalClients}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">R$ {group.totalValue.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{group.createdAt}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 