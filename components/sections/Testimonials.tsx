'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ciana J.',
    business: 'J-Adore Lips',
    industry: 'Beauty & Aesthetics',
    rating: 5,
    testimonial:
      'Cowebing delivered beyond my expectations. My website is everything I envisioned for my brand — elegant, professional, and beautifully polished. Since launching, my clients have been absolutely impressed, and the booking system has made my workflow so much smoother. This is the partner every business owner needs.',
    initials: 'CJ',
    color: '#C0396B',
  },
  {
    name: 'Marcus T.',
    business: 'Diamond Raw Hair Boutique',
    industry: 'Beauty & Hair Care',
    rating: 5,
    testimonial:
      'Working with Cowebing was a seamless experience from start to finish. They took the time to truly understand our brand and delivered a website that captures the luxury and quality of our products perfectly. The attention to detail and professionalism throughout the entire process was exceptional.',
    initials: 'MT',
    color: '#B8860B',
  },
  {
    name: 'Erika S.',
    business: 'Erika Scott Office',
    industry: 'Professional Services',
    rating: 5,
    testimonial:
      'I was looking for a web designer who understood professional services and could create a site that builds real credibility. Cowebing delivered exactly that. My new website has already generated new client inquiries I never would have received before. The investment paid for itself quickly.',
    initials: 'ES',
    color: '#1E40AF',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-[#0A0A0A]" id="testimonials">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 inline-flex"
          >
            Real Business Growth
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mt-4 mb-4"
          >
            Businesses Growing With{' '}
            <span className="gradient-text">Cowebing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mx-auto"
          >
            Real feedback from business owners who trusted Cowebing to help them get found
            online, build trust, and win more customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: `linear-gradient(90deg, ${testimonial.color}, #2563FF)`,
                }}
              />

              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${testimonial.color}, transparent)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <Quote
                    className="w-8 h-8 opacity-30"
                    style={{ color: testimonial.color }}
                  />
                  <StarRating rating={testimonial.rating} />
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${testimonial.color}, #2563FF)`,
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{testimonial.name}</p>
                    <p className="text-xs text-white/40">
                      {testimonial.business} · {testimonial.industry}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
