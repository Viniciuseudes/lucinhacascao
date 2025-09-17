import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Lucinha Cascão - Tradição e Sabor em Cada Receita",
  description:
    "Mais de 40 anos de experiência criando momentos doces e inesquecíveis. Bolos artesanais, casamentos e eventos especiais no Shopping Recife.",
  keywords: "confeitaria, bolos, casamento, doces, tradição, artesanal, Lucinha Cascão, Shopping Recife",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  )
}
