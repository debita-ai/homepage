"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import DebitaLogo from "../../../public/logo.svg"
import DebitaLogoAlt from "../../../public/logoAlt.svg"
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogIn, Menu, X } from "lucide-react";

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
        scrolled ? "py-2 bg-white shadow-sm" : "py-5 bg-[#E85A27]"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {scrolled ? (
              <Image src={DebitaLogo} width={100} alt="Logo escrito Debita ponto aí" />
            ) : (
              <Image src={DebitaLogoAlt} width={100} alt="Logo escrito Debita ponto aí" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="/para-voce" light={!scrolled}>Para Você</NavLink>
            <NavLink href="#recursos" light={!scrolled}>Recursos</NavLink>
            <NavLink href="#planos" light={!scrolled}>Planos</NavLink>
            {/* <NavLink href="/blog" light={!scrolled}>Blog</NavLink> */}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              className={`${scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-white/80"} hover:bg-transparent px-4`}
              asChild
            >
              <Link href="/login">Entrar na conta</Link>
            </Button>

            <Button
              className={`${scrolled ? "bg-[#E85A27] hover:bg-[#D84A1F]" : "bg-white text-[#E85A27] hover:bg-white/90"} rounded-full px-5 py-2`}
              asChild
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform">Entrar na lista de espera</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-3">
                <MobileNavLink href="/para-voce" onClick={() => setIsOpen(false)}>
                  Para Você
                </MobileNavLink>
                <MobileNavLink href="#recursos" onClick={() => setIsOpen(false)}>
                  Recursos
                </MobileNavLink>
                <MobileNavLink href="#planos" onClick={() => setIsOpen(false)}>
                  Planos
                </MobileNavLink>
                <MobileNavLink href="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </MobileNavLink>
              </nav>

              <div className="mt-6 flex flex-col space-y-3">
                <Button
                  variant="outline"
                  className="justify-center w-full"
                  asChild
                >
                  <Link href="/login" className="flex items-center justify-center gap-2">
                    <LogIn className="h-4 w-4" />
                    Entrar na conta
                  </Link>
                </Button>

                <Button
                  className="bg-[#E85A27] hover:bg-[#D84A1F] text-white justify-center w-full"
                  asChild
                >
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform">Entrar na lista de espera</Link>
                </Button>
              </div>
            </div>
          </motion.div>
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
      className={`relative px-4 py-2 ${light ? "text-white" : "text-gray-700"} hover:${light ? "text-white/80" : "text-primary"} transition-colors group`}
    >
      {children}
      <motion.span
        className={`absolute bottom-0 left-0 w-0 h-0.5 ${light ? "bg-white" : "bg-primary"} rounded-full`}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
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
      className="block py-2 text-gray-700 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}
