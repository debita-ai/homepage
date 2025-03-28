"use client";

import { useState, useEffect } from "react";
import { LucideLink, Plus, Edit, Trash2, Search, Copy, ExternalLink, CheckCircle, XCircle, Filter, Download, Clock, ArrowUpDown, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { toast } from "sonner";

interface LinkPagamento {
  id: number;
  nome: string;
  link: string;
  valor: number;
  status: string;
  dataCriacao: string;
  dataExpiracao: string;
  clicks: number;
}

interface Metrics {
  totalAtivos: number;
  totalExpirados: number;
  totalPagos: number;
  valorTotal: number;
}

export default function LinksPage() {
  const [links, setLinks] = useState<LinkPagamento[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({
    totalAtivos: 0,
    totalExpirados: 0,
    totalPagos: 0,
    valorTotal: 0
  });
  const [loading, setLoading] = useState(true);
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentSort, setCurrentSort] = useState({ field: "dataCriacao", direction: "desc" });
  const [statusFilter, setStatusFilter] = useState("todos");

  const fetchMetrics = async () => {
    try {
      const response = await fetch('/api/links/metrics');
      if (!response.ok) throw new Error('Failed to fetch metrics');
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      toast.error('Erro ao carregar métricas');
      console.error('Error fetching metrics:', error);
    } finally {
      setLoadingMetrics(false);
    }
  };

  const fetchLinks = async () => {
    try {
      const response = await fetch('/api/links');
      if (!response.ok) throw new Error('Failed to fetch links');
      const data = await response.json();
      setLinks(data);
    } catch (error) {
      toast.error('Erro ao carregar links');
      console.error('Error fetching links:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
    fetchMetrics();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/links/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete link');
      
      setLinks(links.filter(link => link.id !== id));
      toast.success('Link excluído com sucesso');
    } catch (error) {
      toast.error('Erro ao excluir link');
      console.error('Error deleting link:', error);
    }
  };

  const handleCopy = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      toast.success('Link copiado para a área de transferência');
    } catch (error) {
      toast.error('Erro ao copiar link');
      console.error('Error copying link:', error);
    }
  };

  const handleEdit = async (id: number, updatedData: Partial<LinkPagamento>) => {
    try {
      const response = await fetch(`/api/links/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error('Failed to update link');
      
      const updatedLink = await response.json();
      setLinks(links.map(link => 
        link.id === id ? { ...link, ...updatedLink } : link
      ));
      toast.success('Link atualizado com sucesso');
    } catch (error) {
      toast.error('Erro ao atualizar link');
      console.error('Error updating link:', error);
    }
  };

  const handleCreate = async (newLink: Omit<LinkPagamento, 'id'>) => {
    try {
      const response = await fetch('/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLink),
      });

      if (!response.ok) throw new Error('Failed to create link');
      
      const createdLink = await response.json();
      setLinks([...links, createdLink]);
      setShowModal(false);
      toast.success('Link criado com sucesso');
    } catch (error) {
      toast.error('Erro ao criar link');
      console.error('Error creating link:', error);
    }
  };

  const handleSort = (field: string) => {
    setCurrentSort(prev => ({
      field,
      direction: prev.field === field && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  const sortedLinks = [...links].sort((a, b) => {
    if (currentSort.field === "valor") {
      return currentSort.direction === "asc" ? a.valor - b.valor : b.valor - a.valor;
    } else if (currentSort.field === "clicks") {
      return currentSort.direction === "asc" ? a.clicks - b.clicks : b.clicks - a.clicks;
    } else {
      // Sort by string fields
      const aValue = a[currentSort.field].toString();
      const bValue = b[currentSort.field].toString();
      return currentSort.direction === "asc" 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
  });

  const filteredLinks = sortedLinks.filter(l => 
    (statusFilter === "todos" || l.status === statusFilter) &&
    (l.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
     l.link.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <LucideLink className="mr-2 h-6 w-6 text-blue-500" /> Links de Pagamento
        </h1>
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white flex items-center"
          onClick={() => setShowModal(true)}  
        >
          <Plus className="mr-2 h-5 w-5" /> Criar Novo Link
        </Button>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Links Ativos</div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalAtivos}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Links Expirados</div>
          <div className="flex items-center">
            <XCircle className="h-5 w-5 text-red-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalExpirados}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Links Pagos</div>
          <div className="flex items-center">
            <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
            {loadingMetrics ? (
              <Skeleton className="h-8 w-16" />
            ) : (
              <div className="text-2xl font-bold">{metrics.totalPagos}</div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="text-sm font-medium text-gray-500 mb-2">Valor Recebido</div>
          <div className="flex items-center">
            {loadingMetrics ? (
              <Skeleton className="h-8 w-24" />
            ) : (
              <div className="text-2xl font-bold text-green-600">R$ {metrics.valorTotal.toFixed(2)}</div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Pesquisar por nome ou link..."
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
              <option value="ativo">Ativos</option>
              <option value="expirado">Expirados</option>
              <option value="pago">Pagos</option>
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
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("nome")}>
                    Nome
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Link</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("valor")}>
                    Valor
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("status")}>
                    Status
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("dataCriacao")}>
                    Criado
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("dataExpiracao")}>
                    Expira
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  <div className="flex items-center cursor-pointer" onClick={() => handleSort("clicks")}>
                    Clicks
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading
                ? Array(4).fill(0).map((_, i) => (
                    <tr key={i} className="bg-white">
                      {Array(8).fill(0).map((_, j) => (
                        <td key={j} className="px-6 py-4">
                          <Skeleton className="h-4 w-full" />
                        </td>
                      ))}
                    </tr>
                  ))
                : filteredLinks.map((link) => (
                    <tr key={link.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {link.nome}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex items-center">
                          <span className="truncate max-w-xs">{link.link}</span>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="ml-2" 
                            onClick={() => handleCopy(link.link)}
                            title="Copiar link"
                          >
                            <Copy className="h-4 w-4 text-gray-500" />
                          </Button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        R$ {link.valor.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                            link.status === "ativo"
                              ? "bg-green-100 text-green-800"
                              : link.status === "expirado"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {link.status === "ativo" ? "Ativo" : link.status === "expirado" ? "Expirado" : "Pago"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {link.dataCriacao}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {link.dataExpiracao}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {link.clicks}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="sm" title="Visualizar">
                            <ExternalLink className="h-4 w-4 text-gray-500" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            title="Editar"
                            onClick={() => handleEdit(link.id, { /* Add edit data here */ })}
                          >
                            <Edit className="h-4 w-4 text-blue-500" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            title="Excluir"
                            onClick={() => handleDelete(link.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
          
          {!loading && filteredLinks.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              Nenhum link encontrado com os filtros selecionados.
            </div>
          )}
        </div>
      </div>

      {/* Footer com paginação */}
      {!loading && filteredLinks.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Mostrando {filteredLinks.length} de {links.length} links
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="default" size="sm" className="bg-blue-500 text-white">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Modal de criação de novo link - seria implementado com um componente de Dialog/Modal */}
      {/* Na implementação real, você usaria um componente Dialog do shadcn/ui */}
    </div>
  );
}