'use client';

import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Headphones, Clock, Globe, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card className="border-t-4 border-t-orange-500 hover:shadow-lg transition-all h-full mx-2 transform hover:-translate-y-1 hover:scale-105">
      <CardHeader className="pb-2">
        <div className="text-orange-500 mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

const Features = () => {
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

  const features = [
    {
      icon: <CreditCard size={32} />,
      title: "Zero Custo",
      description: "Crie sua conta grátis, não pague por mensalidades nem setup, e não gere fidelidade."
    },
    {
      icon: <Headphones size={32} />,
      title: "Suporte",
      description: "Contamos com uma equipe de suporte dedicada, 24 horas, 7 dias da semana."
    },
    {
      icon: <Clock size={32} />,
      title: "Repasse em D+1",
      description: "Melhore seu fluxo de caixa com seus recebimentos entrando na conta em apenas 1 dia útil."
    },
    {
      icon: <Globe size={32} />,
      title: "Integração Fácil e Rápida",
      description: "Escalabilidade para empresas globais explorarem o mercado brasileiro sem burocracias."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Checkout Transparente",
      description: "Instale nosso checkout no seu site e configure a experiência de pagamento da forma transparente, light box ou redirect."
    },
    // Add more features to extend beyond the viewport
    {
      icon: <CreditCard size={32} />,
      title: "Sem Taxas Ocultas",
      description: "Transparência total nas tarifas, sem surpresas ou custos adicionais no final do mês."
    },
    {
      icon: <Globe size={32} />,
      title: "Alcance Internacional",
      description: "Receba pagamentos de clientes em todo o mundo com nossa solução de pagamentos internacionais."
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Por que?</h2>
          <h3 className="text-4xl font-bold mb-6">Compromisso com Excelência e Inovação</h3>
          <p className="text-lg text-gray-600">
            Usamos inteligência artificial para otimizar recursos e aumentar
            conversão com taxas até 75% menores que outras empresas de BaaS.
          </p>
        </div>

        <div className="max-w-[100vw] md:max-w-[100vw] mx-auto relative -mx-4">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
            }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-4 mt-4 mb-4">
              {features.map((feature, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
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
            className="rounded-full border-2 border-gray-300 hover:bg-orange-50 hover:border-orange-400 bg-white/80 backdrop-blur-sm z-10"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className=" ml-2 rounded-full border-2 border-gray-300 hover:bg-orange-50 hover:border-orange-400 bg-white/80 backdrop-blur-sm z-10"
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

        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Link href="/signup">Entrar na lista de espera</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
