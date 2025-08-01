"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import DebitaLogo from "../../../public/logo.svg";

export default function LegalHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image 
              src={DebitaLogo} 
              alt="Debita.aí" 
              width={120} 
              height={32}
              className="transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-[#E37A37] hover:bg-[#E37A37]/10 transition-all duration-200 font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar ao Início
              </motion.button>
            </Link>

            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E37A37] text-white hover:bg-[#C65A1A] transition-all duration-200 font-medium"
              >
                <Home className="h-4 w-4" />
                Página Inicial
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}