'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Monitor, Search, Users, Star, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Monitor,
    number: '01',
    title: 'Professional Website',
    description:
      'Build trust and credibility with a modern online presence that represents your brand 24/7 — even when you\'re not available to answer the phone.',
    color: '#7B2FF7',
    glow: 'rgba(123,47,247,0.18)',
  },
  {
    icon: Search,
    number: '02',
    title: 'Google Visibility',
    description:
      'Help customers discover your business online through SEO foundations and Google Business integration when they\'re actively searching for what you offer.',
    color: '#2563FF',
    glow: 'rgba(37,99,255,0.18)',
  },
  {
    icon: Users,
    number: '03',
    title: 'Lead Capture',
    description:
      'Turn visitors into inquiries, consultations, appointments, and paying customers with systems built to convert interest into action.',
    color: '#059669',
    glow: 'rgba(5,150,105,0.18)',
  },
  {
    icon: Star,
    number: '04',
    title: 'Reputation Management',
    description:
      'Collect reviews and build trust through social proof and customer feedback that attracts new business and strengthens your online reputation.',
    color: '#D97706',
    glow: 'rgba(217,119,6,0.18)',
  },
];

export default function GrowthSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #070B1A 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(123,47,247,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 inline-flex"
          >
            The Cowebing Growth System
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mt-4 mb-5"
          >
            More Than{' '}
            <span className="gradient-text">A Website</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/55 leading-relaxed"
          >
            A website alone doesn&apos;t grow a business. Cowebing helps local businesses
            create a complete online growth system — from first impression to paying customer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative rounded-2xl p-8 group hover:-translate-y-1 transition-transform duration-300"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 40px ${pillar.glow}` }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${pillar.color}18`,
                      border: `1px solid ${pillar.color}35`,
                    }}
                  >
                    <pillar.icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <span
                    className="text-5xl font-black leading-none select-none"
                    style={{ color: `${pillar.color}20` }}
                  >
                    {pillar.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Start Building Your Growth System
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
