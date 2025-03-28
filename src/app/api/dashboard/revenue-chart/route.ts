import { NextResponse } from 'next/server'

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 900))

  return NextResponse.json([
    { month: "Jan", previsto: 15000, confirmado: 14200, recebido: 13800 },
    { month: "Fev", previsto: 18000, confirmado: 17500, recebido: 16900 },
    { month: "Mar", previsto: 22000, confirmado: 21000, recebido: 20100 },
    { month: "Abr", previsto: 25000, confirmado: 23500, recebido: 22000 },
    { month: "Mai", previsto: 28000, confirmado: 26700, recebido: 25500 },
    { month: "Jun", previsto: 30000, confirmado: 29000, recebido: 28000 }
  ])
} 