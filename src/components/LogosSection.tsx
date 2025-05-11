"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const companies = [
  {
    logo: "https://lojaintegrada.com.br/hub/wp-content/uploads/2022/05/Loja-Integrada-RGB-Flat-Fundo-Branco-LOGO.png"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Nuvemshop-logo.png"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png"
  },
  {
    logo: "https://logodownload.org/wp-content/uploads/2017/11/sicoob-logo-4.png"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Banco_Bradesco_logo_%28horizontal%29.png/1280px-Banco_Bradesco_logo_%28horizontal%29.png"
  },
];

// Create three sets of companies for seamless looping
const triplicatedCompanies = [...companies, ...companies, ...companies];

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const itemWidth = containerWidth / companies.length;
    const totalWidth = itemWidth * companies.length;
    let currentPosition = 0;

    const animate = () => {
      currentPosition += 2.5; // Increased from 1.5 to 2.5 for faster movement
      
      // Reset position when we've scrolled one set of logos
      if (currentPosition >= totalWidth) {
        currentPosition = 0;
      }
      
      setPosition(currentPosition);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted]);

  return (
    <section className="wp-block-group alignwide bk-logos-header__row" style={{ marginTop: '-130px', maxWidth: '1200px', justifySelf: 'center' }}>
      <div className="">
        <section className="Box-logos">
          <div className="row">
            <p className="title-h3 text-center text-gray-600 font-medium text-lg mb-8 tracking-wide uppercase">Empresas parceiras da Debita.aí</p>
          </div>
          <div className="slider-holder relative">
            {/* Left white gradient shadow */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-48 z-10 bg-gradient-to-r from-white via-white to-transparent" />
            {/* Right white gradient shadow */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-48 z-10 bg-gradient-to-l from-white via-white to-transparent" />
            <div className="row">
              <div className="relative overflow-hidden" ref={containerRef}>
                <div 
                  className="flex"
                  style={{
                    transform: `translateX(-${position}px)`,
                    willChange: 'transform',
                  }}
                >
                  {triplicatedCompanies.map((company, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 mx-8"
                    >
                      <div className="relative w-40 h-20">
                        <Image
                          src={company.logo}
                          alt="Company logo"
                          fill
                          className="object-contain filter grayscale hover:grayscale-0 transition-all duration-75"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
} 