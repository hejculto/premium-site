'use client'

import { motion } from 'framer-motion'

export function TransitionSection() {
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
            A website is not the goal — growth is.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Most businesses invest in websites that look good but fail to perform. I help brands turn their digital presence into a strategic asset — combining design, performance, and AI-driven systems to attract, convert, and scale.
          </p>
          <p className="text-lg md:text-xl text-[#ff6a3d] italic font-bold mt-6 max-w-2xl mx-auto text-center">
            &ldquo;We are the right solution for small<br />and medium-sized businesses&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
