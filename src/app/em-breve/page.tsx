"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Clock, Bell, CheckCircle } from "iconoir-react";
import { AlertCircle } from "lucide-react";
import DebitaLogo from "../../../public/logo.svg";

export default function EmBreve() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar solicitação');
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "" });
      
      // Reset after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error('Error submitting interest:', error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : 'Erro inesperado');
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] to-[#E37A37]/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#E37A37]/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#C65A1A]/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Header with Logo */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image src={DebitaLogo} width={140} alt="Logo Debita.aí" className="h-auto" />
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative flex-1 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Icon */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-24 h-24 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] rounded-3xl flex items-center justify-center shadow-xl">
                <Clock className="h-12 w-12 text-white" />
              </div>
            </div>

            {/* Title */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-satoshi leading-tight">
                Em breve para você
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8">
                Estamos liberando nossa plataforma aos poucos para garantir a melhor experiência 
                de gestão financeira para cada usuário.
              </p>
            </div>

            {/* Process Steps */}
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] rounded-2xl flex items-center justify-center">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Acesso Gradual</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Nossa equipe está ativando contas de forma controlada para oferecer 
                suporte personalizado e garantir que você tenha a melhor experiência 
                desde o primeiro acesso.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <p className="font-semibold text-gray-800">Cadastro na lista</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#006279] to-[#004A5C] rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <p className="font-semibold text-gray-800">Análise e aprovação</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4A8C7A] to-[#3A6F5F] rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <p className="font-semibold text-gray-800">Ativação da conta</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            {submitStatus === "success" ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-green-200 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-satoshi">
                  Perfeito! Você está na lista!
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Enviamos um email de confirmação. Nossa equipe analisará seu perfil 
                  e você receberá o convite de acesso em breve.
                </p>
                <div className="bg-gray-50 p-4 rounded-2xl mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Próximos passos:</strong> Verifique sua caixa de entrada e aguarde 
                    nosso contato com as instruções de ativação da conta.
                  </p>
                </div>
                <Button
                  variant="outline"
                  asChild
                  className="border-2 border-[#E37A37] text-[#E37A37] hover:bg-[#E37A37] hover:text-white font-semibold px-6 py-3 rounded-xl"
                >
                  <Link href="/" className="flex items-center gap-2">
                    <ArrowLeft className="h-5 w-5" />
                    Voltar ao início
                  </Link>
                </Button>
              </motion.div>
            ) : (
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Bell className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 font-satoshi">
                    Solicite seu acesso
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Preencha os dados abaixo e nossa equipe avaliará seu perfil 
                    para liberar o acesso à plataforma
                  </p>
                </div>

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-red-800 font-semibold text-sm">Erro ao enviar</p>
                      <p className="text-red-600 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-3 block">
                      Nome completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-14 text-lg border-gray-300 focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] rounded-2xl bg-white/90 backdrop-blur-sm"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-3 block">
                      Email profissional *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 text-lg border-gray-300 focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] rounded-2xl bg-white/90 backdrop-blur-sm"
                      placeholder="seu.nome@empresa.com"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#E37A37] to-[#C65A1A] hover:from-[#C65A1A] hover:to-[#A5481C] text-white py-5 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 mt-8"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                        Enviando solicitação...
                      </>
                    ) : (
                      <>
                        <Bell className="h-6 w-6 mr-3" />
                        Solicitar acesso à plataforma
                      </>
                    )}
                  </Button>
                </form>
                
                <div className="mt-8 text-center">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Ao solicitar acesso, você concorda com nossos{" "}
                    <Link href="/legal/termos-de-uso" className="text-[#E37A37] hover:underline font-medium">
                      Termos de Uso
                    </Link>{" "}
                    e{" "}
                    <Link href="/legal/politica-lgpd" className="text-[#E37A37] hover:underline font-medium">
                      Política de Privacidade
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center">
            <Button
              variant="outline"
              asChild
              className="border-2 border-gray-400 hover:border-[#E37A37] text-gray-700 hover:text-[#E37A37] px-8 py-3 rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                Voltar ao início
              </Link>
            </Button>
            
            <div className="text-gray-600">
              <p className="text-sm">
                Dúvidas? Entre em contato:{" "}
                <a 
                  href="https://wa.me/5589994588003" 
                  className="text-[#E37A37] hover:text-[#C65A1A] font-semibold hover:underline transition-colors"
                >
                  WhatsApp
                </a>
                {" "}ou{" "}
                <a 
                  href="mailto:suporte@debita.ai" 
                  className="text-[#E37A37] hover:text-[#C65A1A] font-semibold hover:underline transition-colors"
                >
                  Email
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
