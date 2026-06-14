export interface PortfolioProject {
  slug: string;
  title: string;
  industry: string;
  tagline: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  technologies: string[];
  results: { metric: string; description: string }[];
  color: string;
  accentColor: string;
  videoSrc: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'j-adore-lips',
    title: 'J-Adore Lips',
    industry: 'Beauty & Aesthetics',
    tagline: 'Premium lip filler & injection services',
    description:
      'A high-end beauty aesthetics brand specializing in lip enhancement, filler procedures, and injection services. Cowebing designed a luxurious, conversion-focused website that perfectly reflects the brand\'s upscale identity.',
    overview:
      'J-Adore Lips needed a website that matched the luxury, elegance, and professionalism of their aesthetic services. The goal was to attract high-end clientele, showcase services clearly, and drive appointment bookings through an integrated scheduling system.',
    challenge:
      'The client had no online presence and was relying entirely on social media referrals. Without a professional website, potential clients lacked the confidence to book premium aesthetic services — resulting in lost revenue and a brand perception mismatch.',
    solution:
      'Cowebing designed and developed a custom, mobile-first website with a sophisticated dark aesthetic, high-quality visual layouts, a detailed services showcase, and a seamless booking integration. Every design decision was made to communicate trust, luxury, and expertise.',
    features: [
      'Integrated online booking & appointment scheduling',
      'Full service showcase with detailed descriptions',
      'Before & after photo gallery',
      'Mobile-optimized responsive design',
      'SEO-optimized page structure',
      'Brand-consistent color palette and typography',
      'Fast-loading performance optimization',
      'Clear calls-to-action driving consultations',
    ],
    videoSrc: '/videos/j-adore-lips.mp4',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'Vercel', 'Booking Integration'],
    results: [
      { metric: '3–5 Day Turnaround', description: 'From brief to live website' },
      { metric: 'Booking System', description: 'Integrated appointment scheduling' },
      { metric: '100% Custom', description: 'No templates — built from scratch' },
      { metric: 'Client Approved', description: '5-star client satisfaction' },
    ],
    color: '#C0396B',
    accentColor: '#F472B6',
  },
  {
    slug: 'diamond-raw-hair-boutique',
    title: 'Diamond Raw Hair Boutique',
    industry: 'Beauty & Hair Care',
    tagline: 'Premium raw hair extensions & bundles',
    description:
      'A luxury hair boutique specializing in raw hair extensions, bundles, closures, and wigs. Cowebing built a sleek e-commerce-ready website that positions the brand as a premium destination for high-quality hair products.',
    overview:
      'Diamond Raw Hair Boutique needed a website that would communicate product quality, build trust with customers, and drive online sales. The brand required an elevated, editorial aesthetic to stand apart from competitors.',
    challenge:
      'The hair extension market is highly competitive. Without a strong online presence and professional product presentation, Diamond Raw Hair was losing potential customers to competitors with more polished digital storefronts.',
    solution:
      'Cowebing created a visually compelling, editorial-style website that showcases the product line with elegance. The site features clear product categories, trust-building elements, and strong calls-to-action to drive purchases and consultations.',
    features: [
      'Product showcase with detailed categories',
      'Editorial photography layout',
      'Customer testimonials section',
      'Mobile-optimized shopping experience',
      'Brand story and values section',
      'Instagram feed integration placeholder',
      'SEO-optimized product pages',
      'WhatsApp/contact ordering integration',
    ],
    videoSrc: '/videos/DiamondRawHairBoutique.mp4',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'Vercel'],
    results: [
      { metric: 'Premium Brand', description: 'Editorial-level visual identity' },
      { metric: 'Mobile First', description: 'Optimized for mobile shoppers' },
      { metric: 'SEO Ready', description: 'Built for local and national search' },
      { metric: '100% Custom', description: 'Unique brand-matched design' },
    ],
    color: '#B8860B',
    accentColor: '#F5C518',
  },
  {
    slug: 'erika-scott-office',
    title: 'Erika Scott Office',
    industry: 'Professional Services',
    tagline: 'Professional office solutions & consulting',
    description:
      'A professional services firm offering office solutions, business consulting, and administrative support. Cowebing designed a clean, authoritative website that establishes credibility and generates qualified leads.',
    overview:
      'Erika Scott Office needed a professional digital presence that clearly communicated their service offerings, established authority in the professional services space, and made it easy for potential clients to get in touch.',
    challenge:
      'Without a strong digital presence, the business struggled to compete with larger firms and missed opportunities to capture leads from clients searching online for professional services in the area.',
    solution:
      'Cowebing built a clean, corporate-style website with a focus on trust signals, clear service descriptions, a compelling about section, and a streamlined contact flow designed to generate qualified inquiries.',
    features: [
      'Service showcase with detailed descriptions',
      'Professional team/founder section',
      'Lead generation contact forms',
      'Testimonials and social proof',
      'Mobile-responsive corporate layout',
      'Local SEO optimization',
      'Google Maps integration',
      'Clear call-to-action throughout',
    ],
    videoSrc: '/videos/ErikaScottOffice.mp4',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'Vercel'],
    results: [
      { metric: 'Lead Generation', description: 'Optimized for qualified inquiries' },
      { metric: 'Authority Design', description: 'Corporate-level presentation' },
      { metric: 'Local SEO', description: 'Optimized for local search discovery' },
      { metric: 'Fast Launch', description: 'Delivered within project timeline' },
    ],
    color: '#1E40AF',
    accentColor: '#3B82F6',
  },
  {
    slug: 'ai-market-intelligence-engine',
    title: 'AI Market Intelligence Engine',
    industry: 'Technology & Data Analytics',
    tagline: 'AI-powered market data & competitive intelligence',
    description:
      'A cutting-edge technology platform providing AI-driven market intelligence, competitive analysis, and data-driven insights for businesses. Cowebing built a futuristic, high-performance web interface for this advanced data product.',
    overview:
      'The AI Market Intelligence Engine required a sophisticated, technology-forward web presence that could communicate complex data capabilities in a clear, compelling way — while also functioning as a fully capable product interface.',
    challenge:
      'Conveying the power of AI-driven analytics to non-technical business users required a design that balanced technical depth with accessibility. The platform also needed to perform well under data-heavy loads.',
    solution:
      'Cowebing developed a sleek, dark-mode dashboard-inspired website with interactive data visualizations, clear product explanations, and a modern SaaS aesthetic that positions the platform at the forefront of market intelligence technology.',
    features: [
      'Dark-mode SaaS dashboard aesthetic',
      'Interactive data visualization components',
      'Product feature showcase',
      'Pricing and subscription section',
      'API documentation placeholder',
      'User onboarding flow design',
      'Performance-optimized rendering',
      'SEO and structured data markup',
    ],
    videoSrc: '/videos/AI-Market-Intec-App.mp4',
    technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'Framer Motion', 'Vercel'],
    results: [
      { metric: 'SaaS Design', description: 'Enterprise-grade product interface' },
      { metric: 'Performance', description: 'Optimized Core Web Vitals' },
      { metric: 'Modern Stack', description: 'Built with latest tech standards' },
      { metric: 'Scalable', description: 'Architecture built for growth' },
    ],
    color: '#7B2FF7',
    accentColor: '#2563FF',
  },
];
