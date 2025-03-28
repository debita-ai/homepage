import { NextResponse } from 'next/server'

export async function GET() {
  const mockMetrics = {
    saldoAtual: 125000.00,
    saldoEsperado: 285000.00,
    totalAtrasado: 160000.00,
    totalAtrasados: 10
  }

  return NextResponse.json(mockMetrics)
} 