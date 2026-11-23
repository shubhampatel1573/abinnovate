import React, { useRef, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useInView } from 'framer-motion'
import { PORTFOLIO_PROJECTS } from '../data/content'

function usePageTitle(title) {
  useEffect(() => { document.title = title }, [title])
}

function PageHeader() {
  return (
    <section className="pt-32 pb-16 px-5 lg:px-10" style={{ borderBottom: '1px solid #111' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: '#555' }}>Our Work</p>
        <div className="grid lg:grid-cols-2 gap-8 items-end">
          <h1 className="font-black leading-tight text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Selected projects.
          </h1>
          <p className="text-base leading-relaxed lg:max-w-md" style={{ color: '#555' }}>
            A sample of the digital products, automation systems, and web experiences
            we've built. Each project starts with a real business problem.
          </p>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <article
      ref={ref}
      className="group transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(28px)', transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <div
        className="relative rounded-xl overflow-hidden mb-6"
        style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)', border: '1px solid #1a1a1a' }}
      >
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#333 1px, transparent 1px)`, backgroundSize: '28px 28px', opacity: 0.12 }} />
        <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, backgroundSize: '56px 56px', opacity: 0.4 }} />
        <div className="absolute top-5 left-5 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded" style={{ background: 'rgba(255,255,255,0.05)', color: '#555', border: '1px solid #2a2a2a' }}>
          {project.category}
        </div>
        <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-widest px-2.5 py-1 rounded" style={{ background: 'rgba(10,10,10,0.7)', color: '#333', border: '1px solid #1e1e1e' }}>
          Sample
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-black select-none" style={{ fontSize: '10rem', color: 'rgba(255,255,255,0.03)', lineHeight: 1 }}>
            {project.name.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(10,10,10,0.5)' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#fff' }}>
            <ArrowUpRight size={20} style={{ color: '#0a0a0a' }} />
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-bold text-xl mb-2 group-hover:text-white transition-colors" style={{ color: '#aaa' }}>
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#444' }}>{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] px-2 py-0.5 rounded" style={{ background: '#111', color: '#333', border: '1px solid #1a1a1a' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Work() {
  usePageTitle('Our Work – AB INNOVATE')
  return (
    <main>
      <PageHeader />
      <section className="px-5 lg:px-10 py-16" style={{ borderBottom: '1px solid #111' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-14">
          {PORTFOLIO_PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </section>
    </main>
  )
}
