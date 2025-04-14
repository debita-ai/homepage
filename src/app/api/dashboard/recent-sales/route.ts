import { NextResponse } from 'next/server'

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))

  return NextResponse.json([
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
  ])
} 