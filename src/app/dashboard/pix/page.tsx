"use client";

import { useState, useEffect } from "react";
import { QrCode, Search, Filter, Download, Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Pix {
  id: number;
  customerName: string;
  amount: number;
  pixDate: string;
  status: string;
  pixNumber: string;
  description: string;
  paymentMethod: string;
  createdAt: string;
  pixKey: string;
  pixKeyType: string;
  qrCode: string;
  barcode: string;
}

export default function PixPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pixList, setPixList] = useState<Pix[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPix = async () => {
      try {
        const response = await fetch('/api/mock-pix');
        const data = await response.json();
        setPixList(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPix();
  }, []);

  const filteredPix = pixList.filter(pix =>
    pix.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pix.pixNumber.toLowerCase().includes(searchQuery.toLowerCase())
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

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copiado para a área de transferência!');
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <QrCode className="h-6 w-6 text-[#252E54]" />
          <h1 className="text-2xl font-bold text-[#252E54]">PIX</h1>
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
          placeholder="Buscar PIX..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* PIX Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Chave PIX</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Tipo</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Valor</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Data</th>
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
              ) : filteredPix.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center">
                    Nenhum PIX encontrado
                  </td>
                </tr>
              ) : (
                filteredPix.map((pix) => (
                  <tr key={pix.id} className="border-b border-gray-100">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-[#252E54]/10 flex items-center justify-center mr-3">
                          <span className="text-sm font-medium text-[#252E54]">
                            {getInitials(pix.customerName)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{pix.customerName}</p>
                          <p className="text-sm text-gray-500">{pix.pixNumber}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{pix.pixKey}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600 capitalize">{pix.pixKeyType}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium">{formatCurrency(pix.amount)}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-600">{new Date(pix.pixDate).toLocaleDateString('pt-BR')}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(pix.status)}`}>
                        {getStatusText(pix.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <QrCode className="h-4 w-4 mr-2" />
                          QR Code
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => copyToClipboard(pix.barcode)}>
                          <Copy className="h-4 w-4 mr-2" />
                          Copiar
                        </Button>
                        {pix.status === 'failed' && (
                          <Button variant="ghost" size="sm" className="text-green-600">
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Tentar Novamente
                          </Button>
                        )}
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