import React from 'react'
import { Link } from 'react-router-dom'

function LogoMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M16 2.2L29.2 29.2H2.8L16 2.2Z" fill="#3D6BFF" />
    </svg>
  )
}

const COMPANY_LINKS = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Portfolio', '/work'],
  ['Contact', '/contact'],
]

const SERVICE_LINKS = [
  'Custom Software & Web Apps',
  'Mobile App Development',
  'Shopify Development',
]

const GRID = {
  backgroundImage: `
    linear-gradient(rgba(120, 150, 190, 0.16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120, 150, 190, 0.16) 1px, transparent 1px)
  `,
  backgroundSize: '72px 72px',
}

export default function Footer() {
  return (
    <footer style={{ background: '#070B16' }}>
      {/* Upper CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={GRID} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 42% 90% at 92% 48%, rgba(37, 78, 190, 0.42) 0%, rgba(37, 78, 190, 0.12) 42%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-28 md:pt-28 md:pb-32">
          <h2
            className="font-bold uppercase text-white"
            style={{
              fontSize: 'clamp(1.9rem, 3.35vw, 3rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
            }}
          >
            Ready to Build Something Great?
          </h2>
          <p className="mt-5 mb-9 text-[15px] leading-relaxed" style={{ color: '#A7ADB6' }}>
            Let’s turn your idea into a product your users will love.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2.5 px-5 py-3 text-sm font-semibold rounded-md transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
            style={{ background: '#2F56D4', color: '#fff' }}
          >
            Start a Project
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Footer columns */}
      <div className="relative">
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            ...GRID,
            WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-14">
            <div className="col-span-2 md:col-span-1 md:pr-6">
              <Link to="/" className="inline-flex items-center gap-2.5 mb-5 select-none">
                <LogoMark size={26} />
                <span className="font-bold text-[17px] tracking-tight text-white">AB Innovate</span>
              </Link>
              <p className="text-[13.5px] leading-[1.7]" style={{ color: '#9AA1AB', maxWidth: '230px' }}>
                Turning Ideas into Innovative Digital Solutions. India-based software studio delivering world-class products.
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-6" style={{ color: '#8B93A0' }}>
                Company
              </p>
              <ul className="flex flex-col gap-4">
                {COMPANY_LINKS.map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="text-[14.5px] transition-colors hover:text-white" style={{ color: '#C9CED6' }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-6" style={{ color: '#8B93A0' }}>
                Services
              </p>
              <ul className="flex flex-col gap-4">
                {SERVICE_LINKS.map(s => (
                  <li key={s}>
                    <Link to="/services" className="text-[14.5px] transition-colors hover:text-white" style={{ color: '#C9CED6' }}>
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-6" style={{ color: '#8B93A0' }}>
                Contact
              </p>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="mailto:hello@abinnovate.in" className="text-[14.5px] transition-colors hover:text-white" style={{ color: '#C9CED6' }}>
                    hello@abinnovate.in
                  </a>
                </li>
                <li>
                  <a href="https://abinnovate.in" target="_blank" rel="noopener noreferrer" className="text-[14.5px] transition-colors hover:text-white" style={{ color: '#C9CED6' }}>
                    abinnovate.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-xs" style={{ color: '#7E8694' }}>© 2026 AB Innovate. All rights reserved.</p>
            <p className="text-xs" style={{ color: '#7E8694' }}>Built in India — Delivered Globally</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
