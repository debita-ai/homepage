"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 bg-[#252E54] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Tudo que você precisa para organizar suas finanças de vez
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
        >
          <Button
            asChild
            className="bg-[#E85A27] text-white hover:bg-[#E85A27]/90 px-6 py-6 text-base"
          >
            <Link href="/cadastro">
              Testar grátis por 7 dias
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
