import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))

    const management = {
      configuracoes: {
        multa: {
          percentual: 5,
          diasAtraso: 1
        },
        juros: {
          percentual: 0.33,
          tipo: "diário"
        },
        desconto: {
          percentual: 5,
          diasAntecedencia: 5
        },
        vencimento: {
          diaPadrao: 5,
          tolerancia: 3
        }
      },
      templates: [
        {
          id: 1,
          nome: "Template Padrão",
          descricao: "Template padrão para cobranças",
          conteudo: "Prezado(a) cliente,\n\nSegue o boleto referente à fatura...",
          ativo: true
        },
        {
          id: 2,
          nome: "Template com Desconto",
          descricao: "Template para cobranças com desconto",
          conteudo: "Prezado(a) cliente,\n\nSegue o boleto com desconto de 5%...",
          ativo: true
        },
        {
          id: 3,
          nome: "Template Atraso",
          descricao: "Template para cobranças atrasadas",
          conteudo: "Prezado(a) cliente,\n\nIdentificamos que sua fatura está atrasada...",
          ativo: true
        }
      ],
      notificacoes: {
        email: {
          ativo: true,
          antesVencimento: true,
          aposVencimento: true,
          diasAntes: 3,
          diasApos: 1
        },
        sms: {
          ativo: true,
          antesVencimento: true,
          aposVencimento: true,
          diasAntes: 1,
          diasApos: 1
        },
        whatsapp: {
          ativo: true,
          antesVencimento: true,
          aposVencimento: true,
          diasAntes: 2,
          diasApos: 1
        }
      },
      integracoes: [
        {
          id: 1,
          nome: "WhatsApp Business",
          status: "ativo",
          ultimaSincronizacao: "2024-03-27T10:30:00Z"
        },
        {
          id: 2,
          nome: "SMTP Email",
          status: "ativo",
          ultimaSincronizacao: "2024-03-27T10:30:00Z"
        },
        {
          id: 3,
          nome: "SMS Gateway",
          status: "ativo",
          ultimaSincronizacao: "2024-03-27T10:30:00Z"
        }
      ]
    }

    return NextResponse.json(management)
  } catch (error) {
    console.error('Error in billing management API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 