"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, FileText, Shield, UserCheck, Lock, Eye, Scale } from "lucide-react";

const legalPages = [
  {
    title: "Termos de Uso",
    href: "/legal/termos-de-uso",
    icon: FileText,
    description: "Termos e condições de uso da plataforma"
  },
  {
    title: "Termos de Conta",
    href: "/legal/termos-de-conta",
    icon: UserCheck,
    description: "Termos específicos para contas de usuários"
  },
  {
    title: "Termos de Software",
    href: "/legal/termos-de-software",
    icon: FileText,
    description: "Licença e termos de uso do software"
  },
  {
    title: "Política de KYC e PLD",
    href: "/legal/politica-kyc-pld",
    icon: UserCheck,
    description: "Política de Conheça seu Cliente e Prevenção à Lavagem de Dinheiro"
  },
  {
    title: "Política de Segurança da Informação",
    href: "/legal/politica-seguranca",
    icon: Shield,
    description: "Medidas de segurança e proteção de dados"
  },
  {
    title: "Política de LGPD/Privacidade",
    href: "/legal/politica-lgpd",
    icon: Eye,
    description: "Política de privacidade e conformidade com LGPD"
  },
  {
    title: "Política de PLDCFT",
    href: "/legal/politica-pldcft",
    icon: Scale,
    description: "Política de Prevenção à Lavagem de Dinheiro e Combate ao Financiamento do Terrorismo"
  }
];

export default function LegalSidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6">Documentos Legais</h2>
        <nav className="space-y-2">
          {legalPages.map((page) => {
            const Icon = page.icon;
            const isActive = pathname === page.href;
            
            return (
              <motion.div
                key={page.href}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={page.href}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-[#006178] text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#006178]"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${
                    isActive ? "text-white" : "text-gray-500 group-hover:text-[#006178]"
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{page.title}</div>
                    <div className={`text-xs ${
                      isActive ? "text-gray-200" : "text-gray-500"
                    }`}>
                      {page.description}
                    </div>
                  </div>
                  {isActive && (
                    <ChevronRight className="h-4 w-4 text-white" />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </motion.div>
    </div>
  );
}