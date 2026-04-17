'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rotatingWords = ['websites', 'ecommerce', 'growth', 'AI systems', 'strategy']

export function ServicesTransition() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#0f0f0f]">
      <div className="container-premium px-6">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 md:gap-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white">
            Vi bygger
          </h2>
          <div className="h-12 md:h-16 lg:h-20 flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#ff6a3d]"
              >
                {rotatingWords[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
