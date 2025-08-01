"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
  Sparkles
} from "lucide-react";

export default function BentoGrid() {
  const features = [
    {
      title: "Criar Cobranças",
      description: "Gere cobranças personalizadas em segundos com templates inteligentes",
      icon: <FileText className="h-8 w-8" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      size: "lg:col-span-2 lg:row-span-2",
      delay: 0.1,
      image: "/images/cobrancas.jpg"
    },
    {
      title: "Dashboard Completo",
      description: "Visualize métricas em tempo real",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      size: "lg:col-span-1 lg:row-span-1",
      delay: 0.2,
      image: "/images/dashboard.jpg"
    },
    {
      title: "Automação de Cobranças",
      description: "Envio automático de cobranças e lembretes para seus clientes",
      icon: <Zap className="h-6 w-6" />,
      color: "from-[#006279] to-[#004A5C]",
      size: "lg:col-span-1 lg:row-span-1",
      delay: 0.3,
      image: "/images/automation.jpg"
    },
    {
      title: "Gateway de Pagamento",
      description: "Aceite Pix, cartão e boleto em uma única integração",
      icon: <CreditCard className="h-8 w-8" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      size: "lg:col-span-2 lg:row-span-1",
      delay: 0.4,
      image: "/images/gateway.jpg"
    },
    {
      title: "Gestão de Clientes",
      description: "Centralize todos os dados dos seus clientes",
      icon: <Users className="h-6 w-6" />,
      color: "from-[#006279] to-[#004A5C]",
      size: "lg:col-span-1 lg:row-span-1",
      delay: 0.5,
      image: "/images/clientes.jpg"
    },
    {
      title: "Notificações WhatsApp",
      description: "Notificações automáticas via WhatsApp para seus clientes",
      icon: <MessageSquare className="h-6 w-6" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      size: "lg:col-span-1 lg:row-span-1",
      delay: 0.6,
      image: "/images/whatsapp.jpg"
    },
    {
      title: "Checkout Personalizado",
      description: "Páginas de pagamento otimizadas para conversão",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "from-[#006279] to-[#004A5C]",
      size: "lg:col-span-2 lg:row-span-1",
      delay: 0.7,
      image: "/images/checkout.jpg"
    },
    {
      title: "APIs para Desenvolvedores",
      description: "Integração completa via API REST",
      icon: <Code2 className="h-6 w-6" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      size: "lg:col-span-1 lg:row-span-1",
      delay: 0.8,
      image: "/images/api.jpg"
    },
    {
      title: "Integre em Qualquer Tecnologia",
      description: "Conecte com sistemas ERP, CRM, e-commerce e qualquer plataforma via API",
      icon: <Webhook className="h-8 w-8" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      size: "lg:col-span-2 lg:row-span-1",
      delay: 0.9,
      image: "/images/integrations.jpg"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#E27936] relative overflow-hidden">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className={`${feature.size} group relative overflow-hidden rounded-3xl bg-white border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:scale-[1.02]`}
            >
              {/* Background subtle pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent rounded-3xl" />
              
              {/* Content Container */}
              <div className="relative h-full p-6 lg:p-8 flex flex-col justify-between min-h-[200px]">
                {/* Top Section - Icon */}
                <div className="flex justify-between items-start">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-gray-400 transition-colors duration-300" />
                </div>
                
                {/* Bottom Section - Text Content */}
                <div className="space-y-3">
                  <h3 className="font-['Satoshi',sans-serif] text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="font-['Satoshi',sans-serif] text-gray-600 leading-relaxed text-sm lg:text-base font-medium group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
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
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-4 px-6 text-base shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 border-2 border-white/50 hover:border-white bg-transparent hover:bg-white/10 text-white hover:text-white inline-flex gap-2">
            Explore todos os recursos
          </button>
        </motion.div>
      </div>
    </section>
  );
}