"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "A plataforma é segura?",
    answer: "Sim! Utilizamos criptografia de ponta, certificações de segurança e seguimos as melhores práticas de proteção de dados conforme a LGPD. Trabalhamos apenas com IPs licenciadas pelo Banco Central."
  },
  {
    question: "Em quanto tempo o dinheiro fica disponível para saque?",
    answer: "PIX: Recebimento instantâneo\nBoleto: D+1 (um dia útil após o pagamento)\nOs valores são processados por nossas IPs parceiras e disponibilizados conforme cada meio de pagamento."
  },
  {
    question: "Preciso ter CNPJ para usar a debita.ai?",
    answer: "Sim, nossa plataforma é voltada para empresas (PJ). É necessário CNPJ ativo para cadastro e integração com nossos parceiros de pagamento."
  },
  {
    question: "Quais meios de pagamento vocês oferecem?",
    answer: "Atualmente oferecemos PIX e Boleto Bancário. Estamos constantemente expandindo nosso portfólio de soluções de pagamento."
  },
  {
    question: "Como funciona a gestão de cobranças na plataforma?",
    answer: "Você pode criar, enviar e acompanhar cobranças automaticamente via PIX e boleto. A plataforma gerencia lembretes, vencimentos e status de pagamento em tempo real."
  },
  {
    question: "Posso integrar no meu sistema ou software atual?",
    answer: "Sim! Oferecemos integração com os principais sistemas de gestão e vendas do mercado. Nossa equipe técnica auxilia na implementação e documentação completa."
  },
  {
    question: "Há taxa para usar a plataforma?",
    answer: "Cobramos uma taxa de intermediação sobre transações processadas. Como não somos IP, repassamos as melhores condições de mercado de nossos parceiros licenciados."
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Oferecemos suporte via chat, email (suporte@debita.ai) e documentação completa durante horário comercial."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim, sem multa ou fidelidade. Seus dados podem ser exportados conforme nossa política de portabilidade."
  },
  {
    question: "Como funciona a Debita.aí?",
    answer: "Somos uma plataforma de gestão de cobranças que facilita sua vida. Trabalhamos com parceiros licenciados pelo Banco Central para processar seus pagamentos com total segurança."
  },
  {
    question: "Como acompanho meus recebimentos e vendas?",
    answer: "A plataforma oferece relatórios detalhados de todas as vendas e pagamentos recebidos, facilitando o controle financeiro da sua empresa com dados em tempo real."
  },
  {
    question: "Os dados dos meus clientes ficam seguros?",
    answer: "Sim! Não armazenamos dados bancários sensíveis. Todas as informações de pagamento são processadas de forma segura por nossos parceiros licenciados, seguindo os mais altos padrões de segurança."
  },
  {
    question: "Posso usar para cobrar clientes pessoa física?",
    answer: "Sim! Você pode cobrar tanto PF quanto PJ através de PIX (instantâneo) e boleto bancário (D+1), com total flexibilidade na gestão."
  },
  {
    question: "Por que escolher a Debita.aí ao invés de outras soluções?",
    answer: "Oferecemos gestão completa de cobranças, automação, relatórios avançados e a flexibilidade de trabalhar com múltiplos parceiros através de uma única plataforma, sem toda a burocracia."
  },
  {
    question: "Como sei que vou receber meu dinheiro?",
    answer: "Trabalhamos exclusivamente com empresas licenciadas e supervisionadas pelo Banco Central do Brasil, garantindo máxima segurança e confiabilidade em todos os pagamentos."
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
                    <p className="font-['Satoshi',sans-serif] text-gray-600 leading-relaxed font-medium whitespace-pre-line">
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