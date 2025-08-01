"use client";

import { motion } from "framer-motion";
import { Shield, Calendar, AlertCircle, Lock, Eye, Key } from "lucide-react";

export default function PoliticaSeguranca() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-[#006178] rounded-xl">
          <Shield className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Política de Segurança da Informação</h1>
          <p className="text-gray-600">Última atualização: Janeiro 2025</p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                <strong>Importante:</strong> Esta política estabelece nossas práticas de segurança da informação 
                para proteger dados e sistemas da plataforma Debita.aí.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Compromisso com a Segurança</h2>
          <p className="text-gray-700 mb-4">
            A Debita.aí está comprometida em proteger a confidencialidade, integridade e disponibilidade 
            de todas as informações e sistemas sob nossa responsabilidade.
          </p>
          <p className="text-gray-700">
            Esta política estabelece os padrões e procedimentos de segurança que seguimos para garantir 
            a proteção adequada de dados e sistemas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Princípios de Segurança</h2>
          <p className="text-gray-700 mb-4">
            Nossa política de segurança baseia-se nos seguintes princípios:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="h-5 w-5 text-[#006178]" />
                <h3 className="font-semibold text-gray-900">Confidencialidade</h3>
              </div>
              <p className="text-sm text-gray-700">Proteção contra acesso não autorizado</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="h-5 w-5 text-[#006178]" />
                <h3 className="font-semibold text-gray-900">Integridade</h3>
              </div>
              <p className="text-sm text-gray-700">Garantia de precisão e completude</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Key className="h-5 w-5 text-[#006178]" />
                <h3 className="font-semibold text-gray-900">Disponibilidade</h3>
              </div>
              <p className="text-sm text-gray-700">Acesso quando necessário</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Controles de Acesso</h2>
          <p className="text-gray-700 mb-4">
            Implementamos controles rigorosos de acesso:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Autenticação multifator obrigatória</li>
            <li>Senhas fortes com rotação regular</li>
            <li>Controle de acesso baseado em função (RBAC)</li>
            <li>Monitoramento de sessões ativas</li>
            <li>Bloqueio automático após tentativas falhadas</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Criptografia de Dados</h2>
          <p className="text-gray-700 mb-4">
            Todos os dados sensíveis são protegidos com criptografia:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Dados em Trânsito</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• TLS 1.3 para comunicações</li>
                <li>• Certificados SSL válidos</li>
                <li>• Criptografia de API</li>
                <li>• Proteção contra interceptação</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Dados em Repouso</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Criptografia AES-256</li>
                <li>• Chaves gerenciadas por HSM</li>
                <li>• Backup criptografado</li>
                <li>• Armazenamento seguro</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Segurança de Infraestrutura</h2>
          <p className="text-gray-700 mb-4">
            Nossa infraestrutura é protegida com:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Firewalls de próxima geração</li>
            <li>Sistemas de detecção de intrusão (IDS/IPS)</li>
            <li>Monitoramento 24/7 de segurança</li>
            <li>Backup redundante e geograficamente distribuído</li>
            <li>Recuperação de desastres testada regularmente</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Desenvolvimento Seguro</h2>
          <p className="text-gray-700 mb-4">
            Seguimos práticas de desenvolvimento seguro:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Revisão de código de segurança</li>
            <li>Testes de penetração regulares</li>
            <li>Análise estática de código</li>
            <li>Treinamento de desenvolvedores em segurança</li>
            <li>Conformidade com OWASP Top 10</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Monitoramento e Detecção</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800">
                  <strong>Monitoramento:</strong> Sistemas monitorados 24/7 para detectar ameaças em tempo real.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Implementamos sistemas avançados de monitoramento:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>SIEM (Security Information and Event Management)</li>
            <li>Análise de comportamento de usuários</li>
            <li>Detecção de anomalias em tempo real</li>
            <li>Alertas automáticos para equipe de segurança</li>
            <li>Logs centralizados e protegidos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Resposta a Incidentes</h2>
          <p className="text-gray-700 mb-4">
            Possuímos um plano robusto de resposta a incidentes:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Equipe dedicada de resposta a incidentes</li>
            <li>Procedimentos documentados e testados</li>
            <li>Comunicação transparente com clientes</li>
            <li>Análise pós-incidente (post-mortem)</li>
            <li>Melhoria contínua dos processos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Conformidade e Certificações</h2>
          <p className="text-gray-700 mb-4">
            Mantemos conformidade com padrões internacionais:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>ISO 27001 (Sistema de Gestão de Segurança da Informação)</li>
            <li>PCI DSS (para processamento de pagamentos)</li>
            <li>LGPD (Lei Geral de Proteção de Dados)</li>
            <li>Auditorias externas regulares</li>
            <li>Certificações de segurança</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Treinamento e Conscientização</h2>
          <p className="text-gray-700 mb-4">
            Nossa equipe recebe treinamento regular em segurança:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Treinamento inicial de segurança para novos funcionários</li>
            <li>Atualizações regulares sobre ameaças</li>
            <li>Simulações de phishing</li>
            <li>Política de mesa limpa</li>
            <li>Procedimentos de trabalho remoto seguro</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Fornecedores e Terceiros</h2>
          <p className="text-gray-700 mb-4">
            Avaliamos rigorosamente a segurança de fornecedores:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Due diligence de segurança</li>
            <li>Acordos de confidencialidade</li>
            <li>Monitoramento contínuo de fornecedores</li>
            <li>Auditorias de segurança de terceiros</li>
            <li>Contratos com cláusulas de segurança</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contato</h2>
          <p className="text-gray-700 mb-4">
            Para questões sobre segurança da informação:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700"><strong>Email:</strong> security@debita.ai</p>
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