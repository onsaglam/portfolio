'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Beratene Studierende' },
  { value: '3', label: 'Gegründete Unternehmen' },
  { value: '4+', label: 'Jahre Werkstudent-Erfahrung' },
  { value: '3', label: 'Sprachen' },
  { value: '6+', label: 'Live-Websites & Funnels' },
  { value: '2019', label: 'Ehrenamt seit' },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Watermark */}
      <div className="pointer-events-none select-none absolute -right-4 top-4 font-display text-[220px] text-[#FF4400] opacity-[0.025] leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs tracking-[0.22em] text-[#FF4400] uppercase mb-4"
        >
          01 / Über mich
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
          >
            <p className="font-mono text-[#F2EDE8] text-base leading-[1.85] mb-6">
              Ich studiere Elektrotechnik und Informationstechnik an der Universität Bremen
              und habe parallel drei Unternehmen gegründet. Heute leite ich als Co-Founder
              die Bildungsberatung AES, die über 50 Studierende auf dem Weg an deutsche
              Hochschulen begleitet.
            </p>
            <p className="font-mono text-[#888888] text-sm leading-[1.85]">
              Meine Stärke liegt in der Verbindung von Technik und Marketing. Auf Türkisch
              habe ich das bereits bewiesen — jetzt bringe ich dieselbe Energie auf den
              deutschen Markt.
            </p>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.05 * i }}
                className="border border-[#222222] p-5 hover:border-[#FF4400] transition-colors duration-300 group"
              >
                <div className="font-display text-4xl text-[#FF4400] leading-none mb-2 group-hover:scale-105 transition-transform duration-200 origin-left">
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] text-[#888888] leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
