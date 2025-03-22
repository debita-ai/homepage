"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Imposto de Renda 2025: Prazos e Quem Precisa Declarar",
    description: "Saiba quem precisa declarar o IR 2025, prazos e novidades importantes.",
    category: "Finanças",
    image: "https://ext.same-assets.com/3019746777/1120636382.jpeg",
    url: "/blog/imposto-renda-2025"
  },
  {
    id: 2,
    title: "Como Contratar e Estruturar uma Equipe de Vendas de Sucesso",
    description: "Saiba como contratar, treinar e gerenciar uma equipe de vendas de alto desempenho.",
    category: "Vendas",
    image: "https://ext.same-assets.com/442089727/2323805154.jpeg",
    url: "/blog/como-contratar-equipe-de-vendas"
  },
  {
    id: 3,
    title: "Informe de Rendimentos: O que é e como obtê-lo",
    description: "Saiba o que é o Informe de Rendimentos e como utilizá-lo na sua declaração do Imposto de Renda.",
    category: "Finanças",
    image: "https://ext.same-assets.com/3405373791/886367600.jpeg",
    url: "/blog/informe-de-rendimentos"
  }
];

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#252E54]">
            Aprenda mais sobre gestão de finanças
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">Acompanhe nas redes</span>
              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-[#E85A27] hover:text-[#E85A27]/80"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/debitaai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E85A27] hover:text-[#E85A27]/80"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </motion.a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/blog/pessoal" className="text-[#E85A27] hover:underline font-medium">
                Pessoal
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/blog/empresarial" className="text-[#E85A27] hover:underline font-medium">
                Empresarial
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/blog/novidades" className="text-[#E85A27] hover:underline font-medium">
                Novidades
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map(post => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={post.url} className="group">
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform group-hover:-translate-y-1"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block bg-[#E85A27]/20 text-[#E85A27] px-2 py-1 rounded text-xs font-medium mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-[#252E54] group-hover:text-[#E85A27] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button asChild className="bg-[#E85A27] hover:bg-[#E85A27]/90 text-white">
            <Link href="/blog">
              Ver todos artigos →
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
