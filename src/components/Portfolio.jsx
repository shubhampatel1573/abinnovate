import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { PORTFOLIO_PROJECTS } from '../data/content'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 65 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.11, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-[#252B38] bg-[#0B0D12] overflow-hidden hover:border-[#477BFF44] transition-all duration-500"
    >
      {/* Visual placeholder */}
      <div
        className="relative h-56 flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}16 0%, ${project.color}08 60%, #11151E 100%)`,
          borderBottom: '1px solid #252B38',
        }}
      >
        {/* Dot grid art */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, ${project.color} 1px, transparent 1px)`,
            backgroundSize: '22px 22px',
          }}
        />

        {/* Abstract center icon */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl text-white"
            style={{
              background: `${project.color}28`,
              border: `1px solid ${project.color}50`,
            }}
          >
            {project.name.charAt(0)}
          </div>
          <span className="text-[9px] font-semibold tracking-[0.22em] text-[#A1A1AA] uppercase">
            Sample Project
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

        {/* Arrow button */}
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          style={{ background: project.color }}
        >
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <span
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
          style={{
            background: `${project.color}18`,
            color: project.color,
            border: `1px solid ${project.color}30`,
          }}
        >
          {project.category}
        </span>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {project.name}
        </h3>

        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-[#11151E] text-[#A1A1AA] border border-[#252B38]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/btn"
          style={{ color: project.color }}
        >
          View Project
          <ArrowUpRight
            size={14}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Bottom shimmer */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 pointer-events-none"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />
    </motion.article>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="portfolio"
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
            Our Work
          </span>
        </motion.div>

        {/* Headline + badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-[1.08] tracking-tight max-w-2xl"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            <span className="text-white">TURNING AMBITIOUS IDEAS{' '}</span>
            <span className="text-gradient">INTO REALITY.</span>
          </motion.h2>

          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-1.5 text-xs text-[#A1A1AA] border border-[#252B38] rounded-full px-4 py-2 self-start md:self-end whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A1A1AA]" />
            Sample project showcases — portfolio updated with live projects
          </motion.span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PORTFOLIO_PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#252B38]" />
    </section>
  )
}
