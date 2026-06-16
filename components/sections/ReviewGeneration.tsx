'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { CheckCircle2, Briefcase, Send, Star, TrendingUp, ArrowRight } from 'lucide-react';

const benefits = [
  'Collect more Google reviews',
  'Build customer trust',
  'Increase social proof',
  'Improve local visibility',
  'Strengthen your reputation',
];

const steps = [
  {
    number: '01',
    icon: Briefcase,
    title: 'Customer Completes Service',
    description: 'Your customer has a great experience with your business.',
    color: '#7B2FF7',
  },
  {
    number: '02',
    icon: Send,
    title: 'Automated Follow-Up Sent',
    description: 'An automated email or SMS follow-up is sent requesting their feedback.',
    color: '#2563FF',
  },
  {
    number: '03',
    icon: Star,
    title: 'Customer Leaves A Review',
    description: 'The customer leaves a Google review with one click — simple and frictionless.',
    color: '#059669',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Business Gains Trust & Visibility',
    description: 'More reviews mean more trust, more visibility, and more customers.',
    color: '#D97706',
  },
];

export default function ReviewGeneration() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const inView1 = useInView(ref1, { once: true, margin: '-80px' });
  const inView2 = useInView(ref2, { once: true, margin: '-80px' });

  return (
    <>
      {/* Part 1 — Review pitch */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #041B4D 0%, #0A0A0A 60%, #041B4D 100%)' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(217,119,6,0.8) 0%, transparent 65%)',
            }}
          />
        </div>

        <div className="container-custom relative z-10" ref={ref1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="section-label mb-4 inline-flex"
              >
                Reputation Management
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white mt-4 mb-5"
              >
                Turn Happy Customers Into{' '}
                <span className="gradient-text">Powerful Reviews</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/60 leading-relaxed mb-8"
              >
                Online reviews influence buying decisions. We help businesses create systems
                that encourage satisfied customers to leave feedback and strengthen their
                online reputation — automatically.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-3 mb-10"
              >
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#7B2FF7] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link href="/contact" className="btn-primary text-base px-8 py-4 inline-flex">
                  Get Your Review System
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>

            {/* Visual — review card mockup */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
                  Google Reviews
                </p>

                {[
                  { name: 'Sarah M.', text: 'Amazing experience! Would highly recommend to anyone looking for a professional online presence.', stars: 5 },
                  { name: 'James R.', text: 'They helped us get more visibility online. We\'ve seen a noticeable increase in inquiries since launching.', stars: 5 },
                  { name: 'Lisa K.', text: 'Professional, responsive, and delivered exactly what my business needed. Outstanding work.', stars: 5 },
                ].map((review, i) => (
                  <div
                    key={i}
                    className="mb-4 last:mb-0 p-4 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs"
                        style={{ background: 'linear-gradient(135deg, #7B2FF7, #2563FF)' }}
                      >
                        {review.name[0]}
                      </div>
                      <span className="text-white text-sm font-semibold">{review.name}</span>
                      <div className="flex ml-auto">
                        {Array.from({ length: review.stars }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-white/55 text-xs leading-relaxed">{review.text}</p>
                  </div>
                ))}

                <div className="mt-5 pt-5 border-t border-white/8 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-sm">Overall Rating</p>
                    <p className="text-white/40 text-xs">Based on Google Reviews</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black gradient-text">5.0</p>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part 2 — How it works */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="container-custom" ref={ref2}>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 inline-flex"
            >
              How It Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mt-4 mb-4"
            >
              How Review Generation{' '}
              <span className="gradient-text">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/50 max-w-xl mx-auto"
            >
              A simple, automated system that turns satisfied customers into your most
              powerful marketing asset.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                animate={inView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[calc(50%+28px)] w-[calc(100%-56px)] h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(123,47,247,0.4), rgba(37,99,255,0.2))' }}
                  />
                )}

                <div className="relative z-10">
                  <div
                    className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                    style={{
                      background: `${step.color}18`,
                      border: `1px solid ${step.color}35`,
                    }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                  <div
                    className="text-xs font-black mb-2 tracking-widest"
                    style={{ color: step.color }}
                  >
                    STEP {step.number}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 leading-snug">{step.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
