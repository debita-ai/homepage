"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, Filter, MoreHorizontal, Edit, Trash, Download, Calendar, ChevronLeft, ChevronRight, AlertCircle, TrendingUp, CreditCard, Wallet } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Transaction {
  id: number;
  cliente: string;
  descricao: string;
  valor: number;
  data: string;
  tipo: string;
}

interface OverduePayment {
  id: number;
  cliente: string;
  valor: number;
  dataVencimento: string;
  diasAtraso: number;
}

interface Metrics {
  saldoAtual: number;
  saldoEsperado: number;
  totalAtrasado: number;
  totalAtrasados: number;
}

const transactions = [
  { id: 1, cliente: "Ana Silva", descricao: "Pagamento recebido", valor: 450.0, data: "10/03/2025", tipo: "recebido" },
  { id: 2, cliente: "Marcos Oliveira", descricao: "Pagamento recebido", valor: 1250.0, data: "11/03/2025", tipo: "recebido" },
  { id: 3, cliente: "Fornecedor X", descricao: "Transferência bancária", valor: -800.0, data: "09/03/2025", tipo: "transferencia" },
  { id: 4, cliente: "Empresa XYZ Ltda", descricao: "Pagamento recebido", valor: 2000.0, data: "15/03/2025", tipo: "recebido" },
  { id: 5, cliente: "Colaborador Y", descricao: "Transferência bancária", valor: -500.0, data: "14/03/2025", tipo: "transferencia" },
  { id: 6, cliente: "Cliente Z", descricao: "Transação cancelada", valor: 0.0, data: "12/03/2025", tipo: "cancelado" },
];

// Dados para os pagamentos atrasados
const overduePayments = [
  { id: 101, cliente: "Pedro Mendes", valor: 750.0, dataVencimento: "05/03/2025", diasAtraso: 15 },
  { id: 102, cliente: "Julia Costa", valor: 1200.0, dataVencimento: "02/03/2025", diasAtraso: 18 },
];

export default function BillingPage() {
  const [loading, setLoading] = useState(true);
  const [loadingMetrics, setLoadingMetrics] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentMonth, setCurrentMonth] = useState(3);
  const [currentYear, setCurrentYear] = useState(2025);
  const [viewMode, setViewMode] = useState("lista"); // "lista" ou "calendario"
  const [showCashoutModal, setShowCashoutModal] = useState(false);
  const [cashoutAmount, setCashoutAmount] = useState("");
  const [cashoutPassword, setCashoutPassword] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [overduePayments, setOverduePayments] = useState<OverduePayment[]>([]);
  const [metrics, setMetrics] = useState<Metrics>({
    saldoAtual: 0,
    saldoEsperado: 0,
    totalAtrasado: 0,
    totalAtrasados: 0
  });

  // Check for openWithdrawalModal flag in localStorage
  useEffect(() => {
    const shouldOpenModal = localStorage.getItem('openWithdrawalModal');
    if (shouldOpenModal === 'true') {
      setShowCashoutModal(true);
      localStorage.removeItem('openWithdrawalModal');
    }
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setLoadingMetrics(true);

      // Fetch transactions
      const transactionsResponse = await fetch('/api/wallet/transactions');
      if (!transactionsResponse.ok) throw new Error('Failed to fetch transactions');
      const transactionsData = await transactionsResponse.json();
      setTransactions(transactionsData);

      // Fetch overdue payments
      const overdueResponse = await fetch('/api/wallet/overdue-payments');
      if (!overdueResponse.ok) throw new Error('Failed to fetch overdue payments');
      const overdueData = await overdueResponse.json();
      setOverduePayments(overdueData);

      // Fetch metrics
      const metricsResponse = await fetch('/api/wallet/metrics');
      if (!metricsResponse.ok) throw new Error('Failed to fetch metrics');
      const metricsData = await metricsResponse.json();
      setMetrics(metricsData);

    } catch (error) {
      toast.error('Erro ao carregar dados');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setLoadingMetrics(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredTransactions = transactions.filter((t) =>
    t.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Cálculo dos totais para os cards
  const saldoAtual = transactions.reduce((acc, t) => acc + t.valor, 0);
  const saldoEsperado = saldoAtual + overduePayments.reduce((acc, p) => acc + p.valor, 0);
  const totalAtrasado = overduePayments.reduce((acc, p) => acc + p.valor, 0);

  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const changeMonth = (direction: string) => {
    setCurrentMonth((prev) => {
      let newMonth = direction === "next" ? prev + 1 : prev - 1;
      let newYear = currentYear;
      if (newMonth > 12) {
        newMonth = 1;
        newYear++;
      } else if (newMonth < 1) {
        newMonth = 12;
        newYear--;
      }
      setCurrentYear(newYear);
      return newMonth;
    });
  };

  // Função para gerar o calendário do mês atual
  const generateCalendar = () => {
    const firstDay = new Date(currentYear, currentMonth - 1, 1);
    const lastDay = new Date(currentYear, currentMonth, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const calendar: any = [];
    let dayCount = 1;

    // Mapeamento das transações por dia
    const transactionsByDay = {};
    transactions.forEach(t => {
      const [day, month, year] = t.data.split('/').map(Number);
      if (month === currentMonth && year === currentYear) {
        if (!transactionsByDay[day]) {
          transactionsByDay[day] = [];
        }
        transactionsByDay[day].push(t);
      }
    });

    // Dias da semana
    const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    
    // Adicionar cabeçalho dos dias da semana
    const weekdaysRow = (
      <tr key="weekdays">
        {weekdays.map((day, index) => (
          <th key={index} className="p-2 text-center text-xs font-medium text-gray-500">
            {day}
          </th>
        ))}
      </tr>
    );
    calendar.push(weekdaysRow);

    // Gerar as semanas
    let days: any = [];
    
    // Preencher os espaços vazios do início do mês
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(
        <td key={`empty-${i}`} className="p-2 border border-gray-100"></td>
      );
    }

    // Preencher os dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      const hasTransactions = transactionsByDay[i]?.length > 0;
      const receivedTransactions = transactionsByDay[i]?.filter((t: { tipo: string; }) => t.tipo === "recebido").length || 0;
      const transferTransactions = transactionsByDay[i]?.filter((t: { tipo: string; }) => t.tipo === "transferencia").length || 0;
      const canceledTransactions = transactionsByDay[i]?.filter((t: { tipo: string; }) => t.tipo === "cancelado").length || 0;

      days.push(
        <td key={`day-${i}`} className="p-2 border border-gray-100 min-h-16 text-center relative">
          <div className="font-medium">{i}</div>
          {hasTransactions && (
            <div className="flex justify-center space-x-1 mt-1">
              {receivedTransactions > 0 && (
                <div className="h-2 w-2 rounded-full bg-green-500" title={`${receivedTransactions} recebimentos`}></div>
              )}
              {transferTransactions > 0 && (
                <div className="h-2 w-2 rounded-full bg-yellow-500" title={`${transferTransactions} transferências`}></div>
              )}
              {canceledTransactions > 0 && (
                <div className="h-2 w-2 rounded-full bg-red-500" title={`${canceledTransactions} cancelados`}></div>
              )}
            </div>
          )}
        </td>
      );

      // Se chegou ao fim da semana (sábado) ou ao fim do mês, adicionar a semana à tabela
      if ((startingDayOfWeek + dayCount) % 7 === 0 || dayCount === daysInMonth) {
        // Se estivermos no final do mês, preencher os espaços vazios
        if (dayCount === daysInMonth) {
          const remainingDays = 7 - days.length % 7;
          if (remainingDays < 7) {
            for (let j = 0; j < remainingDays; j++) {
              days.push(
                <td key={`empty-end-${j}`} className="p-2 border border-gray-100"></td>
              );
            }
          }
        }
        
        calendar.push(<tr key={`week-${Math.ceil(dayCount / 7)}`}>{days}</tr>);
        days = [];
      }
      
      dayCount++;
    }

    return (
      <table className="w-full border-collapse">
        <thead>{calendar[0]}</thead>
        <tbody>{calendar.slice(1)}</tbody>
      </table>
    );
  };

  const handleCashout = async () => {
    try {
      if (!cashoutAmount || !cashoutPassword) {
        toast.error('Por favor, preencha todos os campos');
        return;
      }

      const amount = parseFloat(cashoutAmount);
      if (amount <= 0) {
        toast.error('O valor deve ser maior que zero');
        return;
      }

      if (amount > saldoAtual) {
        toast.error('Saldo insuficiente');
        return;
      }

      // Here you would make the API call to process the cashout
      // For now, we'll just simulate it
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Saque realizado com sucesso!');
      setShowCashoutModal(false);
      setCashoutAmount("");
      setCashoutPassword("");
    } catch (error) {
      toast.error('Erro ao realizar o saque');
      console.error('Error processing cashout:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Faturamento</h1>
      </div>

      {/* Cards informativos com novo estilo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Card 1: Saldo Atual */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 transform translate-x-4 translate-y-4">
            <CreditCard className="h-32 w-32 text-white/10" />
          </div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="text-sm font-medium opacity-90">Saldo Atual</div>
              <Dialog open={showCashoutModal} onOpenChange={setShowCashoutModal}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                    <Wallet className="mr-2 h-4 w-4" /> Sacar
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Realizar Saque</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Valor do Saque</label>
                      <Input
                        type="number"
                        placeholder="Digite o valor"
                        value={cashoutAmount}
                        onChange={(e) => setCashoutAmount(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Senha de Confirmação</label>
                      <Input
                        type="password"
                        placeholder="Digite sua senha"
                        value={cashoutPassword}
                        onChange={(e) => setCashoutPassword(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <Button 
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                      onClick={handleCashout}
                    >
                      Confirmar Saque
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex items-center">
              <CreditCard className="h-6 w-6 text-white/90 mr-2" />
              {loadingMetrics ? (
                <Skeleton className="h-8 w-32 bg-white/20" />
              ) : (
                <div className="text-3xl font-bold">R$ {metrics.saldoAtual.toFixed(2)}</div>
              )}
            </div>
          </div>
        </div>
        
        {/* Card 2: Saldo Esperado */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 transform translate-x-4 translate-y-4">
            <TrendingUp className="h-32 w-32 text-white/10" />
          </div>
          <div className="relative z-10">
            <div className="text-sm font-medium opacity-90 mb-4">Saldo Esperado</div>
            <div className="flex items-center">
              <TrendingUp className="h-6 w-6 text-white/90 mr-2" />
              {loadingMetrics ? (
                <Skeleton className="h-8 w-32 bg-white/20" />
              ) : (
                <div className="text-3xl font-bold">R$ {metrics.saldoEsperado.toFixed(2)}</div>
              )}
            </div>
          </div>
        </div>
        
        {/* Card 3: Pagamentos Atrasados */}
        <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 transform translate-x-4 translate-y-4">
            <AlertCircle className="h-32 w-32 text-white/10" />
          </div>
          <div className="relative z-10">
            <div className="text-sm font-medium opacity-90 mb-4">Pagamentos Atrasados</div>
            <div className="flex items-center">
              <AlertCircle className="h-6 w-6 text-white/90 mr-2" />
              {loadingMetrics ? (
                <Skeleton className="h-8 w-32 bg-white/20" />
              ) : (
                <div className="text-3xl font-bold">R$ {metrics.totalAtrasado.toFixed(2)}</div>
              )}
              <div className="ml-2 text-sm opacity-90">({metrics.totalAtrasados} itens)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles do mês e tipo de visualização */}
      <div className="bg-white rounded-xl shadow-sm mb-6">
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <div className="flex items-center">
            <Button 
              variant="outline" 
              className="mr-2"
              size="sm"
              onClick={() => changeMonth("prev")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-lg font-medium">{monthNames[currentMonth - 1]} {currentYear}</h2>
            <Button 
              variant="outline" 
              className="ml-2"
              size="sm"
              onClick={() => changeMonth("next")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant={viewMode === "lista" ? "default" : "outline"} 
              className={viewMode === "lista" ? "bg-blue-500 text-white" : "text-gray-500"} 
              size="sm"
              onClick={() => setViewMode("lista")}
            >
              Lista
            </Button>
            <Button 
              variant={viewMode === "calendario" ? "default" : "outline"} 
              className={viewMode === "calendario" ? "bg-blue-500 text-white" : "text-gray-500"} 
              size="sm"
              onClick={() => setViewMode("calendario")}
            >
              <Calendar className="mr-2 h-4 w-4" /> Calendário
            </Button>
          </div>
        </div>

        {/* Visualização do calendário */}
        {viewMode === "calendario" && (
          <div className="p-4">
            {generateCalendar()}
            <div className="mt-4 flex justify-center space-x-4">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-1"></div>
                <span className="text-xs text-gray-500">Recebimento</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></div>
                <span className="text-xs text-gray-500">Transferência</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
                <span className="text-xs text-gray-500">Cancelada</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lista de transações */}
      {viewMode === "lista" && (
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b border-gray-100 flex justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar por cliente"
                className="pl-10 w-full border rounded p-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="text-gray-500" size="sm">
                <Filter className="mr-2 h-4 w-4" /> Filtrar
              </Button>
              <Button variant="outline" className="text-gray-500" size="sm">
                <Download className="mr-2 h-4 w-4" /> Exportar
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descrição</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading
                  ? Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <tr key={i} className="bg-white">
                          {Array(5)
                            .fill(0)
                            .map((_, j) => (
                              <td key={j} className="px-6 py-4">
                                <Skeleton className="h-4 w-full" />
                              </td>
                            ))}
                        </tr>
                      ))
                  : filteredTransactions.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center">
                          <div className="flex flex-col items-center justify-center text-gray-500">
                            <CreditCard className="h-12 w-12 mb-4 text-gray-400" />
                            <p className="text-lg font-medium">Nenhuma transação encontrada</p>
                            <p className="text-sm mt-1">Não há transações para exibir no momento</p>
                          </div>
                        </td>
                      </tr>
                    ) : filteredTransactions.map((t) => (
                      <tr key={t.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">{t.cliente}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{t.descricao}</td>
                        <td className="px-6 py-4 whitespace-nowrap">R$ {t.valor.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{t.data}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <span
                            className={`px-2 py-1 inline-flex text-xs font-semibold rounded-full ${
                              t.tipo === "recebido"
                                ? "bg-green-100 text-green-800"
                                : t.tipo === "transferencia"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {t.tipo === "recebido" ? "Recebimento" : t.tipo === "transferencia" ? "Transferência" : "Cancelada"}
                          </span>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Seção de pagamentos atrasados */}
      <div className="mt-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Pagamentos Atrasados</h2>
        <div className="bg-white rounded-xl shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Valor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Data Vencimento</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dias em Atraso</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading
                  ? Array(2)
                      .fill(0)
                      .map((_, i) => (
                        <tr key={i} className="bg-white">
                          {Array(5)
                            .fill(0)
                            .map((_, j) => (
                              <td key={j} className="px-6 py-4">
                                <Skeleton className="h-4 w-full" />
                              </td>
                            ))}
                        </tr>
                      ))
                  : overduePayments.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center">
                          <div className="flex flex-col items-center justify-center text-gray-500">
                            <AlertCircle className="h-12 w-12 mb-4 text-gray-400" />
                            <p className="text-lg font-medium">Nenhum pagamento atrasado</p>
                            <p className="text-sm mt-1">Ótimo! Todos os pagamentos estão em dia</p>
                          </div>
                        </td>
                      </tr>
                    ) : overduePayments.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">{p.cliente}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-red-600 font-medium">
                          R$ {p.valor.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{p.dataVencimento}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 inline-flex text-xs font-semibold rounded-full bg-red-100 text-red-800">
                            {p.diasAtraso} dias
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Button variant="outline" size="sm" className="mr-2">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}