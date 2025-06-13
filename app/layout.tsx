import type { Metadata, Viewport } from "next"
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import SmoothLoader from "@/components/smooth-loader"

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
  metadataBase: new URL('https://shopmindai.com'),
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
        
        {/* Favicon and app icons - Silicon Valley Grade */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/shopmindai-icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-152x152.png" sizes="152x152" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4F46E5" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#4F46E5" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#4F46E5" />
        
        {/* Additional performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Prevent layout shift with initial theme styles */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Fallback to light theme
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased loading`} suppressHydrationWarning>
        <SmoothLoader />
        {children}
      </body>
    </html>
  )
}