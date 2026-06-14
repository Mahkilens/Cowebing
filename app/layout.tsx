import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://cowebing.com'),
  title: {
    template: '%s | Cowebing',
    default: 'Cowebing | Custom Websites, Hosting & Digital Growth',
  },
  description:
    'Cowebing helps businesses grow with custom websites, reliable hosting, booking systems, SEO, and digital solutions designed to attract customers and drive results.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  keywords: [
    'website design',
    'web development',
    'website hosting',
    'business websites',
    'small business websites',
    'booking websites',
    'professional websites',
    'SEO services',
    'digital growth',
    'custom websites',
    'online presence',
    'Cowebing',
  ],
  authors: [{ name: 'Marquis Prescott', url: 'https://cowebing.com' }],
  creator: 'Cowebing',
  publisher: 'Cowebing',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cowebing.com',
    siteName: 'Cowebing',
    title: 'Cowebing | Custom Websites, Hosting & Digital Growth',
    description:
      'Cowebing helps businesses grow with custom websites, reliable hosting, booking systems, SEO, and digital solutions designed to attract customers and drive results.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cowebing – Custom Websites, Hosting & Digital Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cowebing | Custom Websites, Hosting & Digital Growth',
    description:
      'Cowebing helps businesses grow with custom websites, reliable hosting, booking systems, SEO, and digital solutions designed to attract customers and drive results.',
    images: ['/images/og-image.png'],
    creator: '@cowebing',
  },
  alternates: {
    canonical: 'https://cowebing.com',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://cowebing.com/#organization',
      name: 'Cowebing',
      url: 'https://cowebing.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cowebing.com/images/cowebing-logo.png',
        width: 512,
        height: 512,
      },
      image: 'https://cowebing.com/images/og-image.png',
      description:
        'Cowebing helps businesses grow with custom websites, reliable hosting, booking systems, SEO, and digital solutions designed to attract customers and drive results.',
      foundingDate: '2024',
      founder: {
        '@type': 'Person',
        name: 'Marquis Prescott',
      },
      email: 'marquisprescott16@gmail.com',
      areaServed: 'United States',
      serviceType: [
        'Web Design',
        'Web Development',
        'Website Hosting',
        'Website Maintenance',
        'Branding',
        'SEO',
        'Digital Growth Solutions',
      ],
      sameAs: [
        'https://www.instagram.com/cowebing',
        'https://www.linkedin.com/company/cowebing',
        'https://www.facebook.com/cowebing',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://cowebing.com/#website',
      url: 'https://cowebing.com',
      name: 'Cowebing',
      description:
        'Cowebing helps businesses grow with custom websites, reliable hosting, booking systems, SEO, and digital solutions designed to attract customers and drive results.',
      publisher: {
        '@id': 'https://cowebing.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://cowebing.com/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7B2FF7" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.className} bg-[#0A0A0A] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
