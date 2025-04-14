"use client";

import { useState, useEffect } from "react";
import { Link, Search, Filter, Download, Copy, Eye, MousePointerClick, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PaymentLink {
  id: number;
  customerName: string;
  amount: number;
  dueDate: string;
  status: string;
  invoiceNumber: string;
  description: string;
  paymentMethod: string;
  createdAt: string;
  linkUrl: string;
  linkCode: string;
  views: number;
  clicks: number;
  sales: number;
}

export default function PaymentLinkManagementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [links, setLinks] = useState<PaymentLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch('/api/mock-payment-link-management');
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  const filteredLinks = links.filter(link =>
    link.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    link.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'paid':
        return 'bg-blue-100 text-blue-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Ativo';
      case 'paid':
        return 'Pago';
      case 'expired':
        return 'Expirado';
      default:
        return status;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link className="h-6 w-6 text-[#252E54]" />
          <h1 className="text-2xl font-bold text-[#252E54]">Gestão de Links de Pagamento</h1>
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
          placeholder="Buscar links de pagamento..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Payment Links Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Valor</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Vencimento</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Visualizações</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Cliques</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Vendas</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center">
                    Carregando...
                  </td>
                </tr>
              ) : filteredLinks.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-4 text-center">
                    Nenhum link de pagamento encontrado
                  </td>
                </tr>
              ) : (
                filteredLinks.map((link) => (
                  <tr key={link.id} className="border-b border-gray-100">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#252E54]/10 flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-[#252E54]">
                            {getInitials(link.customerName)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{link.customerName}</p>
                          <p className="text-sm text-gray-500">{link.invoiceNumber}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium">{formatCurrency(link.amount)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{new Date(link.dueDate).toLocaleDateString('pt-BR')}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">{link.views}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <MousePointerClick className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">{link.clicks}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <ShoppingCart className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-gray-600">{link.sales}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(link.status)}`}>
                        {getStatusText(link.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          Ver Detalhes
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => copyToClipboard(link.linkUrl)}>
                          <Copy className="h-4 w-4 mr-2" />
                          Copiar Link
                        </Button>
                      </div>
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