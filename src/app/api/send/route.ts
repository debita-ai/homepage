import { EmailTemplate } from '../../../components/email-templates/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend("re_bSochSxg_4FRgUvxKM786GCDLkHr8BK2F");

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Debita.aí <noreply@debita.ai>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}