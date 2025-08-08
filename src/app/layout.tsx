import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import '../index.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingChat from '@/components/chat/FloatingChat'
import { Toaster } from '@/components/ui/toaster'
import TranslationManager from '@/components/dev/TranslationManager'

// Typography - EXACT FROM BRAND BOOK
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Regular, Medium, Semi-Bold, Bold
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'], // Regular, Bold
  style: ['normal', 'italic'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Lyyli.io - AI Communication Assistant',
  description: 'AI communication assistant for expert organizations – communicate in messaging channels like a professional and ensure important matters are never left uncommunicated.',
  keywords: 'AI communication, messaging automation, professional communication, customer segmentation, business intelligence',
  authors: [{ name: 'Lyyli.io' }],
  creator: 'Lyyli.io',
  publisher: 'Lyyli.io',
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
  metadataBase: new URL('https://lyyli.io'),
  openGraph: {
    title: 'Lyyli.io - AI Communication Assistant',
    description: 'AI communication assistant for expert organizations – communicate in messaging channels like a professional and ensure important matters are never left uncommunicated.',
    url: 'https://lyyli.io',
    siteName: 'Lyyli.io',
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
    title: 'Lyyli.io - AI Communication Assistant',
    description: 'AI communication assistant for expert organizations – communicate in messaging channels like a professional and ensure important matters are never left uncommunicated.',
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-grow">
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