"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApi } from "@/lib/hooks/useApi";
import api from "@/app/services/api";
import {
  QrCode,
  Copy,
  Download,
  History,
  Key,
  CheckCircle,
  Clock,
  XCircle,
  DollarSign,
  Calendar,
  Plus,
  Trash2
} from "lucide-react";

interface PixPayment {
  id: number;
  amount: number;
  description: string;
  status: 'PENDING' | 'PAID' | 'CANCELLED';
  createdAt: string;
  paidAt?: string;
  qrCode: string;
  pixCopyPaste: string;
}

interface PixKey {
  id: number;
  type: 'CPF' | 'EMAIL' | 'PHONE' | 'EVP';
  value: string;
  isDefault: boolean;
}

export default function PixPage() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [newKeyType, setNewKeyType] = useState<'CPF' | 'EMAIL' | 'PHONE' | 'EVP'>('EVP');
  const [newKeyValue, setNewKeyValue] = useState("");

  const { data: payments, loading: paymentsLoading } = useApi<PixPayment[]>(
    async () => {
      const response = await api.get("/pix/payments");
      return response.data;
    },
    {
      cacheKey: "pix-payments",
      cacheTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  const { data: pixKeys, loading: keysLoading } = useApi<PixKey[]>(
    async () => {
      const response = await api.get("/pix/keys");
      return response.data;
    },
    {
      cacheKey: "pix-keys",
      cacheTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  const handleGenerateQRCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !description) return;

    setLoading(true);
    try {
      await api.post("/pix/generate", {
        amount: parseFloat(amount),
        description
      });
      setAmount("");
      setDescription("");
      // TODO: Add success toast notification
    } catch (error) {
      console.error("Error generating QR code:", error);
      // TODO: Add error toast notification
    } finally {
      setLoading(false);
    }
  };

  const handleAddPixKey = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyValue) return;

    setLoading(true);
    try {
      await api.post("/pix/keys", {
        type: newKeyType,
        value: newKeyValue
      });
      setNewKeyValue("");
      // TODO: Add success toast notification
    } catch (error) {
      console.error("Error adding PIX key:", error);
      // TODO: Add error toast notification
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePixKey = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir esta chave PIX?")) {
      return;
    }

    setLoading(true);
    try {
      await api.delete(`/pix/keys/${id}`);
      // TODO: Add success toast notification
    } catch (error) {
      console.error("Error deleting PIX key:", error);
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
      case 'PAID':
        return 'text-green-600 bg-green-50';
      case 'PENDING':
        return 'text-yellow-600 bg-yellow-50';
      case 'CANCELLED':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <QrCode className="h-6 w-6 text-[#E85A27]" />
          PIX
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-lg">Gerar QR Code</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleGenerateQRCode} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Valor</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0,00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  placeholder="Descrição do pagamento"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#E85A27] hover:bg-[#D64A1A] text-white"
                disabled={loading}
              >
                {loading ? "Gerando..." : "Gerar QR Code"}
              </Button>
            </form>
          </CardContent>
        </Card> */}

        {/* <Card>
          <CardHeader>
            <CardTitle className="text-lg">Minhas Chaves PIX</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddPixKey} className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="keyType">Tipo</Label>
                  <select
                    id="keyType"
                    className="w-full px-3 py-2 border rounded-md"
                    value={newKeyType}
                    onChange={(e) => setNewKeyType(e.target.value as any)}
                    required
                  >
                    <option value="EVP">Chave Aleatória</option>
                    <option value="CPF">CPF</option>
                    <option value="EMAIL">Email</option>
                    <option value="PHONE">Telefone</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="keyValue">Valor</Label>
                  <Input
                    id="keyValue"
                    placeholder="Valor da chave"
                    value={newKeyValue}
                    onChange={(e) => setNewKeyValue(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#E85A27] hover:bg-[#D64A1A] text-white"
                disabled={loading}
              >
                {loading ? "Adicionando..." : "Adicionar Chave"}
              </Button>
            </form>

            <div className="space-y-4">
              {keysLoading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-4 bg-gray-200 rounded w-8"></div>
                  </div>
                ))
              ) : pixKeys?.length === 0 ? (
                <div className="text-center text-gray-500 py-4">
                  Nenhuma chave PIX cadastrada.
                </div>
              ) : (
                pixKeys?.map((key) => (
                  <div key={key.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{key.value}</div>
                      <div className="text-sm text-gray-500">{key.type}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {key.isDefault && (
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          Padrão
                        </span>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeletePixKey(key.id)}
                        disabled={key.isDefault}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card> */}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Histórico de Pagamentos</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium text-gray-500">Data</th>
                  <th className="text-left p-4 font-medium text-gray-500">Descrição</th>
                  <th className="text-left p-4 font-medium text-gray-500">Valor</th>
                  <th className="text-left p-4 font-medium text-gray-500">Status</th>
                  <th className="text-right p-4 font-medium text-gray-500">Ações</th>
                </tr>
              </thead>
              <tbody>
                {paymentsLoading ? (
                  Array(3).fill(0).map((_, i) => (
                    <tr key={i} className="border-b animate-pulse">
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-32"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-8 ml-auto"></div></td>
                    </tr>
                  ))
                ) : payments?.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-gray-500">
                      Nenhum pagamento encontrado.
                    </td>
                  </tr>
                ) : (
                  payments?.map((payment) => (
                    <tr key={payment.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 text-gray-600">
                        {formatDate(payment.createdAt)}
                      </td>
                      <td className="p-4">{payment.description}</td>
                      <td className="p-4 font-medium">
                        {formatCurrency(payment.amount)}
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                          {payment.status === 'PAID' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {payment.status === 'PENDING' && <Clock className="h-3 w-3 mr-1" />}
                          {payment.status === 'CANCELLED' && <XCircle className="h-3 w-3 mr-1" />}
                          {payment.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
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
  );
}