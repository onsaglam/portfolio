import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[#222222] py-8 px-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl text-[#FF4400]">OCS</span>
        <p className="font-mono text-xs text-[#444444]">
          © 2026 Onat Can Saglam
        </p>
        <Link
          href="/imprint"
          className="font-mono text-xs text-[#444444] hover:text-[#888888] transition-colors"
        >
          Impressum
        </Link>
      </div>
    </footer>
  )
}
