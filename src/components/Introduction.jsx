import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const principles = [
  {
    number: '01',
    title: 'Understand the Vision',
    description:
      'We begin by understanding your business, goals, customers, and challenges before recommending the right solution.',
  },
  {
    number: '02',
    title: 'Create With Purpose',
    description:
      'We combine creative thinking, thoughtful design, and modern technology to create solutions that deliver meaningful value.',
  },
  {
    number: '03',
    title: 'Build for Growth',
    description:
      'We develop scalable digital products and intelligent solutions designed to evolve with your business.',
  },
]

function PrincipleCard({ number, title, description, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="relative group p-8 rounded-2xl border border-[#252B38] bg-[#11151E] overflow-hidden transition-all duration-500 hover:border-[#477BFF44]"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(71,123,255,0.07) 0%, transparent 65%)',
        }}
      />
      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #477BFF, #8B5CF6)' }}
      />

      <div className="relative z-10">
        <span
          className="block font-black font-display leading-none mb-5 text-gradient opacity-30"
          style={{ fontSize: '4rem' }}
        >
          {number}
        </span>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-[#A1A1AA] leading-relaxed text-sm lg:text-base">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Introduction() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="introduction"
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: '#0B0D12' }}
    >
      {/* Top connector */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(71,123,255,0.4), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-[#477BFF]" />
          <span className="text-xs font-semibold tracking-[0.18em] text-[#477BFF] uppercase">
            Our Philosophy
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black leading-[1.08] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
        >
          <span className="text-white">WE DON'T JUST BUILD TECHNOLOGY.</span>
          <br />
          <span className="text-gradient">WE BUILD WHAT'S NEXT.</span>
        </motion.h2>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mb-16 lg:mb-20"
        >
          Every business has the potential to do more. At AB INNOVATE, we combine strategic
          thinking, creative design, and engineering expertise to turn complex challenges into
          intelligent digital solutions.
        </motion.p>

        {/* Divider */}
        <div className="w-full h-px bg-[#252B38] mb-14" />

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <PrincipleCard key={p.number} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
