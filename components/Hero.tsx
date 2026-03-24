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
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-4 text-white leading-tight">
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
