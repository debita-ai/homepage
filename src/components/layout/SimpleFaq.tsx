"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "A plataforma é segura?",
    answer: "Sim. Usamos criptografia de ponta e seguimos as melhores práticas de segurança do mercado financeiro para proteger seus dados e os de seus clientes. Somos regulamentados pelo Banco Central."
  },
  {
    question: "Em quanto tempo o dinheiro fica disponível para saque?",
    answer: "Pagamentos via Pix ficam disponíveis em segundos. Boletos em até 1 dia útil após o pagamento. Cartão de crédito em D+30, com opção de antecipação."
  },
  {
    question: "Preciso ter CNPJ para usar a Debita.ai?",
    answer: "Não! Você pode se cadastrar tanto com seu CPF quanto com seu CNPJ, de forma rápida e sem burocracia."
  },
  {
    question: "Qual o limite de transações por mês?",
    answer: "No plano gratuito, você pode processar transações ilimitadas. Aplicamos apenas as taxas sobre o valor recebido, sem limites de volume ou quantidade."
  },
  {
    question: "Como funciona a antecipação de recebíveis?",
    answer: "Você pode antecipar seus recebíveis de cartão de crédito com taxas competitivas. O valor antecipado fica disponível em até 1 dia útil na sua conta."
  },
  {
    question: "Posso integrar com meu sistema atual?",
    answer: "Sim! Oferecemos APIs completas para desenvolvedores, webhooks e integrações com os principais ERPs e sistemas de e-commerce do mercado."
  },
  {
    question: "Há taxa para saques?",
    answer: "Sim, cobramos uma taxa única de R$ 0,80 por saque para qualquer conta bancária. Não há limite mínimo para saque."
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Oferecemos suporte via WhatsApp, email e chat no horário comercial. No plano premium, você terá suporte prioritário com atendimento diferenciado."
  },
  {
    question: "Posso cancelar a qualquer momento sem multa?",
    answer: "Sim! Não há contrato de fidelidade, taxa de cancelamento ou multa. Você pode deixar de usar nossos serviços quando quiser."
  },
  {
    question: "Vocês emitem nota fiscal das transações?",
    answer: "Sim, emitimos nota fiscal de todas as taxas cobradas. As transações dos seus clientes não geram NF para você, apenas para seus compradores."
  },
  {
    question: "Como funciona a conciliação bancária?",
    answer: "Nossa plataforma faz a conciliação automática das suas vendas. Você visualiza em tempo real o que foi vendido, recebido e quando o dinheiro estará disponível."
  },
  {
    question: "O que acontece se eu exceder os limites do plano gratuito?",
    answer: "O plano gratuito não tem limites de transações. Cobramos apenas as taxas sobre o valor processado. Planos premium oferecerão recursos adicionais no futuro."
  }
];

export default function SimpleFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800 font-baskerville">
            Ainda tem dúvidas? A gente responde.
          </h2>
          <p className="font-['Satoshi',sans-serif] text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Elimine as dúvidas e objeções mais comuns sobre nossa plataforma
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
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-['Satoshi',sans-serif] text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-[#E37A37] transition-transform duration-200 flex-shrink-0 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="font-['Satoshi',sans-serif] text-gray-600 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}