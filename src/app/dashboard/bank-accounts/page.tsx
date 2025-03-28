"use client";

import { useState, useEffect } from "react";
import { Landmark, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface DadosBancarios {
  id: number;
  banco: string;
  agencia: string;
  conta: string;
  tipo: string;
}

export default function DadosBancariosPage() {
  const [dados, setDados] = useState<DadosBancarios[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDados([
        { id: 1, banco: "Banco A", agencia: "1234", conta: "56789-0", tipo: "Corrente" },
        { id: 2, banco: "Banco B", agencia: "4321", conta: "09876-5", tipo: "Poupança" },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredDados = dados.filter(d =>
    d.banco.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Landmark className="mr-2 text-[#E85A27]" /> Meus Dados Bancários
        </h1>
        <Button className="bg-[#E85A27] hover:bg-[#D84A1F] text-white flex items-center">
          <Plus className="mr-2 h-5 w-5" /> Adicionar Conta
        </Button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Pesquisar banco..."
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Banco</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Agência</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Conta</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDados.map(d => (
              <tr key={d.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{d.banco}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{d.agencia}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{d.conta}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{d.tipo}</td>
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
