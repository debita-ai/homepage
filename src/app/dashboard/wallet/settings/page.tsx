"use client";

import { useState } from "react";
import { Settings, Save, CreditCard, Lock, Bell, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function WalletSettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Settings className="h-6 w-6 text-[#252E54]" />
          <h1 className="text-2xl font-bold text-[#252E54]">Configurações da Carteira</h1>
        </div>
        <Button className="bg-[#E85A27] hover:bg-[#D84A1F] text-white flex items-center">
          <Save className="h-4 w-4 mr-2" />
          Salvar Alterações
        </Button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CreditCard className="h-5 w-5 text-[#252E54]" />
            <h2 className="text-lg font-medium text-[#252E54]">Métodos de Pagamento</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Cartão de Crédito</Label>
                <p className="text-sm text-gray-500">Permitir pagamentos com cartão de crédito</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">PIX</Label>
                <p className="text-sm text-gray-500">Permitir pagamentos via PIX</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Boleto</Label>
                <p className="text-sm text-gray-500">Permitir pagamentos via boleto</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Lock className="h-5 w-5 text-[#252E54]" />
            <h2 className="text-lg font-medium text-[#252E54]">Segurança</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Autenticação em Dois Fatores</Label>
                <p className="text-sm text-gray-500">Adicionar uma camada extra de segurança</p>
              </div>
              <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Limite de Transferência</Label>
                <p className="text-sm text-gray-500">Definir limite máximo para transferências</p>
              </div>
              <Input type="number" className="w-32" placeholder="R$ 0,00" />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bell className="h-5 w-5 text-[#252E54]" />
            <h2 className="text-lg font-medium text-[#252E54]">Notificações</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Notificações por Email</Label>
                <p className="text-sm text-gray-500">Receber notificações por email</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Notificações Push</Label>
                <p className="text-sm text-gray-500">Receber notificações no navegador</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="h-5 w-5 text-[#252E54]" />
            <h2 className="text-lg font-medium text-[#252E54]">Privacidade</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Histórico de Transações</Label>
                <p className="text-sm text-gray-500">Manter histórico de transações</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-sm font-medium">Compartilhar Dados</Label>
                <p className="text-sm text-gray-500">Permitir compartilhamento de dados com parceiros</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 