"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApi } from "@/lib/hooks/useApi";
import api from "@/app/services/api";
import {
  Link as LinkIcon,
  Copy,
  Download,
  History,
  CheckCircle,
  Clock,
  XCircle,
  DollarSign,
  Calendar,
  Plus,
  Trash2,
  ExternalLink,
  QrCode,
  Share2
} from "lucide-react";

interface PaymentLink {
  id: number;
  title: string;
  description: string;
  amount: number;
  status: 'ACTIVE' | 'INACTIVE' | 'EXPIRED';
  createdAt: string;
  expiresAt?: string;
  totalPayments: number;
  totalAmount: number;
  url: string;
  qrCode: string;
}

export default function LinksPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [loading, setLoading] = useState(false);

  const { data: links, loading: linksLoading } = useApi<PaymentLink[]>(
    async () => {
      const response = await api.get("/payment-links");
      return response.data;
    },
    {
      cacheKey: "payment-links",
      cacheTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  const handleCreateLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !amount) return;

    setLoading(true);
    try {
      await api.post("/payment-links", {
        title,
        description,
        amount: parseFloat(amount),
        expiresAt: expiresAt || undefined
      });
      setTitle("");
      setDescription("");
      setAmount("");
      setExpiresAt("");
      // TODO: Add success toast notification
    } catch (error) {
      console.error("Error creating payment link:", error);
      // TODO: Add error toast notification
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLink = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir este link de pagamento?")) {
      return;
    }

    setLoading(true);
    try {
      await api.delete(`/payment-links/${id}`);
      // TODO: Add success toast notification
    } catch (error) {
      console.error("Error deleting payment link:", error);
      // TODO: Add error toast notification
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      // TODO: Add success toast notification
    } catch (error) {
      console.error("Error copying link:", error);
      // TODO: Add error toast notification
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
      case 'ACTIVE':
        return 'text-green-600 bg-green-50';
      case 'INACTIVE':
        return 'text-gray-600 bg-gray-50';
      case 'EXPIRED':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <LinkIcon className="h-6 w-6 text-[#E85A27]" />
          Links de Pagamento
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* <Card>
          <CardHeader>
            <CardTitle className="text-lg">Criar Link de Pagamento</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateLink} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  placeholder="Título do link"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
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
                <Label htmlFor="expiresAt">Data de Expiração (opcional)</Label>
                <Input
                  id="expiresAt"
                  type="datetime-local"
                  value={expiresAt}
                  onChange={(e) => setExpiresAt(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#E85A27] hover:bg-[#D64A1A] text-white"
                disabled={loading}
              >
                {loading ? "Criando..." : "Criar Link"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Meus Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {linksLoading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                    <div className="h-4 bg-gray-200 rounded w-8"></div>
                  </div>
                ))
              ) : links?.length === 0 ? (
                <div className="text-center text-gray-500 py-4">
                  Nenhum link de pagamento criado.
                </div>
              ) : (
                links?.map((link) => (
                  <div key={link.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{link.title}</h3>
                        <p className="text-sm text-gray-500">{link.description}</p>
                      </div>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(link.status)}`}>
                        {link.status === 'ACTIVE' && <CheckCircle className="h-3 w-3 mr-1" />}
                        {link.status === 'INACTIVE' && <Clock className="h-3 w-3 mr-1" />}
                        {link.status === 'EXPIRED' && <XCircle className="h-3 w-3 mr-1" />}
                        {link.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <div>Valor: {formatCurrency(link.amount)}</div>
                      <div>Total recebido: {formatCurrency(link.totalAmount)}</div>
                      <div>Pagamentos: {link.totalPayments}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleCopyLink(link.url)}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copiar Link
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(link.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visualizar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(link.qrCode, '_blank')}
                      >
                        <QrCode className="h-4 w-4 mr-2" />
                        QR Code
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigator.share({ url: link.url })}
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Compartilhar
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteLink(link.id)}
                        disabled={link.status === 'ACTIVE'}
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
                  <th className="text-left p-4 font-medium text-gray-500">Link</th>
                  <th className="text-left p-4 font-medium text-gray-500">Valor</th>
                  <th className="text-left p-4 font-medium text-gray-500">Status</th>
                  <th className="text-right p-4 font-medium text-gray-500">Ações</th>
                </tr>
              </thead>
              <tbody>
                {linksLoading ? (
                  Array(3).fill(0).map((_, i) => (
                    <tr key={i} className="border-b animate-pulse">
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-32"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
                      <td className="p-4"><div className="h-4 bg-gray-200 rounded w-8 ml-auto"></div></td>
                    </tr>
                  ))
                ) : links?.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-gray-500">
                      Nenhum pagamento encontrado.
                    </td>
                  </tr>
                ) : (
                  links?.map((link) => (
                    <tr key={link.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 text-gray-600">
                        {formatDate(link.createdAt)}
                      </td>
                      <td className="p-4">{link.title}</td>
                      <td className="p-4 font-medium">
                        {formatCurrency(link.amount)}
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(link.status)}`}>
                          {link.status === 'ACTIVE' && <CheckCircle className="h-3 w-3 mr-1" />}
                          {link.status === 'INACTIVE' && <Clock className="h-3 w-3 mr-1" />}
                          {link.status === 'EXPIRED' && <XCircle className="h-3 w-3 mr-1" />}
                          {link.status}
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