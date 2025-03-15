'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="ml-14 mr-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">debita.ai</h3>
            <ul className="space-y-2">
              <li><Link href="/sobre-nos" className="hover:text-orange-400">Quem Somos</Link></li>
              <li><Link href="/blog" className="hover:text-orange-400">Blog</Link></li>
              <li><Link href="/ajuda" className="hover:text-orange-400">Ajuda</Link></li>
              <li><Link href="/contato" className="hover:text-orange-400">Contato</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li><Link href="/app-da-paymee" className="hover:text-orange-400">App da debita.ai</Link></li>
              <li><Link href="/pix" className="hover:text-orange-400">Pix</Link></li>
              <li><Link href="/transferencia-bancaria" className="hover:text-orange-400">Transferência Bancária</Link></li>
              <li><Link href="/boleto" className="hover:text-orange-400">Boleto</Link></li>
            </ul>
          </div>

          {/* Column 3: Business */}
          <div>
            <h3 className="text-xl font-bold mb-4">Para Seu Negócio</h3>
            <ul className="space-y-2">
              <li><Link href="/ajuda?negocio=true" className="hover:text-orange-400">Ajuda</Link></li>
            </ul>
          </div>

          {/* Column 4: Buyers */}
          <div>
            <h3 className="text-xl font-bold mb-4">Para Compradores</h3>
            <ul className="space-y-2">
              <li><Link href="/ajuda?compradores=true" className="hover:text-orange-400">Ajuda</Link></li>
            </ul>
          </div>

          {/* Column 5: Policies */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nossas Políticas</h3>
            <ul className="space-y-2">
              <li><Link href="/politica-de-privacidade" className="hover:text-orange-400">Política de Privacidade</Link></li>
              <li><Link href="/politica-de-educacao-financeira" className="hover:text-orange-400">Política de Educação Financeira</Link></li>
              <li><Link href="/politica-anticorrupcao" className="hover:text-orange-400">Política Anticorrupção</Link></li>
              <li><Link href="/codigo-de-conduta-e-etica" className="hover:text-orange-400">Código de Conduta e Ética</Link></li>
              <li><Link href="/politica-de-pld-ft" className="hover:text-orange-400">Política de PLD FT</Link></li>
              <li><Link href="/termos-de-uso" className="hover:text-orange-400">Termos e Condições de Uso</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="ml-14 mr-14 border-t border-gray-800 pt-6 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Custom Service Officer</h4>
              <p>Kaike Santos</p>
              <p><a href="mailto:cso@debita.ai" className="hover:text-orange-400">kaike@debita.ai</a></p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Ouvidoria</h4>
              <p>As suas expectativas não foram atendidas em nossos canais de atendimento? Estamos prontos para ouvir você!</p>
              <p><a href="mailto:ouvidoria@debita.ai" className="hover:text-orange-400">ouvidoria@debita.ai</a></p>

              <h4 className="font-bold mt-4 mb-2">Canal de Denúncias</h4>
              <p><a href="mailto:denuncias@debita.ai" className="hover:text-orange-400">denuncias@debita.ai</a></p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} debita.ai. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
