'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 'ai-market-intel',
    img: '/images/ai-market-intel.png',
    title: 'AI Market Intelligence App',
    label: 'AI-powered market intelligence dashboard',
    slug: 'ai-market-intelligence-engine',
    accentColor: '#7B2FF7',
    glowColor: 'rgba(123,47,247,0.45)',
  },
  {
    id: 'diamond-raw-hair',
    img: '/images/diamond-raw-hair.png',
    title: 'Diamond Raw Hair Boutique',
    label: 'Beauty business website',
    slug: 'diamond-raw-hair-boutique',
    accentColor: '#B8860B',
    glowColor: 'rgba(184,134,11,0.4)',
  },
  {
    id: 'erika-scott-office',
    img: '/images/erika-scott-official.png',
    title: 'Erika Scott Office',
    label: 'Professional service website',
    slug: 'erika-scott-office',
    accentColor: '#2563FF',
    glowColor: 'rgba(37,99,255,0.4)',
  },
  {
    id: 'j-adore-lips',
    img: '/images/j-adore-lips.png',
    title: 'J-Adore Lips',
    label: 'Beauty brand website',
    slug: 'j-adore-lips',
    accentColor: '#C0396B',
    glowColor: 'rgba(192,57,107,0.4)',
  },
];

const SLIDE_INTERVAL = 5000;

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function PortfolioPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = projects[activeIndex];

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    startTimer();
  };
  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    startTimer();
  };
  const goNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
    startTimer();
  };

  return (
    <section className="section-padding bg-[#0A0A0A]" id="portfolio">
      <div className="container-custom" ref={sectionRef}>

        {/* Section header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 inline-flex"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mt-4 mb-4"
          >
            Projects We&apos;re{' '}
            <span className="gradient-text">Proud Of</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mx-auto"
          >
            Every project is built from scratch with intention, strategy, and a focus on
            real business results.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse at 50% 60%, ${active.glowColor} 0%, rgba(4,27,77,0.3) 50%, transparent 75%)`,
              filter: 'blur(32px)',
              transform: 'scale(1.08)',
            }}
          />

          {/* Browser frame */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
            }}
          >
            {/* Chrome bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ background: '#1a1a2e', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + '-url'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 mx-3 h-6 rounded-md flex items-center px-3"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span className="text-white/30 text-xs font-mono truncate">
                    cowebing.com/{active.slug}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Screenshot area */}
            <div className="relative w-full overflow-hidden bg-[#0A0A0A]" style={{ aspectRatio: '16/9' }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={active.img}
                    alt={active.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Left arrow */}
              <button
                onClick={goPrev}
                aria-label="Previous project"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Right arrow */}
              <button
                onClick={goNext}
                aria-label="Next project"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Project info bar */}
            <div
              className="px-6 py-4 flex items-center justify-between gap-4"
              style={{ background: '#0f0f1a', borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id + '-info'}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white font-bold text-base leading-tight">{active.title}</p>
                  <p className="text-white/45 text-sm mt-0.5">{active.label}</p>
                </motion.div>
              </AnimatePresence>
              <Link
                href={`/portfolio/${active.slug}`}
                className="flex-shrink-0 flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
                style={{ color: active.accentColor }}
              >
                Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-2.5 mt-6">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.title}`}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === activeIndex ? '28px' : '8px',
                  height: '8px',
                  background: i === activeIndex
                    ? 'linear-gradient(90deg, #7B2FF7, #2563FF)'
                    : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div
            className="mt-3 h-0.5 max-w-xs mx-auto rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <motion.div
              key={activeIndex}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: SLIDE_INTERVAL / 1000, ease: 'linear' }}
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #7B2FF7, #2563FF)' }}
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio" className="btn-secondary text-base px-9 py-4">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
