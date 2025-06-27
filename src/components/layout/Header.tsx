"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DebitaLogo from "../../../public/logo.svg"
import DebitaLogoAlt from "../../../public/logoAlt.svg"
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogIn, Menu, X, NavArrowDown, NavArrowRight } from "iconoir-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 py-6 transition-all duration-500 ease-out ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {scrolled ? (
              <Image src={DebitaLogo} width={136} alt="Logo escrito Debita ponto aí" />
            ) : (
              <Image src={DebitaLogoAlt} width={136} alt="Logo escrito Debita ponto aí" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <SolutionsDropdown light={!scrolled} />
            <NavLink href="#recursos" light={!scrolled}>Recursos</NavLink>
            <NavLink href="#calculadora" light={!scrolled}>Planos</NavLink>
            <NavLink href="#tarifas" light={!scrolled}>Tarifas</NavLink>
          </nav>

          {/* Vertical Divider */}
          <div className={`hidden md:block h-6 w-px ${scrolled ? 'bg-gray-200' : 'bg-white/20'} mx-4`} />

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className={`flex items-center transition-all duration-200 group justify-center cursor-pointer rounded-lg w-fit py-2.5 px-4 text-sm font-normal focus:ring-2 focus:ring-yellow-400 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 ${
                scrolled 
                  ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100/80" 
                  : "text-white/90 hover:text-white hover:bg-white/10"
              } active:scale-95`}
              asChild
            >
              <Link href="/em-breve" className="flex items-center justify-center gap-2 w-full">
                <LogIn className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span>Entrar na conta</span>
              </Link>
            </Button>

            <Button
              className={`flex items-center transition-all duration-200 group justify-center cursor-pointer rounded-lg w-fit py-2.5 px-4 text-sm font-normal shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 ${
                scrolled 
                  ? "bg-[#00809d] hover:bg-[#006d85] text-white" 
                  : "bg-[#00809d] hover:bg-[#006d85] text-white"
              } active:scale-95 hover:shadow-md`}
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform" className="flex items-center justify-center gap-2">
                <span>Entrar na lista de espera</span>
                <NavArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"} p-2 rounded-lg hover:bg-white/10 transition-colors`}
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
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
                stiffness: 300,
                duration: 0.4
              }}
              className="fixed top-0 right-0 h-full w-[320px] bg-white/95 backdrop-blur-xl shadow-2xl border-l border-white/20 z-50 md:hidden"
            >
              <div className="flex flex-col h-full relative">
                {/* Decorative gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E85A27] to-[#00809d]" />
                
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100/50">
                  <div className="text-lg font-semibold text-gray-800">Menu</div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl hover:bg-gray-100/80 transition-all duration-200 hover:scale-105"
                    aria-label="Fechar menu"
                  >
                    <X className="h-5 w-5 text-gray-600" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  <nav className="space-y-2 mb-8">
                    <MobileNavLink href="#recursos" onClick={() => setIsOpen(false)}>
                      <div className="flex items-center px-4 py-4 rounded-xl hover:bg-[#E85A27]/5 active:bg-[#E85A27]/10 transition-all duration-200 group">
                        <span className="text-gray-700 group-hover:text-[#E85A27] font-medium transition-colors">Recursos</span>
                      </div>
                    </MobileNavLink>
                    
                    <MobileNavLink href="#calculadora" onClick={() => setIsOpen(false)}>
                      <div className="flex items-center px-4 py-4 rounded-xl hover:bg-[#E85A27]/5 active:bg-[#E85A27]/10 transition-all duration-200 group">
                        <span className="text-gray-700 group-hover:text-[#E85A27] font-medium transition-colors">Planos</span>
                      </div>
                    </MobileNavLink>
                    
                    <MobileNavLink href="#tarifas" onClick={() => setIsOpen(false)}>
                      <div className="flex items-center px-4 py-4 rounded-xl hover:bg-[#E85A27]/5 active:bg-[#E85A27]/10 transition-all duration-200 group">
                        <span className="text-gray-700 group-hover:text-[#E85A27] font-medium transition-colors">Tarifas</span>
                      </div>
                    </MobileNavLink>
                  </nav>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-[#E85A27] to-[#d24a1e] hover:from-[#d24a1e] hover:to-[#c13f1a] text-white py-4 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                      asChild
                    >
                      <Link href="/em-breve" className="flex items-center justify-center gap-3">
                        <LogIn className="h-5 w-5" />
                        <span>Entrar na conta</span>
                      </Link>
                    </Button>

                    <Button
                      className="w-full bg-gradient-to-r from-[#00809d] to-[#006d85] hover:from-[#006d85] hover:to-[#005a6b] text-white py-4 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                      asChild
                    >
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform" className="flex items-center justify-center gap-3">
                        <span>Entrar na lista de espera</span>
                        <NavArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-100/50 bg-gray-50/50">
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

// Desktop nav link with animated underline
function NavLink({
  href,
  children,
  light = false
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative px-1 py-2 ${
        light ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-gray-900"
      } transition-all duration-200 group text-base font-normal`}
    >
      {children}
      <motion.span
        className={`absolute bottom-0 left-0 w-0 h-0.5 ${
          light ? "bg-white" : "bg-[#E85A27]"
        } rounded-full`}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </Link>
  );
}

// Solutions dropdown component
function SolutionsDropdown({ light = false }: { light?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-1 py-2 ${
          light ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-gray-900"
        } transition-all duration-200 group text-base font-normal`}
      >
        Soluções
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <NavArrowDown className={`h-4 w-4 transition-colors ${isOpen ? "text-[#E85A27]" : ""}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg ${
              light ? "bg-white/10 backdrop-blur-md" : "bg-white"
            } overflow-hidden border ${
              light ? "border-white/20" : "border-gray-100"
            }`}
          >
            <div className={`py-1 ${light ? "text-white" : "text-gray-700"}`}>
              <Link
                href="#solutions"
                className={`block px-4 py-2.5 text-sm font-normal transition-all duration-200 hover:bg-white/10 ${
                  light ? "hover:text-white" : "hover:text-[#E85A27]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Para Empresas
              </Link>
              <Link
                href="#solutions"
                className={`block px-4 py-2.5 text-sm font-normal transition-all duration-200 hover:bg-white/10 ${
                  light ? "hover:text-white" : "hover:text-[#E85A27]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Para Autônomos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
      className="block w-full text-gray-700 hover:text-[#E85A27] transition-colors font-normal"
    >
      {children}
    </Link>
  );
}
