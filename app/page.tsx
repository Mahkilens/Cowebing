import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import MeetFounder from '@/components/sections/MeetFounder';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PortfolioPreview />
        <Services />
        <Process />
        <MeetFounder />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
