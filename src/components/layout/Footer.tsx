"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Shield, Users, FileText, Settings } from "iconoir-react";
import { Instagram, Linkedin, Globe, Play } from "lucide-react";
import DebitaLogo from "../../../public/logo-white.svg";
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
    <footer className="bg-[#E37A37] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C65A1A]/20 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="inline-block mb-6">
                  <Image src={DebitaLogo} width={80} alt="Logo Debita.aí" />
                </Link>
                <p className="text-white/80 leading-relaxed mb-6 text-sm max-w-sm">
                  Plataforma completa de gestão financeira e cobranças digitais. 
                  Simplifique seus processos financeiros com segurança e eficiência.
                </p>
                
                {/* Security Badges */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                    <Shield className="h-4 w-4 text-white" />
                    <span className="text-xs font-medium text-white">Ambiente seguro e criptografado</span>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-4 mb-6">
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Globe className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Play className="h-4 w-4" />
                  </a>
                </div>

                {/* ABFintechs Logo */}
                <div>
                  <Image 
                    src={ABFintechsLogo} 
                    alt="ABFintechs - Associação Brasileira de Fintechs" 
                    width={100}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Empresa */}
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
                  <Link href="/sobre" className="text-white/80 hover:text-white transition-colors text-sm">
                    Sobre nós
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/para-voce" className="text-white/80 hover:text-white transition-colors text-sm">
                    Para você
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/recursos" className="text-white/80 hover:text-white transition-colors text-sm">
                    Recursos
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/tarifas" className="text-white/80 hover:text-white transition-colors text-sm">
                    Tarifas
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm">
                    Blog
                  </Link>
                </motion.li>
              </motion.ul>
            </div>

            {/* Suporte */}
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
              <motion.ul
                className="space-y-3"
                variants={listMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li variants={itemMotion}>
                  <Link href="/ajuda" className="text-white/80 hover:text-white transition-colors text-sm">
                    Central de ajuda
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/contato" className="text-white/80 hover:text-white transition-colors text-sm">
                    Contato
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/status" className="text-white/80 hover:text-white transition-colors text-sm">
                    Status do sistema
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <a href="https://wa.me/551152414928" className="text-white/80 hover:text-white transition-colors text-sm">
                    WhatsApp
                  </a>
                </motion.li>
              </motion.ul>
            </div>

            {/* Legal */}
            <div>
              <motion.h4
                className="font-semibold mb-6 text-lg text-white"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Legal
              </motion.h4>
              <motion.ul
                className="space-y-3"
                variants={listMotion}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li variants={itemMotion}>
                  <Link href="/legal/termos-de-uso" className="text-white/80 hover:text-white transition-colors text-sm">
                    Termos de Uso
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/legal/termos-condicoes" className="text-white/80 hover:text-white transition-colors text-sm">
                    Termos e condições de uso da plataforma
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/legal/termos-conta" className="text-white/80 hover:text-white transition-colors text-sm">
                    Termos de Conta
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/legal/termos-software" className="text-white/80 hover:text-white transition-colors text-sm">
                    Termos de Software
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/legal/politica-kyc-pld" className="text-white/80 hover:text-white transition-colors text-sm">
                    Política de KYC e PLD
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/legal/politica-seguranca" className="text-white/80 hover:text-white transition-colors text-sm">
                    Política de Segurança da Informação
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/legal/politica-lgpd" className="text-white/80 hover:text-white transition-colors text-sm">
                    Política de LGPD/Privacidade
                  </Link>
                </motion.li>
                <motion.li variants={itemMotion}>
                  <Link href="/legal/politica-pldcft" className="text-white/80 hover:text-white transition-colors text-sm">
                    Política de PLDCFT
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </div>

          {/* Contact Info */}
          <motion.div
            className="border-t border-white/20 pt-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white mt-1" />
                <div>
                  <p className="text-white font-medium text-sm">Atendimento</p>
                  <p className="text-white/80 text-sm">+55 11 5241-4928</p>
                  <p className="text-white/60 text-xs">Seg-Sex: 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white mt-1" />
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <p className="text-white/80 text-sm">suporte@debita.ai</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white mt-1" />
                <div>
                  <p className="text-white font-medium text-sm">Endereço</p>
                  <p className="text-white/80 text-sm">Uruçuí, PI - 64860-000</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/20 py-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-white/80">
            © 2025 DEBITA.AI GESTAO FINANCEIRA E MEIOS DE PAGAMENTO LTDA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/60 mt-2">
            CNPJ: 46.379.233/0001-48
          </p>
        </motion.div>
      </div>
    </footer>
  );
}