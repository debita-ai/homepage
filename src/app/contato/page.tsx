"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  User,
  Building,
  FileText,
  CheckCircle2,
  AlertCircle,
  Globe,
  Linkedin,
  Instagram
} from "lucide-react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "suporte",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar contato');
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "suporte",
        message: ""
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error('Error submitting contact:', error);
      setSubmitStatus("error");
      
      // Reset error after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Suporte Técnico",
      subtitle: "Dúvidas e problemas técnicos",
      content: "suporte@debita.ai",
      action: "mailto:suporte@debita.ai",
      color: "from-[#E37A37] to-[#C65A1A]",
      description: "Para questões técnicas e suporte geral"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Ouvidoria",
      subtitle: "Reclamações e sugestões",
      content: "ouvidoria@debita.ai",
      action: "mailto:ouvidoria@debita.ai",
      color: "from-[#006279] to-[#004A5C]",
      description: "Para questões sobre atendimento"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Telefone",
      subtitle: "Ligue para nós",
      content: "+55 89 99458-8003",
      action: "tel:+5589994588003",
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      description: "Seg-Sex das 9h às 18h"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      subtitle: "Chat instantâneo",
      content: "+55 89 99458-8003",
      action: "https://wa.me/5589994588003",
      color: "from-[#25D366] to-[#1DA851]",
      description: "Disponível 24/7"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Endereço",
      subtitle: "Nossa localização",
      content: "Uruçuí, PI - 64860-000",
      action: "#",
      color: "from-[#4A8C7A] to-[#3A6F5F]",
      description: "Brasil"
    }
  ];

  const officeHours = [
    { day: "Segunda-feira", hours: "9:00 - 18:00" },
    { day: "Terça-feira", hours: "9:00 - 18:00" },
    { day: "Quarta-feira", hours: "9:00 - 18:00" },
    { day: "Quinta-feira", hours: "9:00 - 18:00" },
    { day: "Sexta-feira", hours: "9:00 - 18:00" },
    { day: "Sábado", hours: "Fechado" },
    { day: "Domingo", hours: "Fechado" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
              <MessageCircle className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Entre em Contato
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudar! Entre em contato conosco e tire todas as suas dúvidas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como podemos ajudar?
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a forma mais conveniente para entrar em contato
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="block bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {method.subtitle}
                  </p>
                  <p className="text-lg font-semibold text-gray-900 mb-2">
                    {method.content}
                  </p>
                  <p className="text-sm text-gray-500">
                    {method.description}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Company Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envie uma Mensagem
                </h2>
                <p className="text-gray-600 mb-8">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </p>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <p className="text-green-800 font-medium">
                      Mensagem enviada com sucesso! Entraremos em contato em breve.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                  >
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    <p className="text-red-800 font-medium">
                      Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] outline-none transition-colors"
                          placeholder="Seu nome"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] outline-none transition-colors"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] outline-none transition-colors"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] outline-none transition-colors appearance-none bg-white"
                      >
                        <option value="suporte">Suporte Técnico</option>
                        <option value="vendas">Vendas</option>
                        <option value="parceria">Parcerias</option>
                        <option value="feedback">Feedback</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-[#E37A37] outline-none transition-colors resize-vertical"
                      placeholder="Descreva como podemos ajudar você..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#E37A37] hover:bg-[#C65A1A] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Company Details */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações da Empresa
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Razão Social</h4>
                    <p className="text-gray-600">DEBITA.AI GESTAO FINANCEIRA E MEIOS DE PAGAMENTO LTDA</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">CNPJ</h4>
                    <p className="text-gray-600">46.379.233/0001-48</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Endereço</h4>
                    <p className="text-gray-600">Uruçuí, Piauí - 64860-000<br />Brasil</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Redes Sociais</h4>
                    <div className="flex items-center gap-4">
                      <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#0077B5] to-[#005885] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-gradient-to-br from-[#006279] to-[#004A5C] rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <Globe className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A8C7A] to-[#3A6F5F] flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Horário de Atendimento
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className={`text-sm font-semibold ${schedule.hours === 'Fechado' ? 'text-red-500' : 'text-green-600'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-800">
                        <strong>Importante:</strong> Para urgências fora do horário comercial, 
                        utilize nosso WhatsApp ou chat online disponível 24/7.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E37A37] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Precisa de ajuda imediata?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Nossa equipe está online e pronta para ajudar você agora mesmo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-[#E37A37] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.Crisp) {
                    window.Crisp.chat.open();
                  }
                }}
              >
                <MessageCircle className="h-5 w-5" />
                Chat Online
              </button>
              <a
                href="https://wa.me/5589994588003"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}