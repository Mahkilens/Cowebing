import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://cowebing.com'),
  title: {
    template: '%s | Cowebing',
    default: 'Cowebing | Websites • Hosting • Growth',
  },
  description:
    'Professional website design, website hosting, maintenance, and digital growth solutions for businesses in Fort Lauderdale and South Florida.',
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
    'Fort Lauderdale Web Design',
    'Fort Lauderdale Website Builder',
    'South Florida Web Design',
    'Business Website Development',
    'Website Hosting',
    'Website Maintenance',
    'Website Designer Near Me',
    'Small Business Websites',
    'Website Development Services',
    'Custom Website Design',
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
    title: 'Cowebing | Websites • Hosting • Growth',
    description:
      'Professional website design, website hosting, maintenance, and digital growth solutions for businesses in Fort Lauderdale and South Florida.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cowebing – Professional Web Design & Hosting in Fort Lauderdale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cowebing | Websites • Hosting • Growth',
    description:
      'Professional website design, website hosting, maintenance, and digital growth solutions for businesses in Fort Lauderdale and South Florida.',
    images: ['/og-image.jpg'],
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
      '@type': 'Organization',
      '@id': 'https://cowebing.com/#organization',
      name: 'Cowebing',
      url: 'https://cowebing.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cowebing.com/logo.png',
      },
      description:
        'Cowebing helps businesses establish a professional online presence through custom website design, website hosting, maintenance, and growth-focused digital solutions.',
      foundingDate: '2024',
      founder: {
        '@type': 'Person',
        name: 'Marquis Prescott',
      },
      areaServed: ['Fort Lauderdale', 'Broward County', 'South Florida', 'Florida'],
      serviceType: [
        'Web Design',
        'Web Development',
        'Website Hosting',
        'Website Maintenance',
        'SEO',
        'Business Growth Solutions',
      ],
      sameAs: [
        'https://www.instagram.com/cowebing',
        'https://www.linkedin.com/company/cowebing',
        'https://www.facebook.com/cowebing',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://cowebing.com/#local-business',
      name: 'Cowebing',
      description:
        'Professional web design, development, hosting, and digital solutions for businesses in Fort Lauderdale and South Florida.',
      url: 'https://cowebing.com',
      email: 'hello@cowebing.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Fort Lauderdale',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 26.1224,
        longitude: -80.1373,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      priceRange: '$$',
      image: 'https://cowebing.com/og-image.jpg',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://cowebing.com/#website',
      url: 'https://cowebing.com',
      name: 'Cowebing',
      description: 'Professional web design, development, and hosting services.',
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
