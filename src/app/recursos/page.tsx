"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { 
  CreditCard, 
  Zap, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Settings,
  CheckCircle2,
  Calendar,
  FileText,
  ShoppingCart,
  Code2,
  Webhook,
  ArrowRight,
  Sparkles,
  Shield,
  TrendingUp,
  Clock,
  Smartphone
} from "lucide-react";

export default function RecursosPage() {
  const features = [
    {
      title: "Criar Cobranças",
      description: "Gere cobranças personalizadas em segundos com templates inteligentes. Crie cobranças únicas ou recorrentes com facilidade.",
      icon: <FileText className="h-8 w-8" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      benefits: ["Templates personalizáveis", "Cobranças recorrentes", "Múltiplas formas de pagamento"]
    },
    {
      title: "Dashboard Completo",
      description: "Visualize métricas em tempo real. Tenha controle total sobre seu faturamento, recebimentos e inadimplência.",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      benefits: ["Métricas em tempo real", "Relatórios detalhados", "Análise de performance"]
    },
    {
      title: "Automação de Cobranças",
      description: "Envio automático de cobranças e lembretes para seus clientes. Nunca mais perca um pagamento.",
      icon: <Zap className="h-6 w-6" />,
      color: "from-[#006279] to-[#004A5C]",
      benefits: ["Lembretes automáticos", "Cobranças recorrentes", "Notificações inteligentes"]
    },
    {
      title: "Gateway de Pagamento",
      description: "Aceite Pix, cartão (em breve) e boleto em uma única integração. Simplifique seus recebimentos.",
      icon: <CreditCard className="h-8 w-8" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      benefits: ["Pix instantâneo", "Cartão de crédito (em breve)", "Boleto bancário"]
    },
    {
      title: "Gestão de Clientes",
      description: "Centralize todos os dados dos seus clientes. Histórico completo de transações e informações.",
      icon: <Users className="h-6 w-6" />,
      color: "from-[#006279] to-[#004A5C]",
      benefits: ["Cadastro centralizado", "Histórico completo", "Segmentação avançada"]
    },
    {
      title: "Notificações WhatsApp",
      description: "Notificações automáticas via WhatsApp para seus clientes. Aumente a taxa de conversão.",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      benefits: ["WhatsApp Business API", "Mensagens automáticas", "Alta taxa de entrega"]
    },
    {
      title: "Checkout Personalizado",
      description: "Páginas de pagamento otimizadas para conversão. Design responsivo e experiência fluida.",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "from-[#006279] to-[#004A5C]",
      benefits: ["Design responsivo", "Otimizado para conversão", "Personalização completa"]
    },
    {
      title: "APIs para Desenvolvedores",
      description: "Integração completa via API REST. Conecte com qualquer sistema ou aplicação.",
      icon: <Code2 className="h-6 w-6" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      benefits: ["API REST completa", "Documentação detalhada", "SDKs disponíveis"]
    },
    {
      title: "Integre em Qualquer Tecnologia",
      description: "Conecte com sistemas ERP, CRM, e-commerce e qualquer plataforma via API.",
      icon: <Webhook className="h-8 w-8" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      benefits: ["Webhooks em tempo real", "Integrações nativas", "Flexibilidade total"]
    },
    {
      title: "Segurança de Nível Bancário",
      description: "Proteção de dados com criptografia avançada e conformidade com regulamentações.",
      icon: <Shield className="h-6 w-6" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      benefits: ["Criptografia AES-256", "Nenhuma burocracia", "LGPD compliance"]
    },
    {
      title: "Relatórios Avançados",
      description: "Relatórios detalhados e análises para tomar decisões estratégicas.",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-[#006279] to-[#004A5C]",
      benefits: ["Relatórios customizáveis", "Exportação de dados", "Análises preditivas"]
    },
    {
      title: "App Mobile",
      description: "Gerencie seus negócios de qualquer lugar com nosso aplicativo mobile.",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      benefits: ["iOS e Android", "Notificações push", "Funcionalidades completas"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Todos os Recursos
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Descubra todas as ferramentas que fazem da Debita.aí a escolha certa para sua gestão financeira.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-200"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg mb-6`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">Principais benefícios:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-[#4A8C7A] flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E37A37] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Pronto para começar?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Junte-se a milhares de empresas que já simplificaram sua gestão financeira com a Debita.aí.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/em-breve">
                <button className="bg-white text-[#E37A37] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Começar agora
                </button>
              </Link>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Falar com especialista
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}