import { NextResponse } from 'next/server'

export async function GET() {
  const mockLinks = [
    {
      id: 1,
      nome: "Pagamento Consultoria Tech",
      link: "https://debita.ai/pay/abc123",
      valor: 15000.00,
      status: "ativo",
      dataCriacao: "28/03/2024",
      dataExpiracao: "15/04/2024",
      clicks: 45
    },
    {
      id: 2,
      nome: "Serviços de Desenvolvimento",
      link: "https://debita.ai/pay/def456",
      valor: 25000.00,
      status: "ativo",
      dataCriacao: "27/03/2024",
      dataExpiracao: "20/04/2024",
      clicks: 38
    },
    {
      id: 3,
      nome: "Treinamento Corporativo",
      link: "https://debita.ai/pay/ghi789",
      valor: 8500.00,
      status: "expirado",
      dataCriacao: "20/03/2024",
      dataExpiracao: "10/04/2024",
      clicks: 25
    },
    {
      id: 4,
      nome: "Implementação de Sistema",
      link: "https://debita.ai/pay/jkl012",
      valor: 32000.00,
      status: "ativo",
      dataCriacao: "26/03/2024",
      dataExpiracao: "25/04/2024",
      clicks: 52
    },
    {
      id: 5,
      nome: "Manutenção de Infraestrutura",
      link: "https://debita.ai/pay/mno345",
      valor: 12500.00,
      status: "pago",
      dataCriacao: "25/03/2024",
      dataExpiracao: "15/04/2024",
      clicks: 30
    },
    {
      id: 6,
      nome: "Consultoria de Segurança",
      link: "https://debita.ai/pay/pqr678",
      valor: 18000.00,
      status: "ativo",
      dataCriacao: "24/03/2024",
      dataExpiracao: "18/04/2024",
      clicks: 42
    },
    {
      id: 7,
      nome: "Desenvolvimento de API",
      link: "https://debita.ai/pay/stu901",
      valor: 22000.00,
      status: "ativo",
      dataCriacao: "23/03/2024",
      dataExpiracao: "22/04/2024",
      clicks: 35
    },
    {
      id: 8,
      nome: "Suporte Técnico Premium",
      link: "https://debita.ai/pay/vwx234",
      valor: 9500.00,
      status: "pago",
      dataCriacao: "22/03/2024",
      dataExpiracao: "12/04/2024",
      clicks: 28
    },
    {
      id: 9,
      nome: "Configuração de Servidor",
      link: "https://debita.ai/pay/yza567",
      valor: 7500.00,
      status: "expirado",
      dataCriacao: "21/03/2024",
      dataExpiracao: "11/04/2024",
      clicks: 20
    },
    {
      id: 10,
      nome: "Projeto de Automação",
      link: "https://debita.ai/pay/bcd890",
      valor: 28000.00,
      status: "ativo",
      dataCriacao: "20/03/2024",
      dataExpiracao: "28/04/2024",
      clicks: 48
    },
    {
      id: 11,
      nome: "Treinamento de Equipe",
      link: "https://debita.ai/pay/efg123",
      valor: 12000.00,
      status: "ativo",
      dataCriacao: "19/03/2024",
      dataExpiracao: "17/04/2024",
      clicks: 32
    },
    {
      id: 12,
      nome: "Desenvolvimento Mobile",
      link: "https://debita.ai/pay/hij456",
      valor: 35000.00,
      status: "ativo",
      dataCriacao: "18/03/2024",
      dataExpiracao: "30/04/2024",
      clicks: 55
    },
    {
      id: 13,
      nome: "Consultoria de UX",
      link: "https://debita.ai/pay/klm789",
      valor: 9500.00,
      status: "pago",
      dataCriacao: "17/03/2024",
      dataExpiracao: "07/04/2024",
      clicks: 25
    },
    {
      id: 14,
      nome: "Manutenção de Sistema",
      link: "https://debita.ai/pay/nop012",
      valor: 8500.00,
      status: "ativo",
      dataCriacao: "16/03/2024",
      dataExpiracao: "14/04/2024",
      clicks: 18
    },
    {
      id: 15,
      nome: "Projeto de Integração",
      link: "https://debita.ai/pay/qrs345",
      valor: 42000.00,
      status: "ativo",
      dataCriacao: "15/03/2024",
      dataExpiracao: "05/05/2024",
      clicks: 65
    }
  ]

  return NextResponse.json(mockLinks)
} 