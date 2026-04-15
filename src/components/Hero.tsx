'use client'

import { motion } from 'framer-motion'
import { hero } from '@/data/content'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Capa 1: Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Capa 2: Overlay naranja */}
      <div 
        className="absolute inset-0 bg-[#ff6a3d] z-10"
        style={{ mixBlendMode: 'multiply' }}
      />
      
      {/* Fallback overlay naranja semitransparente */}
      <div 
        className="absolute inset-0 bg-[#ff6a3d]/70 z-[11] pointer-events-none"
        style={{ mixBlendMode: 'normal' }}
      />

      {/* Capa 3: Contenido */}
      <div className="container-premium relative z-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-bold mb-8 leading-[0.9]"
            style={{ 
              fontSize: 'clamp(3.75rem, 18vw, 9rem)',
              letterSpacing: '-0.05em'
            }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/90 max-w-xl mx-auto"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
          >
            {hero.subheadline}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
