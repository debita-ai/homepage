"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function NewLinkCharge() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement Link charge creation
    setLoading(false);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center gap-2 mb-6">
        <Link className="h-6 w-6 text-[#E85A27]" />
        <h1 className="text-2xl font-bold">Novo Link de Pagamento</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detalhes do Link</CardTitle>
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
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  type="text"
                  placeholder="Descrição do link"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expirationDate">Data de Expiração</Label>
                <Input
                  id="expirationDate"
                  type="date"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxInstallments">Máximo de Parcelas</Label>
                <Input
                  id="maxInstallments"
                  type="number"
                  min="1"
                  max="12"
                  placeholder="1"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer">Cliente</Label>
                <Input
                  id="customer"
                  type="text"
                  placeholder="Nome do cliente"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email do Cliente</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@exemplo.com"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline">
                Cancelar
              </Button>
              <Button type="submit" className="bg-[#E85A27] hover:bg-[#D64A1A] text-white" disabled={loading}>
                {loading ? "Criando..." : "Criar Link"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 