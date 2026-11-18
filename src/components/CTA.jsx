import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="cta"
      className="relative py-28 lg:py-40 overflow-hidden"
      style={{ background: '#0B0D12' }}
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#252B38]" />

      {/* Background aurora */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-[0.07]"
          style={{
            background:
              'radial-gradient(ellipse, #477BFF 0%, #8B5CF6 50%, transparent 80%)',
          }}
        />
        {/* Animated dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #477BFF 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        {/* Thin grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(71,123,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(71,123,255,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 lg:px-8 text-center">
        {/* Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#252B38] bg-[#11151E70] mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#477BFF] animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.18em] text-[#A1A1AA] uppercase">
            Start Your Journey
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 55 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black leading-[1.05] tracking-tight mb-7"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
        >
          <span className="text-white">YOUR NEXT BIG IDEA</span>
          <br />
          <span className="text-gradient">STARTS HERE.</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="text-[#A1A1AA] text-lg leading-relaxed mb-12 max-w-xl mx-auto"
        >
          Whether you're launching something new, improving your digital presence, or transforming
          your business operations, let's create something meaningful together.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="group flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #477BFF 0%, #8B5CF6 100%)',
              boxShadow: '0 0 50px rgba(71,123,255,0.28)',
            }}
          >
            Start Your Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="group flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white text-lg border border-[#252B38] hover:border-[#477BFF55] hover:bg-[#477BFF0D] transition-all duration-300"
          >
            Talk to Our Team
            <ArrowRight size={20} className="text-[#477BFF] group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-xs tracking-[0.25em] text-[#A1A1AA44] uppercase font-medium"
        >
          AB INNOVATE — Your Technology Partner for What's Next
        </motion.p>
      </div>
    </section>
  )
}
