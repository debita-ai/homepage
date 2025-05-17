import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta'
})

export const metadata: Metadata = {
  title: 'Debita.aí - Plataforma de Cobranças e Gestão Financeira',
  description: 'A Debita.aí é uma plataforma completa de gestão de cobranças e pagamentos para micro e pequenos empresários, oferecendo emissão de boletos, Pix e cartões de crédito com taxas competitivas. Com automação de follow-ups via IA, dashboard em tempo real, relatórios detalhados e integração simples por API e webhooks, a Debita.aí potencializa seu fluxo de caixa e simplifica a experiência de pagamento dos seus clientes.',
  metadataBase: new URL('https://debita.ai'),
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon-96x96.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Debita.aí - Plataforma de Cobranças e Gestão Financeira',
    description: 'A Debita.aí é uma plataforma completa de gestão de cobranças e pagamentos para micro e pequenos empresários, oferecendo emissão de boletos, Pix e cartões de crédito com taxas competitivas. Com automação de follow-ups via IA, dashboard em tempo real, relatórios detalhados e integração simples por API e webhooks, a Debita.aí potencializa seu fluxo de caixa e simplifica a experiência de pagamento dos seus clientes.',
    url: 'https://debita.ai',
    siteName: 'Debita.aí - Plataforma de Cobranças e Gestão Financeira',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
