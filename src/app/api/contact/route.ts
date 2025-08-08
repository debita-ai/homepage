import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { ContactInquiry } from '../../../components/email-templates/ContactInquiry';
import { AdminNotification } from '../../../components/email-templates/AdminNotification';
import { z } from 'zod';

const resend = new Resend("re_bSochSxg_4FRgUvxKM786GCDLkHr8BK2F");

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.enum(['suporte', 'vendas', 'parceria', 'feedback', 'outro'], {
    errorMap: () => ({ message: 'Assunto inválido' })
  }),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  company: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return Response.json(
        { error: 'Dados inválidos', details: validation.error.errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message, company } = validation.data;
    const timestamp = new Date().toISOString();

    // Determine recipient based on subject
    const getRecipientEmail = (subject: string) => {
      const recipients = {
        'suporte': 'suporte@debita.ai',
        'vendas': 'suporte@debita.ai', // Can be changed to vendas@debita.ai when available
        'parceria': 'suporte@debita.ai', // Can be changed to parcerias@debita.ai when available
        'feedback': 'ouvidoria@debita.ai',
        'outro': 'suporte@debita.ai'
      };
      
      return recipients[subject as keyof typeof recipients] || 'suporte@debita.ai';
    };

    const recipientEmail = getRecipientEmail(subject);

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'Debita.aí <noreply@debita.ai>',
      to: [email],
      subject: 'Recebemos seu contato - Debita.aí',
      react: ContactInquiry({
        name,
        email,
        subject,
        message,
        company,
      }),
    });

    if (userEmailResult.error) {
      console.error('Error sending user email:', userEmailResult.error);
      return Response.json(
        { error: 'Erro ao enviar email de confirmação' },
        { status: 500 }
      );
    }

    // Send notification to appropriate team
    const adminEmailResult = await resend.emails.send({
      from: 'Sistema Debita.aí <sistema@debita.ai>',
      to: [recipientEmail],
      subject: `💬 Novo contato recebido - ${subject.toUpperCase()}`,
      react: AdminNotification({
        type: 'contact',
        name,
        email,
        subject,
        message,
        company,
        timestamp,
      }),
    });

    if (adminEmailResult.error) {
      console.error('Error sending admin email:', adminEmailResult.error);
      // Don't fail the request if admin email fails
    }

    return Response.json({
      success: true,
      message: 'Contato enviado com sucesso!',
      userEmailId: userEmailResult.data?.id,
      adminEmailId: adminEmailResult.data?.id,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}