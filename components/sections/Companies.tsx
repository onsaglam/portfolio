'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const companies = [
  {
    year: '2023',
    tag: 'GRÜNDUNG #1',
    title: 'E-Commerce Startup',
    description:
      'Erster unternehmerischer Versuch mit Mitgründer. Ein Jahr Marktlernen — dann ein ehrlicher Neustart.',
    link: null,
    active: false,
  },
  {
    year: '2023–24',
    tag: 'GRÜNDUNG #2',
    title: 'Digital Marketing Freelance',
    description:
      'Solo-Agentur: Websites, Funnels, Social Media. Technisches Marketing-Fundament aufgebaut.',
    link: null,
    active: false,
  },
  {
    year: '2023 →',
    tag: 'GRÜNDUNG #3 · AKTIV',
    title: 'AES Eğitim ve Danışmanlık',
    description:
      'Co-Founder & Marketing/Sales Manager. 50+ Studierende. 3 Live-Domains. 1.5+ Jahre aktiv.',
    link: 'https://www.aes-kompass.com',
    active: true,
  },
]

export default function Companies() {
  return (
    <section id="companies" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none select-none absolute -right-4 top-4 font-display text-[220px] text-[#FF4400] opacity-[0.025] leading-none">
        02
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs tracking-[0.22em] text-[#FF4400] uppercase mb-4"
        >
          02 / Unternehmergeist
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl text-[#F2EDE8] mb-16 leading-tight"
        >
          Drei Unternehmen.<br className="hidden sm:block" /> Eine Lernkurve.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12 }}
              className={`relative border p-8 flex flex-col transition-all duration-300 group ${
                company.active
                  ? 'border-[#FF4400] bg-[#FF440008]'
                  : 'border-[#222222] hover:border-[#FF440060]'
              }`}
            >
              {/* Year watermark */}
              <div className="font-display text-7xl text-[#1a1a1a] group-hover:text-[#222222] transition-colors duration-300 leading-none mb-6 select-none">
                {company.year}
              </div>

              {/* Tag */}
              <div
                className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase mb-3 ${
                  company.active ? 'text-[#FF4400]' : 'text-[#444444]'
                }`}
              >
                {company.active && (
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
                  </span>
                )}
                {company.tag}
              </div>

              <h3 className="font-display text-2xl text-[#F2EDE8] mb-4 leading-tight">
                {company.title}
              </h3>

              <p className="font-mono text-sm text-[#888888] leading-relaxed flex-1 mb-6">
                {company.description}
              </p>

              {company.link && (
                <a
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF4400] hover:underline mt-auto"
                >
                  aes-kompass.com <ExternalLink size={11} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
