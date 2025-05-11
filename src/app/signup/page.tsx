'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle2, MessageCircle, Shield } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { z } from 'zod';
import Footer from '@/components/layout/Footer';
import { useRouter } from 'next/navigation';
import SimpleFooter from '@/components/layout/SimpleFooter';

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

  const handleAccountTypeChange = (value: AccountType) => {
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
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

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
      // Here you would typically make an API call to your backend
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     accountType: formData.accountType,
      //     document: formData.document.replace(/[^\d]/g, ''),
      //     name: formData.name,
      //     email: formData.email,
      //     phone: formData.phone.replace(/[^\d]/g, ''),
      //     privacyConsent: formData.privacyConsent,
      //   }),
      // });

      // if (!response.ok) {
      //   throw new Error('Erro ao criar conta');
      // }

      // Redirect to verification page
      router.push('/signup/verification');
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: 'Erro ao criar conta. Por favor, tente novamente.'
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
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 max-w-[400px] mx-auto"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Olá! 👋</h2>
              <p className="text-gray-600 text-lg">Vamos começar criando sua conta</p>
              <p className="text-gray-500">Você é uma pessoa física ou jurídica?</p>
            </div>
            <div className="space-y-6 p-3">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleAccountTypeChange('cpf')}
                  className={`w-full flex flex-col items-center justify-between rounded-xl border-2 p-6 text-gray-900 hover:bg-gray-50 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] relative z-10 ${
                    formData.accountType === 'cpf'
                      ? 'border-[#E85A27] ring-2 ring-[#E85A27]'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <span className="text-xl font-semibold mb-2">Pessoa Física</span>
                  <span className="text-sm text-gray-500">CPF</span>
                </button>
                {formData.accountType === 'cpf' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E85A27]/5 via-[#E85A27]/10 to-[#E85A27]/5 transition-all duration-300" />
                )}
              </div>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => handleAccountTypeChange('cnpj')}
                  className={`w-full flex flex-col items-center justify-between rounded-xl border-2 p-6 text-gray-900 hover:bg-gray-50 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] relative z-10 ${
                    formData.accountType === 'cnpj'
                      ? 'border-[#E85A27] ring-2 ring-[#E85A27]'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <span className="text-xl font-semibold mb-2">Pessoa Jurídica</span>
                  <span className="text-sm text-gray-500">CNPJ</span>
                </button>
                {formData.accountType === 'cnpj' && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#E85A27]/5 via-[#E85A27]/10 to-[#E85A27]/5 transition-all duration-300" />
                )}
              </div>
            </div>
            {errors.accountType && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errors.accountType}</AlertDescription>
              </Alert>
            )}
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8 max-w-[800px] mx-auto"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Quase lá! 🎯</h2>
              <p className="text-gray-600 text-lg">Precisamos de algumas informações {formData.accountType === 'cpf' ? 'pessoais' : 'da empresa'}</p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-2">
                <Shield className="h-4 w-4 text-[#E85A27]" />
                <span>Seus dados estão seguros e protegidos</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="document" className="text-lg font-medium">
                    {formData.accountType === 'cpf' ? 'Seu CPF' : 'CNPJ da empresa'}
                  </Label>
                  <Input
                    id="document"
                    name="document"
                    value={formData.document}
                    onChange={(e) => {
                      const formatted = formatDocument(e.target.value, formData.accountType);
                      handleInputChange({ target: { name: 'document', value: formatted } } as any);
                    }}
                    placeholder={formData.accountType === 'cpf' ? '000.000.000-00' : '00.000.000/0000-00'}
                    className="mt-2 text-lg py-6"
                  />
                  {errors.document && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{errors.document}</AlertDescription>
                    </Alert>
                  )}
                </div>

                {formData.accountType === 'cnpj' && (
                  <div>
                    <Label htmlFor="companyName" className="text-lg font-medium">
                      Nome da empresa
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Digite o nome da sua empresa"
                      className="mt-2 text-lg py-6"
                    />
                    {errors.companyName && (
                      <Alert variant="destructive" className="mt-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.companyName}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                )}

                <div>
                  <Label htmlFor="name" className="text-lg font-medium">
                    {formData.accountType === 'cpf' ? 'Seu nome completo' : 'Nome do responsável'}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={formData.accountType === 'cpf' ? 'Digite seu nome completo' : 'Digite o nome do responsável'}
                    className="mt-2 text-lg py-6"
                  />
                  {errors.name && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{errors.name}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-lg font-medium">Seu melhor e-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    className="mt-2 text-lg py-6"
                  />
                  {errors.email && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{errors.email}</AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="phone" className="text-lg font-medium">Seu WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const formatted = formatPhone(e.target.value);
                      handleInputChange({ target: { name: 'phone', value: formatted } } as any);
                    }}
                    placeholder="(00) 00000-0000"
                    className="mt-2 text-lg py-6"
                  />
                  {errors.phone && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{errors.phone}</AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="flex items-start space-x-3 mt-6">
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
                    className="mt-1"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="privacyConsent"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Declaro que conheço e autorizo o tratamento dos meus dados pessoais de acordo com a Política de Privacidade da Debita.aí.
                    </label>
                    {errors.privacyConsent && (
                      <Alert variant="destructive" className="mt-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{errors.privacyConsent}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center relative overflow-hidden">
      {/* Radial background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E85A27]/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E85A27]/5 via-transparent to-transparent scale-150" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E85A27]/5 via-transparent to-transparent scale-200" />
      
      {/* Radial lines effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_#E85A27_1px,_transparent_1px),_linear-gradient(to_bottom,_#E85A27_1px,_transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Brand Logo and Home Button */}
      <div className="mt-8 mb-4 relative z-10 flex justify-between items-center w-full max-w-[1124px]">
        <img src="/logo.svg" alt="Debita.aí" className="h-8 w-auto object-contain drop-shadow-lg" />
        <Button
          variant="outline"
          onClick={() => router.push('/')}
          className="text-[#E85A27] border-[#E85A27] hover:bg-[#E85A27] hover:text-white transition-all duration-200"
        >
          Voltar para a home
        </Button>
      </div>

      <div className="flex-1 flex items-center justify-center w-full mb-32">
        <Card className="w-full max-w-[1124px] p-8 shadow-2xl border-none bg-white/80 backdrop-blur-sm relative z-10 min-h-[750px] flex flex-col mt-16">
          <div className="mb-8 max-w-[400px] mx-auto w-full">
            <div className="relative flex justify-between mb-2">
              {/* Connecting lines */}
              <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200 -z-10" />
              <div 
                className="absolute top-5 left-0 h-[2px] bg-[#E85A27] transition-all duration-300 -z-10"
                style={{ width: `${((step - 1) / 1) * 100}%` }}
              />
              
              {[1, 2].map((stepNumber) => (
                <div key={stepNumber} className="relative">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                      stepNumber <= step
                        ? 'bg-[#E85A27] text-white scale-110 shadow-lg shadow-[#E85A27]/20'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber <= step && (
                    <div className="absolute inset-0 rounded-full ring-2 ring-[#E85A27] animate-pulse" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <div className={`text-xs text-center w-16 transition-colors duration-300 ${step >= 1 ? 'text-[#E85A27] font-medium' : 'text-gray-500'}`}>
                <div className="flex flex-col items-center">
                  <span>Tipo de</span>
                  <span>conta</span>
                </div>
              </div>
              <div className={`text-xs text-center w-16 transition-colors duration-300 ${step >= 2 ? 'text-[#E85A27] font-medium' : 'text-gray-500'}`}>
                <div className="flex flex-col items-center">
                  <span>Dados</span>
                  <span>pessoais</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2">
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100">
            <div className="flex space-x-4">
              {step > 1 && (
                <Button variant="outline" onClick={prevStep} className="w-full text-lg py-6 rounded-xl">
                  Voltar
                </Button>
              )}
              <Button 
                onClick={step === 2 ? handleSubmit : nextStep} 
                className="w-full bg-[#E85A27] hover:bg-[#D84A1F] text-lg py-6 rounded-xl"
                disabled={isSubmitting}
              >
                {step === 2 
                  ? (isSubmitting ? 'Criando conta...' : 'Criar conta')
                  : 'Continuar'
                }
              </Button>
            </div>
            {errors.submit && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errors.submit}</AlertDescription>
              </Alert>
            )}
          </div>
        </Card>
      </div>

      {/* Chat Icon */}
      <motion.a
        href="https://wa.me/551152414928"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#E85A27] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>

      {/* Footer */}
      <div className="w-full mt-8 relative z-50">
        <SimpleFooter />
      </div>
    </div>
  );
} 