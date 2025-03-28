import { NextResponse } from 'next/server'

export async function GET() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700))

  return NextResponse.json([
    { nome: "Empresa ABC Ltda.", compras: 12, valor: 15480.75 },
    { nome: "Consultoria XYZ S.A.", compras: 8, valor: 12750.50 },
    { nome: "Ana Silva", compras: 7, valor: 9870.00 },
    { nome: "Roberto Comércio ME", compras: 6, valor: 7650.25 },
    { nome: "Maria Santos", compras: 5, valor: 6320.80 }
  ])
} 