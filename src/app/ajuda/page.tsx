"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  HelpCircle,
  Send,
  CheckCircle2,
  Search,
  Clock,
  ArrowRight,
  Shield,
  Banknote
} from "lucide-react";

export default function AjudaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar solicitação');
      }

      setIsSubmitted(true);
      
      // Reset após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    } catch (error) {
      console.error('Error submitting support request:', error);
      // You could add an error state here if needed
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const helpPosts = [
    {
      title: "Somos Intermediários, Não uma Instituição de Pagamento",
      icon: <Shield className="h-8 w-8" />,
      color: "from-[#E37A37] to-[#C65A1A]",
      content: "A Debita.aí é uma plataforma de gestão de cobranças que trabalha em parceria com Instituições de Pagamento licenciadas pelo Banco Central. Isso significa que não processamos pagamentos diretamente, mas sim através de nossos parceiros, que são IPs modernas e super seguras. Esta estrutura nos permite oferecer a você as melhores condições do mercado, sem a complexidade regulatória, mantendo total segurança e conformidade.",
      readTime: "2 min",
      category: "Sobre a Plataforma"
    },
    {
      title: "Segurança e Certificações",
      icon: <Shield className="h-8 w-8" />,
      color: "from-[#006279] to-[#004A5C]",
      content: "Utilizamos criptografia de ponta, certificações de segurança e seguimos as melhores práticas de proteção de dados conforme a LGPD. Todos os nossos parceiros são Instituições de Pagamento licenciadas e supervisionadas pelo Banco Central do Brasil, garantindo máxima segurança e confiabilidade nas transações.",
      readTime: "3 min",
      category: "Segurança"
    },
    {
      title: "Como Funciona a Conciliação Bancária",
      icon: <Banknote className="h-8 w-8" />,
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      content: "Nossa plataforma oferece relatórios detalhados de todas as transações PIX e boleto, facilitando sua conciliação financeira com dados em tempo real. Você tem acesso completo ao histórico de pagamentos, valores, datas e status de cada transação.",
      readTime: "2 min",
      category: "Financeiro"
    }
  ];


  const filteredPosts = helpPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mb-6">
              <HelpCircle className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Central de Ajuda
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Encontre respostas rápidas para suas dúvidas ou entre em contato com nossa equipe.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pesquisar por tópicos, dúvidas ou palavras-chave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm rounded-xl border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-700 placeholder-gray-500 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Artigos Informativos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entenda melhor como funciona nossa plataforma e nossos serviços
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    {post.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-[#E37A37] bg-[#E37A37]/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#E37A37] transition-colors leading-tight">
                      {post.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {post.content}
                </p>

                <div className="flex items-center text-[#E37A37] group-hover:text-[#C65A1A] transition-colors text-sm font-medium">
                  <span>Ler artigo completo</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Entre em contato conosco
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha a forma que preferir para conversar com nossa equipe de suporte
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <motion.div
              className="flex flex-col p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E37A37] to-[#C65A1A] flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Contato por Email
              </h3>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Suporte Técnico</h4>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    Para dúvidas técnicas, problemas com a plataforma ou suporte geral
                  </p>
                  <a href="mailto:suporte@debita.ai" className="inline-block text-[#E37A37] font-semibold group-hover:text-[#C65A1A] transition-colors">
                    suporte@debita.ai
                  </a>
                </div>
                
                <div className="border-t border-gray-200 pt-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Ouvidoria</h4>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    Para reclamações, sugestões ou questões sobre atendimento
                  </p>
                  <a href="mailto:ouvidoria@debita.ai" className="inline-block text-[#E37A37] font-semibold group-hover:text-[#C65A1A] transition-colors">
                    ouvidoria@debita.ai
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="https://wa.me/5589994588003"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#1DA851] flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                WhatsApp
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Converse diretamente conosco pelo WhatsApp
              </p>
              <div className="text-[#25D366] font-semibold group-hover:text-[#1DA851] transition-colors">
                (89) 99458-8003
              </div>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Crisp) {
                  (window as any).Crisp.chat.open();
                }
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#006279] to-[#004A5C] flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Chat ao Vivo
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Atendimento instantâneo através do chat
              </p>
              <div className="text-[#006279] font-semibold group-hover:text-[#004A5C] transition-colors">
                Resposta imediata
              </div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ou envie uma mensagem
              </h2>
              <p className="text-xl text-gray-600">
                Preencha o formulário abaixo e entraremos em contato o mais rápido possível
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Mensagem enviada com sucesso!
                  </h3>
                  <p className="text-gray-600">
                    Obrigado pelo contato. Nossa equipe responderá em breve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] transition-colors"
                      placeholder="Sobre o que você gostaria de falar?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] transition-colors resize-none"
                      placeholder="Descreva sua dúvida ou necessidade em detalhes..."
                    />
                  </div>

                  <div className="text-center">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                      className="inline-flex items-center justify-center gap-3 bg-[#E37A37] hover:bg-[#C65A1A] text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Enviar mensagem
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}