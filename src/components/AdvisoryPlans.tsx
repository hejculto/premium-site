'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { advisoryPlans } from '@/data/content'
import { formatCurrency, cn } from '@/lib/utils'

export function AdvisoryPlans() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="advisory" className="section-padding">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-accent mb-4 block">
            Advisory Plans
          </span>
          <h2 className="heading-section">
            Strategic partnership,
            <br />
            <span className="text-gradient">measurable results</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Choose the engagement that fits your needs. Each plan includes direct access, strategic thinking, and a commitment to your success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {advisoryPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'relative rounded-2xl p-8 lg:p-10',
                plan.highlighted
                  ? 'bg-card border-2 border-accent lg:-mt-4 lg:mb-4'
                  : 'bg-card/50 border border-foreground/5'
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-xs font-mono uppercase tracking-wider bg-accent text-background px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    {formatCurrency(plan.price)}
                  </span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={scrollToContact}
                className={cn(
                  'w-full group flex items-center justify-center gap-2 py-4 rounded-xl font-medium transition-all',
                  plan.highlighted
                    ? 'btn-primary'
                    : 'bg-foreground/5 hover:bg-foreground/10 text-foreground'
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          All plans include a free 30-minute discovery call. Custom enterprise solutions available on request.
        </motion.p>
      </div>
    </section>
  )
}
