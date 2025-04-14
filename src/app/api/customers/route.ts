import { NextResponse } from 'next/server'

export async function GET() {
  const mockCustomers = [
    { 
      id: 1, 
      name: "Tech Solutions Inc", 
      email: "contato@techsolutions.com", 
      phone: "(11) 99999-9999", 
      status: "ativo", 
      lastPurchase: "28/03/2024",
      totalPurchases: 15,
      value: 125000.00
    },
    { 
      id: 2, 
      name: "Global Systems", 
      email: "financeiro@globalsystems.com", 
      phone: "(11) 98888-8888", 
      status: "ativo", 
      lastPurchase: "27/03/2024",
      totalPurchases: 12,
      value: 85000.00
    },
    { 
      id: 3, 
      name: "Digital Solutions", 
      email: "vendas@digitalsolutions.com", 
      phone: "(11) 97777-7777", 
      status: "ativo", 
      lastPurchase: "26/03/2024",
      totalPurchases: 18,
      value: 150000.00
    },
    { 
      id: 4, 
      name: "Enterprise Corp", 
      email: "financeiro@enterprisecorp.com", 
      phone: "(11) 96666-6666", 
      status: "ativo", 
      lastPurchase: "25/03/2024",
      totalPurchases: 25,
      value: 250000.00
    },
    { 
      id: 5, 
      name: "Startup X", 
      email: "contato@startupx.com", 
      phone: "(11) 95555-5555", 
      status: "ativo", 
      lastPurchase: "24/03/2024",
      totalPurchases: 8,
      value: 75000.00
    },
    { 
      id: 6, 
      name: "Cliente VIP", 
      email: "vip@clientevip.com", 
      phone: "(11) 94444-4444", 
      status: "ativo", 
      lastPurchase: "23/03/2024",
      totalPurchases: 30,
      value: 180000.00
    },
    { 
      id: 7, 
      name: "Tech Partner", 
      email: "parcerias@techpartner.com", 
      phone: "(11) 93333-3333", 
      status: "ativo", 
      lastPurchase: "22/03/2024",
      totalPurchases: 20,
      value: 220000.00
    },
    { 
      id: 8, 
      name: "Enterprise Plus", 
      email: "contato@enterpriseplus.com", 
      phone: "(11) 92222-2222", 
      status: "ativo", 
      lastPurchase: "21/03/2024",
      totalPurchases: 35,
      value: 300000.00
    },
    { 
      id: 9, 
      name: "Cliente Premium", 
      email: "premium@clientepremium.com", 
      phone: "(11) 91111-1111", 
      status: "inativo", 
      lastPurchase: "15/02/2024",
      totalPurchases: 10,
      value: 135000.00
    },
    { 
      id: 10, 
      name: "Cliente Regular", 
      email: "contato@clienteregular.com", 
      phone: "(11) 90000-0000", 
      status: "inativo", 
      lastPurchase: "10/02/2024",
      totalPurchases: 5,
      value: 85000.00
    },
    { 
      id: 11, 
      name: "Digital Enterprise", 
      email: "vendas@digitalenterprise.com", 
      phone: "(11) 89999-9999", 
      status: "ativo", 
      lastPurchase: "20/03/2024",
      totalPurchases: 22,
      value: 160000.00
    },
    { 
      id: 12, 
      name: "Tech Solutions Plus", 
      email: "contato@techsolutionsplus.com", 
      phone: "(11) 88888-8888", 
      status: "ativo", 
      lastPurchase: "19/03/2024",
      totalPurchases: 28,
      value: 280000.00
    },
    { 
      id: 13, 
      name: "Global Enterprise", 
      email: "financeiro@globalenterprise.com", 
      phone: "(11) 87777-7777", 
      status: "ativo", 
      lastPurchase: "18/03/2024",
      totalPurchases: 15,
      value: 120000.00
    },
    { 
      id: 14, 
      name: "Digital Partner", 
      email: "parcerias@digitalpartner.com", 
      phone: "(11) 86666-6666", 
      status: "ativo", 
      lastPurchase: "17/03/2024",
      totalPurchases: 18,
      value: 95000.00
    },
    { 
      id: 15, 
      name: "Enterprise Solutions", 
      email: "contato@enterprisesolutions.com", 
      phone: "(11) 85555-5555", 
      status: "ativo", 
      lastPurchase: "16/03/2024",
      totalPurchases: 25,
      value: 220000.00
    }
  ]

  return NextResponse.json(mockCustomers)
} 