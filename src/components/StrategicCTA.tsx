'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function StrategicCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/strategic-video.mp4" type="video/mp4" />
      </video>

      {/* Orange overlay */}
      <div className="absolute inset-0 bg-[#ff6a3d]/70" />

      {/* Dark content container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-xl mx-auto text-center bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-8 sm:px-8 sm:py-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/70 mb-3 block"
          >
            First Step
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight"
          >
            0 DKK — Strategic Analysis
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-white/85 mb-5 max-w-md mx-auto"
          >
            Get a clear, expert breakdown of your current setup and where you&apos;re losing opportunities.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            onClick={scrollToContact}
            className="w-full sm:w-auto px-8 py-3 bg-[#ff6a3d] text-black font-semibold rounded-full hover:bg-[#ff6a3d]/90 transition-colors inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Request Analysis
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
