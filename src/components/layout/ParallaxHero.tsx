"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import DashboardImage from '../../../public/dashboard.png';

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef(null as any);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setMounted(true);
    setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.offsetHeight);
      }
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Avoid hydration mismatch
  if (!mounted) return <div className="h-screen" />;

  // Calculate scroll progress for parallax effects
  const scrollProgress = Math.min(scrollY / (sectionHeight * 0.5), 1);
  
  // Calculate dashboard scaling (start at 1, grow to 1.05 or 1.2 for mobile)
  const dashboardScale = windowWidth < 768 ? 1.2 : 1 + (scrollProgress * 0.05);
  
  // Calculate when to allow transition to next section
  const canTransitionToNext = scrollProgress >= 0.8;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen h-[110vh] lg:h-[110vh] sm:h-[110vh] md:h-[110vh] overflow-hidden bg-[#E85A27] flex flex-col"
    >
      {/* Background elements with parallax effect */}
      <div
        className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#D84A1F] to-transparent z-0" />

      {/* Floating elements with different parallax speeds */}
      <motion.div
        className="absolute -right-24 top-32 w-80 h-80 rounded-full bg-white/5 z-0 hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute -left-24 top-64 w-64 h-64 rounded-full bg-white/5 z-0 hidden md:block"
        style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Content container */}
      <div className="mt-20 container relative mx-auto px-4 sm:px-6 z-10 pt-4 sm:pt-8 flex flex-col flex-1">
        {/* Text Section - Fixed position */}
        <div className="text-center lg:text-center w-full lg:w-full mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-6 sm:mt-10 sm:mb-6 leading-tight">
            Sua nova plataforma
            <span className="block">de gestão de cobranças</span>
          </h1>

          <p className="justify-self-center text-lg sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0">
            Um <b>gateway de pagamentos moderno</b>. Simplifique a gestão de cobranças e pagamentos da sua empresa.
          </p>

          <div className="justify-self-center flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
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
            transform: `translateY(${scrollY * -0.05}px) scale(${dashboardScale})`,
            transformOrigin: 'center bottom',
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Dashboard image wrapper */}
          <div className="sm:mt-6 mt-20 relative w-full rounded-t-lg shadow-2xl border border-white/10">
            {/* Fixed height container for the image */}
            <div className="relative w-full h-96 sm:h-64 md:h-96 lg:h-96 rounded-t-lg overflow-hidden">
              {/* Image container to show full image */}
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  src={DashboardImage}
                  alt="Dashboard Debita.aí"
                  className="object-cover object-top w-full h-full"
                  priority
                  unoptimized
                />
              </div>
              
              {/* Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20"></div>
            </div>
            
            {/* Bottom gradient mask */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#E85A27] to-transparent"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-20 sm:w-40 h-20 sm:h-40 bg-white/5 rounded-full"></div>
          <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-10 sm:w-20 h-10 sm:h-20 bg-white/5 rounded-full"></div>

          {/* Floating app features cards that appear on scroll */}
          <motion.div
            className="absolute -right-4 sm:-right-8 md:-right-12 top-1/4 bg-white p-3 sm:p-4 rounded-xl shadow-lg max-w-[150px] sm:max-w-[200px]"
            style={{ 
              opacity: Math.min(scrollProgress * 2, 1) || 0,
              transform: `translateY(${scrollY * 0.05}px) translateX(${(1-Math.min(scrollProgress * 1.5, 1)) * 30}px)`
            }}
          >
            <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-900">100% de usuários satisfeitos</p>
          </motion.div>

          <motion.div
            className="absolute -left-4 sm:-left-8 md:-left-12 top-10 bg-white p-3 sm:p-4 rounded-xl shadow-lg max-w-[150px] sm:max-w-[200px]"
            style={{ 
              opacity: Math.min(scrollProgress * 2, 1) || 0,
              transform: `translateY(${scrollY * 0.08}px) translateX(${(1-Math.min(scrollProgress * 1.5, 1)) * -30}px)`
            }}
          >
            <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-blue-100 flex items-center justify-center mb-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-900">Segurança de dados em primeiro lugar</p>
          </motion.div>
        </div>
      </div>

      {/* Next section indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        style={{ 
          opacity: canTransitionToNext ? 1 : 0,
          pointerEvents: canTransitionToNext ? 'auto' : 'none'
        }}
        animate={{
          y: canTransitionToNext ? [0, 10, 0] : 0,
          opacity: canTransitionToNext ? [0.6, 1, 0.6] : 0
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => window.scrollTo({
          top: sectionHeight,
          behavior: 'smooth'
        })}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
}