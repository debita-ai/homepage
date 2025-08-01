"use client";

import { motion } from "framer-motion";
import { Eye, Calendar, AlertCircle, User, Lock, Shield } from "lucide-react";

export default function PoliticaLgpd() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-[#006178] rounded-xl">
          <Eye className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Política de LGPD/Privacidade</h1>
          <p className="text-gray-600">Última atualização: Janeiro 2025</p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                <strong>Importante:</strong> Esta política descreve como coletamos, usamos e protegemos seus dados pessoais 
                em conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Compromisso com a Privacidade</h2>
          <p className="text-gray-700 mb-4">
            A Debita.aí está comprometida em proteger a privacidade e os dados pessoais de nossos usuários. 
            Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
          </p>
          <p className="text-gray-700">
            Estamos em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018) e demais 
            regulamentações aplicáveis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Dados que Coletamos</h2>
          <p className="text-gray-700 mb-4">
            Coletamos os seguintes tipos de dados pessoais:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Dados de Identificação</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Nome completo</li>
                <li>• CPF/CNPJ</li>
                <li>• Data de nascimento</li>
                <li>• RG ou documento equivalente</li>
                <li>• Endereço completo</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Dados de Contato</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Email</li>
                <li>• Telefone</li>
                <li>• WhatsApp</li>
                <li>• Endereço de correspondência</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Dados Financeiros</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Informações bancárias</li>
                <li>• Histórico de transações</li>
                <li>• Dados de pagamento</li>
                <li>• Informações de crédito</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Dados de Uso</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Logs de acesso</li>
                <li>• Preferências de uso</li>
                <li>• Dados de navegação</li>
                <li>• Informações do dispositivo</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Finalidades do Tratamento</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos seus dados pessoais para as seguintes finalidades:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Fornecer e melhorar nossos serviços</li>
            <li>Processar pagamentos e transações</li>
            <li>Verificar sua identidade e prevenir fraudes</li>
            <li>Cumprir obrigações legais e regulamentares</li>
            <li>Enviar comunicações importantes sobre nossos serviços</li>
            <li>Fornecer suporte ao cliente</li>
            <li>Realizar análises e pesquisas para melhorar nossos serviços</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base Legal</h2>
          <p className="text-gray-700 mb-4">
            O tratamento de seus dados pessoais é baseado nas seguintes hipóteses legais:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Execução de Contrato</h3>
              <p className="text-sm text-gray-700">Para fornecer os serviços contratados</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Interesse Legítimo</h3>
              <p className="text-sm text-gray-700">Para melhorar nossos serviços e prevenir fraudes</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Cumprimento Legal</h3>
              <p className="text-sm text-gray-700">Para atender obrigações regulamentares</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Consentimento</h3>
              <p className="text-sm text-gray-700">Quando expressamente autorizado</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartilhamento de Dados</h2>
          <p className="text-gray-700 mb-4">
            Podemos compartilhar seus dados pessoais nas seguintes situações:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Com prestadores de serviços que nos auxiliam na operação</li>
            <li>Com autoridades competentes quando exigido por lei</li>
            <li>Com parceiros de pagamento para processar transações</li>
            <li>Com empresas do grupo para fins administrativos</li>
            <li>Em caso de fusão, aquisição ou venda de ativos</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Sempre que compartilharmos dados, garantimos que os terceiros também cumpram padrões adequados de proteção.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Armazenamento e Segurança</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-yellow-500 mt-0.5" />
              <div>
                <p className="text-sm text-yellow-800">
                  <strong>Segurança:</strong> Implementamos medidas técnicas e organizacionais robustas para proteger seus dados.
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Seus dados são protegidos através de:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Controles de acesso rigorosos</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Backup seguro e redundante</li>
            <li>Treinamento regular da equipe em proteção de dados</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Retenção de Dados</h2>
          <p className="text-gray-700 mb-4">
            Mantemos seus dados pessoais pelo tempo necessário para:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Fornecer nossos serviços</li>
            <li>Cumprir obrigações legais e regulamentares</li>
            <li>Resolver disputas</li>
            <li>Garantir a segurança e integridade dos dados</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Após o período de retenção, os dados são excluídos ou anonimizados de forma segura.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Seus Direitos</h2>
          <p className="text-gray-700 mb-4">
            Conforme a LGPD, você possui os seguintes direitos:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Direitos de Acesso</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Confirmar a existência de tratamento</li>
                <li>• Acessar seus dados pessoais</li>
                <li>• Corrigir dados incompletos ou desatualizados</li>
                <li>• Anonimizar ou bloquear dados desnecessários</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Direitos de Controle</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Revogar consentimento</li>
                <li>• Portabilidade dos dados</li>
                <li>• Exclusão de dados</li>
                <li>• Oposição ao tratamento</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies e Tecnologias Similares</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos cookies e tecnologias similares para:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Melhorar a experiência do usuário</li>
            <li>Analisar o uso da plataforma</li>
            <li>Personalizar conteúdo e anúncios</li>
            <li>Garantir a segurança da plataforma</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Você pode gerenciar suas preferências de cookies através das configurações do navegador.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Transferências Internacionais</h2>
          <p className="text-gray-700 mb-4">
            Seus dados podem ser transferidos para outros países quando:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Utilizamos serviços de nuvem internacionais</li>
            <li>Trabalhamos com parceiros globais</li>
            <li>É necessário para fornecer nossos serviços</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Sempre garantimos que as transferências internacionais atendam aos padrões adequados de proteção.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Dados de Menores</h2>
          <p className="text-gray-700 mb-4">
            Nossos serviços não são destinados a menores de 18 anos. Não coletamos intencionalmente dados pessoais 
            de menores sem o consentimento dos pais ou responsáveis legais.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Alterações na Política</h2>
          <p className="text-gray-700 mb-4">
            Podemos atualizar esta política periodicamente. As alterações serão comunicadas através de:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Notificação na plataforma</li>
            <li>Email para usuários registrados</li>
            <li>Atualização da data de "última modificação"</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contato</h2>
          <p className="text-gray-700 mb-4">
            Para exercer seus direitos ou esclarecer dúvidas sobre esta política:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700"><strong>Encarregado de Dados (DPO):</strong> dpo@debita.ai</p>
            <p className="text-gray-700"><strong>Email:</strong> privacidade@debita.ai</p>
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