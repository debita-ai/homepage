"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  Upload,
  FileSpreadsheet,
  Download,
  AlertCircle,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ImportPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [importStatus, setImportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [importResults, setImportResults] = useState({
    total: 0,
    success: 0,
    errors: 0,
    details: [] as string[]
  });

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'text/csv') {
      setFile(droppedFile);
    } else {
      toast.error('Por favor, selecione um arquivo CSV válido');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
    } else {
      toast.error('Por favor, selecione um arquivo CSV válido');
    }
  };

  const handleImport = async () => {
    if (!file) {
      toast.error('Por favor, selecione um arquivo para importar');
      return;
    }

    try {
      setImportStatus('processing');
      
      // Simular processamento
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock de resultados
      setImportResults({
        total: 150,
        success: 145,
        errors: 5,
        details: [
          'Linha 3: Email inválido',
          'Linha 7: Telefone inválido',
          'Linha 12: Nome obrigatório',
          'Linha 45: Email duplicado',
          'Linha 89: Formato de data inválido'
        ]
      });
      
      setImportStatus('success');
      toast.success('Importação concluída com sucesso!');
    } catch (error) {
      setImportStatus('error');
      toast.error('Erro ao importar arquivo');
    }
  };

  return (
    <div className="p-6">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center">
          <Users className="mr-2 h-6 w-6 text-[#E85A27]" /> Importar Clientes
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

      {/* Área de Upload */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Importar Clientes via CSV</h2>
          <p className="text-gray-500">Faça o upload do arquivo CSV com os dados dos seus clientes</p>
        </div>

        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-[#E85A27] bg-orange-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <div className="space-y-2">
            <p className="text-gray-600">
              Arraste e solte seu arquivo CSV aqui, ou{' '}
              <label className="text-[#E85A27] cursor-pointer hover:underline">
                clique para selecionar
                <input
                  type="file"
                  className="hidden"
                  accept=".csv"
                  onChange={handleFileSelect}
                />
              </label>
            </p>
            <p className="text-sm text-gray-500">
              O arquivo deve estar no formato CSV com as colunas: nome, email, telefone
            </p>
          </div>
        </div>

        {file && (
          <div className="mt-4 flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <FileSpreadsheet className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">{file.name}</p>
                <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
              </div>
            </div>
            <Button
              className="bg-[#E85A27] hover:bg-[#d04a20] text-white"
              onClick={handleImport}
              disabled={importStatus === 'processing'}
            >
              {importStatus === 'processing' ? 'Importando...' : 'Importar'}
            </Button>
          </div>
        )}
      </div>

      {/* Resultados da Importação */}
      {importStatus !== 'idle' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Resultados da Importação</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500 mb-1">Total de Registros</div>
              <div className="text-2xl font-bold">{importResults.total}</div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-green-500 mb-1">Importados com Sucesso</div>
              <div className="text-2xl font-bold text-green-600">{importResults.success}</div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-red-500 mb-1">Erros</div>
              <div className="text-2xl font-bold text-red-600">{importResults.errors}</div>
            </div>
          </div>

          {importResults.errors > 0 && (
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700">Detalhes dos Erros:</h4>
              <div className="bg-red-50 p-4 rounded-lg">
                {importResults.details.map((detail, index) => (
                  <div key={index} className="flex items-center text-sm text-red-600 mb-2">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          )}

          {importStatus === 'success' && (
            <div className="mt-6 flex justify-end">
              <Button
                className="bg-[#E85A27] hover:bg-[#d04a20] text-white"
                asChild
              >
                <Link href="/dashboard/customers">
                  Ver Lista de Clientes
                </Link>
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Template Download */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Precisa de ajuda?</h3>
            <p className="text-gray-500">Baixe nosso template CSV para ver o formato correto</p>
          </div>
          <Button
            variant="outline"
            className="text-gray-500"
            onClick={() => toast.info('Download iniciado')}
          >
            <Download className="mr-2 h-4 w-4" /> Baixar Template
          </Button>
        </div>
      </div>
    </div>
  );
} 