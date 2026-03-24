'use client'

import React from 'react'

interface DayBlockProps {
  day: number
  title: string
  subtitle: string | React.ReactNode
  bgColor?: string
  textColor?: string
  children?: React.ReactNode
}

export default function DayBlock({
  day,
  title,
  subtitle,
  bgColor = 'bg-black',
  textColor = 'text-white',
  children,
}: DayBlockProps) {
  return (
    <section className={`w-full py-32 px-4 ${bgColor}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className={`text-sm font-semibold uppercase tracking-widest ${textColor} opacity-60 mb-4`}>
            Dag {day}
          </p>
          <h2 className={`text-display-lg font-display font-bold ${textColor} mb-6`}>
            {title}
          </h2>
          <div className={`text-lg md:text-xl leading-relaxed ${textColor} space-y-4`}>
            {typeof subtitle === 'string' ? (
              <p>{subtitle}</p>
            ) : (
              subtitle
            )}
          </div>
        </div>

        {children && (
          <div className="mt-16">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
