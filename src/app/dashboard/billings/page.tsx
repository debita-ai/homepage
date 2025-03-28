"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FileText, 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  MoreHorizontal, 
  Download, 
  Filter, 
  CheckCircle, 
  XCircle, 
  Clock, 
  ArrowUpDown, 
  Calendar, 
  CreditCard, 
  FileBarChart,
  Wallet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface Cobranca {
  id: number;
  transacao: string;
  cliente: string;
  valor: number;
  tipo: string;
  data: string;
  status: string;
  email: string;
  telefone: string;
  vencimento?: string;
}

interface Metrics {
  totalPago: number;
  totalPendente: number;
  totalCancelado: number;
  valorRecebido: number;
  cobrancasHoje: number;
}

export default function CobrancasPage() {
  const [cobrancas, setCobrancas] = useState<Cobranca[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSort, setCurrentSort] = useState({ field: "data", direction: "desc" });
  const [statusFilter, setStatusFilter] = useState("todos");
  const [tipoFilter, setTipoFilter] = useState("todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(10);
  const [metrics, setMetrics] = useState<Metrics>({
    totalPago: 0,
    totalPendente: 0,
    totalCancelado: 0,
    valorRecebido: 0,
    cobrancasHoje: 0
  });
  
  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch billings with all parameters
      const billingsResponse = await fetch(
        `/api/billings?page=${currentPage}&limit=${itemsPerPage}&search=${searchTerm}&status=${statusFilter}&tipo=${tipoFilter}&sortField=${currentSort.field}&sortDirection=${currentSort.direction}`
      );
      
      if (!billingsResponse.ok) throw new Error('Failed to fetch billings');
      const data = await billingsResponse.json();
      
      setCobrancas(data.billings);
      setTotalPages(data.pagination.totalPages);
      setMetrics(data.metrics);

    } catch (error) {
      toast.error('Erro ao carregar dados');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, searchTerm, statusFilter, tipoFilter, currentSort, fetchData]);

  const handleSort = (field: string) => {
    setCurrentSort(prev => ({
      field,
      direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  const getIconByTipo = (tipo: string) => {
    switch(tipo) {
      case "pix":
        return <Wallet className="h-4 w-4 text-green-600" />;
      case "boleto":
        return <FileBarChart className="h-4 w-4 text-blue-600" />;
      case "cartao":
        return <CreditCard className="h-4 w-4 text-purple-600" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600" />;
    }
  };

  const tipoLabel = (tipo: string) => {
    switch(tipo) {
      case "pix":
        return "PIX";
      case "boleto":
        return "Boleto";
      case "cartao":
        return "Cartão";
      default:
        return tipo;
    }
  };

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <FileText className="mr-2 h-6 w-6 text-[#E85A27]" /> Cobranças
        </h1>
        <Button 
          className="bg-[#E85A27] hover:bg-[#d04a20] text-white flex items-center"
          asChild
        >
          <Link href="/dashboard/cobrancas/novo">
            <Plus className="mr-2 h-5 w-5" /> Nova Cobrança
          </Link>
        </Button>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Cobranças Pagas</div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            {loading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalPago}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Cobranças Pendentes</div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-amber-500 mr-2" />
            {loading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalPendente}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Cobranças Canceladas</div>
          <div className="flex items-center">
            <XCircle className="h-5 w-5 text-red-500 mr-2" />
            {loading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalCancelado}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Valor Recebido</div>
          <div className="flex items-center">
            {loading ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <div className="text-2xl font-bold text-green-600">R$ {metrics.valorRecebido.toFixed(2)}</div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Cobranças Hoje</div>
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-[#252E54] mr-2" />
            {loading ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.cobrancasHoje}</div>
            )}
          </div>
        </div>
      </div>
      
      {/* Tabela de cobranças */}
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
              <option value="pago">Pagos</option>
              <option value="pendente">Pendentes</option>
              <option value="cancelado">Cancelados</option>
            </select>
            
            <select 
              value={tipoFilter}
              onChange={(e) => setTipoFilter(e.target.value)}
              className="border rounded p-2 text-sm"
            >
              <option value="todos">Todos os tipos</option>
              <option value="pix">PIX</option>
              <option value="boleto">Boleto</option>
              <option value="cartao">Cartão de Crédito</option>
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
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("tipo")}>
                    Tipo
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
                      {Array(8).fill(0).map((_, j) => (
                        <td key={j} className="px-6 py-4">
                          <Skeleton className="h-4 w-full" />
                        </td>
                      ))}
                    </tr>
                  ))
                : cobrancas.map((item) => (
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
                        <div className="flex items-center space-x-1">
                          {getIconByTipo(item.tipo)}
                          <span>{tipoLabel(item.tipo)}</span>
                          {item.tipo === "boleto" && item.vencimento && (
                            <span className="text-xs text-gray-500 ml-1">
                              (Venc: {item.vencimento})
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {item.data}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                            item.status === "pago"
                              ? "bg-green-100 text-green-800"
                              : item.status === "pendente"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {item.status === "pago" ? "Pago" : item.status === "pendente" ? "Pendente" : "Cancelado"}
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
                          {item.status === "pago" && (
                            <Button variant="ghost" size="sm" title="Comprovante">
                              <FileText className="h-4 w-4 text-[#252E54]" />
                            </Button>
                          )}
                          <Button variant="ghost" size="sm" title="Editar">
                            <Edit className="h-4 w-4 text-[#E85A27]" />
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
          
          {!loading && cobrancas.length === 0 && (
            <div className="py-12 text-center">
              <div className="flex flex-col items-center justify-center">
                <FileText className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900">Nenhuma cobrança encontrada</p>
                <p className="text-sm text-gray-500 mt-1">Não há cobranças para exibir no momento.</p>
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              Mostrando {((currentPage - 1) * itemsPerPage) + 1} a {Math.min(currentPage * itemsPerPage, metrics.totalPago)} de {metrics.totalPago} cobranças
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </Button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Próxima
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}