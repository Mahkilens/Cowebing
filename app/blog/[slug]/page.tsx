import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { blogPosts } from '@/lib/data/blog';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://cowebing.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    },
  };
}

function generateBlogSchema(post: (typeof blogPosts)[0]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cowebing',
      url: 'https://cowebing.com',
    },
    datePublished: post.publishDate,
    articleSection: post.category,
    keywords: post.tags.join(', '),
  };
}

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i++; continue; }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[#0A0A0A] mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-bold text-[#0A0A0A] mt-5 mb-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith('- ')) {
      elements.push(
        <li key={i} className="text-gray-600 ml-4 mb-1.5 text-base leading-relaxed list-disc">
          {line.slice(2)}
        </li>
      );
    } else {
      elements.push(
        <p key={i} className="text-gray-600 leading-relaxed text-base mb-4">
          {line}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBlogSchema(post)) }}
      />
      <main>
        <section className="pt-40 pb-20 bg-[#0A0A0A] relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse, ${post.categoryColor} 0%, transparent 70%)`,
            }}
          />
          <div className="container-custom relative z-10 max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
              style={{
                background: `${post.categoryColor}20`,
                border: `1px solid ${post.categoryColor}40`,
                color: post.categoryColor,
              }}
            >
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mt-4 mb-5 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-white/45">
              <span className="flex items-center gap-1.5">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-xs"
                  style={{ background: 'linear-gradient(135deg, #7B2FF7, #2563FF)' }}
                >
                  {post.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                {post.author} · {post.authorTitle}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-custom max-w-3xl mx-auto">
            <article className="prose-custom">{renderContent(post.content)}</article>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(123,47,247,0.08)',
                      border: '1px solid rgba(123,47,247,0.15)',
                      color: '#7B2FF7',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-16 bg-[#F8F9FB]">
            <div className="container-custom max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#0A0A0A] mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((relPost) => (
                  <Link key={relPost.slug} href={`/blog/${relPost.slug}`} className="block group">
                    <div className="card-light">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full mb-3 inline-block"
                        style={{
                          background: `${relPost.categoryColor}15`,
                          color: relPost.categoryColor,
                        }}
                      >
                        {relPost.category}
                      </span>
                      <h3 className="text-base font-bold text-[#0A0A0A] mb-2 group-hover:text-[#7B2FF7] transition-colors leading-snug">
                        {relPost.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{relPost.excerpt.slice(0, 100)}...</p>
                      <span className="text-sm font-semibold text-[#7B2FF7] flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          className="py-16"
          style={{ background: 'linear-gradient(135deg, #041B4D 0%, #0A0A0A 100%)' }}
        >
          <div className="container-custom text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">
              Ready to grow your business online?
            </h2>
            <p className="text-white/50 mb-7">
              Schedule a free consultation with Cowebing and let&apos;s discuss your website,
              hosting, and growth goals.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
