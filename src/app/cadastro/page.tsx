"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Eye, EyeOff, Check } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);

  const validateForm = () => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!name) {
      newErrors.name = "O nome é obrigatório";
    }

    if (!email) {
      newErrors.email = "O email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (!password) {
      newErrors.password = "A senha é obrigatória";
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      // Simulate signup API call
      setTimeout(() => {
        setIsLoading(false);
        setRegistrationComplete(true);
      }, 1500);
    }
  };

  const passwordStrength = () => {
    if (!password) return 0;

    let strength = 0;

    // Length check
    if (password.length >= 6) strength += 1;
    if (password.length >= 10) strength += 1;

    // Complexity checks
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return Math.min(strength, 5);
  };

  const strengthColor = () => {
    const strength = passwordStrength();
    if (strength < 2) return "bg-red-500";
    if (strength < 4) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {!registrationComplete ? (
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Crie sua conta grátis</h1>
                    <p className="text-gray-600 dark:text-gray-400">Experimente o Debita.aí por 7 dias sem compromisso</p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Nome completo
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.name
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-400"
                          }`}
                          placeholder="Seu nome completo"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.email
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-400"
                          }`}
                          placeholder="seu@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Senha
                        </label>
                        <div className="relative">
                          <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                              errors.password
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-400"
                            }`}
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        {errors.password && (
                          <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                        )}

                        {password && (
                          <div className="mt-2">
                            <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                              <div
                                className={`h-full ${strengthColor()}`}
                                style={{ width: `${(passwordStrength() / 5) * 100}%` }}
                              ></div>
                            </div>
                            <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                              <span>Fraca</span>
                              <span>Média</span>
                              <span>Forte</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Confirmar senha
                        </label>
                        <div className="relative">
                          <input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                              errors.confirmPassword
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-400"
                            }`}
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                        )}
                      </div>

                      <div className="flex items-center">
                        <input
                          id="terms"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                          Concordo com os{" "}
                          <Link href="/termos" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">
                            Termos de Serviço
                          </Link>{" "}
                          e{" "}
                          <Link href="/privacidade" className="text-primary-600 hover:text-primary-500 dark:text-primary-400">
                            Política de Privacidade
                          </Link>
                        </label>
                      </div>

                      <div>
                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary-600 text-white py-2 px-4 rounded-md transition-colors dark:bg-primary-700 dark:hover:bg-primary-800"
                          disabled={isLoading}
                        >
                          {isLoading ? "Criando conta..." : "Criar conta grátis"}
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Já tem uma conta?{" "}
                    <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400">
                      Entrar na conta
                    </Link>
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6 mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>

                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cadastro realizado com sucesso!</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Enviamos um email de confirmação para {email}. Por favor, verifique sua caixa de entrada para ativar sua conta.
                </p>

                <div className="space-y-4">
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary-600 text-white py-2 px-4 rounded-md transition-colors dark:bg-primary-700 dark:hover:bg-primary-800"
                  >
                    <Link href="/login">
                      Ir para o login
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    <Link href="/">
                      Voltar para a página inicial
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
