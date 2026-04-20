import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Impressum — Onat Can Saglam',
}

export default function ImprintPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-2xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-xs text-[#888888] hover:text-[#FF4400] transition-colors duration-200 mb-14"
      >
        <ArrowLeft size={14} /> Zurück zur Startseite
      </Link>

      <h1 className="font-display text-6xl text-[#F2EDE8] mb-12">Impressum</h1>

      <div className="space-y-8 font-mono text-sm text-[#888888] leading-relaxed">
        <div>
          <p className="text-[#F2EDE8] font-semibold mb-3 font-sans">
            Angaben gemäß § 5 TMG
          </p>
          <p>Onat Can Saglam</p>
          <p>Buntentorsteinweg 498</p>
          <p>28201 Bremen</p>
          <p>Deutschland</p>
        </div>

        <div>
          <p className="text-[#F2EDE8] font-semibold mb-3 font-sans">Kontakt</p>
          <p>
            Telefon:{' '}
            <a href="tel:+4915255443643" className="hover:text-[#FF4400] transition-colors">
              (+49) 1525 5443643
            </a>
          </p>
          <p>
            E-Mail:{' '}
            <a
              href="mailto:on.saglam@hotmail.com"
              className="hover:text-[#FF4400] transition-colors"
            >
              on.saglam@hotmail.com
            </a>
          </p>
        </div>

        <div>
          <p className="text-[#F2EDE8] font-semibold mb-3 font-sans">
            Haftungsausschluss
          </p>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann keine Gewähr
            übernommen werden.
          </p>
        </div>

        <div>
          <p className="text-[#F2EDE8] font-semibold mb-3 font-sans">
            Urheberrecht
          </p>
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
            Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
            Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
          </p>
        </div>
      </div>
    </main>
  )
}
