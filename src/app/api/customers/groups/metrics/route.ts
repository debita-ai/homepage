import { NextResponse } from 'next/server'

export async function GET() {
  const mockMetrics = {
    totalGroups: 10,
    totalClientsInGroups: 310,
    totalValueInGroups: 9500000.00,
    averageClientsPerGroup: 31
  }

  return NextResponse.json(mockMetrics)
} 