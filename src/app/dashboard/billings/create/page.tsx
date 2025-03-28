"use client";

import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { QrCode, Receipt, Link as LinkIcon, FileCheck, FileText } from 'lucide-react'

export default function CreateBilling() {
  const router = useRouter()

  const billingOptions = [
    {
      title: 'PIX',
      description: 'Criar uma cobrança via PIX',
      icon: QrCode,
      href: '/dashboard/billings/create/pix',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Boleto',
      description: 'Criar uma cobrança via Boleto',
      icon: FileText,
      href: '/dashboard/billings/create/boleto',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Link de Pagamento',
      description: 'Criar um link de pagamento',
      icon: LinkIcon,
      href: '/dashboard/billings/create/link',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#252E54]">Criar Cobrança</h1>
        <p className="text-gray-600">Selecione o método de cobrança desejado</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {billingOptions.map((option) => {
          const Icon = option.icon
          return (
            <Card
              key={option.title}
              className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => router.push(option.href)}
            >
              <div className={`w-12 h-12 rounded-lg ${option.bgColor} flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${option.color}`} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
              <p className="text-gray-600">{option.description}</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
} 