"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como funciona o período gratuito de 7 dias?",
    answer: "Durante os 7 dias gratuitos, você tem acesso a todas as funcionalidades do Debita.aí. Não exigimos cartão de crédito para o período de teste, e você receberá uma notificação antes do término para decidir se deseja continuar."
  },
  {
    question: "O Debita.aí é seguro para gerenciar minhas finanças?",
    answer: "Sim, usamos criptografia de ponta e medidas de segurança em conformidade com os padrões do mercado. Seus dados são protegidos com o mesmo nível de segurança utilizado por bancos, e nossos servidores possuem certificação de segurança."
  },
  {
    question: "Posso usar o Debita.aí em múltiplos dispositivos?",
    answer: "Certamente! O Debita.aí funciona em qualquer dispositivo com acesso à internet. Temos aplicativos nativos para iOS e Android, além de funcionar perfeitamente em qualquer navegador. Todos os seus dados são sincronizados automaticamente."
  },
  {
    question: "É possível importar dados financeiros de outros sistemas?",
    answer: "Sim, o Debita.aí suporta importação de dados via arquivos CSV, OFX, e extrato de banco em formato PDF. Também oferecemos uma ferramenta de migração assistida para usuários empresariais vindos de outros sistemas."
  }
];

export default function SimpleFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Perguntas frequentes</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o Debita.aí
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-secondary focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ease-in-out text-gray-500 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
