"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import api from "@/app/services/api";
import { useApi } from "@/lib/hooks/useApi";

interface BoletoChargeData {
  amount: number;
  description: string;
  dueDate: string;
  customer: {
    name: string;
    cpf: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    email: string;
  };
}

export default function NewBoletoCharge() {
  const router = useRouter();
  const [formData, setFormData] = useState<BoletoChargeData>({
    amount: 0,
    description: "",
    dueDate: "",
    customer: {
      name: "",
      cpf: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
    },
  });

  const { loading, error, execute: createCharge } = useApi(
    async () => {
      const response = await api.post("/charges/boleto", formData);
      return response.data;
    },
    {
      onSuccess: () => {
        router.push("/dashboard/charges");
      },
      onError: (error) => {
        console.error("Error creating charge:", error);
        // TODO: Show error toast
      },
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id.startsWith("customer.")) {
      const field = id.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        customer: {
          ...prev.customer,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createCharge();
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-6 w-6 text-[#E85A27]" />
        <h1 className="text-2xl font-bold">Nova Cobrança Boleto</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detalhes da Cobrança</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Valor</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="R$ 0,00"
                  required
                  value={formData.amount}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  type="text"
                  placeholder="Descrição da cobrança"
                  required
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dueDate">Data de Vencimento</Label>
                <Input
                  id="dueDate"
                  type="date"
                  required
                  value={formData.dueDate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer.name">Cliente</Label>
                <Input
                  id="customer.name"
                  type="text"
                  placeholder="Nome do cliente"
                  required
                  value={formData.customer.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer.cpf">CPF/CNPJ</Label>
                <Input
                  id="customer.cpf"
                  type="text"
                  placeholder="000.000.000-00"
                  required
                  value={formData.customer.cpf}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer.address">Endereço</Label>
                <Input
                  id="customer.address"
                  type="text"
                  placeholder="Endereço completo"
                  required
                  value={formData.customer.address}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer.city">Cidade</Label>
                <Input
                  id="customer.city"
                  type="text"
                  placeholder="Cidade"
                  required
                  value={formData.customer.city}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer.state">Estado</Label>
                <Input
                  id="customer.state"
                  type="text"
                  placeholder="Estado"
                  required
                  value={formData.customer.state}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer.zipCode">CEP</Label>
                <Input
                  id="customer.zipCode"
                  type="text"
                  placeholder="00000-000"
                  required
                  value={formData.customer.zipCode}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer.email">Email</Label>
                <Input
                  id="customer.email"
                  type="email"
                  placeholder="email@exemplo.com"
                  required
                  value={formData.customer.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => router.back()}
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                className="bg-[#E85A27] hover:bg-[#D64A1A] text-white" 
                disabled={loading}
              >
                {loading ? "Criando..." : "Criar Cobrança"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 