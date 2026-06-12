import Link from 'next/link';
import { ArrowRight, Mail, Instagram, Linkedin, Facebook, Twitter, MapPin } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Website Design', href: '/services#design' },
    { name: 'Website Development', href: '/services#development' },
    { name: 'Website Hosting', href: '/services#hosting' },
    { name: 'Website Maintenance', href: '/services#maintenance' },
    { name: 'SEO Foundations', href: '/services#seo' },
    { name: 'Business Growth', href: '/services#growth' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  portfolio: [
    { name: 'J-Adore Lips', href: '/portfolio/j-adore-lips' },
    { name: 'Diamond Raw Hair', href: '/portfolio/diamond-raw-hair-boutique' },
    { name: 'Erika Scott Office', href: '/portfolio/erika-scott-office' },
    { name: 'AI Intelligence Engine', href: '/portfolio/ai-market-intelligence-engine' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/cowebing', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/cowebing', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/cowebing', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/cowebing', label: 'LinkedIn' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#041B4D]/40 border-t border-white/5">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group mb-5 w-fit">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-base"
                style={{ background: 'linear-gradient(135deg, #7B2FF7 0%, #2563FF 100%)' }}
              >
                C
              </div>
              <span className="text-xl font-black tracking-wide">
                <span className="gradient-text">COWE</span>
                <span className="text-white">BING</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Helping businesses build a powerful online presence through custom web design,
              hosting, and growth-focused digital solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-2">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span>US-Based · Serving Clients Nationwide</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Mail className="w-3.5 h-3.5 flex-shrink-0" />
              <a href="mailto:hello@cowebing.com" className="hover:text-white transition-colors">
                hello@cowebing.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Portfolio</h3>
            <ul className="space-y-3">
              {footerLinks.portfolio.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-white mb-3">Ready to start?</h3>
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            © {year} Cowebing. All rights reserved. Websites • Hosting • Growth
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
            <div className="flex items-center gap-1.5 text-xs text-white/20">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
