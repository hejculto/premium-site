export const navigation = {
  logo: 'Hejstudio.dk',
  links: [
    { label: 'Ydelser', href: '#services' },
    { label: 'Projekter', href: '#work' },
    { label: 'Samarbejde', href: '#advisory' },
    { label: 'Om mig', href: '#about' },
  ],
  cta: { label: 'Book et møde', href: '#contact' },
}

export const hero = {
  headline: 'Vil du vækste dit brand eller din webshop?',
  subheadline: 'Jeg hjælper dig med at forstå din forretning, opbygge det rigtige digitale fundament og skabe vækst gennem strategi, design, e-handel og AI.',
  primaryCta: { label: 'Book et møde', href: '#contact' },
  secondaryCta: { label: 'Se ydelser', href: '#services' },
  badge: 'Ledig fra Q3 2026',
}

export const services = [
  {
    id: 'web-design',
    title: 'Web Design & Udvikling',
    description: 'Hjemmesider der konverterer besøgende til kunder. Ren kode, flotte interfaces og optimeret performance.',
    icon: 'Monitor',
  },
  {
    id: 'shopify',
    title: 'Shopify Udvikling',
    description: 'E-handel i verdensklasse bygget på Shopify. Fra tema-tilpasning til komplette butikker.',
    icon: 'ShoppingBag',
  },
  {
    id: 'branding',
    title: 'Branding & Grafisk Design',
    description: 'Visuelle identiteter der rammer. Logoer, brandingssystemer og digitale assets.',
    icon: 'Palette',
  },
  {
    id: 'photo-video',
    title: 'Fotografi & Video',
    description: 'Professionelt indhold til digitale platforme. Produktfotografering, brandvideoer og sociale medier.',
    icon: 'Camera',
  },
  {
    id: 'advertising',
    title: 'Meta Ads & Google Ads',
    description: 'Performancedrevne kampagner. Strategisk målretning og målbare resultater.',
    icon: 'TrendingUp',
  },
  {
    id: 'ai-consulting',
    title: 'AI Rådgivning',
    description: 'Praktisk AI-integration. Workflow-automatisering og værktøjsimplementering.',
    icon: 'Cpu',
  },
]

export const portfolio = [
  {
    id: 1,
    title: 'Promedon Brand & Web Experience',
    category: 'Branding & Web',
    description: 'Promedon er en international medicinsk virksomhed, hvor vi udviklede brandkoncept og visuel identitet. Derudover designede og byggede vi en ny hjemmeside med tre sprog og landespecifikke lovkrav.',
    image: '/exp1.png',
    tags: ['Brand Identitet', 'Web Design', 'Annoncering'],
  },
  {
    id: 2,
    title: 'Rikke Molge Jewelry E-handel',
    category: 'E-handel',
    description: 'Komplet e-handel for et dansk smykmærke. Vi udviklede både brandidentitet og online butik med fokus på visuel storytelling og konverteringsdesign.',
    image: '/exp2.png',
    tags: ['Brand Identitet', 'E-handel', 'Shopify'],
  },
  {
    id: 3,
    title: 'Lokal E-handel Vækst',
    category: 'Performance & Strategi',
    description: 'Komplet e-handel transformation for et dansk brand. Resultatet var over 100% increase i omsætningdrevet af forbedrede konverteringsrater og stærkere kundeopbygning.',
    image: '/exp3.png',
    tags: ['E-handel Optimering', 'Betalt Annoncering', 'Konverteringsstrategi'],
  },
  {
    id: 4,
    title: 'Produktlancering',
    category: 'Nyt Brand',
    description: 'Målet var at positionere brandet som professionelt og tilgængeligt på markedet. Vi gennemgik en komplet brandrefresh med dybdegående markedserhverv, hvilket resulterede i en raffineret visuel identitet.',
    image: '/exp4.png',
    tags: ['Brand Identitet'],
  },
]

export const advisoryPlans = [
  {
    id: 'monthly',
    name: 'Månedlig',
    price: 15000,
    period: 'per måned',
    description: 'Perfekt til løbende digitale behov',
    features: [
      'Månedlig strateg session',
      'Løbende design & udvikling',
      'Indholdsproduktion (foto/video)',
      'Annoncering (op til 2 kampagner)',
      'Månedlig resultatrapport',
      'Email support (48h svar)',
    ],
    cta: 'Book et møde',
    highlighted: false,
  },
  {
    id: 'quarterly',
    name: 'Kvartalsvis',
    price: 40000,
    period: 'per kvartal',
    description: 'Tæt strategisk samarbejde',
    features: [
      'Kvartalsvis strategisk dybdegående',
      'Ubegrænset design & udvikling',
      'Månedlig indholdsproduktion',
      'Annoncering (op til 5 kampagner)',
      'Bi ugentlige resultatgennemgange',
      'Prioriteret support (24h svar)',
      'AI workflow audit & optimering',
      'Dedikeret Slack kanal',
    ],
    cta: 'Kom i gang',
    highlighted: true,
  },
  {
    id: 'annual',
    name: 'Årlig',
    price: 120000,
    period: 'per år',
    description: 'Langsigtet strategisk samarbejde',
    features: [
      'Årlig planlægning & roadmap',
      'Ubegrænset alle ydelser',
      'Løbende indholdspipeline',
      'Ubegrænsede kampagner',
      'Ugentlige performance dashboards',
      'Realtid prioriteret support',
      'AI transformationsprogram',
      'Eksklusiv tidlig adgang til nye værktøjer',
      '2 kvartalsvise workshops',
    ],
    cta: 'Lad os tage en snak',
    highlighted: false,
  },
]

export const about = {
  headline: 'Din partner i\ndigital excellence',
  body: [
    'Jeg tror på, at det bedste arbejde sker, når kreativ vision, teknisk eksekvering og forretningsstrategi er i sync. Med over 10 års erfaring inden for design, udvikling, fotografering, video og annoncering bringer jeg en unik tværfaglig perspektiv til hvert projekt.',
    'Baseret i Danmark arbejder jeg med ambitiøse SMBer, der forstår, at en stærk digital tilstedeværelse ikke kun handler om æstetik — det handler om resultater. Uanset om du har brug for en flot hjemmeside, overbevisende indhold eller hjælp til at navigere i AI-landskabet, leverer jeg arbejde der gør en forskel.',
  ],
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  credentials: [
    { label: 'Års erfaring', value: '10+' },
    { label: 'Projekter leveret', value: '150+' },
    { label: 'Klienter betjent', value: '50+' },
  ],
}

export const finalCta = {
  headline: 'Klar til at transformere\ndin digitale tilstedeværelse?',
  subheadline: 'Book en gratis 30 minutters snak. Lad os diskutere dine mål og se, hvordan vi kan arbejde sammen.',
  primaryCta: { label: 'Book din snak', href: '#contact' },
  secondaryCta: { label: 'Se mine projekter', href: '#work' },
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} Hejstudio.dk. Alle rettigheder forbeholdes.`,
  links: [
    { label: 'Privatlivspolitik', href: '#' },
    { label: 'Servicevilkår', href: '#' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
}