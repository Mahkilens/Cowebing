'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_REVIEW_URL =
  'https://g.page/r/cowebing/review';

export default function ReviewCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #7B2FF7 0%, #2563FF 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -left-24 w-64 h-64 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
        />
      </div>

      <div className="container-custom relative z-10 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex justify-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-white text-white" />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Loved Working With Cowebing?
          </h2>
          <p className="text-white/75 text-base leading-relaxed mb-8">
            Your feedback helps us continue helping local businesses grow online. It only
            takes 60 seconds and means the world to us.
          </p>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-[#7B2FF7] font-bold text-base px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
          >
            Leave A Google Review
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
