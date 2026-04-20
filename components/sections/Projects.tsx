'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Globe } from 'lucide-react'

const projects = [
  {
    tag: 'LIVE · PRODUKT',
    title: 'AES Kompass — Bildungsberatung',
    description:
      'Vollständiger digitaler Funnel: SEO-optimierte Website, WhatsApp-Automation und Betreuung von 50+ Studierenden. Alle technischen und Marketing-Aufgaben selbst umgesetzt.',
    stack: ['React', 'Vite', 'Netlify', 'Systeme.io', 'n8n', 'Twilio', 'fal.ai', 'Framer'],
    link: 'https://www.aes-kompass.com',
    live: true,
    featured: true,
  },
  {
    tag: 'FUNNEL · LIVE',
    title: 'almanyaegitimseruveni.de',
    description:
      'Dedizierter Conversion-Funnel — vom ersten Klick bis zur qualifizierten Lead-Anfrage. Mobile-first, WhatsApp-CTA, optimiert auf Conversion.',
    stack: ['Funnel Design', 'CRO', 'Mobile-First', 'WhatsApp CTA'],
    link: 'https://www.almanyaegitimseruveni.de',
    live: true,
    featured: false,
  },
  {
    tag: 'AUTOMATION',
    title: 'Persönlicher KI-Assistent (Telegram)',
    description:
      'Selbst gehosteter KI-Assistent auf VPS. 5 tägliche automatische Module. Sicherheitsgehärtet mit SSH, UFW und Telegram-ID-Whitelist.',
    stack: ['Python', 'Gemini API', 'Ubuntu VPS', 'Nginx', 'UFW'],
    link: null,
    live: false,
    featured: false,
  },
  {
    tag: 'KI-AGENT',
    title: 'Autonomer Uni-Recherche-Agent',
    description:
      'Python-basierter KI-Agent für automatische Hochschulrecherche — mit Word/Excel-Output und React-Dashboard.',
    stack: ['Python', 'Claude API', 'Playwright', 'Tavily', 'React'],
    link: null,
    live: false,
    featured: false,
  },
  {
    tag: 'WEBDESIGN',
    title: 'Websites & Digitale Systeme',
    description:
      'Mehrere Websites, E-Commerce-Stores und Marketing-Setups für Kunden — von Konzeption bis Deployment.',
    stack: ['Next.js', 'Framer', 'Canva', 'Tailwind CSS', 'Netlify'],
    link: null,
    live: false,
    featured: false,
  },
]

function LiveBadge() {
  return (
    <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#00E676]">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
      </span>
      LIVE
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none select-none absolute -right-4 top-4 font-display text-[220px] text-[#FF4400] opacity-[0.025] leading-none">
        03
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs tracking-[0.22em] text-[#FF4400] uppercase mb-4"
        >
          03 / Projekte
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl text-[#F2EDE8] mb-12 leading-tight"
        >
          Ausgewählte Arbeiten.
        </motion.h2>

        {/* Bento grid: featured spans 2 cols */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Featured card — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0 }}
            className="md:col-span-2 group border border-[#222222] bg-[#111111] p-7 flex flex-col hover:border-[#FF4400] hover:shadow-[0_0_40px_#FF440012] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#444444] uppercase">
                {projects[0].tag}
              </span>
              <LiveBadge />
            </div>
            <h3 className="font-display text-3xl text-[#F2EDE8] mb-3 leading-tight">
              {projects[0].title}
            </h3>
            <p className="font-mono text-sm text-[#888888] leading-relaxed flex-1 mb-5">
              {projects[0].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {projects[0].stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-[#444444] border border-[#222222] px-2.5 py-0.5 group-hover:border-[#FF440030] transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={projects[0].link!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF4400] hover:underline"
            >
              <Globe size={12} /> aes-kompass.com <ExternalLink size={12} />
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.08 }}
            className="group border border-[#222222] bg-[#111111] p-7 flex flex-col hover:border-[#FF4400] hover:shadow-[0_0_40px_#FF440012] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#444444] uppercase">
                {projects[1].tag}
              </span>
              <LiveBadge />
            </div>
            <h3 className="font-display text-xl text-[#F2EDE8] mb-3 leading-tight flex-1">
              {projects[1].title}
            </h3>
            <p className="font-mono text-sm text-[#888888] leading-relaxed mb-5">
              {projects[1].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {projects[1].stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-[#444444] border border-[#222222] px-2.5 py-0.5 group-hover:border-[#FF440030] transition-colors duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={projects[1].link!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF4400] hover:underline"
            >
              <Globe size={12} /> Zum Funnel <ExternalLink size={12} />
            </a>
          </motion.div>

          {/* Cards 3–5 */}
          {projects.slice(2).map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.16 + i * 0.08 }}
              className="group border border-[#222222] bg-[#111111] p-7 flex flex-col hover:border-[#FF4400] hover:shadow-[0_0_40px_#FF440012] transition-all duration-300"
            >
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#444444] uppercase mb-5 block">
                {project.tag}
              </span>
              <h3 className="font-display text-xl text-[#F2EDE8] mb-3 leading-tight flex-1">
                {project.title}
              </h3>
              <p className="font-mono text-sm text-[#888888] leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-[#444444] border border-[#222222] px-2.5 py-0.5 group-hover:border-[#FF440030] transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
