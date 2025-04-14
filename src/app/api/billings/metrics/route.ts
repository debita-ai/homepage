import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    const metrics = {
      totalPago: 156, // From dashboard: cobrancasPagas
      totalPendente: 23, // From dashboard: cobrancasPendentes
      totalCancelado: 8, // From dashboard: cobrancasCanceladas
      valorRecebido: 45780.50, // From dashboard: valorRecebido
      cobrancasHoje: 32 // From dashboard: cobrancasRecebidas
    }

    return NextResponse.json(metrics)
  } catch (error) {
    console.error('Error in billings metrics API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 