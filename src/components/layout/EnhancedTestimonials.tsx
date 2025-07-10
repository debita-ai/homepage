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
    photo: "/testimonial.jpg",
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
            {/* Main testimonial container */}
            <div className="overflow-hidden rounded-xl scroll-reveal mb-8">
              <div className="relative bg-white shadow-lg rounded-xl">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className={`${
                      activeIndex === index ? 'block' : 'hidden'
                    } p-6 sm:p-8 md:p-10`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0,
                      x: activeIndex === index ? 0 : 100
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col md:flex-row items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                      <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center justify-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#E85A27]/20 shadow-lg mb-4">
                        <Image
                          src={testimonial.photo}
                          alt={testimonial.name}
                          width={112}
                          height={112}
                          className="object-cover w-full h-full"
                            unoptimized
                        />
                      </div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 text-center">{testimonial.name}</h3>
                        <p className="text-gray-600 text-sm mb-1 text-center">{testimonial.position}</p>
                        <p className="text-[#E85A27] font-medium text-sm text-center">{testimonial.company}</p>
                    </div>

                      <div className="w-full md:w-2/3 md:pl-8 lg:pl-10 relative">
                        <Quote className="text-[#E85A27]/10 w-12 h-12 sm:w-16 sm:h-16 absolute -top-2 -left-2" />
                        <p className="text-gray-700 text-base sm:text-lg relative z-10 leading-relaxed text-center md:text-left">
                        "{testimonial.content}"
                      </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              </div>

            {/* Navigation Controls - Now at the bottom */}
            <div className="flex items-center justify-center gap-4">
              {/* Previous Button */}
              <button
                onClick={handlePrev}
                className="group flex items-center justify-center w-8 h-8 bg-white hover:bg-[#E85A27] border-2 border-[#E85A27]/20 hover:border-[#E85A27] rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-4 h-4 text-[#E85A27] group-hover:text-white transition-colors" />
              </button>

              {/* Dots Navigation */}
              <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === index 
                        ? "bg-[#E85A27] w-6 h-3 shadow-md" 
                        : "bg-gray-300 hover:bg-gray-400 w-3 h-3 hover:scale-110"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="group flex items-center justify-center w-8 h-8 bg-white hover:bg-[#E85A27] border-2 border-[#E85A27]/20 hover:border-[#E85A27] rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-4 h-4 text-[#E85A27] group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
