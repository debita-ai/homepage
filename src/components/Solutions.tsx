'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

type SolutionCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const SolutionCard = ({ title, description, image, link }: SolutionCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all h-full transform hover:-translate-y-1 hover:scale-105 mx-2">
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
            className="bg-gray-50 p-4"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Link href={link} className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors">
            Saiba Mais <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

const Solutions = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const solutions = [
    {
      title: "Gere cobranças em pix",
      description: "Impulsione seu e-commerce com parcelamento em até 24x, aumente vendas e conversões, reduza o abandono de carrinho e filas no checkout, sem riscos.",
      image: "https://ext.same-assets.com/1303879396/114932175.png",
      link: "/pix"
    },
    {
      title: "Gere seus boletos",
      description: "Simplifique a gestão de assinaturas e pagamentos regulares com PIX Recorrente, proporcionando aos seus clientes a conveniência de débitos automáticos.",
      image: "https://ext.same-assets.com/2704477397/3289497509.png",
      link: "/boleto"
    },
    {
      title: "Receba internacionalmente",
      description: "Realize e receba pagamentos internacionais de forma rápida e segura, com taxas competitivas.",
      image: "https://ext.same-assets.com/3515065739/182524035.png",
      link: "/cross-border"
    },
    {
      title: "Checkout Transparente",
      description: "Ofereça uma experiência de checkout integrada ao seu site. Personalize a jornada de pagamento sem redirecionamentos, mantendo sua identidade visual.",
      image: "https://ext.same-assets.com/795315679/89380088.png",
      link: "/checkout-transparente"
    },
    {
      title: "App da debita.ai",
      description: "Gerencie seus pagamentos direto do celular. Acompanhe transações em tempo real, receba notificações instantâneas e acesse relatórios detalhados.",
      image: "https://ext.same-assets.com/1710383980/2262836857.jpeg",
      link: "/app-debita-ai"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Impulsione seu negócio com nossas inovações em pagamento instantâneo
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Facilite as transações do seu negócio com as diversas soluções de pagamento da debita.ai,
            projetadas para oferecer segurança, eficiência e flexibilidade.
          </p>
        </div>

        <div className="max-w-[95vw] md:max-w-[90vw] mx-auto relative -mx-4">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
            }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-4 mt-6 mb-6">
              {solutions.map((solution, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="h-full">
                    <SolutionCard
                      title={solution.title}
                      description={solution.description}
                      image={solution.image}
                      link={solution.link}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="hidden">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>

          {/* Custom Controls */}
          <Button
            variant="outline"
            size="icon"
            className="mt-4 rounded-full border-2 border-gray-300 hover:bg-orange-50 hover:border-orange-400 bg-white/80 backdrop-blur-sm z-10"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="ml-2 rounded-full border-2 border-gray-300 hover:bg-orange-50 hover:border-orange-400 bg-white/80 backdrop-blur-sm z-10"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-1 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <Button
                key={i}
                variant="ghost"
                size="sm"
                className={`w-2 h-2 rounded-full p-0 ${i === current ? 'bg-orange-500' : 'bg-gray-300'}`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/signup">Entrar na lista de espera</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
