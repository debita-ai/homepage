"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApi } from "@/lib/hooks/useApi";
import api from "@/app/services/api";
import {
  Wallet,
  ArrowUpDown,
  ArrowDown,
  ArrowUp,
  Download,
  Plus,
  Minus,
  Clock,
  CheckCircle,
  XCircle,
  DollarSign,
  Calendar
} from "lucide-react";

interface Transaction {
  id: number;
  type: 'DEPOSIT' | 'WITHDRAWAL' | 'TRANSFER';
  amount: number;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  description: string;
  createdAt: string;
}

interface WalletBalance {
  available: number;
  pending: number;
  total: number;
}

export default function WalletPage() {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: balance, loading: balanceLoading } = useApi<WalletBalance>(
    async () => {
      const response = await api.get("/wallet/balance");
      return response.data;
    },
    {
      cacheKey: "wallet-balance",
      cacheTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  const { data: transactions, loading: transactionsLoading } = useApi<Transaction[]>(
    async () => {
      const response = await api.get("/wallet/transactions");
      return response.data;
    },
    {
      cacheKey: "wallet-transactions",
      cacheTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  const handleWithdrawal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawalAmount) return;

    setLoading(true);
    try {
      await api.post("/wallet/withdraw", {
        amount: parseFloat(withdrawalAmount)
      });
      setWithdrawalAmount("");
      // TODO: Add success toast notification
    } catch (error) {
      console.error("Error processing withdrawal:", error);
      // TODO: Add error toast notification
    } finally {
      setLoading(false);
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'text-green-600 bg-green-50';
      case 'PENDING':
        return 'text-yellow-600 bg-yellow-50';
      case 'FAILED':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Wallet className="h-6 w-6 text-[#E85A27]" />
          Carteira
        </h1>
        <Button variant="outline" onClick={() => window.print()}>
          <Download className="h-4 w-4 mr-2" />
          Exportar Extrato
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Saldo Disponível</span>
              <DollarSign className="h-4 w-4 text-gray-400" />
          </div>
            <div className="text-2xl font-bold">
              {balanceLoading ? (
                <div className="h-8 bg-gray-200 rounded animate-pulse w-32"></div>
              ) : (
                formatCurrency(balance?.available || 0)
              )}
        </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Pendente</span>
              <Clock className="h-4 w-4 text-gray-400" />
          </div>
            <div className="text-2xl font-bold">
              {balanceLoading ? (
                <div className="h-8 bg-gray-200 rounded animate-pulse w-32"></div>
              ) : (
                formatCurrency(balance?.pending || 0)
              )}
        </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Total</span>
              <ArrowUpDown className="h-4 w-4 text-gray-400" />
          </div>
            <div className="text-2xl font-bold">
              {balanceLoading ? (
                <div className="h-8 bg-gray-200 rounded animate-pulse w-32"></div>
              ) : (
                formatCurrency(balance?.total || 0)
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Saque</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleWithdrawal} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Valor do Saque</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0,00"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                  required
                  min="0"
                  step="0.01"
              />
            </div>
              <Button
                type="submit"
                className="w-full bg-[#E85A27] hover:bg-[#D64A1A] text-white"
                disabled={loading}
              >
                {loading ? "Processando..." : "Solicitar Saque"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Histórico de Transações</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
          <div className="overflow-x-auto">
              <table className="w-full">
              <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-gray-500">Data</th>
                    <th className="text-left p-4 font-medium text-gray-500">Tipo</th>
                    <th className="text-left p-4 font-medium text-gray-500">Valor</th>
                    <th className="text-left p-4 font-medium text-gray-500">Status</th>
                </tr>
              </thead>
                <tbody>
                  {transactionsLoading ? (
                    Array(3).fill(0).map((_, i) => (
                      <tr key={i} className="border-b animate-pulse">
                        <td className="p-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                        <td className="p-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
                        <td className="p-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                        <td className="p-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
                        </tr>
                      ))
                  ) : transactions?.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-4 text-center text-gray-500">
                        Nenhuma transação encontrada.
                      </td>
                    </tr>
                  ) : (
                    transactions?.map((transaction) => (
                      <tr key={transaction.id} className="border-b hover:bg-gray-50">
                        <td className="p-4 text-gray-600">
                          {formatDate(transaction.createdAt)}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            {transaction.type === 'DEPOSIT' && <ArrowUp className="h-4 w-4 text-green-500" />}
                            {transaction.type === 'WITHDRAWAL' && <ArrowDown className="h-4 w-4 text-red-500" />}
                            {transaction.type === 'TRANSFER' && <ArrowUpDown className="h-4 w-4 text-blue-500" />}
                            <span className="capitalize">{transaction.type.toLowerCase()}</span>
        </div>
                              </td>
                        <td className="p-4 font-medium">
                          {formatCurrency(transaction.amount)}
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                            {transaction.status === 'COMPLETED' && <CheckCircle className="h-3 w-3 mr-1" />}
                            {transaction.status === 'PENDING' && <Clock className="h-3 w-3 mr-1" />}
                            {transaction.status === 'FAILED' && <XCircle className="h-3 w-3 mr-1" />}
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
              </tbody>
            </table>
          </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}