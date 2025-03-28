"use client";

import { useState, useEffect } from "react";
import { Wallet, Search, Filter, Download, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Statement {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: string;
  status: string;
  transactionNumber: string;
  paymentMethod: string;
  customerName: string;
  category: string;
  balance: number;
}

export default function StatementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statements, setStatements] = useState<Statement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatements = async () => {
      try {
        const response = await fetch('/api/mock-wallet-statement');
        const data = await response.json();
        setStatements(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatements();
  }, []);

  const filteredStatements = statements.filter(statement =>
    statement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    statement.transactionNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    statement.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Concluído';
      case 'pending':
        return 'Pendente';
      case 'failed':
        return 'Falhou';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wallet className="h-6 w-6 text-[#252E54]" />
          <h1 className="text-2xl font-bold text-[#252E54]">Extrato</h1>
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
          placeholder="Buscar transações..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Statement Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Data</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Descrição</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Valor</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Saldo</th>
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
              ) : filteredStatements.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center">
                    Nenhuma transação encontrada
                  </td>
                </tr>
              ) : (
                filteredStatements.map((statement) => (
                  <tr key={statement.id} className="border-b border-gray-100">
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{new Date(statement.date).toLocaleDateString('pt-BR')}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {statement.type === 'credit' ? (
                          <ArrowUpRight className="h-4 w-4 text-green-500 mr-2" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-500 mr-2" />
                        )}
                        <div>
                          <p className="font-medium">{statement.description}</p>
                          <p className="text-sm text-gray-500">{statement.transactionNumber}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{statement.customerName}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-medium ${statement.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                        {statement.type === 'credit' ? '+' : '-'} {formatCurrency(statement.amount)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-medium ${statement.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatCurrency(statement.balance)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(statement.status)}`}>
                        {getStatusText(statement.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm">
                        Ver Detalhes
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