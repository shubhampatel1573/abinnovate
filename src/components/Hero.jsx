import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Radial glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(71,123,255,0.09) 0%, transparent 70%)',
        }}
      />
      {/* Right violet glow */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px]"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, #477BFF 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Horizontal lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(transparent 0%, transparent calc(100% - 1px), #477BFF calc(100% - 1px))',
          backgroundSize: '100% 72px',
        }}
      />
    </div>
  )
}

function FloatingCard({ label, icon, style, delay }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white"
      style={{
        background: 'rgba(17,21,30,0.8)',
        border: '1px solid rgba(37,43,56,0.9)',
        backdropFilter: 'blur(12px)',
        ...style,
      }}
    >
      <span className="text-base">{icon}</span>
      <span className="text-[#A1A1AA]">{label}</span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#477BFF] animate-pulse flex-shrink-0" />
    </motion.div>
  )
}

function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[480px] flex items-center justify-center select-none">
      {/* Outer ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[380px] h-[380px] rounded-full"
        style={{ border: '1px solid rgba(71,123,255,0.12)' }}
      />
      {/* Outer ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[280px] h-[280px] rounded-full"
        style={{ border: '1px dashed rgba(139,92,246,0.18)' }}
      />
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[180px] h-[180px] rounded-full"
        style={{ border: '1px solid rgba(71,123,255,0.25)' }}
      />

      {/* Glow orb */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-52 h-52 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(71,123,255,0.22) 0%, rgba(139,92,246,0.12) 50%, transparent 70%)',
        }}
      />

      {/* Center logo plate */}
      <div
        className="relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(71,123,255,0.18) 0%, rgba(139,92,246,0.14) 100%)',
          border: '1px solid rgba(71,123,255,0.35)',
          boxShadow: '0 0 60px rgba(71,123,255,0.18)',
        }}
      >
        <svg viewBox="0 0 36 36" fill="none" className="w-14 h-14">
          <defs>
            <linearGradient id="heroLogoG" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#477BFF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          <path d="M7 27L12.5 10L18 27M9.2 21H15.8" stroke="url(#heroLogoG)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 10H26.5C28.7 10 30.5 11.8 30.5 14C30.5 16.2 28.7 18 26.5 18H21V10Z" stroke="url(#heroLogoG)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 18H27C29.4 18 31 19.8 31 22C31 24.2 29.2 26 26.8 26H21V18Z" stroke="url(#heroLogoG)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div
          key={deg}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: i * -4 }}
          className="absolute w-[380px] h-[380px]"
          style={{ transformOrigin: 'center' }}
        >
          <div
            className="absolute w-2.5 h-2.5 rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `rotate(${deg}deg) translateY(-190px)`,
              background: i % 2 === 0 ? '#477BFF' : '#8B5CF6',
              opacity: 0.65,
              boxShadow: `0 0 10px ${i % 2 === 0 ? '#477BFF' : '#8B5CF6'}80`,
            }}
          />
        </motion.div>
      ))}

      {/* Floating service chips */}
      <FloatingCard label="Software Dev" icon="⚡" style={{ top: '8%', left: '0%' }} delay={0} />
      <FloatingCard label="Automation" icon="🤖" style={{ bottom: '15%', left: '-2%' }} delay={0.8} />
      <FloatingCard label="UI/UX Design" icon="✦" style={{ top: '12%', right: '0%' }} delay={1.4} />
      <FloatingCard label="Mobile Apps" icon="📱" style={{ bottom: '18%', right: '-2%' }} delay={2} />
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const handleScroll = (id) => {
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
  }
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <GridBackground />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-24 lg:py-28">
          {/* Left — Content */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Availability badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8 border border-[#252B38] bg-[#11151E80]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs font-semibold tracking-[0.14em] text-[#A1A1AA] uppercase">
                Available for New Projects
              </span>
            </motion.div>

            {/* Main headline */}
            <div className="mb-7">
              <motion.div variants={item}>
                <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-display font-black leading-[1.0] tracking-tight text-white">
                  YOUR VISION.
                </span>
              </motion.div>
              <motion.div variants={item}>
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-display font-black leading-[1.0] tracking-tight text-gradient"
                >
                  OUR INNOVATION.
                </span>
              </motion.div>
              <motion.div variants={item}>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[1.05] tracking-tight text-white mt-1">
                  LIMITLESS
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-black leading-[1.05] tracking-tight text-white">
                  POSSIBILITIES.
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p variants={item} className="text-[#A1A1AA] text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              We partner with ambitious businesses to transform ideas into powerful digital products, create meaningful experiences, and unlock new opportunities through technology.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll('contact')}
                className="group flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #477BFF 0%, #8B5CF6 100%)',
                  boxShadow: '0 0 40px rgba(71,123,255,0.25)',
                }}
              >
                Let's Build Something
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => handleScroll('services')}
                className="group flex items-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-white border border-[#252B38] hover:border-[#477BFF55] hover:bg-[#477BFF0D] transition-all duration-300"
              >
                Explore Our Expertise
                <ArrowRight size={18} className="text-[#477BFF] group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={item} className="mt-10 text-xs tracking-[0.2em] text-[#A1A1AA55] uppercase font-medium">
              Ideas Into Innovation. Technology Into Growth.
            </motion.p>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.25em] text-[#A1A1AA66] uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, #477BFF, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
