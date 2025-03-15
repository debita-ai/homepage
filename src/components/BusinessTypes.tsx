'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const BusinessTypes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <Image
              src="https://ext.same-assets.com/2370895660/1507634722.jpeg"
              alt="E-commerces"
              width={500}
              height={400}
              className="ml-14 rounded-lg object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">E-commerces</h3>
            <p className="text-gray-700 mb-6">
              Maximize suas vendas com pagamentos descomplicados. Nossa tecnologia assegura transações ágeis e seguras,
              elevando a experiência de compra e reduzindo o abandono de carrinhos.
            </p>

            <h3 className="text-2xl font-bold mb-4">Plataformas de iGaming</h3>
            <p className="text-gray-700 mb-6">
            Garanta a segurança e eficiência que seus jogadores esperam, com transações rápidas e confiáveis, assegurando uma operação estável e de confiança.
            </p>

            <h3 className="text-2xl font-bold mb-4">Agências</h3>
            <p className="text-gray-700 mb-6">
            Ofereça aos seus clientes opções de pagamentos avançados e flexíveis. Torne-se o parceiro que agrega valor real aos negócios, através do nosso programa exclusivo de parcerias.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/signup">Entrar na lista de espera</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
