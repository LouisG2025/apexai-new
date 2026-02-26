'use client';

import { GitBranch, Database, Search, Phone, FileText, Send, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const PRACTICE_ITEMS = [
  {
    id: 'pipeline',
    label: 'Pipeline',
    icon: GitBranch,
    name: 'Sales Pipeline Architecture',
    problem: 'Leads fall through the cracks because your pipeline has no structure.',
    outcomes: [
      'Reduce pipeline friction',
      'Surface high-value leads faster',
      'Gain real-time pipeline visibility',
    ],
    href: '/contact#book',
  },
  {
    id: 'crm',
    label: 'CRM',
    icon: Database,
    name: 'Intelligent CRM Systems',
    problem: 'Your CRM is a data graveyard instead of a revenue engine.',
    outcomes: [
      'Improve rep response speed',
      'Increase deal velocity',
      'Eliminate manual data entry',
      'Surface actionable insights automatically',
    ],
    href: '/contact#book',
  },
  {
    id: 'enrichment',
    label: 'Enrichment',
    icon: Search,
    name: 'Lead Enrichment & Research',
    problem: 'Reps spend hours researching before they can pick up the phone.',
    outcomes: [
      'Reclaim hours of selling time per rep',
      'Prioritise highest-intent prospects',
      'Personalise outreach at scale',
    ],
    href: '/contact#book',
  },
  {
    id: 'call-intel',
    label: 'Call Intelligence',
    icon: Phone,
    name: 'Call Intelligence & Post-Call Automation',
    problem: 'Valuable call insights disappear the moment the call ends.',
    outcomes: [
      'Capture every action item automatically',
      'Eliminate post-call admin',
      'Keep CRM data accurate without manual input',
    ],
    href: '/contact#book',
  },
  {
    id: 'documents',
    label: 'Documents',
    icon: FileText,
    name: 'Document Automation',
    problem: 'Manual proposal and invoice creation slows deal velocity.',
    outcomes: [
      'Close deals faster with instant proposals',
      'Reduce errors in contracts and invoices',
      'Free up hours of admin per week',
    ],
    href: '/contact#book',
  },
  {
    id: 'reactivation',
    label: 'Reactivation',
    icon: Send,
    name: 'Outreach & Reactivation Systems',
    problem: 'Thousands of dormant leads sit untouched in your database.',
    outcomes: [
      'Reactivate cold leads on autopilot',
      'Generate pipeline from existing data',
      'Increase total addressable opportunities',
    ],
    href: '/contact#book',
  },
  {
    id: 'ai-sales-training',
    label: 'AI Sales Training',
    icon: GraduationCap,
    name: 'AI Sales Training',
    problem: 'Your team has the leads but not the skills to close them consistently.',
    outcomes: [
      'Shorten rep ramp time significantly',
      'Improve objection handling with AI coaching',
      'Increase close rates through structured training',
    ],
    href: '/contact#book',
  },
] as const;

type PracticeItem = typeof PRACTICE_ITEMS[number];

function ItemPanel({ item }: { item: PracticeItem }) {
  return (
    <div
      className="h-full w-full rounded-2xl bg-white p-8 md:p-10"
      style={{ border: '1px solid rgba(0,0,0,0.07)', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
          style={{ background: 'rgba(1,82,255,0.08)', border: '1px solid rgba(1,82,255,0.15)' }}
        >
          <item.icon className="h-5 w-5 text-[#0152ff]" />
        </div>
        <div>
          <h3 className="font-cabinet text-xl font-bold text-brand-dark md:text-2xl">
            {item.name}
          </h3>
          <p className="mt-2 font-inter text-base leading-relaxed text-gray-500">
            {item.problem}
          </p>
        </div>
      </div>

      <div className="mt-8 border-t pt-8" style={{ borderTopColor: 'rgba(0,0,0,0.06)' }}>
        <p className="mb-4 font-cabinet text-xs font-semibold uppercase tracking-widest text-gray-400">
          Outcomes
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {item.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-3 rounded-xl px-4 py-3"
              style={{ background: '#F6F6F7', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <span
                className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0152ff]"
                style={{ boxShadow: '0 0 6px rgba(1,82,255,0.5)' }}
              />
              <span className="font-inter text-sm text-gray-700">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Link
          href={item.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0152ff] transition-all hover:gap-3"
        >
          Get started
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full"
            style={{ border: '1px solid rgba(1,82,255,0.3)', background: 'rgba(1,82,255,0.1)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="#0152ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}

export function ServicesPractice() {
  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0152ff]">
          In Practice
        </p>
        <h2 className="font-cabinet text-3xl font-bold tracking-tight text-brand-dark md:text-4xl">
          What This Looks Like in Practice
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-[#0152ff]" />
        <div className="mt-12 space-y-6">
          {PRACTICE_ITEMS.map((item) => (
            <ItemPanel key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
