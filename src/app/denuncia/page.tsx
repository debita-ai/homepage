"use client";

import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useState } from "react";
import { 
  ArrowLeft, 
  AlertTriangle, 
  Shield, 
  FileText, 
  Phone, 
  Mail, 
  Clock,
  Send,
  User,
  MessageSquare,
  CheckCircle2
} from "lucide-react";

export default function DenunciaPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    categoria: '',
    descricao: '',
    evidencias: '',
    anonimo: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const categorias = [
    'Fraude ou Golpe',
    'Lavagem de Dinheiro',
    'Uso Indevido de Dados',
    'Discriminação ou Assédio',
    'Violação de Privacidade',
    'Conduta Antiética',
    'Irregularidade Financeira',
    'Outro'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria o envio real
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FFF3E7] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Denúncia Enviada</h2>
          <p className="text-gray-600 mb-6">
            Sua denúncia foi recebida com sucesso. Nossa equipe analisará o caso e entrará em contato se necessário.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-[#E37A37] text-white px-6 py-3 rounded-lg hover:bg-[#C65A1A] transition-colors">
            Voltar ao Início
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF3E7]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 py-6">
            <Link href="/" className="flex items-center gap-3 group">
              <ArrowLeft className="h-5 w-5 text-[#E37A37] transition-transform group-hover:-translate-x-1" />
              <span className="text-lg font-semibold text-gray-900">Voltar ao Início</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#E37A37] to-[#C65A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10 z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm text-white shadow-lg mb-6">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white font-baskerville">
              Canal de Denúncias
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Reporte qualquer irregularidade, fraude ou conduta inadequada. Sua denúncia é importante para manter nosso ambiente seguro.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#FFF3E7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Informações Importantes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#E37A37]" />
                  Informações Importantes
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Prazo de Resposta</h4>
                      <p className="text-sm text-gray-600">Analisamos todas as denúncias em até 5 dias úteis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Anonimato</h4>
                      <p className="text-sm text-gray-600">Você pode fazer denúncias anônimas se preferir</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Confidencialidade</h4>
                      <p className="text-sm text-gray-600">Todas as informações são tratadas com máxima confidencialidade</p>
                    </div>
                  </div>
                </div>

                {/* Contatos Diretos */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-4">Contatos Diretos</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a href="mailto:denuncia@debita.ai" className="text-sm text-[#E37A37] hover:underline">
                        denuncia@debita.ai
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">+55 89 99458-8003</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200/50 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-[#E37A37]" />
                  Formulário de Denúncia
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Checkbox Anônimo */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        name="anonimo"
                        checked={formData.anonimo}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#E37A37] border-gray-300 rounded focus:ring-[#E37A37]"
                      />
                      <span className="text-gray-700 font-medium">Fazer denúncia anônima</span>
                    </label>
                    <p className="text-xs text-gray-500 mt-1 ml-7">
                      Marque esta opção se não quiser se identificar
                    </p>
                  </div>

                  {/* Dados Pessoais - Ocultos se anônimo */}
                  {!formData.anonimo && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          required={!formData.anonimo}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-transparent"
                          placeholder="Seu nome completo"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required={!formData.anonimo}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-transparent"
                          placeholder="seu@email.com"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-transparent"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>
                  )}

                  {/* Categoria */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Categoria da Denúncia *
                    </label>
                    <select
                      name="categoria"
                      value={formData.categoria}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-transparent"
                    >
                      <option value="">Selecione uma categoria</option>
                      {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                          {categoria}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Descrição */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrição Detalhada *
                    </label>
                    <textarea
                      name="descricao"
                      value={formData.descricao}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-transparent resize-vertical"
                      placeholder="Descreva detalhadamente o que aconteceu, incluindo datas, locais, pessoas envolvidas e qualquer informação relevante..."
                    />
                  </div>

                  {/* Evidências */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Evidências ou Documentos
                    </label>
                    <textarea
                      name="evidencias"
                      value={formData.evidencias}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E37A37] focus:border-transparent resize-vertical"
                      placeholder="Liste evidências, documentos, prints de tela ou qualquer material que comprove a denúncia. Se preferir, envie por e-mail para denuncia@debita.ai"
                    />
                  </div>

                  {/* Botão Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#E37A37] hover:bg-[#C65A1A] text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Enviar Denúncia
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar esta denúncia, você concorda que as informações fornecidas são verdadeiras 
                    e autoriza a Debita.ai a investigar o caso reportado.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}