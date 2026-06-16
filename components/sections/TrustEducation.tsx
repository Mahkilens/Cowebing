'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const lossReasons = [
  'Customers search online before buying from any business — even local ones',
  'Social media alone is not enough to establish real credibility',
  'Businesses without websites lose trust before the conversation even starts',
  'Businesses without reviews lose customers to competitors who have them',
  'Businesses that are difficult to find online miss opportunities every single day',
];

const visibilityReasons = [
  'Customers search for local solutions every day — are they finding you?',
  'Businesses appearing on Google gain a clear competitive advantage',
  'A professional online presence increases perceived credibility and trust',
  'Visible businesses capture leads that invisible businesses never see',
  'Businesses that establish an online presence early outpace those that wait',
];

export default function TrustEducation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-[#F8F9FB] relative overflow-hidden">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label-light mb-4 inline-flex"
          >
            The Reality
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] mt-4 mb-4"
          >
            Why Businesses Are{' '}
            <span className="gradient-text">Losing Customers Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Most businesses underestimate how much their digital presence — or lack of it —
            affects their revenue.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Panel 1 — Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl p-8"
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.2)' }}
              >
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0A]">
                Why Businesses Lose Customers Online
              </h3>
            </div>
            <ul className="space-y-4">
              {lossReasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Panel 2 — Opportunity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl p-8"
            style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(123,47,247,0.1)', border: '1px solid rgba(123,47,247,0.2)' }}
              >
                <CheckCircle2 className="w-5 h-5 text-[#7B2FF7]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0A]">
                Why Google Visibility Matters
              </h3>
            </div>
            <ul className="space-y-4">
              {visibilityReasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#7B2FF7] flex-shrink-0 mt-0.5" />
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Urgency + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Businesses that establish an online presence early gain an advantage over those
            that wait. Every day without visibility is a day your competitors capture customers
            that could have been yours.
          </p>
          <Link href="/contact" className="btn-primary text-base px-10 py-4 inline-flex">
            Claim Your Online Presence
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
