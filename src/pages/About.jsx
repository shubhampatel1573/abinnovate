import React, { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

function usePageTitle(title) {
  useEffect(() => { document.title = title }, [title])
}

const values = [
  { num: '01', title: 'Business-First Thinking', desc: 'We understand your objectives and constraints before recommending any technology. The right solution is always specific to your situation.' },
  { num: '02', title: 'Modern Engineering', desc: 'We use current, well-supported technologies — not trendy ones. The result is software that is reliable, maintainable, and built to last.' },
  { num: '03', title: 'Quality at Every Step', desc: 'We hold ourselves to a high standard across design, code, and communication. Good enough is not something we are comfortable with.' },
  { num: '04', title: 'Partnership Beyond Launch', desc: 'We stay involved after delivery. As your business grows and needs evolve, we are the team already familiar with your product.' },
]

const process = [
  { id: '01', title: 'Discover', desc: 'We start by understanding your business, your users, and the actual problem you need to solve.' },
  { id: '02', title: 'Strategize', desc: 'We define the approach, the scope, and what success looks like before writing a single line of code.' },
  { id: '03', title: 'Build', desc: 'We design and develop iteratively, sharing progress regularly so there are no surprises at the end.' },
  { id: '04', title: 'Launch & Grow', desc: 'We deploy, monitor, and continue to improve the product as your business evolves.' },
]

function PageHeader() {
  return (
    <section className="pt-32 pb-16 px-5 lg:px-10" style={{ borderBottom: '1px solid #111' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: '#555' }}>About</p>
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <h1 className="font-black leading-tight text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            A technology partner<br />built for growth.
          </h1>
          <p className="text-base leading-relaxed lg:max-w-md" style={{ color: '#555' }}>
            AB INNOVATE is a digital technology and business automation studio based in Ahmedabad, India.
            We help businesses build better products, automate operations, and compete with confidence in a digital world.
          </p>
        </div>
      </div>
    </section>
  )
}

function StorySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="px-5 lg:px-10 py-24" style={{ borderBottom: '1px solid #111' }}>
      <div ref={ref} className="max-w-7xl mx-auto transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}>
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2">
            <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#555' }}>Who we are</span>
            <h2 className="font-black text-white mt-4" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1.1 }}>
              We build what your<br />business needs to<br />grow — not just what<br />you asked for.
            </h2>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <p className="text-base leading-relaxed" style={{ color: '#555' }}>
              Most technology companies build what they're told. We do something different:
              we ask the right questions first. Before writing a line of code, we spend time
              understanding your business model, your customers, and the specific problem you're trying to solve.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#555' }}>
              That approach has shaped everything about how we work — the questions we ask, the
              solutions we propose, and the technology we choose. We're a small, focused team
              that takes on a limited number of projects at a time, so every client gets our full attention.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#555' }}>
              Based in Ahmedabad, Gujarat, we work with startups, entrepreneurs, and established
              businesses across India and internationally — helping them build products that work
              and businesses that scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="px-5 lg:px-10 py-24" style={{ borderBottom: '1px solid #111' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-14 transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)' }}>
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#555' }}>What we stand for</span>
          <h2 className="font-black text-white mt-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1 }}>
            The right technology partner<br />makes all the difference.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-0">
          {values.map((v, i) => <ValueItem key={v.num} value={v} index={i} />)}
        </div>
      </div>
    </section>
  )
}

function ValueItem({ value, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <div
      ref={ref}
      className="flex gap-6 py-8 transition-all duration-700"
      style={{
        borderTop: '1px solid #111',
        borderRight: index % 2 === 0 ? '1px solid #111' : 'none',
        paddingRight: index % 2 === 0 ? '2.5rem' : '0',
        paddingLeft: index % 2 === 1 ? '2.5rem' : '0',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transitionDelay: `${(index % 2) * 100}ms`,
      }}
    >
      <span className="font-black text-5xl leading-none flex-shrink-0 select-none" style={{ color: '#141414', marginTop: '-4px' }}>
        {value.num}
      </span>
      <div>
        <h3 className="font-bold text-white mb-2.5">{value.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#444' }}>{value.desc}</p>
      </div>
    </div>
  )
}

function ProcessSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section className="px-5 lg:px-10 py-24" style={{ borderBottom: '1px solid #111' }}>
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-14 transition-all duration-700" style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)' }}>
          <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#555' }}>How we work</span>
          <h2 className="font-black text-white mt-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', lineHeight: 1.1 }}>
            Our process.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {process.map((step, i) => <ProcessStep key={step.id} step={step} index={i} />)}
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <div
      ref={ref}
      className="flex flex-col py-8 transition-all duration-700"
      style={{
        borderTop: '1px solid #111',
        borderRight: index < 3 ? '1px solid #111' : 'none',
        paddingRight: index < 3 ? '2rem' : '0',
        paddingLeft: index > 0 ? '2rem' : '0',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <span className="font-black leading-none mb-6 select-none" style={{ fontSize: '5rem', color: '#111', lineHeight: 1 }}>
        {step.id}
      </span>
      <h3 className="font-bold text-white mb-2">{step.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#444' }}>{step.desc}</p>
    </div>
  )
}

export default function About() {
  usePageTitle('About – AB INNOVATE')
  return (
    <main>
      <PageHeader />
      <StorySection />
      <ValuesSection />
      <ProcessSection />
    </main>
  )
}
