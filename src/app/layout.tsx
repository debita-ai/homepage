import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import HeaderWrapper from "@/components/layout/HeaderWrapper";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased" suppressHydrationWarning>
        <ScrollProgressBar />
        <HeaderWrapper />
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
