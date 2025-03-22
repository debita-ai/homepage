"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  User, 
  Bell, 
  Settings, 
  Wallet, 
  LogOut, 
  Menu, 
  X, 
  Plus, 
  FileText, 
  Zap, 
  Clock, 
  Landmark, 
  Bot, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Filter,
  Download,
  Calendar,
  CreditCard,
  FileBarChart,
  CheckCircle,
  XCircle,
  ArrowUpDown,
  ArrowRight,
  BarChart2,
  Users,
  Briefcase,
  TrendingUp,
  DollarSign,
  AlertCircle,
  RefreshCw,
  Calendar1
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AreaChart from "@/components/dashboard/charts";
import dashboardService, { 
  DashboardData as ApiDashboardData,
  ChargesSummary as ApiChargesSummary,
  CustomersSummary as ApiCustomersSummary,
  RevenueSummary as ApiRevenueSummary,
  RevenueChartData as ApiRevenueChartData,
  LatestCharge as ApiLatestCharge
} from "../services/dashboard";
import { toast } from "sonner";
import { formatCurrency } from "@/app/lib/utils";
import { StatCard, type StatCardProps } from "@/app/components/dashboard/StatCard";
import { StatsGroup, type StatsGroupProps, type StatItem } from "@/app/components/dashboard/StatsGroup";
import RevenueChart from "@/app/components/dashboard/RevenueChart";
import TransactionsList from "@/app/components/dashboard/TransactionsList";
import { ReactNode } from "react";
import chargesService from "@/app/services/charges";
import clientsService from "@/app/services/clients";
import { api } from "@/app/services/auth";
import { useRouter } from "next/navigation";

// Add these enums before the DashboardData interface
enum ChargeStatus {
  PAID = "Pago",
  PENDING = "Pendente",
  CANCELLED = "Cancelado"
}

enum ChargeType {
  SALE = "Venda",
  PURCHASE = "Compra",
  SERVICE = "Serviço",
  RENTAL = "Aluguel"
}

interface DashboardData {
  chargesSummary: {
    total: number;
    paid: number;
    pending: number;
    overdue: number;
  };
  customersSummary: {
    total: number;
    active: number;
    inactive: number;
  };
  revenueSummary: {
    total: number;
    thisMonth: number;
    lastMonth: number;
  };
  revenueChartData: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
  latestCharges: {
    id: string;
    customer: {
      name: string;
      email: string;
    };
    amount: number;
    status: "paid" | "pending" | "failed";
    createdAt: string;
    paymentMethod: "pix" | "boleto" | "credit_card";
  }[];
}

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  loading?: boolean;
}

interface StatsBoxProps {
  title: string;
  items: {
    label: string;
    value: string;
    color: string;
  }[];
  loading?: boolean;
}

interface SectionContainerProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CreateChargePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AIAssistantPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface StatsBoxItem {
  label: string;
  value: string;
  color: string;
}

// Recent sales data for demonstration
const recentSales = [
  {
    id: 1,
    client: "Ana Silva",
    amount: 450.00,
    type: "PIX",
    status: "Pago",
    date: "Hoje, 14:30"
  },
  {
    id: 2,
    client: "Marcos Oliveira",
    amount: 1250.00,
    type: "Boleto",
    status: "Pendente",
    date: "Hoje, 11:45"
  },
  {
    id: 3,
    client: "Empresa XYZ Ltda",
    amount: 3780.50,
    type: "Cartão",
    status: "Pago",
    date: "Ontem, 16:20"
  },
  {
    id: 4,
    client: "Paulo Santos ME",
    amount: 899.90,
    type: "PIX",
    status: "Pago",
    date: "Ontem, 09:15"
  },
  {
    id: 5,
    client: "Maria Ferreira",
    amount: 580.00,
    type: "Boleto",
    status: "Atrasado",
    date: "19/03/2025"
  }
];

// Revenue data for chart
const revenueData = [
  { month: "Jan", previsto: 15000, confirmado: 14200, recebido: 13800 },
  { month: "Fev", previsto: 18000, confirmado: 17500, recebido: 16900 },
  { month: "Mar", previsto: 22000, confirmado: 21000, recebido: 20100 },
  { month: "Abr", previsto: 25000, confirmado: 23500, recebido: 22000 },
  { month: "Mai", previsto: 28000, confirmado: 26700, recebido: 25500 },
  { month: "Jun", previsto: 30000, confirmado: 29000, recebido: 28000 }
];

// Clientes data for chart
const clientesData = [
  { month: "Jan", novos: 12, ativos: 45, inativos: 8 },
  { month: "Fev", novos: 15, ativos: 52, inativos: 5 },
  { month: "Mar", novos: 18, ativos: 65, inativos: 6 },
  { month: "Abr", novos: 22, ativos: 75, inativos: 4 },
  { month: "Mai", novos: 20, ativos: 89, inativos: 3 },
  { month: "Jun", novos: 25, ativos: 105, inativos: 7 }
];

// Cobrança por tipo data
const cobrancasTipoData = {
  labels: ["PIX", "Boleto", "Cartão"],
  values: [65, 25, 10]
};

// Próximos vencimentos
const proximosVencimentos = [
  { id: 1, cliente: "Carlos Mendes", valor: 1250.00, data: "25/03/2025", tipo: "boleto" },
  { id: 2, cliente: "Luciana Ferreira", valor: 845.90, data: "26/03/2025", tipo: "cartao" },
  { id: 3, cliente: "Global Tech LTDA", valor: 2789.00, data: "27/03/2025", tipo: "boleto" },
  { id: 4, cliente: "Pedro Almeida", valor: 350.00, data: "28/03/2025", tipo: "pix" }
];

// Top clientes
const topClientes = [
  { nome: "Empresa ABC Ltda.", compras: 12, valor: 15480.75 },
  { nome: "Consultoria XYZ S.A.", compras: 8, valor: 12750.50 },
  { nome: "Ana Silva", compras: 7, valor: 9870.00 },
  { nome: "Roberto Comércio ME", compras: 6, valor: 7650.25 },
  { nome: "Maria Santos", compras: 5, valor: 6320.80 }
];

// Component to show stats in vertical layout
const StatsBox = ({ title, items, loading }: StatsBoxProps) => (
  <div className="bg-white rounded-xl shadow-sm p-5 flex-1">
    {loading ? (
      <>
        <Skeleton className="h-6 w-36 mb-6" />
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-2 w-full" />
            </div>
          ))}
        </div>
      </>
    ) : (
      <>
        <h3 className="text-gray-700 font-medium mb-4">{title}</h3>
        <div className="space-y-3">
          {items.map((item: StatsBoxItem, index: number) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className={`font-bold text-${item.color}`}>{item.value}</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-${item.color} rounded-full`}
                  style={{ width: item.value.startsWith('R$')
                    ? `${Math.min(parseInt(item.value.replace(/\D/g, '')) / 500, 100)}%`
                    : `${Math.min(parseInt(item.value.replace(/\D/g, '')) * 5, 100)}%`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);

// Small Stats Card
const StatsCard = ({ title, value, icon, color, loading }: StatsCardProps) => (
  <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
    {loading ? (
      <>
        <Skeleton className="h-4 w-24 mb-2" />
        <Skeleton className="h-6 w-16" />
      </>
    ) : (
      <>
        <div className="text-sm font-medium text-gray-500 mb-2">{title}</div>
        <div className="flex items-center">
          {icon}
          <div className={`text-2xl font-bold ${color}`}>{value}</div>
        </div>
      </>
    )}
  </div>
);

// Section Container with toggle
const SectionContainer = ({ title, icon, children, defaultExpanded = true }: SectionContainerProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  
  return (
    <div className="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
      <div 
        className="p-4 border-b border-gray-100 flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          {icon}
          <h3 className="text-lg font-medium text-gray-700 ml-2">{title}</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      <div className={`transition-all duration-300 ease-in-out ${expanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        {children}
      </div>
    </div>
  );
};

// Profile menu dropdown
const ProfileMenu = ({ isOpen, onClose }: ProfileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-30">
      <div className="p-4 border-b border-gray-100">
        <p className="font-medium">João Silva</p>
        <p className="text-sm text-gray-500">joao.silva@email.com</p>
      </div>
      <ul className="py-2">
        <li>
          <Link href="/perfil" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <User className="w-4 h-4 mr-2" />
            Meu Perfil
          </Link>
        </li>
        <li>
          <Link href="/configuracoes" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Settings className="w-4 h-4 mr-2" />
            Configurações
          </Link>
        </li>
        <li>
          <Link href="/contas" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <Landmark className="w-4 h-4 mr-2" />
            Minhas Contas Bancárias
          </Link>
        </li>
        <li className="border-t border-gray-100 mt-2">
          <Link href="/login" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Link>
        </li>
      </ul>
    </div>
  );
};

// Create charge popup
const CreateChargePopup = ({ isOpen, onClose }: CreateChargePopupProps) => {
  const router = useRouter();

  if (!isOpen) return null;

  const handlePaymentMethodSelect = (method: string) => {
    onClose();
    router.push(`/dashboard/cobrancas/novo/${method.toLowerCase()}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Criar Cobrança</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => handlePaymentMethodSelect('pix')}
            className="flex items-center justify-center p-6 border-2 border-[#E85A27]/20 hover:border-[#E85A27] bg-[#E85A27]/5 rounded-xl transition-colors"
          >
            <Zap className="text-[#E85A27] w-8 h-8 mr-3" />
            <span className="font-medium text-[#E85A27]">PIX</span>
          </button>

          <button 
            onClick={() => handlePaymentMethodSelect('boleto')}
            className="flex items-center justify-center p-6 border-2 border-[#E85A27]/20 hover:border-[#E85A27] bg-[#E85A27]/5 rounded-xl transition-colors"
          >
            <FileText className="text-[#E85A27] w-8 h-8 mr-3" />
            <span className="font-medium text-[#E85A27]">Boleto</span>
          </button>

          <button 
            onClick={() => handlePaymentMethodSelect('link')}
            className="flex items-center justify-center p-6 border-2 border-[#E85A27]/20 hover:border-[#E85A27] bg-[#E85A27]/5 rounded-xl transition-colors"
          >
            <Link href="" className="text-[#E85A27] w-8 h-8 mr-3" />
            <span className="font-medium text-[#E85A27]">Link de Pagamento</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// AI assistant popup
const AIAssistantPopup = ({ isOpen, onClose }: AIAssistantPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex items-end md:items-center justify-center z-50">
      <div className="bg-white rounded-t-xl md:rounded-xl p-6 w-full max-w-xl h-[80vh] md:h-[70vh] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <h2 className="text-xl font-bold">Assistente Financeiro</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto border rounded-xl p-4 mb-4 bg-gray-50">
          <div className="flex mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center mr-3">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
              <p className="text-gray-800">Olá, João! Como posso ajudar você com suas finanças hoje?</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Digite sua pergunta..."
            className="w-full border-gray-300 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#E85A27] focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#E85A27]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Filter panel component
const FilterPanel = ({ isOpen, onClose }: FilterPanelProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/30 flex items-end md:items-center justify-center z-50">
      <div className="bg-white rounded-t-xl md:rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Filtros</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Período</label>
            <select className="w-full border rounded-md p-2">
              <option>Últimos 30 dias</option>
              <option>Este mês</option>
              <option>Mês passado</option>
              <option>Este ano</option>
              <option>Personalizado</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="status-all" className="mr-2" />
                <label htmlFor="status-all">Todos</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="status-paid" className="mr-2" />
                <label htmlFor="status-paid">Pagos</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="status-pending" className="mr-2" />
                <label htmlFor="status-pending">Pendentes</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="status-overdue" className="mr-2" />
                <label htmlFor="status-overdue">Atrasados</label>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Cobrança</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="type-all" className="mr-2" />
                <label htmlFor="type-all">Todos</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="type-pix" className="mr-2" />
                <label htmlFor="type-pix">PIX</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="type-boleto" className="mr-2" />
                <label htmlFor="type-boleto">Boleto</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="type-card" className="mr-2" />
                <label htmlFor="type-card">Cartão</label>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Valor</label>
            <div className="flex space-x-4">
              <div>
                <label className="text-xs text-gray-500">Mínimo</label>
                <input type="text" placeholder="R$ 0,00" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="text-xs text-gray-500">Máximo</label>
                <input type="text" placeholder="R$ 10.000,00" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 mt-8">
          <Button variant="outline" className="flex-1">Limpar</Button>
          <Button className="flex-1 bg-[#E85A27] hover:bg-[#D84A1F] text-white">
            Aplicar Filtros
          </Button>
        </div>
      </div>
    </div>
  );
};

function transformDashboardData(
  dashboardData: ApiDashboardData,
  chargesSummary: ApiChargesSummary,
  customersSummary: ApiCustomersSummary,
  revenueSummary: ApiRevenueSummary,
  revenueChartData: ApiRevenueChartData[],
  latestCharges: ApiLatestCharge[]
): DashboardData {
  return {
    chargesSummary: {
      total: dashboardData.summary.totalOrders,
      paid: dashboardData.summary.completedOrders,
      pending: dashboardData.summary.pendingOrders,
      overdue: dashboardData.summary.canceledOrders,
    },
    customersSummary: {
      total: customersSummary.onTime + customersSummary.delinquent,
      active: customersSummary.onTime,
      inactive: customersSummary.delinquent,
    },
    revenueSummary: {
      total: dashboardData.summary.totalAmount,
      thisMonth: revenueSummary.confirmed,
      lastMonth: revenueSummary.expected,
    },
    revenueChartData: {
      labels: revenueChartData.map(d => d.month),
      datasets: [{
        label: 'Receita',
        data: revenueChartData.map(d => d.confirmed),
        borderColor: '#0ea5e9',
        backgroundColor: '#0ea5e933',
      }],
    },
    latestCharges: latestCharges.map(charge => ({
      id: String(charge.id),
      customer: {
        name: charge.buyer.name,
        email: charge.buyer.email,
      },
      amount: charge.totalAmount,
      status: charge.status as "paid" | "pending" | "failed",
      createdAt: charge.createdAt,
      paymentMethod: charge.type as "pix" | "boleto" | "credit_card",
    })),
  };
}

// Main Dashboard Component
export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [createChargeOpen, setCreateChargeOpen] = useState(false);
  const [aiAssistantOpen, setAIAssistantOpen] = useState(false);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [charges, setCharges] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [dashboardData, setDashboardData] = useState<any>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [
          chargesResponse, 
          clientsResponse, 
          chargesSummaryResponse,
          customersSummaryResponse,
          revenueResponse,
          revenueChartResponse,
          latestChargesResponse
        ] = await Promise.all([
          chargesService.getCharges({ take: 5 }),
          clientsService.getClients({ take: 5 }),
          api.get('/dashboard-analytics/charges-summary'),
          api.get('/dashboard-analytics/customers-summary'),
          api.get('/dashboard-analytics/revenue'),
          api.get('/dashboard-analytics/revenue-chart'),
          api.get('/dashboard-analytics/latest-charges')
        ]);

        setCharges(chargesResponse.charges);
        setClients(clientsResponse.clients);
        setDashboardData({
          chargesSummary: chargesSummaryResponse.data,
          customersSummary: customersSummaryResponse.data,
          revenueSummary: revenueResponse.data,
          revenueChartData: revenueChartResponse.data,
          latestCharges: latestChargesResponse.data
        });
      } catch (error) {
        toast.error('Erro ao carregar dados do dashboard');
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const getIconByTipo = (tipo: string) => {
    switch(tipo) {
      case "pix":
        return <Wallet className="h-4 w-4 text-green-600 mr-2" />;
      case "boleto":
        return <FileBarChart className="h-4 w-4 text-blue-600 mr-2" />;
      case "cartao":
        return <CreditCard className="h-4 w-4 text-purple-600 mr-2" />;
      default:
        return <FileText className="h-4 w-4 text-gray-600 mr-2" />;
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}


      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <StatsCard
            title="Cobranças Pagas"
            value={dashboardData?.chargesSummary?.received || "0"}
            icon={<CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
            color="text-green-600"
            loading={loading}
          />
          
          <StatsCard
            title="Cobranças Pendentes"
            value={dashboardData?.chargesSummary?.issued || "0"}
            icon={<Clock className="h-5 w-5 text-amber-500 mr-2" />}
            color="text-amber-500"
            loading={loading}
          />
          
          <StatsCard
            title="Cobranças Previstas"
            value={dashboardData?.chargesSummary?.expected || "0"}
            icon={<Calendar1 className="h-5 w-5 text-blue-500 mr-2" />}
            color="text-blue-500"
            loading={loading}
          />
          
          <StatsCard
            title="Valor Recebido"
            value={formatCurrency(dashboardData?.revenueSummary?.received || 0)}
            icon={<></>}
            color="text-green-600"
            loading={loading}
          />
          
          {/* <StatsCard
            title="Clientes Ativos"
            value={(clients?.length || 0).toString()}
            icon={<Users className="h-5 w-5 text-[#252E54] mr-2" />}
            color="text-[#252E54]"
            loading={loading}
          /> */}
        </div>

        {/* Main Stats Boxes */}
        <SectionContainer 
          title="Visão Geral" 
          icon={<BarChart2 className="h-5 w-5 text-[#E85A27]" />}
          defaultExpanded={true}
        >
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <StatsBox
                title="Clientes"
                items={[
                  { label: "Em dia", value: dashboardData?.customersSummary?.onTime?.toString() || "0", color: "green-500" },
                  { label: "Inadimplentes", value: dashboardData?.customersSummary?.delinquent?.toString() || "0", color: "red-500" },
                  { label: "Novos no mês", value: dashboardData?.customersSummary?.newThisMonth?.toString() || "0", color: "blue-500" }
                ]}
                loading={loading}
              />

              <StatsBox
                title="Cobranças"
                items={[
                  { label: "Previstas", value: dashboardData?.chargesSummary?.expected?.toString() || "0", color: "blue-500" },
                  { label: "Emitidas", value: dashboardData?.chargesSummary?.issued?.toString() || "0", color: "yellow-500" },
                  { label: "Recebidas", value: dashboardData?.chargesSummary?.received?.toString() || "0", color: "green-500" }
                ]}
                loading={loading}
              />

              <StatsBox
                title="Faturamento"
                items={[
                  { label: "Previsto", value: formatCurrency(dashboardData?.revenueSummary?.expected || 0), color: "blue-500" },
                  { label: "Pendente", value: formatCurrency(dashboardData?.revenueSummary?.confirmed || 0), color: "amber-400" },
                  { label: "Recebido", value: formatCurrency(dashboardData?.revenueSummary?.received || 0), color: "green-500" }
                ]}
                loading={loading}
              />
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-700">Receita (Últimos 6 meses)</h3>
                <div className="flex items-center text-sm">
                  <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-1"></span>
                  <span className="mr-3">Previsto</span>
                  <span className="inline-block w-3 h-3 bg-amber-400 rounded-full mr-1"></span>
                  <span className="mr-3">Confirmado</span>
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                  <span>Recebido</span>
                </div>
              </div>
              {loading ? (
                <Skeleton className="h-64 w-full" />
              ) : (
                <div className="h-64">
                  <AreaChart data={dashboardData?.revenueChartData || []} />
                </div>
              )}
            </div>
          </div>
        </SectionContainer>

        {/* Recent Sales Section */}
        <SectionContainer 
          title="Últimas Cobranças" 
          icon={<FileBarChart className="h-5 w-5 text-[#E85A27]" />}
          defaultExpanded={true}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-sm text-gray-500 bg-gray-50">
                  <th className="text-left p-4">Número</th>
                  <th className="text-left p-4">Cliente</th>
                  <th className="text-left p-4">
                    <div className="flex items-center">
                      Valor
                      <ArrowUpDown className="ml-1 h-3 w-3" />
                    </div>
                  </th>
                  <th className="text-left p-4">Tipo</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Data</th>
                  <th className="text-right p-4">Ações</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array(5).fill(0).map((_, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4"><Skeleton className="h-5 w-24" /></td>
                      <td className="p-4"><Skeleton className="h-5 w-32" /></td>
                      <td className="p-4"><Skeleton className="h-5 w-24" /></td>
                      <td className="p-4"><Skeleton className="h-5 w-16" /></td>
                      <td className="p-4"><Skeleton className="h-5 w-20" /></td>
                      <td className="p-4"><Skeleton className="h-5 w-20" /></td>
                      <td className="p-4 text-right"><Skeleton className="h-5 w-10 ml-auto" /></td>
                    </tr>
                  ))
                ) : (
                  (dashboardData?.latestCharges || []).map((charge) => (
                    <tr key={charge.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{charge.invoiceNumber}</td>
                      <td className="p-4">
                        <div>
                          <div className="font-medium">{charge.buyer.name}</div>
                          <div className="text-sm text-gray-500">{charge.buyer.email}</div>
                        </div>
                      </td>
                      <td className="p-4">{formatCurrency(charge.totalAmount)}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          charge.type === "SALE" 
                            ? "bg-blue-100 text-blue-800" 
                            : charge.type === "PURCHASE"
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                        }`}>
                          {ChargeType[charge.type as keyof typeof ChargeType] || charge.type}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          charge.status === "PAID" 
                            ? "bg-green-100 text-green-800" 
                            : charge.status === "PENDING"
                              ? "bg-amber-100 text-amber-800" 
                              : "bg-red-100 text-red-800"
                        }`}>
                          {ChargeStatus[charge.status as keyof typeof ChargeStatus] || charge.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-500">
                        {new Date(charge.createdAt).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="icon">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 flex justify-between items-center border-t">
            <p className="text-sm text-gray-500">Mostrando {(dashboardData?.latestCharges || []).length} cobranças</p>
            <Button variant="outline" size="sm">
              Ver todas <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </SectionContainer>

        {/* Próximos Vencimentos & Top Clientes */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <SectionContainer 
            title="Próximos Vencimentos" 
            icon={<Calendar className="h-5 w-5 text-[#E85A27]" />}
            defaultExpanded={true}
          >
            <div className="p-4">
              {loading ? (
                Array(4).fill(0).map((_, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border-b">
                    <div>
                      <Skeleton className="h-5 w-32 mb-2" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="text-right">
                      <Skeleton className="h-5 w-20 mb-2 ml-auto" />
                      <Skeleton className="h-4 w-16 ml-auto" />
                    </div>
                  </div>
                ))
              ) : (
                charges
                  .filter(charge => charge.status === "PENDING")
                  .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                  .slice(0, 4)
                  .map((charge) => (
                    <div key={charge.id} className="flex items-center justify-between p-3 border-b last:border-b-0 hover:bg-gray-50 rounded-md transition">
                      <div>
                        <div className="flex items-center">
                          {getIconByTipo(charge.paymentMethod.toLowerCase())}
                          <span className="font-medium">{charge.buyer.name}</span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">Vence em {new Date(charge.dueDate).toLocaleDateString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-800">{formatCurrency(charge.totalAmount)}</div>
                        <Button variant="ghost" size="sm" className="text-xs text-[#E85A27] hover:text-[#D84A1F] mt-1">
                          Detalhes
                        </Button>
                      </div>
                    </div>
                  ))
              )}
            </div>
            <div className="p-4 border-t">
              <Button variant="outline" size="sm" className="w-full">
                Ver todos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </SectionContainer>

          <SectionContainer 
            title="Top Clientes" 
            icon={<TrendingUp className="h-5 w-5 text-[#E85A27]" />}
            defaultExpanded={true}
          >
            <div className="p-4">
              {loading ? (
                Array(5).fill(0).map((_, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border-b">
                    <div>
                      <Skeleton className="h-5 w-32 mb-2" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-5 w-20" />
                  </div>
                ))
              ) : (
                clients
                  .sort((a, b) => b.totalAmount - a.totalAmount)
                  .slice(0, 5)
                  .map((client, index) => (
                    <div key={client.id} className="flex items-center justify-between p-3 border-b last:border-b-0 hover:bg-gray-50 rounded-md transition">
                      <div>
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center mr-3 font-medium">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium">{client.name}</div>
                            <div className="text-sm text-gray-500">{client.totalCharges} cobranças</div>
                          </div>
                        </div>
                      </div>
                      <div className="font-bold text-gray-800">
                        {formatCurrency(client.totalAmount)}
                      </div>
                    </div>
                  ))
              )}
            </div>
            <div className="p-4 border-t">
              <Button variant="outline" size="sm" className="w-full">
                Ver relatório completo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </SectionContainer>
        </div> */}

        {/* AI Assistant Button */}
        <div className="fixed bottom-6 right-6">
          <Button
            onClick={() => setAIAssistantOpen(true)}
            className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg"
          >
            <Sparkles className="h-6 w-6 text-white" />
          </Button>
        </div>
      </main>

      {/* Create Charge Popup */}
      <CreateChargePopup isOpen={createChargeOpen} onClose={() => setCreateChargeOpen(false)} />

      {/* AI Assistant Popup */}
      <AIAssistantPopup isOpen={aiAssistantOpen} onClose={() => setAIAssistantOpen(false)} />

      {/* Filter Panel */}
      <FilterPanel isOpen={filterPanelOpen} onClose={() => setFilterPanelOpen(false)} />
    </div>
  );
}