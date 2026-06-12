'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ExternalLink } from 'lucide-react';

const placeholderReviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    timeAgo: '2 weeks ago',
    review:
      'Absolutely thrilled with my new website! Cowebing delivered a stunning, professional site that perfectly represents my brand. Highly recommend to any business owner.',
    initials: 'SM',
  },
  {
    name: 'James R.',
    rating: 5,
    timeAgo: '1 month ago',
    review:
      'Professional, responsive, and delivered exactly what I needed. My website now ranks on Google and I\'m getting more inquiries than ever. Outstanding work.',
    initials: 'JR',
  },
  {
    name: 'Priya K.',
    rating: 5,
    timeAgo: '3 weeks ago',
    review:
      'The team at Cowebing truly understood my vision and brought it to life. The process was smooth, communication was excellent, and the final product exceeded my expectations.',
    initials: 'PK',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-[#F8F9FB]" id="reviews">
      <div className="container-custom" ref={ref}>
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: '#4285F4' }}
            >
              <span className="text-white font-black text-sm">G</span>
            </div>
            <span className="section-label-light">Google Reviews</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#0A0A0A] mb-4"
          >
            Rated 5 Stars on{' '}
            <span className="gradient-text">Google</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <StarRating count={5} />
            <span className="text-[#0A0A0A] font-bold">5.0</span>
            <span className="text-gray-400 text-sm">· Google Business Profile</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholderReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="card-light"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg, #7B2FF7, #2563FF)' }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0A0A0A] text-sm">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.timeAgo}</p>
                  </div>
                </div>
                <div
                  className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
                  style={{ background: '#4285F4' }}
                >
                  <span className="text-white font-black text-xs">G</span>
                </div>
              </div>
              <StarRating count={review.rating} />
              <p className="text-sm text-gray-500 leading-relaxed mt-3">{review.review}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="https://g.page/cowebing/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7B2FF7] hover:text-[#5B1FD4] transition-colors"
          >
            View all reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
          <p className="text-xs text-gray-400 mt-2">
            * Reviews shown are representative. Connect your Google Business Profile to display live reviews.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
