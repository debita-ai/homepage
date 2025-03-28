"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { setupScrollReveal } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Luzimary Vieira",
    position: "Empresária",
    company: "A4 Empreendimentos",
    photo: "",
    content: "O Debita.aí transformou a gestão de pagamentos da minha empresa, com taxas menores e suporte prioritário ficou bem melhor. Eu utilizava outra plataforma anteriormente."
  },
];

export default function EnhancedTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Set up scroll reveal
  useEffect(() => {
    return setupScrollReveal(sectionRef);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;

    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Set new timer
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Cleanup
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">O que nossos clientes dizem</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Veja como o Debita.aí está ajudando empresas e pessoas a transformarem suas finanças.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl scroll-reveal">
              <div className="relative min-h-[400px] bg-white shadow-lg rounded-xl p-10">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="absolute inset-0 p-10 flex flex-col md:flex-row items-center"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      x: activeIndex === index ? 0 : 100,
                      zIndex: activeIndex === index ? 10 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center justify-center">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary-100 shadow-lg mb-4">
                        <Image
                          src={testimonial.photo}
                          alt={testimonial.name}
                          width={112}
                          height={112}
                          className="object-cover w-full h-full"
                          unoptimized // Skip Image optimization for external URLs
                        />
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-1">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm mb-1">{testimonial.position}</p>
                      <p className="text-primary font-medium text-sm">{testimonial.company}</p>
                    </div>

                    <div className="md:w-2/3 md:pl-10 relative">
                      <Quote className="text-primary/10 w-16 h-16 absolute -top-2 -left-2" />
                      <p className="text-gray-700 text-lg relative z-10 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-20"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-20"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 mx-1 rounded-full transition-all ${
                    activeIndex === index ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
