"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Plus, 
  Search, 
  Filter,
  ArrowUpDown,
  Zap,
  Link as LinkIcon,
  Download,
  MoreHorizontal,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";

interface Charge {
  id: number;
  transaction: string;
  client: string;
  amount: number;
  type: string;
  date: string;
  status: 'PAID' | 'PENDING' | 'CANCELLED';
  contact: string;
}

// Mock data
const mockCharges: Charge[] = [
  {
    id: 1,
    transaction: "TRX-001",
    client: "João Silva",
    amount: 1500.00,
    type: "PIX",
    date: "2024-03-22",
    status: "PAID",
    contact: "joao@email.com"
  },
  {
    id: 2,
    transaction: "TRX-002",
    client: "Maria Santos",
    amount: 2300.50,
    type: "BOLETO",
    date: "2024-03-21",
    status: "PENDING",
    contact: "maria@email.com"
  },
  {
    id: 3,
    transaction: "TRX-003",
    client: "Pedro Oliveira",
    amount: 800.00,
    type: "LINK",
    date: "2024-03-20",
    status: "CANCELLED",
    contact: "pedro@email.com"
  },
  {
    id: 4,
    transaction: "TRX-004",
    client: "Ana Costa",
    amount: 3500.00,
    type: "PIX",
    date: "2024-03-19",
    status: "PAID",
    contact: "ana@email.com"
  },
  {
    id: 5,
    transaction: "TRX-005",
    client: "Carlos Mendes",
    amount: 1200.00,
    type: "BOLETO",
    date: "2024-03-18",
    status: "PENDING",
    contact: "carlos@email.com"
  }
];

export default function ChargesPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  // Filter charges based on search and status
  const filteredCharges = mockCharges.filter(charge => {
    const matchesSearch = search === "" || 
      charge.client.toLowerCase().includes(search.toLowerCase()) ||
      charge.transaction.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === null || charge.status === status;
    return matchesSearch && matchesStatus;
  });

  // Paginate charges
  const paginatedCharges = filteredCharges.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID':
        return 'text-green-600 bg-green-50';
      case 'PENDING':
        return 'text-amber-600 bg-amber-50';
      case 'CANCELLED':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PIX':
        return <Zap className="h-4 w-4" />;
      case 'BOLETO':
        return <FileText className="h-4 w-4" />;
      case 'LINK':
        return <LinkIcon className="h-4 w-4" />;
      default:
        return null;
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1); // Reset to first page when searching
  };

  const handleStatusChange = (newStatus: string | null) => {
    setStatus(newStatus);
    setPage(1); // Reset to first page when changing status
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Cobranças</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => router.push("/dashboard/charges/export")}>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button 
            className="bg-[#E85A27] hover:bg-[#D64A1A] text-white"
            onClick={() => router.push("/dashboard/charges/new")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Cobrança
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex gap-4 flex-wrap">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Buscar cobranças..."
                  className="pl-10"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                variant={status === null ? "default" : "outline"}
                onClick={() => handleStatusChange(null)}
              >
                Todos
              </Button>
              <Button 
                variant={status === 'PENDING' ? "default" : "outline"}
                onClick={() => handleStatusChange('PENDING')}
              >
                Pendentes
              </Button>
              <Button 
                variant={status === 'PAID' ? "default" : "outline"}
                onClick={() => handleStatusChange('PAID')}
              >
                Pagos
              </Button>
              <Button 
                variant={status === 'CANCELLED' ? "default" : "outline"}
                onClick={() => handleStatusChange('CANCELLED')}
              >
                Cancelados
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Transação
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Cliente
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Valor
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">Tipo</th>
                  <th className="text-left p-4 font-medium text-gray-500">Status</th>
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Data
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-right p-4 font-medium text-gray-500">Ações</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCharges.map((charge) => (
                  <tr key={charge.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">{charge.transaction}</td>
                    <td className="p-4">{charge.client}</td>
                    <td className="p-4">{formatCurrency(charge.amount)}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(charge.type)}
                        {charge.type}
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(charge.status)}`}>
                        {charge.status}
                      </span>
                    </td>
                    <td className="p-4">{formatDate(charge.date)}</td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}