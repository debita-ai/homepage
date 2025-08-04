import * as React from 'react';

interface AdminNotificationProps {
  type: 'interest' | 'support' | 'contact';
  name: string;
  email: string;
  subject?: string;
  message?: string;
  company?: string;
  phone?: string;
  timestamp: string;
}

export function AdminNotification({ 
  type, 
  name, 
  email, 
  subject, 
  message, 
  company, 
  phone, 
  timestamp 
}: AdminNotificationProps) {
  const getTypeInfo = (type: string) => {
    const types = {
      'interest': {
        title: 'Nova Inscrição na Lista de Espera',
        backgroundColor: '#e8f5e8',
        textColor: '#2d5a2d',
        icon: '📧'
      },
      'support': {
        title: 'Nova Solicitação de Suporte',
        backgroundColor: '#fff3e0',
        textColor: '#e65100',
        icon: '🆘'
      },
      'contact': {
        title: 'Novo Contato Recebido',
        backgroundColor: '#e3f2fd',
        textColor: '#1565c0',
        icon: '💬'
      }
    };
    
    return types[type as keyof typeof types] || types['contact'];
  };

  const typeInfo = getTypeInfo(type);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#333333', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: 'white', margin: '0', fontSize: '24px' }}>
          {typeInfo.icon} {typeInfo.title}
        </h1>
      </div>
      
      <div style={{ padding: '30px', backgroundColor: '#ffffff' }}>
        <div style={{ 
          backgroundColor: typeInfo.backgroundColor, 
          padding: '15px', 
          borderRadius: '8px', 
          marginBottom: '20px',
          border: `2px solid ${typeInfo.textColor}20`
        }}>
          <p style={{ color: typeInfo.textColor, margin: '0', fontWeight: 'bold', fontSize: '16px' }}>
            ⏰ {new Date(timestamp).toLocaleString('pt-BR')}
          </p>
        </div>
        
        <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3 style={{ color: '#333333', margin: '0 0 15px 0', fontSize: '18px' }}>
            Informações do Cliente:
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tr>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold', color: '#666666', width: '30%' }}>
                Nome:
              </td>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', color: '#333333' }}>
                {name}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold', color: '#666666' }}>
                Email:
              </td>
              <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', color: '#333333' }}>
                <a href={`mailto:${email}`} style={{ color: '#E37A37', textDecoration: 'none' }}>
                  {email}
                </a>
              </td>
            </tr>
            {company && (
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold', color: '#666666' }}>
                  Empresa:
                </td>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', color: '#333333' }}>
                  {company}
                </td>
              </tr>
            )}
            {phone && (
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold', color: '#666666' }}>
                  Telefone:
                </td>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', color: '#333333' }}>
                  <a href={`https://wa.me/55${phone.replace(/\D/g, '')}`} style={{ color: '#25D366', textDecoration: 'none' }}>
                    {phone}
                  </a>
                </td>
              </tr>
            )}
            {subject && (
              <tr>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', fontWeight: 'bold', color: '#666666' }}>
                  Assunto:
                </td>
                <td style={{ padding: '8px 0', borderBottom: '1px solid #e0e0e0', color: '#333333' }}>
                  {subject}
                </td>
              </tr>
            )}
          </table>
        </div>
        
        {message && (
          <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #e0e0e0' }}>
            <h3 style={{ color: '#333333', margin: '0 0 15px 0', fontSize: '18px' }}>
              Mensagem:
            </h3>
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '15px', 
              borderRadius: '4px',
              border: '1px solid #e0e0e0'
            }}>
              <p style={{ color: '#666666', margin: '0', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
                {message}
              </p>
            </div>
          </div>
        )}
        
        <div style={{ backgroundColor: '#ffebee', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <h4 style={{ color: '#c62828', margin: '0 0 10px 0', fontSize: '16px' }}>
            ⚠️ Ação Necessária:
          </h4>
          <ul style={{ color: '#c62828', margin: '0', paddingLeft: '20px' }}>
            {type === 'interest' && (
              <>
                <li>Adicionar {name} à lista de espera no sistema</li>
                <li>Confirmar se o email de boas-vindas foi enviado</li>
              </>
            )}
            {type === 'support' && (
              <>
                <li>Criar ticket de suporte no sistema</li>
                <li>Responder ao cliente em até 24 horas úteis</li>
                <li>Categorizar o tipo de suporte necessário</li>
              </>
            )}
            {type === 'contact' && (
              <>
                <li>Responder ao contato conforme o assunto</li>
                <li>Direcionar para a equipe adequada se necessário</li>
                <li>Atualizar CRM com as informações do lead</li>
              </>
            )}
          </ul>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <p style={{ color: '#999999', fontSize: '14px', margin: '0' }}>
            Sistema de Notificações Debita.aí<br />
            Este email foi gerado automaticamente
          </p>
        </div>
      </div>
    </div>
  );
}