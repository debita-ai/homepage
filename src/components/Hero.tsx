'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const HeroSlide = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  image,
  alt
}: {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  alt: string;
}) => {
  return (
    <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="brightness-[0.85]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="ml-14 container mx-auto px-4">
          <div className="max-w-xl">
            {subtitle && (
              <h2 className="text-orange-500 font-bold text-xl mb-2">{subtitle}</h2>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-white text-lg mb-8">
              {description}
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <HeroSlide
            title="A melhor plataforma de pagamentos instantâneos para expandir seu negócio"
            description="Nossa plataforma de pagamentos instantâneos simplifica cada transação, garantindo eficiência e tranquilidade para você e seus clientes."
            ctaText="Entrar na lista de espera"
            ctaLink="/signup"
            image="https://ext.same-assets.com/185419626/1256347106.jpeg"
            alt="Pessoa usando o debita.ai em um smartphone"
          />
        </CarouselItem>

        {/* <CarouselItem>
          <HeroSlide
            title="Aumente as vendas do seu E-commerce, da sua loja física e de seu televendas"
            subtitle="com a nossa solução de Pix Parcelado"
            description="Facilite a vida do seu cliente oferecendo parcelamento em até 24x diretamente no Pix, independente do limite do cartão de crédito, e ainda com risco zero de inadimplência para o seu negócio."
            ctaText="Falar com nosso time!"
            ctaLink="/contato"
            image="https://ext.same-assets.com/2945310078/947723043.jpeg"
            alt="Pessoa usando pagamento móvel"
          />
        </CarouselItem>

        <CarouselItem>
          <HeroSlide
            title="Revolucione seu negócio com o App da debita.ai"
            description="Com ele você pode dizer adeus as confirmações de recebimento via conta corrente ou extrato bancário. Com nosso APP a confirmação é instantânea na tela do seu celular!"
            ctaText="Entrar na lista de espera"
            ctaLink="/signup"
            image="https://ext.same-assets.com/3406997965/3321399881.jpeg"
            alt="Pessoa usando aplicativo móvel para pagamentos"
          />
        </CarouselItem> */}
      </CarouselContent>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 rounded-full" />
        <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8 rounded-full" />
      </div>
    </Carousel>
  );
};

export default Hero;
