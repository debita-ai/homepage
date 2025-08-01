"use client";

import { motion } from "framer-motion";
import { UserCheck, Calendar, AlertCircle, Shield } from "lucide-react";

export default function TermosDeConta() {
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
          <h1 className="text-3xl font-bold text-gray-900">Termos de Conta</h1>
          <p className="text-gray-600">Última atualização: Janeiro 2025</p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                <strong>Importante:</strong> Estes termos regem especificamente a criação e uso de contas na plataforma Debita.aí. 
                Leia atentamente antes de criar sua conta.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Criação de Conta</h2>
          <p className="text-gray-700 mb-4">
            Para acessar os serviços da plataforma Debita.aí, você deve criar uma conta válida. Durante o processo de registro, você deve:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Fornecer informações verdadeiras, precisas e completas</li>
            <li>Manter e atualizar suas informações conforme necessário</li>
            <li>Ser responsável pela segurança de suas credenciais de acesso</li>
            <li>Notificar imediatamente sobre qualquer uso não autorizado</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Tipos de Conta</h2>
          <p className="text-gray-700 mb-4">
            A plataforma oferece diferentes tipos de conta conforme suas necessidades:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Conta Individual</h3>
              <p className="text-sm text-gray-700">Para pessoas físicas que desejam gerenciar suas finanças pessoais</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Conta Empresarial</h3>
              <p className="text-sm text-gray-700">Para empresas e organizações que precisam de gestão financeira corporativa</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Verificação de Identidade</h2>
          <p className="text-gray-700 mb-4">
            Para garantir a segurança e conformidade regulatória, podemos solicitar documentos de verificação:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Documento de identidade válido (RG, CPF, CNH)</li>
            <li>Comprovante de residência</li>
            <li>Para contas empresariais: documentos da empresa</li>
            <li>Outros documentos conforme exigido por regulamentações</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Segurança da Conta</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800">
                  <strong>Segurança:</strong> Você é responsável por manter a segurança de sua conta e senha.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Medidas de segurança recomendadas:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Utilizar senhas fortes e únicas</li>
            <li>Ativar autenticação de dois fatores quando disponível</li>
            <li>Não compartilhar credenciais com terceiros</li>
            <li>Fazer logout em dispositivos compartilhados</li>
            <li>Monitorar regularmente as atividades da conta</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Uso da Conta</h2>
          <p className="text-gray-700 mb-4">
            Sua conta deve ser utilizada apenas para:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Atividades legais e legítimas</li>
            <li>Gestão de suas próprias finanças ou da sua empresa</li>
            <li>Processamento de transações autorizadas</li>
            <li>Compliance com leis e regulamentos aplicáveis</li>
          </ul>
          <p className="text-gray-700 mt-4">
            É proibido utilizar a conta para atividades ilegais, fraudulentas ou que violem estes termos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitações da Conta</h2>
          <p className="text-gray-700 mb-4">
            Podemos impor limitações em sua conta, incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Limites de transação diários/mensais</li>
            <li>Restrições temporárias por segurança</li>
            <li>Limitações baseadas no tipo de conta</li>
            <li>Restrições conforme regulamentações aplicáveis</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Suspensão e Encerramento</h2>
          <p className="text-gray-700 mb-4">
            Podemos suspender ou encerrar sua conta nas seguintes situações:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Violation dos termos de uso</li>
            <li>Atividades fraudulentas ou suspeitas</li>
            <li>Fornecimento de informações falsas</li>
            <li>Uso não autorizado da plataforma</li>
            <li>Requisito de autoridades competentes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Dados da Conta</h2>
          <p className="text-gray-700 mb-4">
            Ao criar uma conta, você concorda que podemos:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Coletar e processar seus dados pessoais</li>
            <li>Compartilhar informações conforme exigido por lei</li>
            <li>Utilizar dados para melhorar nossos serviços</li>
            <li>Manter registros conforme exigido por regulamentações</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Para mais informações sobre o uso de seus dados, consulte nossa 
            <a href="/legal/politica-lgpd" className="text-[#006178] hover:underline"> Política de Privacidade</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Responsabilidades</h2>
          <p className="text-gray-700 mb-4">
            Você é responsável por:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Todas as atividades realizadas em sua conta</li>
            <li>Manter informações atualizadas e precisas</li>
            <li>Compliance com leis e regulamentos aplicáveis</li>
            <li>Notificar sobre mudanças relevantes</li>
            <li>Proteger suas credenciais de acesso</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modificações</h2>
          <p className="text-gray-700 mb-4">
            Reservamo-nos o direito de modificar estes termos de conta a qualquer momento. 
            As modificações serão comunicadas através da plataforma ou email.
          </p>
          <p className="text-gray-700">
            O uso continuado da conta após as modificações constitui aceitação dos novos termos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contato</h2>
          <p className="text-gray-700 mb-4">
            Para questões relacionadas à sua conta, entre em contato:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700"><strong>Email:</strong> suporte@debita.ai</p>
            <p className="text-gray-700"><strong>Telefone:</strong> +55 11 5241-4928</p>
            <p className="text-gray-700"><strong>Horário:</strong> Seg-Sex: 9h às 18h</p>
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