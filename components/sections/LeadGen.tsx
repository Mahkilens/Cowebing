'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

export default function LeadGen() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', businessName: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #041B4D 0%, #0A0A0A 100%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(123,47,247,0.6) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,255,0.6) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label mb-5 inline-flex">Free Audit</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-5 mb-5">
                Get Your Free{' '}
                <span className="gradient-text">Website Audit</span>
              </h2>
              <p className="text-white/55 leading-relaxed mb-8">
                Not sure where to start? Get a free, no-obligation website audit or
                consultation. We&apos;ll review your current online presence and share
                exactly what&apos;s holding your business back.
              </p>
              <ul className="space-y-3">
                {[
                  'Completely free — no obligation',
                  'Website performance review',
                  'SEO opportunity analysis',
                  'Custom growth recommendations',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/65">
                    <CheckCircle2 className="w-4 h-4 text-[#9B4FF9] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {status === 'success' ? (
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #7B2FF7, #2563FF)' }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Request Received!
                  </h3>
                  <p className="text-white/55 text-sm">
                    We&apos;ll review your information and reach out within 24 hours with
                    your free website audit and consultation details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-4">
                  <h3 className="text-lg font-bold text-white mb-5">
                    Claim Your Free Audit
                  </h3>
                  {[
                    { label: 'Your Name', key: 'name', type: 'text', placeholder: 'John Smith' },
                    {
                      label: 'Email Address',
                      key: 'email',
                      type: 'email',
                      placeholder: 'john@yourbusiness.com',
                    },
                    {
                      label: 'Business Name',
                      key: 'businessName',
                      type: 'text',
                      placeholder: 'Your Business Name',
                    },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '1px solid rgba(123,47,247,0.5)';
                          e.target.style.background = 'rgba(255,255,255,0.08)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '1px solid rgba(255,255,255,0.1)';
                          e.target.style.background = 'rgba(255,255,255,0.06)';
                        }}
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center mt-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get My Free Audit
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-white/25 pt-1">
                    No spam. No sales pressure. Just genuine help.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
