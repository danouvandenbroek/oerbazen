'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = '', id }: SectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
      id={id}
    >
      {children}
    </motion.section>
  )
}
