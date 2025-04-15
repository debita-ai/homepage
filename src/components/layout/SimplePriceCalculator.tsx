"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { setupScrollReveal } from "@/lib/utils";
import { Calculator, Users, PieChart, Check, Zap, ArrowRight } from "lucide-react";

export default function SimplePriceCalculator() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const sectionRef = useRef<HTMLElement>(null);

  // Base prices
  const prices = {
    pro: 29.90,
  };

  // Calculate price
  const calculatePrice = () => {
    const basePrice = prices.pro;
    if (billingCycle === "yearly") {
      // 20% discount for yearly
      return basePrice * 0.8;
    }
    return basePrice;
  };

  // Calculate yearly savings
  const calculateYearlySavings = () => {
    if (billingCycle === "yearly") {
      const monthlyPrice = calculatePrice() / 0.8;
      return (monthlyPrice - calculatePrice()) * 12;
    }
    return 0;
  };

  // Set up scroll reveal
  useEffect(() => {
    return setupScrollReveal(sectionRef);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8F9FA] to-white" id="calculadora" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#1A1A1A]">
            Seja Debita.aí PRO
          </h2>
          <p className="text-lg md:text-xl text-[#4A5568] max-w-3xl mx-auto">
            Venda mais, tenha acesso a mais integrações e tenha acesso a mais automações
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E2E8F0]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left column: Inputs */}
              <div className="p-8 lg:p-12 bg-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Escolha seu plano</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[#4A5568] mb-4">Ciclo de cobrança</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setBillingCycle("monthly")}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                            billingCycle === "monthly"
                              ? "border-[#E85A27] bg-[#FFF5F2] shadow-sm"
                              : "border-[#E2E8F0] hover:border-[#CBD5E0]"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                                billingCycle === "monthly" ? "border-[#E85A27]" : "border-[#CBD5E0]"
                              }`}>
                                {billingCycle === "monthly" && <div className="w-3 h-3 rounded-full bg-[#E85A27]"></div>}
                              </div>
                              <span className="font-bold text-[#1A1A1A]">Mensal</span>
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={() => setBillingCycle("yearly")}
                          className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                            billingCycle === "yearly"
                              ? "border-[#E85A27] bg-[#FFF5F2] shadow-sm"
                              : "border-[#E2E8F0] hover:border-[#CBD5E0]"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                                billingCycle === "yearly" ? "border-[#E85A27]" : "border-[#CBD5E0]"
                              }`}>
                                {billingCycle === "yearly" && <div className="w-3 h-3 rounded-full bg-[#E85A27]"></div>}
                              </div>
                              <span className="font-bold text-[#1A1A1A]">Anual</span>
                            </div>
                            <span className="bg-[#C6F6D5] text-[#2F855A] text-xs font-bold px-2 py-1 rounded-full">-20%</span>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button
                        className="w-full bg-[#E85A27] hover:bg-[#D84A1F] text-white py-6 text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7QnQVzcl5bToJTuyVbe_UrKQ3SDlqXKYFEfIM3zj-S8kp4Q/viewform">
                          Comece agora <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right column: Price Summary */}
              <div className="p-8 lg:p-12 bg-[#FFF5F2]">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-6">
                    <Zap className="h-10 w-10 text-[#E85A27]" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-8 text-[#1A1A1A]">Resumo do plano PRO</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[#4A5568]">Plano:</span>
                      <span className="font-medium bg-[#E85A27]/10 text-[#E85A27] px-3 py-1 rounded-full">
                        PRO
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[#4A5568]">Cobrança:</span>
                      <span className="font-medium text-[#1A1A1A]">
                        {billingCycle === "monthly" ? "Mensal" : "Anual"}
                      </span>
                    </div>

                    <div className="border-t border-[#E2E8F0] pt-6">
                      <div className="flex items-center justify-between text-3xl font-bold">
                        <span className="text-[#1A1A1A]">Total:</span>
                        <span className="text-[#E85A27]">
                          R$ {calculatePrice().toFixed(2).replace('.', ',')}
                          <span className="text-[#4A5568] text-base font-normal ml-1">
                            /mês
                          </span>
                        </span>
                      </div>

                      {billingCycle === "yearly" && (
                        <div className="text-[#2F855A] text-sm font-medium mt-2 text-right">
                          Economia de R$ {calculateYearlySavings().toFixed(2).replace('.', ',')} por ano
                        </div>
                      )}
                    </div>
                  </div>

                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#E85A27] flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-[#4A5568]">Acesso ilimitado ao Assistente AI</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#E85A27] flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-[#4A5568]">Integrações avançadas com sistemas ERP</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#E85A27] flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-[#4A5568]">Suporte prioritário 24/7</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#E85A27] flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-[#4A5568]">Ferramentas avançadas de vendas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#E85A27] flex-shrink-0 mr-3 mt-0.5" />
                      <span className="text-[#4A5568]">Relatórios personalizados</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <p className="text-center text-[#718096] text-sm">
                      Todos os planos incluem recursos básicos gratuitamente. Experimente o PRO por 7 dias sem compromisso.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
