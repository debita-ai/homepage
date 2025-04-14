import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    const pendingBillings = [
      {
        id: 2,
        cliente: "Marcos Oliveira",
        valor: 1250.00,
        tipo: "Boleto",
        status: "Pendente",
        dataVencimento: "2024-03-28",
        dataPagamento: null,
        descricao: "Desenvolvimento de software",
        numeroParcela: 1,
        totalParcelas: 3,
        diasAtraso: 0
      },
      {
        id: 4,
        cliente: "Paulo Santos ME",
        valor: 899.90,
        tipo: "PIX",
        status: "Atrasado",
        dataVencimento: "2024-03-15",
        dataPagamento: null,
        descricao: "Manutenção de sistema",
        numeroParcela: 1,
        totalParcelas: 1,
        diasAtraso: 5
      },
      {
        id: 6,
        cliente: "Tech Solutions LTDA",
        valor: 2500.00,
        tipo: "Boleto",
        status: "Pendente",
        dataVencimento: "2024-03-30",
        dataPagamento: null,
        descricao: "Implementação de sistema",
        numeroParcela: 1,
        totalParcelas: 2,
        diasAtraso: 0
      },
      {
        id: 7,
        cliente: "Global Services",
        valor: 1800.00,
        tipo: "Cartão",
        status: "Atrasado",
        dataVencimento: "2024-03-10",
        dataPagamento: null,
        descricao: "Consultoria técnica",
        numeroParcela: 2,
        totalParcelas: 3,
        diasAtraso: 10
      }
    ]

    return NextResponse.json(pendingBillings)
  } catch (error) {
    console.error('Error in pending billings API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 