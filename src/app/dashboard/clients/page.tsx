"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Users,
  Plus,
  Search,
  Filter,
  ArrowUpDown,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: 'ACTIVE' | 'INACTIVE';
  totalOrders: number;
  totalAmount: number;
  lastOrderDate: string;
}

// Mock data
const mockClients: Client[] = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    phone: "(11) 99999-9999",
    status: "ACTIVE",
    totalOrders: 12,
    totalAmount: 15000.00,
    lastOrderDate: "2024-03-22"
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@email.com",
    phone: "(11) 98888-8888",
    status: "ACTIVE",
    totalOrders: 8,
    totalAmount: 8500.00,
    lastOrderDate: "2024-03-21"
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    email: "pedro@email.com",
    phone: "(11) 97777-7777",
    status: "INACTIVE",
    totalOrders: 5,
    totalAmount: 3200.00,
    lastOrderDate: "2024-03-15"
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana@email.com",
    phone: "(11) 96666-6666",
    status: "ACTIVE",
    totalOrders: 15,
    totalAmount: 25000.00,
    lastOrderDate: "2024-03-20"
  },
  {
    id: 5,
    name: "Carlos Mendes",
    email: "carlos@email.com",
    phone: "(11) 95555-5555",
    status: "ACTIVE",
    totalOrders: 10,
    totalAmount: 12000.00,
    lastOrderDate: "2024-03-19"
  }
];

export default function ClientsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  // Filter clients based on search and status
  const filteredClients = mockClients.filter(client => {
    const matchesSearch = search === "" || 
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === null || client.status === status;
    return matchesSearch && matchesStatus;
  });

  // Paginate clients
  const paginatedClients = filteredClients.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'text-green-600 bg-green-50';
      case 'INACTIVE':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
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

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <div className="flex gap-2">
          <Button 
            className="bg-[#E85A27] hover:bg-[#D64A1A] text-white"
            onClick={() => router.push("/dashboard/clients/new")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Novo Cliente
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
                  placeholder="Buscar clientes..."
                  className="pl-10"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <Button variant="outline" onClick={() => setStatus(null)}>
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
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
                      Cliente
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">Contato</th>
                  <th className="text-left p-4 font-medium text-gray-500">Status</th>
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Total Compras
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">
                    <div className="flex items-center gap-1">
                      Valor Total
                      <ArrowUpDown className="h-4 w-4" />
                    </div>
                  </th>
                  <th className="text-left p-4 font-medium text-gray-500">Última Compra</th>
                  <th className="text-right p-4 font-medium text-gray-500">Ações</th>
                </tr>
              </thead>
              <tbody>
                {paginatedClients.map((client) => (
                  <tr key={client.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-medium">{client.name}</div>
                    </td>
                    <td className="p-4">
                      <div>
                        <div className="text-gray-900">{client.email}</div>
                        <div className="text-sm text-gray-500">{client.phone}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}>
                        {client.status === 'ACTIVE' && <CheckCircle className="h-3 w-3 mr-1" />}
                        {client.status === 'INACTIVE' && <XCircle className="h-3 w-3 mr-1" />}
                        {client.status}
                      </span>
                    </td>
                    <td className="p-4 font-medium">{client.totalOrders}</td>
                    <td className="p-4 font-medium">{formatCurrency(client.totalAmount)}</td>
                    <td className="p-4 text-gray-500">{formatDate(client.lastOrderDate)}</td>
                    <td className="p-4 text-right">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => router.push(`/dashboard/clients/${client.id}`)}
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredClients.length > 0 && (
            <div className="p-4 border-t flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Mostrando {(page - 1) * perPage + 1} a {Math.min(page * perPage, filteredClients.length)} de {filteredClients.length} clientes
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                >
                  Anterior
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page * perPage >= filteredClients.length}
                  onClick={() => setPage(page + 1)}
                >
                  Próxima
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}