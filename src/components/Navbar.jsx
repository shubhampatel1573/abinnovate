import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

const Logo = () => (
  <a
    href="#home"
    onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
    className="flex items-center gap-3 group select-none"
  >
    <div className="relative w-9 h-9 flex-shrink-0">
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#477BFF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <rect width="36" height="36" rx="10" fill="url(#logoGrad)" />
        <path d="M7 27L12.5 10L18 27M9.2 21H15.8" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 10H26.5C28.7 10 30.5 11.8 30.5 14C30.5 16.2 28.7 18 26.5 18H21V10Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 18H27C29.4 18 31 19.8 31 22C31 24.2 29.2 26 26.8 26H21V18Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="flex flex-col leading-tight">
      <span className="font-display font-bold text-base tracking-wider text-white group-hover:opacity-90 transition-opacity">
        AB <span className="text-gradient">INNOVATE</span>
      </span>
      <span className="text-[9px] tracking-[0.2em] text-[#A1A1AA] uppercase font-medium hidden sm:block">
        Technology Partner
      </span>
    </div>
  </a>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const sectionIds = ['home', 'services', 'about', 'portfolio', 'process', 'contact']
      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const isActive = (href) => activeSection === href.replace('#', '')

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(11,13,18,0.85)] backdrop-blur-xl border-b border-[#252B38] shadow-xl shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <Logo />

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group ${
                    isActive(link.href) ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-px transition-all duration-300 ${
                      isActive(link.href)
                        ? 'w-5 opacity-100'
                        : 'w-0 opacity-0 group-hover:w-5 group-hover:opacity-100'
                    }`}
                    style={{ background: 'linear-gradient(90deg, #477BFF, #8B5CF6)' }}
                  />
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleNavClick('#contact')}
                className="relative px-5 py-2.5 text-sm font-semibold text-white rounded-xl overflow-hidden group transition-transform duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #477BFF 0%, #8B5CF6 100%)' }}
              >
                <span className="relative z-10">Let's Talk</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #5B8DFF 0%, #9B6CF6 100%)' }}
                />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(11,13,18,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col items-start justify-center h-full px-8 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left py-4 text-3xl font-black font-display w-full border-b transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-gradient border-[#477BFF44]'
                      : 'text-[#A1A1AA] hover:text-white border-[#252B38]'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 + 0.1, duration: 0.3 }}
                onClick={() => handleNavClick('#contact')}
                className="mt-8 w-full py-4 text-lg font-bold text-white rounded-2xl"
                style={{ background: 'linear-gradient(135deg, #477BFF 0%, #8B5CF6 100%)' }}
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
