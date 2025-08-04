import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { InterestNotification } from '../../../components/email-templates/InterestNotification';
import { AdminNotification } from '../../../components/email-templates/AdminNotification';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const interestSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate input
    const validation = interestSchema.safeParse(body);
    if (!validation.success) {
      return Response.json(
        { error: 'Dados inválidos', details: validation.error.errors },
        { status: 400 }
      );
    }

    const { name, email } = validation.data;
    const timestamp = new Date().toISOString();

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'Debita.aí <noreply@debita.ai>',
      to: [email],
      subject: 'Bem-vindo à lista de espera da Debita.aí!',
      react: InterestNotification({ name, email }),
    });

    if (userEmailResult.error) {
      console.error('Error sending user email:', userEmailResult.error);
      return Response.json(
        { error: 'Erro ao enviar email de confirmação' },
        { status: 500 }
      );
    }

    // Send notification to admin team
    const adminEmailResult = await resend.emails.send({
      from: 'Sistema Debita.aí <sistema@debita.ai>',
      to: ['suporte@debita.ai'],
      subject: `📧 Nova inscrição na lista de espera - ${name}`,
      react: AdminNotification({
        type: 'interest',
        name,
        email,
        timestamp,
      }),
    });

    if (adminEmailResult.error) {
      console.error('Error sending admin email:', adminEmailResult.error);
      // Don't fail the request if admin email fails
    }

    return Response.json({
      success: true,
      message: 'Inscrito com sucesso na lista de espera!',
      userEmailId: userEmailResult.data?.id,
      adminEmailId: adminEmailResult.data?.id,
    });

  } catch (error) {
    console.error('Interest registration error:', error);
    return Response.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}