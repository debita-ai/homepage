"use client";

import { motion } from "framer-motion";
import { FileText, Calendar, AlertCircle, Code } from "lucide-react";

export default function TermosDeSoftware() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-[#006178] rounded-xl">
          <Code className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Termos de Software</h1>
          <p className="text-gray-600">Última atualização: Janeiro 2025</p>
        </div>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <p className="text-sm text-blue-800">
                <strong>Importante:</strong> Estes termos regem o uso do software e aplicações da plataforma Debita.aí. 
                Leia atentamente antes de utilizar nossos serviços.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Licença de Uso</h2>
          <p className="text-gray-700 mb-4">
            A Debita.aí concede a você uma licença limitada, não exclusiva, não transferível e revogável para utilizar 
            o software da plataforma conforme estes termos.
          </p>
          <p className="text-gray-700">
            Esta licença é válida apenas para o uso autorizado da plataforma e não inclui direitos de propriedade intelectual.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Propriedade Intelectual</h2>
          <p className="text-gray-700 mb-4">
            Todo o software, código, interfaces, designs e conteúdo da plataforma são propriedade da Debita.aí ou de seus licenciadores.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Você não pode copiar, modificar ou distribuir o software</li>
            <li>É proibido engenharia reversa ou descompilação</li>
            <li>Não é permitido criar trabalhos derivados</li>
            <li>Marca registrada e direitos autorais são protegidos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Atualizações e Manutenção</h2>
          <p className="text-gray-700 mb-4">
            A Debita.aí pode fornecer atualizações do software para:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Corrigir bugs e problemas de segurança</li>
            <li>Adicionar novas funcionalidades</li>
            <li>Melhorar a performance e estabilidade</li>
            <li>Garantir conformidade com regulamentações</li>
          </ul>
          <p className="text-gray-700 mt-4">
            As atualizações podem ser automáticas ou requerer sua ação. Recomendamos manter o software sempre atualizado.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Compatibilidade</h2>
          <p className="text-gray-700 mb-4">
            O software da plataforma é compatível com:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Navegadores</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Chrome (versão 90+)</li>
                <li>• Firefox (versão 88+)</li>
                <li>• Safari (versão 14+)</li>
                <li>• Edge (versão 90+)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Dispositivos</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Desktop e laptops</li>
                <li>• Tablets</li>
                <li>• Smartphones</li>
                <li>• Conexão estável com internet</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitações Técnicas</h2>
          <p className="text-gray-700 mb-4">
            O software pode ter limitações técnicas, incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Dependência de conexão com internet</li>
            <li>Compatibilidade com sistemas operacionais específicos</li>
            <li>Limitações de hardware e performance</li>
            <li>Restrições de segurança e firewall</li>
            <li>Disponibilidade de funcionalidades por região</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Segurança do Software</h2>
          <p className="text-gray-700 mb-4">
            Implementamos medidas de segurança robustas para proteger o software:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Criptografia de dados em trânsito e em repouso</li>
            <li>Autenticação e autorização seguras</li>
            <li>Monitoramento contínuo de segurança</li>
            <li>Atualizações regulares de segurança</li>
            <li>Conformidade com padrões de segurança</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Uso Aceitável</h2>
          <p className="text-gray-700 mb-4">
            Você concorda em utilizar o software apenas para propósitos legais e autorizados:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Não tentar contornar medidas de segurança</li>
            <li>Não utilizar para atividades ilegais</li>
            <li>Não interferir no funcionamento do sistema</li>
            <li>Não tentar acessar dados não autorizados</li>
            <li>Respeitar direitos de propriedade intelectual</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Suporte Técnico</h2>
          <p className="text-gray-700 mb-4">
            Oferecemos suporte técnico para o software através de:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <ul className="text-gray-700 space-y-2">
              <li>• Email: suporte@debita.ai</li>
              <li>• Telefone: +55 11 5241-4928</li>
              <li>• Chat online na plataforma</li>
              <li>• Base de conhecimento e FAQs</li>
            </ul>
          </div>
          <p className="text-gray-700">
            O suporte está disponível em horário comercial (Seg-Sex: 9h às 18h).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Garantias</h2>
          <p className="text-gray-700 mb-4">
            O software é fornecido "como está" e "conforme disponível". Não garantimos que:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>O software estará livre de erros ou bugs</li>
            <li>O software atenderá a todos os seus requisitos</li>
            <li>O funcionamento será ininterrupto</li>
            <li>Defeitos serão corrigidos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Limitação de Responsabilidade</h2>
          <p className="text-gray-700 mb-4">
            Em nenhuma circunstância a Debita.aí será responsável por:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Danos indiretos ou consequenciais</li>
            <li>Perda de dados ou informações</li>
            <li>Interrupção de negócios</li>
            <li>Danos causados por uso inadequado</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Rescisão</h2>
          <p className="text-gray-700 mb-4">
            Podemos rescindir sua licença de uso do software a qualquer momento se você:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Violar estes termos de software</li>
            <li>Utilizar o software para fins ilegais</li>
            <li>Tentar contornar medidas de segurança</li>
            <li>Não cumprir com obrigações de pagamento</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contato</h2>
          <p className="text-gray-700 mb-4">
            Para questões sobre o software, entre em contato:
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