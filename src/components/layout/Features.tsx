"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { setupScrollReveal } from "@/lib/utils";
import { NavArrowRight } from "iconoir-react";
import womanHoldingPhone from "../../../public/woman-holding-phone.png";

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return setupScrollReveal(sectionRef);
  }, []);

  return (
    <section 
      className="py-24 md:py-32 bg-gradient-to-b from-white to-[#E85A27]/5 relative overflow-hidden" 
      ref={sectionRef} 
      id="recursos"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-[#E85A27]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-[#00809d]/3 rounded-full blur-3xl" />
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
            Transforme sua gestão financeira
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma plataforma completa que revoluciona a forma como você gerencia pagamentos, 
            com soluções inteligentes para cobranças, automação e controle financeiro.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E85A27]/20 to-[#00809d]/20 rounded-3xl transform rotate-2 blur-xl scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E85A27]/10 to-transparent rounded-3xl transform -rotate-2 blur-xl scale-105"></div>
              <Image
                src={womanHoldingPhone}
                alt="Interface do Debita.aí"
                width={500}
                height={350}
                className="object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500 mx-auto"
                unoptimized
                priority
              />
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#E85A27]">
                Gestão Inteligente de Pagamentos
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Simplifique suas cobranças com uma plataforma que oferece:
              </p>
            </div>

            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E85A27]/10 flex items-center justify-center">
                  <NavArrowRight className="h-4 w-4 text-[#E85A27]" />
                </div>
                <span className="text-gray-700 text-base leading-relaxed">
                  Cobranças via PIX, boleto e cartão em uma única plataforma
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E85A27]/10 flex items-center justify-center">
                  <NavArrowRight className="h-4 w-4 text-[#E85A27]" />
                </div>
                <span className="text-gray-700 text-base leading-relaxed">
                  Notificações automáticas por WhatsApp e e-mail
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E85A27]/10 flex items-center justify-center">
                  <NavArrowRight className="h-4 w-4 text-[#E85A27]" />
                </div>
                <span className="text-gray-700 text-base leading-relaxed">
                  Dashboard completo com métricas e relatórios em tempo real
                </span>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-[#E85A27]/10 flex items-center justify-center">
                  <NavArrowRight className="h-4 w-4 text-[#E85A27]" />
                </div>
                <span className="text-gray-700 text-base leading-relaxed">
                  Automação de processos para economizar tempo e recursos
                </span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
