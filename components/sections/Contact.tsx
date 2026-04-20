'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Instagram, ArrowRight } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'on.saglam@hotmail.com',
    href: 'mailto:on.saglam@hotmail.com',
  },
  {
    icon: Phone,
    label: '(+49) 1525 5443643',
    href: 'tel:+4915255443643',
  },
  {
    icon: MapPin,
    label: 'Bremen, Deutschland',
    href: null,
  },
  {
    icon: Globe,
    label: 'aes-kompass.com',
    href: 'https://www.aes-kompass.com',
  },
  {
    icon: Instagram,
    label: '@almanyaegitimseruveni',
    href: 'https://www.instagram.com/almanyaegitimseruveni',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="pointer-events-none select-none absolute -right-4 top-4 font-display text-[220px] text-[#FF4400] opacity-[0.025] leading-none">
        06
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="font-mono text-xs tracking-[0.22em] text-[#FF4400] uppercase mb-4"
        >
          06 / Kontakt
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl text-[#F2EDE8] mb-4 leading-tight"
        >
          Lass uns reden.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm text-[#888888] mb-16 max-w-lg leading-relaxed"
        >
          Offen für Werkstudenten-Positionen, Freelance-Projekte
          <br />
          und spannende Teams in Bremen — und remote.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.25 }}
            className="space-y-5"
          >
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <div key={label} className="flex items-center gap-4">
                <Icon size={15} className="text-[#FF4400] flex-shrink-0" />
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-mono text-sm text-[#888888] hover:text-[#F2EDE8] transition-colors duration-200"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="font-mono text-sm text-[#888888]">{label}</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.35 }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Do not fill: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full bg-[#111111] border border-[#222222] text-[#F2EDE8] font-mono text-sm
                    px-4 py-3 focus:outline-none focus:border-[#FF4400] transition-colors duration-200
                    placeholder:text-[#444444]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  required
                  className="w-full bg-[#111111] border border-[#222222] text-[#F2EDE8] font-mono text-sm
                    px-4 py-3 focus:outline-none focus:border-[#FF4400] transition-colors duration-200
                    placeholder:text-[#444444]"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Betreff"
                className="w-full bg-[#111111] border border-[#222222] text-[#F2EDE8] font-mono text-sm
                  px-4 py-3 focus:outline-none focus:border-[#FF4400] transition-colors duration-200
                  placeholder:text-[#444444]"
              />

              <textarea
                name="message"
                placeholder="Nachricht"
                required
                rows={5}
                className="w-full bg-[#111111] border border-[#222222] text-[#F2EDE8] font-mono text-sm
                  px-4 py-3 focus:outline-none focus:border-[#FF4400] transition-colors duration-200
                  placeholder:text-[#444444] resize-none"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF4400] text-white
                  font-sans font-semibold text-sm hover:bg-[#e03d00] active:bg-[#cc3700]
                  transition-colors duration-200 w-full sm:w-auto justify-center sm:justify-start"
              >
                Senden <ArrowRight size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
