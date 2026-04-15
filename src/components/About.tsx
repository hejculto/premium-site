'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { about } from '@/data/content'

export function About() {
  return (
    <section id="about" className="section-padding bg-card/50">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={about.image}
                alt="Creative professional portrait"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-mono uppercase tracking-wider text-accent mb-4 block">
              About
            </span>
            <h2 className="heading-section mb-8 whitespace-pre-line">
              {about.headline}
            </h2>
            
            <div className="space-y-6 mb-12">
              {about.body.map((paragraph, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              {about.credentials.map((cred, i) => (
                <div key={i}>
                  <span className="text-3xl font-bold text-accent">{cred.value}</span>
                  <p className="text-sm text-muted-foreground mt-1">{cred.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
