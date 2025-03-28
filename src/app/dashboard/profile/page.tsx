"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  UserCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Lock, 
  Bell, 
  Shield,
  Save
} from "lucide-react";
import { toast } from "sonner";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("perfil");

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <UserCircle className="mr-2 h-6 w-6 text-[#E85A27]" /> Meu Perfil
          </h1>
        </div>

        {/* Iniciais do Nome */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center space-x-6">
            <div className="h-32 w-32 rounded-full bg-[#E85A27] flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JS</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">João Silva</h2>
              <p className="text-gray-500">Administrador</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="perfil" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="perfil" className="flex items-center">
              <UserCircle className="mr-2 h-4 w-4" /> Perfil
            </TabsTrigger>
            <TabsTrigger value="seguranca" className="flex items-center">
              <Shield className="mr-2 h-4 w-4" /> Segurança
            </TabsTrigger>
            <TabsTrigger value="notificacoes" className="flex items-center">
              <Bell className="mr-2 h-4 w-4" /> Notificações
            </TabsTrigger>
          </TabsList>

          {/* Conteúdo das Tabs */}
          <TabsContent value="perfil" className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações Pessoais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" defaultValue="João Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="joao.silva@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" defaultValue="(11) 99999-8888" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" defaultValue="Empresa XYZ Ltda" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Endereço</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" defaultValue="01234-567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input id="endereco" defaultValue="Rua das Flores, 123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" defaultValue="São Paulo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Input id="estado" defaultValue="SP" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="seguranca" className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Alterar Senha</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="senha-atual">Senha Atual</Label>
                  <Input id="senha-atual" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nova-senha">Nova Senha</Label>
                  <Input id="nova-senha" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                  <Input id="confirmar-senha" type="password" />
                </div>
                <Button className="bg-[#E85A27] hover:bg-[#d04a20] text-white">
                  Alterar Senha
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Autenticação em Dois Fatores</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Adicione uma camada extra de segurança à sua conta</p>
                </div>
                <Button variant="outline">Configurar</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notificacoes" className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferências de Notificação</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Notificações por Email</Label>
                    <p className="text-sm text-gray-500">Receba atualizações importantes por email</p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Notificações Push</Label>
                    <p className="text-sm text-gray-500">Receba notificações no navegador</p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Notificações de Pagamento</Label>
                    <p className="text-sm text-gray-500">Receba alertas sobre pagamentos e cobranças</p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Botão Salvar */}
        <div className="mt-6 flex justify-end">
          <Button className="bg-[#E85A27] hover:bg-[#d04a20] text-white">
            <Save className="mr-2 h-4 w-4" /> Salvar Alterações
          </Button>
        </div>
      </div>
    </div>
  );
}
