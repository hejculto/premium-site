'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { advisoryPlans } from '@/data/content'
import { formatCurrency, cn } from '@/lib/utils'
import { Modal, FormModalContent } from './Modal'

const strategicAnalysis = {
  id: 'analysis',
  modalTitle: 'Strategisk analyse — 0 DKK',
  planLabel: 'Strategisk analyse',
}

const pricingPlans = [
  {
    id: 'monthly',
    modalTitle: 'Månedlig samarbejde — 5.000 kr.',
    planLabel: 'Månedlig',
  },
  {
    id: 'quarterly',
    modalTitle: 'Kvartalsvis samarbejde — 40.000 kr.',
    planLabel: 'Kvartalsvis',
  },
  {
    id: 'annual',
    modalTitle: 'Årligt samarbejde — 120.000 kr.',
    planLabel: 'Årlig',
  },
]

export function AdvisoryPlans() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<{ id: string; modalTitle: string; planLabel: string } | null>(null)

  const openModal = (plan: { id: string; modalTitle: string; planLabel: string }) => {
    setSelectedPlan(plan)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedPlan(null)
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
            SAMARBEJDE
          </span>
          <h2 className="heading-section">
            Strategisk samarbejde,
            <br />
            <span className="text-gradient">målbare resultater</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 leading-relaxed">
            Vælg det samarbejde, der passer til dine behov. Alle løsninger inkluderer direkte adgang, strategisk sparring og fokus på vækst.
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
            className="bg-[#0f0f0f] rounded-2xl p-6 border border-[#ff6a3d]/30 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff6a3d] mb-2 block">
                FØRSTE SKRIDT
              </span>
              <h3 className="text-lg font-semibold text-white mb-2">
                Strategisk analyse
              </h3>
              <p className="text-neutral-500 text-sm mb-3">
                Få et klart overblik over din nuværende opsætning og hvor du mister muligheder.
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Hjemmeside & konverteringsanalyse',
                  'Strategi & positionering',
                  'Annoncering performance',
                  'AI muligheder & automatisering',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#ff6a3d] flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-3xl font-bold text-[#ff6a3d] mb-1">0 DKK</div>
              <p className="text-xs text-neutral-500 mb-4">Engangsydelse</p>
            </div>
            <motion.button
              onClick={() => openModal(strategicAnalysis)}
              className="w-full px-5 py-3 bg-[#ff6a3d] text-white font-medium rounded-xl hover:bg-[#ff6a3d]/90 transition-colors flex items-center justify-center gap-2 text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Få din analyse
              <ArrowRight className="w-4 h-4" />
            </motion.button>
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
                'relative rounded-2xl p-6 flex flex-col justify-between',
                plan.highlighted
                  ? 'bg-[#0f0f0f] border-2 border-[#ff6a3d]'
                  : 'bg-[#0f0f0f]/50 border border-foreground/5'
              )}
            >
              {plan.id === 'monthly' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white border border-white/30 px-3 py-1 rounded-full">
                    Starter
                  </span>
                </div>
              )}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-mono uppercase tracking-wider bg-[#ff6a3d] text-white px-3 py-1 rounded-full">
                    Mest populær
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-neutral-500 text-xs mb-3">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-bold text-white">
                    {formatCurrency(plan.price)}
                  </span>
                  <span className="text-neutral-500 text-sm">/ {plan.period}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#ff6a3d] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-400 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                onClick={() => openModal(pricingPlans[i])}
                className={cn(
                  'w-full group flex items-center justify-center gap-2 py-3 rounded-xl font-medium transition-all text-sm',
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

      <Modal isOpen={modalOpen} onClose={closeModal}>
        {selectedPlan && (
          <FormModalContent plan={selectedPlan} onClose={closeModal} />
        )}
      </Modal>
    </section>
  )
}