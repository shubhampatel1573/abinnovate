import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2, Globe, Smartphone, Layers, ShoppingBag, Store, Zap, ArrowRight, Check,
} from 'lucide-react'
import { SERVICES } from '../data/content'

const iconMap = { Code2, Globe, Smartphone, Layers, ShoppingBag, Store, Zap }

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function ServiceCard({ service, index, fullWidth }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = iconMap[service.icon] || Code2
  const isAutomation = service.id === '07'

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 55 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${
        fullWidth ? 'md:col-span-2' : ''
      } ${
        isAutomation
          ? 'border-[#477BFF44] bg-[#0D1119]'
          : 'border-[#252B38] bg-[#0D1119] hover:border-[#477BFF33]'
      }`}
    >
      {/* Top shimmer for automation */}
      {isAutomation && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #477BFF 30%, #8B5CF6 70%, transparent 100%)',
          }}
        />
      )}

      {/* Hover glow */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${
          isAutomation ? 'opacity-100' : 'group-hover:opacity-100'
        }`}
        style={{
          background: `radial-gradient(ellipse at top left, ${service.color}09 0%, transparent 65%)`,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <span
            className="font-black font-display leading-none flex-shrink-0 mt-1"
            style={{ fontSize: '3rem', color: `${service.color}35` }}
          >
            {service.id}
          </span>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${service.color}18`,
              border: `1px solid ${service.color}30`,
            }}
          >
            <Icon size={22} style={{ color: service.color }} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#477BFF] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-[#A1A1AA] leading-relaxed text-sm mb-5 flex-1">
          {service.description}
        </p>

        {/* Automation examples */}
        {isAutomation && service.examples && (
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
            {service.examples.map((ex) => (
              <div key={ex} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                <span>{ex}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className="group/cta flex items-center gap-2 text-sm font-semibold w-fit mt-auto transition-all duration-200"
          style={{ color: service.color }}
        >
          Discuss Your Project
          <ArrowRight
            size={15}
            className="group-hover/cta:translate-x-1 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Bottom shimmer on hover */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 pointer-events-none"
        style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
      />
    </motion.article>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const regular = SERVICES.filter((s) => s.id !== '07')
  const automation = SERVICES.find((s) => s.id === '07')

  return (
    <section
      id="services"
      className="py-24 lg:py-36 relative"
      style={{ background: '#11151E' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[#252B38]" />

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
            What We Do
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black leading-[1.08] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          <span className="text-white">TECHNOLOGY THAT{' '}</span>
          <span className="text-gradient">MOVES YOUR BUSINESS FORWARD.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-[#A1A1AA] leading-relaxed max-w-2xl mb-16"
        >
          From building powerful digital products to automating business operations, we bring
          strategy, creativity, and technology together to help businesses work smarter and grow
          faster.
        </motion.p>

        {/* Grid: 2 cols, automation full-width at bottom */}
        <div className="grid md:grid-cols-2 gap-5">
          {regular.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
          {automation && (
            <ServiceCard service={automation} index={6} fullWidth />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#252B38]" />
    </section>
  )
}
