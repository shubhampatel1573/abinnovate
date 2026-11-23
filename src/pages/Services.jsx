import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plus, Minus } from 'lucide-react'
import { useInView } from 'framer-motion'
import { SERVICES } from '../data/content'

function usePageTitle(title) {
  useEffect(() => { document.title = title }, [title])
}

function PageHeader() {
  return (
    <section className="pt-32 pb-16 px-5 lg:px-10" style={{ borderBottom: '1px solid #111' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: '#555' }}>Services</p>
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <h1 className="font-black leading-tight text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            What we build,<br />design & automate.
          </h1>
          <p className="text-base leading-relaxed lg:max-w-md" style={{ color: '#555' }}>
            From custom software to business automation — we bring strategy, engineering, and
            design together to help businesses move faster and work smarter.
          </p>
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ service, index }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div
      ref={ref}
      className="transition-all duration-500"
      style={{
        borderBottom: '1px solid #111',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <div className="flex items-center gap-6 md:gap-10 flex-1 min-w-0">
          <span className="text-xs font-mono flex-shrink-0 w-6 tabular-nums" style={{ color: '#2a2a2a' }}>
            {service.id}
          </span>
          <h3
            className="text-xl md:text-2xl font-bold transition-colors duration-200"
            style={{ color: open ? '#fff' : '#777' }}
          >
            {service.title}
          </h3>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-200"
          style={{
            background: open ? '#fff' : 'transparent',
            border: open ? 'none' : '1px solid #2a2a2a',
          }}
        >
          {open
            ? <Minus size={14} style={{ color: '#0a0a0a' }} />
            : <Plus size={14} style={{ color: '#555' }} />
          }
        </div>
      </button>

      <div className="overflow-hidden transition-all duration-400" style={{ maxHeight: open ? '600px' : '0' }}>
        <div className="pb-8 pl-12 md:pl-16 pr-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#555' }}>
                {service.description}
              </p>
              {service.examples && (
                <ul className="flex flex-col gap-2 mb-6">
                  {service.examples.map(ex => (
                    <li key={ex} className="flex items-start gap-2 text-sm" style={{ color: '#444' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#555' }} />
                      {ex}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-col justify-between">
              <div
                className="rounded-xl p-6 h-32 flex items-end"
                style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)', border: '1px solid #1e1e1e' }}
              >
                <span className="font-black select-none" style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.04)', lineHeight: 1 }}>
                  {service.id}
                </span>
              </div>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-white"
                style={{ color: '#888' }}
              >
                Discuss this service <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  usePageTitle('Services – AB INNOVATE')
  return (
    <main>
      <PageHeader />
      <section className="px-5 lg:px-10" style={{ borderBottom: '1px solid #111' }}>
        <div className="max-w-7xl mx-auto">
          {SERVICES.map((s, i) => <ServiceItem key={s.id} service={s} index={i} />)}
        </div>
      </section>
    </main>
  )
}
