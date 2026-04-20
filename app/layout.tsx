import type { Metadata } from 'next'
import { Bebas_Neue, DM_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Onat Can Saglam — Portfolio',
  description:
    '3× Gründer. Digitaler Allrounder. ET&IT Student an der Universität Bremen. Co-Founder @ AES Eğitim.',
  openGraph: {
    title: 'Onat Can Saglam — Portfolio',
    description:
      '3× Gründer. Digitaler Allrounder. ET&IT Student an der Universität Bremen.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${bebasNeue.variable} ${dmMono.variable} ${plusJakarta.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
