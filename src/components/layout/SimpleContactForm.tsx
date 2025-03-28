"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Check, AlertCircle } from "lucide-react";
import { setupScrollReveal } from "@/lib/utils";

export default function SimpleContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Set up scroll reveal
  useEffect(() => {
    return setupScrollReveal(sectionRef);
  }, []);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: ""
    };
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = "Por favor, informe seu nome";
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = "Por favor, informe seu email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Por favor, informe um email válido";
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = "Por favor, escreva sua mensagem";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus("loading");

    // Simulate API call
    setTimeout(() => {
      // 95% chance of success (for demo purposes)
      if (Math.random() > 0.05) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    }, 1500);
  };

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      message: ""
    });
    setFormStatus("idle");

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section className="py-20 bg-white" id="contato" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Vamos conversar?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você em até 24 horas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {formStatus === "idle" || formStatus === "loading" ? (
            <form ref={formRef} onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6 scroll-reveal">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Nome completo*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-primary transition-colors`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-primary transition-colors`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Mensagem*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:border-primary transition-colors`}
                    placeholder="Digite sua mensagem aqui..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle size={14} className="mr-1" /> {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 text-center scroll-reveal">
                <Button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className={`bg-primary hover:bg-primary-600 text-white px-8 py-4 text-lg rounded-lg ${
                    formStatus === "loading" ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {formStatus === "loading" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          ) : formStatus === "success" ? (
            <motion.div
              className="p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Mensagem enviada com sucesso!</h3>
              <p className="text-gray-600 mb-8">
                Obrigado por entrar em contato! Nossa equipe responderá em breve.
              </p>
              <Button
                onClick={resetForm}
                className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg"
              >
                Enviar nova mensagem
              </Button>
            </motion.div>
          ) : (
            <motion.div
              className="p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3">Ops! Algo deu errado.</h3>
              <p className="text-gray-600 mb-8">
                Não foi possível enviar sua mensagem. Por favor, tente novamente.
              </p>
              <Button
                onClick={resetForm}
                className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-lg"
              >
                Tentar novamente
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
