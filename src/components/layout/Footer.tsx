"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Shield } from "iconoir-react";
import { Instagram, Linkedin, Globe } from "lucide-react";
import DebitaLogo from "../../../public/logo.svg";
import ABFintechsLogo from "../../../public/abfintechs.png";

export default function Footer() {
  const listMotion = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemMotion = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#1a1f3a] to-[#0f1323] text-white relative overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute bottom-28 left-0 right-28 flex justify-center pointer-events-none">
        <div className="text-[20rem] md:text-[25rem] lg:text-[30rem] font-bold text-white/[0.02] select-none whitespace-nowrap transform translate-y-1/2">
          Debita.aí
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E85A27]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00809d]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="inline-block mb-6">
                  <Image src={DebitaLogo} width={180} alt="Logo Debita.aí" />
                </Link>
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                  Plataforma completa de gestão financeira e cobranças digitais. 
                  Simplifique seus processos financeiros com segurança e eficiência.
                </p>
                
                {/* Security Badges */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-xs font-medium">Ambiente seguro e criptografado</span>
                  </div>
                  {/* <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                    <Shield className="h-4 w-4 text-green-400" />
                    <span className="text-xs font-medium">SSL 256-bit</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
                    <Lock className="h-4 w-4 text-blue-400" />
                    <span className="text-xs font-medium">PCI DSS</span>
                  </div> */}
                </div>

                {/* ABFintechs Logo */}
                <div>
                  <Image 
                    src={ABFintechsLogo} 
                    alt="ABFintechs - Associação Brasileira de Fintechs" 
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Company */}
            <div>
              <motion.h4
                className="font-semibold mb-6 text-lg text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Empresa
              </motion.h4>
              <motion.ul
                className="space-y-3"
                variants={listMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li variants={itemMotion}>
                  <Link href="/sobre" className="text-gray-300 hover:text-[#E85A27] transition-colors text-sm">
                    Sobre nós
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/planos" className="text-gray-300 hover:text-[#E85A27] transition-colors text-sm">
                    Planos e Preços
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/seguranca" className="text-gray-300 hover:text-[#E85A27] transition-colors text-sm">
                    Segurança
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/compliance" className="text-gray-300 hover:text-[#E85A27] transition-colors text-sm">
                    Compliance
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/carreiras" className="text-gray-300 hover:text-[#E85A27] transition-colors text-sm">
                    Carreiras
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/imprensa" className="text-gray-300 hover:text-[#E85A27] transition-colors text-sm">
                    Imprensa
                  </Link>
                </motion.li>
              </motion.ul>
            </div>

            {/* Support & Contact */}
            <div>
              <motion.h4
                className="font-semibold mb-6 text-lg text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Suporte
              </motion.h4>
              <motion.div
                className="space-y-4"
                variants={listMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={itemMotion} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#E85A27] mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Atendimento</p>
                      <a href="https://wa.me/551152414928" className="text-white hover:text-[#E85A27] transition-colors font-medium text-sm">
                        +55 11 5241-4928
                      </a>
                      <p className="text-xs text-gray-400 mt-1">Seg-Sex: 9h às 18h</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemMotion} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#E85A27] mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Email</p>
                      <a href="mailto:suporte@debita.ai" className="text-white hover:text-[#E85A27] transition-colors font-medium text-sm">
                        suporte@debita.ai
                      </a>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemMotion} className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#E85A27] mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Endereço</p>
                      <p className="text-white text-sm">Uruçuí, PI</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Social Media & Links */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6">
              <motion.a
                href="https://instagram.com/debita.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-5 w-5 text-gray-300" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/debitaai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
              </motion.a>
              <motion.a
                href="https://debita.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="h-5 w-5 text-gray-300" />
              </motion.a>
            </div>

            {/* <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <Link href="/termos" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </Link>
              <Link href="/regulamentacao" className="hover:text-white transition-colors">
                Regulamentação
              </Link>
            </div> */}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 py-8">
          <motion.div
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                <strong>© 2025 Debita.aí</strong> - Todos os direitos reservados
              </p>
              <p className="text-xs text-gray-400">
                DEBITA.AI GESTAO FINANCEIRA E MEIOS DE PAGAMENTO LTDA
              </p>
              <p className="text-xs text-gray-400">
                CNPJ: 46.379.233/0001-48
              </p>
            </div>

            {/* <div className="text-right space-y-2">
              <div className="flex items-center gap-2 justify-end">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-xs text-gray-400">Ambiente seguro e criptografado</span>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
