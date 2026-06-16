import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, GraduationCap, MapPin, Code2, TrendingUp, Users, Target, Lightbulb, Heart, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: { absolute: 'About Cowebing | Founder-Led Web Design & Digital Solutions' },
  description:
    'Cowebing is a founder-led web design and digital solutions company built by Marquis Prescott. We help businesses grow online with custom websites, hosting, and hands-on digital strategy — no middlemen, no templates.',
  alternates: { canonical: 'https://cowebing.com/about' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cowebing.com/about',
    siteName: 'Cowebing',
    title: 'About Cowebing | Founder-Led Web Design & Digital Solutions',
    description:
      'Cowebing is a founder-led web design and digital solutions company built by Marquis Prescott. We help businesses grow online with custom websites, hosting, and hands-on digital strategy — no middlemen, no templates.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Cowebing — Founder-Led Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Cowebing | Founder-Led Web Design & Digital Solutions',
    description:
      'Cowebing is a founder-led web design and digital solutions company built by Marquis Prescott. We help businesses grow online with custom websites, hosting, and hands-on digital strategy.',
    images: ['/images/og-image.png'],
    creator: '@cowebing',
  },
};

const values = [
  {
    icon: CheckCircle2,
    title: 'Client-First Always',
    description:
      'Your success is our success. Every decision we make is guided by what is genuinely best for your business goals.',
  },
  {
    icon: Code2,
    title: '100% Custom Built',
    description:
      'We never use templates or page builders. Every website is hand-crafted from scratch for your unique brand.',
  },
  {
    icon: TrendingUp,
    title: 'Results-Oriented',
    description:
      'We design and build with the end goal in mind: attracting customers, building trust, and growing your business.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    description:
      'We don\'t disappear after launch. We stay your partner — available for support, updates, and growth strategies.',
  },
  {
    icon: Target,
    title: 'Total Transparency',
    description:
      'Clear timelines, honest communication, fair pricing, and zero surprises from kickoff to launch and beyond.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Precision',
    description:
      'We combine creative vision with technical precision to deliver websites that are both beautiful and functional.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-24 bg-[#0A0A0A] relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(123,47,247,0.8) 0%, transparent 70%)',
            }}
          />
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <span className="section-label mb-5 inline-flex">About Cowebing</span>
              <h1 className="text-5xl md:text-6xl font-black text-white mt-5 mb-6">
                Built on Expertise,{' '}
                <span className="gradient-text">Driven by Results</span>
              </h1>
              <p className="text-xl text-white/55 leading-relaxed">
                Cowebing is a founder-led web design and digital solutions company on
                a mission to help businesses establish powerful, professional online
                presences — without the agency overhead.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F8F9FB]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-label-light mb-5 inline-flex">Our Founder</span>
                <h2 className="text-4xl font-black text-[#0A0A0A] mt-4 mb-6">
                  Meet <span className="gradient-text">Marquis Prescott</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Marquis Prescott is an Information Technology graduate from Keiser University
                  currently pursuing a B.S. in Data Science &amp; Analytics with a concentration
                  in Data Science &amp; Engineering at Florida Atlantic University.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5">
                  With a background spanning software development, data analytics, and digital
                  strategy, Marquis founded Cowebing on a straightforward belief: every business
                  deserves a professional online presence — designed with care, built with
                  expertise, and delivered with genuine personal service.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Marquis works directly with every Cowebing client —
                  no middlemen, no outsourcing, no junior designers. When you work with Cowebing,
                  you work directly with the person building your website.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: 'rgba(123,47,247,0.08)',
                      border: '1px solid rgba(123,47,247,0.15)',
                      color: '#7B2FF7',
                    }}
                  >
                    <GraduationCap className="w-4 h-4" />
                    Keiser University — I.T.
                  </div>
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: 'rgba(37,99,255,0.08)',
                      border: '1px solid rgba(37,99,255,0.15)',
                      color: '#2563FF',
                    }}
                  >
                    <GraduationCap className="w-4 h-4" />
                    FAU — Data Science &amp; Analytics
                  </div>
                  <div
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: 'rgba(5,150,105,0.08)',
                      border: '1px solid rgba(5,150,105,0.15)',
                      color: '#059669',
                    }}
                  >
                    <MapPin className="w-4 h-4" />
                    US-Based · Remote &amp; On-Site
                  </div>
                </div>
              </div>

              <div>
                {/* Primary founder photo — full-width portrait hero */}
                <div
                  className="relative w-full h-80 sm:h-96 lg:h-[440px] rounded-2xl overflow-hidden mb-4"
                  style={{
                    border: '2px solid rgba(123,47,247,0.35)',
                    boxShadow:
                      '0 0 0 1px rgba(37,99,255,0.15), 0 0 56px rgba(123,47,247,0.14), 0 24px 64px rgba(0,0,0,0.35)',
                  }}
                >
                  <Image
                    src="/images/marquis-prescott.jpeg"
                    alt="Marquis Prescott, Founder of Cowebing"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                    priority
                  />
                  {/* Bottom gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(4,27,77,0.92) 0%, rgba(4,27,77,0.35) 35%, transparent 62%)',
                    }}
                  />
                  {/* Subtle purple inner glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 60px rgba(123,47,247,0.1)' }}
                  />
                  {/* Name badge */}
                  <div className="absolute bottom-5 left-5">
                    <p className="text-white font-black text-lg leading-tight">Marquis Prescott</p>
                    <p className="text-white/65 text-sm mt-0.5">Founder &amp; Lead Developer · Cowebing</p>
                  </div>
                </div>

                {/* Secondary row: photo + quote */}
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="relative h-40 sm:h-48 rounded-xl overflow-hidden"
                    style={{
                      border: '1px solid rgba(37,99,255,0.3)',
                      boxShadow: '0 0 24px rgba(37,99,255,0.08)',
                    }}
                  >
                    <Image
                      src="/images/marquis-prescott-2.jpeg"
                      alt="Marquis Prescott working"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 45vw, 280px"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(to top, rgba(4,27,77,0.7) 0%, transparent 55%)',
                      }}
                    />
                  </div>
                  <div
                    className="rounded-xl p-4 sm:p-5 flex flex-col justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #041B4D 0%, #0A0A0A 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed italic">
                      &ldquo;I built Cowebing to put the business owner first — real
                      communication, real craftsmanship, and results you can see.&rdquo;
                    </p>
                    <p className="text-[#9B4FF9] text-xs font-semibold mt-3">
                      — Marquis Prescott, Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-custom">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                The principles that guide every project, every decision, and every client
                relationship at Cowebing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <div key={i} className="glass-card rounded-2xl p-7 glass-card-hover">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: 'rgba(123,47,247,0.15)',
                      border: '1px solid rgba(123,47,247,0.25)',
                    }}
                  >
                    <value.icon className="w-5 h-5 text-[#9B4FF9]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-20"
          style={{ background: 'linear-gradient(135deg, #041B4D 0%, #0A0A0A 100%)' }}
        >
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-5">
              Ready to work together?
            </h2>
            <p className="text-white/50 mb-8 text-lg">
              Schedule a free consultation and let&apos;s discuss how Cowebing can help your
              business grow online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-9 py-4">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="btn-secondary px-9 py-4">
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
