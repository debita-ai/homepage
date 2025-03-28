'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { QrCode } from 'lucide-react'

export default function CreatePixBilling() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    amount: '',
    description: '',
    dueDate: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement PIX billing creation
    console.log('Creating PIX billing:', formData)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#252E54]">Criar Cobrança PIX</h1>
        <p className="text-gray-600">Preencha os dados para gerar uma cobrança via PIX</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label>Nome do Cliente</Label>
              <Input
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                placeholder="Nome completo"
                required
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@exemplo.com"
                required
              />
            </div>
            <div>
              <Label>Valor</Label>
              <Input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="R$ 0,00"
                required
                min="0"
                step="0.01"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label>Descrição</Label>
              <Input
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descrição da cobrança"
                required
              />
            </div>
            <div>
              <Label>Data de Vencimento</Label>
              <Input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/dashboard/billings/create')}
          >
            Cancelar
          </Button>
          <Button type="submit" onClick={() => router.push('/dashboard/billings/create/pix/confirmation')} className="bg-[#E85A27] hover:bg-[#D84A1F] text-white">
            <QrCode className="w-4 h-4 mr-2" />
            Gerar PIX
          </Button>
        </div>
      </form>
    </div>
  )
} 