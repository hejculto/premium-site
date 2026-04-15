'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { finalCta } from '@/data/content'

export function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToWork = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-display mb-8 whitespace-pre-line">
            {finalCta.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            {finalCta.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={scrollToContact}
              className="btn-primary group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {finalCta.primaryCta.label}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              onClick={scrollToWork}
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {finalCta.secondaryCta.label}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
