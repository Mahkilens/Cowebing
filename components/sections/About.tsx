'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  GraduationCap,
  Code2,
  Users,
  Target,
  Lightbulb,
  Heart,
  TrendingUp,
} from 'lucide-react';

const strengths = [
  { icon: Code2, label: 'Software & Web Development' },
  { icon: TrendingUp, label: 'Business Growth Strategy' },
  { icon: Users, label: 'Personalized Client Experience' },
  { icon: Target, label: 'Problem Solving & Strategy' },
  { icon: Lightbulb, label: 'Creative & Technical Vision' },
  { icon: Heart, label: 'Genuine Client Partnership' },
];

const values = [
  {
    title: 'Client-First',
    description:
      'Your success is our success. Every decision we make is in service of your business goals.',
  },
  {
    title: 'No Templates',
    description:
      'Every website is custom-built from scratch. No shortcuts, no cookie-cutter solutions.',
  },
  {
    title: 'Full Transparency',
    description:
      'Clear timelines, honest communication, and no surprises — from kickoff to launch.',
  },
  {
    title: 'Long-Term Partner',
    description:
      "We don't disappear after launch. We stay your partner as your business grows.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-[#041B4D]/30" id="about">
      <div className="container-custom" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-5 inline-flex">About Cowebing</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-5 mb-6">
              Built on Expertise,{' '}
              <span className="gradient-text">Driven by Results</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Cowebing is a web design and digital solutions company helping businesses
              establish powerful, professional online presences — built to grow with you.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              We specialize in custom website design, development, reliable hosting, ongoing
              maintenance, and growth-focused digital strategies — all under one roof, with a
              single point of contact you can actually reach.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, i) => (
                <div key={i} className="glass-card rounded-xl p-4">
                  <h4 className="text-sm font-bold text-white mb-1">{value.title}</h4>
                  <p className="text-xs text-white/45 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary text-base px-8 py-4">
              Our Full Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-5 mb-7">
                <div
                  className="w-20 h-20 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-black text-3xl"
                  style={{ background: 'linear-gradient(135deg, #7B2FF7 0%, #2563FF 100%)' }}
                >
                  MP
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Marquis Prescott</h3>
                  <p className="text-sm text-[#9B4FF9] font-medium mb-1">Founder & Lead Developer</p>
                  <div className="flex items-center gap-1.5 text-xs text-white/40">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Keiser University · Florida Atlantic University</span>
                  </div>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Founded by Marquis Prescott, an Information Technology graduate from Keiser
                University currently pursuing a B.S. in Data Science & Analytics with a
                concentration in Data Science & Engineering at Florida Atlantic University.
              </p>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                With a background in both software development and business, Marquis built
                Cowebing on a simple belief: every business deserves a professional online
                presence, delivered with genuine care and exceptional quality.
              </p>

              <div className="grid grid-cols-2 gap-2">
                {strengths.map((strength, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(123, 47, 247, 0.15)',
                        border: '1px solid rgba(123, 47, 247, 0.2)',
                      }}
                    >
                      <strength.icon className="w-3.5 h-3.5 text-[#9B4FF9]" />
                    </div>
                    <span className="text-xs text-white/55 font-medium">{strength.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
