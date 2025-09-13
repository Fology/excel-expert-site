import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GB Excel - Especialista em Dashboards e Automação',
  description: 'Especialista em Excel com mais de 7 anos de experiência. Dashboards, automações e análises de dados para empresas brasileiras.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="google-site-verification" content="NkmbDM0mS7Uw11kRPWy5VYN7YmTVr05Ws2eaaDGf8zY" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17554270898"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17554270898');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
