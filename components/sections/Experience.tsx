'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    period: 'Okt 2024 – heute',
    company: 'Dormero Hotel Bremen',
    role: 'Rezeptionist',
    description: 'Direkter Kundenkontakt auf Deutsch.',
    badge: null,
    featured: false,
  },
  {
    period: 'seit 2023',
    company: 'AES Eğitim ve Danışmanlık',
    role: 'Co-Founder & Marketing/Sales Manager',
    description:
      'Aufbau und Betrieb einer aktiven Bildungsberatung. WhatsApp-Automation, SEO, Content, Sales.',
    badge: null,
    featured: true,
  },
  {
    period: 'Okt 2023 – Jun 2024',
    company: 'Kieback & Peter GmbH & Co. KG',
    role: 'Werkstudent — Projektmanagement Gebäudeautomation',
    description: 'Gebäudeautomation. Dokumentation. Regelschemen.',
    badge: 'Zeugnis vorhanden',
    featured: false,
  },
  {
    period: 'Jan – Aug 2023',
    company: 'Aslamaci GmbH',
    role: 'Werkstudent — Solar & Wind Engineering',
    description: 'Single-Line-Diagramme, AutoCAD, PVCase.',
    badge: null,
    featured: false,
  },
  {
    period: 'Jul 2022 – Jan 2023',
    company: 'Sega Solar & Elmin Energie GmbH',
    role: 'Werkstudent — Electrical Engineering',
    description: '2D-Zeichnungen, elektrische Komponenten.',
    badge: null,
    featured: false,
  },
  {
    period: 'Jan – Jun 2022',
    company: 'alerno GmbH',
    role: 'Nachhilfelehrer Mathematik',
    description: 'Mathematikförderung für Schüler.',
    badge: null,
    featured: false,
  },
  {
    period: 'Nov 2020 – Dez 2021',
    company: 'Deutsche Post & DHL',
    role: 'Lagermitarbeiter',
    description: 'Zuverlässige Lagerarbeit während des Studiums.',
    badge: null,
    featured: false,
  },
  {
    period: 'seit Aug 2019',
    company: 'Bahnhofsmission Bremen',
    role: 'Ehrenamtlicher Mitarbeiter',
    description: 'Langfristiges soziales Engagement.',
    badge: 'Bescheinigung vorhanden',
    featured: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none select-none absolute -right-4 top-4 font-display text-[220px] text-[#FF4400] opacity-[0.025] leading-none">
        04
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs tracking-[0.22em] text-[#FF4400] uppercase mb-4"
        >
          04 / Erfahrung
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl text-[#F2EDE8] mb-16 leading-tight"
        >
          Werdegang.
        </motion.h2>

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[#FF4400] via-[#FF440050] to-transparent" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="relative pl-9 pb-10 group"
              >
                {/* Dot */}
                <div
                  className={`absolute left-[-4.5px] top-[5px] w-[9px] h-[9px] rounded-full border transition-colors duration-300 ${
                    exp.featured
                      ? 'bg-[#FF4400] border-[#FF4400] shadow-[0_0_8px_#FF440060]'
                      : 'bg-[#080808] border-[#444444] group-hover:border-[#FF4400]'
                  }`}
                />

                {/* Period */}
                <p className="font-mono text-[11px] text-[#444444] mb-1 tracking-wide">
                  {exp.period}
                </p>

                {/* Company */}
                <h3
                  className={`font-sans font-semibold text-base mb-0.5 ${
                    exp.featured ? 'text-[#FF4400]' : 'text-[#F2EDE8]'
                  }`}
                >
                  {exp.company}
                </h3>

                {/* Role */}
                <p className="font-mono text-sm text-[#888888] mb-1.5">{exp.role}</p>

                {/* Description */}
                <p className="font-mono text-xs text-[#444444] leading-relaxed">
                  {exp.description}
                </p>

                {/* Badge */}
                {exp.badge && (
                  <span className="inline-block mt-2 font-mono text-[11px] text-[#888888] border border-[#222222] px-2.5 py-0.5">
                    ✓ {exp.badge}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
