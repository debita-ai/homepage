"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { 
  Users, 
  Target, 
  Shield, 
  Award,
  CheckCircle2,
  ArrowRight,
  Heart,
  Zap,
  TrendingUp,
  Star
} from "lucide-react";

export default function SobreNosPage() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Segurança",
      description: "Protegemos seus dados com os mais altos padrões de segurança bancária.",
      color: "from-[#006279] to-[#004A5C]"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Transparência",
      description: "Relacionamento claro e honesto com nossos clientes e parceiros.",
      color: "from-[#E37A37] to-[#C65A1A]"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Inovação",
      description: "Sempre buscando as melhores soluções tecnológicas do mercado.",
      color: "from-[#4A8C7A] to-[#3A6F5F]"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Crescimento",
      description: "Crescemos junto com nossos clientes, oferecendo suporte constante.",
      color: "from-[#006279] to-[#004A5C]"
    }
  ];

  const achievements = [
    { number: "1000+", label: "Empresas atendidas" },
    { number: "R$50M+", label: "Processado mensalmente" },
    { number: "99.9%", label: "Uptime da plataforma" },
    { number: "24/7", label: "Suporte disponível" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Sobre a Debita.aí
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Somos uma fintech brasileira dedicada a simplificar a gestão financeira de empresas de todos os portes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E37A37] to-[#C65A1A] text-white shadow-lg mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Nossa Missão
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Democratizar o acesso a soluções financeiras avançadas, oferecendo ferramentas 
                  que antes eram exclusivas de grandes corporações para empresas de todos os tamanhos.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Acreditamos que toda empresa merece ter controle total sobre sua gestão financeira, 
                  com segurança, simplicidade e eficiência.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">O que nos move</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4A8C7A] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Simplificar processos financeiros complexos</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4A8C7A] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Reduzir custos operacionais das empresas</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4A8C7A] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Acelerar o crescimento dos nossos clientes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4A8C7A] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Garantir segurança máxima em todas as transações</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam todas as nossas decisões e relacionamentos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} text-white shadow-lg mb-6 transition-transform duration-200 group-hover:scale-105`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Nossos Números
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados que demonstram nossa dedicação aos clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#E37A37] mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4A8C7A] to-[#3A6F5F] text-white shadow-lg mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Nossa Equipe
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Somos um time apaixonado por tecnologia e inovação financeira. Nossa equipe 
                multidisciplinar combina experiência em fintech, desenvolvimento de software 
                e atendimento ao cliente para entregar a melhor experiência possível.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossos membros estão distribuídos pelos estados do <strong>Piauí</strong>, <strong>Ceará</strong> e <strong>Maranhão</strong>, 
                trazendo diversidade regional e conhecimento profundo do mercado nordestino.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#E37A37] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Pronto para crescer conosco?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Junte-se a milhares de empresas que já transformaram sua gestão financeira com a Debita.aí.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/em-breve">
                <button className="bg-white text-[#E37A37] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Começar agora
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Falar com nossa equipe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}