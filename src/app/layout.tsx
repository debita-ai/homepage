import "@debita-ai/ragekit/styles";
import './globals.css'
import type { Metadata } from 'next'
import { Libre_Baskerville } from 'next/font/google'
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";


const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-baskerville',
  weight: ['400', '700']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${baskerville.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        {/* <ScrollProgressBar /> */}
        {/* Remover o scroll progress bar */}
        <HeaderWrapper />
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
