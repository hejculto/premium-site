export const navigation = {
  logo: 'Studio',
  links: [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Advisory', href: '#advisory' },
    { label: 'About', href: '#about' },
  ],
  cta: { label: 'Book a Call', href: '#contact' },
}

export const hero = {
  headline: 'Where Strategy\nMeets Craft',
  subheadline: 'Multidisciplinary creative partner for ambitious brands seeking digital excellence, compelling content, and practical AI adoption.',
  primaryCta: { label: 'Book a Call', href: '#contact' },
  secondaryCta: { label: 'View Services', href: '#services' },
  badge: 'Available for Q3 2026',
}

export const services = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    description: 'Custom websites that convert visitors into customers. Clean code, stunning interfaces, optimized performance.',
    icon: 'Monitor',
  },
  {
    id: 'shopify',
    title: 'Shopify Development',
    description: 'Powerful e-commerce experiences built on Shopify. From theme customization to full-scale store builds.',
    icon: 'ShoppingBag',
  },
  {
    id: 'branding',
    title: 'Branding & Graphic Design',
    description: 'Visual identities that resonate. Logos, brand systems, marketing materials, and digital assets.',
    icon: 'Palette',
  },
  {
    id: 'photo-video',
    title: 'Photography & Video',
    description: 'Professional content creation for digital platforms. Product photography, brand videos, social content.',
    icon: 'Camera',
  },
  {
    id: 'advertising',
    title: 'Meta Ads & Google Ads',
    description: 'Performance-driven advertising campaigns. Strategic targeting, compelling creative, measurable results.',
    icon: 'TrendingUp',
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting for Businesses',
    description: 'Practical AI adoption strategies. Workflow automation, tools implementation, team training.',
    icon: 'Cpu',
  },
]

export const whyWork = [
  {
    id: 'multidisciplinary',
    title: 'One Strategic Partner',
    description: 'Skip the coordination chaos. From concept to execution, one creative mind handles your vision across all channels.',
    stat: '6+',
    statLabel: 'Disciplines',
  },
  {
    id: 'technical',
    title: 'Creative + Technical',
    description: 'Design sensibility meets engineering precision. Every deliverable is both beautiful and built to perform.',
    stat: '100%',
    statLabel: 'Built In-House',
  },
  {
    id: 'performance',
    title: 'Results-Focused',
    description: 'Beautiful work matters, but ROI matters more. Every project tied to clear business objectives and measurable outcomes.',
    stat: '3x',
    statLabel: 'Avg. ROI Increase',
  },
]

export const portfolio = [
  {
    id: 1,
    title: 'Promedon Brand & Web Experience',
    category: 'Branding & Web',
    description: 'Promedon is an international medical technology company for which we developed the brand conceptualization and overall visual identity. Additionally, we designed and built a new website with support for three languages, country-specific legal considerations, and dedicated sections for each of its medical specialties.',
    image: '/exp1.png',
    tags: ['Brand Identity', 'Web Design', 'Advertising'],
  },
  {
    id: 2,
    title: 'Rikke Molge Jewelry E-commerce',
    category: 'E-Commerce',
    description: 'End-to-end e-commerce project for a Denmark-based jewelry brand. We developed both the brand identity and the online store, targeting local and international markets, with a strong focus on visual storytelling and conversion-driven design.',
    image: '/exp2.png',
    tags: ['Brand Identity', 'E-commerce', 'Shopify'],
  },
  {
    id: 3,
    title: 'Local E-commerce Growth Strategy',
    category: 'Performance & Strategy',
    description: 'Led a complete e-commerce transformation for a Denmark-based brand, combining webshop optimization with a targeted advertising strategy. The result was a +100% increase in revenue, driven by improved conversion rates, stronger customer acquisition, and a scalable growth framework.',
    image: '/exp3.png',
    tags: ['E-commerce Optimization', 'Paid Advertising', 'Conversion Strategy'],
  },
  {
    id: 4,
    title: 'Tech Startup Launch',
    category: 'Full-Service',
    description: 'Launch campaign with landing page, Meta ads, and AI-powered customer service setup.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    tags: ['Advertising', 'AI Consulting', 'Web'],
  },
]

export const advisoryPlans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: 15000,
    period: 'per month',
    description: 'Perfect for ongoing digital needs',
    features: [
      'Monthly strategy session',
      'Continuous design & development',
      'Content creation (photos/videos)',
      'Ad management (up to 2 campaigns)',
      'Monthly performance report',
      'Email support (48h response)',
    ],
    cta: 'Start Monthly',
    highlighted: false,
  },
  {
    id: 'quarterly',
    name: 'Quarterly',
    price: 40000,
    period: 'per quarter',
    description: 'Comprehensive partnership',
    features: [
      'Quarterly strategy deep-dive',
      'Unlimited design & development',
      'Monthly content production',
      'Ad management (up to 5 campaigns)',
      'Bi-weekly performance reviews',
      'Priority support (24h response)',
      'AI workflow audit & optimization',
      'Dedicated Slack channel',
    ],
    cta: 'Start Quarterly',
    highlighted: true,
  },
  {
    id: 'annual',
    name: 'Annual',
    price: 120000,
    period: 'per year',
    description: 'Full-year strategic partnership',
    features: [
      'Annual planning & roadmapping',
      'Unlimited all services',
      'Continuous content pipeline',
      'Unlimited ad campaigns',
      'Weekly performance dashboards',
      'Real-time priority support',
      'AI transformation program',
      'Exclusive early access to new tools',
      '2 quarterly offsite workshops',
    ],
    cta: 'Start Annual',
    highlighted: false,
  },
]

export const about = {
  headline: 'Your Partner in\nDigital Excellence',
  body: [
    'I believe the best work happens when creative vision, technical execution, and business strategy align. With over a decade of experience spanning design, development, photography, video, and advertising, I bring a unique multidisciplinary perspective to every project.',
    'Based in Denmark, I work with ambitious SMBs who understand that great digital presence isn\'t just about aesthetics—it\'s about results. Whether you need a stunning website, compelling content, or help navigating the AI landscape, I deliver work that moves the needle.',
  ],
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  credentials: [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Clients Served', value: '50+' },
  ],
}

export const finalCta = {
  headline: 'Ready to Transform\nYour Digital Presence?',
  subheadline: 'Book a free 30-minute discovery call. Let\'s discuss your goals and explore how we can work together.',
  primaryCta: { label: 'Book Your Discovery Call', href: '#contact' },
  secondaryCta: { label: 'View My Work', href: '#work' },
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} Studio. All rights reserved.`,
  links: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
}
