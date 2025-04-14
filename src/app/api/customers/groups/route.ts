import { NextResponse } from 'next/server'

export async function GET() {
  const mockGroups = [
    {
      id: 1,
      name: "Clientes VIP",
      description: "Clientes com alto valor de compras",
      totalClients: 25,
      totalValue: 1250000.00,
      createdAt: "01/03/2024"
    },
    {
      id: 2,
      name: "Empresas Enterprise",
      description: "Clientes corporativos de grande porte",
      totalClients: 15,
      totalValue: 850000.00,
      createdAt: "05/03/2024"
    },
    {
      id: 3,
      name: "Startups",
      description: "Clientes de empresas em crescimento",
      totalClients: 30,
      totalValue: 750000.00,
      createdAt: "10/03/2024"
    },
    {
      id: 4,
      name: "Clientes Premium",
      description: "Clientes com histórico de fidelidade",
      totalClients: 45,
      totalValue: 1500000.00,
      createdAt: "15/03/2024"
    },
    {
      id: 5,
      name: "Empresas de Tecnologia",
      description: "Clientes do setor de tecnologia",
      totalClients: 20,
      totalValue: 950000.00,
      createdAt: "20/03/2024"
    },
    {
      id: 6,
      name: "Clientes Ativos",
      description: "Clientes com compras recentes",
      totalClients: 60,
      totalValue: 1800000.00,
      createdAt: "25/03/2024"
    },
    {
      id: 7,
      name: "Empresas de Serviços",
      description: "Clientes do setor de serviços",
      totalClients: 35,
      totalValue: 1100000.00,
      createdAt: "28/03/2024"
    },
    {
      id: 8,
      name: "Clientes Novos",
      description: "Clientes com primeira compra recente",
      totalClients: 40,
      totalValue: 650000.00,
      createdAt: "01/03/2024"
    },
    {
      id: 9,
      name: "Empresas de Varejo",
      description: "Clientes do setor de varejo",
      totalClients: 25,
      totalValue: 850000.00,
      createdAt: "05/03/2024"
    },
    {
      id: 10,
      name: "Clientes Inativos",
      description: "Clientes sem compras recentes",
      totalClients: 15,
      totalValue: 450000.00,
      createdAt: "10/03/2024"
    }
  ]

  return NextResponse.json(mockGroups)
} 