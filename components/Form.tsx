'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  naam: string
  email: string
  telefoon: string
  leeftijd: string
  waarom_wil_je: string
  wat_speelt_er: string
  neem_je_iemand_mee: string
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    email: '',
    telefoon: '',
    leeftijd: '',
    waarom_wil_je: '',
    wat_speelt_er: '',
    neem_je_iemand_mee: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Using Formspree
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
      if (!formspreeId) {
        throw new Error('Formspree ID not configured')
      }

      const response = await fetch(`https://formspree.io/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          naam: '',
          email: '',
          telefoon: '',
          leeftijd: '',
          waarom_wil_je: '',
          wat_speelt_er: '',
          neem_je_iemand_mee: '',
        })
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      setError('Er is iets misgegaan. Probeer het later opnieuw.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Naam */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-white">
          Naam *
        </label>
        <input
          type="text"
          name="naam"
          value={formData.naam}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-fire focus:outline-none transition-colors"
          placeholder="Jouw naam"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-white">
          E-mailadres *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-fire focus:outline-none transition-colors"
          placeholder="jouw@email.nl"
        />
      </div>

      {/* Telefoon */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-white">
          Telefoonnummer *
        </label>
        <input
          type="tel"
          name="telefoon"
          value={formData.telefoon}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-fire focus:outline-none transition-colors"
          placeholder="+31 6 12345678"
        />
      </div>

      {/* Leeftijd */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-white">
          Leeftijd *
        </label>
        <input
          type="number"
          name="leeftijd"
          value={formData.leeftijd}
          onChange={handleChange}
          required
          min="18"
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-fire focus:outline-none transition-colors"
          placeholder="30"
        />
      </div>

      {/* Waarom wil je? */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-white">
          Waarom wil je naar OERBAZEN? *
        </label>
        <textarea
          name="waarom_wil_je"
          value={formData.waarom_wil_je}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-fire focus:outline-none transition-colors resize-none"
          placeholder="Vertel ons wat je aantrokk tot dit weekend..."
        />
      </div>

      {/* Wat speelt er */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-white">
          Wat speelt er momenteel in je leven? *
        </label>
        <textarea
          name="wat_speelt_er"
          value={formData.wat_speelt_er}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-fire focus:outline-none transition-colors resize-none"
          placeholder="Waar ben je mee bezig? Wat bezigt je?"
        />
      </div>

      {/* Neem je iemand mee */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-white">
          Neem je iemand mee? (optioneel)
        </label>
        <input
          type="text"
          name="neem_je_iemand_mee"
          value={formData.neem_je_iemand_mee}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-fire focus:outline-none transition-colors"
          placeholder="Naam van je buddy"
        />
      </div>

      {/* Error message */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-4 bg-red-900/20 border border-red-700 text-red-200 text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Success message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="p-4 bg-fire/20 border border-fire text-fire text-sm font-semibold"
        >
          ✓ Bedankt! We nemen contact met je op.
        </motion.div>
      )}

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-4 px-6 bg-fire text-white font-semibold uppercase tracking-wide hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        {isSubmitting ? 'Verzenden...' : 'Word Oerbaas'}
      </motion.button>

      <p className="text-xs text-gray-400 text-center">
        * Verplichte velden
      </p>
    </motion.form>
  )
}
