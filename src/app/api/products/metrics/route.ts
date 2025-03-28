import { NextResponse } from 'next/server'

export async function GET() {
  const mockMetrics = {
    totalProdutos: 15,
    totalVendas: 750,
    valorTotal: 285000.00,
    produtosAtivos: 15,
    estoqueTotal: 1270,
    mediaPreco: 19000.00,
    produtosBaixoEstoque: 3,
    categoriaMaisVendida: "Software",
    totalCategorias: 4
  }

  return NextResponse.json(mockMetrics)
} 