"use client";

import { useState, useEffect } from "react";
import { 
  Package, 
  Plus, 
  Search, 
  Filter, 
  ArrowUpDown, 
  ArrowRight,
  Edit,
  Trash2,
  MoreVertical,
  AlertCircle,
  CheckCircle,
  XCircle,
  Clock,
  Inbox
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

// Interfaces
interface ProductMetrics {
  totalProducts: number;
  activeProducts: number;
  inactiveProducts: number;
  totalValue: number;
  lowStock: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  status: "active" | "inactive" | "low_stock";
  category: string;
  lastUpdated: string;
}

// Main Products Component
export default function ProductsPage() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [metrics, setMetrics] = useState<ProductMetrics | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch metrics
      const metricsResponse = await fetch('/api/products/metrics');
      if (!metricsResponse.ok) throw new Error('Erro ao carregar métricas');
      const metricsData = await metricsResponse.json();
      setMetrics(metricsData);

      // Fetch products
      const productsResponse = await fetch('/api/products');
      if (!productsResponse.ok) throw new Error('Erro ao carregar produtos');
      const productsData = await productsResponse.json();
      setProducts(productsData);
      setFilteredProducts(productsData);

    } catch (error) {
      toast.error('Erro ao carregar dados dos produtos');
      console.error('Error fetching products data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle search
  useEffect(() => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "active":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Ativo
          </span>
        );
      case "inactive":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Inativo
          </span>
        );
      case "low_stock":
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
            <AlertCircle className="w-3 h-3 mr-1" />
            Estoque Baixo
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex items-center">
          <Package className="h-6 w-6 text-[#E85A27] mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => {}}>
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <Button className="bg-[#E85A27] hover:bg-[#D84A1F] text-white" onClick={() => {}}>
            <Plus className="mr-2 h-4 w-4" />
            Novo Produto
          </Button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          {loading ? (
            <>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-6 w-16" />
            </>
          ) : (
            <>
              <div className="text-sm font-medium text-gray-500 mb-2">Total de Produtos</div>
              <div className="flex items-center">
                <Package className="h-5 w-5 text-[#252E54] mr-2" />
                <div className="text-2xl font-bold text-[#252E54]">{metrics?.totalProducts || 0}</div>
              </div>
            </>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          {loading ? (
            <>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-6 w-16" />
            </>
          ) : (
            <>
              <div className="text-sm font-medium text-gray-500 mb-2">Produtos Ativos</div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <div className="text-2xl font-bold text-green-600">{metrics?.activeProducts || 0}</div>
              </div>
            </>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          {loading ? (
            <>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-6 w-16" />
            </>
          ) : (
            <>
              <div className="text-sm font-medium text-gray-500 mb-2">Produtos Inativos</div>
              <div className="flex items-center">
                <XCircle className="h-5 w-5 text-red-500 mr-2" />
                <div className="text-2xl font-bold text-red-500">{metrics?.inactiveProducts || 0}</div>
              </div>
            </>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          {loading ? (
            <>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-6 w-16" />
            </>
          ) : (
            <>
              <div className="text-sm font-medium text-gray-500 mb-2">Valor Total</div>
              <div className="flex items-center">
                <Package className="h-5 w-5 text-green-500 mr-2" />
                <div className="text-2xl font-bold text-green-600">
                  R$ {metrics?.totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}
                </div>
              </div>
            </>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          {loading ? (
            <>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-6 w-16" />
            </>
          ) : (
            <>
              <div className="text-sm font-medium text-gray-500 mb-2">Estoque Baixo</div>
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                <div className="text-2xl font-bold text-amber-500">{metrics?.lowStock || 0}</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-sm text-gray-500 bg-gray-50">
                <th className="text-left p-4">Produto</th>
                <th className="text-left p-4">Categoria</th>
                <th className="text-left p-4">
                  <div className="flex items-center">
                    Preço
                    <ArrowUpDown className="ml-1 h-3 w-3" />
                  </div>
                </th>
                <th className="text-left p-4">Estoque</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Última Atualização</th>
                <th className="text-right p-4">Ações</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                Array(5).fill(0).map((_, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-4"><Skeleton className="h-5 w-32" /></td>
                    <td className="p-4"><Skeleton className="h-5 w-24" /></td>
                    <td className="p-4"><Skeleton className="h-5 w-20" /></td>
                    <td className="p-4"><Skeleton className="h-5 w-16" /></td>
                    <td className="p-4"><Skeleton className="h-5 w-20" /></td>
                    <td className="p-4"><Skeleton className="h-5 w-24" /></td>
                    <td className="p-4 text-right"><Skeleton className="h-5 w-10 ml-auto" /></td>
                  </tr>
                ))
              ) : filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12">
                    <div className="flex flex-col items-center justify-center text-gray-500">
                      <Inbox className="h-12 w-12 mb-4" />
                      <p className="text-lg font-medium">Nenhum produto encontrado</p>
                      <p className="text-sm">Não há produtos para exibir no momento.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.description}</div>
                      </div>
                    </td>
                    <td className="p-4">{product.category}</td>
                    <td className="p-4">R$ {product.price.toFixed(2).replace('.', ',')}</td>
                    <td className="p-4">{product.stock}</td>
                    <td className="p-4">{getStatusBadge(product.status)}</td>
                    <td className="p-4 text-sm text-gray-500">{product.lastUpdated}</td>
                    <td className="p-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <div className="p-4 flex justify-between items-center border-t">
          <p className="text-sm text-gray-500">Mostrando {filteredProducts.length} de {products.length} produtos</p>
          <Button variant="outline" size="sm">
            Ver todos <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
} 