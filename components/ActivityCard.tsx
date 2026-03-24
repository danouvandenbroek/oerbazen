'use client'

import { motion } from 'framer-motion'

const activityImages: Record<string, string> = {
  'Obstacle Run': 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80',
  'Bijlwerpen': 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?w=600&q=80',
  'Boomstam Dragen': 'https://images.unsplash.com/photo-1517931524326-bdd55a541177?w=600&q=80',
  'Bouwen': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'Precisie': 'https://images.unsplash.com/photo-1568702846914-96b305d2ead1?w=600&q=80',
  'Teamwork': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
}

const activityDescriptions: Record<string, string> = {
  'Obstacle Run': 'Modder, zweet en doorzettingsvermogen. Geen shortcuts.',
  'Bijlwerpen': 'Precisie en kracht. Leer werpen zoals het hoort.',
  'Boomstam Dragen': 'Samen tillen. Alleen red je het niet.',
  'Bouwen': 'Met je handen iets neerzetten dat blijft staan.',
  'Precisie': 'Focus. Adem. Raak.',
  'Teamwork': 'Je team is zo sterk als de zwakste schakel.',
}

interface ActivityCardProps {
  title: string
  index?: number
}

export default function ActivityCard({ title, index = 0 }: ActivityCardProps) {
  const imageUrl = activityImages[title] || ''
  const description = activityDescriptions[title] || ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-fire transition-colors group cursor-pointer"
    >
      {/* Activity image */}
      <div
        className="w-full aspect-[4/3] bg-gray-800 relative overflow-hidden"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all" />
        <div className="absolute top-4 left-4 text-fire/80 font-display text-sm uppercase tracking-widest">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-white uppercase tracking-wide mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  )
}
