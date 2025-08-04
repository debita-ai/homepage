"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import LegalHeader from "@/components/layout/LegalHeader";
import LegalSidebar from "@/components/layout/LegalSidebar";
import LegalSidebarSkeleton from "@/components/layout/LegalSidebarSkeleton";
import Footer from "@/components/layout/Footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FFF3E7]">
      {/* Legal Header */}
      <LegalHeader />

      {/* Hero Section - Similar to homepage */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0" />
        
        {/* Background elements similar to homepage */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute w-[300px] h-[150px] top-[10%] left-[5%]"
            style={{
              background: `radial-gradient(ellipse at center, 
                #F0DCCD40 0%, 
                #F0DCCD20 50%, 
                transparent 100%)`,
              animation: 'fluid-morph-1 20s ease-in-out infinite',
              filter: 'blur(2px)'
            }}
          />
          <div 
            className="absolute w-[250px] h-[125px] top-[60%] right-[10%]"
            style={{
              background: `radial-gradient(ellipse at center, 
                #F0DCCD35 0%, 
                #F0DCCD15 60%, 
                transparent 100%)`,
              animation: 'fluid-morph-2 24s ease-in-out infinite',
              filter: 'blur(1.5px)'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white font-baskerville">
              Documentos Legais
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Transparência e conformidade em todos os nossos termos e políticas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-[#FFF3E7] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar with Suspense */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 z-10">
                <Suspense fallback={<LegalSidebarSkeleton />}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200/50 p-6"
                  >
                    <LegalSidebar />
                  </motion.div>
                </Suspense>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8 sm:p-12"
              >
                {children}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 