'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface QuoteBlockProps {
  text: string
  author?: string
  bgColor?: string
  textColor?: string
}

export default function QuoteBlock({
  text,
  author,
  bgColor = 'bg-black',
  textColor = 'text-white',
}: QuoteBlockProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`w-full py-24 px-4 ${bgColor}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className={`text-3xl md:text-4xl font-display font-bold leading-tight ${textColor}`}>
          {text}
        </blockquote>
        {author && (
          <p className={`mt-6 text-lg ${textColor} opacity-70`}>
            — {author}
          </p>
        )}
      </div>
    </motion.section>
  )
}
