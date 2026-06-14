import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { portfolioProjects } from '@/lib/data/portfolio';
import PortfolioVideoCard from '@/components/ui/PortfolioVideoCard';

export const metadata: Metadata = {
  title: { absolute: 'Portfolio | Real Websites Built by Cowebing' },
  description:
    'See real websites built by Cowebing for real businesses. Custom web design projects for beauty brands, professional services, e-commerce, and technology companies across the United States.',
  alternates: { canonical: 'https://cowebing.com/portfolio' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cowebing.com/portfolio',
    siteName: 'Cowebing',
    title: 'Portfolio | Real Websites Built by Cowebing',
    description:
      'See real websites built by Cowebing for real businesses. Custom web design projects for beauty brands, professional services, e-commerce, and technology companies across the United States.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cowebing Portfolio — Custom Website Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Real Websites Built by Cowebing',
    description:
      'See real websites built by Cowebing for real businesses. Custom web design projects for beauty brands, professional services, e-commerce, and tech companies.',
    images: ['/images/og-image.png'],
    creator: '@cowebing',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-20 bg-[#0A0A0A] relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(123,47,247,0.8) 0%, transparent 70%)',
            }}
          />
          <div className="container-custom relative z-10 text-center">
            <span className="section-label mb-5 inline-flex">Our Work</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-5 mb-5">
              Projects We&apos;re{' '}
              <span className="gradient-text">Proud Of</span>
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Every website built by Cowebing is custom, intentional, and designed to deliver
              real results for real businesses.
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A]">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioProjects.map((project) => (
                <PortfolioVideoCard key={project.slug} project={project} />
              ))}
            </div>

            <div className="mt-16 text-center p-12 glass-card rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-3">
                Ready to join our portfolio?
              </h2>
              <p className="text-white/50 text-sm max-w-md mx-auto mb-6">
                Schedule a free consultation and let&apos;s discuss how we can build your
                business the website it deserves.
              </p>
              <Link href="/contact" className="btn-primary text-sm px-8 py-3.5">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
