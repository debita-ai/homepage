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
      className="relative h-[89.125rem] overflow-hidden bg-[#FFF3E7] flex flex-col mx-auto hero-box cursor-custom rounded-b-[28px]"
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E37A37] mb-4 leading-[1.8] [&.lg\:text-6xl]:leading-[1.2] font-baskerville"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Seu novo braço direito
            <span className="block text-[#E37A37]">
              para gestão financeira.
            </span>
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-[#E37A37]/90 mb-0 mx-auto max-w-2xl leading-relaxed font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Simplifique a gestão de cobranças e pagamentos 
          </motion.p>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-[#E37A37]/90 mb-8 mx-auto max-w-2xl leading-relaxed font-semibold"
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
              className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-6 px-8 text-lg shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 bg-[#E37A37] hover:bg-[#C65A1A] text-white hover:text-white"
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform" className="flex items-center justify-center gap-2">
                <span>Comece agora</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-6 px-8 text-lg shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 border-2 border-[#E37A37]/50 hover:border-[#E37A37] bg-transparent hover:bg-[#E37A37]/10 text-[#E37A37] hover:text-[#E37A37]"
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
          {/* Container with hand-drawn border outside */}
          <div className="relative">
            {/* Hand-drawn border - positioned outside the image */}
            <svg 
              className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] pointer-events-none z-10" 
              viewBox="0 0 400 300" 
              preserveAspectRatio="none"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            >
              <path
                d="M 12 15 
                   C 10 10, 8 8, 15 6
                   C 18 5, 22 4, 26 5
                   L 374 6
                   C 380 6, 385 8, 388 12
                   C 390 15, 392 18, 390 20
                   C 391 22, 394 25, 394 28
                   L 393 272
                   C 394 278, 392 283, 388 286
                   C 385 289, 382 290, 378 289
                   C 375 291, 372 294, 368 294
                   L 26 293
                   C 20 294, 15 291, 12 287
                   C 9 284, 8 280, 9 276
                   C 7 273, 5 270, 6 267
                   L 8 20
                   C 7 17, 9 15, 12 15 Z"
                fill="none"
                stroke="#E37A37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: '8,3',
                  animation: 'dash 10s ease-in-out infinite',
                  filter: 'url(#rough)'
                }}
              />
              <defs>
                <filter id="rough">
                  <feTurbulence 
                    baseFrequency="0.06" 
                    numOctaves="4" 
                    result="noise"
                  />
                  <feDisplacementMap 
                    in="SourceGraphic" 
                    in2="noise" 
                    scale="2"
                  />
                </filter>
              </defs>
            </svg>

            {/* Dashboard image */}
            <div 
              className="relative w-full h-[650px] rounded-2xl overflow-hidden shadow-lg"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 