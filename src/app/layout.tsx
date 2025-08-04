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

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
