export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  ],
} as const;

export const SERVICES = [
  {
    slug: 'sales-pipeline',
    title: 'Sales Pipeline Architecture',
    description: 'End-to-end pipeline design and automation that turns scattered leads into a structured, revenue-generating machine.',
    bullets: [
      'Custom CRM pipeline design',
      'Automated lead routing and scoring',
      'Pipeline analytics and reporting',
      'Multi-channel integration',
    ],
  },
  {
    slug: 'crm-systems',
    title: 'Intelligent CRM Systems',
    description: 'Smart CRM configurations that <strong>work for you, not against you</strong>. Automated data entry, smart tagging, and intelligent workflows.',
    bullets: [
      'CRM audit and optimization',
      'Automated data enrichment',
      'Smart tagging and segmentation',
      'Custom workflow automation',
    ],
  },
  {
    slug: 'lead-enrichment',
    title: 'Lead Enrichment & Research Automation',
    description: 'Automated lead research and enrichment that gives your sales team the context they need before every conversation.',
    bullets: [
      'Automated company research',
      'Contact data enrichment',
      'Social profile aggregation',
      'Intent signal tracking',
    ],
  },
  {
    slug: 'call-intelligence',
    title: 'Call Intelligence & Post-Call Automation',
    description: 'Turn every sales call into <strong>actionable data</strong>. Automated summaries, follow-ups, and CRM updates triggered by call outcomes.',
    bullets: [
      'AI call transcription and summaries',
      'Automated follow-up sequences',
      'CRM auto-update after calls',
      'Sentiment and keyword analysis',
    ],
  },
  {
    slug: 'document-automation',
    title: 'Proposal / Contract / Invoice Automation',
    description: '<strong>Eliminate manual document creation.</strong> Auto-generate proposals, contracts, and invoices from your CRM data.',
    bullets: [
      'Template-based document generation',
      'E-signature integration',
      'Automated invoice creation',
      'Document tracking and reminders',
    ],
  },
  {
    slug: 'outreach-reactivation',
    title: 'Outreach & Reactivation Systems',
    description: 'Systematic outreach campaigns and dormant lead reactivation to maximize the value of every contact in your database.',
    bullets: [
      'Multi-channel outreach sequences',
      'Dormant lead reactivation',
      'Personalized messaging at scale',
      'A/B testing and optimization',
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    id: 'audit',
    title: 'Understand Your Sales Operation',
    subtitle: 'Understanding your business',
    description: 'We map your current process properly before touching anything technical.',
    details: [
      'Audit your current workflows, tools and operations',
      'Identify where revenue is missed',
      'Review response times and follow-up gaps',
      'Map the full journey from lead to closed deal',
    ],
    ctaLabel: 'Discuss this further',
  },
  {
    id: 'architect',
    title: 'Design the System',
    subtitle: 'Designing the solution',
    description: 'Now we design how it should work. Everything is <strong>built on numbers</strong>. Not just opinions.',
    details: [
      'Define the plan',
      'Establish the architecture',
      'Plan integrations',
      'Potential ROI mapping',
    ],
    ctaLabel: '',
  },
  {
    id: 'build',
    title: 'Build & Integrate',
    subtitle: 'Bringing it to life',
    description: 'We build it properly. <strong>Real code and properly scalable.</strong> Your team keeps selling. We integrate seamlessly.',
    details: [
      'Built in real code for real scalability',
      'CRM configuration',
      'Quality control',
      'Integration between tools',
      'Testing across real scenarios',
    ],
    ctaLabel: 'Click here to discuss a build',
  },
  {
    id: 'test',
    title: 'Test It Under Pressure',
    subtitle: 'Ensuring reliability',
    description: 'Before launch, we <strong>stress test everything</strong>. If it breaks, we fix it before it goes live.',
    details: [
      'System timing',
      'Checks for hallucinations',
      'Training happens here if required',
      'Data syncing',
      'Reporting accuracy',
    ],
    ctaLabel: '',
  },
  {
    id: 'deploy',
    title: 'Launch & Improve',
    subtitle: 'Going live with confidence',
    description: 'Once live, we monitor and improve. Sales systems are <strong>not &ldquo;set and forget&rdquo;</strong>. They evolve with your team.',
    details: [
      'Track output results',
      'Use data to keep improving',
      'Track ROI gains and the impact it has',
      'Optimise as the technology progresses',
    ],
    ctaLabel: 'Click here to get started',
  },
] as const;

export const VALUES = [
  {
    title: 'Partnership Led',
    description: 'We don\'t do one-off builds. We work with businesses looking for <strong>long-term growth</strong>, continuously improving and strengthening your sales systems as you scale.',
  },
  {
    title: 'Results First',
    description: 'Everything we build must improve performance. Faster follow-ups. Cleaner pipelines. Higher conversion. <strong>If it doesn\'t move the needle, it doesn\'t happen.</strong>',
  },
  {
    title: 'Creative Strategy',
    description: 'Automation should not kill personality. We design systems that <strong>support your brand</strong>, your offer, and your positioning without making your business robotic.',
  },
  {
    title: 'Sales Specialists',
    description: 'We know where the ROI happens. We know <strong>where results are created</strong> inside your sales process. It starts with a proper conversation.',
  },
] as const;
