"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  UserCircle,
  Plus,
  Edit,
  Trash2,
  Search,
  MoreHorizontal,
  Download,
  Filter,
  Users,
  UserCheck,
  UserX,
  ShoppingBag,
  Calendar,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  lastPurchase: string;
  totalPurchases?: number;
  value?: number;
}

interface Metrics {
  totalClients: number;
  totalActive: number;
  totalInactive: number;
  totalValue: number;
  clientsWithPurchaseThisMonth: number;
}

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSort, setCurrentSort] = useState({ field: "name", direction: "asc" });
  const [statusFilter, setStatusFilter] = useState("todos");
  const [metrics, setMetrics] = useState<Metrics>({
    totalClients: 0,
    totalActive: 0,
    totalInactive: 0,
    totalValue: 0,
    clientsWithPurchaseThisMonth: 0
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      setLoadingMetrics(true);

      // Fetch clients
      const clientsResponse = await fetch('/api/customers');
      if (!clientsResponse.ok) throw new Error('Failed to fetch clients');
      const clientsData = await clientsResponse.json();
      setClients(clientsData);

      // Fetch metrics
      const metricsResponse = await fetch('/api/customers/metrics');
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

  const sortedClients = [...clients].sort((a, b) => {
    if (currentSort.field === "totalPurchases" || currentSort.field === "value") {
      const aValue = a[currentSort.field] || 0;
      const bValue = b[currentSort.field] || 0;
      return currentSort.direction === "asc" 
        ? aValue - bValue 
        : bValue - aValue;
    } else {
      // Sort by string fields
      const aValue = a[currentSort.field].toString();
      const bValue = b[currentSort.field].toString();
      return currentSort.direction === "asc" 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
  });

  const filteredClients = sortedClients.filter(c => 
    (statusFilter === "todos" || c.status === statusFilter) &&
    (c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
     c.phone.includes(searchTerm))
  );

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Users className="mr-2 h-6 w-6 text-[#E85A27]" /> Meus Clientes
        </h1>
        <Button 
          className="bg-[#E85A27] hover:bg-[#d04a20] text-white flex items-center"
          asChild
        >
          <Link href="/dashboard/clientes/novo">
            <Plus className="mr-2 h-5 w-5" /> Novo Cliente
          </Link>
        </Button>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Total de Clientes</div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-[#252E54] mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalClients}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Clientes Ativos</div>
          <div className="flex items-center">
            <UserCheck className="h-5 w-5 text-green-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalActive}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Clientes Inativos</div>
          <div className="flex items-center">
            <UserX className="h-5 w-5 text-red-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalInactive}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Valor Total</div>
          <div className="flex items-center">
            {loadingMetrics ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <div className="text-2xl font-bold text-green-600">R$ {metrics.totalValue.toFixed(2)}</div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Compras Este Mês</div>
          <div className="flex items-center">
            <ShoppingBag className="h-5 w-5 text-[#252E54] mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.clientsWithPurchaseThisMonth}</div>
            )}
          </div>
        </div>
      </div>
      
      {/* Tabela de clientes */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Buscar por nome, email ou telefone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full border rounded p-2 text-sm"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border rounded p-2 text-sm"
            >
              <option value="todos">Todos</option>
              <option value="ativo">Ativos</option>
              <option value="inativo">Inativos</option>
            </select>
            
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
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("email")}>
                    Email
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("phone")}>
                    Telefone
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("status")}>
                    Status
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("lastPurchase")}>
                    Última Compra
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("totalPurchases")}>
                    Total Compras
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading
                ? Array(5).fill(0).map((_, i) => (
                    <tr key={i} className="bg-white">
                      {Array(7).fill(0).map((_, j) => (
                        <td key={j} className="px-6 py-4">
                          <Skeleton className="h-4 w-full" />
                        </td>
                      ))}
                    </tr>
                  ))
                : filteredClients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-400">
                            <UserCircle className="h-6 w-6" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{client.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-400 mr-2" />
                          {client.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {client.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                            client.status === "ativo"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {client.status === "ativo" ? "Ativo" : "Inativo"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                          {client.lastPurchase}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex items-center">
                          <ShoppingBag className="h-4 w-4 text-gray-400 mr-2" />
                          <span>{client.totalPurchases} compras</span>
                          <span className="ml-2 text-green-600">R$ {client.value?.toFixed(2)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="sm" title="Editar">
                            <Edit className="h-4 w-4 text-[#E85A27]" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Excluir">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Mais opções">
                            <MoreHorizontal className="h-4 w-4 text-gray-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          
          {!loading && filteredClients.length === 0 && (
            <div className="py-12 text-center">
              <div className="flex flex-col items-center justify-center">
                <Users className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900">Nenhum cliente encontrado</p>
                <p className="text-sm text-gray-500 mt-1">Não há clientes para exibir no momento.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer com paginação */}
      {!loading && filteredClients.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Mostrando {filteredClients.length} de {clients.length} clientes
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Anterior
            </Button>
            <Button variant="default" size="sm" className="bg-[#E85A27] hover:bg-[#d04a20] text-white">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              Próximo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}