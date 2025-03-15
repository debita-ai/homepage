'use client';

import React from 'react';
import Image from 'next/image';

const Partners = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-8">
          Empresas que confiam na debita.ai
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Partner logos - using placeholder grayscale logos */}
          <p>A4 Empreendimentos</p>

        </div>
      </div>
    </section>
  );
};

export default Partners;
