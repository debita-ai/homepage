"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import DashboardImage from '../../../public/dashboard.png';

export default function ParallaxHeroDesktop() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const handleResize = useCallback(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight);
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    setMounted(true);
    handleResize();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleScroll, handleResize, handleMouseMove]);

  // Memoize calculations
  const scrollProgress = useMemo(() => 
    mounted ? Math.min(scrollY / (sectionHeight * 0.5), 1) : 0,
    [mounted, scrollY, sectionHeight]
  );
  
  const dashboardScale = useMemo(() => 
    mounted ? 1 + (scrollProgress * 0.05) : 1,
    [mounted, scrollProgress]
  );

  // Memoize transform styles
  const backgroundTransform = useMemo(() => 
    mounted ? `translateY(${scrollY * 0.05}px)` : 'none',
    [mounted, scrollY]
  );

  const dashboardTransform = useMemo(() => 
    mounted ? `translateY(${scrollY * -0.05}px) scale(${dashboardScale})` : 'none',
    [mounted, scrollY, dashboardScale]
  );

  return (
    <section 
      ref={sectionRef}
      className="relative h-[865px] overflow-hidden bg-[#E85A27] flex flex-col mx-auto hero-box cursor-custom"
 
    >
      {/* Background elements with parallax effect */}
      <div
        className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0"
        style={{ transform: backgroundTransform }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#D84A1F] to-transparent z-0" />


      {/* Content container */}
      <div className="container relative mx-auto px-4 sm:px-6 z-10 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Text Section */}
          <div className="text-left">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.8] [&.lg\:text-6xl]:leading-[1.2]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Sua plataforma de
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                gestão financeira completa
              </span>
            </motion.h1>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-white/90 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Crie cobranças com facilidade, gerencie suas finanças com total controle e 
              ofereça um checkout seguro e eficiente para seus clientes, 
              garantindo segurança, rapidez, facilidade e atendimento de excelência.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
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
                  <ChevronRight className="h-5 w-5" />
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
          </div>

          {/* Dashboard container with enhanced scaling effect */}
          <motion.div 
            className="relative w-full overflow-visible"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            style={{
              transform: dashboardTransform,
              transformOrigin: 'center',
              transition: 'transform 0.1s ease-out',
              willChange: 'transform'
            }}
          >
            {/* Dashboard image with enhanced effects */}
            <div 
              className="relative w-[140%] h-[500px] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.2)] border-4 border-white/30 backdrop-blur-sm"
              style={{ 
                position: 'relative', 
                left: '20%',
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
      </div>
    </section>
  );
} 