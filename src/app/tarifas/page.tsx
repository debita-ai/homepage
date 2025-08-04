"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Tarifas() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const taxPlans = [
    {
      title: "Plano Básico",
      price: "1.99%",
      description: "Taxa por transação",
      features: [
        "Até 100 transações/mês",
        "Suporte por email",
        "Relatórios básicos",
        "Integração com principais gateways"
      ]
    },
    {
      title: "Plano Profissional",
      price: "1.49%",
      description: "Taxa por transação",
      features: [
        "Até 1000 transações/mês",
        "Suporte prioritário",
        "Relatórios avançados",
        "API personalizada",
        "Gestão de chargebacks"
      ]
    },
    {
      title: "Plano Empresarial",
      price: "0.99%",
      description: "Taxa por transação",
      features: [
        "Transações ilimitadas",
        "Suporte 24/7",
        "Relatórios personalizados",
        "API dedicada",
        "Gestão de chargebacks",
        "Consultoria especializada"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Tarifas
          </h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossas taxas e escolha o melhor plano para o seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {taxPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-white rounded-xl shadow-lg p-8 ${
                index === 1 ? "border-2 border-[#E85A27]" : ""
              }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.title}
                </h3>
                <div className="text-4xl font-bold text-[#E85A27] mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-[#E85A27] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/em-breve">
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    index === 1
                      ? "bg-[#E85A27] text-white hover:bg-[#D84A1F]"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Começar Agora
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Taxas Adicionais
          </h2>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <div>
                <h3 className="font-medium text-gray-900">Chargeback</h3>
                <p className="text-sm text-gray-600">Taxa por chargeback processado</p>
              </div>
              <span className="text-[#E85A27] font-medium">R$ 20,00</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <div>
                <h3 className="font-medium text-gray-900">Saque</h3>
                <p className="text-sm text-gray-600">Taxa por saque realizado</p>
              </div>
              <span className="text-[#E85A27] font-medium">R$ 2,90</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">Antecipação</h3>
                <p className="text-sm text-gray-600">Taxa para antecipação de recebíveis</p>
              </div>
              <span className="text-[#E85A27] font-medium">1.5% ao mês</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 