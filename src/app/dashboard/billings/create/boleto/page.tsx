'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Receipt } from 'lucide-react'

export default function CreateBoletoBilling() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    cpf: '',
    amount: '',
    description: '',
    dueDate: '',
    address: {
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: '',
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement Boleto billing creation
    console.log('Creating Boleto billing:', formData)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#252E54]">Criar Cobrança Boleto</h1>
        <p className="text-gray-600">Preencha os dados para gerar uma cobrança via Boleto</p>
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
              <Label>CPF</Label>
              <Input
                value={formData.cpf}
                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                placeholder="000.000.000-00"
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

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Endereço de Cobrança</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>CEP</Label>
              <Input
                value={formData.address.zipCode}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, zipCode: e.target.value }
                })}
                placeholder="00000-000"
                required
              />
            </div>
            <div>
              <Label>Rua</Label>
              <Input
                value={formData.address.street}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, street: e.target.value }
                })}
                placeholder="Nome da rua"
                required
              />
            </div>
            <div>
              <Label>Número</Label>
              <Input
                value={formData.address.number}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, number: e.target.value }
                })}
                placeholder="Número"
                required
              />
            </div>
            <div>
              <Label>Complemento</Label>
              <Input
                value={formData.address.complement}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, complement: e.target.value }
                })}
                placeholder="Complemento"
              />
            </div>
            <div>
              <Label>Bairro</Label>
              <Input
                value={formData.address.neighborhood}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, neighborhood: e.target.value }
                })}
                placeholder="Bairro"
                required
              />
            </div>
            <div>
              <Label>Cidade</Label>
              <Input
                value={formData.address.city}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, city: e.target.value }
                })}
                placeholder="Cidade"
                required
              />
            </div>
            <div>
              <Label>Estado</Label>
              <Input
                value={formData.address.state}
                onChange={(e) => setFormData({
                  ...formData,
                  address: { ...formData.address, state: e.target.value }
                })}
                placeholder="Estado"
                required
                maxLength={2}
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
          <Button type="submit" className="bg-[#E85A27] hover:bg-[#D84A1F] text-white">
            <Receipt className="w-4 h-4 mr-2" />
            Gerar Boleto
          </Button>
        </div>
      </form>
    </div>
  )
} 