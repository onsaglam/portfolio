'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Instagram } from 'lucide-react'

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

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

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
          {/* Contact info */}
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

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: 0.35 }}
            className="flex flex-col justify-center"
          >
            <p className="font-mono text-sm text-[#888888] mb-8 leading-relaxed">
              Am schnellsten erreichst du mich direkt über WhatsApp.
              <br />
              Ich antworte in der Regel innerhalb weniger Stunden.
            </p>
            <a
              href="https://wa.me/4915255443643"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white
                font-sans font-semibold text-base hover:bg-[#1ebe5d] active:bg-[#17a850]
                transition-colors duration-200 w-fit"
            >
              <WhatsAppIcon />
              WhatsApp schreiben
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
