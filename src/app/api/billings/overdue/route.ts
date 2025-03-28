import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    const overdueBillings = [
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
        diasAtraso: 5,
        multa: 44.99,
        juros: 13.50
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
        diasAtraso: 10,
        multa: 90.00,
        juros: 27.00
      },
      {
        id: 10,
        cliente: "Inovação Digital",
        valor: 3200.00,
        tipo: "Boleto",
        status: "Atrasado",
        dataVencimento: "2024-03-05",
        dataPagamento: null,
        descricao: "Desenvolvimento de aplicativo",
        numeroParcela: 1,
        totalParcelas: 1,
        diasAtraso: 15,
        multa: 160.00,
        juros: 48.00
      },
      {
        id: 11,
        cliente: "Tech Solutions",
        valor: 1500.00,
        tipo: "PIX",
        status: "Atrasado",
        dataVencimento: "2024-03-01",
        dataPagamento: null,
        descricao: "Suporte técnico",
        numeroParcela: 1,
        totalParcelas: 1,
        diasAtraso: 19,
        multa: 75.00,
        juros: 22.50
      }
    ]

    return NextResponse.json(overdueBillings)
  } catch (error) {
    console.error('Error in overdue billings API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 