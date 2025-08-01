"use client";

import { motion } from "framer-motion";
import { Scale, Calendar, AlertCircle, Shield, UserCheck, Lock } from "lucide-react";

export default function PoliticaPldcft() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-[#006178] rounded-xl">
          <Scale className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Política de PLDCFT</h1>
          <p className="text-gray-600">Última atualização: Janeiro 2025</p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                <strong>Importante:</strong> Esta política estabelece nossas práticas de Prevenção à Lavagem de Dinheiro 
                e Combate ao Financiamento do Terrorismo (PLDCFT) em conformidade com a legislação brasileira.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introdução</h2>
          <p className="text-gray-700 mb-4">
            A Debita.aí está comprometida em prevenir a lavagem de dinheiro e o financiamento do terrorismo, 
            cumprindo rigorosamente as regulamentações brasileiras e internacionais aplicáveis.
          </p>
          <p className="text-gray-700">
            Esta política estabelece os procedimentos de PLDCFT que aplicamos em todos os nossos serviços, 
            incluindo identificação de clientes, monitoramento de transações e relatório de operações suspeitas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Marco Legal</h2>
          <p className="text-gray-700 mb-4">
            Nossa política de PLDCFT baseia-se nas seguintes regulamentações:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Lei nº 9.613/98 (Lei de Lavagem de Dinheiro)</li>
            <li>Lei nº 13.260/16 (Lei Antiterrorismo)</li>
            <li>Resoluções do Banco Central do Brasil</li>
            <li>Orientações do COAF (Conselho de Controle de Atividades Financeiras)</li>
            <li>Recomendações do GAFI (Grupo de Ação Financeira Internacional)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Princípios Fundamentais</h2>
          <p className="text-gray-700 mb-4">
            Nossa política de PLDCFT baseia-se nos seguintes princípios:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Identificação</h3>
              <p className="text-sm text-gray-700">Conheça seu Cliente (KYC) rigoroso</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Monitoramento</h3>
              <p className="text-sm text-gray-700">Controle contínuo de transações</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Relatório</h3>
              <p className="text-sm text-gray-700">Comunicação de operações suspeitas</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Treinamento</h3>
              <p className="text-sm text-gray-700">Capacitação regular da equipe</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Identificação de Cliente</h2>
          <p className="text-gray-700 mb-4">
            Realizamos identificação rigorosa de todos os clientes:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Pessoas Físicas</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Documento de identidade</li>
                <li>• CPF</li>
                <li>• Comprovante de residência</li>
                <li>• Verificação facial</li>
                <li>• Análise de listas de restrição</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Pessoas Jurídicas</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Contrato social</li>
                <li>• CNPJ</li>
                <li>• Documentos dos sócios</li>
                <li>• Certidões negativas</li>
                <li>• Análise de estrutura societária</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Classificação de Risco</h2>
          <p className="text-gray-700 mb-4">
            Classificamos clientes em três níveis de risco:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-2">Baixo Risco</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Cliente padrão</li>
                <li>• Histórico limpo</li>
                <li>• Atividade conhecida</li>
                <li>• Monitoramento padrão</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-yellow-900 mb-2">Médio Risco</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Características especiais</li>
                <li>• Monitoramento intensivo</li>
                <li>• Verificações adicionais</li>
                <li>• Revisão periódica</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Alto Risco</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Monitoramento intensivo</li>
                <li>• Verificações frequentes</li>
                <li>• Limitações de transação</li>
                <li>• Relatórios especiais</li>
              </ul>
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
            Monitoramos continuamente para identificar:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Operações acima de limites estabelecidos</li>
            <li>Padrões de transação suspeitos</li>
            <li>Múltiplas transações pequenas (smurfing)</li>
            <li>Transações com países de alto risco</li>
            <li>Operações incompatíveis com o perfil do cliente</li>
            <li>Transações com PEPs (Pessoas Expostas Politicamente)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Operações Suspeitas</h2>
          <p className="text-gray-700 mb-4">
            Consideramos suspeitas as seguintes operações:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Operações Estruturadas</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Múltiplas transações pequenas</li>
                <li>• Fragmentação de valores</li>
                <li>• Uso de múltiplas contas</li>
                <li>• Padrões de evasão</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Operações Incomuns</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Valores incompatíveis com perfil</li>
                <li>• Frequência anormal</li>
                <li>• Destinatários suspeitos</li>
                <li>• Origem de fundos obscura</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Relatório de Operações Suspeitas</h2>
          <p className="text-gray-700 mb-4">
            Quando identificamos operações suspeitas, seguimos o protocolo:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Análise detalhada da operação</li>
            <li>Coleta de informações adicionais</li>
            <li>Documentação completa do caso</li>
            <li>Comunicação ao COAF quando necessário</li>
            <li>Manutenção de registros por 5 anos</li>
            <li>Monitoramento contínuo do cliente</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Pessoas Expostas Politicamente (PEPs)</h2>
          <p className="text-gray-700 mb-4">
            Implementamos procedimentos específicos para PEPs:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Identificação e classificação de PEPs</li>
            <li>Verificação de fontes de recursos</li>
            <li>Monitoramento intensivo de transações</li>
            <li>Aprovação de nível executivo</li>
            <li>Revisão periódica do relacionamento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Treinamento e Conscientização</h2>
          <p className="text-gray-700 mb-4">
            Nossa equipe recebe treinamento regular sobre:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Legislação de PLDCFT</li>
            <li>Procedimentos de identificação</li>
            <li>Identificação de operações suspeitas</li>
            <li>Atualizações regulamentares</li>
            <li>Melhores práticas do setor</li>
            <li>Simulações e casos práticos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Confidencialidade</h2>
          <p className="text-gray-700 mb-4">
            Todas as informações de PLDCFT são tratadas com máxima confidencialidade:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Acesso restrito a pessoal autorizado</li>
            <li>Criptografia de dados sensíveis</li>
            <li>Armazenamento seguro</li>
            <li>Compartilhamento apenas quando exigido por lei</li>
            <li>Proteção contra vazamentos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Auditoria e Revisão</h2>
          <p className="text-gray-700 mb-4">
            Nossa política de PLDCFT é regularmente:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Auditada por equipe interna</li>
            <li>Revisada por consultores externos</li>
            <li>Atualizada conforme mudanças regulamentares</li>
            <li>Testada através de simulações</li>
            <li>Avaliada quanto à eficácia</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Conformidade Internacional</h2>
          <p className="text-gray-700 mb-4">
            Mantemos conformidade com padrões internacionais:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Recomendações do GAFI</li>
            <li>Padrões do Banco Central</li>
            <li>Orientações do COAF</li>
            <li>Normas internacionais de PLDCFT</li>
            <li>Cooperação com autoridades internacionais</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contato</h2>
          <p className="text-gray-700 mb-4">
            Para questões sobre nossa política de PLDCFT:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700"><strong>Email:</strong> compliance@debita.ai</p>
            <p className="text-gray-700"><strong>Telefone:</strong> +55 11 5241-4928</p>
            <p className="text-gray-700"><strong>Endereço:</strong> Uruçuí, PI, Brasil</p>
            <p className="text-gray-700"><strong>COAF:</strong> www.coaf.fazenda.gov.br</p>
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