'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles, Server } from 'lucide-react';

const plans = [
  {
    name: 'Starter Website',
    subtitle: 'For startups & local businesses',
    price: 'Starting at $500',
    description:
      'Perfect for startups, local businesses, and entrepreneurs looking to establish a professional online presence.',
    features: [
      'Up to 5 custom pages',
      'Mobile responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'SSL certificate',
      'Google Maps integration',
      'Professional UI/UX design',
      '2 rounds of revisions',
      '30-day post-launch support',
    ],
    cta: 'Schedule Consultation',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Business Website',
    subtitle: 'Most popular for growing businesses',
    price: 'Starting at $750',
    description:
      'Ideal for growing businesses that need additional functionality, customer engagement, and lead generation.',
    features: [
      'Everything in Starter',
      'Up to 10 custom pages',
      'Booking / scheduling integration',
      'Enhanced SEO setup',
      'Social media integration',
      'Portfolio or gallery section',
      'Additional lead capture forms',
      'Performance optimization',
      '4 rounds of revisions',
      '60-day post-launch support',
    ],
    cta: 'Schedule Consultation',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'Premium Website',
    subtitle: 'For advanced & complex projects',
    price: 'Starting at $1,000',
    description:
      'Built for businesses requiring advanced functionality, custom integrations, e-commerce capabilities, or scalable digital infrastructure.',
    features: [
      'Unlimited custom pages',
      'E-commerce functionality',
      'Custom integrations',
      'API integrations',
      'Blog system',
      'Advanced SEO setup',
      'Client portals',
      'Priority support',
      'Growth consultation',
      '6 rounds of revisions',
      'Dedicated project planning',
    ],
    cta: 'Schedule Consultation',
    href: '/contact',
    highlighted: false,
  },
];

const hostingFeatures = [
  'Website hosting',
  'Security monitoring',
  'Website updates',
  'Technical support',
  'Website backups',
  'Small content changes',
  'Performance monitoring',
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-[#F8F9FB]" id="pricing">
      <div className="container-custom" ref={ref}>

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label-light mb-4 inline-flex"
          >
            Transparent Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] mt-4 mb-4"
          >
            Investment in Your{' '}
            <span className="gradient-text">Online Presence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Every project starts with a free discovery consultation — no pressure, no
            commitment. We&apos;ll recommend the right solution for your business and budget.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'shadow-brand scale-[1.03]'
                  : 'hover:-translate-y-1'
              }`}
              style={
                !plan.highlighted
                  ? { boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }
                  : {}
              }
            >
              {/* Gradient border on highlighted card */}
              {plan.highlighted && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, #7B2FF7 0%, #2563FF 100%)',
                    padding: '2px',
                    zIndex: 0,
                  }}
                />
              )}

              <div
                className="relative flex flex-col h-full rounded-2xl p-8"
                style={
                  plan.highlighted
                    ? {
                        background: 'linear-gradient(135deg, #041B4D 0%, #0a0f2e 100%)',
                        margin: '2px',
                        borderRadius: 'calc(1rem - 2px)',
                        zIndex: 1,
                      }
                    : {
                        background: '#ffffff',
                        border: '1px solid #e5e7eb',
                      }
                }
              >
                {plan.highlighted && (
                  <div className="flex items-center gap-1.5 mb-4">
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan name & price */}
                <div className="mb-6">
                  <h3
                    className={`text-xl font-black mb-1 ${
                      plan.highlighted ? 'text-white' : 'text-[#0A0A0A]'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-xs mb-5 ${
                      plan.highlighted ? 'text-white/45' : 'text-gray-400'
                    }`}
                  >
                    {plan.subtitle}
                  </p>
                  <div
                    className="text-3xl font-black mb-3 leading-none"
                    style={
                      plan.highlighted
                        ? { color: '#ffffff' }
                        : {
                            background: 'linear-gradient(135deg, #7B2FF7, #2563FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }
                    }
                  >
                    {plan.price}
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      plan.highlighted ? 'text-white/55' : 'text-gray-500'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="space-y-2.5 flex-grow mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: plan.highlighted ? '#9B4FF9' : '#7B2FF7' }}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-white/70' : 'text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.highlighted ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hosting & Maintenance card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(123,47,247,0.2)', background: '#ffffff', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
        >
          <div className="flex flex-col lg:flex-row gap-8 p-8">
            {/* Left: info */}
            <div className="lg:w-72 flex-shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7B2FF7, #2563FF)' }}
                >
                  <Server className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Add-On</p>
                  <h3 className="text-lg font-black text-[#0A0A0A] leading-tight">
                    Hosting &amp; Maintenance
                  </h3>
                </div>
              </div>
              <div
                className="text-3xl font-black mb-2"
                style={{
                  background: 'linear-gradient(135deg, #7B2FF7, #2563FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                $50
                <span className="text-base font-semibold text-gray-400 ml-1" style={{ WebkitTextFillColor: '#9ca3af', backgroundClip: 'unset' }}>
                  /month
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Keep your website secure, updated, monitored, and running smoothly with
                ongoing support from Cowebing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm btn-outline transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-gray-100 self-stretch" />
            <div className="block lg:hidden h-px bg-gray-100 w-full" />

            {/* Right: features grid */}
            <div className="flex-1">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {hostingFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-[#7B2FF7]" />
                    <span className="text-sm text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center text-sm text-gray-400 mt-8 max-w-2xl mx-auto"
        >
          Every project begins with a free discovery consultation. Final pricing may vary
          based on project scope and requirements.
        </motion.p>
      </div>
    </section>
  );
}
