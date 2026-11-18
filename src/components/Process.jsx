import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'
import { PROCESS_STEPS } from '../data/content'

const iconMap = { Search, PenTool, Code2, Rocket }

function StepCard({ step, index, total }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = iconMap[step.icon] || Search
  const isLast = index === total - 1

  return (
    <div className="relative flex-1 min-w-0 flex flex-col items-center md:items-start">
      {/* Horizontal connector (desktop) — after each step except last */}
      {!isLast && (
        <div
          className="hidden md:block absolute top-10 z-0"
          style={{ left: 'calc(50% + 2.5rem)', right: 0, height: '1px', background: 'linear-gradient(90deg, rgba(71,123,255,0.5), rgba(139,92,246,0.3))' }}
          aria-hidden="true"
        />
      )}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left px-3"
      >
        {/* Icon plate */}
        <div className="relative mb-5">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center relative z-10"
            style={{
              background:
                'linear-gradient(135deg, rgba(71,123,255,0.14) 0%, rgba(139,92,246,0.09) 100%)',
              border: '1px solid rgba(71,123,255,0.3)',
            }}
          >
            <Icon size={28} className="text-[#477BFF]" />
          </div>
          {/* Soft glow */}
          <div
            className="absolute inset-0 rounded-2xl blur-xl opacity-25 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, #477BFF 0%, #8B5CF6 100%)',
            }}
          />
        </div>

        <span className="font-black font-display leading-none mb-3 text-gradient opacity-30" style={{ fontSize: '3rem' }}>
          {step.id}
        </span>
        <h3 className="text-xl font-bold text-white mb-2.5">{step.title}</h3>
        <p className="text-sm text-[#A1A1AA] leading-relaxed max-w-[220px]">{step.description}</p>
      </motion.div>

      {/* Vertical connector (mobile) */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.14 + 0.4 }}
          style={{ transformOrigin: 'top center' }}
          className="md:hidden w-px h-12 my-4"
        >
          <div
            className="w-full h-full"
            style={{
              background:
                'linear-gradient(180deg, rgba(71,123,255,0.5), rgba(139,92,246,0.2))',
            }}
          />
        </motion.div>
      )}
    </div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="process"
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: '#0B0D12' }}
    >
      {/* Subtle central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-3xl opacity-[0.035] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #477BFF 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-[#477BFF]" />
          <span className="text-xs font-semibold tracking-[0.18em] text-[#477BFF] uppercase">
            Our Approach
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black leading-[1.08] tracking-tight mb-20"
          style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.25rem)' }}
        >
          <span className="text-white">THOUGHTFUL STRATEGY. CREATIVE EXECUTION.</span>{' '}
          <span className="text-gradient">MEANINGFUL RESULTS.</span>
        </motion.h2>

        {/* Steps — horizontal on desktop */}
        <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Desktop connector line behind cards */}
          <div
            className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(71,123,255,0.25) 20%, rgba(139,92,246,0.25) 80%, transparent)',
            }}
          />

          {PROCESS_STEPS.map((step, i) => (
            <StepCard key={step.id} step={step} index={i} total={PROCESS_STEPS.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
