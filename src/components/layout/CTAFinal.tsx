"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTAFinal() {
  return (
    <section className="py-20 bg-[#E37A37] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 z-0" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-[#E37A37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-[#006279]/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para assumir o controle financeiro do seu negócio?
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 mb-10 mx-auto max-w-2xl leading-relaxed">
            Crie sua conta em poucos minutos e comece a simplificar sua gestão hoje mesmo.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link 
              href="/cadastro" 
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#E37A37] px-8 py-6 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <span>Criar minha conta gratuitamente</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.p
            className="text-sm text-white/70 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sem taxa de adesão • Sem mensalidade • Cancele quando quiser
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}