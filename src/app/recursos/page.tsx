"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  Wallet, 
  FileText, 
  Link as LinkIcon,
  BarChart2,
  Zap,
  Shield,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Receipt,
  Building2,
  Smartphone,
  Lock,
  Barcode,
  QrCode,
  CreditCard as CreditCardIcon,
  FileCheck,
  Bell,
  Settings
} from "lucide-react";

const resourceCategories = [
  {
    id: "financial-control",
    title: "Controle Financeiro",
    resources: [
      {
        icon: "💰",
        title: "Controle de receitas e despesas",
        description: "Acompanhe todas as suas entradas e saídas de dinheiro de forma simples e intuitiva."
      },
      {
        icon: "📊",
        title: "Relatórios detalhados",
        description: "Visualize em gráficos e tabelas como está utilizando seu dinheiro, por categoria ou período."
      },
      {
        icon: "🔄",
        title: "Lançamentos recorrentes",
        description: "Configure lançamentos que se repetem automaticamente sem precisar cadastrar todo mês."
      },
      {
        icon: "💳",
        title: "Controle de cartões de crédito",
        description: "Gerencie todos os seus cartões de crédito e visualize faturas em aberto e fechadas."
      }
    ]
  },
  {
    id: "planning",
    title: "Planejamento",
    resources: [
      {
        icon: "🎯",
        title: "Metas financeiras",
        description: "Defina objetivos financeiros e acompanhe seu progresso de forma visual."
      },
      {
        icon: "💵",
        title: "Orçamento por categoria",
        description: "Estabeleça limites de gastos por categoria e receba alertas ao ultrapassá-los."
      },
      {
        icon: "📅",
        title: "Calendário financeiro",
        description: "Visualize suas receitas e despesas em um calendário para melhor organização."
      },
      {
        icon: "📝",
        title: "Notas e comentários",
        description: "Adicione observações aos seus lançamentos para lembrar detalhes importantes."
      }
    ]
  },
  {
    id: "business",
    title: "Empresarial",
    resources: [
      {
        icon: "🏢",
        title: "Múltiplas empresas",
        description: "Gerencie várias empresas ou negócios com acesso único e centralizado."
      },
      {
        icon: "👥",
        title: "Controle de usuários",
        description: "Adicione colaboradores com diferentes níveis de permissão de acesso."
      },
      {
        icon: "📃",
        title: "Conciliação bancária",
        description: "Confira lançamentos com o extrato bancário para garantir que tudo foi registrado."
      },
      {
        icon: "📋",
        title: "Fluxo de caixa projetado",
        description: "Visualize previsões futuras da sua empresa para tomar melhores decisões."
      }
    ]
  }
];

export default function RecursosPage() {
  const [activeCategory, setActiveCategory] = useState("financial-control");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-[#E85A27] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Recursos para Gestão de Pagamentos
              </h1>
              <p className="text-lg mb-8">
                Tudo que você precisa para gerenciar suas cobranças e receber pagamentos de forma eficiente
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#252E54]">
                Recursos Principais
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça as funcionalidades que tornam nossa plataforma única
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-[#E85A27]" />
                    Cartão de Crédito
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Aceite pagamentos com cartão de crédito em até 12x, com taxas competitivas 
                    e processamento seguro.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-[#E85A27]" />
                    PIX
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Receba pagamentos instantâneos via PIX, com geração automática de QR Code 
                    e links de pagamento.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Barcode className="h-6 w-6 text-[#E85A27]" />
                    Boleto Bancário
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Gere boletos bancários com vencimento personalizado e acompanhe o status 
                    de pagamento em tempo real.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LinkIcon className="h-6 w-6 text-[#E85A27]" />
                    Links de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Crie links personalizados para cobrança, compartilhe via WhatsApp, 
                    email ou redes sociais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCheck className="h-6 w-6 text-[#E85A27]" />
                    Cobranças Recorrentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Configure cobranças automáticas recorrentes e gerencie assinaturas 
                    de forma simples.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-6 w-6 text-[#E85A27]" />
                    Notificações
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Envie notificações automáticas de vencimento, confirmação de pagamento 
                    e atualizações de status.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="h-6 w-6 text-[#E85A27]" />
                    Relatórios Avançados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Acesse relatórios detalhados de vendas, recebimentos, inadimplência 
                    e métricas financeiras.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-6 w-6 text-[#E85A27]" />
                    Integrações
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Integre com sistemas de gestão, e-commerce, ERPs e outras ferramentas 
                    do seu negócio.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-6 w-6 text-[#E85A27]" />
                    Segurança
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Proteção contra fraudes, criptografia de dados e conformidade com 
                    as normas de segurança.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#252E54] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Comece a receber pagamentos hoje
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Junte-se a milhares de empresas que já confiam em nossa plataforma
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                className="bg-[#E85A27] text-white hover:bg-[#E85A27]/90 px-6 py-6 text-base"
              >
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform">
                  Entre na lista de espera
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
