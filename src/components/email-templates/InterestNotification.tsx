import * as React from 'react';

interface InterestNotificationProps {
  name: string;
  email: string;
}

export function InterestNotification({ name, email }: InterestNotificationProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#E37A37', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', margin: '0', fontSize: '24px' }}>
          Obrigado pelo seu interesse!
        </h1>
      </div>
      
      <div style={{ padding: '30px', backgroundColor: '#ffffff' }}>
        <h2 style={{ color: '#333333', marginBottom: '20px' }}>
          Olá, {name}!
        </h2>
        
        <p style={{ color: '#666666', lineHeight: '1.6', marginBottom: '20px' }}>
          Ficamos muito felizes com o seu interesse na plataforma Debita.aí! 
          Você foi adicionado(a) à nossa lista de espera e será um(a) dos primeiros a saber 
          quando nossa plataforma estiver disponível.
        </p>
        
        <p style={{ color: '#666666', lineHeight: '1.6', marginBottom: '20px' }}>
          Estamos trabalhando duro para finalizar os últimos detalhes e oferecer a melhor 
          experiência de gestão financeira para você.
        </p>
        
        <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
          <h3 style={{ color: '#E37A37', margin: '0 0 10px 0', fontSize: '18px' }}>
            O que esperar:
          </h3>
          <ul style={{ color: '#666666', paddingLeft: '20px' }}>
            <li>Acesso antecipado à plataforma</li>
            <li>Gestão completa de cobranças digitais</li>
            <li>Integração com PIX e boletos</li>
            <li>Relatórios detalhados e conciliação automática</li>
          </ul>
        </div>
        
        <p style={{ color: '#666666', lineHeight: '1.6', marginBottom: '30px' }}>
          Em breve entraremos em contato com mais informações sobre o lançamento.
        </p>
        
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#999999', fontSize: '14px', margin: '0' }}>
            Atenciosamente,<br />
            Equipe Debita.aí
          </p>
        </div>
      </div>
      
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
        <p style={{ color: '#999999', fontSize: '12px', margin: '0' }}>
          Este email foi enviado para {email}. Se você não se cadastrou em nossa lista de espera, 
          pode ignorar este email.
        </p>
      </div>
    </div>
  );
}