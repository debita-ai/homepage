"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { setupScrollReveal } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

// Integration platform data
const integrations = [
  {
    name: "WooCommerce",
    logo: "https://ext.same-assets.com/woo-logo/woocommerce-logo.svg",
    description: "Integre suas vendas do WooCommerce e automatize a gestão financeira da sua loja online.",
    color: "#96588a",
    bgColor: "#f6f0f5"
  },
  {
    name: "Shopify",
    logo: "https://ext.same-assets.com/shopify-logo/shopify-logo.svg",
    description: "Sincronize pedidos, produtos e clientes entre sua loja Shopify e o Debita.aí.",
    color: "#7ab55c",
    bgColor: "#f0f7eb"
  },
  {
    name: "Nuvemshop",
    logo: "https://ext.same-assets.com/nuvemshop-logo/nuvemshop-logo.svg",
    description: "Gerencie fluxo de caixa, estoque e pagamentos da sua loja Nuvemshop de forma integrada.",
    color: "#0fabd9",
    bgColor: "#e8f8fc"
  }
];

export default function Integrations() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return setupScrollReveal(sectionRef);
  }, []);

  return (
    <section className="py-24 bg-[#252E54]/95" ref={sectionRef} id="integracoes">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16 scroll-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-4">
            <span className="badge badge-soon px-4 py-2 shadow-md text-sm font-bold">
              Em breve
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Integre com suas plataformas favoritas
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Conecte o Debita.aí com suas ferramentas de e-commerce para automatizar seu controle financeiro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={integration.name}
              integration={integration}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-white/70 mb-6">
            Além destas, estamos trabalhando em mais de 20 integrações disponíveis para seu negócio
          </p>

        </motion.div>
      </div>
    </section>
  );
}

function IntegrationCard({
  integration,
  index
}: {
  integration: typeof integrations[0];
  index: number;
}) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
        style={{ backgroundColor: integration.bgColor }}
      >

      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-800">{integration.name}</h3>
      <p className="text-gray-600 mb-6">{integration.description}</p>


    </motion.div>
  );
}
