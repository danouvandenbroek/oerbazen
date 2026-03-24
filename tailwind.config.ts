import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0D0D0D',
        sand: '#E5E1D8',
        'sand-dark': '#CFC7B8',
        fire: '#C26A2E',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
      },
    },
  },
  plugins: [],
}

export default config
