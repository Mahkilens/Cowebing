'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Monitor,
  Search,
  Users,
  Star,
  Server,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Professional Websites',
    description:
      'Professional websites designed to help customers find, trust, and contact your business. Every site we build is a growth tool — not just a digital brochure.',
    benefits: ['Customer trust & credibility', 'Mobile-first, conversion-focused', 'Built to attract & retain customers'],
    color: '#7B2FF7',
    href: '/services#websites',
  },
  {
    icon: Search,
    title: 'Google Visibility',
    description:
      'Help potential customers discover your business when they are actively searching online. Appear in front of people who are already looking for what you offer.',
    benefits: ['Local SEO optimization', 'Google Business integration', 'Schema markup & search structure'],
    color: '#2563FF',
    href: '/services#visibility',
  },
  {
    icon: Users,
    title: 'Lead Generation Systems',
    description:
      'Turn website visitors into inquiries, consultations, appointments, and customers. Built-in systems that capture interest and move people to action.',
    benefits: ['Contact forms & lead capture', 'Booking system integration', 'Conversion-optimized layouts'],
    color: '#059669',
    href: '/services#leads',
  },
  {
    icon: Star,
    title: 'Reputation Management',
    description:
      'Build trust through reviews, social proof, and a reputation that attracts new customers. The most powerful marketing is what other people say about you.',
    benefits: ['Review collection systems', 'Google review integration', 'Social proof display'],
    color: '#D97706',
    href: '/services#reputation',
  },
  {
    icon: Server,
    title: 'Hosting & Ongoing Support',
    description:
      'Keep your business online, secure, and available to customers 24/7. Reliable infrastructure so you can focus on running your business — not managing your website.',
    benefits: ['99.9% uptime guaranteed', 'SSL certificates & daily backups', 'Priority support & updates'],
    color: '#DC2626',
    href: '/services#hosting',
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
            Five Growth Pillars
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] mt-4 mb-4"
          >
            Everything Your Business Needs to{' '}
            <span className="gradient-text">Grow Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-xl mx-auto"
          >
            Cowebing delivers five core services that work together to help local businesses
            get found, build trust, and win more customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={index === 4 ? 'md:col-span-2 lg:col-span-3 lg:max-w-md lg:mx-auto w-full' : ''}
            >
              <Link href={service.href} className="block group h-full">
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
            Book A Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
