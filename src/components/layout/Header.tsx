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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "py-4 bg-white shadow-sm" 
          : "py-6 bg-transparent"
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
              <Link href={process.env.NEXT_PUBLIC_LOGIN_APP_URL || ''} className="flex items-center justify-center gap-2 w-full">
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
              <Link href="/cadastro" className="flex items-center justify-center gap-2">
                <span>Registrar-se</span>
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 200
              }}
              className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Close Button */}
                <div className="flex justify-end p-3">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 text-black" />
                  </button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col">
                    <MobileNavLink href="#recursos" onClick={() => setIsOpen(false)}>
                      <div className="px-5 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                        Recursos
                      </div>
                    </MobileNavLink>
                    <div className="h-px bg-gray-100" />
                    <MobileNavLink href="#calculadora" onClick={() => setIsOpen(false)}>
                      <div className="px-5 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                        Planos
                      </div>
                    </MobileNavLink>
                    <div className="h-px bg-gray-100" />
                    <MobileNavLink href="#tarifas" onClick={() => setIsOpen(false)}>
                      <div className="px-5 py-3 hover:bg-gray-50 active:bg-gray-100 transition-colors">
                        Tarifas
                      </div>
                    </MobileNavLink>
                  </nav>

                  <div className="h-px bg-gray-100" />

                  <div className="flex flex-col space-y-4 px-5 py-4">
                    <Button
                      className={`flex items-center transition-all duration-200 group justify-center cursor-pointer rounded-lg w-fit py-3 px-4 text-sm focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 bg-[#E85A27] hover:bg-[#D84A1F] text-white border border-gray-200/20 hover:border-gray-200/30 active:scale-95 hover:shadow-lg`}
                      asChild
                    >
                      <Link href={process.env.NEXT_PUBLIC_LOGIN_APP_URL || ''}  className="flex items-center justify-center gap-2 w-full">
                        <LogIn className="h-4 w-4 transition-transform group-hover:scale-110" />
                        <span>Entrar na conta</span>
                      </Link>
                    </Button>

                    <Button
                      className="justify-center w-full bg-[#00B4D8] hover:bg-[#0096B7] text-[#023E8A] active:bg-[#0096B7] rounded-full h-14 text-base font-semibold transition-all shadow-none"
                      asChild
                    >
                      <Link href="/cadastro" className="flex items-center justify-center gap-2">
                        <span>Registrar-se</span>
                        <NavArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
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
