import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lakira Partners Limited | Agribusiness & Renewable Energy',
  description: 'Lakira Partners Limited: Sustainable agribusiness and renewable energy solutions for a prosperous Africa. Empowering 500+ farmers and generating 25MW of clean energy.',
  keywords: ['agribusiness', 'renewable energy', 'sustainability', 'agriculture', 'solar', 'wind', 'Africa', 'sustainable farming'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  generator: 'v0.app',
  metadataBase: new URL('https://www.lakirapartners.com'),
  alternates: {
    canonical: 'https://www.lakirapartners.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lakirapartners.com',
    siteName: 'Lakira Partners Limited',
    title: 'Lakira Partners Limited | Agribusiness & Renewable Energy',
    description: 'Sustainable agribusiness and renewable energy solutions for a prosperous Africa.',
    images: [
      {
        url: '/hero-farmer.jpg',
        width: 1200,
        height: 630,
        alt: 'Lakira Partners - Sustainable Agriculture',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakira Partners Limited',
    description: 'Sustainable agribusiness and renewable energy solutions for Africa',
    images: ['/hero-farmer.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/log.jpeg',
      },
      {
        url: '/log.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/log.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/log.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
