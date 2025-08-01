"use client";

import { motion } from "framer-motion";
import { FileText, Calendar, AlertCircle } from "lucide-react";

export default function TermosDeUso() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-[#006178] rounded-xl">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Termos de Uso</h1>
          <p className="text-gray-600">Última atualização: Janeiro 2025</p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                <strong>Importante:</strong> Ao utilizar nossa plataforma, você concorda com estes termos de uso. 
                Recomendamos a leitura completa antes de prosseguir.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
          <p className="text-gray-700 mb-4">
            Ao acessar e utilizar a plataforma Debita.aí, você concorda em cumprir e estar vinculado a estes Termos de Uso. 
            Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
          </p>
          <p className="text-gray-700">
            Estes termos constituem um acordo legal entre você e a DEBITA.AI GESTAO FINANCEIRA E MEIOS DE PAGAMENTO LTDA.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrição dos Serviços</h2>
          <p className="text-gray-700 mb-4">
            A plataforma Debita.aí oferece serviços de gestão financeira e cobranças digitais, incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Gestão de recebíveis e cobranças</li>
            <li>Processamento de pagamentos digitais</li>
            <li>Relatórios financeiros e analytics</li>
            <li>Integração com sistemas de pagamento</li>
            <li>Ferramentas de gestão de clientes</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Elegibilidade</h2>
          <p className="text-gray-700 mb-4">
            Para utilizar nossos serviços, você deve:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Ter pelo menos 18 anos de idade</li>
            <li>Ter capacidade legal para celebrar contratos</li>
            <li>Fornecer informações verdadeiras e precisas</li>
            <li>Comply com todas as leis e regulamentos aplicáveis</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Conta do Usuário</h2>
          <p className="text-gray-700 mb-4">
            Para acessar determinados recursos da plataforma, você pode precisar criar uma conta. Você é responsável por:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Manter a confidencialidade de suas credenciais de login</li>
            <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
            <li>Manter suas informações de conta atualizadas</li>
            <li>Ser responsável por todas as atividades em sua conta</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Uso Aceitável</h2>
          <p className="text-gray-700 mb-4">
            Você concorda em utilizar a plataforma apenas para propósitos legais e de acordo com estes termos. 
            Você não deve:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Utilizar a plataforma para atividades ilegais</li>
            <li>Tentar acessar sistemas ou dados não autorizados</li>
            <li>Interferir no funcionamento da plataforma</li>
            <li>Transmitir vírus ou código malicioso</li>
            <li>Violar direitos de propriedade intelectual</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacidade e Dados</h2>
          <p className="text-gray-700 mb-4">
            Sua privacidade é importante para nós. O uso de suas informações pessoais é regido por nossa 
            <a href="/legal/politica-lgpd" className="text-[#006178] hover:underline"> Política de Privacidade</a>.
          </p>
          <p className="text-gray-700">
            Ao utilizar nossos serviços, você concorda com a coleta e uso de informações conforme descrito em nossa política de privacidade.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Propriedade Intelectual</h2>
          <p className="text-gray-700 mb-4">
            A plataforma e todo o conteúdo relacionado são protegidos por direitos autorais, marcas registradas e outras leis de propriedade intelectual.
          </p>
          <p className="text-gray-700">
            Você não pode copiar, modificar, distribuir ou criar trabalhos derivados sem nossa permissão expressa.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitação de Responsabilidade</h2>
          <p className="text-gray-700 mb-4">
            Em nenhuma circunstância a Debita.aí será responsável por danos indiretos, incidentais, especiais ou consequenciais 
            decorrentes do uso de nossos serviços.
          </p>
          <p className="text-gray-700">
            Nossa responsabilidade total será limitada ao valor pago por você pelos serviços nos últimos 12 meses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Modificações dos Termos</h2>
          <p className="text-gray-700 mb-4">
            Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entrarão em vigor 
            imediatamente após a publicação na plataforma.
          </p>
          <p className="text-gray-700">
            Recomendamos que você revise periodicamente estes termos para estar ciente de quaisquer alterações.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Lei Aplicável</h2>
          <p className="text-gray-700">
            Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes 
            da cidade de Uruçuí, Piauí, Brasil.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contato</h2>
          <p className="text-gray-700 mb-4">
            Se você tiver dúvidas sobre estes termos, entre em contato conosco:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700"><strong>Email:</strong> suporte@debita.ai</p>
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