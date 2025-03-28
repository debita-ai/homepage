"use client";

import { useState } from "react";
import { Clock, Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PendingBillingsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Clock className="h-6 w-6 text-[#252E54]" />
          <h1 className="text-2xl font-bold text-[#252E54]">Cobranças Pendentes</h1>
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
          placeholder="Buscar cobranças pendentes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Pending Billings Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Valor</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Vencimento</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Método</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#252E54]/10 flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-[#252E54]">JS</span>
                    </div>
                    <div>
                      <p className="font-medium">João Silva</p>
                      <p className="text-sm text-gray-500">joao@email.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium">R$ 1.500,00</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-yellow-600">Em 3 dias</span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    PIX
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    Aguardando
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button variant="ghost" size="sm">
                    Ver detalhes
                  </Button>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#252E54]/10 flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-[#252E54]">MS</span>
                    </div>
                    <div>
                      <p className="font-medium">Maria Santos</p>
                      <p className="text-sm text-gray-500">maria@email.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium">R$ 2.800,00</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-orange-600">Hoje</span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
                    Boleto
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    Aguardando
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button variant="ghost" size="sm">
                    Ver detalhes
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 