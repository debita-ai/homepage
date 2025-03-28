import { NextResponse } from 'next/server'

export async function GET() {
  const mockTransactions = [
    { id: 1, cliente: "Tech Solutions Inc", descricao: "Pagamento recebido", valor: 12500.00, data: "28/03/2024", tipo: "recebido" },
    { id: 2, cliente: "Global Systems", descricao: "Pagamento recebido", valor: 8500.00, data: "27/03/2024", tipo: "recebido" },
    { id: 3, cliente: "Fornecedor Cloud", descricao: "Transferência bancária", valor: -3200.00, data: "26/03/2024", tipo: "transferencia" },
    { id: 4, cliente: "Digital Solutions", descricao: "Pagamento recebido", valor: 15000.00, data: "25/03/2024", tipo: "recebido" },
    { id: 5, cliente: "Colaborador João", descricao: "Transferência bancária", valor: -4500.00, data: "24/03/2024", tipo: "transferencia" },
    { id: 6, cliente: "Cliente Premium", descricao: "Transação cancelada", valor: 0.00, data: "23/03/2024", tipo: "cancelado" },
    { id: 7, cliente: "Enterprise Corp", descricao: "Pagamento recebido", valor: 25000.00, data: "22/03/2024", tipo: "recebido" },
    { id: 8, cliente: "Startup X", descricao: "Pagamento recebido", valor: 7500.00, data: "21/03/2024", tipo: "recebido" },
    { id: 9, cliente: "Fornecedor Serviços", descricao: "Transferência bancária", valor: -2800.00, data: "20/03/2024", tipo: "transferencia" },
    { id: 10, cliente: "Cliente VIP", descricao: "Pagamento recebido", valor: 18000.00, data: "19/03/2024", tipo: "recebido" },
    { id: 11, cliente: "Colaborador Maria", descricao: "Transferência bancária", valor: -3800.00, data: "18/03/2024", tipo: "transferencia" },
    { id: 12, cliente: "Tech Partner", descricao: "Pagamento recebido", valor: 22000.00, data: "17/03/2024", tipo: "recebido" },
    { id: 13, cliente: "Cliente Regular", descricao: "Transação cancelada", valor: 0.00, data: "16/03/2024", tipo: "cancelado" },
    { id: 14, cliente: "Fornecedor Infra", descricao: "Transferência bancária", valor: -4200.00, data: "15/03/2024", tipo: "transferencia" },
    { id: 15, cliente: "Enterprise Plus", descricao: "Pagamento recebido", valor: 30000.00, data: "14/03/2024", tipo: "recebido" }
  ]

  return NextResponse.json(mockTransactions)
} 