'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Starfield } from '@/components/ui/starfield-1'

const roles = [
  'Co-Founder & Marketing Manager @ AES',
  'Web Developer & Funnel Strategist',
  '3× Gründer · 4+ Jahre Berufserfahrung',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-16"
    >
      {/* Starfield background */}
      <Starfield
        bgColor="rgba(8,8,8,1)"
        starColor="rgba(242,237,232,0.8)"
        speed={0.6}
        quantity={350}
        mouseAdjust
      />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FF440006] blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#FF440004] blur-[100px]" />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs tracking-[0.22em] text-[#444444] uppercase mb-8"
        >
          Elektrotechnik & IT · Universität Bremen · Bremen, DE
        </motion.p>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 140 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display leading-none"
            style={{ fontSize: 'clamp(72px, 13vw, 156px)' }}
          >
            <span className="block text-[#F2EDE8]">ONAT CAN</span>
            <span className="block text-[#FF4400]">SAGLAM</span>
          </motion.h1>
        </div>

        {/* Animated role */}
        <div className="h-7 mt-6 mb-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="font-mono text-sm text-[#888888]"
            >
              → {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="font-mono text-base text-[#F2EDE8] mb-10 max-w-xl leading-relaxed"
        >
          &ldquo;3× Gründer. Digitaler Allrounder. Bereit für neue Herausforderungen.&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF4400] text-white font-sans font-semibold text-sm hover:bg-[#e03d00] active:bg-[#cc3700] transition-colors duration-200"
          >
            Projekte ansehen <ArrowRight size={16} />
          </a>
          <a
            href="/onat-can-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#444444] text-[#F2EDE8] font-sans font-semibold text-sm hover:border-[#FF4400] hover:text-[#FF4400] transition-colors duration-200"
          >
            CV herunterladen <Download size={16} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-[#333333] tracking-[0.3em] uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#444444] to-transparent"
        />
      </motion.div>
    </section>
  )
}
