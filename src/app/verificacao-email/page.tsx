"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Mail } from "lucide-react";

export default function VerificacaoEmailPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-full">
                      <Mail className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Verifique seu email
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enviamos um link de verificação para seu email. Por favor, verifique sua caixa de entrada.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Se você não recebeu o email:
                    </p>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 space-y-2">
                      <li>• Verifique sua pasta de spam</li>
                      <li>• Aguarde alguns minutos</li>
                      <li>• Confirme se o email está correto</li>
                    </ul>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      className="bg-primary hover:bg-primary-600 text-white"
                      onClick={() => window.location.reload()}
                    >
                      Reenviar email
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <Link
                      href="/login"
                      className="text-sm text-primary-600 hover:text-primary-500 dark:text-primary-400"
                    >
                      Voltar para o login
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 