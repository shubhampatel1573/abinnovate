import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'

// Inline social SVGs (lucide-react version installed lacks these)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)
import { CONTACT_INFO, SERVICE_OPTIONS, BUDGET_OPTIONS } from '../data/content'

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
}

function InputField({ label, name, type = 'text', value, onChange, error, placeholder, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-[0.12em]">
        {label}
        {required && <span className="text-[#477BFF] ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3.5 rounded-xl bg-[#0B0D12] border text-white text-sm placeholder-[#A1A1AA55] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#477BFF44] ${
          error ? 'border-red-500/60' : 'border-[#252B38] focus:border-[#477BFF55]'
        }`}
      />
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}

function SelectField({ label, name, value, onChange, options, error, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-[0.12em]">
        {label}
        {required && <span className="text-[#477BFF] ml-1">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3.5 rounded-xl bg-[#0B0D12] border text-sm transition-all duration-200 outline-none focus:ring-2 focus:ring-[#477BFF44] appearance-none cursor-pointer ${
          value ? 'text-white' : 'text-[#A1A1AA55]'
        } ${error ? 'border-red-500/60' : 'border-[#252B38] focus:border-[#477BFF55]'}`}
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#11151E] text-white">
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required'
    if (!form.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!form.service) errs.service = 'Please select a service'
    if (!form.message.trim()) errs.message = 'Tell us a bit about your project'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('loading')
    // Simulate async form submission (replace with actual API/email service call)
    await new Promise((r) => setTimeout(r, 1800))
    setStatus('success')
    setForm(initialForm)
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-36 relative"
      style={{ background: '#0B0D12' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[#252B38]" />

      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(71,123,255,0.07) 0%, transparent 70%)',
        }}
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
            Get in Touch
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — headline + contact info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-black leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
            >
              <span className="text-white">LET'S TALK ABOUT</span>
              <br />
              <span className="text-gradient">WHAT'S POSSIBLE.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#A1A1AA] leading-relaxed text-base lg:text-lg mb-12"
            >
              Tell us about your idea, your business, or the challenge you're looking to solve.
              We'd love to explore how technology can help.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-5"
            >
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(71,123,255,0.12)',
                    border: '1px solid rgba(71,123,255,0.25)',
                  }}
                >
                  <Mail size={18} className="text-[#477BFF]" />
                </div>
                <div>
                  <p className="text-xs text-[#A1A1AA] mb-0.5 uppercase tracking-widest font-medium">Email</p>
                  <p className="text-white font-semibold group-hover:text-[#477BFF] transition-colors">
                    {CONTACT_INFO.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(71,123,255,0.12)',
                    border: '1px solid rgba(71,123,255,0.25)',
                  }}
                >
                  <MapPin size={18} className="text-[#477BFF]" />
                </div>
                <div>
                  <p className="text-xs text-[#A1A1AA] mb-0.5 uppercase tracking-widest font-medium">Location</p>
                  <p className="text-white font-semibold">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 mt-10"
            >
              {[
                { href: CONTACT_INFO.linkedin, Icon: LinkedinIcon, label: 'LinkedIn' },
                { href: CONTACT_INFO.twitter, Icon: TwitterIcon, label: 'Twitter' },
                { href: CONTACT_INFO.instagram, Icon: InstagramIcon, label: 'Instagram' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#252B38] text-[#A1A1AA] hover:text-[#477BFF] hover:border-[#477BFF55] hover:bg-[#477BFF0D] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-8 lg:p-10 rounded-2xl border border-[#252B38] bg-[#11151E]"
          >
            {/* Top shimmer */}
            <div
              className="absolute top-0 left-8 right-8 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(71,123,255,0.5), transparent)',
              }}
            />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-5"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(71,123,255,0.15)', border: '1px solid rgba(71,123,255,0.4)' }}
                  >
                    <CheckCircle size={36} className="text-[#477BFF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-[#A1A1AA] max-w-xs">
                    Thank you for reaching out. We'll get back to you within 24 hours to discuss
                    your project.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm text-[#477BFF] hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <h3 className="text-xl font-bold text-white mb-1">Start Your Project</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="John Smith"
                      required
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <InputField
                    label="Company Name"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    error={errors.company}
                    placeholder="Your Company (optional)"
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <SelectField
                      label="Service Interested In"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      options={SERVICE_OPTIONS}
                      error={errors.service}
                      required
                    />
                    <SelectField
                      label="Estimated Budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      options={BUDGET_OPTIONS}
                      error={errors.budget}
                    />
                  </div>

                  {/* Textarea */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-[0.12em]">
                      Project Description <span className="text-[#477BFF]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements…"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#0B0D12] border text-white text-sm placeholder-[#A1A1AA55] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#477BFF44] resize-none ${
                        errors.message
                          ? 'border-red-500/60'
                          : 'border-[#252B38] focus:border-[#477BFF55]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      background: 'linear-gradient(135deg, #477BFF 0%, #8B5CF6 100%)',
                      boxShadow: '0 0 30px rgba(71,123,255,0.2)',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
