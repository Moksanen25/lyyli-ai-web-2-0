import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/chat/FloatingChat'
import { Toaster } from '@/components/ui/toaster'
import TranslationManager from '@/components/dev/TranslationManager'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lyyli AI - Customer Segmentation Platform',
  description: 'AI-powered customer segmentation platform for businesses',
  keywords: 'customer segmentation, AI, business intelligence, marketing automation',
  authors: [{ name: 'Lyyli AI' }],
  creator: 'Lyyli AI',
  publisher: 'Lyyli AI',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lyyli.ai'),
  openGraph: {
    title: 'Lyyli AI - Customer Segmentation Platform',
    description: 'AI-powered customer segmentation platform for businesses',
    url: 'https://lyyli.ai',
    siteName: 'Lyyli AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lyyli AI - Customer Segmentation Platform',
    description: 'AI-powered customer segmentation platform for businesses',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
          <FloatingChat />
          <Toaster />
          {process.env.NODE_ENV === 'development' && <TranslationManager />}
        </LanguageProvider>
      </body>
    </html>
  )
} 