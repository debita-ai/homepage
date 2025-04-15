"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Globe, Phone, Mail, MessageCircle } from "lucide-react";

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
              Contato
            </motion.h3>
            <motion.ul
              className="space-y-4"
              variants={listMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li variants={itemMotion} className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-[#E85A27]" />
                <div>
                  <p className="text-sm text-white/80">WhatsApp</p>
                  <a href="https://wa.me/551152414928" className="hover:text-[#E85A27] transition-colors">
                    +55 11 5241-4928
                  </a>
                </div>
              </motion.li>
              <motion.li variants={itemMotion} className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#E85A27]" />
                <div>
                  <p className="text-sm text-white/80">Suporte</p>
                  <a href="tel:+551152414928" className="hover:text-[#E85A27] transition-colors">
                    +55 11 5241-4928
                  </a>
                </div>
              </motion.li>
              <motion.li variants={itemMotion} className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#E85A27]" />
                <div>
                  <p className="text-sm text-white/80">Email</p>
                  <a href="mailto:gestao.financeira@debita.ai" className="hover:text-[#E85A27] transition-colors">
                    gestao.financeira@debita.ai
                  </a>
                </div>
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
              Redes Sociais
            </motion.h3>
            <motion.div
              className="flex space-x-4"
              variants={listMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="https://instagram.com/debita.ai"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemMotion}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/debita_ai"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemMotion}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/debitaai"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemMotion}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
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
            O Debita.aí é uma plataforma de gateway de pagamento e cobrança que simplifica o gerenciamento financeiro. Com nossa solução, você processa pagamentos, gerencia cobranças e automatiza o fluxo de caixa de forma segura e eficiente.
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
