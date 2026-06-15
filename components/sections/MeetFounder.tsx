'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  MessageCircle,
  Zap,
  Code2,
  Server,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  GraduationCap,
} from 'lucide-react';

const benefits = [
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'You communicate directly with the person building your website — no middlemen, no delays.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Streamlined process means most projects are delivered in days, not months.',
  },
  {
    icon: Code2,
    title: 'Custom-Built Websites',
    description: 'Every website is built from scratch to match your brand, not adapted from a generic template.',
  },
  {
    icon: Server,
    title: 'Hosting & Maintenance',
    description: 'Ongoing hosting, security monitoring, and support available after launch.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Support',
    description: "You're not a ticket number. You're a client, and your success matters personally.",
  },
  {
    icon: ShieldCheck,
    title: 'No Outsourcing',
    description: 'Your project stays in-house from start to finish — nothing is handed off to third parties.',
  },
];

export default function MeetFounder() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden" id="founder">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-[0.07]"
          style={{
            background: 'radial-gradient(ellipse, rgba(123,47,247,0.9) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>

        {/* ── Meet The Founder ── */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 inline-flex"
          >
            Meet The Founder
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mt-4"
          >
            Built by Someone Who <span className="gradient-text">Cares</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div
            className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
            }}
          >
            {/* Avatar */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div
                className="relative w-24 h-24 rounded-2xl overflow-hidden"
                style={{ border: '2px solid rgba(123,47,247,0.4)' }}
              >
                <Image
                  src="/images/marquis-prescott.jpeg"
                  alt="Marquis Prescott, Founder of Cowebing"
                  fill
                  className="object-cover object-top"
                  sizes="96px"
                />
              </div>
              <div className="mt-3 text-center md:text-left">
                <p className="text-white font-bold text-sm">Marquis Prescott</p>
                <p className="text-white/40 text-xs">Founder, Cowebing</p>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1">
              <p className="text-white/75 text-base leading-relaxed mb-5">
                Hi, I&apos;m Marquis Prescott, founder of Cowebing. I created Cowebing to help
                businesses establish a professional online presence through modern websites,
                reliable hosting, and ongoing support.
              </p>
              <p className="text-white/75 text-base leading-relaxed mb-5">
                As an Information Technology graduate from Keiser University and a current
                Data Science &amp; Analytics student at Florida Atlantic University, I combine
                technical expertise with a business-focused approach to create websites that
                look professional, perform well, and help businesses grow.
              </p>
              <p className="text-white/75 text-base leading-relaxed mb-7">
                Every project is built with attention to detail, direct communication, and a
                commitment to helping clients succeed online.
              </p>

              {/* Education badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  'B.S. Information Technology — Keiser University',
                  'Data Science & Analytics — Florida Atlantic University',
                ].map((edu) => (
                  <div
                    key={edu}
                    className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(123,47,247,0.12)',
                      border: '1px solid rgba(123,47,247,0.22)',
                      color: '#9B4FF9',
                    }}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    {edu}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Why Work With Cowebing ── */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="w-4 h-4 text-[#9B4FF9]" />
            <span className="text-xs font-bold text-[#9B4FF9] uppercase tracking-wider">
              Why Work With Cowebing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl md:text-4xl font-black text-white"
          >
            The Boutique Advantage
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/45 mt-3 max-w-lg mx-auto"
          >
            A boutique approach means more attention, better communication, and a website
            built specifically for your business — not adapted from a template.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.07 }}
              className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(123,47,247,0.15)',
                  border: '1px solid rgba(123,47,247,0.2)',
                }}
              >
                <b.icon className="w-5 h-5 text-[#9B4FF9]" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{b.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
