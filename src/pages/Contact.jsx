import React, { useRef, useState, useEffect } from 'react'
import { MapPin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useInView } from 'framer-motion'
import { CONTACT_INFO, SERVICE_OPTIONS, BUDGET_OPTIONS } from '../data/content'

function usePageTitle(title) {
  useEffect(() => { document.title = title }, [title])
}

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const initialForm = { name: '', email: '', company: '', service: '', budget: '', message: '' }

function validate(form) {
  const e = {}
  if (!form.name.trim()) e.name = 'Required'
  if (!form.email.trim()) e.email = 'Required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
  if (!form.service) e.service = 'Please select a service'
  if (!form.message.trim()) e.message = 'Required'
  return e
}

function Field({ label, name, type = 'text', value, onChange, error, placeholder, required }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#444' }}>
        {label}{required && <span style={{ color: '#fff' }}> *</span>}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}
        className="w-full px-4 py-3 text-sm text-white rounded-lg outline-none transition-all duration-150"
        style={{ background: '#0d0d0d', border: error ? '1px solid #ef4444' : '1px solid #1a1a1a' }}
        onFocus={e => { e.target.style.borderColor = '#555' }}
        onBlur={e => { e.target.style.borderColor = error ? '#ef4444' : '#1a1a1a' }}
      />
      {error && <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: '#ef4444' }}><AlertCircle size={11} />{error}</p>}
    </div>
  )
}

function Select({ label, name, value, onChange, options, error, required }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#444' }}>
        {label}{required && <span style={{ color: '#fff' }}> *</span>}
      </label>
      <select
        name={name} value={value} onChange={onChange}
        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all duration-150 cursor-pointer appearance-none"
        style={{ background: '#0d0d0d', border: error ? '1px solid #ef4444' : '1px solid #1a1a1a', color: value ? '#fff' : '#444' }}
        onFocus={e => { e.target.style.borderColor = '#555' }}
        onBlur={e => { e.target.style.borderColor = error ? '#ef4444' : '#1a1a1a' }}
      >
        <option value="" disabled>Select…</option>
        {options.map(o => <option key={o} value={o} style={{ background: '#111' }}>{o}</option>)}
      </select>
      {error && <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: '#ef4444' }}><AlertCircle size={11} />{error}</p>}
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('loading')
    await new Promise(r => setTimeout(r, 1600))
    setStatus('success')
    setForm(initialForm)
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 gap-5">
        <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid #2a2a2a' }}>
          <CheckCircle size={28} style={{ color: '#fff' }} />
        </div>
        <h3 className="text-xl font-bold text-white">Message sent.</h3>
        <p className="text-sm max-w-xs" style={{ color: '#444' }}>
          We will review your message and get back to you within 24 hours.
        </p>
        <button onClick={() => setStatus('idle')} className="text-sm mt-2 hover:text-white transition-colors" style={{ color: '#666' }}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Jane Smith" required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="jane@company.com" required />
      </div>
      <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Company name (optional)" />
      <div className="grid sm:grid-cols-2 gap-5">
        <Select label="Service" name="service" value={form.service} onChange={handleChange} options={SERVICE_OPTIONS} error={errors.service} required />
        <Select label="Budget" name="budget" value={form.budget} onChange={handleChange} options={BUDGET_OPTIONS} />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#444' }}>
          Project Details <span style={{ color: '#fff' }}>*</span>
        </label>
        <textarea
          name="message" value={form.message} onChange={handleChange} rows={5}
          placeholder="Tell us about your project — what you're building, your goals, and timeline…"
          className="w-full px-4 py-3 text-sm text-white rounded-lg outline-none resize-none transition-all duration-150"
          style={{ background: '#0d0d0d', border: errors.message ? '1px solid #ef4444' : '1px solid #1a1a1a' }}
          onFocus={e => { e.target.style.borderColor = '#555' }}
          onBlur={e => { e.target.style.borderColor = errors.message ? '#ef4444' : '#1a1a1a' }}
        />
        {errors.message && <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: '#ef4444' }}><AlertCircle size={11} />{errors.message}</p>}
      </div>
      <button
        type="submit" disabled={status === 'loading'}
        className="flex items-center justify-center gap-2 py-3.5 rounded-lg font-bold text-sm transition-opacity hover:opacity-80 disabled:opacity-50"
        style={{ background: '#fff', color: '#0a0a0a' }}
      >
        {status === 'loading' ? (
          <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/></svg>Sending…</>
        ) : (
          <>Send Message <Send size={15} /></>
        )}
      </button>
    </form>
  )
}

export default function Contact() {
  usePageTitle('Contact – AB INNOVATE')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <main>
      <section className="pt-32 pb-16 px-5 lg:px-10" style={{ borderBottom: '1px solid #111' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest font-semibold mb-5" style={{ color: '#555' }}>Contact</p>
          <h1 className="font-black leading-tight text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Let's talk about<br />what's possible.
          </h1>
          <p className="text-base leading-relaxed max-w-lg" style={{ color: '#555' }}>
            Tell us about your idea, your challenge, or your business. We'll figure out the best way to help.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-10 py-16">
        <div
          ref={ref}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(20px)' }}
        >
          {/* Left */}
          <div>
            <h2 className="text-xl font-bold text-white mb-8">Contact details</h2>
            <div className="flex flex-col gap-6 mb-10">
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#111', border: '1px solid #1a1a1a' }}>
                  <Mail size={16} style={{ color: '#666' }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: '#333' }}>Email</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#ccc] transition-colors">{CONTACT_INFO.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#111', border: '1px solid #1a1a1a' }}>
                  <MapPin size={16} style={{ color: '#666' }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: '#333' }}>Location</p>
                  <p className="text-sm font-semibold text-white">{CONTACT_INFO.location}</p>
                </div>
              </div>
              <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#111', border: '1px solid #1a1a1a', color: '#666' }}>
                  <LinkedinIcon />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: '#333' }}>LinkedIn</p>
                  <p className="text-sm font-semibold text-white group-hover:text-[#ccc] transition-colors">AB INNOVATE</p>
                </div>
              </a>
            </div>

            <div className="rounded-xl p-6" style={{ background: '#0d0d0d', border: '1px solid #1a1a1a' }}>
              <h3 className="text-sm font-bold text-white mb-4">What to expect</h3>
              <ul className="flex flex-col gap-3">
                {[
                  "We will review your message within 24 hours",
                  'A quick intro call to understand your project',
                  'A clear proposal with scope and timeline',
                  'No obligation — just an honest conversation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: '#444' }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#555' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="rounded-xl p-8" style={{ background: '#0d0d0d', border: '1px solid #1a1a1a' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
