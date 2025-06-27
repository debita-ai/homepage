"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "iconoir-react";
import DashboardImage from '../../../public/dashboard.png';

export default function ParallaxHeroDesktop() {
  const [mounted, setMounted] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  // Base transform values
  const baseScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.09]);
  const baseY = useTransform(scrollYProgress, [0, 0.15], [0, 100]);

  // Spring animations
  const scale = useSpring(baseScale, {
    stiffness: 100,
    damping: 15,
    mass: 0.5
  });
  
  const y = useSpring(baseY, {
    stiffness: 100,
    damping: 15,
    mass: 0.5
  });
  // const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[89.125rem] overflow-hidden bg-[#E85A27] flex flex-col mx-auto hero-box cursor-custom rounded-b-[28px]"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0 rounded-b-[28px]" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#D84A1F] to-transparent z-0 rounded-b-[28px]" />

      {/* Content container */}
      <div className="container relative mx-auto px-4 sm:px-6 z-10 h-full flex flex-col items-center justify-center">
        {/* Text Section */}
        <motion.div 
          className="text-center max-w-4xl mb-16"
          // style={{ opacity }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.8] [&.lg\:text-6xl]:leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Sua nova plataforma
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              de gestão de cobranças
            </span>
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/90 mb-8 mx-auto max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Um gateway de pagamentos moderno. Simplifique a gestão de cobranças e pagamentos da sua empresa.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-6 px-8 text-lg shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 bg-[#00809d] hover:bg-[#006d85] text-white hover:text-white"
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform" className="flex items-center justify-center gap-2">
                <span>Entrar na lista de espera</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-6 px-8 text-lg shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 border-2 border-white/50 hover:border-white bg-transparent hover:bg-white/10 text-white hover:text-white"
              asChild
            >
              <Link href="#recursos" className="flex items-center justify-center gap-2">
                Conhecer recursos
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Dashboard container with enhanced scaling effect */}
        <motion.div 
          className="relative w-full max-w-5xl mx-auto mb-16"
          style={{
            scale,
            y,
            // opacity
          }}
        >
          {/* Dashboard image with enhanced effects */}
          <div 
            className="relative w-full h-[650px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] border-4 border-white/30 backdrop-blur-sm"
            style={{ 
              boxShadow: '0 0 50px rgba(0,0,0,0.2), inset 0 0 20px rgba(255,255,255,0.1)',
              willChange: 'transform'
            }}
          >
            <Image
              src={DashboardImage}
              alt="Dashboard Debita.aí"
              className="object-cover object-top w-full h-full"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
            <div className="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E85A27]/5 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 