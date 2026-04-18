'use client'

import { motion } from 'framer-motion'
import { Monitor, ShoppingBag, Palette, Camera, TrendingUp, Cpu } from 'lucide-react'
import { services } from '@/data/content'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  ShoppingBag,
  Palette,
  Camera,
  TrendingUp,
  Cpu,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-card/50">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-accent mb-4 block">
            Services
          </span>
          <h2 className="heading-section">
            Complete digital solutions,{' '}
            <span className="text-gradient">one partner</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={cn(
                  'group relative p-8 lg:p-10 rounded-2xl',
                  'bg-background border border-foreground/5',
                  'transition-all duration-500',
                  'hover:border-accent/20 hover:bg-card',
                  'card-hover'
                )}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    {Icon && <Icon className="w-6 h-6 text-accent" />}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
