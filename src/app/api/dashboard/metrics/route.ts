import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const metrics = {
      cobrancasPagas: 156,
      cobrancasPendentes: 23,
      cobrancasCanceladas: 8,
      valorRecebido: 45780.50,
      clientesAtivos: 89,
      clientesEmDia: 75,
      clientesInadimplentes: 14,
      clientesNovosMes: 12,
      cobrancasPrevistas: 45,
      cobrancasEmitidas: 38,
      cobrancasRecebidas: 32,
      faturamentoPrevisto: 85000.00,
      faturamentoConfirmado: 78000.00,
      faturamentoRecebido: 72000.00,
      cobrancasEsperadas: 67,
      totalClientes: 105,
      receitaPrevista: 95000.00,
      receitaConfirmada: 88000.00,
      receitaRecebida: 82000.00
    }

    return NextResponse.json(metrics)
  } catch (error) {
    console.error('Error in metrics API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 