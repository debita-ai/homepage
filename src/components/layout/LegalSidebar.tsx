"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, FileText, UserCheck } from "lucide-react";

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

];

export default function LegalSidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">Documentos Legais</h2>
      
      <Link
        href="/legal/termos-de-uso"
        className={`block p-3 rounded-lg transition-colors ${
          pathname === "/legal/termos-de-uso"
            ? "bg-[#E37A37] text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        Termos de Uso
      </Link>
      
      <Link
        href="/legal/termos-de-conta"
        className={`block p-3 rounded-lg transition-colors ${
          pathname === "/legal/termos-de-conta"
            ? "bg-[#E37A37] text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        Termos de Conta
      </Link>
    </div>
  );
}