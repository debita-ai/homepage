"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle2, 
  Copy, 
  Share2, 
  Download, 
  QrCode,
  ArrowLeft,
  Printer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function PixConfirmationPage() {
  const [copied, setCopied] = useState(false);

  const billingDetails = {
    id: "FAT-2024-001",
    cliente: "João Silva",
    valor: 1500.00,
    vencimento: "15/04/2024",
    descricao: "Serviços de consultoria",
    pixLink: "https://pix.example.com/abc123",
    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020101021226870014br.gov.bcb.pix2569api.example.com/pix/v2/9d36b0d9e6f94e5fb3b3947c5a6534c9",
    chavePix: "joao.silva@email.com",
    beneficiario: "Empresa XYZ LTDA",
    cnpj: "12.345.678/0001-90"
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(billingDetails.pixLink);
    setCopied(true);
    toast.success("Link PIX copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Link de Pagamento PIX',
        text: `Link de pagamento para ${billingDetails.cliente}`,
        url: billingDetails.pixLink
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <div className="flex items-center">
            <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">PIX Gerado com Sucesso!</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* QR Code Section */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <Image 
                  src={billingDetails.qrCode} 
                  alt="QR Code PIX" 
                  width={192}
                  height={192}
                  className="w-48 h-48"
                />
              </div>
              <Button 
                variant="outline" 
                className="mb-4"
                onClick={() => toast.success("QR Code baixado!")}
              >
                <Download className="h-4 w-4 mr-2" />
                Baixar QR Code
              </Button>
            </div>

            {/* Billing Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Detalhes do Pagamento</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">ID da Fatura</p>
                  <p className="font-medium">{billingDetails.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Cliente</p>
                  <p className="font-medium">{billingDetails.cliente}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valor</p>
                  <p className="font-medium text-green-600">
                    R$ {billingDetails.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Vencimento</p>
                  <p className="font-medium">{billingDetails.vencimento}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Descrição</p>
                  <p className="font-medium">{billingDetails.descricao}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PIX Link Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Link de Pagamento PIX</h2>
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600 break-all">{billingDetails.pixLink}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={handleCopy}
              className={copied ? "bg-green-50 text-green-600" : ""}
            >
              <Copy className="h-4 w-4 mr-2" />
              {copied ? "Copiado!" : "Copiar"}
            </Button>
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>

        {/* PIX Details */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações PIX</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Chave PIX</p>
              <p className="font-medium">{billingDetails.chavePix}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Beneficiário</p>
              <p className="font-medium">{billingDetails.beneficiario}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">CNPJ</p>
              <p className="font-medium">{billingDetails.cnpj}</p>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full">
                <Printer className="h-4 w-4 mr-2" />
                Imprimir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 