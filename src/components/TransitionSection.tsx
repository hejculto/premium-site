'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, ShoppingCart, TrendingUp, Cpu, Lightbulb } from 'lucide-react'

const icons = [
  { icon: Globe },
  { icon: ShoppingCart },
  { icon: TrendingUp },
  { icon: Cpu },
  { icon: Lightbulb },
]

export function TransitionSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length)
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
            Sådan hjælper jeg dig med at vækste
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Jeg hjælper dig med at forstå din forretning, opbygge det rigtige digitale fundament og skabe vækst gennem strategi, design, e-handel og AI — og samle det hele i et system, der rent faktisk virker.
          </p>

          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {icons.map((item, index) => {
              const Icon = item.icon
              const isActive = index === activeIndex
              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0.4 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Icon
                    size={34}
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
