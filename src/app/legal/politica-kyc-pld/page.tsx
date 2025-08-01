"use client";

import { motion } from "framer-motion";
import { UserCheck, Calendar, AlertCircle, Shield } from "lucide-react";

export default function PoliticaKycPld() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-[#006178] rounded-xl">
          <UserCheck className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Política de KYC e PLD</h1>
          <p className="text-gray-600">Última atualização: Janeiro 2025</p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                <strong>Importante:</strong> Esta política estabelece nossas práticas de Conheça seu Cliente (KYC) 
                e Prevenção à Lavagem de Dinheiro (PLD) em conformidade com a legislação brasileira.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
          <p className="text-gray-700 mb-4">
            A Debita.aí está comprometida em prevenir a lavagem de dinheiro e o financiamento do terrorismo, 
            cumprindo rigorosamente as regulamentações brasileiras, incluindo a Lei nº 9.613/98 e suas alterações.
          </p>
          <p className="text-gray-700">
            Esta política estabelece os procedimentos de KYC (Know Your Customer) e PLD (Prevenção à Lavagem de Dinheiro) 
            que aplicamos em todos os nossos serviços.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Princípios Fundamentais</h2>
          <p className="text-gray-700 mb-4">
            Nossa política de KYC e PLD baseia-se nos seguintes princípios:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Identificação e verificação de clientes</li>
            <li>Monitoramento contínuo de transações</li>
            <li>Relatório de operações suspeitas</li>
            <li>Treinamento regular da equipe</li>
            <li>Conformidade com regulamentações aplicáveis</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Processo de Identificação</h2>
          <p className="text-gray-700 mb-4">
            Para todos os clientes, realizamos um processo rigoroso de identificação:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Pessoas Físicas</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Documento de identidade válido</li>
                <li>• CPF</li>
                <li>• Comprovante de residência</li>
                <li>• Foto do documento</li>
                <li>• Selfie para verificação facial</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Pessoas Jurídicas</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Contrato social</li>
                <li>• CNPJ</li>
                <li>• Documentos dos sócios</li>
                <li>• Comprovante de endereço</li>
                <li>• Certidões negativas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Verificação de Cliente</h2>
          <p className="text-gray-700 mb-4">
            O processo de verificação inclui:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Verificação de documentos autênticos</li>
            <li>Confirmação de dados pessoais</li>
            <li>Verificação de listas de restrição</li>
            <li>Análise de risco do cliente</li>
            <li>Monitoramento de PEPs (Pessoas Expostas Politicamente)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Classificação de Risco</h2>
          <p className="text-gray-700 mb-4">
            Classificamos nossos clientes em três níveis de risco:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Baixo Risco</h3>
              <p className="text-sm text-green-700">Clientes com perfil padrão e histórico limpo</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">Médio Risco</h3>
              <p className="text-sm text-yellow-700">Clientes com características que requerem atenção adicional</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Alto Risco</h3>
              <p className="text-sm text-red-700">Clientes que requerem monitoramento intensivo</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Monitoramento de Transações</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800">
                  <strong>Monitoramento:</strong> Todas as transações são monitoradas 24/7 por sistemas automatizados.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Monitoramos continuamente as transações para identificar:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Operações acima de limites estabelecidos</li>
            <li>Padrões de transação suspeitos</li>
            <li>Múltiplas transações pequenas (smurfing)</li>
            <li>Transações com países de alto risco</li>
            <li>Operações incompatíveis com o perfil do cliente</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Relatório de Operações Suspeitas</h2>
          <p className="text-gray-700 mb-4">
            Quando identificamos operações suspeitas, seguimos o seguinte protocolo:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Análise detalhada da operação</li>
            <li>Coleta de informações adicionais</li>
            <li>Documentação completa do caso</li>
            <li>Comunicação ao COAF quando necessário</li>
            <li>Manutenção de registros por 5 anos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Treinamento da Equipe</h2>
          <p className="text-gray-700 mb-4">
            Nossa equipe recebe treinamento regular sobre:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Legislação de PLD/CFT</li>
            <li>Procedimentos de KYC</li>
            <li>Identificação de operações suspeitas</li>
            <li>Atualizações regulamentares</li>
            <li>Melhores práticas do setor</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Confidencialidade</h2>
          <p className="text-gray-700 mb-4">
            Todas as informações coletadas para fins de KYC e PLD são tratadas com máxima confidencialidade:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Acesso restrito a pessoal autorizado</li>
            <li>Criptografia de dados sensíveis</li>
            <li>Armazenamento seguro</li>
            <li>Compartilhamento apenas quando exigido por lei</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Conformidade Regulatória</h2>
          <p className="text-gray-700 mb-4">
            Cumprimos rigorosamente as seguintes regulamentações:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Lei nº 9.613/98 (Lei de Lavagem de Dinheiro)</li>
            <li>Resoluções do Banco Central</li>
            <li>Orientações do COAF</li>
            <li>Normas internacionais de PLD/CFT</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Auditoria e Revisão</h2>
          <p className="text-gray-700 mb-4">
            Nossa política de KYC e PLD é regularmente:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Auditada por equipe interna</li>
            <li>Revisada por consultores externos</li>
            <li>Atualizada conforme mudanças regulamentares</li>
            <li>Testada através de simulações</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contato</h2>
          <p className="text-gray-700 mb-4">
            Para questões sobre nossa política de KYC e PLD:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700"><strong>Email:</strong> compliance@debita.ai</p>
            <p className="text-gray-700"><strong>Telefone:</strong> +55 11 5241-4928</p>
            <p className="text-gray-700"><strong>Endereço:</strong> Uruçuí, PI, Brasil</p>
          </div>
        </section>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Última atualização: Janeiro 2025</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 