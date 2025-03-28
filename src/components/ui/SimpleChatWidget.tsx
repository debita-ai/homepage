"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SimpleChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-5 right-5 z-50">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <MessageSquare size={24} />
        </motion.button>
      </div>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed bottom-5 right-5 z-50 w-[95%] max-w-[400px] h-[500px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="bg-primary p-4 text-white flex justify-between items-center">
                <div className="flex items-center">
                  <MessageSquare className="mr-2" size={20} />
                  <div>
                    <h3 className="font-medium">Suporte Debita.aí</h3>
                    <p className="text-xs opacity-80">Atendimento online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white rounded-full p-1 hover:bg-primary-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat content */}
              <div className="flex-1 p-4 bg-gray-50 flex flex-col justify-center items-center">
                <MessageSquare className="h-16 w-16 text-gray-300 mb-4" />
                <p className="text-gray-500 text-center">
                  Esta é uma demonstração do widget de chat.<br />
                  Em uma implementação completa, aqui estaria o chat real.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
