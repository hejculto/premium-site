'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { advisoryPlans } from '@/data/content'
import { formatCurrency, cn } from '@/lib/utils'

const strategicAnalysis = {
  id: 'analysis',
  name: '0 DKK — Strategic Analysis',
  description: 'Get a clear, expert breakdown of your current setup and where you\'re losing opportunities.',
  features: [
    'Website & conversion analysis',
    'Strategy & positioning review',
    'Advertising performance insights',
    'AI opportunities & automation gaps',
  ],
  cta: 'Request Analysis',
}

export function AdvisoryPlans() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="advisory" className="py-24 md:py-32 bg-card/50">
      <div className="container-premium px-6">
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

        {/* All plans in one grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 0 DKK Strategic Analysis - First card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f0f0f] rounded-2xl p-6 border border-[#ff6a3d]/30 flex flex-col"
          >
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff6a3d] mb-2 block">
              First Step
            </span>
            <h3 className="text-lg font-semibold text-white mb-2">
              Strategic Analysis
            </h3>
            <p className="text-neutral-500 text-sm mb-4 flex-grow">
              Get a clear breakdown of your current setup and where you&apos;re losing opportunities.
            </p>
            <ul className="space-y-2 mb-6">
              {strategicAnalysis.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#ff6a3d] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-neutral-400">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <div className="text-3xl font-bold text-[#ff6a3d] mb-1">0 DKK</div>
              <p className="text-xs text-neutral-500 mb-4">One-time</p>
              <motion.button
                onClick={scrollToContact}
                className="w-full px-5 py-3 bg-[#ff6a3d] text-white font-medium rounded-xl hover:bg-[#ff6a3d]/90 transition-colors flex items-center justify-center gap-2 text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {strategicAnalysis.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Paid plans */}
          {advisoryPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: (i + 1) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'relative rounded-2xl p-6 flex flex-col',
                plan.highlighted
                  ? 'bg-[#0f0f0f] border-2 border-[#ff6a3d]'
                  : 'bg-[#0f0f0f]/50 border border-foreground/5'
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#ff6a3d] text-white px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-neutral-500 text-xs mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">
                    {formatCurrency(plan.price)}
                  </span>
                  <span className="text-neutral-500 text-sm">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#ff6a3d] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-400 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={scrollToContact}
                className={cn(
                  'w-full group flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all text-sm mt-auto',
                  plan.highlighted
                    ? 'bg-[#ff6a3d] text-white hover:bg-[#ff6a3d]/90'
                    : 'bg-white/5 hover:bg-white/10 text-white'
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
          className="text-center text-neutral-500 text-sm mt-12"
        >
          Custom enterprise solutions available on request.
        </motion.p>
      </div>
    </section>
  )
}
