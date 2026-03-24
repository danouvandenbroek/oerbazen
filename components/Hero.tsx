'use client'

import { motion } from 'framer-motion'

interface HeroProps {
  subtitle?: string
  children?: React.ReactNode
  cta?: {
    text: string
    onClick: () => void
  }
}

export default function Hero({ subtitle, children, cta }: HeroProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Video background with overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/80"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23260d00" width="1200" height="800"/><circle cx="600" cy="400" r="150" fill="%23c26a2e" opacity="0.1"/></svg>')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-6xl md:text-7xl font-display font-bold mb-4 text-white leading-tight">
          OERBAZEN
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl font-display text-fire mb-8">
            {subtitle}
          </p>
        )}

        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-200">
          <p>Geen yoga matten.</p>
          <p>Geen groene sapjes.</p>
          <p>Drie dagen vuur, natuur</p>
          <p>en eerlijke gesprekken.</p>
        </div>

        {cta && (
          <motion.button
            onClick={cta.onClick}
            className="mt-12 px-8 py-3 bg-fire text-white font-semibold uppercase tracking-wide hover:bg-opacity-90 active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cta.text}
          </motion.button>
        )}

        {children}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-fire rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-fire rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}
