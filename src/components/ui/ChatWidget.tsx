"use client";

import { useState, useEffect, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MessageSquare, X, Send, User, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

// Mock chat messages for demo purposes
const initialMessages: Message[] = [
  {
    id: 1,
    text: "Olá! Bem-vindo ao Debita.aí 👋 Como posso ajudar você hoje?",
    sender: "bot",
    timestamp: new Date()
  }
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Simulate bot typing and response
  const simulateBotResponse = (userMessage: string) => {
    // Start typing animation
    setIsTyping(true);

    // Determine response based on user message
    let botResponse = "Obrigado pela sua mensagem! Um de nossos atendentes entrará em contato em breve.";

    // Simple keyword detection
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes("preço") || lowerCaseMessage.includes("plano") || lowerCaseMessage.includes("quanto")) {
      botResponse = "Temos planos a partir de R$19,90/mês para uso pessoal. Para empresas, oferecemos planos personalizados. Posso te enviar mais detalhes?";
    } else if (lowerCaseMessage.includes("trial") || lowerCaseMessage.includes("teste") || lowerCaseMessage.includes("grátis")) {
      botResponse = "Sim, oferecemos 7 dias de teste grátis com acesso a todas as funcionalidades, sem necessidade de cartão de crédito!";
    } else if (lowerCaseMessage.includes("cartão") || lowerCaseMessage.includes("pagamento") || lowerCaseMessage.includes("boleto") || lowerCaseMessage.includes("pix")) {
      botResponse = "Aceitamos cartão de crédito, boleto bancário e pagamento via PIX. Para empresas, também oferecemos faturamento mensal.";
    } else if (lowerCaseMessage.includes("funcionalidade") || lowerCaseMessage.includes("recurso") || lowerCaseMessage.includes("o que faz")) {
      botResponse = "O Debita.aí possui controle de receitas e despesas, categorização automática, relatórios detalhados, projeção financeira e muito mais. Gostaria de conhecer alguma funcionalidade específica?";
    }

    // Delay to simulate typing
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 2,
          text: botResponse,
          sender: "bot",
          timestamp: new Date()
        }
      ]);
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user" as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage("");

    // Simulate bot response
    simulateBotResponse(inputMessage);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating chat button */}
      <div className="fixed bottom-5 right-5 z-40">
        <motion.button
          onClick={() => setOpen(true)}
          className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-primary-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <MessageSquare size={24} />
        </motion.button>
      </div>

      {/* Chat dialog */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className="fixed inset-0 bg-black/20 z-40 data-[state=open]:animate-in data-[state=closed]:animate-out"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild>
                <motion.div
                  className="fixed bottom-5 right-5 z-50 w-[95%] max-w-[400px] rounded-xl bg-white shadow-2xl overflow-hidden flex flex-col"
                  style={{ height: "500px" }}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Chat header */}
                  <div className="bg-primary p-4 text-white flex justify-between items-center">
                    <div className="flex items-center">
                      <MessageSquare className="mr-2" size={20} />
                      <div>
                        <h3 className="font-medium">Suporte Debita.aí</h3>
                        <p className="text-xs opacity-80">Atendimento online</p>
                      </div>
                    </div>
                    <Dialog.Close asChild>
                      <button className="text-white rounded-full p-1 hover:bg-primary-600 transition-colors">
                        <X size={20} />
                      </button>
                    </Dialog.Close>
                  </div>

                  {/* Chat messages */}
                  <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === "user"
                              ? "bg-primary-600 text-white"
                              : "bg-white border border-gray-200"
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            {message.sender === "bot" && (
                              <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                                <MessageSquare size={14} className="text-primary" />
                              </div>
                            )}
                            <div>
                              <p className={message.sender === "user" ? "text-white" : "text-gray-800"}>
                                {message.text}
                              </p>
                              <p className={`text-[10px] mt-1 text-right ${message.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                                {formatTime(message.timestamp)}
                              </p>
                            </div>
                            {message.sender === "user" && (
                              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                                <User size={14} className="text-gray-600" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Bot typing indicator */}
                    {isTyping && (
                      <div className="mb-4 flex justify-start">
                        <div className="max-w-[80%] rounded-lg p-3 bg-white border border-gray-200">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                              <MessageSquare size={14} className="text-primary" />
                            </div>
                            <div className="flex space-x-1">
                              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* This div is used for auto-scrolling */}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Chat input */}
                  <div className="border-t border-gray-200 p-3 bg-white">
                    <div className="flex items-center gap-2">
                      <textarea
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px] max-h-[120px] resize-none"
                        rows={1}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim()}
                        className="bg-primary hover:bg-primary-600 text-white px-3 py-2 h-11 rounded-lg flex-shrink-0"
                      >
                        <Send size={18} />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      Esta é uma demonstração. Em um ambiente real, você estaria falando com nossa equipe.
                    </p>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
