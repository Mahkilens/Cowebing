'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  industry: string;
  description: string;
  technologies: string[];
  color: string;
  videoSrc: string;
  thumbnail: string;
}

export default function PortfolioVideoCard({ project }: { project: Project }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="block group">
      <div
        className="rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 group-hover:-translate-y-1"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* ── Video preview ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '260px',
            overflow: 'hidden',
            background: '#080808',
          }}
        >
          <video
            src={project.videoSrc}
            poster={project.thumbnail}
            autoPlay
            muted
            playsInline
            loop
            preload="metadata"
            controls={false}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.color} 0%, transparent 65%)`,
            }}
          />

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{
              height: '64px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
            }}
          />

          {/* Industry badge */}
          <div className="absolute bottom-3 left-4">
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(6px)',
              }}
            >
              {project.industry}
            </span>
          </div>

          {/* External link */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(6px)' }}
            >
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* ── Card body ── */}
        <div className="p-6">
          <h2 className="text-lg font-bold text-white mb-1">{project.title}</h2>
          <p className="text-sm text-white/50 leading-relaxed mb-4">{project.description}</p>
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: 'rgba(123,47,247,0.12)',
                    border: '1px solid rgba(123,47,247,0.2)',
                    color: '#9B4FF9',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="flex-shrink-0 text-sm font-semibold text-[#9B4FF9] flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
              Case Study <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
