"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CreditCard, 
  QrCode,
  FileText,
  ArrowRight,
  Calculator,
  Star
} from "lucide-react";

export default function Tarifas() {
  const [calculatorValue, setCalculatorValue] = useState("");
  const [selectedType, setSelectedType] = useState("pix");

  const formatCurrency = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, '');
    
    // Limita a um bilhão (1,000,000,000)
    const limitedNumbers = numbers.slice(0, 12); // máximo 12 dígitos para 1 bilhão
    
    // Converte para centavos
    const cents = parseInt(limitedNumbers) || 0;
    
    // Limita a 100 bilhões de centavos (1 bilhão de reais)
    const limitedCents = Math.min(cents, 100000000000);
    
    // Converte de volta para reais
    const reais = limitedCents / 100;
    
    // Formata como moeda brasileira
    return reais.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    setCalculatorValue(rawValue);
  };

  const getNumericValue = () => {
    const numbers = calculatorValue.replace(/\D/g, '');
    return (parseInt(numbers) || 0) / 100;
  };

  const calculateFee = () => {
    const value = getNumericValue();
    if (selectedType === "pix") {
      return 0.60; // R$ 0,60 fixo
    } else if (selectedType === "boleto") {
      return 2.80; // R$ 2,80 fixo
    }
    return 0;
  };

  const getNetValue = () => {
    const value = getNumericValue();
    const fee = calculateFee();
    const netValue = value - fee;
    // Se o valor líquido for negativo, retorna 0
    return Math.max(0, netValue);
  };

  const features = [
    {
      icon: <QrCode className="h-8 w-8" />,
      title: "Pix",
      price: "R$ 0,60",
      description: "por transação recebida",
      color: "from-[#E37A37] to-[#C65A1A]",
      size: "lg:col-span-1"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Boleto Bancário", 
      price: "R$ 2,80",
      description: "por boleto pago",
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      size: "lg:col-span-1"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Cartão de Crédito (em breve)",
      price: "Em breve",
      description: "Aguarde novidades",
      color: "from-[#006279] to-[#004A5C]",
      size: "lg:col-span-1"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FFF3E7] relative overflow-hidden" id="tarifas">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[#E37A37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-[#4A8C7A]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Title Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-baskerville">
            Preços transparentes, sem surpresas
          </h2>
          <p className="font-['Satoshi',sans-serif] text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Sem mensalidade ou taxa de adesão. Pague apenas quando vender.
          </p>
        </motion.div>

        {/* Special Offer Badge */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-center rounded-lg w-fit py-4 px-6 text-base shadow-button-enabled bg-[#E37A37] text-white gap-3">
            <Star className="h-5 w-5 fill-current text-[#FAECDF]" />
            <span className="font-['Satoshi',sans-serif] font-bold">
              Taxas especiais para quem abrir a conta agora
            </span>
          </div>
        </motion.div>

        {/* Main Content - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
          {/* Left Column - Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="font-['Satoshi',sans-serif] text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Nossas Taxas
              </h3>
              <p className="font-['Satoshi',sans-serif] text-gray-600 font-medium">
                Transparência total nos custos das suas transações
              </p>
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:scale-[1.02]"
              >
                {/* Background subtle pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent rounded-3xl" />
                
                {/* Content Container */}
                <div className="relative p-6 flex items-center gap-4">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <h4 className="font-['Satoshi',sans-serif] text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-['Satoshi',sans-serif] text-gray-600 text-sm font-medium group-hover:text-gray-700 transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <span className="font-['Satoshi',sans-serif] text-2xl font-bold text-[#E37A37]">
                      {feature.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column - Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20 sticky top-8">
              {/* Calculator Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E37A37] to-[#C65A1A] text-white shadow-lg mb-4">
                  <Calculator className="h-8 w-8" />
                </div>
                <h3 className="font-['Satoshi',sans-serif] text-2xl font-bold text-gray-800 mb-2">
                  Calcule suas taxas
                </h3>
                <p className="font-['Satoshi',sans-serif] text-gray-600 font-medium">
                  Veja quanto você vai pagar e receber
                </p>
              </div>
              
              <div className="space-y-6">
                {/* Input Section */}
                <div>
                  <label className="font-['Satoshi',sans-serif] block text-base font-semibold text-gray-800 mb-3">
                    Valor da transação
                  </label>
                  <div className="relative">
                    <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 font-['Satoshi',sans-serif] text-lg font-medium">
                      R$
                    </span>
                    <input
                      type="text"
                      value={calculatorValue ? formatCurrency(calculatorValue) : ''}
                      onChange={handleValueChange}
                      placeholder="0,00"
                      className="font-['Satoshi',sans-serif] w-full pl-16 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] outline-none transition-all duration-300 hover:border-gray-300 text-lg"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="font-['Satoshi',sans-serif] block text-base font-semibold text-gray-800 mb-3">
                    Tipo de pagamento
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    <button
                      onClick={() => setSelectedType("pix")}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 ${
                        selectedType === "pix"
                          ? "border-[#E37A37] bg-[#E37A37]/5 text-[#E37A37]"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        selectedType === "pix" ? "bg-[#E37A37] text-white" : "bg-gray-100"
                      }`}>
                        <QrCode className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="font-['Satoshi',sans-serif] text-base font-semibold block">Pix</span>
                        <span className="font-['Satoshi',sans-serif] text-sm text-gray-500">R$ 0,60 por transação</span>
                      </div>
                    </button>
                    <button
                      onClick={() => setSelectedType("boleto")}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 ${
                        selectedType === "boleto"
                          ? "border-[#E37A37] bg-[#E37A37]/5 text-[#E37A37]"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        selectedType === "boleto" ? "bg-[#E37A37] text-white" : "bg-gray-100"
                      }`}>
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <span className="font-['Satoshi',sans-serif] text-base font-semibold block">Boleto</span>
                        <span className="font-['Satoshi',sans-serif] text-sm text-gray-500">R$ 2,80 fixo</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Results Section */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-['Satoshi',sans-serif] text-lg font-bold text-gray-800 mb-4">
                    Resumo da transação
                  </h4>
                  
                  {calculatorValue && getNumericValue() > 0 ? (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-['Satoshi',sans-serif] text-gray-600 font-medium">Valor bruto:</span>
                        <span className="font-['Satoshi',sans-serif] font-bold text-gray-800 text-lg">
                          R$ {getNumericValue().toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="font-['Satoshi',sans-serif] text-gray-600 font-medium">Taxa Debita.aí:</span>
                        <span className="font-['Satoshi',sans-serif] font-bold text-[#E37A37] text-lg">
                          - R$ {calculateFee().toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl px-4 border border-green-200">
                        <span className="font-['Satoshi',sans-serif] font-bold text-gray-800">Você recebe:</span>
                        <span className="font-['Satoshi',sans-serif] font-bold text-green-600 text-2xl">
                          R$ {getNetValue().toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                      <p className="font-['Satoshi',sans-serif] text-gray-500 font-medium">
                        Digite um valor para ver o cálculo
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/em-breve">
            <button className="mkt-button-main flex items-center transition-colors group justify-center cursor-pointer hover:shadow-none disabled:shadow-none focus:shadow-none rounded-lg w-fit py-6 px-8 text-lg shadow-button-enabled focus:ring-yellow-400 focus:ring-2 focus:outline-none disabled:bg-gray-800 disabled:text-gray-400 bg-[#E37A37] hover:bg-[#C65A1A] text-white hover:text-white gap-2 mx-auto">
              <span>Criar conta agora</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
          
          <p className="font-['Satoshi',sans-serif] text-gray-600 text-sm mt-4 font-medium">
            💡 Aproveite as taxas especiais criando sua conta agora mesmo!
          </p>
        </motion.div>
      </div>
    </section>
  );
}