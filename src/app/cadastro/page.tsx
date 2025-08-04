'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle2, MessageCircle, Shield, ArrowLeft, Building2, User } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { z } from 'zod';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import SimpleFooter from '@/components/layout/SimpleFooter';
import Link from 'next/link';
import Image from 'next/image';
import DebitaLogo from '../../../public/logo.svg';
import MinDebitaLogoGreen from '../../../public/min-logo-green.svg';
import ABFintechsLogo from '../../../public/abfintechs.png';

type AccountType = 'cpf' | 'cnpj';

interface FormData {
  accountType: AccountType;
  document: string;
  companyName?: string;
  name: string;
  email: string;
  phone: string;
  privacyConsent: boolean;
}

interface FormErrors {
  [key: string]: string | undefined;
}

// Schemas movidos para fora do componente para evitar recriação
const passwordSchema = z.string()
  .min(8, 'A senha deve ter pelo menos 8 caracteres')
  .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
  .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
  .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
  .regex(/[^A-Za-z0-9]/, 'A senha deve conter pelo menos um caractere especial');

const cpfSchema = z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'Formato de CPF inválido');
const cnpjSchema = z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, 'Formato de CNPJ inválido');
const emailSchema = z.string().email('Formato de email inválido');
const phoneSchema = z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato de telefone inválido');

export default function SignUpPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    accountType: 'cpf',
    document: '',
    companyName: '',
    name: '',
    email: '',
    phone: '',
    privacyConsent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Memoize handlers para evitar recriação
  const handleAccountTypeChange = useMemo(() => (value: AccountType) => {
    setFormData({
      accountType: value,
      document: '',
      companyName: '',
      name: '',
      email: '',
      phone: '',
      privacyConsent: false,
    });
    setErrors({});
  }, []);

  const handleInputChange = useMemo(() => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  // Simular carregamento inicial rápido
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0E0D1]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#E27936]"></div>
      </div>
    );
  }

  const validateStep = () => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.accountType) {
          newErrors.accountType = 'Por favor, selecione um tipo de conta';
        }
        break;

      case 2:
        if (!formData.document) {
          newErrors.document = 'Por favor, digite seu documento';
        } else if (formData.accountType === 'cpf' && !cpfSchema.safeParse(formData.document).success) {
          newErrors.document = 'CPF inválido';
        } else if (formData.accountType === 'cnpj' && !cnpjSchema.safeParse(formData.document).success) {
          newErrors.document = 'CNPJ inválido';
        }
        if (formData.accountType === 'cnpj' && !formData.companyName) {
          newErrors.companyName = 'Por favor, digite a razão social';
        }
        if (!formData.name) {
          newErrors.name = 'Por favor, digite seu nome';
        }
        if (!formData.email) {
          newErrors.email = 'Por favor, digite seu e-mail';
        } else if (!emailSchema.safeParse(formData.email).success) {
          newErrors.email = 'E-mail inválido';
        }
        if (!formData.phone) {
          newErrors.phone = 'Por favor, digite seu telefone';
        } else if (!phoneSchema.safeParse(formData.phone).success) {
          newErrors.phone = 'Telefone inválido';
        }
        if (!formData.privacyConsent) {
          newErrors.privacyConsent = 'Você precisa aceitar a política de privacidade';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDocument = (value: string, type: AccountType) => {
    const numbers = value.replace(/\D/g, '');
    if (type === 'cpf') {
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          document: formData.document.replace(/[^\d]/g, ''),
          phone: formData.phone.replace(/[^\d]/g, ''),
          sellerType: formData.accountType === 'cpf' ? 'INDIVIDUAL' : 'COMPANY',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao criar conta');
      }

      // Redirect to verification page
      router.push('/signup/verification');
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: error instanceof Error ? error.message : 'Erro ao criar conta. Por favor, tente novamente.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl font-extrabold text-[#E27936] mb-6 leading-tight tracking-tight font-[Montserrat] "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              Você tem uma empresa?
            </motion.h1>

            <motion.p 
              className="text-lg text-[#E27936]/90 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              O cadastro é exclusivo para empresas (CNPJ). Caso não seja empresa, clique abaixo.
            </motion.p>

            <motion.div 
              className="flex flex-col gap-4 items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              {/* <Button
                variant="primary"
                size="normal"
                label="Sim, eu tenho uma empresa"
                onClick={() => {
                  handleAccountTypeChange('cnpj');
                  nextStep();
                }}
              />
              <Button
                variant="tertiary"
                size="normal"
                label="Não sou empresa"
                onClick={() => {
                  window.open('https://docs.google.com/forms/d/e/1FAIpQLSf-placeholder/viewform', '_blank');
                }}
              /> */}
            </motion.div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#E27936] mb-6 leading-tight tracking-tight font-[Montserrat]">
                Quase lá!
              </h2>
              <p className="text-lg text-[#E27936]/90 max-w-2xl mx-auto leading-relaxed font-medium">
                Só mais algumas informações para finalizar seu cadastro.
              </p>
            </motion.div>

            {/* Grid de inputs */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div>
                <Label htmlFor="document" className="text-lg font-semibold text-[#E27936] mb-4 block">
                  CNPJ da empresa
                </Label>
                <Input
                  id="document"
                  name="document"
                  value={formData.document}
                  onChange={(e) => {
                    const formatted = formatDocument(e.target.value, formData.accountType);
                    handleInputChange({ target: { name: 'document', value: formatted } } as any);
                  }}
                  placeholder="00.000.000/0000-00"
                  className="text-lg py-5 px-6 border-[#E27936]/20 focus:border-[#E27936] focus:ring-[#E27936]/20 bg-white/90 rounded-xl w-full"
                />
                {errors.document && (
                  <div className="mt-4 text-red-600 text-base flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    {errors.document}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="companyName" className="text-lg font-semibold text-[#E27936] mb-4 block">
                  Nome da empresa
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Digite o nome da sua empresa"
                  className="text-lg py-5 px-6 border-[#E27936]/20 focus:border-[#E27936] focus:ring-[#E27936]/20 bg-white/90 rounded-xl w-full"
                />
                {errors.companyName && (
                  <div className="mt-4 text-red-600 text-base">{errors.companyName}</div>
                )}
              </div>

              <div>
                <Label htmlFor="name" className="text-lg font-semibold text-[#E27936] mb-4 block">
                  Nome do responsável
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite o nome do responsável"
                  className="text-lg py-5 px-6 border-[#E27936]/20 focus:border-[#E27936] focus:ring-[#E27936]/20 bg-white/90 rounded-xl w-full"
                />
                {errors.name && (
                  <div className="mt-4 text-red-600 text-base">{errors.name}</div>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-lg font-semibold text-[#E27936] mb-4 block">Seu melhor e-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="text-lg py-5 px-6 border-[#E27936]/20 focus:border-[#E27936] focus:ring-[#E27936]/20 bg-white/90 rounded-xl w-full"
                />
                {errors.email && (
                  <div className="mt-4 text-red-600 text-base">{errors.email}</div>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-lg font-semibold text-[#E27936] mb-4 block">Seu WhatsApp</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    handleInputChange({ target: { name: 'phone', value: formatted } } as any);
                  }}
                  placeholder="(00) 00000-0000"
                  className="text-lg py-5 px-6 border-[#E27936]/20 focus:border-[#E27936] focus:ring-[#E27936]/20 bg-white/90 rounded-xl w-full"
                />
                {errors.phone && (
                  <div className="mt-4 text-red-600 text-base">{errors.phone}</div>
                )}
              </div>
            </motion.div>

            {/* Checkbox de privacidade */}
            <div className="flex items-start space-x-4 p-8 bg-white/90 rounded-xl border border-[#E27936]/20 mb-8">
              <Checkbox
                id="privacyConsent"
                checked={formData.privacyConsent}
                onCheckedChange={(checked) => {
                  setFormData(prev => ({
                    ...prev,
                    privacyConsent: checked as boolean
                  }));
                  if (errors.privacyConsent) {
                    setErrors(prev => {
                      const newErrors = { ...prev };
                      delete newErrors.privacyConsent;
                      return newErrors;
                    });
                  }
                }}
                className="mt-1 border-[#E27936] data-[state=checked]:bg-[#E27936] data-[state=checked]:border-[#E27936]"
              />
              <div className="grid gap-2 leading-relaxed">
                <label
                  htmlFor="privacyConsent"
                  className="text-base font-medium text-[#E27936] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Declaro que conheço e autorizo o tratamento dos meus dados pessoais de acordo com a Política de Privacidade da Debita.aí.
                </label>
                {errors.privacyConsent && (
                  <div className="text-red-600 text-base">{errors.privacyConsent}</div>
                )}
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button
                variant="secondary"
                size="normal"
                label="Voltar"
                onClick={prevStep}
              />
              <Button
                variant="primary"
                size="normal"
                label={isSubmitting ? 'Criando conta...' : 'Criar conta'}
                onClick={handleSubmit}
              /> */}
            </div>

            {errors.submit && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-base"
              >
                {errors.submit}
              </motion.div>
            )}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F0E0D1] flex flex-col relative font-satoshi">
      {/* Header com logo e botão voltar */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src={DebitaLogo} 
              alt="Debita.aí" 
              width={120} 
              height={32}
              className="transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          <Link href="/">
            {/* <Button
              variant="secondary"
              size="normal"
              label="Voltar para a home"
            /> */}
          </Link>
        </div>
      </div>

      {/* Content container - estilo Netflix */}
      <div className="flex-1 flex items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12">
        <div className="w-full max-w-2xl">
          {/* Progress indicator - estilo Netflix */}
          <motion.div 
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-lg text-[#E27936]/80 font-medium">
              {step === 1 ? 'Passo 1 de 2' : 'Passo 2 de 2'}
            </div>
          </motion.div>

          {/* Form content - sem card, estilo Netflix */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>

            {/* Action buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >


            </motion.div>

            {errors.submit && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-base"
              >
                {errors.submit}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Chat Icon */}
      <motion.a
        href="https://wa.me/5589994588003"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#E27936] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>

      {/* Footer */}
      <footer className="bg-[#D9F0E9] border-t border-[#E27936]/20 mt-auto font-satoshi">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Linha principal: logo, texto, links */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
            <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-0">
              <Image 
                src={MinDebitaLogoGreen} 
                alt="Debita.aí" 
                width={40} 
                height={20}
                className="opacity-80"
              />
              <div className="hidden sm:block w-px h-6 bg-[#006178]/20"></div>
              <p className="text-[#006178]/70 text-xs font-medium">
                Sua plataforma completa de gestão financeira
              </p>
            </div>
            <div className="flex w-full justify-center">
              <div className="flex items-center gap-2 text-xs text-[#006178]/60">
                <Shield className="h-3 w-3 text-[#4A8C7A]" />
                <span>Todos seus dados estão protegidos</span>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:gap-6 text-xs text-[#006178]/70">
              <a href="#" className="hover:text-[#4A8C7A] transition-colors duration-200 font-medium">Ajuda</a>
              <a href="#" className="hover:text-[#4A8C7A] transition-colors duration-200 font-medium">Privacidade</a>
              <a href="https://wa.me/5589994588003" className="hover:text-[#4A8C7A] transition-colors duration-200 font-medium">WhatsApp</a>
            </div>
          </div>

          {/* Linha de informações e certificação */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-[#006178]/10">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-[#006178]/60 text-center sm:text-left">
              <span className="font-medium">DEBITA.AI GESTAO FINANCEIRA E MEIOS DE PAGAMENTO LTDA</span>
              <span className="hidden sm:inline">|</span>
              <span>CNPJ: 46.379.233/0001-48</span>
              <span className="hidden sm:inline">|</span>
              <span>suporte@debita.ai</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mt-4 sm:mt-0">
              <Image 
                src={ABFintechsLogo} 
                alt="ABFintechs" 
                width={80} 
                height={20}
                className="opacity-100"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-[#006178]/10 mt-2">
            <div className="text-center">
              <p className="text-xs text-[#006178]/50 font-medium">
                © 2025 Debita.aí - Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 