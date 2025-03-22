"use client";

import { useState, useEffect } from "react";
import { Plug, Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Integracao {
  id: number;
  nome: string;
  status: string;
  data: string;
}

export default function IntegracoesPage() {
  const [integracoes, setIntegracoes] = useState<Integracao[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setIntegracoes([
        { id: 1, nome: "Integração A", status: "Ativa", data: "Hoje, 09:30" },
        { id: 2, nome: "Integração B", status: "Inativa", data: "Ontem, 16:15" },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredIntegracoes = integracoes.filter(i =>
    i.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Plug className="mr-2 text-[#E85A27]" /> Integrações
        </h1>
        <Button className="bg-[#E85A27] hover:bg-[#D84A1F] text-white flex items-center">
          <Plus className="mr-2 h-5 w-5" /> Adicionar Integração
        </Button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Pesquisar integrações..."
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredIntegracoes.map(i => (
              <tr key={i.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{i.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{i.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{i.data}</td>
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
