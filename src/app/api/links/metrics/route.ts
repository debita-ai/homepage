import { NextResponse } from 'next/server'

export async function GET() {
  const mockMetrics = {
    totalAtivos: 10,
    totalExpirados: 2,
    totalPagos: 3,
    valorTotal: 285000.00
  }

  return NextResponse.json(mockMetrics)
} 