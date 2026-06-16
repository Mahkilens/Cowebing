import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Results from '@/components/sections/Results';
import GrowthSystem from '@/components/sections/GrowthSystem';
import TrustEducation from '@/components/sections/TrustEducation';
import Services from '@/components/sections/Services';
import ReviewGeneration from '@/components/sections/ReviewGeneration';
import PortfolioPreview from '@/components/sections/PortfolioPreview';
import Testimonials from '@/components/sections/Testimonials';
import ReviewCTA from '@/components/ui/ReviewCTA';
import Process from '@/components/sections/Process';
import MeetFounder from '@/components/sections/MeetFounder';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Awareness → Solution → Proof → Action */}
        <Hero />
        <Results />
        <GrowthSystem />
        <TrustEducation />
        <Services />
        <ReviewGeneration />
        <PortfolioPreview />
        <Testimonials />
        <ReviewCTA />
        <Process />
        <MeetFounder />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
