"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { setupScrollReveal } from "@/lib/utils";
import { CreditCard, Zap, BarChart3, Users, TrendingUp } from "lucide-react";
// import { Button } from "@debita-ai/ragekit";
import PeaceGuy from "../../../public/illustrations/peace-guy.svg";
import Boleto from "../../../public/illustrations/boleto.svg";
import Notifications from "../../../public/illustrations/notifications.svg";
import Pix from "../../../public/illustrations/pix.svg";

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return setupScrollReveal(sectionRef);
  }, []);

  return (
    <section 
      className="py-24 md:py-32 bg-[#FFF3E7] relative overflow-hidden" 
      ref={sectionRef} 
      id="recursos"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-[#E37A37]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-[#4A8C7A]/3 rounded-full blur-3xl" />
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
            Uma plataforma, todas as ferramentas que você precisa
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Detalhe o que a plataforma faz e como ela resolve problemas práticos do seu negócio.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Image Section */}
          <motion.div 
            className="relative order-2 lg:order-1 lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <div className="relative w-full max-w-xl mx-auto h-[28rem] mt-[100px]">
                {/* Peace Guy - Base */}
                  <Image
                    src={PeaceGuy}
                    alt="Peace Guy"
                    width={420}
                    height={420}
                    className="object-contain drop-shadow-lg pt-[100px]"
                    unoptimized
                    priority
                  />

                {/* Floating Icons around head */}
                {/* Boleto - Top Left */}
                <motion.div
                  className="absolute top-8 left-12 z-20"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src={Boleto}
                    alt="Boleto"
                    width={85}
                    height={85}
                    className="object-contain drop-shadow-md"
                    unoptimized
                  />
                </motion.div>

                {/* Notifications - Top Right */}
                <motion.div
                  className="absolute top-12 right-10 z-20"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Image
                    src={Notifications}
                    alt="Notifications"
                    width={80}
                    height={80}
                    className="object-contain drop-shadow-md"
                    unoptimized
                  />
                </motion.div>

                {/* Pix - Top Center */}
                <motion.div
                  className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20"
                  animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Image
                    src={Pix}
                    alt="Pix"
                    width={90}
                    height={90}
                    className="object-contain drop-shadow-md"
                    unoptimized
                  />
                </motion.div>
              </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="space-y-6 order-1 lg:order-2 lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#E37A37]">
                Todas as ferramentas em um só lugar
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Simplifique sua gestão financeira com recursos pensados para o seu negócio:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E37A37]/20 hover:border-[#E37A37]/40 hover:bg-white/90 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/gateway-feature.jpg"
                    alt="Gateway de Pagamento"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E37A37]/10 flex items-center justify-center relative z-10">
                  <CreditCard className="h-4 w-4 text-[#E37A37]" />
                </div>
                <span className="text-gray-700 text-base leading-relaxed relative z-10">
                  <strong>Gateway de Pagamento Completo:</strong> Receba de seus clientes via Pix, Cartão de Crédito e Boleto de forma simples e segura.
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E37A37]/20 hover:border-[#E37A37]/40 hover:bg-white/90 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/automation-feature.jpg"
                    alt="Automação de Cobranças"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E37A37]/10 flex items-center justify-center relative z-10">
                  <Zap className="h-4 w-4 text-[#E37A37]" />
                </div>
                <span className="text-gray-700 text-base leading-relaxed relative z-10">
                  <strong>Automação de Cobranças:</strong> Crie cobranças recorrentes e envie lembretes automáticos. Chega de cobrar manualmente.
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E37A37]/20 hover:border-[#E37A37]/40 hover:bg-white/90 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/dashboard-feature.jpg"
                    alt="Dashboard em Tempo Real"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E37A37]/10 flex items-center justify-center relative z-10">
                  <BarChart3 className="h-4 w-4 text-[#E37A37]" />
                </div>
                <span className="text-gray-700 text-base leading-relaxed relative z-10">
                  <strong>Dashboard em Tempo Real:</strong> Tenha clareza total do seu faturamento, recebimentos e inadimplência em uma tela intuitiva.
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E37A37]/20 hover:border-[#E37A37]/40 hover:bg-white/90 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/clients-feature.jpg"
                    alt="Controle de Clientes"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E37A37]/10 flex items-center justify-center relative z-10">
                  <Users className="h-4 w-4 text-[#E37A37]" />
                </div>
                <span className="text-gray-700 text-base leading-relaxed relative z-10">
                  <strong>Controle de Clientes e Faturas:</strong> Centralize o cadastro de clientes e o histórico de todas as transações em um só lugar.
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="relative flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E37A37]/20 hover:border-[#E37A37]/40 hover:bg-white/90 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-5">
                  <Image
                    src="/images/reconciliation-feature.jpg"
                    alt="Conciliação Simplificada"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E37A37]/10 flex items-center justify-center relative z-10">
                  <TrendingUp className="h-4 w-4 text-[#E37A37]" />
                </div>
                <span className="text-gray-700 text-base leading-relaxed relative z-10">
                  <strong>Conciliação Simplificada:</strong> Veja exatamente o que você vendeu e quando o dinheiro estará na sua conta, sem planilhas complexas.
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {/* <Button
                variant="primary"
                size="normal"
                label="Conhecer recursos"
              /> */}
              <button className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-4 px-6 text-base shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 bg-[#E37A37] hover:bg-[#C65A1A] text-white hover:text-white font-semibold">
                Ver todos os recursos
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
