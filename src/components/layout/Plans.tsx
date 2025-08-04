"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle2, 
  X, 
  Star,
  CreditCard,
  Smartphone,
  FileText,
  Users,
  BarChart3,
  Zap,
  ArrowRight
} from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Grátis",
      subtitle: "Para começar",
      price: "R$ 0",
      period: "/mês",
      description: "Tudo que você precisa para começar a vender online",
      highlight: false,
      features: [
        "Transações ilimitadas",
        "Gateway completo (Pix, Boleto)",
        "Dashboard em tempo real",
        "Gestão de clientes",
        "Automação básica",
        "Suporte por email",
        "APIs básicas"
      ],
      notIncluded: [
        "Cartão de crédito (em breve)",
        "Suporte prioritário",
        "Webhook avançado"
      ]
    },
    {
      name: "Premium",
      subtitle: "Em breve",
      price: "R$ 29",
      period: "/mês",
      description: "Recursos avançados para empresas em crescimento",
      highlight: true,
      features: [
        "Tudo do plano Grátis",
        "Cartão de crédito (em breve)",
        "Suporte prioritário",
        "Webhook avançado",
        "Relatórios personalizados",
        "Múltiplos usuários",
        "Integração avançada"
      ],
      notIncluded: []
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-50 relative overflow-hidden" id="planos">
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Comece grátis, pague apenas quando vender
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa plataforma é 100% gratuita. Você paga apenas uma pequena taxa sobre cada transação recebida.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#E37A37] to-[#C65A1A] text-white border-2 border-[#E37A37] shadow-2xl transform scale-105'
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#006279] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Em desenvolvimento
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-800'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.subtitle}
                </p>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-[#E37A37]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle2 className={`h-5 w-5 flex-shrink-0 ${
                      plan.highlight ? 'text-white' : 'text-[#4A8C7A]'
                    }`} />
                    <span className={`text-sm ${plan.highlight ? 'text-white/90' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3 opacity-60">
                    <X className={`h-5 w-5 flex-shrink-0 ${
                      plan.highlight ? 'text-white/60' : 'text-gray-400'
                    }`} />
                    <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-gray-500'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {plan.name === 'Premium' ? (
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-white text-[#E37A37] hover:bg-gray-50 hover:shadow-lg'
                      : 'bg-[#E37A37] text-white hover:bg-[#C65A1A] hover:shadow-lg'
                  } opacity-60 cursor-not-allowed`}
                  disabled
                >
                  Em breve
                </button>
              ) : (
                <Link href="/em-breve">
                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-white text-[#E37A37] hover:bg-gray-50 hover:shadow-lg'
                        : 'bg-[#E37A37] text-white hover:bg-[#C65A1A] hover:shadow-lg'
                    } hover:scale-105`}
                  >
                    Começar agora
                  </button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        {/* Transaction fees info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Taxas por transação
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#E37A37]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-6 w-6 text-[#E37A37]" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Pix</h4>
                <p className="text-2xl font-bold text-[#E37A37]">0,80%</p>
                <p className="text-sm text-gray-600">por transação</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#E37A37]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="h-6 w-6 text-[#E37A37]" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Boleto</h4>
                <p className="text-2xl font-bold text-[#E37A37]">R$ 1,99</p>
                <p className="text-sm text-gray-600">por boleto pago</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="h-6 w-6 text-gray-400" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-1">Cartão (em breve)</h4>
                <p className="text-2xl font-bold text-gray-400">Em breve</p>
                <p className="text-sm text-gray-600">aguarde novidades</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}