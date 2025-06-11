import type { Metadata, Viewport } from "next"
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

// Optimized font loading with performance improvements
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Improve loading performance
  preload: true,
  variable: '--font-inter',
  fallback: ['system-ui', 'arial'] // Better fallback fonts
})

// Proper metadata export for better SEO
export const metadata: Metadata = {
  title: "ShopMindAI - Your Personalized AI Shopping Assistant",
  description: "Skip the endless scrolling. Shop smarter with AI-powered personalized recommendations across top retailers. Find the perfect products in seconds, not hours.",
  keywords: ["AI shopping", "personalized recommendations", "smart shopping", "product search", "online shopping assistant"],
  authors: [{ name: "ShopMindAI Team" }],
  creator: "ShopMindAI",
  publisher: "ShopMindAI",
  applicationName: "ShopMindAI",
  
  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // OpenGraph for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shopmindai.com',
    siteName: 'ShopMindAI',
    title: 'ShopMindAI - Your Personalized AI Shopping Assistant',
    description: 'Skip the endless scrolling. Shop smarter with AI-powered personalized recommendations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ShopMindAI - AI Shopping Assistant',
        type: 'image/jpeg',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@shopmindai',
    creator: '@shopmindai',
    title: 'ShopMindAI - Your Personalized AI Shopping Assistant',
    description: 'Skip the endless scrolling. Shop smarter with AI.',
    images: {
      url: '/og-image.jpg',
      alt: 'ShopMindAI - AI Shopping Assistant',
    },
  },
  
  // Verification codes (add your actual codes)
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  
  // Additional metadata
  category: 'technology',
  classification: 'Business',
}

// Optimized viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4d8eff' },
    { media: '(prefers-color-scheme: dark)', color: '#6d9eff' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}