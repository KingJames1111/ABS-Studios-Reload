import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://absstudios.com'),
  title: {
    default: 'AI Marketing Automation | Neural Pattern Recognition for 110X Growth',
    template: '%s | ABS Studios - AI Marketing Automation'
  },
  description: 'Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.',
  keywords: [
    'AI marketing automation',
    'neural pattern recognition',
    'marketing automation platform',
    'AI content strategy',
    'automated content distribution',
    'content scaling automation',
    'AI brand voice optimization',
    'marketing pattern recognition',
    'automated marketing analytics',
    'content multiplication',
    'organic content reach',
    'AI-powered analytics',
    'marketing ROI optimization',
    'brand voice automation',
    'content strategy automation'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://absstudios.com',
    siteName: 'ABS Studios',
    title: 'AI Marketing Automation | Neural Pattern Recognition for 110X Growth',
    description: 'Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.',
    images: [
      {
        url: 'https://absstudios.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ABS Studios - AI Marketing Automation Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@absstudios',
    creator: '@absstudios',
    title: 'AI Marketing Automation | Neural Pattern Recognition for 110X Growth',
    description: 'Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.',
    images: ['https://absstudios.com/twitter-image.jpg']
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
  alternates: {
    canonical: 'https://absstudios.com'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://absstudios.com" />
        <meta name="theme-color" content="#270B3F" />
        
        {/* Preconnect to required origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ABS Studios",
              url: "https://absstudios.com",
              logo: "https://absstudios.com/logo.png",
              description: "Transform your marketing with AI-powered automation and neural pattern recognition. Achieve 110X content reach with automated content creation and distribution.",
              sameAs: [
                "https://twitter.com/absstudios",
                "https://linkedin.com/company/abs-studios",
                "https://youtube.com/absstudios"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "hello@absstudios.com",
                areaServed: "Worldwide"
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[hsl(var(--bg-dark))] text-[hsl(var(--text-light))]">
        <div className="relative min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--flame-orange)/0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--flame-red)/0.15),transparent_70%)]" />
          <div className="relative">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}