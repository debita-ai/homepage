import { NextResponse } from 'next/server'

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))

  return NextResponse.json([
    { month: "Jan", novos: 12, ativos: 45, inativos: 8 },
    { month: "Fev", novos: 15, ativos: 52, inativos: 5 },
    { month: "Mar", novos: 18, ativos: 65, inativos: 6 },
    { month: "Abr", novos: 22, ativos: 75, inativos: 4 },
    { month: "Mai", novos: 20, ativos: 89, inativos: 3 },
    { month: "Jun", novos: 25, ativos: 105, inativos: 7 }
  ])
} 