import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { SupportRequest } from '../../../components/email-templates/SupportRequest';
import { AdminNotification } from '../../../components/email-templates/AdminNotification';
import { z } from 'zod';

const resend = new Resend("re_bSochSxg_4FRgUvxKM786GCDLkHr8BK2F");

const supportSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    const validation = supportSchema.safeParse(body);
    if (!validation.success) {
      return Response.json(
        { error: 'Dados inválidos', details: validation.error.errors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;
    const timestamp = new Date().toISOString();
    const ticketId = `SUP-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Send auto-reply to user
    const userEmailResult = await resend.emails.send({
      from: 'Suporte Debita.aí <suporte@debita.ai>',
      to: [email],
      subject: `Recebemos sua solicitação de suporte - Ticket #${ticketId}`,
      react: SupportRequest({
        name,
        email,
        subject,
        message,
        ticketId,
      }),
    });

    if (userEmailResult.error) {
      console.error('Error sending user email:', userEmailResult.error);
      return Response.json(
        { error: 'Erro ao enviar email de confirmação' },
        { status: 500 }
      );
    }

    // Send notification to support team
    const adminEmailResult = await resend.emails.send({
      from: 'Sistema Debita.aí <sistema@debita.ai>',
      to: ['suporte@debita.ai'],
      subject: `🆘 Nova solicitação de suporte - ${ticketId}`,
      react: AdminNotification({
        type: 'support',
        name,
        email,
        subject: `[${ticketId}] ${subject}`,
        message,
        timestamp,
      }),
    });

    if (adminEmailResult.error) {
      console.error('Error sending admin email:', adminEmailResult.error);
      // Don't fail the request if admin email fails
    }

    return Response.json({
      success: true,
      message: 'Solicitação de suporte enviada com sucesso!',
      ticketId,
      userEmailId: userEmailResult.data?.id,
      adminEmailId: adminEmailResult.data?.id,
    });

  } catch (error) {
    console.error('Support request error:', error);
    return Response.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}