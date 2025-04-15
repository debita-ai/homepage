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
  title: 'Debita.aí',
  description: 'Sua nova plataforma de gestão de cobranças',
  metadataBase: new URL('https://debita.ai'),
  icons: {
    icon: [
      { url: '/icon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon/android-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/icon/android-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/icon/android-icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon/android-icon-36x36.png', sizes: '36x36', type: 'image/png' },
    ],
    apple: [
      { url: '/icon/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
      { url: '/icon/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icon/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/icon/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/icon/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/icon/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/icon/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/icon/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/icon/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
    ],
    shortcut: '/icon/favicon-96x96.png',
  },
  manifest: '/icon/manifest.json',
  openGraph: {
    title: 'Debita.aí',
    description: 'Sua nova plataforma de gestão de cobranças',
    url: 'https://debita.ai',
    siteName: 'Debita.aí',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
