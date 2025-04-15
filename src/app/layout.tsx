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
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans antialiased">
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
