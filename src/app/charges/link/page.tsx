"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChargeForm } from "@/app/components/charges/ChargeForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import chargesService from "@/app/services/charges";

export default function LinkChargePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [paymentLink, setPaymentLink] = useState<string | null>(null);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await chargesService.createCharge({
        ...data,
        paymentMethod: "link",
      });
      
      if (response.paymentLink) {
        setPaymentLink(response.paymentLink);
        toast.success("Link de Pagamento criado com sucesso!");
      } else {
        throw new Error("Link de pagamento não gerado");
      }
    } catch (error) {
      toast.error("Erro ao criar link de pagamento");
      console.error("Error creating payment link:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    if (paymentLink) {
      navigator.clipboard.writeText(paymentLink);
      toast.success("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Novo Link de Pagamento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ChargeForm
                onSubmit={handleSubmit}
                paymentMethod="link"
                loading={loading}
              />
            </div>
            {paymentLink && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <h3 className="text-lg font-semibold">Link de Pagamento</h3>
                <div className="w-full p-4 bg-gray-50 rounded-lg break-all">
                  <p className="text-sm">{paymentLink}</p>
                </div>
                <Button onClick={handleCopyLink}>
                  Copiar Link
                </Button>
                <p className="text-sm text-gray-500">
                  Compartilhe este link com seu cliente para receber o pagamento
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 