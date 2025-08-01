"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, ArrowRight } from "iconoir-react";
import DebitaLogo from "../../../public/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation - Pill-shaped background apenas para logo e nav */}
          <nav className="hidden lg:flex items-center">
            <div className="bg-[#E1EBEB] backdrop-blur-sm rounded-full px-8 py-4 border border-[#BBDEFB]/60">
              <div className="flex items-center space-x-8">
                {/* Logo dentro da pílula */}
                <Link href="/" className="flex items-center group">
                  <Image 
                    src={DebitaLogo} 
                    alt="Debita.aí" 
                    width={150} 
                    height={40}
                    className="transition-all duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* Separador visual */}
                <div className="w-px h-6 bg-gray-300/50"></div>

                {/* Links de navegação */}
                <NavLink href="#solucoes">Soluções</NavLink>
                <NavLink href="#recursos">Recursos</NavLink>
                <NavLink href="#planos">Planos</NavLink>
                <NavLink href="#tarifas">Tarifas</NavLink>
              </div>
            </div>
          </nav>

          {/* Desktop Auth Buttons - Fora da pílula */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-3 px-6 text-base shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 bg-[#FFF3E7] hover:bg-[#F5E6D3] text-[#E37A37] hover:text-[#E37A37] gap-2"
              onClick={() => {
                window.location.href = process.env.NEXT_PUBLIC_APP_URL || "";
              }}
            >
              <User className="h-4 w-4" />
              Entrar na conta
            </button>

            <Link href="/cadastro" prefetch className="inline-block">
              <button className="flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-3 px-6 text-base shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 border-2 border-[#FAECDF] hover:border-[#F5E6D3] bg-[#E37A37] hover:bg-[#C65A1A] text-white hover:text-white gap-2">
                <ArrowRight className="h-4 w-4" />
                Comece agora
              </button>
            </Link>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex items-center justify-between w-full">
            {/* Logo para mobile */}
            <Link href="/" className="flex items-center group">
              <Image 
                src={DebitaLogo} 
                alt="Debita.aí" 
                width={100} 
                height={26}
                className="transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="p-2 rounded-lg hover:bg-[#E27936]/10 transition-colors text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring",
                damping: 30,
                stiffness: 300
              }}
              className="fixed top-0 right-0 h-full w-[320px] bg-[#FDF6F0]/95 backdrop-blur-xl shadow-2xl border-l border-[#E27936]/10 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#E27936]/10">
                  <div className="flex items-center">
                    <Image 
                      src={DebitaLogo} 
                      alt="Debita.aí" 
                      width={80} 
                      height={21}
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-[#E27936]/10 transition-colors"
                    aria-label="Fechar menu"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <nav className="space-y-2 mb-8">
                    <MobileNavLink href="#solucoes" onClick={() => setIsOpen(false)}>
                      Soluções
                    </MobileNavLink>
                    <MobileNavLink href="#recursos" onClick={() => setIsOpen(false)}>
                      Recursos
                    </MobileNavLink>
                    <MobileNavLink href="#planos" onClick={() => setIsOpen(false)}>
                      Planos
                    </MobileNavLink>
                    <MobileNavLink href="#tarifas" onClick={() => setIsOpen(false)}>
                      Tarifas
                    </MobileNavLink>
                  </nav>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      className="flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-full py-4 px-6 text-base shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 bg-[#FFF3E7] hover:bg-[#F5E6D3] text-[#E37A37] hover:text-[#E37A37] gap-2"
                      onClick={() => {
                        window.location.href = process.env.NEXT_PUBLIC_APP_URL || "";
                      }}
                    >
                      <User className="h-4 w-4" />
                      Entrar na conta
                    </button>

                    <Link href="/cadastro" prefetch className="block">
                      <button className="flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-full py-4 px-6 text-base shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 border-2 border-[#FAECDF] hover:border-[#F5E6D3] bg-[#E37A37] hover:bg-[#C65A1A] text-white hover:text-white gap-2">
                        <ArrowRight className="h-4 w-4" />
                        Entrar na lista de espera
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-[#E27936]/10 bg-[#FDF6F0]/50">
                  <p className="text-center text-sm text-gray-500">
                    © 2025 Debita.aí
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// Desktop nav link component
function NavLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 text-[#E27936] hover:text-[#d24a1e] transition-all duration-200 font-medium group"
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#E27936] rounded-full"
        initial={{ width: 0, x: "-50%" }}
        whileHover={{ width: "80%", x: "-50%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </Link>
  );
}

// Mobile nav link component
function MobileNavLink({
  href,
  onClick,
  children
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-4 rounded-xl hover:bg-[#E27936]/5 active:bg-[#E27936]/10 transition-all duration-200 text-gray-700 hover:text-[#E27936] font-medium"
    >
      {children}
    </Link>
  );
}
