"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  Smartphone
} from "lucide-react";

export default function ParaVocePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-[#E85A27] text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="w-full md:w-1/2 mb-10 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  Solução Completa de Pagamentos
                </h1>
                <p className="text-lg mb-8">
                  Gerencie suas cobranças e receba pagamentos de forma simples e segura
                </p>
                <Button asChild className="bg-[#252E54] text-white hover:bg-[#252E54]/90 px-6 py-6 text-base">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform">
                    Entre na lista agora
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                className="w-full md:w-1/2 relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* <div className="relative h-[400px] md:h-[500px]">
                  <Image
                    src=""
                    alt="Dashboard financeiro pessoal"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    className="drop-shadow-xl"
                  />
                </div> */}
              </motion.div>
            </div>
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
                Por que escolher nossa plataforma?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nossa plataforma oferece uma variedade de recursos para atender às suas necessidades financeiras.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-[#E85A27]" />
                    Múltiplas Formas de Pagamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Aceite pagamentos via PIX, cartão de crédito, boleto e transferência bancária. 
                    Tudo em uma única plataforma.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-6 w-6 text-[#E85A27]" />
                    Gestão de Carteira
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Controle seu saldo, faça transferências e acompanhe todas as suas transações 
                    em tempo real.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-[#E85A27]" />
                    Cobranças Automáticas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Configure cobranças recorrentes e automatize o processo de faturamento 
                    para seus clientes.
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
                    Crie links de pagamento personalizados e compartilhe com seus clientes 
                    de forma rápida e segura.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="h-6 w-6 text-[#E85A27]" />
                    Relatórios Detalhados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Acesse relatórios completos de vendas, recebimentos e métricas 
                    importantes do seu negócio.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-[#E85A27]" />
                    Segurança Máxima
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Suas transações são protegidas com as mais avançadas tecnologias 
                    de segurança do mercado.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50 rounded-xl p-8 mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-center mb-8">Por que escolher nossa plataforma?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Taxas Competitivas</h3>
                  <p className="text-gray-600">
                    As melhores taxas do mercado para cada tipo de operação, 
                    sem custos ocultos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Integração Simplificada</h3>
                  <p className="text-gray-600">
                    APIs intuitivas e documentação completa para integração 
                    rápida com seu sistema.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Suporte Dedicado</h3>
                  <p className="text-gray-600">
                    Equipe especializada pronta para ajudar com qualquer dúvida 
                    ou necessidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Pagamentos Instantâneos</h3>
                  <p className="text-gray-600">
                    Receba seus pagamentos em tempo real, com liquidação 
                    automática em sua conta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Gestão de Clientes</h3>
                  <p className="text-gray-600">
                    Cadastro e gestão completa de clientes, com histórico 
                    de transações.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Escalabilidade</h3>
                  <p className="text-gray-600">
                    Plataforma preparada para crescer com seu negócio, 
                    sem limitações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
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
                Casos de Uso
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Aplicativos e empresas que já confiam em nossa plataforma.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-[#E85A27]" />
                    Empresas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Ideal para empresas de todos os portes que precisam gerenciar 
                    pagamentos e cobranças.
                  </p>
                  <Button variant="outline" className="w-full">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-[#E85A27]" />
                    E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Solução completa para lojas online, com integração com 
                    principais plataformas.
                  </p>
                  <Button variant="outline" className="w-full">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Receipt className="h-6 w-6 text-[#E85A27]" />
                    Prestadores de Serviço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Perfeito para profissionais autônomos e prestadores de 
                    serviços diversos.
                  </p>
                  <Button variant="outline" className="w-full">
                    Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
              Seja um dos primeiros a experimentar
            </motion.h2>
            <motion.p
              className="text-lg mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Garanta seu acesso antecipado e receba benefícios exclusivos
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
