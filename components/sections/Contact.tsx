'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Mail, MapPin, Clock, CheckCircle2, Loader2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email Us', value: 'marquisprescott16@gmail.com', href: 'mailto:marquisprescott16@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'US-Based · Remote & On-Site Available', href: null },
  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    websiteUrl: '',
    projectDescription: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setErrorMsg('Something went wrong. Please try again or email hello@cowebing.com.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Unable to send. Please try again or email hello@cowebing.com.');
      setStatus('error');
    }
  };

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #041B4D 0%, #0A0A0A 60%, #041B4D 100%)' }}
      id="contact"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10"
          style={{
            background: 'radial-gradient(ellipse, rgba(123,47,247,0.8) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 inline-flex"
          >
            Let&apos;s Talk
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mt-4 mb-4"
          >
            Ready to Grow Your{' '}
            <span className="gradient-text">Business Online?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mx-auto"
          >
            When you work with Cowebing, you&apos;re working directly with the person
            building your website. No handoffs, no middlemen — just honest, direct
            communication from day one.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Start a Conversation</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Fill out the form below and Marquis will reach out within 24 hours to
                schedule your free discovery consultation.
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(123,47,247,0.15)',
                    border: '1px solid rgba(123,47,247,0.25)',
                  }}
                >
                  <Icon className="w-5 h-5 text-[#9B4FF9]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-sm text-white hover:text-[#9B4FF9] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div
              className="glass-card rounded-xl p-5 mt-2"
              style={{ border: '1px solid rgba(123,47,247,0.2)' }}
            >
              <p className="text-sm font-semibold text-white mb-1">Free Discovery Call</p>
              <p className="text-xs text-white/45 leading-relaxed">
                Every project starts with a free 30-minute call with Marquis to discuss your
                goals, timeline, and the best approach for your business — no pressure, no
                commitment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {status === 'error' && (
              <div className="glass-card rounded-xl px-5 py-4 mb-4 border border-red-500/30 text-red-400 text-sm">
                {errorMsg}
              </div>
            )}
            {status === 'success' ? (
              <div className="glass-card rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #7B2FF7, #2563FF)' }}
                >
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Received!</h3>
                <p className="text-white/55 text-sm max-w-sm">
                  Thank you for reaching out. Marquis will personally review your project
                  details and be in touch within 24 hours to schedule your free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Smith' },
                    {
                      label: 'Email Address',
                      name: 'email',
                      type: 'email',
                      placeholder: 'john@company.com',
                    },
                    {
                      label: 'Phone Number',
                      name: 'phone',
                      type: 'tel',
                      placeholder: '(954) 000-0000',
                    },
                    {
                      label: 'Business Name',
                      name: 'businessName',
                      type: 'text',
                      placeholder: 'Your Business',
                    },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.name !== 'phone'}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
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
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                    Current Website URL (if any)
                  </label>
                  <input
                    type="url"
                    name="websiteUrl"
                    placeholder="https://yourwebsite.com"
                    value={formData.websiteUrl}
                    onChange={handleChange}
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

                <div>
                  <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                    Project Description
                  </label>
                  <textarea
                    name="projectDescription"
                    placeholder="Tell us about your business, what you're looking to build, and any specific features you need..."
                    rows={4}
                    required
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all duration-200 resize-none"
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

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Schedule Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
