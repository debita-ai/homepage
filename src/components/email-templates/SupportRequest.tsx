import * as React from 'react';

interface SupportRequestProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  ticketId?: string;
}

export function SupportRequest({ name, email, subject, message, ticketId }: SupportRequestProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#E37A37', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', margin: '0', fontSize: '24px' }}>
          Recebemos sua solicitação de suporte
        </h1>
      </div>
      
      <div style={{ padding: '30px', backgroundColor: '#ffffff' }}>
        <h2 style={{ color: '#333333', marginBottom: '20px' }}>
          Olá, {name}!
        </h2>
        
        <p style={{ color: '#666666', lineHeight: '1.6', marginBottom: '20px' }}>
          Recebemos sua solicitação de suporte e nossa equipe já foi notificada. 
          Entraremos em contato o mais breve possível para ajudar você.
        </p>
        
        {ticketId && (
          <div style={{ backgroundColor: '#e8f5e8', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <p style={{ color: '#2d5a2d', margin: '0', fontWeight: 'bold' }}>
              Número do ticket: {ticketId}
            </p>
          </div>
        )}
        
        <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ color: '#333333', margin: '0 0 15px 0', fontSize: '18px' }}>
            Resumo da sua solicitação:
          </h3>
          <p style={{ color: '#666666', margin: '0 0 10px 0' }}>
            <strong>Assunto:</strong> {subject}
          </p>
          <p style={{ color: '#666666', margin: '0 0 10px 0' }}>
            <strong>Email:</strong> {email}
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
        
        <div style={{ backgroundColor: '#fff3e0', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <p style={{ color: '#e65100', margin: '0', fontSize: '14px' }}>
            <strong>Tempo de resposta esperado:</strong> Nossa equipe responde em até 24 horas úteis.
          </p>
        </div>
        
        <p style={{ color: '#666666', lineHeight: '1.6', marginBottom: '30px' }}>
          Se precisar de ajuda imediata, você pode nos contatar pelo WhatsApp: 
          <a href="https://wa.me/5589994588003" style={{ color: '#E37A37', textDecoration: 'none' }}>
            (89) 99458-8003
          </a>
        </p>
        
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#999999', fontSize: '14px', margin: '0' }}>
            Atenciosamente,<br />
            Equipe de Suporte Debita.aí
          </p>
        </div>
      </div>
      
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#999999', fontSize: '12px', margin: '0' }}>
          Para responder a este ticket, basta responder a este email. 
          Mantenha o número do ticket na resposta para agilizar o atendimento.
        </p>
      </div>
    </div>
  );
}