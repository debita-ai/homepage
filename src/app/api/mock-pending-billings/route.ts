import { NextResponse } from 'next/server'

export async function GET() {
  const mockData = [
    {
      id: 1,
      customerName: "João Silva",
      amount: 1500.00,
      dueDate: "2024-04-15",
      status: "pending",
      invoiceNumber: "INV-001",
      description: "Serviços de consultoria",
      paymentMethod: "PIX",
      createdAt: "2024-03-20"
    },
    {
      id: 2,
      customerName: "Maria Santos",
      amount: 2750.50,
      dueDate: "2024-04-20",
      status: "pending",
      invoiceNumber: "INV-002",
      description: "Desenvolvimento de software",
      paymentMethod: "Transferência",
      createdAt: "2024-03-21"
    },
    {
      id: 3,
      customerName: "Pedro Oliveira",
      amount: 980.00,
      dueDate: "2024-04-10",
      status: "pending",
      invoiceNumber: "INV-003",
      description: "Manutenção de sistema",
      paymentMethod: "Cartão de Crédito",
      createdAt: "2024-03-19"
    },
    {
      id: 4,
      customerName: "Ana Costa",
      amount: 3200.00,
      dueDate: "2024-04-25",
      status: "pending",
      invoiceNumber: "INV-004",
      description: "Projeto de implementação",
      paymentMethod: "PIX",
      createdAt: "2024-03-22"
    },
    {
      id: 5,
      customerName: "Carlos Mendes",
      amount: 850.00,
      dueDate: "2024-04-05",
      status: "pending",
      invoiceNumber: "INV-005",
      description: "Treinamento técnico",
      paymentMethod: "Transferência",
      createdAt: "2024-03-18"
    },
    {
      id: 6,
      customerName: "Beatriz Ferreira",
      amount: 2100.00,
      dueDate: "2024-04-30",
      status: "pending",
      invoiceNumber: "INV-006",
      description: "Consultoria de segurança",
      paymentMethod: "Cartão de Crédito",
      createdAt: "2024-03-23"
    },
    {
      id: 7,
      customerName: "Rafael Lima",
      amount: 1750.00,
      dueDate: "2024-04-12",
      status: "pending",
      invoiceNumber: "INV-007",
      description: "Suporte técnico",
      paymentMethod: "PIX",
      createdAt: "2024-03-20"
    },
    {
      id: 8,
      customerName: "Juliana Alves",
      amount: 2900.00,
      dueDate: "2024-04-28",
      status: "pending",
      invoiceNumber: "INV-008",
      description: "Desenvolvimento de aplicativo",
      paymentMethod: "Transferência",
      createdAt: "2024-03-21"
    },
    {
      id: 9,
      customerName: "Marcos Santos",
      amount: 1200.00,
      dueDate: "2024-04-08",
      status: "pending",
      invoiceNumber: "INV-009",
      description: "Configuração de servidor",
      paymentMethod: "Cartão de Crédito",
      createdAt: "2024-03-19"
    },
    {
      id: 10,
      customerName: "Patricia Silva",
      amount: 2500.00,
      dueDate: "2024-04-22",
      status: "pending",
      invoiceNumber: "INV-010",
      description: "Implementação de sistema",
      paymentMethod: "PIX",
      createdAt: "2024-03-22"
    }
  ]

  return NextResponse.json(mockData)
} 