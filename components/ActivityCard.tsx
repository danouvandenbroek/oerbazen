'use client'

import { motion } from 'framer-motion'

interface ActivityCardProps {
  title: string
  index?: number
}

export default function ActivityCard({ title, index = 0 }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-fire transition-colors group cursor-pointer"
    >
      {/* Placeholder image */}
      <div className="w-full aspect-square bg-gradient-to-br from-fire/20 to-black flex items-center justify-center group-hover:from-fire/30 transition-all">
        <div className="text-6xl text-fire/40 group-hover:text-fire/60 transition-colors">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide">
          {title}
        </h3>
        {/* Mystery: no descriptions */}
      </div>
    </motion.div>
  )
}
