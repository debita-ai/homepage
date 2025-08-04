"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  Bot,
  Send
} from "lucide-react";

export default function BentoGrid() {
  const features = [
    {
      title: "Criar Cobranças com IA",
      description: "Nossa IA ajuda a criar cobranças inteligentes no WhatsApp. Envio automático pela nossa plataforma ou manual quando preferir.",
      icon: <Bot className="h-8 w-8" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      size: "lg:col-span-2 lg:row-span-2",
      features: ["IA para criação automática", "Envio pelo WhatsApp", "Opção manual disponível"]
    },
    {
      title: "Dashboard Completo",
      description: "Visualize métricas em tempo real com relatórios inteligentes",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      size: "lg:col-span-1 lg:row-span-1",
      features: ["Métricas em tempo real", "Relatórios detalhados"]
    },
    {
      title: "Automação Inteligente",
      description: "Envio automático de cobranças e lembretes via WhatsApp",
      icon: <Zap className="h-6 w-6" />,
      color: "from-[#006279] to-[#004A5C]",
      size: "lg:col-span-1 lg:row-span-1",
      features: ["Lembretes automáticos", "WhatsApp integrado"]
    },
    {
      title: "Gateway de Pagamento",
      description: "Aceite Pix, cartão (em breve) e boleto em uma única integração",
      icon: <CreditCard className="h-8 w-8" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      size: "lg:col-span-2 lg:row-span-1",
      features: ["Pix instantâneo", "Cartões (em breve)", "Boleto"]
    },
    {
      title: "Gestão de Clientes",
      description: "Centralize todos os dados dos seus clientes",
      icon: <Users className="h-6 w-6" />,
      color: "from-[#006279] to-[#004A5C]",
      size: "lg:col-span-1 lg:row-span-1",
      features: ["Cadastro centralizado", "Histórico completo"]
    },
    {
      title: "WhatsApp Business",
      description: "Cobranças e notificações direto no WhatsApp dos seus clientes",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      size: "lg:col-span-1 lg:row-span-1",
      features: ["WhatsApp Business API", "Alta taxa de entrega"]
    },
    {
      title: "Checkout Personalizado",
      description: "Páginas de pagamento otimizadas para conversão",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "from-[#006279] to-[#004A5C]",
      size: "lg:col-span-2 lg:row-span-1",
      features: ["Design responsivo", "Alta conversão"]
    },
    {
      title: "APIs para Desenvolvedores",
      description: "Integração completa via API REST",
      icon: <Code2 className="h-6 w-6" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      size: "lg:col-span-1 lg:row-span-1",
      features: ["API REST", "Documentação completa"]
    },
    {
      title: "Integre em Qualquer Tecnologia",
      description: "Conecte com sistemas ERP, CRM, e-commerce via API",
      icon: <Webhook className="h-8 w-8" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      size: "lg:col-span-2 lg:row-span-1",
      features: ["Webhooks", "Integrações nativas"]
    }
  ];

  return (
    <section id="recursos-detalhados" className="py-24 md:py-32 bg-[#E27936] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[#E37A37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-[#4A8C7A]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white font-baskerville">
            Tudo que você precisa para crescer
          </h2>
          <p className="font-['Satoshi',sans-serif] text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            Descubra os recursos que fazem da Debita.aí a escolha certa para sua gestão financeira.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`${feature.size} group relative overflow-hidden rounded-3xl bg-white border border-white/20 hover:border-white/40 transition-all duration-200 hover:shadow-xl`}
            >
              {/* Background subtle pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent rounded-3xl" />
              
              {/* Content Container */}
              <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between min-h-[200px]">
                {/* Top Section - Icon */}
                <div className="flex justify-between items-start">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg transition-transform duration-200 group-hover:scale-105`}>
                    {feature.icon}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-gray-400 transition-colors duration-200" />
                </div>
                
                {/* Bottom Section - Text Content */}
                <div className="space-y-3">
                  <h3 className="font-['Satoshi',sans-serif] text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="font-['Satoshi',sans-serif] text-gray-600 leading-relaxed text-sm lg:text-base font-medium group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Features list for larger cards */}
                  {feature.features && feature.size.includes('span-2') && (
                    <div className="mt-4 space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#4A8C7A] flex-shrink-0" />
                          <span className="text-sm text-gray-600 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link href="/recursos">
            <button className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-4 px-6 text-base shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 border-2 border-white/50 hover:border-white bg-transparent hover:bg-white/10 text-white hover:text-white inline-flex gap-2">
              Explore todos os recursos
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}