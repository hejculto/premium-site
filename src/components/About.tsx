'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Globe, Layers } from 'lucide-react'

function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="px-4 py-3 border-2 border-white/30 text-white rounded-full hover:bg-[#ff6a3d] hover:border-[#ff6a3d] transition-all duration-300 flex items-center gap-2"
      style={{ display: show ? 'flex' : 'none' }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
      <span className="text-sm font-medium">Til top</span>
    </motion.button>
  )
}

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
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8">
            Your partner in digital growth
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-lg text-neutral-400 leading-relaxed">
              With more than <span className="text-[#ff6a3d] font-semibold">18 years of experience</span>, I help businesses build digital systems that do more than look good — they support growth, improve performance, and create real business value.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              My work combines <span className="text-[#ff6a3d] font-semibold">strategy, design, ecommerce, and marketing</span>, shaped by <span className="text-[#ff6a3d] font-semibold">international experience and hands-on work with businesses in Denmark</span>. I also collaborate with a trusted team of specialists, allowing me to support each client with the right mix of skills to reach their goals.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-[#ff6a3d]">18+</span>
              <p className="text-xs text-neutral-500 mt-2 uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe size={40} strokeWidth={1.5} className="text-[#ff6a3d] mb-2" />
              <p className="text-xs text-neutral-500 uppercase tracking-wide">International Experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Layers size={40} strokeWidth={1.5} className="text-[#ff6a3d] mb-2" />
              <p className="text-xs text-neutral-500 uppercase tracking-wide">Multidisciplinary</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.linkedin.com/in/cesarmaldo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-medium tracking-wide border-2 border-white/30 text-white rounded-full hover:bg-[#ff6a3d] hover:border-[#ff6a3d] transition-all duration-300"
            >
              View LinkedIn profile
            </a>
            <BackToTop />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { BackToTop }
