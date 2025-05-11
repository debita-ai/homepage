"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Script from "next/script";

export default function SimpleFooter() {
  return (
    <footer className="bg-[#252E54] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-xl font-bold">
              Debita.aí
            </Link>
          </motion.div>

          <motion.div
            className="text-sm text-white/80"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>
              <strong>Debita.aí 2025.</strong> Todos os direitos reservados.
            </p>
            <p className="mt-1">
              DEBITA.AI GESTAO FINANCEIRA E MEIOS DE PAGAMENTO LTDA
              <br />
              CNPJ: 46.379.233/0001-48
            </p>
          </motion.div>

          <motion.div
            className="mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div id="ra-verified-seal">
              <Script
                id="ra-embed-verified-seal"
                src="https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js"
                data-id="ZkxMa0FtZ2FsVGcxLXJPMTphcGljZS10ZWNobm9sb2dpZXMtbHRkYQ=="
                data-target="ra-verified-seal"
                data-model="2"
                strategy="afterInteractive"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 