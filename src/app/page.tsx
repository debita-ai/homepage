"use client";

import Header from "@/components/layout/Header";
import ParallaxHero from "@/components/layout/ParallaxHero";
import Features from "@/components/layout/Features";
import ForWho from "@/components/layout/ForWho";
import MainFeatures from "@/components/layout/MainFeatures";
import EnhancedTestimonials from "@/components/layout/EnhancedTestimonials";
import SimplePriceCalculator from "@/components/layout/SimplePriceCalculator";
import SimpleFaq from "@/components/layout/SimpleFaq";
import AppPromo from "@/components/layout/AppPromo";
import Blog from "@/components/layout/Blog";
import Footer from "@/components/layout/Footer";
import SimpleChatWidget from "@/components/ui/SimpleChatWidget";
import Integrations from "@/components/layout/Integrations";
import Tarifas from "@/components/layout/Tarifas";
import LogosSection from "@/components/LogosSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Or a loading skeleton
  }

  return (
    <div className="min-h-screen">
      <Header key="header" />
      <main>
        <ParallaxHero />
        <LogosSection />
        <Features />
        <MainFeatures key="main-features" />
        <EnhancedTestimonials key="testimonials" />
        <ForWho key="for-who" />
        <Integrations key="integrations" />
        <SimplePriceCalculator key="pricing" />
        <Tarifas key="tarifas" />
        {/* <SimpleFaq key="faq" /> */}
        {/* <AppPromo key="app-promo" /> */}
        {/* <Blog key="blog" /> */}
      </main>
      <Footer key="footer" />
      {/* <SimpleChatWidget key="chat" /> */}
    </div>
  );
}
