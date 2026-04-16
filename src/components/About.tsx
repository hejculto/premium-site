'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '18+', label: 'Years Experience' },
  { value: '∞', label: 'International Experience' },
  { value: '∞', label: 'Multidisciplinary Approach' },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-[#0f0f0f]">
      <div className="container-premium px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-mono uppercase tracking-wider text-[#ff6a3d] mb-6 block">
            About
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8">
            Your partner in digital growth
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-xl sm:text-2xl md:text-lg text-neutral-400 leading-relaxed">
              With more than 18 years of experience, I help businesses build digital systems that do more than look good — they support growth, improve performance, and create real business value.
            </p>
            <p className="text-xl sm:text-2xl md:text-lg text-neutral-400 leading-relaxed">
              My work combines strategy, design, ecommerce, and marketing, shaped by international experience and hands-on work with businesses in Denmark. I also collaborate with a trusted team of specialists, allowing me to support each client with the right mix of skills to reach their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="text-5xl sm:text-6xl md:text-5xl font-bold text-[#ff6a3d]">{stat.value}</span>
                <p className="text-base sm:text-lg md:text-sm text-neutral-500 mt-2 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center sm:justify-start">
            <a
              href="https://www.linkedin.com/in/cesarmaldo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-medium tracking-wide border-2 border-white/30 text-white rounded-full hover:bg-[#ff6a3d] hover:border-[#ff6a3d] transition-all duration-300"
            >
              View LinkedIn profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
