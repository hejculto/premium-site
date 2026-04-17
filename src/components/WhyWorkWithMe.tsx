'use client'

import { motion } from 'framer-motion'
import { whyWork } from '@/data/content'

export function WhyWorkWithMe() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-mono uppercase tracking-wider text-accent mb-4 block">
              HVORFOR ARBEJDE MED MIG
            </span>
            <h2 className="heading-section mb-6">
              Slip for agency,<br />
              <span className="text-gradient">bevar ekspertisen</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At arbejde med flere agencies betyder koordinering, fejlvisioner og udvandet ansvar. Jeg samler det hele ét sted — kreativ retning, teknisk eksekvering og strategisk tænkning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ingen overleveringer, ingen lad mig spørge teamet, ingen 48-timers emailsvar. Kun direkte adgang til én der forstår dit brand, dine mål og hvordan du når dem.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {whyWork.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="relative p-8 rounded-2xl bg-card border border-foreground/5 hover:border-accent/20 transition-colors group"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-bold text-accent">{item.stat}</span>
                    <span className="text-sm text-muted-foreground ml-1">{item.statLabel}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}