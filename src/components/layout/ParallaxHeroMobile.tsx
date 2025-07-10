"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "iconoir-react";
import DashboardImage from '../../../public/dashboard.png';
import { LaptopFrame } from "@/components/ui/LaptopFrame";

export default function ParallaxHeroMobile() {
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
  
  // Calculate laptop scaling
  const laptopScale = mounted ? 1.2 : 1;

  return (
    <section 
      ref={sectionRef}
      className="relative h-[900px] overflow-hidden bg-[#E27936] flex flex-col mx-auto"
      style={{ maxWidth: '1920px', borderRadius: '0px 0px 1.6rem 1.6rem' }}
    >
      {/* Background elements with parallax effect */}
      <div
        className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0"
        style={{ transform: mounted ? `translateY(${scrollY * 0.05}px)` : 'none' }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#D84A1F] to-transparent z-0" />

      {/* Content container */}
      <div className="mt-8 container relative mx-auto px-3 sm:px-6 z-10 pt-2 sm:pt-8 flex flex-col flex-1 justify-around items-center">
        {/* Text Section */}
        <div className="text-center w-full flex flex-col items-center px-2 sm:px-4">
          <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-[#E27936] mb-3 mt-4 sm:mt-10 sm:mb-6 leading-tight max-w-[280px] sm:max-w-md lg:max-w-lg">
            Sua nova plataforma
            <span className="block">de gestão de cobranças</span>
          </h1>

          <p className="text-base xs:text-lg sm:text-2xl lg:text-3xl text-[#E27936]/80 mb-4 sm:mb-10 max-w-[280px] sm:max-w-md lg:max-w-lg mx-auto">
            Um <b>gateway de pagamentos moderno</b>. Simplifique a gestão de cobranças e pagamentos da sua empresa.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-[280px] sm:max-w-md lg:max-w-lg">
            <Button
              size="lg"
              className="bg-[#E27936] hover:bg-[#d24a1e] text-white text-base xs:text-lg sm:text-2xl lg:text-3xl px-5 sm:px-8 py-5 sm:py-7 rounded-xl"
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform" className="flex items-center justify-center">
                Entrar na lista de espera
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-[#E27936] bg-transparent hover:bg-[#E27936]/10 text-[#E27936] hover:text-[#E27936] text-base xs:text-lg sm:text-2xl lg:text-3xl px-5 sm:px-8 py-5 sm:py-7 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
              asChild
            >
              <Link href="#recursos" className="flex items-center justify-center">Conhecer recursos</Link>
            </Button>
          </div>
        </div>

        {/* Laptop container with scaling effect */}
        <div 
          className="relative w-full mx-auto max-w-[280px] sm:max-w-[350px] lg:max-w-[400px]"
          style={{
            transform: mounted ? `translateY(${scrollY * -0.05}px) scale(${laptopScale})` : 'none',
            transformOrigin: 'center bottom',
            transition: 'transform 0.1s ease-out'
          }}
        >
          <LaptopFrame 
            imageSrc={DashboardImage}
            alt="Dashboard Debita.aí"
            className="transform"
          />
        </div>
      </div>
    </section>
  );
} 