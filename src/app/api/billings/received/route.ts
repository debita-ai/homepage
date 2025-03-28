import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    const receivedBillings = [
      {
        id: 1,
        cliente: "Ana Silva",
        valor: 450.00,
        tipo: "PIX",
        status: "Pago",
        dataVencimento: "2024-03-25",
        dataPagamento: "2024-03-24",
        descricao: "Serviço de consultoria",
        numeroParcela: 1,
        totalParcelas: 1,
        formaPagamento: "PIX",
        comprovante: "https://example.com/comprovante1.pdf"
      },
      {
        id: 3,
        cliente: "Empresa XYZ Ltda",
        valor: 3780.50,
        tipo: "Cartão",
        status: "Pago",
        dataVencimento: "2024-03-20",
        dataPagamento: "2024-03-19",
        descricao: "Licença de software",
        numeroParcela: 2,
        totalParcelas: 3,
        formaPagamento: "Cartão de Crédito",
        comprovante: "https://example.com/comprovante2.pdf"
      },
      {
        id: 8,
        cliente: "Digital Solutions",
        valor: 2200.00,
        tipo: "Boleto",
        status: "Pago",
        dataVencimento: "2024-03-18",
        dataPagamento: "2024-03-17",
        descricao: "Desenvolvimento web",
        numeroParcela: 1,
        totalParcelas: 1,
        formaPagamento: "Boleto",
        comprovante: "https://example.com/comprovante3.pdf"
      },
      {
        id: 9,
        cliente: "Tech Innovators",
        valor: 1500.00,
        tipo: "PIX",
        status: "Pago",
        dataVencimento: "2024-03-15",
        dataPagamento: "2024-03-14",
        descricao: "Consultoria de TI",
        numeroParcela: 1,
        totalParcelas: 1,
        formaPagamento: "PIX",
        comprovante: "https://example.com/comprovante4.pdf"
      }
    ]

    return NextResponse.json(receivedBillings)
  } catch (error) {
    console.error('Error in received billings API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 