import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Creative Partner for Digital Excellence | Denmark',
  description: 'Multidisciplinary creative professional offering web design, Shopify development, branding, photography, video production, and AI consulting for Danish businesses.',
  keywords: ['web design', 'Shopify', 'branding', 'photography', 'video production', 'Meta Ads', 'Google Ads', 'AI consulting', 'Denmark'],
  authors: [{ name: 'Creative Professional' }],
  openGraph: {
    title: 'Creative Partner for Digital Excellence',
    description: 'Transform your digital presence with a multidisciplinary creative professional.',
    type: 'website',
    locale: 'en_DK',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
