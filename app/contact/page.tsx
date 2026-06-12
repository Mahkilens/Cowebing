import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Schedule Free Consultation',
  description:
    'Schedule your free website consultation with Cowebing. Custom web design, development, and hosting for businesses of all sizes. Get started today.',
  alternates: { canonical: 'https://cowebing.com/contact' },
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
