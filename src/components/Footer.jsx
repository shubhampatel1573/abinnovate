import React from 'react'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { NAV_LINKS, SERVICES, CONTACT_INFO } from '../data/content'

// Inline social SVGs (lucide-react version installed lacks these)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

function scrollTo(id) {
  if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const Logo = () => (
  <div className="flex items-center gap-3 select-none">
    <div className="relative w-9 h-9 flex-shrink-0">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#477BFF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="10" fill="url(#footerLogoGrad)" />
        <path d="M7 27L12.5 10L18 27M9.2 21H15.8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 10H26.5C28.7 10 30.5 11.8 30.5 14C30.5 16.2 28.7 18 26.5 18H21V10Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 18H27C29.4 18 31 19.8 31 22C31 24.2 29.2 26 26.8 26H21V18Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="flex flex-col leading-tight">
      <span className="font-display font-bold text-base tracking-wider text-white">
        AB <span className="text-gradient">INNOVATE</span>
      </span>
      <span className="text-[9px] tracking-[0.2em] text-[#A1A1AA] uppercase font-medium">
        Technology Partner
      </span>
    </div>
  </div>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative pt-16 pb-8 border-t border-[#252B38]"
      style={{ background: '#0B0D12' }}
    >
      {/* Top shimmer */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(71,123,255,0.4) 30%, rgba(139,92,246,0.4) 70%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#252B38]">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 text-sm text-[#A1A1AA] leading-relaxed max-w-xs">
              Your technology partner for what's next. We help businesses innovate, simplify
              operations, and accelerate growth through intelligent digital solutions.
            </p>
            <p
              className="mt-5 text-xs font-bold tracking-[0.2em] uppercase"
              style={{
                background: 'linear-gradient(90deg, #477BFF, #8B5CF6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BUILDING WHAT'S NEXT.
            </p>

            {/* Social */}
            <div className="flex items-center gap-2.5 mt-6">
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
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#252B38] text-[#A1A1AA] hover:text-[#477BFF] hover:border-[#477BFF55] hover:bg-[#477BFF0D] transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] text-white uppercase mb-5">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href.replace('#', ''))}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] text-white uppercase mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.18em] text-white uppercase mb-5">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-2.5 text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200"
                >
                  <Mail size={15} className="mt-0.5 text-[#477BFF] flex-shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-[#A1A1AA]">
                  <MapPin size={15} className="mt-0.5 text-[#477BFF] flex-shrink-0" />
                  {CONTACT_INFO.location}
                </div>
              </li>
            </ul>

            <button
              onClick={() => scrollTo('contact')}
              className="group flex items-center gap-2 mt-7 text-sm font-semibold text-[#477BFF] hover:text-white transition-colors duration-200"
            >
              Start a Project
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-[#A1A1AA]">
            © {year} AB INNOVATE. All rights reserved.
          </p>
          <p className="text-xs text-[#A1A1AA44] tracking-widest uppercase">
            Ideas Into Innovation. Technology Into Growth.
          </p>
        </div>
      </div>
    </footer>
  )
}
