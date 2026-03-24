'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTAProps {
  text: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTA({
  text,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: CTAProps) {
  const baseClasses = 'px-8 py-3 font-semibold uppercase tracking-wide transition-all'

  const variantClasses = {
    primary: 'bg-fire text-white hover:bg-opacity-90 active:scale-95',
    secondary: 'border-2 border-sand text-sand hover:bg-sand hover:text-black active:scale-95',
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href={href} className={`inline-block ${buttonClasses}`}>
          {text}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
    >
      {text}
    </motion.button>
  )
}
