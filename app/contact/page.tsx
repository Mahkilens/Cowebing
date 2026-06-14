import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: { absolute: 'Contact Cowebing | Start Your Web Project Today' },
  description:
    'Ready to grow your business online? Contact Cowebing to schedule a free consultation. Custom websites, reliable hosting, and digital solutions for businesses ready to grow.',
  alternates: { canonical: 'https://cowebing.com/contact' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cowebing.com/contact',
    siteName: 'Cowebing',
    title: 'Contact Cowebing | Start Your Web Project Today',
    description:
      'Ready to grow your business online? Contact Cowebing to schedule a free consultation. Custom websites, reliable hosting, and digital solutions for businesses ready to grow.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Cowebing — Schedule a Free Consultation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Cowebing | Start Your Web Project Today',
    description:
      'Ready to grow your business online? Contact Cowebing to schedule a free consultation. Custom websites, hosting, and digital solutions for growing businesses.',
    images: ['/images/og-image.png'],
    creator: '@cowebing',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
