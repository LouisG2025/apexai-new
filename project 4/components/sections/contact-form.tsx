'use client';

import { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const CONTACT_DETAILS = [
  { icon: Mail, label: 'Email', value: 'info@apexai.ae' },
  { icon: Phone, label: 'Phone', value: '+971 58 599 2301' },
  { icon: MapPin, label: 'Location', value: 'AI Campus, DIFC, Dubai' },
];

const CALL_BENEFITS = [
  'Review your current sales setup',
  'Identify bottlenecks slowing your team down',
  'Spot revenue leaks in your pipeline',
  'Outline practical next steps',
];

export function ContactPageContent() {
  const [activeTab, setActiveTab] = useState<'call' | 'message'>('call');
  const [calendlyKey, setCalendlyKey] = useState(0);
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const { ref: tabRef, isVisible: tabVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const handleTabChange = (tab: 'call' | 'message') => {
    if (tab === 'call' && activeTab !== 'call') {
      setCalendlyKey((k) => k + 1);
    }
    setActiveTab(tab);
  };

  return (
    <section id="book" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div
          ref={cardRef}
          className="mb-12 rounded-2xl bg-white p-8"
          style={{
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
            opacity: cardVisible ? 1 : 0,
            transform: cardVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <h2 className="font-cabinet text-2xl font-bold tracking-tight text-brand-dark md:text-3xl">
            What happens on the call
          </h2>
          <p className="mt-3 max-w-2xl font-inter leading-relaxed text-gray-600">
            This is a focused 30-minute session for founders and sales leaders
            who want to find and fix the gaps in their sales operation.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {CALL_BENEFITS.map((benefit, i) => (
              <li
                key={benefit}
                className="flex items-start gap-3"
                style={{
                  opacity: cardVisible ? 1 : 0,
                  transform: cardVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 400ms cubic-bezier(0.22,1,0.36,1)',
                  transitionDelay: `${200 + i * 80}ms`,
                }}
              >
                <span
                  className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0152ff]"
                  style={{ boxShadow: '0 0 6px rgba(1,82,255,0.5)' }}
                />
                <span className="font-inter text-sm text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={tabRef}
          className="flex items-center gap-1 rounded-xl p-1"
          style={{
            background: 'rgba(0,0,0,0.06)',
            width: 'fit-content',
            opacity: tabVisible ? 1 : 0,
            transform: tabVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 400ms cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          {(['call', 'message'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-white text-brand-dark shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab === 'call' ? 'Book a Call' : 'Send a Message'}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'call' ? (
        <CalendlyEmbed key={calendlyKey} embedKey={calendlyKey} />
      ) : (
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <MessageForm />
        </div>
      )}
    </section>
  );
}

function CalendlyEmbed({ embedKey }: { embedKey: number }) {
  const [loaded, setLoaded] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(false);
    setScriptReady(false);

    function initWidget() {
      if (!containerRef.current) return;
      try {
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/_apexai/ai-discovery-call?text_color=111827&primary_color=0152ff',
          parentElement: containerRef.current,
        });
      } catch (e) {}
      setScriptReady(true);
    }

    if ((window as any).Calendly) {
      initWidget();
    } else {
      const existing = document.querySelector(
        'script[src*="assets.calendly.com"]'
      ) as HTMLScriptElement | null;

      if (existing) {
        const interval = setInterval(() => {
          if ((window as any).Calendly) {
            clearInterval(interval);
            initWidget();
          }
        }, 100);
        setTimeout(() => clearInterval(interval), 5000);
      } else {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          const interval = setInterval(() => {
            if ((window as any).Calendly) {
              clearInterval(interval);
              initWidget();
            }
          }, 100);
          setTimeout(() => clearInterval(interval), 5000);
        };
        document.head.appendChild(script);
      }
    }

    function onMessage(e: MessageEvent) {
      if (
        e.data &&
        typeof e.data === 'object' &&
        e.data.event === 'calendly.event_type_viewed'
      ) {
        setLoaded(true);
      }
    }
    window.addEventListener('message', onMessage);
    const fallback = setTimeout(() => setLoaded(true), 4000);

    return () => {
      window.removeEventListener('message', onMessage);
      clearTimeout(fallback);
    };
  }, [embedKey]);

  return (
    <div className="mx-auto mt-10 w-full max-w-[1200px] px-6 lg:px-8">
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{
          border: '1px solid rgba(0,0,0,0.07)',
          background: '#f6f6f7',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          minHeight: '700px',
        }}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            loaded ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
        >
          <CalendlySkeleton />
        </div>
        <div
          className={`transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            ref={containerRef}
            style={{
              minWidth: '320px',
              height: '700px',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}

function SkeletonBox({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={className}
      style={{
        background: 'rgba(0,0,0,0.07)',
        borderRadius: '6px',
        ...style,
      }}
    />
  );
}

function CalendlySkeleton() {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const rows = 5;

  return (
    <div
      className="flex h-full w-full"
      style={{ minHeight: '700px', background: '#f6f6f7' }}
    >
      <div
        className="flex w-full flex-col md:flex-row"
        style={{ minHeight: '700px' }}
      >
        <div
          className="flex flex-col gap-0 md:w-[38%]"
          style={{
            borderRight: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <div
            className="flex items-center justify-center p-8"
            style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', minHeight: '200px' }}
          >
            <SkeletonBox style={{ width: '120px', height: '48px', borderRadius: '8px' }} />
          </div>

          <div className="flex flex-col gap-4 p-8">
            <SkeletonBox style={{ width: '60%', height: '12px' }} />
            <SkeletonBox style={{ width: '80%', height: '28px', borderRadius: '4px' }} />

            <div className="mt-2 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <SkeletonBox style={{ width: '20px', height: '20px', borderRadius: '50%', flexShrink: 0 }} />
                <SkeletonBox style={{ width: '55px', height: '11px' }} />
              </div>
              <div className="flex items-start gap-3">
                <SkeletonBox style={{ width: '20px', height: '20px', borderRadius: '4px', flexShrink: 0 }} />
                <div className="flex flex-col gap-1.5" style={{ flex: 1 }}>
                  <SkeletonBox style={{ width: '100%', height: '11px' }} />
                  <SkeletonBox style={{ width: '55%', height: '11px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6 p-8">
          <SkeletonBox style={{ width: '55%', height: '22px', borderRadius: '6px' }} />

          <div className="flex items-center justify-center gap-4">
            <SkeletonBox style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
            <SkeletonBox style={{ width: '130px', height: '16px' }} />
            <SkeletonBox style={{ width: '24px', height: '24px', borderRadius: '50%' }} />
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((d) => (
              <div key={d} className="flex justify-center">
                <SkeletonBox style={{ width: '28px', height: '10px' }} />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {Array.from({ length: rows }).map((_, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-7 gap-1">
                {Array.from({ length: 7 }).map((_, colIdx) => (
                  <div key={colIdx} className="flex justify-center">
                    <SkeletonBox
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        opacity: rowIdx === 0 && colIdx < 5 ? 0.35 : 0.6,
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-2">
            <SkeletonBox style={{ width: '80px', height: '12px' }} />
            <div className="flex items-center gap-2">
              <SkeletonBox style={{ width: '20px', height: '20px', borderRadius: '50%' }} />
              <SkeletonBox style={{ width: '180px', height: '12px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    website: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const data = new FormData();
      data.append('Full Name', formData.fullName);
      data.append('Website', formData.website);
      data.append('Email', formData.email);
      data.append('Phone', formData.phone);
      data.append('Message', formData.message);

      const res = await fetch('https://formspree.io/f/xykdoekd', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or email us directly at louis.grange@apexai.ae');
      }
    } catch {
      setError('Something went wrong. Please try again or email us directly at louis.grange@apexai.ae');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ fullName: '', website: '', email: '', phone: '', message: '' });
    setError('');
  };

  const inputClasses =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-brand-dark outline-none transition-all focus:ring-2 focus:ring-[#0152ff]/30 focus:border-[#0152ff]';

  return (
    <div className="mt-10">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div
          className="rounded-2xl bg-white p-8"
          style={{
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: 'rgba(1,82,255,0.1)', border: '2px solid rgba(1,82,255,0.2)' }}
              >
                <Check className="h-8 w-8 text-[#0152ff]" />
              </div>
              <h2 className="font-cabinet text-2xl font-bold tracking-tight text-brand-dark md:text-3xl">
                Message Received
              </h2>
              <p className="mt-3 max-w-sm font-inter leading-relaxed text-gray-600">
                The founder will get back to you very shortly. We typically respond within a few hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 text-sm font-semibold transition-opacity hover:opacity-75"
                style={{ color: '#0152ff' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h2 className="font-cabinet text-2xl font-bold tracking-tight text-brand-dark md:text-3xl">
                Tell Us About Your Project
              </h2>
              <p className="mt-3 font-inter leading-relaxed text-gray-600">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-dark">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputClasses}
                      style={{ borderColor: 'rgba(0,0,0,0.12)' }}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-dark">
                      Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className={inputClasses}
                      style={{ borderColor: 'rgba(0,0,0,0.12)' }}
                      placeholder="https://yourcompany.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-dark">
                      Work Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      style={{ borderColor: 'rgba(0,0,0,0.12)' }}
                      placeholder="john@acme.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-brand-dark">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      style={{ borderColor: 'rgba(0,0,0,0.12)' }}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-brand-dark">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    style={{ borderColor: 'rgba(0,0,0,0.12)' }}
                    placeholder="Tell us about your project ideas, what you're looking to achieve, and which services interest you."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-[#0152ff] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-px disabled:opacity-60 sm:w-auto"
                  style={{ boxShadow: '0 4px 20px rgba(1,82,255,0.35)' }}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>

                {error && (
                  <p className="text-sm" style={{ color: '#ef4444' }}>
                    {error}
                  </p>
                )}
              </form>
            </>
          )}
        </div>

        <div>
          <div
            className="rounded-2xl bg-white p-8"
            style={{
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
            }}
          >
            <h3 className="font-cabinet text-lg font-semibold text-brand-dark">
              Prefer to reach out directly?
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Get in touch using any of the channels below.
            </p>
            <div className="mt-6 space-y-5">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-start gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: 'rgba(1,82,255,0.08)',
                      border: '1px solid rgba(1,82,255,0.15)',
                    }}
                  >
                    <detail.icon className="h-5 w-5 text-[#0152ff]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {detail.label}
                    </p>
                    <p className="font-medium text-brand-dark">
                      {detail.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
