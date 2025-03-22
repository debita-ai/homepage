"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Shield, CreditCard, Headset, ChevronRight, ArrowRight, BarChart, PieChart } from "lucide-react";

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);

  // Add intersection observer for scroll reveal effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.scroll-reveal');
      statItems.forEach(item => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pt-28 pb-20 bg-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-20 bg-white/5 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 2xl:px-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Tudo que você precisa para organizar suas finanças de vez
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">
              O Debita.aí simplifica o controle de receitas e despesas. Transforme a sua rotina financeira pessoal e empresarial.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-secondary text-white hover:bg-secondary-600 px-8 py-7 text-lg rounded-lg flex items-center group"
              >
                <Link href="/cadastro">
                  Testar grátis por 7 dias
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-7 text-lg rounded-lg"
              >
                <Link href="/recursos">
                  Explorar recursos
                  <ChevronRight className="ml-1 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="https://ext.same-assets.com/2144389975/4088211202.png"
                alt="Dashboard Debita.aí"
                fill
                style={{ objectFit: "contain" }}
                priority
                className="drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-20 relative" ref={statsRef}>
          {/* Horizontal line across all stats */}
          <div className="absolute top-0 left-0 w-full h-px bg-white/20 -translate-y-8"></div>

          {/* Vertical separator lines */}
          <div className="hidden md:block absolute top-1/2 left-[25%] w-px h-16 bg-white/20 -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 left-[50%] w-px h-16 bg-white/20 -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 left-[75%] w-px h-16 bg-white/20 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <div className="scroll-reveal text-center flex flex-col items-center">
              <Clock className="h-10 w-10 mb-4" />
              <p className="text-lg mb-1">Estamos no mercado</p>
              <p className="font-bold text-xl">há <span className="font-bold">17 anos</span></p>
            </div>
            <div className="scroll-reveal text-center flex flex-col items-center">
              <Shield className="h-10 w-10 mb-4" />
              <p className="text-lg mb-1"><span className="font-bold">97%</span> das pessoas que usam</p>
              <p className="text-xl">aprovam o nosso trabalho</p>
            </div>
            <div className="scroll-reveal text-center flex flex-col items-center">
              <CreditCard className="h-10 w-10 mb-4" />
              <p className="text-lg mb-1">Não precisa de cartão de</p>
              <p className="text-xl">crédito para experimentar</p>
            </div>
            <div className="scroll-reveal text-center flex flex-col items-center">
              <Headset className="h-10 w-10 mb-4" />
              <p className="text-lg mb-1">Suporte humanizado por</p>
              <p className="text-xl">WhatsApp, chat e telefone</p>
            </div>
          </div>

          {/* Horizontal line below all stats */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 translate-y-8"></div>
        </div>
      </div>
    </section>
  );
}
