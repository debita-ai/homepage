import { z } from 'zod';

// Interest form validation
export const interestSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços'),
  email: z.string()
    .email('Email inválido')
    .toLowerCase()
    .refine(email => email.includes('.'), 'Email deve ter um domínio válido'),
});

// Support form validation
export const supportSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string()
    .email('Email inválido')
    .toLowerCase(),
  subject: z.string()
    .min(5, 'Assunto deve ter pelo menos 5 caracteres')
    .max(200, 'Assunto deve ter no máximo 200 caracteres'),
  message: z.string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(2000, 'Mensagem deve ter no máximo 2000 caracteres'),
});

// Contact form validation
export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres'),
  email: z.string()
    .email('Email inválido')
    .toLowerCase(),
  subject: z.enum(['suporte', 'vendas', 'parceria', 'feedback', 'outro'], {
    errorMap: () => ({ message: 'Assunto inválido' })
  }),
  message: z.string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(2000, 'Mensagem deve ter no máximo 2000 caracteres'),
  company: z.string()
    .max(100, 'Nome da empresa deve ter no máximo 100 caracteres')
    .optional(),
});

// Validation error formatter
export function formatValidationErrors(errors: z.ZodError) {
  return errors.errors.reduce((acc, error) => {
    acc[error.path[0]] = error.message;
    return acc;
  }, {} as Record<string, string>);
}

// Email validation helper
export function isValidEmail(email: string): boolean {
  try {
    z.string().email().parse(email);
    return true;
  } catch {
    return false;
  }
}

// Name validation helper
export function isValidName(name: string): boolean {
  try {
    z.string().min(2).max(100).parse(name);
    return true;
  } catch {
    return false;
  }
}

// Message validation helper
export function isValidMessage(message: string): boolean {
  try {
    z.string().min(10).max(2000).parse(message);
    return true;
  } catch {
    return false;
  }
}

export type InterestFormData = z.infer<typeof interestSchema>;
export type SupportFormData = z.infer<typeof supportSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;