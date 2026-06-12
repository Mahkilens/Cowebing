'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Server, Clock, Code } from 'lucide-react';

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: 10,
    suffix: '+',
    label: 'Projects Built',
    description: 'Successful websites delivered',
  },
  {
    icon: Server,
    value: 99.9,
    suffix: '%',
    label: 'Uptime',
    description: 'Reliable hosting guaranteed',
  },
  {
    icon: Clock,
    value: 7,
    suffix: ' days',
    label: 'Avg. Delivery',
    description: 'From kickoff to live',
  },
  {
    icon: Code,
    value: 100,
    suffix: '%',
    label: 'Custom Built',
    description: 'No templates — ever',
  },
];

function AnimatedCounter({
  value,
  suffix,
  triggered,
}: {
  value: number;
  suffix: string;
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = increment * step;
      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(1)));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [triggered, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'rgba(4, 27, 77, 0.5)' }}>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-14">
          <span className="section-label mb-4">Results That Speak</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4">
            Built for Performance,{' '}
            <span className="gradient-text">Designed for Growth</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glass-card rounded-2xl p-6 md:p-8 text-center glass-card-hover"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5"
                style={{
                  background: 'rgba(123, 47, 247, 0.15)',
                  border: '1px solid rgba(123, 47, 247, 0.25)',
                }}
              >
                <stat.icon className="w-6 h-6 text-[#9B4FF9]" />
              </div>
              <div className="text-4xl md:text-5xl font-black gradient-text mb-2 leading-none">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} triggered={inView} />
              </div>
              <div className="text-sm font-semibold text-white mb-1.5">{stat.label}</div>
              <div className="text-xs text-white/40">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
