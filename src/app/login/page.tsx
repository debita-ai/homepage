"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRedirect = () => {
    setIsRedirecting(true);
    window.location.href = '/dashboard';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Bem-vindo ao Debita AI
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Clique no botão abaixo para acessar o dashboard
            </p>
            <Button
              onClick={handleRedirect}
              disabled={isRedirecting}
              className="bg-primary hover:bg-primary-600 text-white"
            >
              {isRedirecting ? "Redirecionando..." : "Acessar Dashboard"}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
