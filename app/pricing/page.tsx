import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';

export const metadata: Metadata = {
  title: 'Pricing | Web Design & Development Packages',
  description:
    'Transparent pricing for custom website design, development, and hosting in Fort Lauderdale, Florida. Starter, Business, and Premium packages. Schedule a free consultation.',
  alternates: { canonical: 'https://cowebing.com/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-28 pb-4 bg-[#F8F9FB] text-center">
          <div className="container-custom">
            <span className="section-label-light mb-4 inline-flex">Transparent Pricing</span>
            <h1 className="text-5xl md:text-6xl font-black text-[#0A0A0A] mt-4 mb-4">
              Simple,{' '}
              <span className="gradient-text">Honest Pricing</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Every project starts with a free consultation. We scope your needs, match you to
              the right package, and give you a clear, honest quote — no surprises.
            </p>
          </div>
        </div>
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
