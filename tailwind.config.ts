import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        accent: '#FF4400',
      },
    },
  },
  plugins: [],
}

export default config
