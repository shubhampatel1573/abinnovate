import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useInView } from 'framer-motion'
import { SERVICES } from '../data/content'

function usePageTitle(title) {
  useEffect(() => { document.title = title }, [title])
}

/* ─── Marquee ───────────────────────────────────────────────── */
function Marquee() {
  const items = ['Custom Software', 'Website Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce', 'Shopify Stores', 'Business Automation']
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center gap-12" style={{ color: '#666' }}>
            {item} <span style={{ color: '#e0e0e0' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-16 pb-0 px-5 lg:px-10 overflow-hidden"
      style={{ background: '#0B1120' }}
    >
      {/* ── Grid background pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,91,219,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,91,219,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* ── Radial glow centre-left ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 55% at 20% 50%, rgba(59,91,219,0.18) 0%, transparent 70%)',
        }}
      />
      {/* ── Decorative diagonal lines right side ── */}
      <svg
        className="absolute right-0 top-0 h-full pointer-events-none hidden lg:block"
        width="420" viewBox="0 0 420 800" fill="none" preserveAspectRatio="xMaxYMid slice"
      >
        <line x1="420" y1="0" x2="180" y2="800" stroke="rgba(59,91,219,0.25)" strokeWidth="1" />
        <line x1="420" y1="0" x2="260" y2="800" stroke="rgba(59,91,219,0.18)" strokeWidth="1" />
        <line x1="420" y1="0" x2="330" y2="800" stroke="rgba(59,91,219,0.12)" strokeWidth="1" />
        <line x1="420" y1="0" x2="390" y2="800" stroke="rgba(59,91,219,0.08)" strokeWidth="1" />
        {/* Horizontal accent */}
        <line x1="200" y1="420" x2="420" y2="420" stroke="rgba(59,91,219,0.2)" strokeWidth="1" />
        <line x1="250" y1="460" x2="420" y2="460" stroke="rgba(59,91,219,0.12)" strokeWidth="1" />
        {/* Corner box */}
        <rect x="330" y="60" width="60" height="60" stroke="rgba(59,91,219,0.3)" strokeWidth="1" fill="none" />
        <rect x="345" y="75" width="30" height="30" stroke="rgba(59,91,219,0.2)" strokeWidth="1" fill="none" />
      </svg>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-24 lg:py-32">
        <p
          className="text-xs uppercase tracking-[0.3em] font-bold mb-6"
          style={{ color: '#3B5BDB' }}
        >
          Software Development Studio
        </p>
        <h1
          className="font-black uppercase leading-[0.92] tracking-tight mb-8 max-w-3xl"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 5.2rem)', color: '#FFFFFF' }}
        >
          Turning Ideas Into<br />
          Innovative Digital<br />
          Solutions
        </h1>
        <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: '#8B9CC8' }}>
          We build custom software, mobile apps, and Shopify stores that help
          businesses grow — with precision, speed, and craftsmanship.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold rounded-lg transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: '#3B5BDB', color: '#fff' }}
          >
            Start a Project <ArrowRight size={16} />
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold rounded-lg transition-all duration-200 hover:bg-white hover:text-[#0B1120]"
            style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* ── Marquee strip at bottom ── */}
      <div className="relative z-10 w-full" style={{ borderTop: '1px solid rgba(59,91,219,0.2)' }}>
        <div className="max-w-7xl mx-auto py-5">
          <HeroMarquee />
        </div>
      </div>
    </section>
  )
}

function HeroMarquee() {
  const items = ['Custom Software', 'Website Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce', 'Shopify Stores', 'Business Automation']
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center gap-12" style={{ color: 'rgba(139,156,200,0.5)' }}>
            {item} <span style={{ color: 'rgba(59,91,219,0.4)' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─── Stats Strip ───────────────────────────────────────────── */
function StatsStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const stats = [
    { value: '7+', label: 'Core Services' },
    { value: '24h', label: 'Response Time' },
    { value: '100%', label: 'Custom-Built' },
    { value: '∞', label: 'Scalability' },
  ]
  return (
    <section className="mt-8" style={{ borderTop: '1px solid #EBEBEB', borderBottom: '1px solid #EBEBEB', background: '#FAFAFA' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-5 lg:px-10 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className="py-10 flex flex-col gap-1 transition-all duration-700"
            style={{
              borderRight: i < stats.length - 1 ? '1px solid #EBEBEB' : 'none',
              paddingLeft: i > 0 ? '2rem' : '0',
              paddingRight: i < stats.length - 1 ? '2rem' : '0',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(16px)',
              transitionDelay: `${i * 80}ms`,
            }}>
            <span className="font-black leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#0A0A0A' }}>
              {s.value}
            </span>
            <span className="text-xs uppercase tracking-widest" style={{ color: '#888' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Services Cards ────────────────────────────────────────── */
function ServicesTeaser() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const cards = [
    {
      num: '01',
      title: 'Custom Software & Web Apps',
      desc: 'Scalable, performant web applications tailored to your business logic — from MVPs to enterprise platforms.',
      thumb: {
        bg: 'linear-gradient(135deg, #1a237e 0%, #283593 40%, #1565c0 100%)',
        pattern: `repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)`,
        icon: (
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <rect x="4" y="12" width="44" height="28" rx="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
            <line x1="4" y1="20" x2="48" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
            <circle cx="10" cy="16" r="1.5" fill="rgba(255,255,255,0.5)"/>
            <circle cx="16" cy="16" r="1.5" fill="rgba(255,255,255,0.5)"/>
            <circle cx="22" cy="16" r="1.5" fill="rgba(255,255,255,0.5)"/>
            <rect x="12" y="26" width="12" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
            <rect x="12" y="31" width="20" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
            <rect x="28" y="26" width="12" height="7" rx="2" fill="rgba(59,91,219,0.6)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          </svg>
        ),
      },
    },
    {
      num: '02',
      title: 'Mobile App Development',
      desc: 'Native and cross-platform iOS & Android apps that deliver seamless user experiences and real business value.',
      thumb: {
        bg: 'linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #0288d1 100%)',
        pattern: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
        icon: (
          <svg width="40" height="52" viewBox="0 0 40 52" fill="none">
            <rect x="4" y="2" width="32" height="48" rx="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
            <rect x="8" y="8" width="24" height="34" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
            <rect x="13" y="44" width="14" height="2" rx="1" fill="rgba(255,255,255,0.3)"/>
            <rect x="11" y="14" width="18" height="3" rx="1.5" fill="rgba(255,255,255,0.4)"/>
            <rect x="11" y="20" width="13" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
            <rect x="11" y="26" width="18" height="8" rx="2" fill="rgba(59,91,219,0.5)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          </svg>
        ),
      },
    },
    {
      num: '03',
      title: 'Shopify Development',
      desc: 'Custom Shopify themes, apps, and integrations that turn your store into a high-converting sales machine.',
      thumb: {
        bg: 'linear-gradient(135deg, #1a237e 0%, #311b92 50%, #4527a0 100%)',
        pattern: `repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px)`,
        icon: (
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <circle cx="20" cy="42" r="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
            <circle cx="36" cy="42" r="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
            <path d="M6 8h6l5 22h22l4-14H16" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="20" y="18" width="16" height="10" rx="2" fill="rgba(59,91,219,0.5)" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
            <line x1="22" y1="22" x2="34" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="22" y1="25" x2="30" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
    },
  ]

  return (
    <section className="px-5 lg:px-10 py-20" style={{ background: '#fff', borderTop: '1px solid #EBEBEB' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className="mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-bold mb-3 block" style={{ color: '#3B5BDB' }}>
            What We Build
          </span>
          <h2
            className="font-black uppercase leading-[1] tracking-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#0A0A0A' }}
          >
            End-to-End Digital Products,<br />Built Right
          </h2>
        </div>

        {/* 3-col cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <ServiceCard key={card.num} card={card} index={i} inView={inView} />
          ))}
        </div>

        {/* View all services link */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid #EBEBEB' }}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-[#0A0A0A]"
            style={{ color: '#3B5BDB' }}
          >
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ card, index, inView }) {
  return (
    <div
      className="group relative transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(28px)',
        transitionDelay: `${index * 120}ms`,
      }}
    >
      {/* Thumbnail image area */}
      <div
        className="relative rounded-xl overflow-hidden mb-5"
        style={{ aspectRatio: '4/3', background: card.thumb.bg }}
      >
        {/* Pattern overlay */}
        <div className="absolute inset-0" style={{ background: card.thumb.pattern }} />
        {/* Icon centred */}
        <div className="absolute inset-0 flex items-center justify-center">
          {card.thumb.icon}
        </div>
        {/* Large faded watermark number */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-4 pb-2 pointer-events-none select-none"
          style={{ overflow: 'hidden' }}
        >
          <span
            className="font-black"
            style={{ fontSize: '7rem', color: 'rgba(255,255,255,0.07)', lineHeight: 1 }}
          >
            {`0${index + 1}`}
          </span>
        </div>
      </div>

      {/* Number */}
      <p className="text-xs font-bold mb-2" style={{ color: '#3B5BDB' }}>{card.num}</p>

      {/* Title */}
      <h3
        className="font-black uppercase tracking-tight mb-3 group-hover:text-[#3B5BDB] transition-colors"
        style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)', color: '#0A0A0A', lineHeight: 1.2 }}
      >
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#888' }}>
        {card.desc}
      </p>

      {/* Learn more */}
      <Link
        to="/services"
        className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:gap-2.5"
        style={{ color: '#3B5BDB' }}
      >
        Learn more <ArrowRight size={14} />
      </Link>
    </div>
  )
}


/* ─── Philosophy ────────────────────────────────────────────── */
function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const principles = [
    { num: '01', title: 'Understand the Vision', desc: 'We start by understanding your business, goals, customers, and challenges before recommending the right solution.' },
    { num: '02', title: 'Create With Purpose', desc: 'We combine creative thinking, thoughtful design, and modern technology to deliver meaningful value.' },
    { num: '03', title: 'Build for Growth', desc: 'We develop scalable digital products designed to evolve with your business over time.' },
  ]
  return (
    <section className="px-5 lg:px-10 py-24" style={{ borderTop: '1px solid #EBEBEB' }}>
      <div ref={ref} className="max-w-7xl mx-auto transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#888' }}>Our approach</span>
            <h2 className="font-black mt-4 mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.05, color: '#0A0A0A' }}>
              We don't just build<br />technology. We build<br />what's next.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#666' }}>
              Every business has the potential to do more. At AB INNOVATE, we combine
              strategic thinking, creative design, and engineering expertise to turn
              complex challenges into intelligent digital solutions.
            </p>
            <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors hover:text-[#0A0A0A]" style={{ color: '#888' }}>
              More about us <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex flex-col gap-0">
            {principles.map((p, i) => (
              <div key={p.num} className="flex gap-6 py-7" style={{ borderTop: '1px solid #EBEBEB' }}>
                <span className="font-black text-5xl leading-none flex-shrink-0 select-none" style={{ color: '#F0F0F0', marginTop: '-6px' }}>
                  {p.num}
                </span>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: '#0A0A0A' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePageTitle("AB INNOVATE – Your Technology Partner for What's Next")
  return (
    <main>
      <Hero />
      <StatsStrip />
      <ServicesTeaser />
      <Philosophy />
    </main>
  )
}
