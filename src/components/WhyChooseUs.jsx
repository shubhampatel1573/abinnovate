import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Settings2, Cpu, Handshake, ArrowRight } from 'lucide-react'
import { WHY_CHOOSE_US } from '../data/content'

const iconMap = { Target, Settings2, Cpu, Handshake }

function DifferentiatorCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = iconMap[item.icon] || Target

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-7 rounded-2xl border border-[#252B38] bg-[#11151E] overflow-hidden transition-all duration-500 hover:border-[#477BFF44]"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top right, rgba(71,123,255,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Bottom shimmer */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #477BFF, #8B5CF6)' }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center"
            style={{
              background: 'rgba(71,123,255,0.12)',
              border: '1px solid rgba(71,123,255,0.25)',
            }}
          >
            <Icon size={20} className="text-[#477BFF]" />
          </div>
          <span
            className="font-black font-display leading-none text-[#477BFF] opacity-20"
            style={{ fontSize: '3rem' }}
          >
            {item.id}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#477BFF] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why"
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: '#0B0D12' }}
    >
      {/* Background violet glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Headline */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-8 h-px bg-[#477BFF]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#477BFF] uppercase">
                Why AB INNOVATE
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black leading-[1.08] tracking-tight mb-7"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              <span className="text-white">THE RIGHT TECHNOLOGY PARTNER{' '}</span>
              <span className="text-gradient">MAKES ALL THE DIFFERENCE.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#A1A1AA] leading-relaxed text-lg mb-9"
            >
              We're not just a technology vendor — we're a long-term partner invested in your
              business success. Here's what sets us apart.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group flex items-center gap-2 text-sm font-semibold text-[#477BFF] hover:text-white transition-colors duration-200"
            >
              Start a Conversation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </motion.button>
          </div>

          {/* Right — 2×2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CHOOSE_US.map((item, i) => (
              <DifferentiatorCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
