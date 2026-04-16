'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, ShoppingCart, TrendingUp, Cpu, Lightbulb } from 'lucide-react'

const services = [
  { icon: Globe, label: 'Web Design' },
  { icon: ShoppingCart, label: 'Ecommerce' },
  { icon: TrendingUp, label: 'Ads & Growth' },
  { icon: Cpu, label: 'AI Systems' },
  { icon: Lightbulb, label: 'Strategy' },
]

export function TransitionSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-32 md:py-40 lg:py-48 bg-white">
      <div className="container-premium px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black transition-colors duration-500 hover:text-[#ff6a3d] mb-8 leading-tight">
            A website is not the goal — growth is.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Most businesses invest in websites that look good but fail to perform. I help brands turn their digital presence into a strategic asset — combining design, performance, and AI-driven systems to attract, convert, and scale.
          </p>

          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = index === activeIndex
              return (
                <motion.div
                  key={service.label}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0.4 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Icon
                    size={28}
                    strokeWidth={1.5}
                    className={`transition-colors duration-500 ${
                      isActive ? 'text-[#ff6a3d]' : 'text-black'
                    }`}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
