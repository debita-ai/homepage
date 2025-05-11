'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, Upload, CheckCircle2 } from 'lucide-react';
import { z } from 'zod';

type AccountType = 'cpf' | 'cnpj';

interface FormData {
  accountType: AccountType;
  document: string;
  documentPhoto: File | null;
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  address: {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
}

interface FormErrors {
  [key: string]: string;
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
const cepSchema = z.string().regex(/^\d{5}-\d{3}$/, 'Formato de CEP inválido');

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    accountType: 'cpf',
    document: '',
    documentPhoto: null,
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAccountTypeChange = (value: AccountType) => {
    // Clear all form data when switching account type
    setFormData({
      accountType: value,
      document: '',
      documentPhoto: null,
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      address: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
      },
    });
    setErrors({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof FormData] as Record<string, any>),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleDocumentPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, documentPhoto: file }));
      setErrors(prev => ({ ...prev, documentPhoto: '' }));
    }
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

  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/(\d{5})(\d{3})/, '$1-$2');
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: FormErrors = {};

    switch (currentStep) {
      case 1:
        if (!formData.accountType) {
          newErrors.accountType = 'Selecione um tipo de conta';
        }
        break;

      case 2:
        if (formData.accountType === 'cpf') {
          try {
            cpfSchema.parse(formData.document);
          } catch (error) {
            newErrors.document = 'Formato de CPF inválido';
          }
        } else {
          try {
            cnpjSchema.parse(formData.document);
          } catch (error) {
            newErrors.document = 'Formato de CNPJ inválido';
          }
        }
        if (!formData.documentPhoto) {
          newErrors.documentPhoto = 'Por favor, envie uma foto do documento';
        }
        break;

      case 3:
        if (!formData.name.trim()) {
          newErrors.name = 'Nome é obrigatório';
        }
        try {
          emailSchema.parse(formData.email);
        } catch (error) {
          newErrors.email = 'Formato de email inválido';
        }
        try {
          phoneSchema.parse(formData.phone);
        } catch (error) {
          newErrors.phone = 'Formato de telefone inválido';
        }
        break;

      case 4:
        try {
          cepSchema.parse(formData.address.cep);
        } catch (error) {
          newErrors['address.cep'] = 'Formato de CEP inválido';
        }
        if (!formData.address.street) {
          newErrors['address.street'] = 'Rua é obrigatória';
        }
        if (!formData.address.number) {
          newErrors['address.number'] = 'Número é obrigatório';
        }
        if (!formData.address.neighborhood) {
          newErrors['address.neighborhood'] = 'Bairro é obrigatório';
        }
        if (!formData.address.city) {
          newErrors['address.city'] = 'Cidade é obrigatória';
        }
        if (!formData.address.state) {
          newErrors['address.state'] = 'Estado é obrigatório';
        }
        break;

      case 5:
        try {
          passwordSchema.parse(formData.password);
        } catch (error) {
          if (error instanceof z.ZodError) {
            newErrors.password = error.errors[0].message;
          }
        }
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'As senhas não coincidem';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    try {
      // Here you would typically make an API call to your backend
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'address') {
          formDataToSend.append(key, JSON.stringify(value));
        } else if (key === 'documentPhoto' && value) {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(key, value as string);
        }
      });

      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Falha no cadastro');
      }

      window.location.href = '/dashboard';
    } catch (error) {
      setErrors({ submit: 'Falha ao criar conta. Por favor, tente novamente.' });
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
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Como você quer criar sua conta?</h2>
            <RadioGroup
              defaultValue={formData.accountType}
              onValueChange={(value) => handleAccountTypeChange(value as AccountType)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cpf" id="cpf" />
                <Label htmlFor="cpf">Pessoa Física (CPF)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cnpj" id="cnpj" />
                <Label htmlFor="cnpj">Pessoa Jurídica (CNPJ)</Label>
              </div>
            </RadioGroup>
            {errors.accountType && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errors.accountType}</AlertDescription>
              </Alert>
            )}
            <Button onClick={nextStep} className="w-full">
              Continuar
            </Button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              {formData.accountType === 'cpf' ? 'Digite seu CPF' : 'Digite seu CNPJ'}
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="document">
                  {formData.accountType === 'cpf' ? 'CPF' : 'CNPJ'}
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
                />
                {errors.document && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.document}</AlertDescription>
                  </Alert>
                )}
              </div>
              <div>
                <Label htmlFor="documentPhoto">Foto do documento</Label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="documentPhoto"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none"
                      >
                        <span>Enviar foto</span>
                        <input
                          id="documentPhoto"
                          name="documentPhoto"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleDocumentPhotoChange}
                        />
                      </label>
                      <p className="pl-1">ou arraste e solte</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF até 10MB
                    </p>
                  </div>
                </div>
                {formData.documentPhoto && (
                  <p className="mt-2 text-sm text-gray-500">
                    Arquivo selecionado: {formData.documentPhoto.name}
                  </p>
                )}
                {errors.documentPhoto && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.documentPhoto}</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={prevStep} className="w-full">
                Voltar
              </Button>
              <Button onClick={nextStep} className="w-full">
                Continuar
              </Button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Seus dados pessoais</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                />
                {errors.name && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.name}</AlertDescription>
                  </Alert>
                )}
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.email}</AlertDescription>
                  </Alert>
                )}
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    handleInputChange({ target: { name: 'phone', value: formatted } } as any);
                  }}
                  placeholder="(00) 00000-0000"
                />
                {errors.phone && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.phone}</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={prevStep} className="w-full">
                Voltar
              </Button>
              <Button onClick={nextStep} className="w-full">
                Continuar
              </Button>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Seu endereço</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="address.cep">CEP</Label>
                <Input
                  id="address.cep"
                  name="address.cep"
                  value={formData.address.cep}
                  onChange={(e) => {
                    const formatted = formatCEP(e.target.value);
                    handleInputChange({ target: { name: 'address.cep', value: formatted } } as any);
                  }}
                  placeholder="00000-000"
                />
                {errors['address.cep'] && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors['address.cep']}</AlertDescription>
                  </Alert>
                )}
              </div>
              <div>
                <Label htmlFor="address.street">Rua</Label>
                <Input
                  id="address.street"
                  name="address.street"
                  value={formData.address.street}
                  onChange={handleInputChange}
                  placeholder="Digite sua rua"
                />
                {errors['address.street'] && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors['address.street']}</AlertDescription>
                  </Alert>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="address.number">Número</Label>
                  <Input
                    id="address.number"
                    name="address.number"
                    value={formData.address.number}
                    onChange={handleInputChange}
                    placeholder="Número"
                  />
                  {errors['address.number'] && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{errors['address.number']}</AlertDescription>
                    </Alert>
                  )}
                </div>
                <div>
                  <Label htmlFor="address.complement">Complemento</Label>
                  <Input
                    id="address.complement"
                    name="address.complement"
                    value={formData.address.complement}
                    onChange={handleInputChange}
                    placeholder="Complemento (opcional)"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address.neighborhood">Bairro</Label>
                <Input
                  id="address.neighborhood"
                  name="address.neighborhood"
                  value={formData.address.neighborhood}
                  onChange={handleInputChange}
                  placeholder="Digite seu bairro"
                />
                {errors['address.neighborhood'] && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors['address.neighborhood']}</AlertDescription>
                  </Alert>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="address.city">Cidade</Label>
                  <Input
                    id="address.city"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleInputChange}
                    placeholder="Digite sua cidade"
                  />
                  {errors['address.city'] && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{errors['address.city']}</AlertDescription>
                    </Alert>
                  )}
                </div>
                <div>
                  <Label htmlFor="address.state">Estado</Label>
                  <Input
                    id="address.state"
                    name="address.state"
                    value={formData.address.state}
                    onChange={handleInputChange}
                    placeholder="UF"
                    maxLength={2}
                  />
                  {errors['address.state'] && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{errors['address.state']}</AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={prevStep} className="w-full">
                Voltar
              </Button>
              <Button onClick={nextStep} className="w-full">
                Continuar
              </Button>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Crie sua senha</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Digite sua senha"
                />
                {errors.password && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.password}</AlertDescription>
                  </Alert>
                )}
                <div className="mt-2 space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className={`h-4 w-4 ${formData.password.length >= 8 ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className="text-sm">Pelo menos 8 caracteres</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className={`h-4 w-4 ${/[A-Z]/.test(formData.password) ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className="text-sm">Uma letra maiúscula</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className={`h-4 w-4 ${/[a-z]/.test(formData.password) ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className="text-sm">Uma letra minúscula</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className={`h-4 w-4 ${/[0-9]/.test(formData.password) ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className="text-sm">Um número</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className={`h-4 w-4 ${/[^A-Za-z0-9]/.test(formData.password) ? 'text-green-500' : 'text-gray-300'}`} />
                    <span className="text-sm">Um caractere especial</span>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirme sua senha</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirme sua senha"
                />
                {errors.confirmPassword && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{errors.confirmPassword}</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" onClick={prevStep} className="w-full">
                Voltar
              </Button>
              <Button onClick={handleSubmit} className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Criando conta...' : 'Criar conta'}
              </Button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  stepNumber <= step
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepNumber}
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-500">Tipo de conta</div>
            <div className="text-sm text-gray-500">Documento</div>
            <div className="text-sm text-gray-500">Dados pessoais</div>
            <div className="text-sm text-gray-500">Endereço</div>
            <div className="text-sm text-gray-500">Senha</div>
          </div>
        </div>
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
      </Card>
    </div>
  );
} 