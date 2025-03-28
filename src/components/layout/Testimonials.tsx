"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content: "O Debita.aí é um sistema de controle financeiro extremamente fácil de utilizar. Todos os recursos estão bem identificados e, em caso de dúvidas, o suporte é rápido e assertivo. Uso o sistema há mais de 10 anos e nunca tive nenhum problema. Todas as transações que cadastrei neste tempo todo estão disponíveis para consulta de forma simples e rápida.",
    author: "Edson Sguizzato",
    location: "Belo Horizonte - MG",
    avatar: "https://ext.same-assets.com/252296085/3188965976.jpeg"
  },
  {
    id: 2,
    content: "Excelente ferramenta para o controle financeiro! Com o Debita.aí me tornei muito mais organizado com minhas finanças. A interface é intuitiva e os relatórios me ajudam a ter uma visão clara dos meus gastos. Recomendo para todos que desejam ter controle sobre seu dinheiro.",
    author: "Maria Santos",
    location: "São Paulo - SP",
    avatar: "https://ui-avatars.com/api/?name=Maria+Santos&background=E85A27&color=fff"
  },
  {
    id: 3,
    content: "O sistema é excelente para controle de fluxo de caixa e orçamento familiar. Fácil de usar, com recursos personalizáveis e ótima visualização dos dados. O aplicativo mobile é outro ponto positivo que facilita o registro de despesas no momento em que elas acontecem.",
    author: "Roberto Almeida",
    location: "Curitiba - PR",
    avatar: "https://ui-avatars.com/api/?name=Roberto+Almeida&background=E85A27&color=fff"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#fafaf8]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#252E54]">
            <span className="text-[#E85A27]">97%</span> das pessoas que usaram o Debita.aí ficaram satisfeitas
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 mb-8 text-lg italic">
                  "{testimonials[activeIndex].content}"
                </p>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative mr-4">
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].author}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#252E54]">{testimonials[activeIndex].author}</h4>
                    <p className="text-gray-500">{testimonials[activeIndex].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-[#E85A27] text-white mr-4 flex items-center justify-center transition hover:bg-[#E85A27]/90"
              aria-label="Testimonial anterior"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === activeIndex ? "bg-[#E85A27]" : "bg-gray-300"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-[#E85A27] text-white ml-4 flex items-center justify-center transition hover:bg-[#E85A27]/90"
              aria-label="Próximo testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
