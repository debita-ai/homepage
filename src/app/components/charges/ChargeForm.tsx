"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import clientsService from "@/app/services/clients";

interface ChargeFormProps {
  onSubmit: (data: any) => Promise<void>;
  paymentMethod: "pix" | "boleto" | "link";
  loading?: boolean;
}

export function ChargeForm({ onSubmit, paymentMethod, loading = false }: ChargeFormProps) {
  const [clients, setClients] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    clientId: "",
    amount: "",
    description: "",
    dueDate: "",
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await clientsService.getClients({ take: 100 });
        setClients(response.clients);
      } catch (error) {
        toast.error("Erro ao carregar clientes");
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit({
        ...formData,
        amount: parseFloat(formData.amount),
        paymentMethod,
      });
    } catch (error) {
      toast.error("Erro ao criar cobrança");
      console.error("Error creating charge:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="clientId">Cliente</Label>
        <Select
          value={formData.clientId}
          onValueChange={(value) => setFormData({ ...formData, clientId: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione um cliente" />
          </SelectTrigger>
          <SelectContent>
            {clients.map((client) => (
              <SelectItem key={client.id} value={client.id.toString()}>
                {client.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Valor</Label>
        <Input
          id="amount"
          type="number"
          step="0.01"
          placeholder="0,00"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
        <Input
          id="description"
          placeholder="Descrição da cobrança"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dueDate">Data de Vencimento</Label>
        <Input
          id="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  );
} 