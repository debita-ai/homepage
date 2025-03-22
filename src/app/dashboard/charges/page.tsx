"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Plus, 
  Search, 
  Filter,
  ArrowUpDown,
  Zap,
  Link as LinkIcon,
  Download,
  MoreHorizontal,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";
import { useApi } from "@/lib/hooks/useApi";
import api from "@/app/services/api";

interface Charge {
  id: number;
  transaction: string;
  client: string;
  amount: number;
  type: string;
  date: string;
  status: 'PAID' | 'PENDING' | 'CANCELLED';
  contact: string;
}

interface ChargesResponse {
  charges: Charge[];
  total: number;
}

export default function ChargesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  const { data: charges, loading, error, execute: fetchCharges } = useApi<Charge[]>(
    async () => {
      try {
        const response = await api.get<ChargesResponse>("/charges", {
          params: {
            search,
            status,
            skip: (page - 1) * perPage,
            take: perPage,
          },
        });
        console.log('API Response:', response.data);
        return response.data.charges;
      } catch (error) {
        console.error("Error fetching charges:", error);
        return [];
      }
    },
    {
      cacheKey: `charges-${search}-${status}-${page}`,
      cacheTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  // Add effect to log charges when they change
  useEffect(() => {
    console.log('Current charges:', charges);
  }, [charges]);

  // Fetch charges when search, status, or page changes
  useEffect(() => {
    fetchCharges();
  }, [search, status, page, fetchCharges]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID':
        return 'text-green-600 bg-green-50';
      case 'PENDING':
        return 'text-amber-600 bg-amber-50';
      case 'CANCELLED':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PIX':
        return <Zap className="h-4 w-4" />;
      case 'BOLETO':
        return <FileText className="h-4 w-4" />;
      case 'LINK':
        return <LinkIcon className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (date: string) => {
    return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page when searching
  };

  const handleStatusChange = (newStatus: string | null) => {
    setStatus(newStatus);
    setPage(1); // Reset to first page when changing status
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cobranças</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/dashboard/charges/export")}>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button 
            className="bg-[#E85A27] hover:bg-[#D64A1A] text-white"
            onClick={() => router.push("/dashboard/charges/new")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Cobrança
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Buscar cobranças..."
                  className="pl-10"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={status === null ? "default" : "outline"}
                onClick={() => handleStatusChange(null)}
              >
                Todos
              </Button>
              <Button 
                variant={status === 'PENDING' ? "default" : "outline"}
                onClick={() => handleStatusChange('PENDING')}
              >
                Pendentes
              </Button>
              <Button 
                variant={status === 'PAID' ? "default" : "outline"}
                onClick={() => handleStatusChange('PAID')}
              >
                Pagos
              </Button>
              <Button 
                variant={status === 'CANCELLED' ? "default" : "outline"}
                onClick={() => handleStatusChange('CANCELLED')}
              >
                Cancelados
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Transação
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Cliente
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Valor
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">Tipo</th>
                  <th className="text-left p-4 font-medium text-gray-500">Status</th>
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Data
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-right p-4 font-medium text-gray-500">Ações</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array(5).fill(0).map((_, i) => (
                    <tr key={i} className="border-b animate-pulse">
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-32"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-32"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-16"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-8 ml-auto"></div></td>
                    </tr>
                  ))
                ) : error ? (
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-red-600">
                      Erro ao carregar cobranças. Tente novamente.
                    </td>
                  </tr>
                ) : !charges || charges.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-gray-500">
                      Nenhuma cobrança encontrada.
                    </td>
                  </tr>
                ) : (
                  charges.map((charge) => (
                    <tr key={charge.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{charge.transaction}</td>
                      <td className="p-4">
                        <div>
                          <div className="font-medium">{charge.client}</div>
                          <div className="text-sm text-gray-500">{charge.contact}</div>
                        </div>
                      </td>
                      <td className="p-4 font-medium">{formatCurrency(charge.amount)}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-1">
                          {getTypeIcon(charge.type)}
                          <span>{charge.type}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(charge.status)}`}>
                          {charge.status === 'PAID' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {charge.status === 'PENDING' && <Clock className="h-3 w-3 mr-1" />}
                          {charge.status === 'CANCELLED' && <XCircle className="h-3 w-3 mr-1" />}
                          {charge.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-500">{formatDate(charge.date)}</td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {!loading && charges && charges.length > 0 && (
            <div className="p-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Mostrando {(page - 1) * perPage + 1} a {Math.min(page * perPage, charges.length)} de {charges.length} cobranças
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  Anterior
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page * perPage >= charges.length}
                  onClick={() => setPage(page + 1)}
                >
                  Próxima
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}