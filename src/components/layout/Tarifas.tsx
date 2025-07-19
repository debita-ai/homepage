"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CreditCard, 
  Wallet, 
  FileText, 
  Link as LinkIcon,
  BarChart2,
  Zap,
  Shield,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Receipt,
  Building2,
  Smartphone,
  Lock,
  Barcode,
  QrCode,
  CreditCard as CreditCardIcon,
  FileCheck,
  Bell,
  Settings
} from "lucide-react";

export default function Tarifas() {
  return (
    <section className="py-20 bg-white" id="tarifas">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary">Comparativo com o Mercado</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            As taxas abaixo são aplicadas apenas sobre as transações pagas. Sem taxa de adesão.
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-semibold text-gray-700">Método de Pagamento</th>
                  <th className="p-4 text-center font-semibold text-gray-700">Debita.aí</th>
                  <th className="p-4 text-center font-semibold text-gray-700">Concorrente A</th>
                  <th className="p-4 text-center font-semibold text-gray-700">Concorrente B </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-4 text-gray-600">PIX</td>
                  <td className="p-4 text-center font-medium text-[#E85A27]">R$ 0,80</td>
                  <td className="p-4 text-center text-gray-600">0,99%</td>
                  <td className="p-4 text-center text-gray-600">R$ 1,89</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-600">Boleto</td>
                  <td className="p-4 text-center font-medium text-[#E85A27]">R$ 1,99</td>
                  <td className="p-4 text-center text-gray-600">R$ 2,59</td>
                  <td className="p-4 text-center text-gray-600">R$ 1,99</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-600">Cartão de Crédito (à vista)</td>
                  <td className="p-4 text-center font-medium text-[#E85A27]">2,19%</td>
                  <td className="p-4 text-center text-gray-600">3,34%</td>
                  <td className="p-4 text-center text-gray-600">2,89%</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-600">Cartão de Crédito (parcelado)</td>
                  <td className="p-4 text-center font-medium text-[#E85A27]">3,40% em 12x</td>
                  <td className="p-4 text-center text-gray-600">4,28% em 12x</td>
                  <td className="p-4 text-center text-gray-600">3,44% em 12x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            * Todas as taxas são por transação e incluem o processamento seguro.
          </p>
        </div>
      </div>
    </section>
  );
} 