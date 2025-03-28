"use client";

import { useState } from "react";
import { FileText, Search, Filter, Download, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WalletStatementPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-[#252E54]" />
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
          placeholder="Buscar no extrato..."
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
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Tipo</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Valor</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Saldo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 text-gray-500">20/03/2024</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <ArrowUp className="h-5 w-5 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium">Recebimento PIX</p>
                      <p className="text-sm text-gray-500">Cliente: João Silva</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                    Crédito
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-green-600">+ R$ 250,00</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium">R$ 1.250,00</span>
                </td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 text-gray-500">19/03/2024</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <ArrowDown className="h-5 w-5 text-red-500 mr-3" />
                    <div>
                      <p className="font-medium">Transferência</p>
                      <p className="text-sm text-gray-500">Para: Maria Santos</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                    Débito
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-red-600">- R$ 500,00</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium">R$ 1.000,00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 