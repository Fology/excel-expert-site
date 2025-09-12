import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'  // ← Esta linha deve estar aqui

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Excel Expert BR - Especialista em Dashboards e Automação',
  description: 'Especialista em Excel com mais de 5 anos de experiência. Dashboards, automações e análises de dados para empresas brasileiras.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
