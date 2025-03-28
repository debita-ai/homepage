"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Auto rotate slides
    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle touch gestures
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swipe left
      handleNext();
    }

    if (touchEnd - touchStart > 50) {
      // swipe right
      handlePrev();
    }
  };

  // Avoid hydration issues
  if (!mounted) return null;

  const currentFeature = features[currentIndex];

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-[#E85A27]/10 to-transparent overflow-hidden"
      id="recursos"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Solução completa para gestão de pagamentos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recursos desenvolvidos para simplificar suas cobranças e recebimentos
          </p>
        </div>

        <div
          className="relative mx-auto max-w-6xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 300 : -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4"
            >
              {/* Feature content */}
              <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-[#E85A27]">
                    {currentFeature.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {currentFeature.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {currentFeature.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E85A27]/10 flex items-center justify-center mr-3 mt-0.5">
                        <ChevronRight className="h-3 w-3 text-[#E85A27]" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button
                    asChild
                    className="bg-[#E85A27] hover:bg-[#d24a1e] text-white"
                  >
                    <Link href="/recursos#detalhes">
                      Saiba mais
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Feature image */}
              <div className="order-1 md:order-2 flex items-center justify-center relative">
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <div className="absolute inset-0 bg-[#E85A27]/5 rounded-3xl transform rotate-3"></div>
                  <Image
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    fill
                    className="object-contain drop-shadow-xl z-10"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm shadow-sm"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm shadow-sm"
              aria-label="Próximo slide"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </Button>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {features.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-[#E85A27] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
