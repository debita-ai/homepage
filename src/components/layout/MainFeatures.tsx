"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavArrowRight } from "iconoir-react";
import DOIS from '../../../public/DOIS.png'
import CLIENTE from '../../../public/CLIENTES.png'
import LINK from '../../../public/link.png'

const features = [
  {
    id: "intelligence",
    title: "Gestão de Pagamentos",
    description: "Gerencie suas cobranças de forma inteligente",
    items: [
      { text: "Dashboard completo com visão geral das cobranças e recebimentos" },
      { text: "Gestão de múltiplas formas de pagamento em uma única plataforma" },
      { text: "Relatórios detalhados de vendas, inadimplência e métricas financeiras" },
      { text: "Acompanhamento de cobranças e vencimentos em tempo real" }
    ],
    image: DOIS
  },
  {
    id: "convenience",
    title: "Automação de Cobranças",
    description: "Automatize seus processos de cobrança",
    items: [
      { text: "Cobranças recorrentes e assinaturas automáticas" },
      { text: "Geração automática de boletos, PIX e links de pagamento" },
      { text: "Notificações automáticas de vencimento e confirmação" },
      { text: "Integração com sistemas de gestão e e-commerce" }
    ],
    image: CLIENTE
  },
  {
    id: "control",
    title: "Controle Total",
    description: "Tenha controle total sobre suas cobranças",
    items: [
      { text: "Gestão completa de clientes e histórico de transações" },
      { text: "Controle de taxas e comissões por tipo de operação" },
      { text: "Monitoramento de fraudes e segurança das transações" },
      { text: "Todas as suas cobranças centralizadas em um só lugar" }
    ],
    image: LINK
  }
];

export default function MainFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-40 bg-gradient-to-b from-[#E85A27]/5 via-[#E85A27]/8 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E85A27]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00809d]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#E85A27]/3 to-[#00809d]/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Solução completa para gestão de pagamentos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Recursos desenvolvidos para simplificar suas cobranças e recebimentos
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feature.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-col-dense'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Image Section */}
                <motion.div
                  className={`relative h-[350px] md:h-[450px] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E85A27]/10 to-[#00809d]/10 rounded-3xl transform rotate-3 scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E85A27]/5 to-transparent rounded-3xl transform -rotate-3 scale-110"></div>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-contain drop-shadow-2xl z-10 relative"
                    unoptimized
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className={`flex flex-col justify-center space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#E85A27]">
                      {feature.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.4 }}
                        className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E85A27]/10 flex items-center justify-center">
                          <NavArrowRight className="h-4 w-4 text-[#E85A27]" />
                        </div>
                        <span className="text-gray-700 text-base leading-relaxed">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div 
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button
                      asChild
                      className="bg-[#E85A27] hover:bg-[#d24a1e] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      <Link href="/recursos#detalhes" className="flex items-center gap-2">
                        Saiba mais
                        <NavArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
