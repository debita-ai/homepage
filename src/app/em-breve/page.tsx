"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Bell } from "iconoir-react";
import DebitaLogo from "../../../public/logo.svg";

export default function EmBreve() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E85A27]/5 via-white to-[#00809d]/5 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Image src={DebitaLogo} width={200} alt="Logo Debita.aí" className="mx-auto" />
          </motion.div>

          {/* Main Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#E85A27] to-[#00809d] rounded-full flex items-center justify-center shadow-lg">
              <Clock className="h-12 w-12 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
          >
            Acesso à conta em breve!
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="space-y-4 mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Estamos finalizando os últimos detalhes da nossa plataforma para oferecer 
              a melhor experiência de gestão financeira para você.
            </p>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Bell className="h-5 w-5 text-[#E85A27]" />
                <span className="text-[#E85A27] font-semibold">Novidade em breve</span>
              </div>
              <p className="text-gray-700">
                Em breve você poderá acessar sua conta e começar a gerenciar suas cobranças 
                com toda a praticidade que você merece.
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#E85A27] hover:bg-[#d24a1e] text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform" className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Entrar na lista de espera
                </Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-2 border-gray-300 hover:border-[#E85A27] text-gray-700 hover:text-[#E85A27] px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  Voltar ao início
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              Enquanto isso, conheça todos os recursos que estamos preparando para você!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 