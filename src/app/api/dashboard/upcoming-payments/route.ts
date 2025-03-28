import { NextResponse } from 'next/server'

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600))

  return NextResponse.json([
    { id: 1, cliente: "Carlos Mendes", valor: 1250.00, data: "25/03/2025", tipo: "boleto" },
    { id: 2, cliente: "Luciana Ferreira", valor: 845.90, data: "26/03/2025", tipo: "cartao" },
    { id: 3, cliente: "Global Tech LTDA", valor: 2789.00, data: "27/03/2025", tipo: "boleto" },
    { id: 4, cliente: "Pedro Almeida", valor: 350.00, data: "28/03/2025", tipo: "pix" }
  ])
} 