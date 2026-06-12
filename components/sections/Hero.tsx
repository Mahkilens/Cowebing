'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Shield, Zap, Globe, Star } from 'lucide-react';

const trustIndicators = [
  { icon: Shield, text: '99.9% Uptime Guaranteed' },
  { icon: Zap, text: '3–7 Day Delivery' },
  { icon: Globe, text: 'Fort Lauderdale, FL' },
  { icon: Star, text: '5-Star Client Experience' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.18, 0.38, 0.18] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(123, 47, 247, 0.45) 0%, transparent 65%)',
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/4 -right-48 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(37, 99, 255, 0.4) 0%, transparent 65%)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.2, 0.08] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(123, 47, 247, 0.35) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025] grid-bg"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 pt-36 pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="section-label">
              Boutique Web Design &amp; Hosting &middot; Fort Lauderdale, FL
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[1.03] mb-7 tracking-tight text-balance"
          >
            Professional Websites
            <br />
            That Help{' '}
            <span className="gradient-text">Businesses Grow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
            className="text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Custom websites, hosting, maintenance, and digital solutions designed to help
            businesses attract customers and establish a strong online presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="btn-primary text-base px-9 py-4 w-full sm:w-auto text-base font-semibold"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary text-base px-9 py-4 w-full sm:w-auto font-semibold"
            >
              <Play className="w-4 h-4 fill-white/60" />
              View Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {trustIndicators.map((indicator, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/45">
                <indicator.icon className="w-4 h-4 text-[#9B4FF9]" />
                <span>{indicator.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  );
}
