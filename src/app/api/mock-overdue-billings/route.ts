import { NextResponse } from 'next/server'

export async function GET() {
  const mockData = [
    {
      id: 1,
      customerName: "Ricardo Santos",
      amount: 3200.00,
      dueDate: "2024-02-15",
      status: "overdue",
      invoiceNumber: "INV-021",
      description: "Desenvolvimento de sistema",
      paymentMethod: "PIX",
      createdAt: "2024-02-01",
      daysOverdue: 40
    },
    {
      id: 2,
      customerName: "Ana Paula Lima",
      amount: 1800.00,
      dueDate: "2024-02-20",
      status: "overdue",
      invoiceNumber: "INV-022",
      description: "Consultoria de TI",
      paymentMethod: "Transferência",
      createdAt: "2024-02-05",
      daysOverdue: 35
    },
    {
      id: 3,
      customerName: "Marcos Oliveira",
      amount: 4500.00,
      dueDate: "2024-02-10",
      status: "overdue",
      invoiceNumber: "INV-023",
      description: "Projeto de automação",
      paymentMethod: "Cartão de Crédito",
      createdAt: "2024-01-25",
      daysOverdue: 45
    },
    {
      id: 4,
      customerName: "Carolina Silva",
      amount: 950.00,
      dueDate: "2024-02-28",
      status: "overdue",
      invoiceNumber: "INV-024",
      description: "Manutenção de website",
      paymentMethod: "PIX",
      createdAt: "2024-02-10",
      daysOverdue: 27
    },
    {
      id: 5,
      customerName: "Pedro Costa",
      amount: 2800.00,
      dueDate: "2024-02-05",
      status: "overdue",
      invoiceNumber: "INV-025",
      description: "Desenvolvimento de app",
      paymentMethod: "Transferência",
      createdAt: "2024-01-20",
      daysOverdue: 50
    },
    {
      id: 6,
      customerName: "Juliana Ferreira",
      amount: 1500.00,
      dueDate: "2024-02-25",
      status: "overdue",
      invoiceNumber: "INV-026",
      description: "Treinamento técnico",
      paymentMethod: "Cartão de Crédito",
      createdAt: "2024-02-08",
      daysOverdue: 30
    },
    {
      id: 7,
      customerName: "Luciano Alves",
      amount: 3800.00,
      dueDate: "2024-02-12",
      status: "overdue",
      invoiceNumber: "INV-027",
      description: "Implementação de ERP",
      paymentMethod: "PIX",
      createdAt: "2024-01-28",
      daysOverdue: 43
    },
    {
      id: 8,
      customerName: "Mariana Costa",
      amount: 2200.00,
      dueDate: "2024-02-18",
      status: "overdue",
      invoiceNumber: "INV-028",
      description: "Consultoria de segurança",
      paymentMethod: "Transferência",
      createdAt: "2024-02-02",
      daysOverdue: 37
    },
    {
      id: 9,
      customerName: "Felipe Mendes",
      amount: 1200.00,
      dueDate: "2024-02-22",
      status: "overdue",
      invoiceNumber: "INV-029",
      description: "Configuração de rede",
      paymentMethod: "Cartão de Crédito",
      createdAt: "2024-02-06",
      daysOverdue: 33
    },
    {
      id: 10,
      customerName: "Beatriz Santos",
      amount: 3100.00,
      dueDate: "2024-02-08",
      status: "overdue",
      invoiceNumber: "INV-030",
      description: "Desenvolvimento de API",
      paymentMethod: "PIX",
      createdAt: "2024-01-25",
      daysOverdue: 47
    }
  ]

  return NextResponse.json(mockData)
} 