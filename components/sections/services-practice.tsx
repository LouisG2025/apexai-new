'use client';

import { GitBranch, Database, Search, Phone, FileText, Send, GraduationCap } from 'lucide-react';
import { useState } from 'react';
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
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-[2rem] bg-white p-8 md:p-12 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ 
        border: hovered ? '1px solid rgba(1,82,255,0.3)' : '1px solid rgba(0,0,0,0.06)', 
        boxShadow: hovered 
          ? '0 30px 60px -12px rgba(1,82,255,0.12), 0 18px 36px -18px rgba(0,0,0,0.1)' 
          : '0 4px 24px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 0% 0%, rgba(1,82,255,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
        <div
          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
          style={{ 
            background: 'white', 
            border: '1px solid rgba(1,82,255,0.15)',
            boxShadow: '0 8px 16px rgba(1,82,255,0.08)'
          }}
        >
          <item.icon className="h-6 w-6 text-[#0152ff]" />
        </div>
        <div className="flex-1">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">
            {item.label}
          </div>
          <h3 className="font-cabinet text-2xl font-bold text-brand-dark md:text-3xl tracking-tight">
            {item.name}
          </h3>
          <p className="mt-3 font-inter text-lg leading-relaxed text-slate-500 max-w-2xl">
            {item.problem}
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-100 pt-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0152ff]">The Impact</span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-100 to-transparent" />
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {item.outcomes.map((outcome, i) => (
            <li
              key={outcome}
              className="flex items-start gap-3 rounded-2xl px-5 py-4 transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-200"
              style={{ background: '#f8fafc' }}
            >
              <div
                className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#0152ff] shadow-[0_0_8px_rgba(1,82,255,0.4)]"
              />
              <span className="font-inter text-sm font-medium text-slate-600 leading-snug">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex justify-end">
        <Link
          href={item.href}
          className="group/link inline-flex items-center gap-3 rounded-full bg-[#0152ff] px-8 py-3.5 text-sm font-bold text-white transition-all hover:shadow-[0_8px_24px_rgba(1,82,255,0.3)] hover:-translate-y-0.5"
        >
          Get started
          <svg 
            width="18" height="18" viewBox="0 0 18 18" fill="none"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          >
            <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
