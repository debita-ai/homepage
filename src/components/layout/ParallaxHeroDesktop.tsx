"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "iconoir-react";
import DashboardImage from '../../../public/dashboard.png';

export default function ParallaxHeroDesktop() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Hooks devem estar no nível superior
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, 50]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section 
      ref={sectionRef}
      className="relative h-[89.125rem] overflow-hidden bg-[#F0E0D1] flex flex-col mx-auto hero-box cursor-custom rounded-b-[28px]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0 rounded-b-[28px]" />

      {/* Content container */}
      <div className="container relative mx-auto px-4 sm:px-6 z-10 h-full flex flex-col items-center justify-center">
        {/* Text Section */}
        <motion.div 
          className="text-center max-w-4xl mb-16"
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E27936] mb-4 leading-[1.8] [&.lg\:text-6xl]:leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Seu novo braço direito
            <span className="block text-[#E27936]">
              para gestão financeira.
            </span>
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-[#E27936]/90 mb-0 mx-auto max-w-2xl leading-relaxed font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Simplifique a gestão de cobranças e pagamentos 
          </motion.p>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-[#E27936]/90 mb-8 mx-auto max-w-2xl leading-relaxed font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            da sua empresa e finalmente durma tranquilo.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-6 px-8 text-lg shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 bg-[#E27936] hover:bg-[#d24a1e] text-white hover:text-white"
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform" className="flex items-center justify-center gap-2">
                <span>Comece agora</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-6 px-8 text-lg shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 border-2 border-[#E27936]/50 hover:border-[#E27936] bg-transparent hover:bg-[#E27936]/10 text-[#E27936] hover:text-[#E27936]"
              asChild
            >
              <Link href="#recursos" className="flex items-center justify-center gap-2">
                Conhecer recursos
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard container - otimizado para performance */}
        <motion.div 
          className="relative w-full max-w-5xl mx-auto mb-16"
          style={{
            scale,
            y,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Dashboard image - simplificado para melhor performance */}
          <div 
            className="relative w-full h-[650px] rounded-2xl overflow-hidden shadow-lg border-4 border-white/30"
            style={{ 
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            <Image
              src={DashboardImage}
              alt="Dashboard Debita.aí"
              className="object-cover object-top w-full h-full"
              priority
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
            <div className="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 