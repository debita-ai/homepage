"use client";

import ParallaxHero from "@/components/layout/ParallaxHero";
import Features from "@/components/layout/Features";
import BentoGrid from "@/components/layout/BentoGrid";
import Tarifas from "@/components/layout/Tarifas";
import SimpleFaq from "@/components/layout/SimpleFaq";
import CTAFinal from "@/components/layout/CTAFinal";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { Crisp } from "crisp-sdk-web";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    Crisp.configure("e420b242-8cad-462c-bcb4-088409303ca6");
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <main>
        <ParallaxHero />
        <div id="recursos">
          <Features />
        </div>
        <div id="funcionalidades">
          <BentoGrid />
        </div>
        <div id="tarifas">
          <Tarifas />
        </div>
        <div id="faq">
          <SimpleFaq />
        </div>
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}