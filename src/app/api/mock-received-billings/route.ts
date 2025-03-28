import { NextResponse } from 'next/server'

export async function GET() {
  const mockData = [
    {
      id: 1,
      customerName: "Roberto Alves",
      amount: 2800.00,
      dueDate: "2024-03-15",
      status: "received",
      invoiceNumber: "INV-011",
      description: "Desenvolvimento de website",
      paymentMethod: "PIX",
      createdAt: "2024-03-15",
      receivedAt: "2024-03-15"
    },
    {
      id: 2,
      customerName: "Carla Mendes",
      amount: 3500.00,
      dueDate: "2024-03-10",
      status: "received",
      invoiceNumber: "INV-012",
      description: "Consultoria de marketing digital",
      paymentMethod: "Transferência",
      createdAt: "2024-03-10",
      receivedAt: "2024-03-10"
    },
    {
      id: 3,
      customerName: "Lucas Ferreira",
      amount: 1200.00,
      dueDate: "2024-03-05",
      status: "received",
      invoiceNumber: "INV-013",
      description: "Manutenção de sistema",
      paymentMethod: "Cartão de Crédito",
      createdAt: "2024-03-05",
      receivedAt: "2024-03-05"
    },
    {
      id: 4,
      customerName: "Amanda Costa",
      amount: 4500.00,
      dueDate: "2024-03-20",
      status: "received",
      invoiceNumber: "INV-014",
      description: "Projeto de e-commerce",
      paymentMethod: "PIX",
      createdAt: "2024-03-20",
      receivedAt: "2024-03-20"
    },
    {
      id: 5,
      customerName: "Thiago Santos",
      amount: 950.00,
      dueDate: "2024-03-08",
      status: "received",
      invoiceNumber: "INV-015",
      description: "Treinamento de equipe",
      paymentMethod: "Transferência",
      createdAt: "2024-03-08",
      receivedAt: "2024-03-08"
    },
    {
      id: 6,
      customerName: "Fernanda Lima",
      amount: 1800.00,
      dueDate: "2024-03-12",
      status: "received",
      invoiceNumber: "INV-016",
      description: "Consultoria de UX/UI",
      paymentMethod: "Cartão de Crédito",
      createdAt: "2024-03-12",
      receivedAt: "2024-03-12"
    },
    {
      id: 7,
      customerName: "Gustavo Oliveira",
      amount: 2200.00,
      dueDate: "2024-03-18",
      status: "received",
      invoiceNumber: "INV-017",
      description: "Desenvolvimento de aplicativo",
      paymentMethod: "PIX",
      createdAt: "2024-03-18",
      receivedAt: "2024-03-18"
    },
    {
      id: 8,
      customerName: "Mariana Silva",
      amount: 3100.00,
      dueDate: "2024-03-22",
      status: "received",
      invoiceNumber: "INV-018",
      description: "Implementação de CRM",
      paymentMethod: "Transferência",
      createdAt: "2024-03-22",
      receivedAt: "2024-03-22"
    },
    {
      id: 9,
      customerName: "Rafael Costa",
      amount: 1500.00,
      dueDate: "2024-03-25",
      status: "received",
      invoiceNumber: "INV-019",
      description: "Configuração de servidor",
      paymentMethod: "Cartão de Crédito",
      createdAt: "2024-03-25",
      receivedAt: "2024-03-25"
    },
    {
      id: 10,
      customerName: "Beatriz Alves",
      amount: 2800.00,
      dueDate: "2024-03-28",
      status: "received",
      invoiceNumber: "INV-020",
      description: "Desenvolvimento de API",
      paymentMethod: "PIX",
      createdAt: "2024-03-28",
      receivedAt: "2024-03-28"
    }
  ]

  return NextResponse.json(mockData)
} 