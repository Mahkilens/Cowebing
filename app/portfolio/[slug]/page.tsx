import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { portfolioProjects } from '@/lib/data/portfolio';

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} Case Study | Web Design`,
    description: project.description,
    alternates: { canonical: `https://cowebing.com/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} — Cowebing Case Study`,
      description: project.description,
    },
  };
}

const projectSchema = (project: (typeof portfolioProjects)[0]) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.title,
  description: project.description,
  creator: { '@type': 'Organization', name: 'Cowebing' },
  genre: project.industry,
});

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema(project)) }}
      />
      <main>
        <section className="pt-40 pb-20 bg-[#0A0A0A] relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse, ${project.color} 0%, transparent 70%)`,
            }}
          />
          <div className="container-custom relative z-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <div className="max-w-4xl">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-5"
                style={{
                  background: `${project.color}20`,
                  border: `1px solid ${project.color}40`,
                  color: project.accentColor,
                }}
              >
                {project.industry}
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
                {project.title}
              </h1>
              <p className="text-xl text-white/55 leading-relaxed max-w-2xl">
                {project.tagline}
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 bg-[#041B4D]/30 border-y border-white/5">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.results.map((result, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black gradient-text mb-1">{result.metric}</div>
                  <div className="text-xs text-white/45">{result.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#0A0A0A]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div
                className="w-full rounded-2xl mb-16 relative overflow-hidden"
                style={{ background: '#080808', aspectRatio: '16/9' }}
              >
                <video
                  src={project.videoSrc}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.color}22 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{ height: '80px', background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 100%)' }}
                />
                <div className="absolute bottom-4 left-5">
                  <span
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: 'rgba(0,0,0,0.55)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.7)',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    {project.title} · {project.industry}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                <div className="md:col-span-2 space-y-10">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                    <p className="text-white/60 leading-relaxed">{project.overview}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                    <p className="text-white/60 leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Our Solution</h2>
                    <p className="text-white/60 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2.5">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-white/65">
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: project.accentColor }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-4">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1.5 rounded-full font-medium"
                          style={{
                            background: `${project.color}15`,
                            border: `1px solid ${project.color}30`,
                            color: project.accentColor,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl p-10 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(123,47,247,0.1), rgba(37,99,255,0.1))',
                  border: '1px solid rgba(123,47,247,0.2)',
                }}
              >
                <h2 className="text-2xl font-bold text-white mb-3">
                  Ready to build your project?
                </h2>
                <p className="text-white/50 text-sm mb-6 max-w-sm mx-auto">
                  Schedule a free consultation and let&apos;s discuss how Cowebing can deliver
                  results like this for your business.
                </p>
                <Link href="/contact" className="btn-primary text-sm px-8 py-3.5">
                  Schedule Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
