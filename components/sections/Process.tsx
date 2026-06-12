'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, LayoutTemplate, Code2, RotateCcw, Rocket, HeartHandshake } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery Consultation',
    description:
      'We start with a free, in-depth consultation to understand your business, goals, target audience, and vision for the project.',
    color: '#7B2FF7',
  },
  {
    number: '02',
    icon: LayoutTemplate,
    title: 'Planning & Strategy',
    description:
      'We define the site structure, content strategy, feature requirements, and a clear timeline — so there are no surprises.',
    color: '#2563FF',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Design & Development',
    description:
      'Our team designs and develops your custom website from scratch, applying your brand identity and all agreed-upon features.',
    color: '#7B2FF7',
  },
  {
    number: '04',
    icon: RotateCcw,
    title: 'Review & Revisions',
    description:
      'You review the website and provide feedback. We make all revisions until every detail is exactly as you envisioned.',
    color: '#2563FF',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch',
    description:
      'Once approved, we deploy your website live — fully tested, optimized, and ready to make a powerful first impression.',
    color: '#7B2FF7',
  },
  {
    number: '06',
    icon: HeartHandshake,
    title: 'Ongoing Support',
    description:
      'Post-launch, we remain your partner — available for updates, maintenance, hosting support, and continued growth strategies.',
    color: '#2563FF',
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-[#F8F9FB]" id="process">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label-light mb-4 inline-flex"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] mt-4 mb-4"
          >
            Our Professional{' '}
            <span className="gradient-text">Agency Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-xl mx-auto"
          >
            A transparent, collaborative process designed to deliver the best possible
            outcome for your business — every time.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <span
                  className="text-5xl font-black leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #7B2FF7 0%, #2563FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.25,
                  }}
                >
                  {step.number}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mt-1 flex-shrink-0"
                  style={{
                    background: `${step.color}15`,
                    border: `1px solid ${step.color}25`,
                  }}
                >
                  <step.icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0A0A0A] mb-3">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
