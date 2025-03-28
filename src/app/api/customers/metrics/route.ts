import { NextResponse } from 'next/server'

export async function GET() {
  const mockMetrics = {
    totalClients: 15,
    totalActive: 13,
    totalInactive: 2,
    totalValue: 2250000.00,
    clientsWithPurchaseThisMonth: 13
  }

  return NextResponse.json(mockMetrics)
} 