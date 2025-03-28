import { NextResponse } from 'next/server'

export async function GET() {
  const mockOverduePayments = [
    { id: 101, cliente: "Tech Solutions Inc", valor: 15000.00, dataVencimento: "15/03/2024", diasAtraso: 15 },
    { id: 102, cliente: "Global Systems", valor: 12000.00, dataVencimento: "10/03/2024", diasAtraso: 20 },
    { id: 103, cliente: "Digital Solutions", valor: 25000.00, dataVencimento: "05/03/2024", diasAtraso: 25 },
    { id: 104, cliente: "Enterprise Corp", valor: 18000.00, dataVencimento: "01/03/2024", diasAtraso: 30 },
    { id: 105, cliente: "Startup X", valor: 9500.00, dataVencimento: "28/02/2024", diasAtraso: 35 },
    { id: 106, cliente: "Cliente VIP", valor: 22000.00, dataVencimento: "25/02/2024", diasAtraso: 40 },
    { id: 107, cliente: "Tech Partner", valor: 16000.00, dataVencimento: "20/02/2024", diasAtraso: 45 },
    { id: 108, cliente: "Enterprise Plus", valor: 28000.00, dataVencimento: "15/02/2024", diasAtraso: 50 },
    { id: 109, cliente: "Cliente Premium", valor: 13500.00, dataVencimento: "10/02/2024", diasAtraso: 55 },
    { id: 110, cliente: "Cliente Regular", valor: 8500.00, dataVencimento: "05/02/2024", diasAtraso: 60 }
  ]

  return NextResponse.json(mockOverduePayments)
} 