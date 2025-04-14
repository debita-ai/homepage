'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link as LinkIcon } from 'lucide-react'

export default function CreateLinkBilling() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amount: '',
    dueDate: '',
    maxInstallments: '1',
    allowPix: true,
    allowBoleto: true,
    allowCreditCard: true,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement Link billing creation
    console.log('Creating Link billing:', formData)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#252E54]">Criar Link de Pagamento</h1>
        <p className="text-gray-600">Preencha os dados para gerar um link de pagamento</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label>Título do Link</Label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Ex: Pagamento de Serviço"
                required
              />
            </div>
            <div>
              <Label>Descrição</Label>
              <Input
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descrição detalhada do pagamento"
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
              <Label>Data de Vencimento</Label>
              <Input
                type="date"
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                required
              />
            </div>
            <div>
              <Label>Máximo de Parcelas</Label>
              <Input
                type="number"
                value={formData.maxInstallments}
                onChange={(e) => setFormData({ ...formData, maxInstallments: e.target.value })}
                min="1"
                max="12"
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Métodos de Pagamento</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="allowPix"
                checked={formData.allowPix}
                onChange={(e) => setFormData({ ...formData, allowPix: e.target.checked })}
                className="h-4 w-4 rounded border-gray-300 text-[#E85A27] focus:ring-[#E85A27]"
              />
              <Label htmlFor="allowPix">Permitir pagamento via PIX</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="allowBoleto"
                checked={formData.allowBoleto}
                onChange={(e) => setFormData({ ...formData, allowBoleto: e.target.checked })}
                className="h-4 w-4 rounded border-gray-300 text-[#E85A27] focus:ring-[#E85A27]"
              />
              <Label htmlFor="allowBoleto">Permitir pagamento via Boleto</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="allowCreditCard"
                checked={formData.allowCreditCard}
                onChange={(e) => setFormData({ ...formData, allowCreditCard: e.target.checked })}
                className="h-4 w-4 rounded border-gray-300 text-[#E85A27] focus:ring-[#E85A27]"
              />
              <Label htmlFor="allowCreditCard">Permitir pagamento via Cartão de Crédito e Débito</Label>
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
          <Button type="submit" className="bg-[#E85A27] hover:bg-[#D84A1F] text-white">
            <LinkIcon className="w-4 h-4 mr-2" />
            Gerar Link
          </Button>
        </div>
      </form>
    </div>
  )
} 