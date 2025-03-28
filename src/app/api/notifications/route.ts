import { NextResponse } from 'next/server'

const notifications = [
  {
    id: 1,
    title: 'Pagamento recebido',
    message: 'Você recebeu um pagamento de R$ 250,00 de Cliente XYZ',
    timestamp: 'Hoje, 14:30',
    read: false,
    type: 'payment',
  },
  {
    id: 2,
    title: 'Cobrança expirada',
    message: 'A cobrança #12345 expirou sem pagamento',
    timestamp: 'Ontem, 16:45',
    read: false,
    type: 'alert',
  },
  {
    id: 3,
    title: 'Atualização do sistema',
    message: 'Nova versão do sistema está disponível com novos recursos',
    timestamp: '20/03/2025, 09:15',
    read: true,
    type: 'system',
  },
]

export async function GET() {
  return NextResponse.json(notifications)
}

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  
  if (id) {
    const notification = notifications.find(n => n.id === Number(id))
    if (notification) {
      notification.read = true
    }
  } else {
    notifications.forEach(n => n.read = true)
  }
  
  return NextResponse.json({ success: true })
} 