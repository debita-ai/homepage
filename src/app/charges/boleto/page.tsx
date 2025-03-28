"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChargeForm } from "@/app/components/charges/ChargeForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import chargesService from "@/app/services/charges";

export default function BoletoChargePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [boletoUrl, setBoletoUrl] = useState<string | null>(null);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await chargesService.createCharge({
        ...data,
        paymentMethod: "boleto",
      });
      
      if (response.boletoUrl) {
        setBoletoUrl(response.boletoUrl);
        toast.success("Cobrança Boleto criada com sucesso!");
      } else {
        throw new Error("URL do boleto não gerada");
      }
    } catch (error) {
      toast.error("Erro ao criar cobrança Boleto");
      console.error("Error creating Boleto charge:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadBoleto = () => {
    if (boletoUrl) {
      window.open(boletoUrl, "_blank");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Nova Cobrança Boleto</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ChargeForm
                onSubmit={handleSubmit}
                paymentMethod="boleto"
                loading={loading}
              />
            </div>
            {boletoUrl && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <h3 className="text-lg font-semibold">Boleto Gerado</h3>
                <Button onClick={handleDownloadBoleto}>
                  Baixar Boleto
                </Button>
                <p className="text-sm text-gray-500">
                  Clique no botão acima para baixar o boleto
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 