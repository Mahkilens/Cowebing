import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Palette, Code2, Server, Wrench, Search, TrendingUp, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Process from '@/components/sections/Process';

export const metadata: Metadata = {
  title: 'Services | Web Design, Development & Hosting',
  description:
    'Cowebing offers custom web design, website development, reliable hosting, maintenance, SEO foundations, and digital growth solutions for businesses of all sizes.',
  alternates: { canonical: 'https://cowebing.com/services' },
};

const services = [
  {
    id: 'design',
    icon: Palette,
    title: 'Website Design',
    headline: 'Premium Designs That Convert',
    description:
      'Every website we design is custom — built around your brand identity, target audience, and business goals. No templates, no shortcuts.',
    features: [
      'Custom visual identity aligned to your brand',
      'Mobile-first, responsive layouts',
      'Conversion-focused user experience',
      'Modern UI with professional typography',
      'Accessibility compliant design',
      'Wireframing and design mockups before development',
    ],
    color: '#7B2FF7',
    bg: 'bg-[#F8F9FB]',
  },
  {
    id: 'development',
    icon: Code2,
    title: 'Website Development',
    headline: 'Clean Code. Fast Sites.',
    description:
      'We build on modern technology stacks (Next.js, React, TailwindCSS) that are fast, secure, and built to scale with your business.',
    features: [
      'Next.js & React for performance',
      'Core Web Vitals optimized',
      'Secure, maintainable codebase',
      'Booking & scheduling integrations',
      'CMS integration available',
      'Production deployment included',
    ],
    color: '#2563FF',
    bg: 'bg-white',
  },
  {
    id: 'hosting',
    icon: Server,
    title: 'Website Hosting',
    headline: '99.9% Uptime. Zero Hassle.',
    description:
      'Keep your website and hosting under one roof with Cowebing. Enterprise-grade infrastructure with a single point of contact for any issues.',
    features: [
      '99.9% uptime SLA guarantee',
      'SSL certificate included',
      'Daily automated backups',
      'CDN for global performance',
      'One-click deployments',
      'Direct support — no ticket queues',
    ],
    color: '#059669',
    bg: 'bg-[#F8F9FB]',
  },
  {
    id: 'maintenance',
    icon: Wrench,
    title: 'Website Maintenance',
    headline: 'Always Running. Always Updated.',
    description:
      'Your website needs ongoing care. We handle updates, security patches, performance monitoring, and content changes — so you don\'t have to.',
    features: [
      'Regular platform and plugin updates',
      'Security monitoring & patching',
      'Performance audits & optimization',
      'Content updates on request',
      'Monthly reporting',
      'Priority support response',
    ],
    color: '#D97706',
    bg: 'bg-white',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Foundations',
    headline: 'Built to Be Found.',
    description:
      'Every website we build includes SEO foundations — helping your business rank in Google and be found by local customers searching for your services.',
    features: [
      'On-page SEO structure',
      'Local search optimization',
      'Schema markup & structured data',
      'Google Business Profile setup',
      'Meta tags, titles & descriptions',
      'Site speed & Core Web Vitals',
    ],
    color: '#DC2626',
    bg: 'bg-[#F8F9FB]',
  },
  {
    id: 'growth',
    icon: TrendingUp,
    title: 'Business Growth Solutions',
    headline: 'Your Website as a Growth Engine.',
    description:
      'Beyond just a website — we build systems designed to attract, capture, and convert leads into paying customers for your business.',
    features: [
      'Lead generation forms & systems',
      'Booking & appointment integrations',
      'Email capture & marketing setup',
      'Conversion rate optimization',
      'Analytics setup & tracking',
      'Growth strategy consultation',
    ],
    color: '#7B2FF7',
    bg: 'bg-white',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-20 bg-[#0A0A0A] relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(123,47,247,0.8) 0%, transparent 70%)',
            }}
          />
          <div className="container-custom relative z-10 text-center">
            <span className="section-label mb-5 inline-flex">What We Offer</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-5 mb-5">
              Everything Your Business{' '}
              <span className="gradient-text">Needs Online</span>
            </h1>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Custom web design, development, hosting, maintenance, and growth — all from one
              dedicated partner who works directly with your business.
            </p>
          </div>
        </section>

        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 ${service.bg}`}
          >
            <div className="container-custom">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}25`,
                    }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <h2 className="text-4xl font-black text-[#0A0A0A] mb-2">
                    {service.title}
                  </h2>
                  <p
                    className="text-lg font-semibold mb-5"
                    style={{ color: service.color }}
                  >
                    {service.headline}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary text-sm px-7 py-3.5 inline-flex"
                    style={{
                      background: `linear-gradient(135deg, ${service.color} 0%, #2563FF 100%)`,
                    }}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-5">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: service.color }}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <Process />

        <section
          className="py-20"
          style={{ background: 'linear-gradient(135deg, #041B4D 0%, #0A0A0A 100%)' }}
        >
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-5">
              Ready to get started?
            </h2>
            <p className="text-white/50 mb-8 text-lg">
              Schedule a free consultation and we&apos;ll discuss exactly which services your
              business needs — and create a custom plan.
            </p>
            <Link href="/contact" className="btn-primary px-9 py-4 text-base">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
