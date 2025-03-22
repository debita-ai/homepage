"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { setupScrollReveal } from "@/lib/utils";
import { Calculator, Users, PieChart, Check } from "lucide-react";

export default function SimplePriceCalculator() {
  const [userCount, setUserCount] = useState(1);
  const [businessType, setBusinessType] = useState<"personal" | "business">("personal");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const sectionRef = useRef<HTMLElement>(null);

  // Base prices
  const prices = {
    personal: 0, // Personal use is free
    business: 29.90,
    additionalUserCost: 9.90
  };

  // Calculate price
  const calculatePrice = () => {
    // For personal use, return 0
    if (businessType === "personal") {
      return 0;
    }

    const basePrice = prices.business;
    const additionalUserPrice = Math.max(0, userCount - 1) * prices.additionalUserCost;
    const totalMonthlyPrice = basePrice + additionalUserPrice;

    if (billingCycle === "yearly") {
      // 20% discount for yearly
      return totalMonthlyPrice * 0.8;
    }

    return totalMonthlyPrice;
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
    <section className="py-20 bg-gray-50" id="calculadora" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Calcule o seu plano</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Simples e acessível para todos. Escolha o plano ideal para você ou sua empresa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left column: Inputs */}
              <div className="space-y-8 scroll-reveal">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-secondary">Tipo de plano</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setBusinessType("personal")}
                      className={`p-6 rounded-lg border-2 transition-colors ${
                        businessType === "personal"
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center ${
                          businessType === "personal" ? "border-primary" : "border-gray-300"
                        }`}>
                          {businessType === "personal" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <span className="font-bold">Pessoal</span>
                      </div>
                      <p className="text-gray-500 text-sm">Para suas finanças pessoais e projetos individuais</p>
                    </button>

                    <button
                      onClick={() => setBusinessType("business")}
                      className={`p-6 rounded-lg border-2 transition-colors ${
                        businessType === "business"
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center ${
                          businessType === "business" ? "border-primary" : "border-gray-300"
                        }`}>
                          {businessType === "business" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <span className="font-bold">Empresarial</span>
                      </div>
                      <p className="text-gray-500 text-sm">Para empresas com múltiplos usuários</p>
                    </button>
                  </div>
                </div>
               {
                businessType === 'business' ? (
                  <>
                                  <div>
                  <h3 className="text-xl font-bold mb-4 text-secondary flex items-center">
                    <Users className="mr-2 h-5 w-5 text-primary" /> Número de usuários
                  </h3>
                  <div className="flex items-center">
                    <button
                      onClick={() => setUserCount(Math.max(1, userCount - 1))}
                      className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                      disabled={userCount <= 1}
                    >
                      -
                    </button>
                    <div className="mx-4 w-16 text-center font-bold text-2xl">{userCount}</div>
                    <button
                      onClick={() => setUserCount(userCount + 1)}
                      className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-secondary">Ciclo de cobrança</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setBillingCycle("monthly")}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        billingCycle === "monthly"
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center ${
                          billingCycle === "monthly" ? "border-primary" : "border-gray-300"
                        }`}>
                          {billingCycle === "monthly" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                        </div>
                        <span className="font-bold">Mensal</span>
                      </div>
                    </button>

                    <button
                      onClick={() => setBillingCycle("yearly")}
                      className={`p-4 rounded-lg border-2 transition-colors ${
                        billingCycle === "yearly"
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center ${
                            billingCycle === "yearly" ? "border-primary" : "border-gray-300"
                          }`}>
                            {billingCycle === "yearly" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                          </div>
                          <span className="font-bold">Anual</span>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">-20%</span>
                      </div>
                    </button>
                  </div>
                </div>
                  </>
                ) : (
                  <>
                  </>
                )

               }

              </div>

              {/* Right column: Price Summary */}
              <div className="bg-gray-50 rounded-xl p-6 scroll-reveal">
                <div className="flex items-center justify-center mb-6">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-center mb-6 text-secondary">Resumo do plano</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Tipo:</span>
                    <span className="font-medium">
                      {businessType === "personal" ? "Pessoal" : "Empresarial"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Usuários:</span>
                    <span className="font-medium">{userCount}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cobrança:</span>
                    <span className="font-medium">
                      {billingCycle === "monthly" ? "Mensal" : "Anual"}
                    </span>
                  </div>

                  <div className="border-t border-gray-200 my-4 pt-4">
                    {businessType === "personal" ? (
                      <div className="flex flex-col items-center">
                        <span className="bg-emerald-100 text-emerald-800 py-2 px-4 rounded-md font-bold text-lg mb-2">GRATUITO</span>
                        <span className="text-green-600 text-sm">Sem custos mensais para uso pessoal</span>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center justify-between text-xl font-bold">
                          <span>Total:</span>
                          <span className="text-primary">
                            R$ {calculatePrice().toFixed(2).replace('.', ',')}
                            <span className="text-gray-500 text-sm font-normal ml-1">
                              /mês
                            </span>
                          </span>
                        </div>

                        {billingCycle === "yearly" && (
                          <div className="text-green-600 text-sm font-medium mt-1 text-right">
                            Economia de R$ {calculateYearlySavings().toFixed(2).replace('.', ',')} por ano
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                    <span className="text-gray-600">Acesso a todos os recursos do plano {businessType === "personal" ? "pessoal" : "empresarial"}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                    <span className="text-gray-600">Suporte técnico prioritário por email e chat</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                    <span className="text-gray-600">Atualizações gratuitas</span>
                  </li>
                  {businessType === "business" && (
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                      <span className="text-gray-600">Relatórios avançados e exportação de dados</span>
                    </li>
                  )}
                </ul>

                <div className="mt-6">


                  {/* <p className="text-center text-gray-500 text-sm mt-4">
                    {businessType === "personal" ? "Sem custos, sem cartão de crédito." : "7 dias de teste grátis. Sem compromisso."}
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Payment method comparison section */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 scroll-reveal">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Comparativo de taxas por método de pagamento</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr>
                    <th className="p-3 text-left">Método de Pagamento</th>
                    <th className="p-3 text-center bg-gray-50">Debita.aí</th>
                    <th className="p-3 text-center">Iugu</th>
                    <th className="p-3 text-center">Asaas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="p-3 font-medium">PIX</td>
                    <td className="p-3 text-center font-bold text-green-600 bg-green-50">R$ 0,80</td>
                    <td className="p-3 text-center">0,99%</td>
                    <td className="p-3 text-center">R$ 1,89</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-3 font-medium">Boleto</td>
                    <td className="p-3 text-center font-bold text-green-600 bg-green-50">R$ 1,89</td>
                    <td className="p-3 text-center">R$ 2,59</td>
                    <td className="p-3 text-center">R$ 1,99 </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-3 font-medium">Cartão de Crédito (à vista)</td>
                    <td className="p-3 text-center font-bold text-green-600 bg-green-50">2,19%</td>
                    <td className="p-3 text-center">3,34%</td>
                    <td className="p-3 text-center">2,89%</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="p-3 font-medium">Cartão de Crédito (parcelado)</td>
                    <td className="p-3 text-center font-bold text-green-600 bg-green-50">3,40% em 12x</td>
                    <td className="p-3 text-center">4,28% em 12x</td>
                    <td className="p-3 text-center">3,44% em 12x</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-sm text-gray-600 text-center">
              <p>* Valores para fins comparativos. As tarifas podem variar de acordo com volume e perfil de negócio.</p>
              <p>* As taxas apresentadas são estimativas baseadas em pesquisas de mercado realizadas em Março/2025.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
