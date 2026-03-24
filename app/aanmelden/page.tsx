'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Form from '@/components/Form'

export default function SignupPage() {
  return (
    <main className="w-full bg-black min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold text-white hover:text-fire transition-colors">
            OERBAZEN
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            ← Terug
          </Link>
        </div>
      </header>

      {/* Form Section */}
      <section className="py-16 md:py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              Word Oerbaas
            </h1>
            <p className="text-lg text-gray-300">
              Vul het formulier in en we nemen contact met je op.
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-950 border border-gray-800 p-8 md:p-12">
            <Form />
          </div>

          {/* Info section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 text-center text-sm text-gray-400 space-y-2"
          >
            <p>Vragen? Stuur een mail naar <span className="text-fire">info@oerbazen.nl</span></p>
            <p>Of bel ons: <span className="text-fire">+31 6 12345678</span></p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
          <p>OERBAZEN © 2024 | Drie dagen vuur, natuur en eerlijke gesprekken</p>
        </div>
      </footer>
    </main>
  )
}
