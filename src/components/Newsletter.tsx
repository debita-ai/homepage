'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Entre em nossa Newsletter
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Inscreva-se e fique por dentro de todas as atualizações do mercado de pagamentos instantâneos
          </p>

          <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="w-full sm:flex-1">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="w-full"
                required
              />
            </div>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto">
              Inscrever
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            Ao se inscrever você aceita a Política de Privacidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
