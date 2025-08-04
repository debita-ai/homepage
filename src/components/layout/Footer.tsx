"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Shield } from "iconoir-react";
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
        {/* Main Footer Content - Mobile First Design */}
        <div className="pt-8 pb-6">
          {/* Mobile: Company Info Section */}
          <div className="block sm:hidden">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-block mb-4">
                <Image src={DebitaLogo} width={80} alt="Logo Debita.aí" />
              </Link>
              <p className="text-white/80 text-sm leading-relaxed mb-6 px-4">
                Plataforma completa de gestão financeira e cobranças digitais.
              </p>
              
              {/* Social Media - Mobile */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <a href="https://www.instagram.com/debita.ai/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/company/debitaai/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@debitaai" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Play className="h-5 w-5" />
                </a>
              </div>

              {/* Security Badges - Mobile */}
              <div className="flex justify-center flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <Shield className="h-4 w-4 text-white" />
                  <span className="text-xs font-medium text-white">Ambiente seguro</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <Shield className="h-4 w-4 text-white" />
                  <span className="text-xs font-medium text-white">SSL EV Protegido</span>
                </div>
              </div>

              {/* ABFintechs Logo - Mobile */}
              <div className="flex justify-center">
                <Image 
                  src={ABFintechsLogo} 
                  alt="ABFintechs - Associação Brasileira de Fintechs" 
                  width={90}
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Mobile Links Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* Left Column - Mobile */}
              <div>
                <h4 className="font-semibold mb-4 text-white text-base">Empresa</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/sobre-nos" className="text-white/80 hover:text-white transition-colors text-sm block py-1">
                      Sobre nós
                    </Link>
                  </li>
                </ul>

                <h4 className="font-semibold mb-4 mt-6 text-white text-base">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/legal/termos-de-uso" className="text-white/80 hover:text-white transition-colors text-sm block py-1">
                      Termos de Uso
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal/termos-de-conta" className="text-white/80 hover:text-white transition-colors text-sm block py-1">
                      Termos de Conta
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacidade" className="text-white/80 hover:text-white transition-colors text-sm block py-1">
                      Política de Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link href="/denuncia" className="text-white/80 hover:text-white transition-colors text-sm block py-1">
                      Canal de Denúncias
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Right Column - Mobile */}
              <div>
                <h4 className="font-semibold mb-4 text-white text-base">Suporte</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/ajuda" className="text-white/80 hover:text-white transition-colors text-sm block py-1">
                      Central de ajuda
                    </Link>
                  </li>
                  <li>
                    <Link href="/contato" className="text-white/80 hover:text-white transition-colors text-sm block py-1">
                      Contato
                    </Link>
                  </li>
                  <li>
                    <Link href="/status" className="text-white/80 hover:text-white transition-colors text-sm block py-1">
                      Status do sistema
                    </Link>
                  </li>
                  <li>
                    <a href="https://wa.me/5589994588003" className="text-white/80 hover:text-white transition-colors text-sm block py-1">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop: Original Layout */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12 lg:mb-16">
              {/* Company Info */}
              <div className="col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
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
                  <div className="flex items-center flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                      <Shield className="h-4 w-4 text-white flex-shrink-0" />
                      <span className="text-xs font-medium text-white">Ambiente seguro</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                      <Shield className="h-4 w-4 text-white flex-shrink-0" />
                      <span className="text-xs font-medium text-white">SSL EV Protegido</span>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-center gap-4 mb-6">
                    <a href="https://www.instagram.com/debita.ai/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a href="https://www.linkedin.com/company/debitaai/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="https://www.youtube.com/@debitaai" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
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
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
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
                    <Link href="/sobre-nos" className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                      Sobre nós
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>

              {/* Suporte */}
              <div>
                <motion.h4
                  className="font-semibold mb-6 text-lg text-white"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
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
                    <Link href="/ajuda" className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                      Central de ajuda
                    </Link>
                  </motion.li>
                  <motion.li variants={itemMotion}>
                    <Link href="/contato" className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                      Contato
                    </Link>
                  </motion.li>
                  <motion.li variants={itemMotion}>
                    <Link href="/status" className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                      Status do sistema
                    </Link>
                  </motion.li>
                  <motion.li variants={itemMotion}>
                    <a href="https://wa.me/5589994588003" className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                      WhatsApp
                    </a>
                  </motion.li>
                </motion.ul>
              </div>

              {/* Legal */}
              <div>
                <motion.h4
                  className="font-semibold mb-6 text-lg text-white"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
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
                    <Link href="/legal/termos-de-uso" className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                      Termos de Uso
                    </Link>
                  </motion.li>
                  <motion.li variants={itemMotion}>
                    <Link href="/legal/termos-de-conta" className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                      Termos de Conta
                    </Link>
                  </motion.li>
                  <motion.li variants={itemMotion}>
                    <Link href="/privacidade" className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                      Política de Privacidade
                    </Link>
                  </motion.li>
                  <motion.li variants={itemMotion}>
                    <Link href="/denuncia" className="text-white/80 hover:text-white transition-colors text-sm leading-relaxed">
                      Canal de Denúncias
                    </Link>
                  </motion.li>
                </motion.ul>
              </div>
            </div>
          </div>

          {/* Contact Info - Mobile First */}
          <motion.div
            className="border-t border-white/20 pt-6 mb-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Mobile Contact Info */}
            <div className="block sm:hidden space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Atendimento</p>
                    <p className="text-white/80 text-sm">+55 89 99458-8003</p>
                    <p className="text-white/60 text-xs">Seg-Sex: 9h às 18h</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white font-medium text-sm mb-1">Suporte Técnico</p>
                    <p className="text-white/80 text-sm break-all mb-2">suporte@debita.ai</p>
                    <p className="text-white font-medium text-sm mb-1">Ouvidoria</p>
                    <p className="text-white/80 text-sm break-all">ouvidoria@debita.ai</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Endereço</p>
                    <p className="text-white/80 text-sm">Uruçuí, PI - 64860-000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Contact Info */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">Atendimento</p>
                  <p className="text-white/80 text-sm">+55 89 99458-8003</p>
                  <p className="text-white/60 text-xs">Seg-Sex: 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-white font-medium text-sm mb-1">Suporte Técnico</p>
                  <p className="text-white/80 text-sm break-all mb-2">suporte@debita.ai</p>
                  <p className="text-white font-medium text-sm mb-1">Ouvidoria</p>
                  <p className="text-white/80 text-sm break-all">ouvidoria@debita.ai</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
                <MapPin className="h-5 w-5 text-white mt-1 flex-shrink-0" />
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
          className="border-t border-white/20 py-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-white/80 leading-relaxed px-4">
            © 2025 DEBITA.AI GESTAO FINANCEIRA E MEIOS DE PAGAMENTO LTDA.<br className="sm:hidden" /> Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/60 mt-2">
            CNPJ: 46.379.233/0001-48
          </p>
        </motion.div>
      </div>
    </footer>
  );
}