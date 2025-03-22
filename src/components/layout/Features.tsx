"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { setupScrollReveal } from "@/lib/utils";

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return setupScrollReveal(sectionRef);
  }, []);

  return (
    <section className="py-24 bg-white" ref={sectionRef} id="recursos">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 scroll-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
          Simples, ágil e repleto de recursos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Experimente gestão completa com melhor usabilidade: Cobranças via PIX, links de pagamento, boletos e notificações integradas por Whatsapp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[500px] ">
            <Image
              src="https://ext.same-assets.com/2455483663/2768577412.webp"
              alt="Interface do Debita.aí"
              fill
              className="scroll-reveal "
              unoptimized
            />

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-full"></div>
          </div>

          <div className="flex flex-col space-y-10 order-1 md:order-2">
            <FeatureItem
              number="01"
              title="Gestão inteligente de cobranças"
              description="Administre suas receitas e despesas de forma integrada, categorizando transações e eliminando a necessidade de planilhas."
              delay={0.2}
            />

            <FeatureItem
              number="02"
              title="Notificações em Tempo Real"
              description="Receba alertas instantâneos sobre transações, vencimentos e metas. Com o Debita.aí, você mantém o controle total e nunca perde um pagamento importante."
              delay={0.4}
            />

            <FeatureItem
              number="03"
              title="Relatórios Interativos e Insights"
              description="Descubra para onde seu dinheiro está indo com gráficos dinâmicos e relatórios precisos. Utilize insights estratégicos para otimizar seu fluxo de caixa e maximizar seus resultados."
              delay={0.6}
            />

            <FeatureItem
              number="04"
              title="Integração Bancária"
              description="Sincronize automaticamente suas contas e plataformas para operações seguras e organizadas."
              delay={0.8}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature item component
function FeatureItem({
  number,
  title,
  description,
  delay = 0
}: {
  number: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-start">
        <span className="bg-primary/10 text-primary font-bold text-lg rounded-lg px-3 py-1 mr-4">
          {number}
        </span>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="mt-3 text-gray-600 ml-14">{description}</p>
    </motion.div>
  );
}
