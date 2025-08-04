import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Debita.aí - Seu novo gateway de pagamentos, sem burocracia",
  description: "Crie cobranças com facilidade, gerencie suas finanças com total controle e ofereça um checkout seguro e eficiente para seus clientes.",
  metadataBase: new URL('https://debita.ai'),
  icons: {
    icon: [
      { url: '/icons/16 x 16.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/icons/24 x 24.ico', sizes: '24x24', type: 'image/x-icon' },
      { url: '/icons/32 x 32.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icons/48 x 48.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/icons/64 x 64.ico', sizes: '64x64', type: 'image/x-icon' },
      { url: '/icons/96 x 96.ico', sizes: '96x96', type: 'image/x-icon' },
      { url: '/icons/128 x 128.ico', sizes: '128x128', type: 'image/x-icon' },
      { url: '/icons/256 x 256.ico', sizes: '256x256', type: 'image/x-icon' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/icons/32 x 32.ico',
    apple: '/favicon-96x96.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Debita.aí',
    description: 'Sua nova plataforma de gestão de cobranças',
    url: 'https://debita.ai',
    siteName: 'Debita.aí',
  },
} 