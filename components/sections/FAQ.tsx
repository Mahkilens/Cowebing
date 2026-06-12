'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a website take?',
    answer:
      'Most websites are completed within 3–7 business days depending on the size, features, and revision process. More advanced websites with custom integrations, e-commerce functionality, or complex features may require additional development time. We\'ll provide a clear timeline during your discovery consultation.',
  },
  {
    question: 'Do you provide hosting?',
    answer:
      'Yes. Cowebing offers reliable website hosting so you can keep everything under one roof with a single point of contact. No more dealing with multiple vendors or finger-pointing when issues arise — we handle your website and hosting together.',
  },
  {
    question: 'Do you maintain websites after launch?',
    answer:
      'Absolutely. We offer ongoing website maintenance, updates, support, and performance monitoring to keep your website running smoothly. Whether it\'s content updates, security patches, or performance improvements, we\'re here to keep your digital presence in top shape.',
  },
  {
    question: 'Can I request changes during development?',
    answer:
      'Yes. Every client can request revisions and updates throughout the development process to ensure the final website meets their goals. We work collaboratively with you at every stage, and all packages include revision rounds to ensure your complete satisfaction.',
  },
  {
    question: 'Do you build booking and scheduling systems?',
    answer:
      'Yes. We can integrate appointment scheduling and booking systems to help streamline customer interactions and reduce manual scheduling. This is especially valuable for service-based businesses like salons, consultants, medical practices, and more.',
  },
  {
    question: 'Do you help with SEO?',
    answer:
      'Yes. Every website is built with SEO best practices including mobile responsiveness, page speed optimization, proper heading structure, meta tags, local business schema markup, and local search visibility. We also offer ongoing SEO strategy as part of our growth solutions.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-custom" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label-light mb-4 inline-flex"
            >
              Common Questions
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-[#0A0A0A] mt-4 mb-4"
            >
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-500"
            >
              Everything you need to know about working with Cowebing.
            </motion.p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="rounded-xl overflow-hidden border border-gray-100 hover:border-purple-200 transition-colors duration-200"
                style={{
                  boxShadow: openIndex === index ? '0 4px 24px rgba(123, 47, 247, 0.08)' : 'none',
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left bg-white hover:bg-gray-50/80 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base font-semibold text-[#0A0A0A] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background:
                        openIndex === index
                          ? 'linear-gradient(135deg, #7B2FF7, #2563FF)'
                          : 'rgba(123, 47, 247, 0.08)',
                    }}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openIndex === index
                          ? 'rotate-180 text-white'
                          : 'text-[#7B2FF7]'
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="w-full h-px bg-gray-100 mb-4" />
                        <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 p-8 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.06) 0%, rgba(37, 99, 255, 0.06) 100%)',
              border: '1px solid rgba(123, 47, 247, 0.12)',
            }}
          >
            <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">Still have questions?</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
              Schedule a free consultation and we&apos;ll walk through your business goals,
              website needs, timeline, and best package option.
            </p>
            <Link href="/contact" className="btn-primary text-sm px-8 py-3.5">
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
