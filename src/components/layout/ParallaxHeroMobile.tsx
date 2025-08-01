"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "iconoir-react";
import DashboardImage from '../../../public/dashboard.png';

export default function ParallaxHeroMobile() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for mobile
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 1.03]);
  const y = useTransform(scrollYProgress, [0, 0.15], [0, 30]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#FFF3E7] flex flex-col mx-auto hero-box cursor-custom rounded-b-[28px]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0 rounded-b-[28px]" />
      
      {/* Mobile-optimized Ipanema-style fluid waves */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[28px]">
        {/* Main fluid blobs - scaled for mobile */}
        <div 
          className="absolute w-[250px] h-[120px] top-[10%] left-[5%]"
          style={{
            background: `radial-gradient(ellipse at center, 
              #F0DCCD85 0%, 
              #F0DCCD65 30%, 
              #F0DCCD35 60%, 
              transparent 100%)`,
            animation: 'fluid-morph-1 18s ease-in-out infinite',
            filter: 'blur(2px)'
          }}
        />
        
        <div 
          className="absolute w-[200px] h-[100px] top-[25%] right-[10%]"
          style={{
            background: `radial-gradient(ellipse at center, 
              #F0DCCD75 0%, 
              #F0DCCD55 40%, 
              #F0DCCD25 70%, 
              transparent 100%)`,
            animation: 'fluid-morph-2 22s ease-in-out infinite',
            filter: 'blur(1.5px)'
          }}
        />

        <div 
          className="absolute w-[300px] h-[150px] top-[50%] left-[0%]"
          style={{
            background: `radial-gradient(ellipse at center, 
              #F0DCCD70 0%, 
              #F0DCCD45 35%, 
              #F0DCCD20 65%, 
              transparent 100%)`,
            animation: 'fluid-morph-3 25s ease-in-out infinite',
            filter: 'blur(3px)'
          }}
        />

        <div 
          className="absolute w-[180px] h-[90px] top-[15%] left-[50%]"
          style={{
            background: `radial-gradient(ellipse at center, 
              #F0DCCD80 0%, 
              #F0DCCD50 45%, 
              #F0DCCD15 80%, 
              transparent 100%)`,
            animation: 'fluid-morph-1 20s ease-in-out infinite reverse',
            filter: 'blur(1px)'
          }}
        />

        <div 
          className="absolute w-[250px] h-[125px] top-[65%] right-[15%]"
          style={{
            background: `radial-gradient(ellipse at center, 
              #F0DCCD65 0%, 
              #F0DCCD40 50%, 
              #F0DCCD10 85%, 
              transparent 100%)`,
            animation: 'fluid-morph-2 24s ease-in-out infinite reverse',
            filter: 'blur(2.5px)'
          }}
        />

        {/* Corner blobs */}
        <div 
          className="absolute w-[350px] h-[175px] top-[2%] left-[-15%]"
          style={{
            background: `radial-gradient(ellipse at center, 
              #F0DCCD55 0%, 
              #F0DCCD35 40%, 
              #F0DCCD15 70%, 
              transparent 100%)`,
            animation: 'fluid-morph-1 30s ease-in-out infinite',
            filter: 'blur(4px)'
          }}
        />

        <div 
          className="absolute w-[400px] h-[200px] bottom-[2%] right-[-20%]"
          style={{
            background: `radial-gradient(ellipse at center, 
              #F0DCCD60 0%, 
              #F0DCCD40 35%, 
              #F0DCCD20 65%, 
              transparent 100%)`,
            animation: 'fluid-morph-2 28s ease-in-out infinite',
            filter: 'blur(5px)'
          }}
        />

        {/* Small accent blobs */}
        <div 
          className="absolute w-[80px] h-[40px] top-[35%] left-[20%]"
          style={{
            background: `radial-gradient(circle, 
              #F0DCCD85 0%, 
              #F0DCCD50 65%, 
              transparent 100%)`,
            animation: 'fluid-morph-3 15s ease-in-out infinite',
            filter: 'blur(0.8px)'
          }}
        />

        <div 
          className="absolute w-[60px] h-[30px] top-[75%] left-[70%]"
          style={{
            background: `radial-gradient(circle, 
              #F0DCCD90 0%, 
              #F0DCCD60 70%, 
              transparent 100%)`,
            animation: 'fluid-morph-1 12s ease-in-out infinite',
            filter: 'blur(0.5px)'
          }}
        />
      </div>

      {/* Content container */}
      <div className="container relative mx-auto px-4 sm:px-6 z-10 h-full flex flex-col items-center justify-center py-8">
        {/* Text Section */}
        <motion.div 
          className="text-center max-w-sm sm:max-w-md mb-8 sm:mb-12"
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E37A37] mb-4 leading-tight font-baskerville"
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
            className="text-sm sm:text-base text-[#E37A37]/90 mb-4 mx-auto leading-relaxed font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Simplifique a gestão de cobranças e pagamentos 
          </motion.p>

          <motion.p 
            className="text-sm sm:text-base text-[#E37A37]/90 mb-6 sm:mb-8 mx-auto leading-relaxed font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            da sua empresa e finalmente durma tranquilo.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-4 px-6 text-base shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 bg-[#E37A37] hover:bg-[#C65A1A] text-white hover:text-white"
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform" className="flex items-center justify-center gap-2">
                <span>Comece agora</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-4 px-6 text-base shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 border-2 border-[#E37A37]/50 hover:border-[#E37A37] bg-transparent hover:bg-[#E37A37]/10 text-[#E37A37] hover:text-[#E37A37]"
              asChild
            >
              <Link href="#recursos" className="flex items-center justify-center gap-2">
                Conhecer recursos
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard container - mobile optimized */}
        <motion.div 
          className="relative w-full max-w-sm sm:max-w-md mx-auto"
          style={{
            scale,
            y,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* Container with hand-drawn border */}
          <div className="relative">
            {/* Hand-drawn border - scaled for mobile */}
            <svg 
              className="absolute -inset-4 sm:-inset-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] h-[calc(100%+2rem)] sm:h-[calc(100%+3rem)] pointer-events-none z-10" 
              viewBox="0 0 400 300" 
              preserveAspectRatio="none"
              style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
            >
              <path
                d="M 25 8 
                   C 18 6, 15 8, 12 12
                   C 10 15, 8 18, 9 22
                   L 8 270
                   C 7 275, 9 280, 12 283
                   C 15 287, 18 289, 22 288
                   L 375 290
                   C 380 291, 385 288, 388 284
                   C 391 280, 393 275, 392 270
                   L 394 25
                   C 395 20, 393 15, 390 12
                   C 387 8, 382 6, 377 7
                   L 25 8 Z"
                fill="none"
                stroke="#E37A37"
                strokeWidth="1.0"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: '0,1',
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
              className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg"
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
                sizes="(max-width: 768px) 100vw, 50vw"
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