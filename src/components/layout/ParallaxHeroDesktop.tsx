"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import DashboardImage from '../../../public/dashboard.png';

export default function ParallaxHeroDesktop() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate scroll progress for parallax effects
  const scrollProgress = mounted ? Math.min(scrollY / (sectionHeight * 0.5), 1) : 0;
  
  // Calculate dashboard scaling
  const dashboardScale = mounted ? 1 + (scrollProgress * 0.05) : 1;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen h-[110vh] overflow-hidden bg-[#E85A27] flex flex-col"
    >
      {/* Background elements with parallax effect */}
      <div
        className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0"
        style={{ transform: mounted ? `translateY(${scrollY * 0.05}px)` : 'none' }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#D84A1F] to-transparent z-0" />

      {/* Floating elements with different parallax speeds */}
      <motion.div
        className="absolute -right-24 top-32 w-80 h-80 rounded-full bg-white/5 z-0"
        style={{ transform: mounted ? `translateY(${scrollY * 0.02}px)` : 'none' }}
        animate={mounted ? {
          y: [0, 15, 0],
          rotate: [0, 5, 0],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute -left-24 top-64 w-64 h-64 rounded-full bg-white/5 z-0"
        style={{ transform: mounted ? `translateY(${scrollY * 0.04}px)` : 'none' }}
        animate={mounted ? {
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        } : {}}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content container */}
      <div className="mt-20 container relative mx-auto px-4 sm:px-6 z-10 pt-4 sm:pt-8 flex flex-col flex-1">
        {/* Text Section */}
        <div className="text-center w-full mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-6 sm:mt-10 sm:mb-6 leading-tight">
            Sua nova plataforma
            <span className="block">de gestão de cobranças</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Um <b>gateway de pagamentos moderno</b>. Simplifique a gestão de cobranças e pagamentos da sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-[#E85A27] text-base sm:text-lg px-5 sm:px-7 py-5 sm:py-6 rounded-xl"
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform" className="flex items-center justify-center">
                Entrar na lista de espera
                <ChevronRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white bg-gradient-to-r from-[#252E54] to-[#1b2239] hover:from-[#1b2239] hover:to-[#252E54] text-white hover:text-white text-base sm:text-lg px-5 sm:px-7 py-5 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <Link href="#recursos" className="flex items-center justify-center">Conhecer recursos</Link>
            </Button>
          </div>
        </div>

        {/* Dashboard container with scaling effect */}
        <div 
          className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[100%] mx-auto lg:mx-0 mt-auto"
          style={{
            transform: mounted ? `translateY(${scrollY * -0.05}px) scale(${dashboardScale})` : 'none',
            transformOrigin: 'center bottom',
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Dashboard image */}
          <div className="relative w-full h-96 sm:h-64 md:h-96 lg:h-[600px] rounded-t-lg overflow-hidden shadow-2xl border border-white/10">
            <Image
              src={DashboardImage}
              alt="Dashboard Debita.aí"
              className="object-cover object-top w-full h-full"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
          </div>
          
          {/* Bottom gradient mask */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#E85A27] to-transparent"></div>
        </div>
      </div>
    </section>
  );
} 