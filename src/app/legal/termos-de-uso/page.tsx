"use client";

import { motion } from "framer-motion";
// Using site favicon icons instead of external icons

export default function TermosDeUso() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-8 prose prose-slate prose-lg"
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          TERMO DE USO E LICENCIAMENTO DE SOFTWARE E INFRAESTRUTURA TECNOLÓGICA
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
            <p className="font-medium mb-1">Documento Legal</p>
            <p>Este documento estabelece os termos e condições para uso do software e infraestrutura da Debita.ai.</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Pelo presente Termo, fazem entre si:
        </p>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          De um lado, a <strong>DEBITA.AI GESTÃO FINANCEIRA E MEIOS DE PAGAMENTO LTDA.</strong>, pessoa jurídica de direito privado, inscrita no CNPJ/MF sob o nº 46.379.233/0001-48, com sede na Rua Zeca Lolo, 516, Sala 01 CXPST 70, Bairro Vaquejada, CEP 64.860-000, Uruçuí - PI, denominada <strong>"DEBITA.AI"</strong>;
        </p>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          De outro lado, o <strong>CLIENTE</strong>, definido como a pessoa jurídica contratante e/ou beneficiária dos serviços ou do uso do Software fornecido pela DEBITA.AI, que aceita integralmente os termos e condições estabelecidos para o uso e licenciamento do programa de computador, bem como da infraestrutura tecnológica associada às suas funcionalidades (<strong>"Software"</strong>), a seguir estipulados:
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
              <strong>1.1.1 Afiliadas:</strong> Empresas que compartilham a mesma entidade controladora que a DEBITA.AI, estando, portanto, sob controle comum dentro do mesmo grupo econômico.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.2 Cliente:</strong> A pessoa jurídica que celebra contrato com a DEBITA.AI e/ou o titular de conta de pagamento, abrangendo aquela que adquire ou utiliza os serviços, softwares ou soluções fornecidas. O termo "Cliente" inclui, conforme o contexto, o contratante direto ou qualquer outro contratante autorizado.
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
              <strong>1.1.5 Período de Contratação:</strong> Intervalo de tempo durante o qual os serviços e/ou o licenciamento do Software serão fornecidos pela DEBITA.AI ao Cliente, conforme especificado na Proposta Comercial e no presente Termo, incluindo possíveis renovações e extensões, desde que acordadas entre as partes.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.6 Proposta Comercial:</strong> Documento emitido pela DEBITA.AI, contendo os detalhes dos serviços e/ou produtos oferecidos, incluindo preços, condições de pagamento, prazos e outras disposições aplicáveis, servindo como base para a formalização do Contrato.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.7 Serviços:</strong> Atividades, operações e funcionalidades disponibilizadas pela DEBITA.AI ao Cliente, incluindo gateway de pagamentos, criação de links de pagamento, emissão de cobranças e relatórios gerenciais.
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <strong>1.1.8 Software:</strong> Conjunto de programas e aplicativos licenciados pela DEBITA.AI ao Cliente, incluindo, mas não se limitando, às atualizações, melhorias e demais funcionalidades associadas. Para fins deste Termo, o termo "Software" inclui plataformas de gestão financeira e gateway de pagamentos, bem como Interface de Programação de Aplicações ("API"), ou quaisquer soluções tecnológicas correlatas disponibilizadas pela DEBITA.AI.
            </p>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CLÁUSULA SEGUNDA - OBJETO</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            2.1 Este Termo tem por objeto estabelecer as condições sob as quais a DEBITA.AI concede ao CLIENTE uma licença de uso não exclusiva e não transferível para o Software. A licença permite ao CLIENTE utilizar o Software conforme as especificações técnicas e operacionais emitidas pela DEBITA.AI e nos limites a que se destinam.
          </p>

          <p className="text-gray-700">
            2.2 Para a execução dos serviços fornecidos pela DEBITA.AI, o CLIENTE fará uso do Software. As funcionalidades constarão na Proposta Comercial e a integração entre este e o(s) sistema(s) do CLIENTE ocorrerá pelo uso de Interface de Programa de Aplicação ("API").
          </p>

          <p className="text-gray-700">
            2.3 O CLIENTE entende e aceita que o Software está em constante desenvolvimento, implicando em mudanças, atualizações e melhorias a qualquer tempo. A DEBITA.AI não possui qualquer responsabilidade ou dever de manter determinada estrutura ou design operacional, assim como não possui qualquer obrigatoriedade de cumprir, embora possa fazê-lo a seu exclusivo critério, customizações.
          </p>

          <p className="text-gray-700 ml-4">
            2.3.1 Caso a DEBITA.AI realize aprimoramentos e atualizações no Software, durante o período de contratação, a disponibilização será sem ônus para o CLIENTE. Em caso de desenvolvimento pela DEBITA.AI de novas funcionalidades e customizações, que importem em contratações adicionais do CLIENTE, tais recursos serão disponibilizados mediante negociação específica.
          </p>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CLÁUSULA TERCEIRA - UTILIZAÇÃO E DISPONIBILIDADE</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            3.1 A DEBITA.AI se compromete a empregar seus melhores esforços para que o Software atenda aos propósitos do CLIENTE. Não obstante, a plataforma é fornecida sem qualquer tipo de garantia, expressa ou implícita, inclusive, mas sem se limitar, que o Software está livre de defeitos e que é capaz de se integrar ao sistema do CLIENTE.
          </p>

          <p className="text-gray-700">
            3.2 A DEBITA.AI empregará seus melhores esforços para manter o Software em funcionamento adequado, projetando disponibilidade de <strong>99,9%</strong> do tempo anual para os sistemas críticos da plataforma. Contudo, não será responsabilizada nas hipóteses de ocorrências fora de sua esfera de interferência ou previsibilidade que vão além dos seus esforços ou de rotinas preventivas.
          </p>

          <p className="text-gray-700">
            3.3 A DEBITA.AI empregará seus melhores esforços para manter o Software em funcionamento adequado, projetando disponibilidade de <strong>99,5%</strong> do tempo anual. Contudo, não será responsabilizada nas hipóteses de ocorrências fora de sua esfera de interferência ou previsibilidade que vão além dos seus esforços ou de rotinas preventivas.
          </p>

          <p className="text-gray-700">
            3.4 Os serviços de suporte da DEBITA.AI são fornecidos mediante as requisições realizadas através dos canais oficiais disponibilizados. O tempo de resposta para cada solicitação variará de acordo com a complexidade do pedido.
          </p>

          <p className="text-gray-700">
            3.5 O CLIENTE reconhece que pode haver interrupções no fornecimento dos serviços, por motivos técnicos, manutenções preventivas ou corretivas, sem qualquer direito a indenização.
          </p>

          <p className="text-gray-700">
            3.6 Sob nenhuma hipótese a DEBITA.AI responderá por indisponibilidade de sistemas de terceiros, tais como o Banco Central do Brasil, instituições financeiras parceiras ou provedores de internet.
          </p>

          <p className="text-gray-700">
            3.7 A DEBITA.AI poderá implementar critérios para bloqueio de transações, utilizando melhores práticas de mercado e aprendizados internos, com o objetivo de aprimorar a segurança das operações e cumprir obrigações regulatórias. Esses critérios poderão ser parametrizáveis ou fixos, conforme definido pela DEBITA.AI.
          </p>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CLÁUSULA QUARTA - OBRIGAÇÕES DAS PARTES</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 São obrigações da DEBITA.AI:</h3>
            <div className="space-y-2 ml-4">
              <p className="text-gray-700">4.1.1 Apoiar o CLIENTE na integração tecnológica necessária para o correto uso do Software.</p>
              <p className="text-gray-700">4.1.2 Manter o Software em funcionamento adequado e fornecer suporte técnico, conforme o disposto neste Termo.</p>
              <p className="text-gray-700">4.1.3 Não utilizar, repassar ou manipular nenhuma informação que possa ter acesso em virtude do uso do Software pelo CLIENTE para fins não autorizados, podendo responder civil, criminal e administrativamente por eventuais violações desta obrigação.</p>
              <p className="text-gray-700">4.1.4 Cumprir as obrigações regulatórias aplicáveis às atividades de gateway de pagamentos e prevenção à lavagem de dinheiro.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 São obrigações do CLIENTE:</h3>
            <div className="space-y-2 ml-4">
              <p className="text-gray-700">4.2.1 Cumprir as condições deste Termo, bem como as políticas e regras operacionais e de segurança, informadas pela DEBITA.AI.</p>
              <p className="text-gray-700">4.2.2 Garantir que apenas pessoas autorizadas tenham acesso aos sistemas e equipamentos, adotando procedimentos de controle e segurança, bem como manter os dados cadastrais e a lista de pessoas autorizadas atualizados. Em caso de alterações, deverá comunicar à DEBITA.AI, no prazo máximo de <strong>10 (dez) dias</strong> de sua ocorrência.</p>
              <p className="text-gray-700">4.2.3 Guardar e armazenar as chaves e senhas de acesso com segurança. O CLIENTE reconhece que a senha e/ou chave é pessoal e intransferível, e não deve ser compartilhada. Além disso, reconhece que todas as transações realizadas com uma senha válida não poderão ser contestadas.</p>
              <p className="text-gray-700">4.2.4 Utilizar o Software e suas funcionalidades exclusivamente para os fins a que se destinam, em conformidade com as normas legais e regulamentos aplicáveis, vedada a utilização para:</p>
              <ul className="list-disc ml-8 space-y-1">
                <li className="text-gray-700">4.2.4.1 <strong>Criptomoedas, moedas digitais ou ativos virtuais</strong></li>
                <li className="text-gray-700">4.2.4.2 <strong>Apostas esportivas, jogos de azar ou similares</strong></li>
                <li className="text-gray-700">4.2.4.3 <strong>Operações de câmbio ou remessas internacionais</strong></li>
                <li className="text-gray-700">4.2.4.4 Atividades ilegais ou contrárias à legislação brasileira</li>
              </ul>
              <p className="text-gray-700">4.2.5 Dedicar seus melhores esforços na implementação da integração dos sistemas, incluindo disponibilizar a infraestrutura tecnológica nos padrões indicados, bem como equipe técnica capacitada.</p>
              <p className="text-gray-700">4.2.6 Obter e manter, às suas exclusivas expensas, assim como garantir a idoneidade da licença, de todo o hardware de computador, software e equipamento de comunicação, bem como praticar todos os atos de segurança necessários de acordo com as práticas de mercado para o funcionamento seguro do dispositivo utilizado, a exemplo, mas não se limitando à utilização de softwares antivírus e medidas físicas, lógicas e administrativas razoáveis para o acesso seguro.</p>
              <p className="text-gray-700">4.2.7 Observar integralmente todas as normas relativas à prevenção e ao combate de crimes relacionados à lavagem de dinheiro, ocultação de bens e financiamento ao terrorismo e outras legislações pertinentes, bem como deve cooperar com as autoridades e agências reguladoras, fornecendo informações e dados legalmente admissíveis e adotando todas as medidas ao seu alcance para coibir tais práticas ilícitas.</p>
              <p className="text-gray-700">4.2.8 <strong>NÃO traduzir, modificar, descompilar, decompor e/ou realizar engenharia reversa no Software.</strong></p>
              <p className="text-gray-700">4.2.9 Em caso de falhas ou comportamento inesperado do Software, a ocorrência deve ser reportada para o suporte da DEBITA.AI. Qualquer tentativa ou realização de reparação por pessoas não autorizadas é estritamente proibida.</p>
              <p className="text-gray-700">4.2.10 Efetuar os pagamentos dentro dos prazos e condições estabelecidas.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      {/* Continuing with remaining clauses - this is a lengthy document */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CLÁUSULA QUINTA - PREÇO</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">5.1 O preço e as condições de pagamento pela utilização e licenciamento do Software constará no Contrato e/ou Proposta Comercial.</p>
          <p className="text-gray-700">5.2 Os valores praticados serão reajustados anualmente pelo índice acumulado do <strong>IPCA</strong> ou por outro índice que venha a ser substituído.</p>
          <p className="text-gray-700">5.3 Em caso de inadimplemento de pagamento, incidirá juros de mora de 1% (um por cento) ao mês, multa de 2% (dois por cento) e correção monetária a ser corrigida pelo índice acumulado do IPCA.</p>
          <p className="text-gray-700">5.4 Em caso de cobrança judicial, serão acrescidos os valores referentes às custas processuais e 20% (vinte por cento) sobre o valor total da cobrança, a título de honorários advocatícios.</p>
          <p className="text-gray-700">5.5 Cada parte é responsável pelos tributos incidentes às suas respectivas atividades, na forma da legislação tributária.</p>
        </div>
      </section>

      <hr className="my-8 border-gray-300" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">CLÁUSULA SEXTA - PRAZO DE VIGÊNCIA E RESCISÃO</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">6.1 Este Termo entrará em vigor na data de assinatura do Contrato e permanecerá vigente pelo Período de Contratação dos Serviços.</p>
          <p className="text-gray-700">6.2 As hipóteses de encerramento deste Termo acompanharão o disposto nos documentos pertinentes à contratação dos Serviços.</p>
          <p className="text-gray-700">6.3 Em caso de determinação de prazo mínimo de Período de Contratação, este Termo não poderá ser encerrado pelo CLIENTE antes de decorrido o referido prazo.</p>
          <p className="text-gray-700">6.4 A DEBITA.AI poderá encerrar este Termo imediatamente, sem prévio aviso, nas seguintes hipóteses:</p>
          <ul className="list-disc ml-8 space-y-1">
            <li className="text-gray-700">6.4.1 Utilização do Software para atividades proibidas (criptomoedas, apostas, câmbio)</li>
            <li className="text-gray-700">6.4.2 Descumprimento das obrigações de PLD/FT</li>
            <li className="text-gray-700">6.4.3 Suspeita de lavagem de dinheiro ou financiamento ao terrorismo</li>
            <li className="text-gray-700">6.4.4 Violação das condições de segurança ou tentativa de engenharia reversa</li>
          </ul>
          <p className="text-gray-700">6.5 O encerramento do Termo não libera o CLIENTE das obrigações devidas antes do término.</p>
          <p className="text-gray-700">6.6 As cláusulas que regem a propriedade intelectual, remuneração e responsabilidade civil, sobreviverão ao encerramento deste Termo.</p>
        </div>
      </section>

      {/* Additional sections would continue in the same pattern */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-12">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações da Empresa</h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>DEBITA.AI GESTÃO FINANCEIRA E MEIOS DE PAGAMENTO LTDA</strong></p>
          <p>CNPJ: 46.379.233/0001-48</p>
          <p>Rua Zeca Lolo, 516, Sala 01 CXPST 70</p>
          <p>Bairro Vaquejada, CEP 64.860-000</p>
          <p>Uruçuí - PI</p>
          <p>Email: suporte@debita.ai</p>
          <p>Telefone: (89) 99447-0707</p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-300">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <img src="/icons/16 x 16.ico" alt="Calendar" className="h-4 w-4" />
            <span><strong>Data da última alteração:</strong> 20 de abril de 2025</span>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600 italic">
          Para dúvidas ou esclarecimentos sobre este Termo de Software, entre em contato através dos canais oficiais da Debita.ai.
        </div>
      </div>
    </motion.div>
  );
} 