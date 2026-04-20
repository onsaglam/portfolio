'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink, X, Menu } from 'lucide-react'

const navItems = [
  { label: 'Über', href: '#about' },
  { label: 'Projekte', href: '#projects' },
  { label: 'Erfahrung', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = ['hero', 'about', 'companies', 'projects', 'experience', 'skills', 'contact']

    const handleScroll = () => {
      setScrolled(window.scrollY > 60)

      let current = 'hero'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-[#080808]/80 border-b border-[#222222]'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-2xl text-[#FF4400] tracking-wider hover:opacity-80 transition-opacity"
          >
            OCS
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={href}
                  href={href}
                  className={`font-sans text-sm relative pb-1 transition-colors duration-200 ${
                    isActive ? 'text-[#F2EDE8]' : 'text-[#888888] hover:text-[#F2EDE8]'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF4400] rounded-full" />
                  )}
                </a>
              )
            })}
            <a
              href="/onat-can-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-sans text-sm px-4 py-1.5 border border-[#FF4400] text-[#FF4400] hover:bg-[#FF440015] transition-colors duration-200"
            >
              CV <ExternalLink size={13} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#F2EDE8]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Navigation öffnen"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#080808]/97 backdrop-blur-lg flex flex-col items-center justify-center gap-10">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-display text-5xl text-[#F2EDE8] hover:text-[#FF4400] transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="/onat-can-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-base px-6 py-3 border border-[#FF4400] text-[#FF4400] hover:bg-[#FF440015] transition-colors mt-4"
            onClick={() => setMobileOpen(false)}
          >
            CV herunterladen <ExternalLink size={16} />
          </a>
        </div>
      )}
    </>
  )
}
