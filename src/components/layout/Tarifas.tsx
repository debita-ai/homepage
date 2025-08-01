"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  QrCode,
  FileText,
  CheckCircle2,
  ArrowRight,
  Calculator
} from "lucide-react";

export default function Tarifas() {
  const [calculatorValue, setCalculatorValue] = useState("");
  const [selectedType, setSelectedType] = useState("pix");

  const calculateFee = () => {
    const value = parseFloat(calculatorValue) || 0;
    if (selectedType === "pix") {
      return value * 0.008; // 0.80%
    } else if (selectedType === "boleto") {
      return 1.99; // R$ 1,99 fixo
    }
    return 0;
  };

  const getNetValue = () => {
    const value = parseFloat(calculatorValue) || 0;
    return value - calculateFee();
  };

  const features = [
    {
      icon: <QrCode className="h-8 w-8 text-[#E37A37]" />,
      title: "Pix",
      price: "R$ 0,80",
      description: "por transação recebida",
      highlight: false
    },
    {
      icon: <FileText className="h-8 w-8 text-[#E37A37]" />,
      title: "Boleto Bancário",
      price: "R$ 1,99",
      description: "por boleto pago",
      highlight: false
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#E37A37]" />,
      title: "Cartão de Crédito",
      price: "Em breve",
      description: "Aguarde novidades",
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-white" id="tarifas">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-800">
            Preços transparentes, sem surpresas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Sem mensalidade ou taxa de adesão. Pague apenas quando vender.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-lg transition-all duration-300 ${
                feature.highlight ? 'border-[#E37A37] border-2 bg-[#E37A37]/5' : 'border-gray-200'
              }`}>
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-[#E37A37]/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#E37A37]">
                      {feature.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Calculadora */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="h-6 w-6 text-[#E37A37]" />
              <h3 className="text-xl font-bold text-gray-800">Calcule suas taxas</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Valor da transação
                </label>
                <input
                  type="number"
                  value={calculatorValue}
                  onChange={(e) => setCalculatorValue(e.target.value)}
                  placeholder="Digite o valor em R$"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedType("pix")}
                    className={`p-3 rounded-lg border transition-colors ${
                      selectedType === "pix"
                        ? "border-[#E37A37] bg-[#E37A37]/5 text-[#E37A37]"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <QrCode className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Pix</span>
                  </button>
                  <button
                    onClick={() => setSelectedType("boleto")}
                    className={`p-3 rounded-lg border transition-colors ${
                      selectedType === "boleto"
                        ? "border-[#E37A37] bg-[#E37A37]/5 text-[#E37A37]"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <FileText className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Boleto</span>
                  </button>
                </div>
              </div>
              
              {calculatorValue && (
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Valor bruto:</span>
                    <span className="font-medium">R$ {parseFloat(calculatorValue).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Taxa:</span>
                    <span className="font-medium text-[#E37A37]">
                      R$ {calculateFee().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-semibold">Você recebe:</span>
                    <span className="font-bold text-green-600">
                      R$ {getNetValue().toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Observação importante */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#E37A37]/5 border border-[#E37A37]/20 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-[#E37A37] flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-gray-700 font-medium">
                  <strong>Saques vão ficar R$ 0,80</strong>
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Taxa única para transferir seus recursos para qualquer conta bancária.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}