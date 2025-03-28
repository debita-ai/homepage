"use client";

import { useState, useEffect } from "react";
import { AlertCircle, Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Billing {
  id: number;
  customerName: string;
  amount: number;
  dueDate: string;
  status: string;
  invoiceNumber: string;
  description: string;
  paymentMethod: string;
  createdAt: string;
  daysOverdue: number;
}

export default function OverdueBillingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [billings, setBillings] = useState<Billing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBillings = async () => {
      try {
        const response = await fetch('/api/mock-overdue-billings');
        const data = await response.json();
        setBillings(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBillings();
  }, []);

  const filteredBillings = billings.filter(billing =>
    billing.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    billing.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-6 w-6 text-[#252E54]" />
          <h1 className="text-2xl font-bold text-[#252E54]">Cobranças Vencidas</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" className="flex items-center">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button className="bg-[#E85A27] hover:bg-[#D84A1F] text-white flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Buscar cobranças vencidas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Overdue Billings Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Valor</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Vencimento</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Dias Vencidos</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Método</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center">
                    Carregando...
                  </td>
                </tr>
              ) : filteredBillings.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center">
                    Nenhuma cobrança vencida encontrada
                  </td>
                </tr>
              ) : (
                filteredBillings.map((billing) => (
                  <tr key={billing.id} className="border-b border-gray-100">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#252E54]/10 flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-[#252E54]">
                            {getInitials(billing.customerName)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{billing.customerName}</p>
                          <p className="text-sm text-gray-500">{billing.invoiceNumber}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium">{formatCurrency(billing.amount)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{new Date(billing.dueDate).toLocaleDateString('pt-BR')}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-red-600 font-medium">{billing.daysOverdue} dias</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        {billing.paymentMethod}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                        Vencido
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm">
                        Ver detalhes
                      </Button>
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