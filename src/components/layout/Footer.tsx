"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Footer() {
  const listMotion = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemMotion = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <footer className="bg-[#252E54] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.h3
              className="font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Navegue
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={listMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemMotion}>
                <Link href="/recursos" className="hover:text-[#E85A27] transition-colors">
                  Recursos
                </Link>
              </motion.li>
              <motion.li variants={itemMotion}>
                <Link href="/planos" className="hover:text-[#E85A27] transition-colors">
                  Planos
                </Link>
              </motion.li>
              <motion.li variants={itemMotion}>
                <Link href="/contato" className="hover:text-[#E85A27] transition-colors">
                  Contato
                </Link>
              </motion.li>
              <motion.li variants={itemMotion}>
                <Link href="/blog" className="hover:text-[#E85A27] transition-colors">
                  Blog
                </Link>
              </motion.li>
            </motion.ul>
          </div>

          <div>
            <motion.h3
              className="font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Plataforma
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={listMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemMotion}>
                <Link href="/para-voce" className="hover:text-[#E85A27] transition-colors">
                  Para você
                </Link>
              </motion.li>
              <motion.li variants={itemMotion}>
                <Link href="/recursos" className="hover:text-[#E85A27] transition-colors">
                  Para empresa
                </Link>
              </motion.li>
              <motion.li variants={itemMotion}>
                <Link href="/ajuda" className="hover:text-[#E85A27] transition-colors">
                  Ajuda
                </Link>
              </motion.li>
            </motion.ul>
          </div>

          <div>
            <motion.h3
              className="font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Transparência
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={listMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemMotion}>
                <Link href="/sobre-nos" className="hover:text-[#E85A27] transition-colors">
                  Sobre nós
                </Link>
              </motion.li>
              <motion.li variants={itemMotion}>
                <Link href="/termos-e-privacidade" className="hover:text-[#E85A27] transition-colors">
                  Termos e Privacidade
                </Link>
              </motion.li>
            </motion.ul>
          </div>

          <div>
            <motion.h3
              className="font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Contato
            </motion.h3>
            <motion.ul
              className="space-y-2"
              variants={listMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemMotion}>
                <a href="https://web.whatsapp.com/send?l=pt_BR&phone=551152414928" className="hover:text-[#E85A27] transition-colors flex items-center" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  +55 11 5241-4928
                </a>
              </motion.li>
              <motion.li className="flex items-center" variants={itemMotion}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                pedro@debita.ai
              </motion.li>
              <motion.li className="mt-6" variants={itemMotion}>
                <div className="flex space-x-4">

                </div>
              </motion.li>
            </motion.ul>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-2">Expediente</h4>
              <p className="text-sm text-white/80">
                Funcionamos de segunda-feira a sexta-feira das 8h às 17h.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="text-sm text-white/80 mb-8 pb-8 border-b border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            O Debita.aí é um controle financeiro online para uso pessoal e empresarial. Com o sistema, você organiza despesas e receitas, além de ter uma análise completa de gastos.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-xl font-bold">
              Debita.aí
            </Link>
          </motion.div>

          <motion.div
            className="flex space-x-4 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
          >

            <motion.a
              href="https://www.linkedin.com/company/debitaai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E85A27]"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            className="text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <p>
              <strong>Debita.aí 2025.</strong> Todos os direitos reservados.
            </p>
            <p className="mt-2">
              DEBITA.AI GESTAO FINANCEIRA E MEIOS DE PAGAMENTO LTDA
              <br />
              CNPJ: 46.379.233/0001-48
            </p>
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#top"
            className="text-white hover:text-[#E85A27] flex items-center"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Voltar ao topo</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
}
