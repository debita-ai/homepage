"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DebitaLogo from "../../../public/logo.svg"
import DebitaLogoAlt from "../../../public/logoAlt.svg"
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogIn, Menu, X, ChevronDown } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-white shadow-sm" : "py-6 bg-[#E85A27]"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {scrolled ? (
              <Image src={DebitaLogo} width={140} alt="Logo escrito Debita ponto aí" />
            ) : (
              <Image src={DebitaLogoAlt} width={140} alt="Logo escrito Debita ponto aí" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <SolutionsDropdown light={!scrolled} />
            <NavLink href="#recursos" light={!scrolled}>Recursos</NavLink>
            <NavLink href="#calculadora" light={!scrolled}>Planos</NavLink>
            <NavLink href="#tarifas" light={!scrolled}>Tarifas</NavLink>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className={`justify-center w-full ${
                scrolled 
                  ? "text-[#E85A27] border-[#E85A27] hover:bg-transparent hover:text-[#D84A1F] hover:border-[#D84A1F]" 
                  : "text-white border-white/50 hover:bg-white/10 hover:border-white"
              } transition-all duration-200 px-6 py-2.5 font-medium rounded-lg border bg-transparent`}
              asChild
            >
              <Link href="https://app.debita.ai" className="flex items-center justify-center gap-2 w-full">
                <LogIn className="h-4 w-4" />
                <span>Entrar na conta</span>
              </Link>
            </Button>

            <Button
              className={`${
                scrolled 
                  ? "bg-gradient-to-r from-[#E85A27] to-[#D84A1F] hover:from-[#D84A1F] hover:to-[#C84A1F] text-white shadow-sm hover:shadow-md" 
                  : "bg-white text-[#E85A27] hover:bg-white/95"
              } rounded-lg px-8 py-2.5 font-medium transition-all duration-200`}
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform">
                <span>Entrar na lista de espera</span>
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
                      variant="outline"
                      className="justify-center w-full text-[#E85A27] border-[#E85A27] hover:bg-transparent hover:text-[#D84A1F] hover:border-[#D84A1F] active:bg-transparent rounded-lg h-12 text-base font-medium bg-transparent"
                      asChild
                    >
                      <Link href="https://app.debita.ai" className="flex items-center justify-center gap-2 w-full">
                        <LogIn className="h-5 w-5" />
                        <span>Entrar na conta</span>
                      </Link>
                    </Button>

                    <Button
                      className="justify-center w-full bg-[#E85A27] hover:bg-[#D84A1F] text-white active:bg-[#C84A1F] rounded-lg h-12 text-base font-medium shadow-sm hover:shadow-md transition-all"
                      asChild
                    >
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform">
                        <span>Entrar na lista de espera</span>
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
      className={`relative px-1 py-2 ${light ? "text-white/90 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors group text-base font-medium`}
    >
      {children}
      <motion.span
        className={`absolute bottom-0 left-0 w-0 h-0.5 ${light ? "bg-white" : "bg-[#E85A27]"} rounded-full`}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
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
        } transition-colors group text-base font-medium`}
      >
        Soluções
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        <motion.span
          className={`absolute bottom-0 left-0 w-0 h-0.5 ${light ? "bg-white" : "bg-[#E85A27]"} rounded-full`}
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
          >
            <Link
              href="/solutions/pessoal"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#E85A27] transition-colors"
            >
              Pessoal
            </Link>
            <Link
              href="/solutions/empresarial"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#E85A27] transition-colors"
            >
              Empresarial
            </Link>
            <Link
              href="/solutions/startup"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#E85A27] transition-colors"
            >
              Startup
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Mobile nav link with animation
function MobileNavLink({
  href,
  onClick,
  children
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 text-gray-700 hover:text-primary transition-colors text-lg font-medium"
    >
      {children}
    </Link>
  );
}
