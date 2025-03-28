"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
  Inbox,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AreaChart from "@/components/dashboard/charts";
import { toast } from "sonner";

// Interfaces
interface DashboardMetrics {
  cobrancasPagas: number;
  cobrancasPendentes: number;
  cobrancasCanceladas: number;
  valorRecebido: number;
  clientesAtivos: number;
  clientesEmDia: number;
  clientesInadimplentes: number;
  clientesNovosMes: number;
  cobrancasPrevistas: number;
  cobrancasEmitidas: number;
  cobrancasRecebidas: number;
  faturamentoPrevisto: number;
  faturamentoConfirmado: number;
  faturamentoRecebido: number;
  cobrancasEsperadas: number;
  totalClientes: number;
  receitaPrevista: number;
  receitaConfirmada: number;
  receitaRecebida: number;
}

interface ChartData {
  month: string;
  previsto: number;
  confirmado: number;
  recebido: number;
}

interface ClientesChartData {
  month: string;
  novos: number;
  ativos: number;
  inativos: number;
}

interface RecentSale {
  id: number;
  client: string;
  amount: number;
  type: string;
  status: string;
  date: string;
}

interface ProximoVencimento {
  id: number;
  cliente: string;
  valor: number;
  data: string;
  tipo: string;
}

interface TopCliente {
  nome: string;
  compras: number;
  valor: number;
}

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  loading?: boolean;
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
const StatsBox = ({ title, items, loading }: {
  title: string,
  items: { label: string, value: string, color: string }[],
  loading?: boolean
}) => (
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
          {items.map((item, index) => (
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
const StatsCard = ({ title, value, icon, color, loading }: {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  loading?: boolean;
}) => (
  <div className={`bg-white rounded-xl shadow-sm p-6 border border-gray-100 ${title === "Valor Recebido" ? "" : ""}`}>
    <div className="flex items-center justify-between mb-4">
      <div className="text-sm font-medium text-gray-500">{title}</div>
      {icon}
    </div>
    {loading ? (
      <Skeleton className="h-8 w-24" />
    ) : (
      <div className={`text-2xl font-bold text-${color}-500`}>{value}</div>
    )}
  </div>
);

// Section Container with toggle
const SectionContainer = ({ title, icon, children, defaultExpanded = true }) => {
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
const ProfileMenu = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
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
const CreateChargePopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Emitir Cobrança</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex flex-col items-center justify-center p-6 border-2 border-[#E85A27]/20 hover:border-[#E85A27] bg-[#E85A27]/5 rounded-xl transition-colors">
            <Zap className="text-[#E85A27] w-8 h-8 mb-2" />
            <span className="font-medium text-[#E85A27]">PIX</span>
          </button>

          <button className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 hover:border-[#E85A27]/40 hover:bg-gray-50 rounded-xl transition-colors">
            <FileText className="text-gray-600 w-8 h-8 mb-2" />
            <span className="font-medium text-gray-600">Boleto</span>
          </button>
        </div>

        <div className="mt-8">
          <Button className="w-full py-6 bg-[#E85A27] hover:bg-[#D84A1F] text-white font-medium">
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

// AI assistant popup
// const AIAssistantPopup = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/30 flex items-end md:items-center justify-center z-50">
//       <div className="bg-white rounded-t-xl md:rounded-xl p-6 w-full max-w-xl h-[80vh] md:h-[70vh] flex flex-col">
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mr-3">
//               <Bot className="h-4 w-4 text-white" />
//             </div>
//             <h2 className="text-xl font-bold">Assistente Financeiro</h2>
//           </div>
//           <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//             <X size={20} />
//           </button>
//         </div>

//         <div className="flex-1 overflow-y-auto border rounded-xl p-4 mb-4 bg-gray-50">
//           <div className="flex mb-4">
//             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex-shrink-0 flex items-center justify-center mr-3">
//               <Bot className="h-4 w-4 text-white" />
//             </div>
//             <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
//               <p className="text-gray-800">Olá, João! Como posso ajudar você com suas finanças hoje?</p>
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Digite sua pergunta..."
//             className="w-full border-gray-300 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#E85A27] focus:border-transparent"
//           />
//           <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#E85A27]">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// Filter panel component
const FilterPanel = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
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

// Main Dashboard Component
export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [createChargeOpen, setCreateChargeOpen] = useState(false);
  const [aiAssistantOpen, setAIAssistantOpen] = useState(false);
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("resumo");
  const [dateRange, setDateRange] = useState("30dias");
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // State for API data
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [recentSales, setRecentSales] = useState<RecentSale[]>([]);
  const [proximosVencimentos, setProximosVencimentos] = useState<ProximoVencimento[]>([]);
  const [topClientes, setTopClientes] = useState<TopCliente[]>([]);
  const [revenueData, setRevenueData] = useState<ChartData[]>([]);
  const [clientesData, setClientesData] = useState<ClientesChartData[]>([]);

  // Fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch metrics
      const metricsResponse = await fetch('/api/dashboard/metrics', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!metricsResponse.ok) {
        console.error('Metrics response status:', metricsResponse.status);
        console.error('Metrics response status text:', metricsResponse.statusText);
        throw new Error(`Erro ao carregar métricas: ${metricsResponse.status} ${metricsResponse.statusText}`);
      }
      
      const metricsData = await metricsResponse.json();
      console.log('Metrics data received:', metricsData);
      setMetrics(metricsData);

      // Fetch recent sales
      const salesResponse = await fetch('/api/dashboard/recent-sales', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!salesResponse.ok) {
        throw new Error(`Erro ao carregar vendas recentes: ${salesResponse.status} ${salesResponse.statusText}`);
      }
      
      const salesData = await salesResponse.json();
      setRecentSales(salesData);

      // Fetch upcoming payments
      const vencimentosResponse = await fetch('/api/dashboard/upcoming-payments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!vencimentosResponse.ok) {
        throw new Error(`Erro ao carregar vencimentos: ${vencimentosResponse.status} ${vencimentosResponse.statusText}`);
      }
      
      const vencimentosData = await vencimentosResponse.json();
      setProximosVencimentos(vencimentosData);

      // Fetch top clients
      const clientesResponse = await fetch('/api/dashboard/top-clients', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!clientesResponse.ok) {
        throw new Error(`Erro ao carregar top clientes: ${clientesResponse.status} ${clientesResponse.statusText}`);
      }
      
      const clientesData = await clientesResponse.json();
      setTopClientes(clientesData);

      // Fetch revenue chart data
      const revenueResponse = await fetch('/api/dashboard/revenue-chart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!revenueResponse.ok) {
        throw new Error(`Erro ao carregar dados do gráfico de receita: ${revenueResponse.status} ${revenueResponse.statusText}`);
      }
      
      const revenueChartData = await revenueResponse.json();
      setRevenueData(revenueChartData);

      // Fetch clients chart data
      const clientsResponse = await fetch('/api/dashboard/clients-chart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!clientsResponse.ok) {
        throw new Error(`Erro ao carregar dados do gráfico de clientes: ${clientsResponse.status} ${clientsResponse.statusText}`);
      }
      
      const clientsData = await clientsResponse.json();
      setClientesData(clientsData);

    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error instanceof Error ? error.message : 'Erro ao carregar dados. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle clicks outside the profile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Action buttons and tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          {/* <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
            <Button 
              variant="ghost" 
              className={`${activeTab === "resumo" ? "bg-[#E85A27] text-white" : "text-gray-700"}`}
              onClick={() => setActiveTab("resumo")}
            >
              Resumo
            </Button>
            <Button 
              variant="ghost" 
              className={`${activeTab === "cobrancas" ? "bg-[#E85A27] text-white" : "text-gray-700"}`}
              onClick={() => setActiveTab("cobrancas")}
            >
              Cobranças
            </Button>
            <Button 
              variant="ghost" 
              className={`${activeTab === "clientes" ? "bg-[#E85A27] text-white" : "text-gray-700"}`}
              onClick={() => setActiveTab("clientes")}
            >
              Clientes
            </Button>
          </div> */}
{/*           
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => setFilterPanelOpen(true)}>
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
            <Button 
              className="bg-[#E85A27] hover:bg-[#D84A1F] text-white"
              onClick={() => setCreateChargeOpen(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Nova Cobrança
            </Button>
          </div> */}
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          <StatsCard
            title="Cobranças Pagas"
            value={metrics?.cobrancasPagas.toString() || "0"}
            icon={<CheckCircle className="h-5 w-5 text-green-500" />}
            color="green"
            loading={loading}
          />
          
          <StatsCard
            title="Cobranças Pendentes"
            value={metrics?.cobrancasPendentes.toString() || "0"}
            icon={<Clock className="h-5 w-5 text-amber-500" />}
            color="amber"
            loading={loading}
          />
          
          <StatsCard
            title="Cobranças Canceladas"
            value={metrics?.cobrancasCanceladas.toString() || "0"}
            icon={<XCircle className="h-5 w-5 text-red-500" />}
            color="red"
            loading={loading}
          />
          
          <StatsCard
            title="Valor Recebido"
            value={`R$ ${metrics?.valorRecebido.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}`}
            icon={<></>}
            color="green"
            loading={loading}
          />
          
          <StatsCard
            title="Clientes Ativos"
            value={metrics?.clientesAtivos.toString() || "0"}
            icon={<Users className="h-5 w-5 text-[#252E54]" />}
            color="blue"
            loading={loading}
          />
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
                  { label: "Em dia", value: metrics?.clientesEmDia.toString() || "0", color: "green-500" },
                  { label: "Inadimplentes", value: metrics?.clientesInadimplentes.toString() || "0", color: "red-500" },
                  { label: "Novos no mês", value: metrics?.clientesNovosMes.toString() || "0", color: "blue-500" }
                ]}
                loading={loading}
              />

              <StatsBox
                title="Cobranças"
                items={[
                  { label: "Previstas", value: metrics?.cobrancasPrevistas.toString() || "0", color: "blue-500" },
                  { label: "Emitidas", value: metrics?.cobrancasEmitidas.toString() || "0", color: "black" },
                  { label: "Recebidas", value: metrics?.cobrancasRecebidas.toString() || "0", color: "green-500" }
                ]}
                loading={loading}
              />

              <StatsBox
                title="Faturamento"
                items={[
                  { label: "Previsto", value: `R$ ${metrics?.faturamentoPrevisto.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}`, color: "blue-500" },
                  { label: "Confirmado", value: `R$ ${metrics?.faturamentoConfirmado.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}`, color: "amber-400" },
                  { label: "Recebido", value: `R$ ${metrics?.faturamentoRecebido.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) || "0,00"}`, color: "green-500" }
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
              ) : revenueData.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <BarChart2 className="h-12 w-12 mb-4" />
                  <p className="text-lg font-medium">Nenhum dado disponível</p>
                  <p className="text-sm">Não há dados de receita para exibir no momento.</p>
                </div>
              ) : (
                <div className="h-64">
                  <AreaChart data={revenueData} />
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
                      <td className="p-4"><Skeleton className="h-5 w-32" /></td>
                      <td className="p-4"><Skeleton className="h-5 w-24" /></td>
                      <td className="p-4"><Skeleton className="h-5 w-16" /></td>
                      <td className="p-4"><Skeleton className="h-5 w-20" /></td>
                      <td className="p-4"><Skeleton className="h-5 w-20" /></td>
                      <td className="p-4 text-right"><Skeleton className="h-5 w-10 ml-auto" /></td>
                    </tr>
                  ))
                ) : recentSales.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12">
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        <Inbox className="h-12 w-12 mb-4" />
                        <p className="text-lg font-medium">Nenhuma cobrança encontrada</p>
                        <p className="text-sm">Não há cobranças para exibir no momento.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  recentSales.map((sale) => (
                    <tr key={sale.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{sale.client}</td>
                      <td className="p-4">R$ {sale.amount.toFixed(2).replace('.', ',')}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          sale.type === "PIX" 
                            ? "bg-green-100 text-green-800" 
                            : sale.type === "Boleto" 
                              ? "bg-blue-100 text-blue-800" 
                              : "bg-purple-100 text-purple-800"
                        }`}>
                          {sale.type}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          sale.status === "Pago" 
                            ? "bg-green-100 text-green-800" 
                            : sale.status === "Pendente" 
                              ? "bg-amber-100 text-amber-800" 
                              : "bg-red-100 text-red-800"
                        }`}>
                          {sale.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-gray-500">{sale.date}</td>
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
            <p className="text-sm text-gray-500">Mostrando {recentSales.length} de {metrics?.cobrancasPagas || 0} cobranças</p>
            <Button variant="outline" size="sm">
              Ver todas <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </SectionContainer>

        {/* Próximos Vencimentos & Top Clientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
              ) : proximosVencimentos.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <Calendar className="h-12 w-12 mb-4" />
                  <p className="text-lg font-medium">Nenhum vencimento próximo</p>
                  <p className="text-sm">Não há vencimentos para exibir no momento.</p>
                </div>
              ) : (
                proximosVencimentos.map((venc) => (
                  <div key={venc.id} className="flex items-center justify-between p-3 border-b last:border-b-0 hover:bg-gray-50 rounded-md transition">
                    <div>
                      <div className="flex items-center">
                        {getIconByTipo(venc.tipo)}
                        <span className="font-medium">{venc.cliente}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">Vence em {venc.data}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-800">R$ {venc.valor.toFixed(2).replace('.', ',')}</div>
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
              ) : topClientes.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <Users className="h-12 w-12 mb-4" />
                  <p className="text-lg font-medium">Nenhum cliente encontrado</p>
                  <p className="text-sm">Não há clientes para exibir no momento.</p>
                </div>
              ) : (
                topClientes.map((cliente, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border-b last:border-b-0 hover:bg-gray-50 rounded-md transition">
                    <div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center mr-3 font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{cliente.nome}</div>
                          <div className="text-sm text-gray-500">{cliente.compras} compras</div>
                        </div>
                      </div>
                    </div>
                    <div className="font-bold text-gray-800">
                      R$ {cliente.valor.toFixed(2).replace('.', ',')}
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
        </div>

        {/* AI Assistant Button */}
        {/* <div className="fixed bottom-6 right-6">
          <Button
            onClick={() => setAIAssistantOpen(true)}
            className="h-14 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg"
          >
            <Sparkles className="h-6 w-6 text-white" />
          </Button>
        </div> */}
      </main>

      {/* Create Charge Popup */}
      <CreateChargePopup isOpen={createChargeOpen} onClose={() => setCreateChargeOpen(false)} />

      {/* AI Assistant Popup */}
      {/* <AIAssistantPopup isOpen={aiAssistantOpen} onClose={() => setAIAssistantOpen(false)} /> */}

      {/* Filter Panel */}
      <FilterPanel isOpen={filterPanelOpen} onClose={() => setFilterPanelOpen(false)} />
    </div>
  );
}