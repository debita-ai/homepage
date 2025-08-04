"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";
import DebitaLogo from "../../../public/logo.svg";

export default function LegalHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src={DebitaLogo} 
              alt="Debita.aí" 
              width={140} 
              height={36}
              className="transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-[#E37A37] hover:bg-[#E37A37]/10 transition-all duration-200 font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Voltar ao Início</span>
                <span className="sm:hidden">Voltar</span>
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-[#E37A37] hover:bg-[#E37A37]/10 transition-all duration-200 font-medium"
              onClick={() => {
                if (typeof window !== 'undefined' && window.Crisp) {
                  window.Crisp.chat.open();
                }
              }}
            >
              <HelpCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Ajuda</span>
            </motion.button>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E37A37] text-white hover:bg-[#C65A1A] transition-all duration-200 font-medium"
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Página Inicial</span>
                <span className="sm:hidden">Início</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}