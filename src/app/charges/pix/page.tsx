"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChargeForm } from "@/app/components/charges/ChargeForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import chargesService from "@/app/services/charges";
import Image from 'next/image';

export default function PixChargePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [qrCode, setQrCode] = useState<string | null>(null);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await chargesService.createCharge({
        ...data,
        paymentMethod: "pix",
      });
      
      if (response.qrCode) {
        setQrCode(response.qrCode);
        toast.success("Cobrança PIX criada com sucesso!");
      } else {
        throw new Error("QR Code não gerado");
      }
    } catch (error) {
      toast.error("Erro ao criar cobrança PIX");
      console.error("Error creating PIX charge:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Nova Cobrança PIX</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ChargeForm
                onSubmit={handleSubmit}
                paymentMethod="pix"
                loading={loading}
              />
            </div>
            {qrCode && (
              <div className="flex flex-col items-center justify-center space-y-4">
                <h3 className="text-lg font-semibold">QR Code PIX</h3>
                <Image 
                  src="/qrcode.png" 
                  alt="QR Code PIX" 
                  width={200} 
                  height={200}
                  className="mx-auto"
                />
                <p className="text-sm text-gray-500">
                  Escaneie o QR Code para pagar
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 