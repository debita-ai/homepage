"use client";

import { motion } from "framer-motion";
// Using site favicon icons instead of external icons

export default function TermosDeConta() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-8 prose prose-slate prose-lg"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          TERMO DE ABERTURA, MANUTENÇÃO E ENCERRAMENTO DE CONTA DE PAGAMENTO DE PESSOA JURÍDICA
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <img src="/icons/16 x 16.ico" alt="Document" className="h-4 w-4" />
          <span>Versão atualizada em 20 de abril de 2025</span>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-2">
          <img src="/icons/24 x 24.ico" alt="Alert" className="h-5 w-5 mt-0.5" />
          <div className="text-sm text-orange-700">
            <p className="font-medium mb-1">Documento Legal - Conta de Pagamento</p>
            <p>Este documento estabelece os termos para abertura, manutenção e encerramento de conta de pagamento na Debita.ai.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Pelo presente Termo, fazem entre si:
        </p>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>DEBITA.AI GESTÃO FINANCEIRA E MEIOS DE PAGAMENTO LTDA.</strong>, pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº 46.379.233/0001-48, com sede em Uruçuí, PI, Brasil, doravante denominada <strong>"DEBITA.AI"</strong>; e
        </p>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          De outro lado, o <strong>CLIENTE</strong>, definido pela pessoa jurídica contratante de serviços da DEBITA.AI, que aceita os termos e condições para a abertura, manutenção e encerramento de conta de pagamento (<strong>"Termo de Abertura de Conta"</strong>), a seguir estipulados:
        </p>
      </div>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CLÁUSULA PRIMEIRA - DEFINIÇÕES</h2>
        
        <p className="text-gray-700 mb-4">
          1.1 Os termos a seguir, no singular ou plural, quando utilizados no âmbito deste Termo terão os seguintes significados:
        </p>

        <div className="space-y-4">
          <div>
            <p className="text-gray-700">
              <strong>1.1.1 Cliente:</strong> A pessoa jurídica que celebra contrato com a DEBITA.AI e/ou o titular de conta de pagamento, abrangendo aquela que adquire ou utiliza os serviços, softwares ou soluções fornecidas. O termo "Cliente" inclui, conforme o contexto, o contratante direto ou qualquer outro contratante autorizado.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.2 Conta de pagamento:</strong> Conta de pagamento pré-paga vinculada ao Cliente e mantida junto à Debita.ai Gestão Financeira e Meios de Pagamento Ltda. Destina-se à realização de operações financeiras, como transferências, depósitos e pagamentos de contas, bem como ao recebimento de valores financeiros, conforme regulamentação aplicável.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.3 Contrato:</strong> Documento jurídico vinculante que estabelece os direitos, obrigações, termos e condições aplicáveis à prestação dos serviços oferecidos pela DEBITA.AI.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.4 Gateway de Pagamentos:</strong> Infraestrutura tecnológica que permite o processamento seguro de transações financeiras entre pagadores e recebedores, incluindo PIX, cartões de crédito e débito (em breve).
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.5 Link de Pagamento:</strong> Ferramenta digital que permite ao Cliente criar URLs personalizadas para recebimento de pagamentos, facilitando transações comerciais online.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.6 PIX:</strong> Sistema de pagamentos instantâneos instituído pelo Banco Central, que regula e facilita serviços de pagamento relacionados a transações instantâneas, sendo também a própria transação de pagamento instantâneo realizada dentro desse arranjo.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.7 Proposta Comercial:</strong> Documento emitido pela DEBITA.AI, contendo os detalhes dos serviços e/ou produtos oferecidos, incluindo preços, condições de pagamento, prazos e outras disposições aplicáveis, servindo como base para a formalização do Contrato.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.8 QR Code:</strong> Código de barras bidimensional utilizado para simplificar transações via PIX e outros meios de pagamento.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.9 Serviços:</strong> Atividades, operações e funcionalidades disponibilizadas pela DEBITA.AI ao Cliente, incluindo gateway de pagamentos, criação de links de pagamento, emissão de cobranças e relatórios gerenciais.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.10 Software/Plataforma:</strong> Conjunto de programas e aplicativos licenciados pela DEBITA.AI ao Cliente, incluindo, mas não se limitando, às atualizações, melhorias e demais funcionalidades associadas. Para fins deste Termo, o termo "Software" inclui plataformas de gestão financeira, bem como Interface de Programação de Aplicações ("API"), ou quaisquer soluções tecnológicas correlatas disponibilizadas pela DEBITA.AI.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CLÁUSULA SEGUNDA - OBJETO</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            2.1 Este Termo tem como objeto regular a abertura, manutenção e encerramento de conta de pagamento junto à DEBITA.AI para utilização dos serviços de gateway de pagamentos.
          </p>

          <p className="text-gray-700">
            2.2 A Tabela de Serviços e Tarifas é parte integrante e indissociável deste Termo.
          </p>

          <p className="text-gray-700">
            2.3 Condições especiais de benefícios, premiações e bonificações serão tratados em documento independente.
          </p>

          <p className="text-gray-700">
            2.4 A adesão a novos serviços ou produtos, não incluídos na Proposta Comercial, poderá ocorrer mediante manifestação do CLIENTE e aceitação das condições.
          </p>

          <p className="text-gray-700">
            2.5 A DEBITA.AI poderá adicionar novos serviços e produtos, ou suspender a oferta de algum serviço ou produto, a qualquer momento, sem que essa suspensão ou descontinuação de qualquer serviço ou produto gere qualquer direito à indenização para o CLIENTE.
          </p>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CLÁUSULA TERCEIRA - USO DA CONTA DE PAGAMENTO</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            3.1 A conta de pagamento é de titularidade exclusiva do CLIENTE.
          </p>

          <div>
            <p className="text-gray-700 mb-2">
              3.2 As funcionalidades da conta constarão descritas na Proposta Comercial, incluindo:
            </p>
            <ul className="list-disc ml-8 space-y-1">
              <li className="text-gray-700">3.2.1 Recebimento de pagamentos via PIX, cartões de crédito e débito (em breve)</li>
              <li className="text-gray-700">3.2.2 Criação e gestão de links de pagamento</li>
              <li className="text-gray-700">3.2.3 Emissão de cobranças recorrentes e avulsas</li>
              <li className="text-gray-700">3.2.4 Acesso a relatórios gerenciais e de vendas</li>
              <li className="text-gray-700">3.2.5 Integração via API com sistemas do Cliente</li>
            </ul>
          </div>

          <p className="text-gray-700">
            3.3 Cada conta de pagamento terá um número de identificação que será informado ao CLIENTE no momento da abertura.
          </p>

          <p className="text-gray-700">
            3.4 O CLIENTE deverá gerenciar os perfis de usuários que terão acesso à conta de pagamento. O perfil de usuário denominado de "Administrador" poderá movimentar recursos e gerenciar outros perfis de usuários.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <img src="/icons/24 x 24.ico" alt="Security" className="h-5 w-5 mt-0.5" />
              <div className="text-sm text-yellow-700">
                <p className="font-medium mb-1">Importante - Segurança da Conta</p>
                <p>O Cliente é responsável pela segurança das credenciais e deve notificar imediatamente qualquer uso suspeito. A DEBITA.AI poderá bloquear a conta em caso de suspeitas de irregularidades para proteção dos recursos.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-700">
            3.5 O uso e a movimentação da conta será por meio do Software/Plataforma da DEBITA.AI.
          </p>

          <p className="text-gray-700">
            3.6 A DEBITA.AI viabiliza ao CLIENTE credenciais de acesso à API para a integração da conta junto a outros softwares relacionados ao CLIENTE. Estas credenciais possuem privilégio semelhante ao perfil de usuário Administrador, ou seja, pode movimentar os recursos da conta, de modo que ressalta a importância da verificação específica do CLIENTE nesta utilização.
          </p>

          <p className="text-gray-700">
            3.7 Os recursos depositados na conta de pagamento ficarão permanentemente disponíveis ao CLIENTE para movimentação a qualquer momento, observados os prazos, salvo em caso de bloqueios por determinação judicial ou em razão de descumprimento deste Termo que impacte em obrigações regulatórias da DEBITA.AI ou legislação aplicável.
          </p>

          <div>
            <p className="text-gray-700 mb-2">
              3.8 A DEBITA.AI poderá, sem que incorra em penalidades, justificado pelo cumprimento de suas obrigações regulatórias, a qualquer momento, bloquear a conta de pagamento ou saldo caso suspeite de:
            </p>
            <ul className="list-disc ml-8 space-y-1">
              <li className="text-gray-700">3.8.1 Inconsistências cadastrais</li>
              <li className="text-gray-700">3.8.2 Crimes financeiros ou lavagem de dinheiro</li>
              <li className="text-gray-700">3.8.3 Operação fora do padrão de uso declarado</li>
              <li className="text-gray-700">3.8.4 Utilização para atividades restritas (criptomoedas, apostas, câmbio)</li>
              <li className="text-gray-700">3.8.5 Utilização indevida em desacordo com este Termo ou legislação</li>
            </ul>
            <p className="text-gray-700 mt-2">
              Nesta hipótese, caso seja averiguada a regularidade, a conta será imediatamente desbloqueada.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CLÁUSULA QUARTA - DADOS CADASTRAIS E KNOW YOUR CLIENT ("KYC")</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            4.1 Antes da utilização dos serviços e do estabelecimento de um relacionamento comercial entre as Partes, o CLIENTE deverá enviar todas as informações e documentação pertinente ao seu negócio.
          </p>

          <p className="text-gray-700">
            4.2 Ao completar o cadastro e enviar toda a documentação, o CLIENTE concorda e aceita com todas as condições neste documento estabelecidas, responsabilizando-se por todos e quaisquer atos praticados durante a utilização dos serviços.
          </p>

          <p className="text-gray-700">
            4.3 É de exclusivo critério da DEBITA.AI, sem qualquer ônus, não permitir, suspender ou cancelar a conta de pagamento do CLIENTE caso identifique que as informações fornecidas são falsas, incompletas ou não atualizadas, ou caso verifique o não cumprimento ou adequação aos requisitos definidos pela DEBITA.AI ou legislação, sem a necessidade de prévia notificação, podendo valer-se de todas as medidas que entender necessárias.
          </p>

          <div>
            <p className="text-gray-700 mb-2">
              4.4 O CLIENTE se compromete a:
            </p>
            <ul className="list-disc ml-8 space-y-1">
              <li className="text-gray-700">4.4.1 Manter suas informações cadastrais sempre atualizadas</li>
              <li className="text-gray-700">4.4.2 Comunicar imediatamente qualquer situação relacionada a processos de falência, recuperação judicial ou extrajudicial, ou liquidação</li>
              <li className="text-gray-700">4.4.3 Notificar alterações no controle societário da empresa</li>
              <li className="text-gray-700">4.4.4 Informar sobre o início de novas atividades econômicas não previamente declaradas no momento do credenciamento</li>
              <li className="text-gray-700">4.4.5 Atender prontamente às solicitações da DEBITA.AI para envio de documentos ou informações adicionais</li>
            </ul>
          </div>

          <p className="text-gray-700">
            4.5 A qualquer momento, a DEBITA.AI poderá solicitar cópias de documentos, declarações do CLIENTE e de seus representantes legais ou informações cadastrais e transacionais, de forma a verificar a veracidade e atualidade das informações do CLIENTE que deverá fornecê-las no prazo de até <strong>5 (cinco) dias</strong>, sob pena de bloqueio da conta em caso de ausência de resposta.
          </p>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">DISPOSIÇÕES GERAIS</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Este documento contém diversas outras cláusulas importantes relacionadas a segurança, propriedade intelectual, responsabilidade civil, confidencialidade, tratamento de dados pessoais, combate à corrupção e lavagem de dinheiro, declarações e garantias, monitoramento de transações, e disposições gerais.
          </p>

          <p className="text-gray-700">
            O presente instrumento será regido e interpretado de acordo com as Leis da República Federativa do Brasil, com foro eleito na Comarca de <strong>Uruçuí/PI</strong> para dirimir eventuais questões ou litígios.
          </p>
        </div>
      </section>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações da Empresa</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>DEBITA.AI GESTÃO FINANCEIRA E MEIOS DE PAGAMENTO LTDA</strong></p>
          <p>CNPJ: 46.379.233/0001-48</p>
          <p>Uruçuí, PI, Brasil</p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-300">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src="/icons/16 x 16.ico" alt="Calendar" className="h-4 w-4" />
            <span><strong>Data da última alteração:</strong> 20 de abril de 2025</span>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600 italic">
          Para dúvidas ou esclarecimentos sobre este Termo de Conta, entre em contato através dos canais oficiais da Debita.ai.
        </div>
      </div>
    </motion.div>
  );
}