import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    const reports = {
      resumo: {
        totalCobrancas: 156,
        valorTotal: 45780.50,
        cobrancasPagas: 89,
        cobrancasPendentes: 45,
        cobrancasAtrasadas: 22,
        valorRecebido: 32000.00,
        valorPendente: 13780.50,
        valorAtrasado: 8500.00
      },
      porTipo: {
        pix: {
          total: 45,
          valor: 12500.00,
          pagas: 35,
          pendentes: 8,
          atrasadas: 2
        },
        boleto: {
          total: 78,
          valor: 25000.00,
          pagas: 45,
          pendentes: 25,
          atrasadas: 8
        },
        cartao: {
          total: 33,
          valor: 8280.50,
          pagas: 9,
          pendentes: 12,
          atrasadas: 12
        }
      },
      porStatus: {
        pago: {
          total: 89,
          valor: 32000.00
        },
        pendente: {
          total: 45,
          valor: 13780.50
        },
        atrasado: {
          total: 22,
          valor: 8500.00
        }
      },
      evolucaoMensal: [
        {
          mes: "Jan",
          previsto: 35000.00,
          recebido: 32000.00,
          pendente: 3000.00
        },
        {
          mes: "Fev",
          previsto: 38000.00,
          recebido: 35000.00,
          pendente: 3000.00
        },
        {
          mes: "Mar",
          previsto: 42000.00,
          recebido: 32000.00,
          pendente: 10000.00
        }
      ],
      topClientes: [
        {
          cliente: "Empresa ABC Ltda",
          totalCobrancas: 12,
          valorTotal: 15480.75,
          emDia: 10,
          atrasadas: 2
        },
        {
          cliente: "Consultoria XYZ S.A.",
          totalCobrancas: 8,
          valorTotal: 12750.50,
          emDia: 8,
          atrasadas: 0
        },
        {
          cliente: "Ana Silva",
          totalCobrancas: 7,
          valorTotal: 9870.00,
          emDia: 7,
          atrasadas: 0
        }
      ]
    }

    return NextResponse.json(reports)
  } catch (error) {
    console.error('Error in billing reports API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 