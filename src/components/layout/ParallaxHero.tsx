"use client";

import { useEffect, useState } from "react";
import ParallaxHeroDesktop from "./ParallaxHeroDesktop";
import ParallaxHeroMobile from "./ParallaxHeroMobile";

export default function ParallaxHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <ParallaxHeroMobile /> : <ParallaxHeroDesktop />;
}