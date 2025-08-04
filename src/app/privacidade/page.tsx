"use client";

import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#FFF3E7]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 py-6">
            <Link href="/" className="flex items-center gap-3 group">
              <ArrowLeft className="h-5 w-5 text-[#E37A37] transition-transform group-hover:-translate-x-1" />
              <span className="text-lg font-semibold text-gray-900">Voltar ao Início</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0" />
        
        {/* Background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute w-[300px] h-[150px] top-[10%] left-[5%]"
            style={{
              background: `radial-gradient(ellipse at center, 
                #F0DCCD40 0%, 
                #F0DCCD20 50%, 
                transparent 100%)`,
              animation: 'fluid-morph-1 20s ease-in-out infinite',
              filter: 'blur(2px)'
            }}
          />
          <div 
            className="absolute w-[250px] h-[125px] top-[60%] right-[10%]"
            style={{
              background: `radial-gradient(ellipse at center, 
                #F0DCCD35 0%, 
                #F0DCCD15 60%, 
                transparent 100%)`,
              animation: 'fluid-morph-2 24s ease-in-out infinite',
              filter: 'blur(1.5px)'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white font-baskerville">
              Política de Privacidade
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Como protegemos e utilizamos suas informações pessoais com total transparência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#FFF3E7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 sm:p-12"
          >
            {/* Última atualização */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-orange-600 mt-0.5" />
                <div className="text-sm text-orange-700">
                  <p className="font-medium mb-1">Documento atualizado</p>
                  <p>Última atualização: 4 de agosto de 2025</p>
                </div>
              </div>
            </div>

            {/* Introdução */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Eye className="h-6 w-6 text-[#E37A37]" />
                Introdução
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A <strong>DEBITA.AI GESTÃO FINANCEIRA E MEIOS DE PAGAMENTO LTDA.</strong>, inscrita no CNPJ nº 46.379.233/0001-48, 
                com sede em Uruçuí, PI, está comprometida com a proteção da privacidade e dos dados pessoais de seus usuários.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e demais regulamentações aplicáveis.
              </p>
            </div>

            {/* Seção 1 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Database className="h-5 w-5 text-[#E37A37]" />
                1. Dados que Coletamos
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">1.1 Dados Fornecidos por Você:</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Informações de cadastro empresarial (CNPJ, razão social, endereço)</li>
                    <li>Dados de representantes legais (nome, CPF, e-mail, telefone)</li>
                    <li>Informações bancárias para recebimento</li>
                    <li>Dados de comunicação (e-mail, telefone, mensagens de suporte)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">1.2 Dados Coletados Automaticamente:</h4>
                  <ul className="list-disc ml-6 space-y-1 text-gray-700">
                    <li>Informações técnicas (endereço IP, tipo de dispositivo, navegador)</li>
                    <li>Dados de uso da plataforma (páginas visitadas, tempo de sessão)</li>
                    <li>Cookies e tecnologias similares</li>
                    <li>Logs de transações e operações financeiras</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Seção 2 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-[#E37A37]" />
                2. Como Utilizamos seus Dados
              </h3>
              
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li><strong>Prestação de serviços:</strong> Processar pagamentos, gerar cobranças e relatórios</li>
                <li><strong>Cumprimento legal:</strong> Atender obrigações regulatórias e prevenção à lavagem de dinheiro</li>
                <li><strong>Segurança:</strong> Detectar fraudes e proteger nossa plataforma</li>
                <li><strong>Comunicação:</strong> Enviar notificações importantes e suporte técnico</li>
                <li><strong>Melhorias:</strong> Aprimorar nossos serviços e desenvolver novas funcionalidades</li>
              </ul>
            </div>

            {/* Seção 3 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#E37A37]" />
                3. Base Legal e Fundamentação
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">3.1 Legislação Aplicável</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Lei nº 13.709/2018 (Lei Geral de Proteção de Dados)</li>
                      <li>• Lei nº 12.965/2014 (Marco Civil da Internet)</li>
                      <li>• Lei nº 9.613/1998 (Lei de Lavagem de Dinheiro)</li>
                      <li>• Código de Defesa do Consumidor (Lei nº 8.078/1990)</li>
                      <li>• Constituição Federal (Artigos 5º, X e XII)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">3.2 Regulamentações Setoriais</h4>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Circular BACEN nº 3.978/2020 (PLD/FT)</li>
                      <li>• Resoluções COAF aplicáveis</li>
                      <li>• Normas da ANPD (Autoridade Nacional de Proteção de Dados)</li>
                      <li>• Diretrizes do Banco Central para instituições de pagamento</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção 4 - Compartilhamento */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-[#E37A37]" />
                4. Compartilhamento de Dados
              </h3>
              
              <p className="text-gray-700 mb-4">Seus dados podem ser compartilhados apenas nas seguintes situações:</p>
              
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li><strong>Parceiros de pagamento:</strong> Instituições financeiras licenciadas pelo Banco Central</li>
                <li><strong>Prestadores de serviços:</strong> Empresas que nos auxiliam na operação (sempre com contratos de confidencialidade)</li>
                <li><strong>Autoridades competentes:</strong> Quando exigido por lei ou ordem judicial</li>
                <li><strong>Operações societárias:</strong> Em caso de fusão, aquisição ou venda de ativos</li>
              </ul>
            </div>

            {/* Seção 5 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">5. Segurança dos Dados</h3>
              
              <p className="text-gray-700 mb-4">Implementamos medidas técnicas e organizacionais para proteger seus dados:</p>
              
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Criptografia AES-256 para dados em trânsito e em repouso</li>
                <li>Controles de acesso rigorosos e autenticação multifator</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Auditorias regulares de segurança</li>
                <li>Certificações PCI DSS para processamento de pagamentos</li>
              </ul>
            </div>

            {/* Seção 6 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">6. Seus Direitos (LGPD)</h3>
              
              <p className="text-gray-700 mb-4">Você possui os seguintes direitos sobre seus dados pessoais:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Confirmação e Acesso</h4>
                  <p className="text-sm text-gray-600">Saber se processamos seus dados e acessá-los</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Correção</h4>
                  <p className="text-sm text-gray-600">Corrigir dados incompletos ou inexatos</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Eliminação</h4>
                  <p className="text-sm text-gray-600">Solicitar exclusão de dados desnecessários</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Portabilidade</h4>
                  <p className="text-sm text-gray-600">Transferir dados para outro fornecedor</p>
                </div>
              </div>
            </div>

            {/* Seção 7 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">7. Retenção de Dados</h3>
              
              <p className="text-gray-700 mb-4">Mantemos seus dados pelo tempo necessário para:</p>
              
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Cumprir obrigações contratuais e legais</li>
                <li>Atender requisitos regulatórios (geralmente 5 anos para dados financeiros)</li>
                <li>Resolver disputas e fazer cumprir nossos acordos</li>
                <li>Prevenir fraudes e garantir a segurança da plataforma</li>
              </ul>
            </div>

            {/* Contato */}
            <div className="bg-gradient-to-r from-[#E37A37]/10 to-[#C65A1A]/10 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contato - Encarregado de Dados</h3>
              <p className="text-gray-700 mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>E-mail:</strong> privacidade@debita.ai</p>
                <p><strong>Telefone:</strong> +55 89 99458-8003</p>
                <p><strong>Endereço:</strong> Uruçuí, PI - 64860-000</p>
              </div>
            </div>

            {/* Alterações */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                <strong>Alterações nesta política:</strong> Esta política pode ser atualizada periodicamente. 
                Notificaremos sobre mudanças significativas através de nossos canais de comunicação oficiais.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}