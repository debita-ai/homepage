"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ForWho() {
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
    <section className="py-20 bg-[#fafaf8]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#252E54]">O Debita.aí é para todo mundo!</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nosso sistema é personalizado e flexível. Feito sob medida para você organizar as contas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md text-center"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src="https://ext.same-assets.com/1053891481/624830719.webp"
                alt="Para Pessoa"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#252E54]">Para qualquer Pessoa</h3>
            <p className="text-gray-600 mb-6">
              Controle as suas despesas e planeje os seus sonhos de um jeito fácil.
            </p>
  
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md text-center"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src="https://ext.same-assets.com/1840382171/1938027276.webp"
                alt="Para MEI"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#252E54]">Para você que é MEI</h3>
            <p className="text-gray-600 mb-6">
              Cresça seu negócio com segurança, mesmo em uma profissão autônoma.
            </p>

          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md text-center"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src="https://ext.same-assets.com/1974361685/2540610113.webp"
                alt="Para Empresa"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#252E54]">Para sua Empresa</h3>
            <p className="text-gray-600 mb-6">
              Não importa o tamanho da sua empresa. O Debita.aí é flexível e completo.
            </p>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
