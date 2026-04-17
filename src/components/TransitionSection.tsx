'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Globe, ShoppingCart, TrendingUp, Cpu, Lightbulb } from 'lucide-react'

const services = [
  { 
    icon: Globe, 
    title: 'Understand', 
    description: 'I start by understanding your business, your goals, and where the real opportunities are.' 
  },
  { 
    icon: ShoppingCart, 
    title: 'Build', 
    description: 'We design and build the right solution — whether it\'s your brand, website or ecommerce.' 
  },
  { 
    icon: TrendingUp, 
    title: 'Grow', 
    description: 'We optimize and improve performance to help you attract, convert and scale.' 
  },
  { 
    icon: Cpu, 
    title: 'Systems', 
    description: 'I implement tools and AI to automate, simplify and make your business more efficient.' 
  },
  { 
    icon: Lightbulb, 
    title: 'Think long-term', 
    description: 'Everything is built with a clear strategy — not just for today, but for long-term growth.' 
  },
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
            How I help you grow
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-12">
            A simple, practical approach to building and scaling your digital presence — from idea to execution.
          </p>

          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = index === activeIndex
              return (
                <motion.div
                  key={service.title}
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
                    className={`transition-colors duration-500 mb-2 ${
                      isActive ? 'text-[#ff6a3d]' : 'text-black'
                    }`}
                  />
                  <span className={`text-xs font-semibold transition-colors duration-500 ${
                    isActive ? 'text-[#ff6a3d]' : 'text-black'
                  }`}>
                    {service.title}
                  </span>
                  <p className="text-[10px] text-neutral-500 max-w-[100px] mt-1">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
