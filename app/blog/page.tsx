import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { blogPosts } from '@/lib/data/blog';

export const metadata: Metadata = {
  title: { absolute: 'Blog | Web Design & Business Growth Tips | Cowebing' },
  description:
    'Practical tips and expert insights on web design, website hosting, SEO, and digital growth — written for business owners who want to build a powerful online presence and attract more customers.',
  alternates: { canonical: 'https://cowebing.com/blog' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cowebing.com/blog',
    siteName: 'Cowebing',
    title: 'Blog | Web Design & Business Growth Tips | Cowebing',
    description:
      'Practical tips and expert insights on web design, website hosting, SEO, and digital growth — written for business owners who want to build a powerful online presence and attract more customers.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cowebing Blog — Web Design & Business Growth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Web Design & Business Growth Tips | Cowebing',
    description:
      'Practical tips on web design, hosting, SEO, and digital growth — written for business owners who want a powerful online presence.',
    images: ['/images/og-image.png'],
    creator: '@cowebing',
  },
};

const categories = ['All', 'Web Design', 'Hosting', 'SEO'];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-40 pb-20 bg-[#0A0A0A] relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(37,99,255,0.8) 0%, transparent 70%)',
            }}
          />
          <div className="container-custom relative z-10 text-center">
            <span className="section-label mb-5 inline-flex">Insights & Resources</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-5 mb-5">
              The Cowebing{' '}
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Expert insights on web design, digital strategy, and online growth — written
              for business owners who want to build and scale their online presence.
            </p>
          </div>
        </section>

        <section className="py-20 bg-[#F8F9FB]">
          <div className="container-custom">
            <div className="flex gap-2 mb-10 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                  style={
                    cat === 'All'
                      ? {
                          background: 'linear-gradient(135deg, #7B2FF7, #2563FF)',
                          color: '#FFFFFF',
                        }
                      : {
                          background: 'rgba(123,47,247,0.08)',
                          border: '1px solid rgba(123,47,247,0.15)',
                          color: '#7B2FF7',
                        }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <article className="card-light h-full flex flex-col cursor-pointer">
                    <div
                      className="h-44 rounded-xl mb-5 flex items-center justify-center overflow-hidden"
                      style={{ background: '#F0F0F8' }}
                    >
                      <div className="text-center p-6">
                        <div
                          className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                          style={{
                            background: `${post.categoryColor}15`,
                            border: `1px solid ${post.categoryColor}30`,
                            color: post.categoryColor,
                          }}
                        >
                          {post.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.publishDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-[#0A0A0A] mb-3 group-hover:text-[#7B2FF7] transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm text-gray-500 leading-relaxed flex-grow mb-5">
                        {post.excerpt}
                      </p>
                      <div
                        className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all"
                        style={{ color: '#7B2FF7' }}
                      >
                        Read Article <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
