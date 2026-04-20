'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Marketing & Funnels',
    icon: '⬡',
    tags: [
      'Funnel Design',
      'Social Media Strategy',
      'Lead Generation',
      'WhatsApp Marketing',
      'SEO',
      'Canva',
      'CapCut',
      'Ad Copy',
      'Instagram Content',
    ],
  },
  {
    title: 'Web Development',
    icon: '⬡',
    tags: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Framer Motion',
      'HTML/CSS',
      'Framer',
      'Netlify',
      'Git',
      'Claude Code',
    ],
  },
  {
    title: 'AI & Automation',
    icon: '⬡',
    tags: [
      'Claude API',
      'fal.ai',
      'Gemini API',
      'n8n',
      'Python',
      'Playwright',
      'Twilio',
      'Prompt Engineering',
      'VPS / Ubuntu',
    ],
  },
  {
    title: 'Design & Content',
    icon: '⬡',
    tags: ['Canva', 'CapCut', 'AI Image Generation', 'Brand Identity', 'Figma'],
  },
  {
    title: 'Engineering & CAD',
    icon: '⬡',
    tags: ['AutoCAD', 'PVCase', 'LTSpice', 'MATLAB/Simulink', 'LaTeX', 'Hochfrequenztechnik'],
  },
  {
    title: 'Sprachen',
    icon: '⬡',
    tags: ['Türkisch (Muttersprache)', 'Deutsch (C1)', 'Englisch (B2)'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none select-none absolute -right-4 top-4 font-display text-[220px] text-[#FF4400] opacity-[0.025] leading-none">
        05
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs tracking-[0.22em] text-[#FF4400] uppercase mb-4"
        >
          05 / Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl text-[#F2EDE8] mb-16 leading-tight"
        >
          Werkzeugkasten.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: catIndex * 0.07 }}
              className="border border-[#222222] p-6 hover:border-[#FF440040] transition-colors duration-300 group"
            >
              <h3 className="font-display text-xl text-[#F2EDE8] mb-5 tracking-wide">
                <span className="text-[#FF4400] mr-2 opacity-60">{cat.icon}</span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.04 + tagIndex * 0.025 }}
                    className="font-mono text-[11px] text-[#888888] border border-[#222222] px-3 py-1
                      hover:border-[#FF4400] hover:text-[#FF4400] transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
