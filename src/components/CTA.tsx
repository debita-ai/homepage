import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Precisa de uma solução personalizada?
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-10">
          Nosso time está pronto para te apresentar a melhor solução para seu negócio.
        </p>
        <Button asChild size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-100 border-none">
          <Link href="/contato">Falar com nosso time Comercial</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
