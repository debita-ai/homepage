"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { setupScrollReveal } from "@/lib/utils";
import { ChevronRight, Smartphone, BellRing, Fingerprint } from "lucide-react";

// Mobile app screenshots for carousel
const appScreenshots = [
  {
    src: "https://ext.same-assets.com/app-screenshots/dashboard-app.jpg",
    alt: "Dashboard do App Debita.aí"
  },
  {
    src: "https://ext.same-assets.com/app-screenshots/transactions-app.jpg",
    alt: "Tela de transações do App Debita.aí"
  },
  {
    src: "https://ext.same-assets.com/app-screenshots/reports-app.jpg",
    alt: "Relatórios no App Debita.aí"
  }
];

export default function AppPromo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Set up scroll reveal
    const cleanup = setupScrollReveal(sectionRef);

    // Auto rotate screenshots
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % appScreenshots.length);
    }, 3000);

    return () => {
      cleanup();
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-[#E85A27]/10 to-white relative" ref={sectionRef}>
      {/* Em breve badge at the top of section */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-[#E85A27] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
          Em breve
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Mobile app screenshots */}
          <div className="relative order-2 md:order-1">
            <motion.div
              className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Phone frame */}
              <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] overflow-hidden border-8 border-gray-800 shadow-2xl">
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-black z-10 flex items-center justify-between px-6">
                  <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-5 bg-black rounded-b-xl z-10"></div>

                {/* Screenshots carousel */}
                <div className="relative w-full h-full">
                  {appScreenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: activeSlide === index ? 1 : 0,
                        scale: activeSlide === index ? 1 : 0.9
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${screenshot.src})` }}
                        role="img"
                        aria-label={screenshot.alt}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-24 -left-10 w-40 h-40 bg-[#E85A27]/10 rounded-full -z-10"></div>
              <div className="absolute top-20 -right-10 w-64 h-64 bg-[#252E54]/10 rounded-full -z-10"></div>

              {/* Indicator dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {appScreenshots.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${activeSlide === index ? 'bg-[#E85A27]' : 'bg-gray-300'}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <motion.div
              className="scroll-reveal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Leve o controle financeiro com você
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Acesse suas informações financeiras em qualquer lugar com o aplicativo
                Debita.aí. Disponível para iOS e Android, nosso app oferece todas as
                funcionalidades de forma simplificada e prática para o seu dia a dia.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E85A27]/10 flex items-center justify-center mr-4">
                    <Smartphone className="h-5 w-5 text-[#E85A27]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Sincronização em tempo real</h3>
                    <p className="text-gray-600">Seus dados são atualizados instantaneamente entre todos os dispositivos</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#252E54]/10 flex items-center justify-center mr-4">
                    <BellRing className="h-5 w-5 text-[#252E54]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Notificações inteligentes</h3>
                    <p className="text-gray-600">Receba alertas sobre pagamentos, vencimentos e metas financeiras</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E85A27]/10 flex items-center justify-center mr-4">
                    <Fingerprint className="h-5 w-5 text-[#E85A27]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Biometria e Face ID</h3>
                    <p className="text-gray-600">Acesso rápido e seguro com as tecnologias mais modernas de autenticação</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
