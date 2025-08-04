import './globals.css'
import type { Metadata } from 'next'
import { Libre_Baskerville } from 'next/font/google'
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import { metadata as siteMetadata } from './metadata';


const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baskerville',
  weight: ['400', '700']
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
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://debita.ai/" },
      { "@type": "ListItem", position: 2, name: "Para Você", item: "https://debita.ai/para-voce" },
      { "@type": "ListItem", position: 3, name: "Recursos", item: "https://debita.ai/recursos" },
      { "@type": "ListItem", position: 4, name: "Tarifas", item: "https://debita.ai/tarifas" }
    ]
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://debita.ai/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://debita.ai/busca?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="pt-BR" className={`${baskerville.variable}`} suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901,1,2&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen font-satoshi antialiased" suppressHydrationWarning>
        <HeaderWrapper />
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
