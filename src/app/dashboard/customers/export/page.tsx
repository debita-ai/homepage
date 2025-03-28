"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Download,
  FileSpreadsheet,
  Filter,
  Calendar,
  CheckSquare,
  XSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ExportPage() {
  const [exportStatus, setExportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [selectedFields, setSelectedFields] = useState({
    nome: true,
    email: true,
    telefone: true,
    status: true,
    ultimaCompra: true,
    totalCompras: true,
    valor: true
  });
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const [statusFilter, setStatusFilter] = useState('todos');

  const handleFieldToggle = (field: string) => {
    setSelectedFields(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleExport = async () => {
    try {
      setExportStatus('processing');
      
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setExportStatus('success');
      toast.success('Arquivo exportado com sucesso!');
    } catch (error) {
      setExportStatus('error');
      toast.error('Erro ao exportar arquivo');
    }
  };

  const fieldLabels = {
    nome: 'Nome',
    email: 'Email',
    telefone: 'Telefone',
    status: 'Status',
    ultimaCompra: 'Última Compra',
    totalCompras: 'Total de Compras',
    valor: 'Valor'
  };

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Users className="mr-2 h-6 w-6 text-[#E85A27]" /> Exportar Clientes
        </h1>
        <Button 
          variant="outline"
          className="text-gray-500"
          asChild
        >
          <Link href="/dashboard/customers">
            Voltar para Lista
          </Link>
        </Button>
      </div>

      {/* Configurações de Exportação */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Configurações de Exportação</h2>

        {/* Campos para Exportar */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Campos para Exportar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(selectedFields).map(([field, selected]) => (
              <div key={field} className="flex items-center space-x-2">
                <button
                  onClick={() => handleFieldToggle(field)}
                  className={`w-5 h-5 rounded border flex items-center justify-center ${
                    selected ? 'bg-[#E85A27] border-[#E85A27]' : 'border-gray-300'
                  }`}
                >
                  {selected ? (
                    <CheckSquare className="h-4 w-4 text-white" />
                  ) : (
                    <XSquare className="h-4 w-4 text-gray-400" />
                  )}
                </button>
                <span className="text-sm text-gray-600">
                  {fieldLabels[field as keyof typeof fieldLabels]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filtros */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Período</h3>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm text-gray-500 mb-1">Data Inicial</label>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                  className="w-full border rounded p-2 text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-500 mb-1">Data Final</label>
                <input
                  type="date"
                  value={dateRange.end}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                  className="w-full border rounded p-2 text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Status</h3>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full border rounded p-2 text-sm"
            >
              <option value="todos">Todos</option>
              <option value="ativo">Ativos</option>
              <option value="inativo">Inativos</option>
            </select>
          </div>
        </div>

        {/* Botão de Exportação */}
        <div className="mt-6 flex justify-end">
          <Button
            className="bg-[#E85A27] hover:bg-[#d04a20] text-white"
            onClick={handleExport}
            disabled={exportStatus === 'processing'}
          >
            <Download className="mr-2 h-4 w-4" />
            {exportStatus === 'processing' ? 'Exportando...' : 'Exportar CSV'}
          </Button>
        </div>
      </div>

      {/* Status da Exportação */}
      {exportStatus !== 'idle' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Status da Exportação</h3>
          
          {exportStatus === 'success' ? (
            <div className="flex items-center text-green-600">
              <CheckSquare className="h-5 w-5 mr-2" />
              <span>Arquivo exportado com sucesso!</span>
            </div>
          ) : exportStatus === 'error' ? (
            <div className="flex items-center text-red-600">
              <XSquare className="h-5 w-5 mr-2" />
              <span>Erro ao exportar arquivo. Tente novamente.</span>
            </div>
          ) : (
            <div className="flex items-center text-gray-600">
              <FileSpreadsheet className="h-5 w-5 mr-2 animate-pulse" />
              <span>Processando arquivo...</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 