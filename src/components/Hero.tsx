'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { hero } from '@/data/content'

const INTRO_TEXT = 'Hej...'
const HEADLINE = hero.headline

function Typewriter({ text, className, speed = 0.05 }: { text: string; className?: string; speed?: number }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, text.length * speed * 1000)
    return () => clearInterval(interval)
  }, [text, speed])

  return <span className={className}>{displayText}</span>
}

export function Hero() {
  const [phase, setPhase] = useState<'intro' | 'transition' | 'complete'>('intro')
  const [showIntro, setShowIntro] = useState(true)
  const [showHeadline, setShowHeadline] = useState(false)
  const [showRest, setShowRest] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setShowHeadline(true)
      setShowRest(true)
      setPhase('complete')
      return
    }

    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setShowIntro(false)
      await new Promise(resolve => setTimeout(resolve, 300))
      setShowHeadline(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setShowRest(true)
      setPhase('complete')
    }

    sequence()
  }, [prefersReducedMotion])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <video
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero-video-mobile.mp4" type="video/mp4" />
      </video>

      <div 
        className="absolute inset-0 bg-[#ff6a3d] z-10"
        style={{ mixBlendMode: 'multiply' }}
      />
      
      <div 
        className="absolute inset-0 bg-[#ff6a3d]/40 z-[11] pointer-events-none"
        style={{ mixBlendMode: 'normal' }}
      />

      <div className="container-premium relative z-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-[clamp(3.75rem,18vw,9rem)] mb-8 flex items-center justify-center leading-[0.9] relative">
            <AnimatePresence mode="wait">
              {showIntro && (
                <motion.span
                  key="intro"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  className="text-white font-bold absolute"
                  style={{ 
                    fontSize: 'clamp(3.75rem, 18vw, 9rem)',
                    letterSpacing: '-0.05em'
                  }}
                >
                  <Typewriter text={INTRO_TEXT} speed={0.4} />
                </motion.span>
              )}
            </AnimatePresence>
            
            {showHeadline && (
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-white font-bold absolute"
                style={{ 
                  fontSize: 'clamp(3.75rem, 18vw, 9rem)',
                  letterSpacing: '-0.05em'
                }}
              >
                {prefersReducedMotion ? HEADLINE : <Typewriter text={HEADLINE} speed={0.04} />}
              </motion.h1>
            )}
          </div>

          {showRest && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="text-white/90 max-w-xl mx-auto mb-8"
                style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
              >
                {hero.subheadline}
              </p>

              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-block px-8 py-3 text-white border-2 border-white rounded-full text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
              >
                {hero.secondaryCta?.label || 'Lær mig at kende'}
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>

      {showRest && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}