import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import BusinessTypes from '@/components/BusinessTypes';
import CTA from '@/components/CTA';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Partners />
      <Features />
      <Solutions />
      <BusinessTypes />
      <CTA />
      <Newsletter />
      <Footer />
    </main>
  );
}
