import * as React from 'react';

interface ContactInquiryProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
}

export function ContactInquiry({ name, email, subject, message, company }: ContactInquiryProps) {
  const getSubjectInfo = (subject: string) => {
    const subjects = {
      'suporte': { 
        title: 'Suporte Técnico', 
        team: 'nossa equipe de suporte técnico',
        responseTime: '24 horas úteis'
      },
      'vendas': { 
        title: 'Vendas', 
        team: 'nossa equipe comercial',
        responseTime: '4 horas úteis'
      },
      'parceria': { 
        title: 'Parcerias', 
        team: 'nossa equipe de parcerias',
        responseTime: '48 horas úteis'
      },
      'feedback': { 
        title: 'Feedback', 
        team: 'nossa equipe de produto',
        responseTime: '48 horas úteis'
      },
      'outro': { 
        title: 'Outros Assuntos', 
        team: 'nossa equipe',
        responseTime: '24 horas úteis'
      }
    };
    
    return subjects[subject as keyof typeof subjects] || subjects['outro'];
  };

  const subjectInfo = getSubjectInfo(subject);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#E37A37', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', margin: '0', fontSize: '24px' }}>
          Recebemos seu contato
        </h1>
      </div>
      
      <div style={{ padding: '30px', backgroundColor: '#ffffff' }}>
        <h2 style={{ color: '#333333', marginBottom: '20px' }}>
          Olá, {name}!
        </h2>
        
        <p style={{ color: '#666666', lineHeight: '1.6', marginBottom: '20px' }}>
          Obrigado por entrar em contato conosco! Recebemos sua mensagem sobre 
          <strong> {subjectInfo.title}</strong> e {subjectInfo.team} já foi notificada.
        </p>
        
        <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ color: '#333333', margin: '0 0 15px 0', fontSize: '18px' }}>
            Resumo do seu contato:
          </h3>
          <p style={{ color: '#666666', margin: '0 0 10px 0' }}>
            <strong>Nome:</strong> {name}
          </p>
          <p style={{ color: '#666666', margin: '0 0 10px 0' }}>
            <strong>Email:</strong> {email}
          </p>
          {company && (
            <p style={{ color: '#666666', margin: '0 0 10px 0' }}>
              <strong>Empresa:</strong> {company}
            </p>
          )}
          <p style={{ color: '#666666', margin: '0 0 10px 0' }}>
            <strong>Assunto:</strong> {subjectInfo.title}
          </p>
          <div style={{ marginTop: '15px' }}>
            <strong style={{ color: '#666666' }}>Mensagem:</strong>
            <div style={{ 
              backgroundColor: '#ffffff', 
              padding: '15px', 
              borderRadius: '4px', 
              marginTop: '5px',
              border: '1px solid #e0e0e0'
            }}>
              <p style={{ color: '#666666', margin: '0', whiteSpace: 'pre-wrap' }}>
                {message}
              </p>
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: '#e8f5e8', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <p style={{ color: '#2d5a2d', margin: '0', fontSize: '14px' }}>
            <strong>Tempo de resposta esperado:</strong> {subjectInfo.responseTime}
          </p>
        </div>
        
        <p style={{ color: '#666666', lineHeight: '1.6', marginBottom: '20px' }}>
          Analisaremos sua solicitação com cuidado e entraremos em contato o mais breve possível.
        </p>
        
        <div style={{ backgroundColor: '#fff3e0', padding: '15px', borderRadius: '8px', marginBottom: '30px' }}>
          <h4 style={{ color: '#e65100', margin: '0 0 10px 0', fontSize: '16px' }}>
            Precisa de ajuda imediata?
          </h4>
          <p style={{ color: '#e65100', margin: '0', fontSize: '14px' }}>
            WhatsApp: <a href="https://wa.me/5589994588003" style={{ color: '#e65100', textDecoration: 'none' }}>(89) 99458-8003</a><br />
            Email: <a href="mailto:suporte@debita.ai" style={{ color: '#e65100', textDecoration: 'none' }}>suporte@debita.ai</a>
          </p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#999999', fontSize: '14px', margin: '0' }}>
            Atenciosamente,<br />
            Equipe Debita.aí
          </p>
        </div>
      </div>
      
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#999999', fontSize: '12px', margin: '0' }}>
          Para responder ou adicionar informações, basta responder a este email.
        </p>
      </div>
    </div>
  );
}