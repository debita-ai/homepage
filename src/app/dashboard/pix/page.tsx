"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Plus, Edit, Trash2, Search, MoreHorizontal, Download, Filter, CheckCircle, XCircle, Clock, ArrowUpDown, Calendar, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Pix {
  id: number;
  transacao: string;
  cliente: string;
  valor: number;
  data: string;
  status: string;
  email: string;
  telefone: string;
}

interface Metrics {
  totalConcluido: number;
  totalPendente: number;
  totalCancelado: number;
  valorTotal: number;
  transacoesHoje: number;
}

export default function PixPage() {
  const [pix, setPix] = useState<Pix[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSort, setCurrentSort] = useState({ field: "data", direction: "desc" });
  const [statusFilter, setStatusFilter] = useState("todos");
  const [metrics, setMetrics] = useState<Metrics>({
    totalConcluido: 0,
    totalPendente: 0,
    totalCancelado: 0,
    valorTotal: 0,
    transacoesHoje: 0
  });
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setLoadingMetrics(true);

      // Fetch PIX transactions
      const pixResponse = await fetch('/api/pix/transactions');
      if (!pixResponse.ok) throw new Error('Failed to fetch PIX transactions');
      const pixData = await pixResponse.json();
      setPix(pixData);

      // Fetch metrics
      const metricsResponse = await fetch('/api/pix/metrics');
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

  const sortedPix = [...pix].sort((a, b) => {
    if (currentSort.field === "valor") {
      return currentSort.direction === "asc" ? a.valor - b.valor : b.valor - a.valor;
    } else {
      // Sort by string fields
      const aValue = a[currentSort.field].toString();
      const bValue = b[currentSort.field].toString();
      return currentSort.direction === "asc" 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
  });

  const filteredPix = sortedPix.filter(p => 
    (statusFilter === "todos" || p.status === statusFilter) &&
    (p.transacao.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
     p.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Zap className="mr-2 h-6 w-6 text-orange-500" /> Transações Pix
        </h1>

      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Transações Concluídas</div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalConcluido}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Transações Pendentes</div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-amber-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalPendente}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Transações Canceladas</div>
          <div className="flex items-center">
            <XCircle className="h-5 w-5 text-red-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalCancelado}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Valor Recebido</div>
          <div className="flex items-center">
            {loadingMetrics ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <div className="text-2xl font-bold text-green-600">R$ {metrics.valorTotal.toFixed(2)}</div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Transações Hoje</div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-blue-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.transacoesHoje}</div>
            )}
          </div>
        </div>
      </div>
      
      {/* Tabela de transações */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Pesquisar por transação, cliente ou email..."
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
              <option value="todos">Todos os status</option>
              <option value="concluido">Concluídos</option>
              <option value="pendente">Pendentes</option>
              <option value="cancelado">Cancelados</option>
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
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("transacao")}>
                    Transação
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("cliente")}>
                    Cliente
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("valor")}>
                    Valor
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("data")}>
                    Data
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("status")}>
                    Status
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contato</th>
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
                : filteredPix.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.transacao}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {item.cliente}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        R$ {item.valor.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {item.data}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                            item.status === "concluido"
                              ? "bg-green-100 text-green-800"
                              : item.status === "pendente"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.status === "concluido" ? "Concluído" : item.status === "pendente" ? "Pendente" : "Cancelado"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div>
                          <div>{item.email}</div>
                          <div>{item.telefone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="sm" title="Comprovante">
                            <ExternalLink className="h-4 w-4 text-gray-500" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Editar">
                            <Edit className="h-4 w-4 text-orange-500" />
                          </Button>
                          <Button variant="ghost" size="sm" title="Excluir">
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          
          {!loading && filteredPix.length === 0 && (
            <div className="py-12 text-center">
              <div className="flex flex-col items-center justify-center text-gray-500">
                <Zap className="h-12 w-12 mb-4 text-gray-400" />
                <p className="text-lg font-medium">Nenhuma transação PIX encontrada</p>
                <p className="text-sm mt-1">Não há transações para exibir no momento</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer com paginação */}
      {!loading && filteredPix.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Mostrando {filteredPix.length} de {pix.length} transações
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Anterior
            </Button>
            <Button variant="default" size="sm" className="bg-orange-500 text-white">
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