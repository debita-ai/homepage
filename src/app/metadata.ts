import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debita.aí - Sua plataforma de gestão financeira completa",
  description: "Crie cobranças com facilidade, gerencie suas finanças com total controle e ofereça um checkout seguro e eficiente para seus clientes.",
  metadataBase: new URL('https://debita.ai'),
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon-96x96.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Debita.aí',
    description: 'Sua nova plataforma de gestão de cobranças',
    url: 'https://debita.ai',
    siteName: 'Debita.aí',
  },
} 