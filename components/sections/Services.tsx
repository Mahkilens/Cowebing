'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Palette,
  Code2,
  Server,
  Wrench,
  Search,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Website Design',
    description:
      'Custom, brand-aligned designs that make powerful first impressions and convert visitors into customers.',
    benefits: ['Custom visual identity', 'Mobile-first layouts', 'Conversion-focused UX'],
    color: '#7B2FF7',
    href: '/services#design',
  },
  {
    icon: Code2,
    title: 'Website Development',
    description:
      'Clean, fast, production-ready code built on modern technology stacks that scale with your business.',
    benefits: ['Next.js & React', 'Performance optimized', 'Secure & maintainable'],
    color: '#2563FF',
    href: '/services#development',
  },
  {
    icon: Server,
    title: 'Website Hosting',
    description:
      'Reliable, enterprise-grade hosting with 99.9% uptime — one roof for your website and hosting needs.',
    benefits: ['99.9% uptime SLA', 'SSL certificates included', 'Daily backups'],
    color: '#059669',
    href: '/services#hosting',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description:
      'Ongoing updates, performance monitoring, and support so your website always runs at its best.',
    benefits: ['Regular updates & patches', 'Performance monitoring', 'Priority support'],
    color: '#D97706',
    href: '/services#maintenance',
  },
  {
    icon: Search,
    title: 'SEO Foundations',
    description:
      'Every website we build is optimized for search — helping your business get found by the right customers.',
    benefits: ['On-page SEO structure', 'Local search optimization', 'Schema markup'],
    color: '#DC2626',
    href: '/services#seo',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth Solutions',
    description:
      'Strategic digital solutions designed to help your business attract more customers and grow online revenue.',
    benefits: ['Lead generation systems', 'Booking integrations', 'Conversion optimization'],
    color: '#7B2FF7',
    href: '/services#growth',
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-[#F8F9FB]" id="services">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label-light mb-4 inline-flex"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] mt-4 mb-4"
          >
            Everything Your Business{' '}
            <span className="gradient-text">Needs Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-xl mx-auto"
          >
            From design to hosting to growth — Cowebing is your single partner for a complete,
            professional digital presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Link href={service.href} className="block group">
                <div className="card-light h-full cursor-pointer">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${service.color}18`,
                      border: `1px solid ${service.color}30`,
                    }}
                  >
                    <service.icon className="w-6 h-6" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: service.color }}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: service.color }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link href="/contact" className="btn-primary text-base px-10 py-4">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
