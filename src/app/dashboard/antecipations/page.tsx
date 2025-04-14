"use client";

import { useState, useEffect } from "react";
import { Clock, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Antecipacao {
  id: number;
  cliente: string;
  valorAntecipado: number;
  taxa: string;
  data: string;
}

export default function AntecipacoesPage() {
  const [antecipacoes, setAntecipacoes] = useState<Antecipacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAntecipacoes([
        { id: 1, cliente: "Ana Silva", valorAntecipado: 300.00, taxa: "2%", data: "Hoje, 10:30" },
        { id: 2, cliente: "Marcos Oliveira", valorAntecipado: 500.00, taxa: "3%", data: "Ontem, 15:45" },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredAntecipacoes = antecipacoes.filter(a =>
    a.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Clock className="mr-2 text-[#E85A27]" /> Antecipações
        </h1>
        <Button className="bg-[#E85A27] hover:bg-[#D84A1F] text-white flex items-center">
          <Plus className="mr-2 h-5 w-5" /> Adicionar Antecipação
        </Button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Pesquisar antecipações..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      {loading ? (
        <div className="space-y-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valor Antecipado</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Taxa</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAntecipacoes.map(a => (
              <tr key={a.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{a.cliente}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">R$ {a.valorAntecipado.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.taxa}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{a.data}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button className="text-blue-600 hover:text-blue-900 mr-2"><Edit size={16} /></Button>
                  <Button className="text-red-600 hover:text-red-900"><Trash2 size={16} /></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
