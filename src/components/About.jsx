import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, TrendingUp, Shield, Eye } from 'lucide-react'

const values = [
  {
    icon: Sparkles,
    title: 'Innovation with Purpose',
    description: 'Technology that creates real, meaningful impact for businesses and their customers.',
  },
  {
    icon: TrendingUp,
    title: 'Business-Oriented Solutions',
    description: 'Every solution rooted in business strategy, not just technical output.',
  },
  {
    icon: Shield,
    title: 'Quality-Driven Execution',
    description: 'Uncompromising standards in design, development, and delivery at every step.',
  },
  {
    icon: Eye,
    title: 'Long-Term Vision',
    description: 'Building partnerships and solutions designed to last, evolve, and scale.',
  },
]

function AbstractTechVisual() {
  return (
    <div className="relative w-full h-80 lg:h-full min-h-[420px] flex items-center justify-center overflow-hidden select-none">
      {/* Concentric rings */}
      {[360, 270, 180].map((size, i) => (
        <motion.div
          key={size}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 22 + i * 6, repeat: Infinity, ease: 'linear' }}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            border: `1px solid rgba(${
              i === 0 ? '71,123,255' : i === 1 ? '139,92,246' : '71,123,255'
            },${0.1 + i * 0.07})`,
          }}
        />
      ))}

      {/* Center plate */}
      <motion.div
        animate={{ scale: [1, 1.07, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-32 h-32 rounded-3xl flex items-center justify-center z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(71,123,255,0.18) 0%, rgba(139,92,246,0.14) 100%)',
          border: '1px solid rgba(71,123,255,0.35)',
          boxShadow: '0 0 60px rgba(71,123,255,0.14)',
        }}
      >
        <span className="font-black font-display text-4xl text-gradient">AB</span>
      </motion.div>

      {/* Orbiting nodes */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <motion.div
          key={deg}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: i * -3 }}
          className="absolute"
          style={{ width: 270, height: 270, transformOrigin: 'center' }}
        >
          <div
            className="absolute w-3 h-3 rounded-full"
            style={{
              top: '0',
              left: '50%',
              transform: `translateX(-50%) translateY(-135px) rotate(${deg}deg)`,
              background: i % 2 === 0 ? '#477BFF' : '#8B5CF6',
              opacity: 0.65,
              boxShadow: `0 0 10px ${i % 2 === 0 ? '#477BFF' : '#8B5CF6'}80`,
            }}
          />
        </motion.div>
      ))}

      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #477BFF 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: '#11151E' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[#252B38]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Content */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3 mb-10"
            >
              <span className="w-8 h-px bg-[#477BFF]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#477BFF] uppercase">
                About Us
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}
            >
              <span className="text-white">WE BELIEVE TECHNOLOGY SHOULD{' '}</span>
              <span className="text-gradient">CREATE OPPORTUNITIES.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#A1A1AA] leading-relaxed text-base lg:text-lg mb-10"
            >
              AB INNOVATE is a digital technology partner focused on helping businesses turn ideas
              into impactful digital solutions. We bring together strategy, creativity, and modern
              engineering to create products and experiences that solve real problems and open new
              possibilities.
            </motion.p>

            {/* Values */}
            <div className="grid gap-4">
              {values.map((val, i) => {
                const Icon = val.icon
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl border border-[#252B38] bg-[#0B0D12] hover:border-[#477BFF44] transition-all duration-300 group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(71,123,255,0.12)',
                        border: '1px solid rgba(71,123,255,0.25)',
                      }}
                    >
                      <Icon size={18} className="text-[#477BFF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 group-hover:text-[#477BFF] transition-colors text-sm">
                        {val.title}
                      </h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">{val.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <AbstractTechVisual />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#252B38]" />
    </section>
  )
}
