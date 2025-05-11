"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function WarningBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 w-full bg-[#00B4D8] text-[#023E8A] py-2.5 px-4 transition-all duration-300 z-50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <span>🚀</span>
        <span>Estamos em beta! Seja um dos primeiros a experimentar nossa plataforma.</span>
        <Link 
          href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform"
          className="text-[#023E8A] hover:text-[#023E8A]/80 underline underline-offset-2 transition-colors"
        >
          Entrar na lista de espera
        </Link>
      </div>
    </div>
  );
} 