"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { setupScrollReveal } from "@/lib/utils";
import { 
  PiChartLineUp,
  PiBellRinging,
  PiChartPieSlice,
  PiShieldCheck,
  PiCreditCard,
  PiLightning
} from "react-icons/pi";
import womanHoldingPhone from "../../../public/woman-holding-phone.png";

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return setupScrollReveal(sectionRef);
  }, []);

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden" ref={sectionRef} id="recursos">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-12 relative">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 scroll-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-800">
            Simples, ágil e repleto de recursos
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-3">
            Experimente gestão completa com melhor usabilidade: Cobranças via PIX, links de pagamento, boletos e notificações integradas por Whatsapp.
          </p>
        </motion.div>

        {/* Centered layout with floating features */}
        <div className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[800px] flex items-center justify-center">
          {/* Container for image and feature items */}
          <div className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[800px] mx-auto">
            {/* Center image */}
            <motion.div 
              className="relative w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={womanHoldingPhone}
                alt="Interface do Debita.aí"
                width={1200}
                height={800}
                className="object-contain"
                unoptimized
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            </motion.div>

            {/* Floating features */}
            <FeatureCloudItem
              icon={<PiChartLineUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
              title="Gestão Inteligente"
              description="Administre suas receitas e despesas de forma integrada."
              position="top-left"
              delay={0}
              iconColor="text-[#242d52]"
            />
            <FeatureCloudItem
              icon={<PiBellRinging className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
              title="Notificações em Tempo Real"
              description="Alertas instantâneos sobre transações e vencimentos."
              position="top-right"
              delay={0.2}
              iconColor="text-[#1a3a8f]"
            />
            <FeatureCloudItem
              icon={<PiChartPieSlice className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
              title="Relatórios Interativos"
              description="Gráficos dinâmicos e insights estratégicos."
              position="bottom-left"
              delay={0.4}
              iconColor="text-[#2e4a9e]"
            />
            <FeatureCloudItem
              icon={<PiShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
              title="Integração Segura"
              description="Sincronização automática com suas contas."
              position="bottom-right"
              delay={0.6}
              iconColor="text-[#1e3a8a]"
            />
            <FeatureCloudItem
              icon={<PiCreditCard className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
              title="Pagamentos Flexíveis"
              description="Aceite PIX, boleto e cartão com facilidade."
              position="left"
              delay={0.8}
              iconColor="text-[#2a4b9f]"
            />
            <FeatureCloudItem
              icon={<PiLightning className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
              title="Automação Inteligente"
              description="Processos automatizados para economizar tempo."
              position="right"
              delay={1}
              iconColor="text-[#1f3d8f]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Floating feature item component
function FeatureCloudItem({
  icon,
  title,
  description,
  position,
  delay = 0,
  iconColor = "text-[#242d52]"
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "left" | "right";
  delay?: number;
  iconColor?: string;
}) {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "left": "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
    "right": "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} group`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.1,
        zIndex: 10
      }}
    >
      <div className="p-2 sm:p-3 md:p-4 lg:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/90 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-200 ease-out max-w-[160px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] transform-gpu">
        <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
          <div className={`p-1.5 sm:p-2 md:p-3 bg-[#242d52]/10 rounded-lg sm:rounded-xl ${iconColor} group-hover:bg-[#242d52] group-hover:text-white transition-colors duration-200 ease-out`}>
            {icon}
          </div>
          <div>
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 mb-0.5 sm:mb-1 md:mb-2 group-hover:text-[#242d52] transition-colors duration-200 ease-out">{title}</h3>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
