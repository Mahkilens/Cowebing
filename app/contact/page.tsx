import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Schedule Free Consultation',
  description:
    'Schedule your free website consultation with Cowebing. Fort Lauderdale web design, development, and hosting for South Florida businesses.',
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
