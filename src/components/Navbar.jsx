import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Our Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
]

function LogoMark({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="18,2 34,32 2,32" fill="none" stroke="#477BFF" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="18,10 28,28 8,28" fill="#477BFF" opacity="0.3" />
      <line x1="10" y1="24" x2="26" y2="24" stroke="#477BFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(11,13,18,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 select-none">
            <LogoMark size={30} />
            <span className="font-bold text-base tracking-tight text-white">
              AB Innovate
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm transition-colors duration-150 ${
                    isActive ? 'text-white font-medium' : 'text-[#A1A1AA] hover:text-white'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-md transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{ background: '#2D4FD6', color: '#fff' }}
            >
              Start a Project <span aria-hidden>→</span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16" style={{ background: '#0B0D12' }}>
          <nav className="flex flex-col px-6 pt-8 gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === '/'}
                className={({ isActive }) =>
                  `py-4 text-xl font-semibold border-b transition-colors ${
                    isActive
                      ? 'text-white border-[#477BFF]'
                      : 'text-[#A1A1AA] border-[#252B38] hover:text-white'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-6 py-3.5 text-center text-base font-semibold rounded-md"
              style={{ background: '#2D4FD6', color: '#fff' }}
            >
              Start a Project →
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
